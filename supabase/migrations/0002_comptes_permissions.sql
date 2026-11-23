-- Vupay — étape 2 : comptes et permissions.
-- 1. Rôles multiples : une même personne peut être diffuseur ET annonceur (soldes et droits distincts).
-- 2. Rôles d'administration détaillés : chaque admin n'a que les permissions de son rôle.
-- 3. Création du profil par une fonction : le téléphone vient de l'authentification, pas du navigateur.
-- 4. Vérification d'identité (KYC) et vérification d'entreprise décidées par un admin habilité.
-- 5. Stockage privé des pièces : chacun dépose dans son dossier, seuls les admins habilités relisent.
-- Les règles sont reprises côté application dans apps/web/src/lib/permissions.ts.

-- 1. Rôles multiples -----------------------------------------------------------
create table profile_roles (
  profil_id uuid not null references profiles (id) on delete cascade,
  role role_utilisateur not null,
  cree_le timestamptz not null default now(),
  primary key (profil_id, role)
);
alter table profile_roles enable row level security;

insert into profile_roles (profil_id, role) select id, role from profiles;

-- 2. Permissions d'administration ---------------------------------------------
create or replace function est_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from profiles p join profile_roles r on r.profil_id = p.id and r.role = 'admin'
    where p.id = auth.uid() and not p.suspendu);
$$;

-- Même table de correspondance que PERMISSIONS_ADMIN dans permissions.ts.
create or replace function admin_peut(permission text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from profiles p join profile_roles r on r.profil_id = p.id and r.role = 'admin'
    where p.id = auth.uid() and not p.suspendu and (
      p.role_admin = 'super_admin' or
      (p.role_admin = 'moderateur' and permission in ('moderer_campagnes', 'valider_kyc', 'verifier_entreprises')) or
      (p.role_admin = 'finance' and permission in ('gerer_retraits', 'voir_journal')) or
      (p.role_admin = 'support' and permission in ('suspendre_utilisateurs'))));
$$;

create or replace function a_role(r role_utilisateur) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from profiles p join profile_roles pr on pr.profil_id = p.id and pr.role = r
    where p.id = auth.uid() and not p.suspendu);
$$;

-- Le rôle unique de la V1 est remplacé par profile_roles.
drop policy profil_creation on profiles;
alter table profiles drop column role;

-- 3. Profil ----------------------------------------------------------------------
-- Colonnes sensibles : chacune exige une permission précise. Les mises à jour faites par
-- un déclencheur Vupay (pg_trigger_depth() > 1) ou par le serveur (auth.uid() nul) passent.
create or replace function proteger_colonnes_profil() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null or pg_trigger_depth() > 1 then
    return new;
  end if;
  if (new.role_admin is distinct from old.role_admin or new.niveau is distinct from old.niveau or
      new.telephone is distinct from old.telephone or new.id is distinct from old.id)
     and not admin_peut('gerer_admins') then
    raise exception 'Modification non autorisée';
  end if;
  if new.suspendu is distinct from old.suspendu and not admin_peut('suspendre_utilisateurs') then
    raise exception 'Modification non autorisée';
  end if;
  if new.statut_kyc is distinct from old.statut_kyc and not admin_peut('valider_kyc') then
    raise exception 'Modification non autorisée';
  end if;
  return new;
end $$;

drop policy profil_maj on profiles;
create policy profil_maj on profiles for update
  using (id = auth.uid() or est_admin())
  with check (id = auth.uid() or est_admin());

-- Création du profil à la première connexion. Le téléphone est celui vérifié par OTP.
create or replace function creer_mon_profil(p_pays pays, p_espace role_utilisateur, p_ville text default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_tel text;
begin
  if auth.uid() is null then
    raise exception 'Connexion requise';
  end if;
  if p_espace not in ('diffuseur', 'annonceur') then
    raise exception 'Espace non autorisé';
  end if;
  select '+' || ltrim(phone, '+') into v_tel from auth.users where id = auth.uid();
  if v_tel is null then
    raise exception 'Numéro de téléphone non vérifié';
  end if;
  insert into profiles (id, telephone, pays, ville) values (auth.uid(), v_tel, p_pays, nullif(trim(p_ville), ''));
  insert into profile_roles (profil_id, role) values (auth.uid(), p_espace);
end $$;
revoke execute on function creer_mon_profil(pays, role_utilisateur, text) from public, anon;

-- Rôles : chacun peut s'ouvrir l'espace diffuseur ou annonceur ; l'espace admin est attribué
-- uniquement par un super admin.
create policy roles_lecture on profile_roles for select using (profil_id = auth.uid() or est_admin());
create policy roles_ajout on profile_roles for insert with check (
  (profil_id = auth.uid() and role in ('diffuseur', 'annonceur') and
   exists (select 1 from profiles where id = auth.uid() and not suspendu))
  or admin_peut('gerer_admins'));
create policy roles_retrait on profile_roles for delete using (admin_peut('gerer_admins'));

-- Paramètres : modification réservée au super admin.
drop policy parametres_admin on settings;
create policy parametres_admin on settings for all
  using (admin_peut('modifier_parametres')) with check (admin_peut('modifier_parametres'));

-- 4a. Vérification d'identité (KYC) -----------------------------------------------
-- Un seul dossier actif (en attente ou validé) par personne.
create unique index kyc_un_dossier_actif on kyc_documents (profil_id) where statut in ('en_attente', 'valide');

drop policy kyc_depot on kyc_documents;
create policy kyc_depot on kyc_documents for insert with check (
  profil_id = auth.uid() and statut = 'en_attente' and traite_par is null and motif_refus is null and
  chemin_piece like auth.uid()::text || '/%' and chemin_selfie like auth.uid()::text || '/%' and
  exists (select 1 from profiles where id = auth.uid() and not suspendu));
create policy kyc_decision on kyc_documents for update
  using (admin_peut('valider_kyc')) with check (admin_peut('valider_kyc'));

create or replace function decision_kyc() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.profil_id is distinct from old.profil_id or new.chemin_piece is distinct from old.chemin_piece or
     new.chemin_selfie is distinct from old.chemin_selfie then
    raise exception 'Les pièces déposées ne peuvent pas être modifiées';
  end if;
  if old.statut <> 'en_attente' and new.statut is distinct from old.statut then
    raise exception 'Dossier déjà traité';
  end if;
  if new.statut = 'refuse' and coalesce(trim(new.motif_refus), '') = '' then
    raise exception 'Un refus doit être motivé';
  end if;
  if new.statut is distinct from old.statut then
    new.traite_par := auth.uid();
  end if;
  return new;
end $$;
create trigger kyc_decision before update on kyc_documents for each row execute function decision_kyc();

create or replace function synchroniser_kyc() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' or new.statut is distinct from old.statut then
    update profiles set statut_kyc = new.statut where id = new.profil_id;
  end if;
  if tg_op = 'UPDATE' and new.statut is distinct from old.statut and auth.uid() is not null then
    insert into audit_logs (admin_id, action, cible, details)
    values (auth.uid(), 'kyc_' || new.statut, new.profil_id::text, jsonb_build_object('dossier', new.id, 'motif', new.motif_refus));
  end if;
  return new;
end $$;
create trigger kyc_synchro after insert or update on kyc_documents for each row execute function synchroniser_kyc();

-- 4b. Vérification d'entreprise ---------------------------------------------------
alter table advertisers
  add column nif text,
  add column chemin_document text,  -- bucket privé « entreprises » : RCCM, NIF ou équivalent
  add column statut_verification statut_kyc not null default 'non_soumis',
  add column motif_refus text,
  add column verifie_par uuid references profiles (id),
  add column verifie_le timestamptz;

drop policy annonceur_creation on advertisers;
create policy annonceur_creation on advertisers for insert with check (
  proprietaire_id = auth.uid() and a_role('annonceur'));
drop policy annonceur_maj on advertisers;
create policy annonceur_maj on advertisers for update
  using (proprietaire_id = auth.uid() or admin_peut('verifier_entreprises'))
  with check (proprietaire_id = auth.uid() or admin_peut('verifier_entreprises'));

create or replace function proteger_entreprise() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  v_verificateur boolean := auth.uid() is null or admin_peut('verifier_entreprises');
begin
  if tg_op = 'INSERT' then
    if not v_verificateur then
      if new.statut_verification not in ('non_soumis', 'en_attente') then
        raise exception 'Modification non autorisée';
      end if;
      new.verifie_par := null; new.verifie_le := null; new.motif_refus := null;
    end if;
  else
    if new.proprietaire_id is distinct from old.proprietaire_id then
      raise exception 'Le propriétaire ne peut pas changer';
    end if;
    if not v_verificateur then
      if new.verifie_par is distinct from old.verifie_par or new.verifie_le is distinct from old.verifie_le or
         new.motif_refus is distinct from old.motif_refus or
         (new.statut_verification is distinct from old.statut_verification and new.statut_verification <> 'en_attente') then
        raise exception 'Modification non autorisée';
      end if;
      -- Une entreprise validée qui change d'identité repasse en vérification.
      if old.statut_verification = 'valide' and (new.raison_sociale, new.rccm, new.nif, new.chemin_document, new.pays)
         is distinct from (old.raison_sociale, old.rccm, old.nif, old.chemin_document, old.pays) then
        new.statut_verification := 'en_attente';
      end if;
    elsif new.statut_verification is distinct from old.statut_verification
          and new.statut_verification in ('valide', 'refuse') then
      if new.statut_verification = 'refuse' and coalesce(trim(new.motif_refus), '') = '' then
        raise exception 'Un refus doit être motivé';
      end if;
      new.verifie_par := auth.uid(); new.verifie_le := now();
      if auth.uid() is not null then
        insert into audit_logs (admin_id, action, cible, details)
        values (auth.uid(), 'entreprise_' || new.statut_verification, new.id::text, jsonb_build_object('motif', new.motif_refus));
      end if;
    end if;
  end if;
  if new.statut_verification = 'en_attente' and new.chemin_document is null then
    raise exception 'Document justificatif requis';
  end if;
  if new.chemin_document is not null and new.chemin_document not like new.proprietaire_id::text || '/%' then
    raise exception 'Document hors du dossier du propriétaire';
  end if;
  return new;
end $$;
create trigger entreprise_protegee before insert or update on advertisers
  for each row execute function proteger_entreprise();

create or replace function entreprise_verifiee(p_annonceur uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from advertisers where id = p_annonceur and statut_verification = 'valide');
$$;

-- Campagnes : le brouillon est libre ; la soumission à la modération exige le rôle annonceur
-- et une entreprise vérifiée.
drop policy campagne_creation on campaigns;
create policy campagne_creation on campaigns for insert with check (
  a_role('annonceur') and
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()) and
  (statut = 'brouillon' or (statut = 'en_moderation' and entreprise_verifiee(annonceur_id))));
drop policy campagne_maj on campaigns;
create policy campagne_maj on campaigns for update using (
  statut in ('brouillon', 'en_moderation') and a_role('annonceur') and
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()))
  with check (
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()) and
  (statut = 'brouillon' or (statut = 'en_moderation' and entreprise_verifiee(annonceur_id))));
create policy campagne_moderation on campaigns for update
  using (admin_peut('moderer_campagnes')) with check (admin_peut('moderer_campagnes'));

-- 5. Stockage privé ------------------------------------------------------------------
do $$
begin
  if to_regclass('storage.buckets') is null then
    return;
  end if;
  insert into storage.buckets (id, name, public) values ('kyc', 'kyc', false), ('entreprises', 'entreprises', false)
    on conflict (id) do nothing;

  -- Dépôt dans son propre dossier (<id utilisateur>/fichier) ; aucune modification ni suppression ensuite.
  create policy pieces_depot on storage.objects for insert to authenticated with check (
    bucket_id in ('kyc', 'entreprises') and (storage.foldername(name))[1] = auth.uid()::text);
  create policy pieces_lecture on storage.objects for select to authenticated using (
    (bucket_id in ('kyc', 'entreprises') and (storage.foldername(name))[1] = auth.uid()::text) or
    (bucket_id = 'kyc' and admin_peut('valider_kyc')) or
    (bucket_id = 'entreprises' and admin_peut('verifier_entreprises')));
end $$;
