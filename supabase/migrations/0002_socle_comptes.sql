-- Vupay — Lot 1 · Socle : comptes, espaces (rôles multiples) et profils.
--
-- Règle produit V2 : une même identité (un numéro de téléphone) peut être diffuseur
-- et annonceur, avec des permissions distinctes. Les espaces choisis vivent dans
-- `espaces`. La colonne `role` reste le rôle principal ; seule la clé service peut
-- y mettre 'admin' (jamais un utilisateur depuis l'application).

-- Espaces ---------------------------------------------------------------------
alter table profiles
  add column espaces role_utilisateur[] not null default '{diffuseur}',
  add column nom_affiche text check (char_length(btrim(nom_affiche)) between 2 and 60);

alter table profiles
  add constraint profil_espaces_valides check (
    cardinality(espaces) between 1 and 2 and not ('admin' = any (espaces))
  );

comment on column profiles.espaces is
  'Espaces ouverts par l''utilisateur : diffuseur et/ou annonceur. Jamais admin.';
comment on column profiles.role is
  'Rôle principal. ''admin'' est posé uniquement avec la clé service (voir docs/SOCLE.md).';

-- Création du profil ----------------------------------------------------------
-- Le téléphone vient toujours du compte Auth vérifié par OTP, jamais du formulaire.
-- Les colonnes sensibles reçoivent leurs valeurs de départ, quoi que le client envoie.
create or replace function preparer_profil() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  tel text;
begin
  if auth.uid() is not null and not est_admin() then
    select phone into tel from auth.users where id = auth.uid();
    if tel is null or btrim(tel) = '' then
      raise exception 'Numéro de téléphone non vérifié';
    end if;
    new.telephone := '+' || ltrim(tel, '+');
    new.role := new.espaces[1];
    new.role_admin := null;
    new.niveau := 'bronze';
    new.statut_kyc := 'non_soumis';
    new.suspendu := false;
    new.parrain_id := null;
    new.code_parrain := null;
    new.cree_le := now();
  end if;
  if new.code_parrain is null then
    new.code_parrain := 'VU' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
  end if;
  return new;
end $$;

create trigger profil_preparation before insert on profiles
  for each row execute function preparer_profil();

-- Mise à jour : en plus du rôle, du niveau, du KYC et de la suspension, l'utilisateur
-- ne peut changer ni son téléphone, ni son code ou son parrain, ni sa date de création.
create or replace function proteger_colonnes_profil() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not est_admin() and auth.uid() is not null and (
    new.id is distinct from old.id or
    new.role is distinct from old.role or new.role_admin is distinct from old.role_admin or
    new.niveau is distinct from old.niveau or new.statut_kyc is distinct from old.statut_kyc or
    new.suspendu is distinct from old.suspendu or new.telephone is distinct from old.telephone or
    new.code_parrain is distinct from old.code_parrain or new.parrain_id is distinct from old.parrain_id or
    new.cree_le is distinct from old.cree_le) then
    raise exception 'Modification non autorisée';
  end if;
  return new;
end $$;

-- Un utilisateur suspendu ne modifie plus son profil.
drop policy profil_maj on profiles;
create policy profil_maj on profiles for update
  using ((id = auth.uid() and not suspendu) or est_admin())
  with check ((id = auth.uid() and not suspendu) or est_admin());

-- Espace annonceur ------------------------------------------------------------
-- Seul un profil ayant ouvert l'espace annonceur (et non suspendu) crée une entreprise.
create or replace function a_espace(e role_utilisateur) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from profiles where id = auth.uid() and e = any (espaces) and not suspendu
  );
$$;

drop policy annonceur_creation on advertisers;
create policy annonceur_creation on advertisers for insert
  with check (proprietaire_id = auth.uid() and a_espace('annonceur'));

drop policy annonceur_maj on advertisers;
create policy annonceur_maj on advertisers for update
  using (proprietaire_id = auth.uid() and a_espace('annonceur'))
  with check (proprietaire_id = auth.uid() and a_espace('annonceur'));
