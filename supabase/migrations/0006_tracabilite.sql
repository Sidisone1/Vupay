-- Vupay — étape 4 : traçabilité.
-- 1. Lien personnel unique par campagne, diffuseur et réseau (vupay.app/c/<code>).
-- 2. Deux journaux séparés : les VISITES (jamais payées) et les ACTIONS de contact
--    (numéro WhatsApp, catalogue, message, achat), seules candidates à une rémunération.
-- 3. Antifraude décidée en base, sous verrou : chaque action est « validee », « en_attente »
--    (vérification humaine) ou « refusee », avec ses motifs.
-- 4. Une même personne ne compte qu'une fois par campagne et par type d'action
--    (index unique) : aucune action en double ne peut être validée.
-- Visiteurs pseudonymisés : le serveur n'envoie que des empreintes (jamais d'IP en clair).
-- Aucun mouvement d'argent ici : le paiement des actions validées arrive à l'étape 5.
-- Rien n'est effacé (aucun drop) : Supabase exigerait une confirmation manuelle.

-- 1. Lien personnel ---------------------------------------------------------------------------
-- Appelée par le diffuseur connecté. Renvoie son code, en le créant au besoin (idempotent).
create or replace function accepter_campagne(p_campagne uuid, p_reseau reseau) returns text
language plpgsql security definer set search_path = public as $$
declare
  v_code text;
  c campaigns;
begin
  if not a_role('diffuseur') then
    raise exception 'Espace diffuseur requis';
  end if;
  if p_reseau not in ('whatsapp', 'instagram', 'facebook') then
    raise exception 'Réseau non proposé';
  end if;
  select * into c from campaigns where id = p_campagne;
  if not found or not campagne_diffusable(c) then
    raise exception 'Campagne non disponible';
  end if;
  if exists (select 1 from advertisers where id = c.annonceur_id and proprietaire_id = auth.uid()) then
    raise exception 'On ne diffuse pas sa propre campagne';
  end if;

  select code_lien into v_code from assignments
  where campagne_id = p_campagne and diffuseur_id = auth.uid() and reseau = p_reseau;
  if v_code is not null then
    return v_code;
  end if;
  loop
    v_code := substr(md5(random()::text || clock_timestamp()::text || auth.uid()::text), 1, 10);
    begin
      insert into assignments (campagne_id, diffuseur_id, reseau, code_visuel, code_lien)
      values (p_campagne, auth.uid(), p_reseau, 'V-' || upper(v_code), v_code);
      return v_code;
    exception when unique_violation then
      -- collision de code (très improbable) ou double clic simultané : on recommence ou on relit
      select code_lien into v_code from assignments
      where campagne_id = p_campagne and diffuseur_id = auth.uid() and reseau = p_reseau;
      if v_code is not null then
        return v_code;
      end if;
    end;
  end loop;
end $$;
revoke execute on function accepter_campagne(uuid, reseau) from public, anon;

-- 2. Journaux ------------------------------------------------------------------------------------
create table page_visits (
  id bigint generated always as identity primary key,
  assignment_id uuid not null references assignments (id),
  campagne_id uuid not null references campaigns (id),
  visiteur text not null,   -- empreinte du témoin (cookie) du navigateur
  empreinte text not null,  -- empreinte réseau + appareil (secours si le témoin est refusé)
  appareil text check (appareil in ('mobile', 'tablette', 'ordinateur', 'inconnu')),
  robot boolean not null default false,
  visite_le timestamptz not null default now()
);
create index page_visits_assignment on page_visits (assignment_id, visite_le);
create index page_visits_visiteur on page_visits (assignment_id, visiteur, visite_le);
create index page_visits_empreinte on page_visits (assignment_id, empreinte, visite_le);
alter table page_visits enable row level security;

create type statut_action as enum ('validee', 'en_attente', 'refusee');

create table contact_actions (
  id bigint generated always as identity primary key,
  assignment_id uuid not null references assignments (id),
  campagne_id uuid not null references campaigns (id),
  diffuseur_id uuid not null references profiles (id),
  type action_contact not null,
  visiteur text not null,
  empreinte text not null,
  statut statut_action not null,
  motifs text[] not null default '{}',
  decide_par uuid references profiles (id),  -- admin, en cas de vérification humaine
  decide_le timestamptz,
  cree_le timestamptz not null default now()
);
-- Le cœur du critère « aucune action dupliquée » : une seule action non refusée par
-- personne, campagne et type, quel que soit le diffuseur.
create unique index contact_actions_unique on contact_actions (campagne_id, type, visiteur) where statut <> 'refusee';
create index contact_actions_assignment on contact_actions (assignment_id, cree_le);
create index contact_actions_empreinte on contact_actions (campagne_id, empreinte, cree_le);
create index contact_actions_attente on contact_actions (statut) where statut = 'en_attente';
alter table contact_actions enable row level security;

-- Lecture : l'admin, l'annonceur de la campagne, le diffuseur du lien. Écriture : seulement
-- par les fonctions ci-dessous (serveur) et la décision d'un modérateur.
create policy visite_lecture on page_visits for select using (
  est_admin() or
  assignment_id in (select id from assignments where diffuseur_id = auth.uid()) or
  campagne_id in (select c.id from campaigns c join advertisers a on a.id = c.annonceur_id where a.proprietaire_id = auth.uid()));
create policy action_lecture on contact_actions for select using (
  est_admin() or diffuseur_id = auth.uid() or
  campagne_id in (select c.id from campaigns c join advertisers a on a.id = c.annonceur_id where a.proprietaire_id = auth.uid()));
create policy action_decision on contact_actions for update
  using (admin_peut('moderer_campagnes')) with check (admin_peut('moderer_campagnes'));

create or replace function decision_action() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (new.assignment_id, new.campagne_id, new.diffuseur_id, new.type, new.visiteur, new.empreinte, new.cree_le)
     is distinct from (old.assignment_id, old.campagne_id, old.diffuseur_id, old.type, old.visiteur, old.empreinte, old.cree_le) then
    raise exception 'Une action enregistrée ne se modifie pas';
  end if;
  if new.statut is distinct from old.statut then
    if old.statut <> 'en_attente' then
      raise exception 'Seule une action en attente peut être décidée';
    end if;
    if auth.uid() is not null then
      new.decide_par := auth.uid();
      new.decide_le := now();
      insert into audit_logs (admin_id, action, cible, details)
      values (auth.uid(), 'action_' || new.statut, new.id::text, jsonb_build_object('motifs', new.motifs));
    end if;
  end if;
  return new;
end $$;
create trigger action_decidee before update on contact_actions for each row execute function decision_action();

-- 3. Enregistrement (serveur uniquement) -----------------------------------------------------------
-- Visite d'un lien personnel : renvoie l'adresse publique de la fiche, ou null si le lien est inconnu.
create or replace function enregistrer_visite(p_code text, p_visiteur text, p_empreinte text, p_appareil text, p_robot boolean)
returns text language plpgsql security definer set search_path = public as $$
declare
  a assignments;
  v_slug text;
begin
  select * into a from assignments where code_lien = p_code;
  if not found then
    return null;
  end if;
  select slug into v_slug from campaigns where id = a.campagne_id and statut in ('active', 'en_pause', 'terminee');
  if v_slug is null then
    return null;
  end if;
  insert into page_visits (assignment_id, campagne_id, visiteur, empreinte, appareil, robot)
  values (a.id, a.campagne_id, p_visiteur, p_empreinte, coalesce(p_appareil, 'inconnu'), coalesce(p_robot, false));
  return v_slug;
end $$;

-- Clic sur un bouton depuis un lien personnel : décide du statut, enregistre l'action et renvoie
-- la destination enregistrée (le visiteur est toujours redirigé, même si l'action n'est pas retenue).
-- p_utilisateur : compte Vupay connecté sur ce navigateur, s'il y en a un (auto-clic).
create or replace function enregistrer_action(
  p_code text, p_type action_contact, p_visiteur text, p_empreinte text, p_robot boolean, p_utilisateur uuid default null)
returns table (destination text, statut statut_action, motifs text[])
language plpgsql security definer set search_path = public as $$
#variable_conflict use_column
declare
  a assignments;
  c campaigns;
  v_url text;
  v_bloquants text[] := '{}';
  v_doutes text[] := '{}';
  v_derniere_visite timestamptz;
  v_statut statut_action;
begin
  select * into a from assignments where code_lien = p_code;
  if not found then
    return;
  end if;
  select * into c from campaigns where id = a.campagne_id;
  if not campagne_diffusable(c) then
    return;
  end if;
  select d.url into v_url from campaign_destinations d
  where d.campagne_id = c.id and d.type = p_type and destination_valide(d.type, d.url);
  if v_url is null then
    return;
  end if;

  -- Un seul calcul à la fois pour une même personne sur une même campagne (pas de double comptage).
  perform pg_advisory_xact_lock(hashtext(c.id::text || '|' || p_visiteur));

  -- Motifs bloquants : l'action est refusée.
  if coalesce(p_robot, false) then v_bloquants := array_append(v_bloquants, 'robot'); end if;
  if p_utilisateur is not null and p_utilisateur = a.diffuseur_id then v_bloquants := array_append(v_bloquants, 'auto_clic'); end if;
  if p_utilisateur is not null and exists (select 1 from advertisers where id = c.annonceur_id and proprietaire_id = p_utilisateur) then
    v_bloquants := array_append(v_bloquants, 'annonceur');
  end if;
  select max(visite_le) into v_derniere_visite from page_visits
  where assignment_id = a.id and (visiteur = p_visiteur or empreinte = p_empreinte) and visite_le > now() - interval '30 minutes';
  if v_derniere_visite is null then
    v_bloquants := array_append(v_bloquants, 'sans_visite');
  elsif v_derniere_visite > now() - interval '2 seconds' then
    v_bloquants := array_append(v_bloquants, 'trop_rapide');
  end if;
  if exists (select 1 from contact_actions x where x.campagne_id = c.id and x.type = p_type and x.visiteur = p_visiteur and x.statut <> 'refusee') then
    v_bloquants := array_append(v_bloquants, 'doublon');
  end if;

  -- Motifs de doute : vérification humaine (réseaux mobiles partagés : une même adresse réseau
  -- peut regrouper beaucoup de vraies personnes, on ne refuse donc pas automatiquement).
  if exists (select 1 from contact_actions x where x.campagne_id = c.id and x.type = p_type and x.empreinte = p_empreinte
             and x.statut <> 'refusee') then
    v_doutes := array_append(v_doutes, 'appareil_repete');
  end if;
  if (select count(*) from contact_actions x where x.campagne_id = c.id and x.empreinte = p_empreinte
      and x.cree_le > now() - interval '1 day') >= 5 then
    v_doutes := array_append(v_doutes, 'volume_reseau');
  end if;
  if (select count(*) from contact_actions x where x.assignment_id = a.id and x.cree_le > now() - interval '1 minute') >= 20 then
    v_doutes := array_append(v_doutes, 'rafale');
  end if;

  v_statut := case when cardinality(v_bloquants) > 0 then 'refusee'
                   when cardinality(v_doutes) > 0 then 'en_attente'
                   else 'validee' end;
  insert into contact_actions (assignment_id, campagne_id, diffuseur_id, type, visiteur, empreinte, statut, motifs)
  values (a.id, c.id, a.diffuseur_id, p_type, p_visiteur, p_empreinte, v_statut, v_bloquants || v_doutes);
  return query select v_url, v_statut, v_bloquants || v_doutes;
end $$;

-- Seul le serveur Vupay (clé service) enregistre : sinon n'importe qui pourrait fabriquer
-- de faux visiteurs en appelant directement l'API.
revoke execute on function enregistrer_visite(text, text, text, text, boolean) from public, anon, authenticated;
revoke execute on function enregistrer_action(text, action_contact, text, text, boolean, uuid) from public, anon, authenticated;
grant execute on function enregistrer_visite(text, text, text, text, boolean) to service_role;
grant execute on function enregistrer_action(text, action_contact, text, text, boolean, uuid) to service_role;
revoke execute on function decision_action() from public, anon, authenticated;

-- Les diffuseurs lisent les campagnes publiées et leurs boutons (pour présenter l'offre) ;
-- les adresses restent visibles seulement de l'annonceur et des admins.
create or replace function boutons_campagne(p_campagne uuid) returns setof action_contact
language sql stable security definer set search_path = public as $$
  select d.type from campaign_destinations d join campaigns c on c.id = d.campagne_id
  where d.campagne_id = p_campagne and c.statut = 'active' and auth.uid() is not null order by d.type;
$$;
revoke execute on function boutons_campagne(uuid) from public, anon;
