-- Vupay — étape 3 : publicités.
-- 1. La campagne devient une fiche produit publique (photo, titre, description, prix communiqué),
--    avec une adresse stable /p/<slug> qui ne change jamais.
-- 2. Destinations de contact préenregistrées et contrôlées en base (jamais d'adresse libre).
-- 3. Modération : l'annonceur prépare et soumet ; seul un modérateur active ou refuse (motif).
-- 4. Accès public limité par deux fonctions : la fiche (sans adresses) et la destination d'une
--    campagne active. Aucune redirection vers une adresse non enregistrée.
-- Tarifs et budget : non validés, ils relèvent de l'étape 5 (aucune vue n'est rémunérée).

-- 1. Campagne V2 ----------------------------------------------------------------------------
alter table campaigns
  alter column objectif set default 'clics',
  alter column chemin_creatif drop not null,
  alter column texte drop not null,
  alter column lien_cible drop not null,
  alter column budget drop not null,
  alter column debut drop not null,
  alter column fin drop not null,
  alter column reseaux set default '{whatsapp}',
  -- Le contrôle V1 « budget >= 25000 » reste : il laisse passer un budget vide (brouillon).
  add constraint campagne_sans_vues check (objectif = 'clics'),
  add column slug text not null unique default substr(replace(gen_random_uuid()::text, '-', ''), 1, 12),
  add column prix bigint check (prix is null or prix >= 0),          -- prix communiqué, entier FCFA
  add column modere_par uuid references profiles (id),
  add column modere_le timestamptz,
  add constraint campagne_titre check (length(trim(titre)) between 3 and 80),
  add constraint campagne_texte check (texte is null or length(texte) <= 1000);

-- 2. Destinations ------------------------------------------------------------------------------
create type action_contact as enum ('numero_whatsapp', 'catalogue_whatsapp', 'envoyer_message', 'acheter');

-- Mêmes règles que destinationAutorisee() dans apps/web/src/lib/contacts.ts :
-- HTTPS, sans identifiant, sans port, ni adresse IP ni localhost ; WhatsApp pour les trois
-- actions de contact ; 500 caractères maximum.
create or replace function destination_valide(p_type action_contact, p_url text) returns boolean
language sql immutable set search_path = public as $$
  select p_url is not null and length(p_url) <= 500
    and p_url ~ '^https://[a-z0-9.-]+(/[^\s]*)?$'
    and p_url !~ '^https://[^/]*@'
    and p_url !~ '^https://[^/]*:'
    and p_url !~ '^https://(\d+\.){3}\d+(/|$)'
    and p_url !~ '^https://([^/]*\.)?localhost(/|$)'
    and (p_type = 'acheter' or p_url ~ '^https://(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|www\.whatsapp\.com)(/|$)');
$$;

create table campaign_destinations (
  id uuid primary key default gen_random_uuid(),
  campagne_id uuid not null references campaigns (id) on delete cascade,
  type action_contact not null,
  url text not null,
  libelle text not null check (length(trim(libelle)) between 2 and 40),
  cree_le timestamptz not null default now(),
  unique (campagne_id, type),
  constraint destination_controlee check (destination_valide(type, url))
);
alter table campaign_destinations enable row level security;

create or replace function campagne_modifiable(p_campagne uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from campaigns c join advertisers a on a.id = c.annonceur_id
    where c.id = p_campagne and a.proprietaire_id = auth.uid() and c.statut in ('brouillon', 'refusee'));
$$;

create policy destination_lecture on campaign_destinations for select using (
  est_admin() or campagne_id in (
    select c.id from campaigns c join advertisers a on a.id = c.annonceur_id where a.proprietaire_id = auth.uid()));
create policy destination_ajout on campaign_destinations for insert with check (a_role('annonceur') and campagne_modifiable(campagne_id));
create policy destination_maj on campaign_destinations for update
  using (a_role('annonceur') and campagne_modifiable(campagne_id))
  with check (a_role('annonceur') and campagne_modifiable(campagne_id));
create policy destination_retrait on campaign_destinations for delete using (a_role('annonceur') and campagne_modifiable(campagne_id));

-- 3. Modération ---------------------------------------------------------------------------------
-- Les visiteurs ne lisent plus la table : ils passent par fiche_publique().
alter policy campagne_lecture on campaigns using (
  (statut = 'active' and auth.uid() is not null) or est_admin() or
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()));

alter policy campagne_creation on campaigns with check (
  a_role('annonceur') and statut = 'brouillon' and
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()));

alter policy campagne_maj on campaigns
  using (a_role('annonceur') and annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()))
  with check (
    annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()) and
    (statut <> 'en_moderation' or entreprise_verifiee(annonceur_id)));
-- campagne_moderation (0002) reste : admin_peut('moderer_campagnes').

create or replace function proteger_campagne() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  v_moderateur boolean := auth.uid() is null or admin_peut('moderer_campagnes');
  v_contenu_change boolean := (new.titre, new.texte, new.prix, new.chemin_creatif, new.debut, new.fin, new.reseaux, new.budget)
                              is distinct from (old.titre, old.texte, old.prix, old.chemin_creatif, old.debut, old.fin, old.reseaux, old.budget);
begin
  if new.slug is distinct from old.slug or new.annonceur_id is distinct from old.annonceur_id or new.id is distinct from old.id then
    raise exception 'L''adresse et l''annonceur d''une campagne ne changent pas';
  end if;

  if not v_moderateur then
    -- Annonceur : prépare en brouillon (ou après refus), soumet, ou retire sa soumission.
    if new.modere_par is distinct from old.modere_par or new.modere_le is distinct from old.modere_le or
       new.motif_refus is distinct from old.motif_refus then
      raise exception 'Modification non autorisée';
    end if;
    if old.statut in ('brouillon', 'refusee') then
      if new.statut not in (old.statut, 'brouillon', 'en_moderation') then
        raise exception 'Seul un modérateur active une campagne';
      end if;
    elsif old.statut = 'en_moderation' then
      if v_contenu_change or new.statut not in ('en_moderation', 'brouillon') then
        raise exception 'Campagne en modération : retirez-la d''abord pour la modifier';
      end if;
    else
      raise exception 'Campagne publiée : elle ne se modifie plus';
    end if;
  else
    -- Modérateur : décide, met en pause ou relance ; ne réécrit pas le contenu.
    if v_contenu_change and auth.uid() is not null then
      raise exception 'Un modérateur ne modifie pas le contenu d''une campagne';
    end if;
    if new.statut is distinct from old.statut then
      if not ((old.statut = 'en_moderation' and new.statut in ('active', 'refusee', 'brouillon')) or
              (old.statut = 'active' and new.statut in ('en_pause', 'terminee')) or
              (old.statut = 'en_pause' and new.statut in ('active', 'terminee'))) then
        raise exception 'Changement de statut impossible : % vers %', old.statut, new.statut;
      end if;
      if new.statut = 'refusee' and coalesce(trim(new.motif_refus), '') = '' then
        raise exception 'Un refus doit être motivé';
      end if;
      if old.statut = 'en_moderation' and auth.uid() is not null then
        new.modere_par := auth.uid();
        new.modere_le := now();
        insert into audit_logs (admin_id, action, cible, details)
        values (auth.uid(), 'campagne_' || new.statut, new.id::text, jsonb_build_object('motif', new.motif_refus));
      end if;
    end if;
  end if;

  -- Une campagne soumise doit être complète.
  if new.statut = 'en_moderation' and old.statut <> 'en_moderation' then
    if coalesce(trim(new.texte), '') = '' or new.chemin_creatif is null then
      raise exception 'Campagne incomplète : description et photo requises';
    end if;
    if new.debut is null or new.fin is null or new.fin < new.debut or new.fin < current_date then
      raise exception 'Campagne incomplète : dates de diffusion requises';
    end if;
    if not exists (select 1 from campaign_destinations where campagne_id = new.id) then
      raise exception 'Campagne incomplète : au moins une destination de contact';
    end if;
    new.motif_refus := null;
  end if;
  return new;
end $$;
create trigger campagne_protegee before update on campaigns for each row execute function proteger_campagne();

-- Création : toujours en brouillon, sans décision de modération.
create or replace function nouvelle_campagne() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is not null and not admin_peut('moderer_campagnes') then
    new.modere_par := null; new.modere_le := null; new.motif_refus := null;
    new.slug := substr(replace(gen_random_uuid()::text, '-', ''), 1, 12);
  end if;
  if new.chemin_creatif is not null and new.chemin_creatif not like
     (select proprietaire_id::text from advertisers where id = new.annonceur_id) || '/%' then
    raise exception 'Photo hors du dossier de l''annonceur';
  end if;
  return new;
end $$;
create trigger campagne_creee before insert on campaigns for each row execute function nouvelle_campagne();

create or replace function photo_campagne_controlee() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.chemin_creatif is distinct from old.chemin_creatif and new.chemin_creatif is not null and new.chemin_creatif not like
     (select proprietaire_id::text from advertisers where id = new.annonceur_id) || '/%' then
    raise exception 'Photo hors du dossier de l''annonceur';
  end if;
  return new;
end $$;
create trigger campagne_photo before update on campaigns for each row execute function photo_campagne_controlee();

-- 4. Accès public ------------------------------------------------------------------------------
create or replace function campagne_diffusable(c campaigns) returns boolean
language sql stable set search_path = public as $$
  select c.statut = 'active' and (c.debut is null or c.debut <= current_date) and (c.fin is null or c.fin >= current_date);
$$;

-- Fiche publique : jamais les adresses de destination, ni budget, ni tarifs. Null si la
-- campagne n'a jamais été publiée.
create or replace function fiche_publique(p_slug text) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'slug', c.slug,
    'titre', c.titre,
    'description', c.texte,
    'prix', c.prix,
    'photo', c.chemin_creatif,
    'annonceur', a.raison_sociale,
    'disponible', campagne_diffusable(c),
    'actions', case when campagne_diffusable(c) then coalesce((
      select jsonb_agg(jsonb_build_object('type', d.type, 'libelle', d.libelle) order by d.type)
      from campaign_destinations d where d.campagne_id = c.id), '[]'::jsonb) else '[]'::jsonb end)
  from campaigns c join advertisers a on a.id = c.annonceur_id
  where c.slug = p_slug and c.statut in ('active', 'en_pause', 'terminee');
$$;

-- Adresse de sortie : seulement celle enregistrée et contrôlée, et seulement si la campagne
-- est diffusable aujourd'hui.
create or replace function destination_publique(p_slug text, p_type action_contact) returns text
language sql stable security definer set search_path = public as $$
  select d.url from campaigns c join campaign_destinations d on d.campagne_id = c.id and d.type = p_type
  where c.slug = p_slug and campagne_diffusable(c) and destination_valide(d.type, d.url);
$$;

grant execute on function fiche_publique(text), destination_publique(text, action_contact) to anon, authenticated;

-- 5. Photos des produits : compartiment public (affichage rapide), dépôt dans son dossier ----
do $$
begin
  if to_regclass('storage.buckets') is null then
    return;
  end if;
  insert into storage.buckets (id, name, public) values ('produits', 'produits', true) on conflict (id) do nothing;
  create policy produits_depot on storage.objects for insert to authenticated with check (
    bucket_id = 'produits' and (storage.foldername(name))[1] = auth.uid()::text and a_role('annonceur'));
end $$;
