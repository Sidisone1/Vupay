-- Tests de l'étape 4 (migration 0006) : liens personnels, visites, actions, antifraude,
-- et le critère « aucune vue payée, aucune action dupliquée créditée ».
-- S'exécute après 10, 20 et 30, sur la même base.

\set ON_ERROR_STOP on
\set diffuseur   '''11111111-1111-1111-1111-111111111111'''
\set annonceur   '''22222222-2222-2222-2222-222222222222'''
\set autre       '''33333333-3333-3333-3333-333333333333'''
\set moderateur  '''44444444-4444-4444-4444-444444444444'''
\set finance     '''55555555-5555-5555-5555-555555555555'''

update tests.compteur set n = 0;
create table tests.memo (cle text primary key, valeur text);
grant all on tests.memo to authenticated, anon, service_role;
grant usage on schema tests to service_role;
grant execute on all functions in schema tests to service_role;
grant all on tests.compteur to service_role;

-- Une campagne publiée, avec deux boutons (préparée côté serveur).
reset role;
select set_config('request.jwt.claim.sub', '', false);
insert into campaigns (id, annonceur_id, titre, texte, chemin_creatif, debut, fin, statut)
values ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Karité pur', 'Beurre de karité de Sikasso',
        '22222222-2222-2222-2222-222222222222/karite.jpg', current_date - 1, current_date + 30, 'active');
insert into campaign_destinations (campagne_id, type, url, libelle) values
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'numero_whatsapp', 'https://wa.me/22370000002', 'WhatsApp'),
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'acheter', 'https://boutique-kanaga.ml/karite', 'Acheter');

-- 1. Lien personnel --------------------------------------------------------------------------
set role authenticated;
select set_config('request.jwt.claim.sub', :autre, false);
insert into tests.memo values ('lien', accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'whatsapp'));
select tests.ok((select valeur from tests.memo where cle = 'lien') ~ '^[0-9a-f]{10}$', 'le diffuseur obtient un lien personnel');
select tests.ok(accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'whatsapp') = (select valeur from tests.memo where cle = 'lien'),
  'redemander le lien redonne le même (pas de doublon)');
insert into tests.memo values ('lien_fb', accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'facebook'));
select tests.ok((select valeur from tests.memo where cle = 'lien_fb') <> (select valeur from tests.memo where cle = 'lien'),
  'un lien différent par réseau');
select tests.refuse($$select accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'tiktok')$$, 'seuls WhatsApp, Instagram et Facebook sont proposés');
select tests.refuse($$select accepter_campagne('dddddddd-dddd-dddd-dddd-dddddddddddd', 'whatsapp')$$, 'pas de lien pour une campagne expirée');
select tests.ok((select count(*) from boutons_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff')) = 2, 'le diffuseur voit quels boutons la fiche propose');

select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.refuse($$select accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'whatsapp')$$, 'il faut l''espace diffuseur');
insert into profile_roles values (:annonceur, 'diffuseur');
select tests.refuse($$select accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'whatsapp')$$, 'un annonceur ne diffuse pas sa propre campagne');

select set_config('request.jwt.claim.sub', :moderateur, false);
insert into tests.memo values ('lien_autre_diffuseur', accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'whatsapp'));

-- Personne ne peut enregistrer de visites ou d'actions en appelant l'API directement.
select tests.refuse($$select enregistrer_visite('x', 'v', 'e', 'mobile', false)$$, 'un utilisateur connecté n''enregistre pas de visite lui-même');
select tests.refuse($$select * from enregistrer_action('x', 'acheter', 'v', 'e', false)$$, 'un utilisateur connecté n''enregistre pas d''action lui-même');
set role anon;
select set_config('request.jwt.claim.sub', '', false);
select tests.refuse($$select enregistrer_visite('x', 'v', 'e', 'mobile', false)$$, 'un visiteur n''enregistre pas de visite en appelant l''API');
select tests.refuse($$select accepter_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff', 'whatsapp')$$, 'un visiteur n''obtient pas de lien');
select tests.refuse($$select * from boutons_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff')$$, 'un visiteur ne liste pas les boutons');

-- 2. Visites (serveur Vupay = clé service) ------------------------------------------------------
set role service_role;
select tests.ok(enregistrer_visite((select valeur from tests.memo where cle = 'lien'), 'visiteur-A', 'reseau-A', 'mobile', false)
  = (select slug from campaigns where id = 'ffffffff-ffff-ffff-ffff-ffffffffffff'), 'la visite est enregistrée et mène à la fiche');
select tests.ok(enregistrer_visite('inconnu123', 'visiteur-A', 'reseau-A', 'mobile', false) is null, 'un lien inconnu ne mène nulle part');
select tests.ok((select count(*) from page_visits) = 1, 'la visite est dans le journal des visites');

-- Pour simuler le temps de lecture de la fiche, on recule les visites d'une minute.
reset role;
update page_visits set visite_le = now() - interval '1 minute';
insert into page_visits (assignment_id, campagne_id, visiteur, empreinte, appareil, visite_le)
select id, campagne_id, v, e, 'mobile', now() - interval '1 minute' from assignments,
  (values ('visiteur-B', 'reseau-B'), ('visiteur-C', 'reseau-A'), ('visiteur-D', 'reseau-D'), ('visiteur-E', 'reseau-E')) as t(v, e)
where code_lien = (select valeur from tests.memo where cle = 'lien');
insert into page_visits (assignment_id, campagne_id, visiteur, empreinte, appareil, visite_le)
select id, campagne_id, 'visiteur-A', 'reseau-A', 'mobile', now() - interval '1 minute' from assignments
where code_lien = (select valeur from tests.memo where cle = 'lien_autre_diffuseur');

-- 3. Actions et antifraude --------------------------------------------------------------------
set role service_role;
create temp table r (cas text, destination text, statut statut_action, motifs text[]);
create or replace function pg_temp.action(cas text, lien text, t action_contact, v text, e text, robot boolean default false, u uuid default null)
returns void language sql as $$
  insert into r select cas, * from enregistrer_action((select valeur from tests.memo where cle = lien), t, v, e, robot, u);
$$;

select pg_temp.action('normal', 'lien', 'numero_whatsapp', 'visiteur-A', 'reseau-A');
select tests.ok((select statut from r where cas = 'normal') = 'validee', 'une vraie action après une visite est validée');
select tests.ok((select destination from r where cas = 'normal') = 'https://wa.me/22370000002', 'et le visiteur est envoyé vers la destination enregistrée');

select pg_temp.action('doublon', 'lien', 'numero_whatsapp', 'visiteur-A', 'reseau-A');
select tests.ok((select statut from r where cas = 'doublon') = 'refusee' and (select 'doublon' = any(motifs) from r where cas = 'doublon'),
  'la même personne qui reclique n''est pas comptée deux fois');
select tests.ok((select destination from r where cas = 'doublon') is not null, 'mais elle est quand même redirigée (pas de blocage pour le visiteur)');

select pg_temp.action('autre_diffuseur', 'lien_autre_diffuseur', 'numero_whatsapp', 'visiteur-A', 'reseau-A');
select tests.ok((select 'doublon' = any(motifs) from r where cas = 'autre_diffuseur'),
  'la même personne passée par le lien d''un autre diffuseur ne compte pas une seconde fois');

select pg_temp.action('autre_type', 'lien', 'acheter', 'visiteur-A', 'reseau-A');
select tests.ok((select statut from r where cas = 'autre_type') = 'validee', 'un autre type d''action de la même personne compte à part');

select pg_temp.action('sans_visite', 'lien', 'numero_whatsapp', 'visiteur-Z', 'reseau-Z');
select tests.ok((select 'sans_visite' = any(motifs) from r where cas = 'sans_visite') and (select statut from r where cas = 'sans_visite') = 'refusee',
  'un clic sans passage par la fiche est refusé');

select enregistrer_visite((select valeur from tests.memo where cle = 'lien'), 'visiteur-F', 'reseau-F', 'mobile', false);
select pg_temp.action('trop_rapide', 'lien', 'numero_whatsapp', 'visiteur-F', 'reseau-F');
select tests.ok((select 'trop_rapide' = any(motifs) from r where cas = 'trop_rapide'), 'un clic en moins de 2 secondes après l''ouverture est refusé');

select pg_temp.action('robot', 'lien', 'numero_whatsapp', 'visiteur-B', 'reseau-B', true);
select tests.ok((select 'robot' = any(motifs) from r where cas = 'robot'), 'un robot est refusé');

select pg_temp.action('auto_clic', 'lien', 'acheter', 'visiteur-B', 'reseau-B', false, :autre);
select tests.ok((select 'auto_clic' = any(motifs) from r where cas = 'auto_clic'), 'le diffuseur qui clique sur son propre lien est refusé');

select pg_temp.action('annonceur', 'lien', 'acheter', 'visiteur-D', 'reseau-D', false, :annonceur);
select tests.ok((select 'annonceur' = any(motifs) from r where cas = 'annonceur'), 'l''annonceur qui clique sur sa propre campagne est refusé');

select pg_temp.action('appareil', 'lien', 'numero_whatsapp', 'visiteur-C', 'reseau-A');
select tests.ok((select statut from r where cas = 'appareil') = 'en_attente' and (select 'appareil_repete' = any(motifs) from r where cas = 'appareil'),
  'un même appareil sous un autre témoin part en vérification humaine');

select pg_temp.action('sans_bouton', 'lien', 'catalogue_whatsapp', 'visiteur-E', 'reseau-E');
select tests.ok(not exists (select 1 from r where cas = 'sans_bouton'), 'un bouton non configuré n''enregistre rien et ne redirige pas');

select tests.ok((select count(*) from contact_actions where statut <> 'refusee'
                 group by campagne_id, type, visiteur order by 1 desc limit 1) = 1,
  'au plus une action retenue par personne, campagne et type');

-- 4. Le critère : aucune vue payée, aucune action dupliquée --------------------------------------
reset role;
select tests.refuse($$insert into contact_actions (assignment_id, campagne_id, diffuseur_id, type, visiteur, empreinte, statut)
  select assignment_id, campagne_id, diffuseur_id, type, visiteur, empreinte, 'validee' from contact_actions where statut = 'validee' limit 1$$,
  'la base refuse une seconde action retenue pour la même personne (même en écriture directe)');
select tests.ok((select count(*) from ledger_entries) = 0, 'aucune écriture d''argent : ni les visites ni les actions ne paient à cette étape');
select tests.ok((select count(*) from page_visits) >= 6 and (select count(*) from contact_actions where type is null) = 0,
  'les visites restent dans leur propre journal, séparé des actions');

-- Campagne en pause : plus rien n'est enregistré.
select set_config('request.jwt.claim.sub', '', false);
update campaigns set statut = 'en_pause' where id = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
set role service_role;
select pg_temp.action('pause', 'lien', 'acheter', 'visiteur-E', 'reseau-E');
select tests.ok(not exists (select 1 from r where cas = 'pause'), 'campagne en pause : aucune action enregistrée, aucune redirection');
reset role;
update campaigns set statut = 'active' where id = 'ffffffff-ffff-ffff-ffff-ffffffffffff';

-- 5. Qui voit quoi ---------------------------------------------------------------------------------
set role authenticated;
select set_config('request.jwt.claim.sub', :autre, false);
select tests.ok((select count(*) from contact_actions) > 0 and (select count(*) from contact_actions where diffuseur_id <> auth.uid()) = 0,
  'le diffuseur voit ses propres actions, pas celles des autres');
select tests.ok((select count(*) from page_visits) > 0, 'il voit les visites de ses liens');
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.ok((select count(*) from contact_actions) = 0 and (select count(*) from page_visits) = 0, 'un autre utilisateur ne voit rien');
select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.ok((select count(*) from contact_actions) = (select count(*) from contact_actions where campagne_id = 'ffffffff-ffff-ffff-ffff-ffffffffffff'),
  'l''annonceur voit les actions de sa campagne');
select tests.invisible($$update contact_actions set statut = 'validee' where statut = 'en_attente'$$, 'l''annonceur ne valide pas d''action');

-- 6. Vérification humaine ----------------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :finance, false);
select tests.invisible($$update contact_actions set statut = 'validee' where statut = 'en_attente'$$, 'l''admin finance ne décide pas des actions');
select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.refuse($$update contact_actions set visiteur = 'autre' where statut = 'en_attente'$$, 'une action enregistrée ne se modifie pas');
select tests.ok(tests.lignes($$update contact_actions set statut = 'validee' where statut = 'en_attente'$$) = 1, 'le modérateur valide une action en attente');
select tests.ok(exists (select 1 from audit_logs where action = 'action_validee' and admin_id = auth.uid()), 'la décision est inscrite au journal d''audit');
select tests.refuse($$update contact_actions set statut = 'refusee' where statut = 'validee'$$, 'une action déjà décidée ne change plus');

reset role;
do $$ begin raise notice 'TOUS LES TESTS PASSENT : % vérifications', (select n from tests.compteur); end $$;
