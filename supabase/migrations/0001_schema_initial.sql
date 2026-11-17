-- Vupay — schéma initial (lot 1). Toutes les sommes en entiers FCFA (bigint), jamais de décimales.
-- RLS activée sur chaque table dès sa création. Les soldes ne sont jamais stockés :
-- ils sont calculés depuis ledger_entries (vue soldes).

create extension if not exists pgcrypto;

-- Types ----------------------------------------------------------------------
create type role_utilisateur as enum ('diffuseur', 'annonceur', 'admin');
create type role_admin as enum ('super_admin', 'moderateur', 'finance', 'support');
create type reseau as enum ('whatsapp', 'instagram', 'facebook', 'tiktok', 'snapchat', 'telegram');
create type pays as enum ('ML', 'CI', 'SN', 'BF', 'BJ', 'TG', 'NE', 'GW');
create type niveau as enum ('bronze', 'argent', 'or');
create type statut_kyc as enum ('non_soumis', 'en_attente', 'valide', 'refuse');
create type objectif_campagne as enum ('vues', 'clics');
create type statut_campagne as enum ('brouillon', 'en_moderation', 'active', 'en_pause', 'terminee', 'refusee');
create type statut_preuve as enum ('en_attente', 'validee_auto', 'a_verifier', 'validee', 'refusee');
create type statut_retrait as enum ('demande', 'a_valider', 'en_cours', 'paye', 'echoue', 'annule');
create type type_ecriture as enum (
  'gain_vues', 'gain_clics', 'prime_parrainage', 'retrait', 'retrait_annule',
  'recharge_annonceur', 'debit_campagne', 'remboursement_annonceur', 'ajustement'
);

-- Profils --------------------------------------------------------------------
create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role role_utilisateur not null default 'diffuseur',
  role_admin role_admin,
  telephone text unique not null,
  pays pays not null,
  ville text,
  annee_naissance smallint check (annee_naissance between 1900 and 2100),
  sexe text check (sexe in ('F', 'M')),
  interets text[] not null default '{}',
  comptes_sociaux jsonb not null default '[]', -- [{reseau, utilisateur, portee_estimee}]
  niveau niveau not null default 'bronze',
  statut_kyc statut_kyc not null default 'non_soumis',
  code_parrain text unique,
  parrain_id uuid references profiles (id),
  suspendu boolean not null default false,
  cree_le timestamptz not null default now()
);

create or replace function est_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin' and not suspendu);
$$;

create table kyc_documents (
  id uuid primary key default gen_random_uuid(),
  profil_id uuid not null references profiles (id) on delete cascade,
  chemin_piece text not null,   -- bucket privé « kyc »
  chemin_selfie text not null,
  statut statut_kyc not null default 'en_attente',
  motif_refus text,
  traite_par uuid references profiles (id),
  cree_le timestamptz not null default now()
);

create table advertisers (
  id uuid primary key default gen_random_uuid(),
  proprietaire_id uuid not null references profiles (id),
  raison_sociale text not null,
  rccm text,
  pays pays not null,
  secteur text,
  cree_le timestamptz not null default now()
);

-- Campagnes ------------------------------------------------------------------
create table campaigns (
  id uuid primary key default gen_random_uuid(),
  annonceur_id uuid not null references advertisers (id),
  titre text not null,
  objectif objectif_campagne not null,
  chemin_creatif text not null,       -- visuel ou vidéo 9:16, 30 s max
  texte text not null,                 -- inclut la mention publicitaire
  lien_cible text not null check (lien_cible ~ '^https://'),
  reseaux reseau[] not null,
  ciblage jsonb not null default '{}', -- pays, villes, âges, sexe, intérêts, niveau minimum
  tarif_vue_annonceur bigint not null default 2,
  tarif_vue_diffuseur bigint not null default 1,
  tarif_clic_annonceur bigint not null default 20,
  tarif_clic_diffuseur bigint not null default 10,
  budget bigint not null check (budget >= 25000),
  plafond_par_diffuseur bigint,
  debut date not null,
  fin date not null check (fin >= debut),
  statut statut_campagne not null default 'brouillon',
  motif_refus text,
  cree_le timestamptz not null default now()
);

create table assignments (
  id uuid primary key default gen_random_uuid(),
  campagne_id uuid not null references campaigns (id),
  diffuseur_id uuid not null references profiles (id),
  reseau reseau not null,
  code_visuel text not null unique,  -- ex. ST-4K7, imprimé sur le visuel
  code_lien text not null unique,    -- vupay.app/c/<code_lien>
  publie_le timestamptz,
  cree_le timestamptz not null default now(),
  unique (campagne_id, diffuseur_id, reseau)
);

create table proofs (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null unique references assignments (id),
  chemin_capture text not null,      -- bucket privé « preuves »
  empreinte_image text not null unique, -- capture réutilisée → refus
  vues_lues integer,
  code_lu text,
  vues_validees integer,
  score_fraude smallint,
  motifs text[] not null default '{}',
  statut statut_preuve not null default 'en_attente',
  traite_par uuid references profiles (id),
  cree_le timestamptz not null default now()
);

create table clicks (
  id bigint generated always as identity primary key,
  assignment_id uuid not null references assignments (id),
  clique_le timestamptz not null default now(),
  ip_hachee text not null,
  appareil text,
  valide boolean not null
);
create index clicks_assignment_date on clicks (assignment_id, clique_le);

-- Argent ---------------------------------------------------------------------
-- Journal comptable unique : tout mouvement d'argent passe ici.
create table ledger_entries (
  id bigint generated always as identity primary key,
  profil_id uuid references profiles (id),
  annonceur_id uuid references advertisers (id),
  type type_ecriture not null,
  montant bigint not null,           -- positif = crédit, négatif = débit
  disponible boolean not null default true, -- false = gain en attente de validation
  reference text,                     -- preuve, retrait, opération agrégateur…
  cree_par uuid references profiles (id),
  cree_le timestamptz not null default now(),
  check ((profil_id is null) <> (annonceur_id is null))
);

create view soldes with (security_invoker = true) as
  select profil_id, annonceur_id,
         coalesce(sum(montant) filter (where disponible), 0) as disponible,
         coalesce(sum(montant) filter (where not disponible), 0) as en_attente
  from ledger_entries
  group by profil_id, annonceur_id;

create table withdrawals (
  id uuid primary key default gen_random_uuid(),
  profil_id uuid not null references profiles (id),
  montant bigint not null check (montant >= 1000),
  frais bigint not null default 0,
  operateur text not null,
  numero text not null,
  reference_agregateur text unique,
  statut statut_retrait not null default 'demande',
  cree_le timestamptz not null default now()
);

create table referrals (
  id uuid primary key default gen_random_uuid(),
  parrain_id uuid not null references profiles (id),
  filleul_id uuid not null unique references profiles (id),
  prime bigint not null default 0,
  statut text not null default 'en_attente',
  cree_le timestamptz not null default now()
);

create table settings (
  cle text primary key,              -- ex. tarif_vue_diffuseur:ML:whatsapp, seuil_retrait
  valeur jsonb not null,
  modifie_le timestamptz not null default now()
);

create table audit_logs (
  id bigint generated always as identity primary key,
  admin_id uuid not null references profiles (id),
  action text not null,
  cible text,
  details jsonb,
  cree_le timestamptz not null default now()
);

-- Sécurité (RLS) -------------------------------------------------------------
-- Règle générale : chacun lit ses propres données ; les écritures sensibles (journal,
-- validation des preuves, retraits) passent par les Edge Functions avec la clé service.
alter table profiles enable row level security;
alter table kyc_documents enable row level security;
alter table advertisers enable row level security;
alter table campaigns enable row level security;
alter table assignments enable row level security;
alter table proofs enable row level security;
alter table clicks enable row level security;
alter table ledger_entries enable row level security;
alter table withdrawals enable row level security;
alter table referrals enable row level security;
alter table settings enable row level security;
alter table audit_logs enable row level security;

create policy profil_lecture on profiles for select using (id = auth.uid() or est_admin());
create policy profil_creation on profiles for insert with check (id = auth.uid() and role <> 'admin');
-- Mise à jour du profil : colonnes sensibles (rôle, niveau, KYC, suspension) protégées par le trigger ci-dessous.
create policy profil_maj on profiles for update using (id = auth.uid() or est_admin());

create or replace function proteger_colonnes_profil() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not est_admin() and auth.uid() is not null and (
    new.role is distinct from old.role or new.role_admin is distinct from old.role_admin or
    new.niveau is distinct from old.niveau or new.statut_kyc is distinct from old.statut_kyc or
    new.suspendu is distinct from old.suspendu) then
    raise exception 'Modification non autorisée';
  end if;
  return new;
end $$;
create trigger profil_colonnes_protegees before update on profiles
  for each row execute function proteger_colonnes_profil();

create policy kyc_lecture on kyc_documents for select using (profil_id = auth.uid() or est_admin());
create policy kyc_depot on kyc_documents for insert with check (profil_id = auth.uid() and statut = 'en_attente');

create policy annonceur_lecture on advertisers for select using (proprietaire_id = auth.uid() or est_admin());
create policy annonceur_creation on advertisers for insert with check (proprietaire_id = auth.uid());
create policy annonceur_maj on advertisers for update using (proprietaire_id = auth.uid());

-- Les diffuseurs voient les campagnes actives ; l'annonceur voit et modifie les siennes tant qu'elles ne sont pas actives.
create policy campagne_lecture on campaigns for select using (
  statut = 'active' or est_admin() or
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()));
create policy campagne_creation on campaigns for insert with check (
  statut in ('brouillon', 'en_moderation') and
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()));
create policy campagne_maj on campaigns for update using (
  statut in ('brouillon', 'en_moderation') and
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()))
  with check (statut in ('brouillon', 'en_moderation'));

create policy assignment_lecture on assignments for select using (
  diffuseur_id = auth.uid() or est_admin() or
  campagne_id in (select c.id from campaigns c join advertisers a on a.id = c.annonceur_id where a.proprietaire_id = auth.uid()));

create policy preuve_lecture on proofs for select using (
  est_admin() or assignment_id in (select id from assignments where diffuseur_id = auth.uid()));
create policy preuve_depot on proofs for insert with check (
  statut = 'en_attente' and vues_validees is null and
  assignment_id in (select id from assignments where diffuseur_id = auth.uid()));

create policy clic_lecture on clicks for select using (est_admin());

create policy journal_lecture on ledger_entries for select using (
  profil_id = auth.uid() or est_admin() or
  annonceur_id in (select id from advertisers where proprietaire_id = auth.uid()));

create policy retrait_lecture on withdrawals for select using (profil_id = auth.uid() or est_admin());

create policy parrainage_lecture on referrals for select using (
  parrain_id = auth.uid() or filleul_id = auth.uid() or est_admin());

create policy parametres_lecture on settings for select using (auth.uid() is not null);
create policy parametres_admin on settings for all using (est_admin()) with check (est_admin());

create policy audit_lecture on audit_logs for select using (est_admin());

-- Paramètres de départ (cahier des charges, à ajuster) -------------------------
insert into settings (cle, valeur) values
  ('seuil_retrait', '1000'),
  ('plafond_retrait_auto_journalier', '25000'),
  ('budget_minimum_campagne', '25000'),
  ('plafond_vues_story', '{"bronze": 500, "argent": 1500, "or": 5000}'),
  ('antifraude', '{"facteur_vues_anormales": 1.5, "taux_clic_suspect": 0.15}');
