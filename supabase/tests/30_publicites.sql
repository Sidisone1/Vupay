-- Tests de l'étape 3 (migration 0004) : fiches produit, destinations contrôlées, modération,
-- accès public limité. S'exécute après 10 et 20, sur la même base.

\set ON_ERROR_STOP on
\set diffuseur   '''11111111-1111-1111-1111-111111111111'''
\set annonceur   '''22222222-2222-2222-2222-222222222222'''
\set autre       '''33333333-3333-3333-3333-333333333333'''
\set moderateur  '''44444444-4444-4444-4444-444444444444'''
\set finance     '''55555555-5555-5555-5555-555555555555'''

update tests.compteur set n = 0;
set role authenticated;

-- L'entreprise de l'annonceur est vérifiée (elle était repassée en attente dans 10).
select set_config('request.jwt.claim.sub', :moderateur, false);
update advertisers set statut_verification = 'valide' where id = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

-- Création ----------------------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.refuse($$insert into campaigns (annonceur_id, titre, statut) values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Promo', 'active')$$,
  'une campagne naît toujours en brouillon');
select tests.refuse($$insert into campaigns (annonceur_id, titre, objectif) values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Promo vues', 'vues')$$,
  'aucune campagne rémunérée aux vues');
select tests.refuse($$insert into campaigns (annonceur_id, titre, chemin_creatif) values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Promo', '11111111-1111-1111-1111-111111111111/x.jpg')$$,
  'la photo doit être dans le dossier de l''annonceur');
insert into campaigns (id, annonceur_id, titre, slug) values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Bazin riche', 'mon-adresse');
select tests.ok((select slug from campaigns where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd') ~ '^[0-9a-f]{12}$',
  'l''adresse publique est tirée au hasard, pas choisie par l''annonceur');

-- Destinations --------------------------------------------------------------------------------
select tests.ok(tests.lignes($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'numero_whatsapp', 'https://wa.me/22370000002', 'WhatsApp')$$) = 1,
  'un lien wa.me est accepté pour le numéro WhatsApp');
select tests.ok(tests.lignes($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'acheter', 'https://boutique-kanaga.ml/bazin', 'Acheter')$$) = 1,
  'une boutique en HTTPS est acceptée pour « Acheter »');
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'envoyer_message', 'http://wa.me/22370000002', 'Message')$$, 'HTTP sans chiffrement refusé');
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'envoyer_message', 'https://wa-me.example/22370000002', 'Message')$$,
  'une action WhatsApp doit pointer vers WhatsApp');
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'catalogue_whatsapp', 'https://wa.me.pirate.example/c/1', 'Catalogue')$$,
  'un faux domaine qui commence par wa.me est refusé');
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'envoyer_message', 'javascript:alert(1)', 'Message')$$, 'une adresse javascript: est refusée');
select tests.refuse($$update campaign_destinations set url = 'https://192.168.1.10/payer' where type = 'acheter'$$, 'une adresse IP est refusée');
select tests.refuse($$update campaign_destinations set url = 'https://localhost/payer' where type = 'acheter'$$, 'localhost est refusé');
select tests.refuse($$update campaign_destinations set url = 'https://moi@boutique.ml/' where type = 'acheter'$$, 'un identifiant caché dans l''adresse est refusé');
select tests.refuse($$update campaign_destinations set url = 'https://boutique.ml:8443/' where type = 'acheter'$$, 'un port explicite est refusé');
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'numero_whatsapp', 'https://wa.me/22370000009', 'Autre')$$, 'une seule destination par type');

select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'envoyer_message', 'https://wa.me/22399999999', 'Piège')$$,
  'on n''ajoute pas de destination à la campagne d''un autre');
select tests.invisible($$update campaign_destinations set url = 'https://wa.me/22399999999'$$, 'on ne détourne pas la destination d''un autre');

-- Soumission et modération ------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.refuse($$update campaigns set statut = 'en_moderation' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'une campagne incomplète ne part pas en modération');
update campaigns set texte = 'Bazin riche teint à Bamako, toutes tailles.', prix = 15000, chemin_creatif = :annonceur || '/bazin.jpg',
  debut = current_date, fin = current_date + 30 where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
select tests.ok(tests.lignes($$update campaigns set statut = 'en_moderation' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$) = 1,
  'une campagne complète part en modération');
select tests.refuse($$update campaigns set titre = 'Autre produit' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'pendant la modération, le contenu ne change pas');
select tests.refuse($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'envoyer_message', 'https://wa.me/22370000002?text=Bonjour', 'Message')$$,
  'pendant la modération, les destinations ne changent pas');
select tests.refuse($$update campaigns set statut = 'active' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'l''annonceur ne publie pas lui-même sa campagne');
select tests.refuse($$update campaigns set slug = 'abcdefabcdef' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'l''adresse publique ne change jamais');
select tests.ok(tests.lignes($$update campaigns set statut = 'brouillon' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$) = 1,
  'l''annonceur retire sa campagne de la modération pour la corriger');
update campaigns set statut = 'en_moderation' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';

select set_config('request.jwt.claim.sub', :finance, false);
select tests.invisible($$update campaigns set statut = 'active' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'l''admin finance ne modère pas');

select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.refuse($$update campaigns set statut = 'refusee' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$, 'un refus de campagne doit être motivé');
select tests.refuse($$update campaigns set titre = 'Corrigé par l''admin' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'le modérateur ne réécrit pas la campagne');
select tests.ok(tests.lignes($$update campaigns set statut = 'refusee', motif_refus = 'Photo sans rapport avec le produit'
  where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$) = 1, 'le modérateur refuse avec un motif');
select tests.ok(exists (select 1 from audit_logs where action = 'campagne_refusee' and cible = 'dddddddd-dddd-dddd-dddd-dddddddddddd'),
  'le refus est inscrit au journal d''audit');

select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.ok((select motif_refus from campaigns where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd') = 'Photo sans rapport avec le produit',
  'l''annonceur lit le motif du refus');
select tests.refuse($$update campaigns set motif_refus = null where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$, 'l''annonceur n''efface pas le motif');
update campaigns set chemin_creatif = :annonceur || '/bazin-2.jpg' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
select tests.ok(tests.lignes($$insert into campaign_destinations (campagne_id, type, url, libelle)
  values ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'envoyer_message', 'https://wa.me/22370000002?text=Bonjour', 'Message')$$) = 1,
  'après un refus, l''annonceur corrige aussi ses destinations');
update campaigns set statut = 'en_moderation' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
select tests.ok((select motif_refus from campaigns where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd') is null,
  'une nouvelle soumission efface l''ancien motif');

select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.ok(tests.lignes($$update campaigns set statut = 'active' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$) = 1,
  'le modérateur publie la campagne');
select tests.ok((select modere_par from campaigns where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd') = auth.uid(),
  'la publication garde le nom du modérateur');

select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.refuse($$update campaigns set prix = 1000 where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$, 'une campagne publiée ne se modifie plus');
select tests.invisible($$delete from campaign_destinations where campagne_id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'$$,
  'les destinations d''une campagne publiée sont figées');

-- Accès public ------------------------------------------------------------------------------
select set_config('vupay.slug', (select slug from campaigns where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd'), false);
set role anon;
select set_config('request.jwt.claim.sub', '', false);
select tests.ok((select count(*) from campaigns) = 0, 'un visiteur ne lit pas la table des campagnes');
select tests.ok((select count(*) from campaign_destinations) = 0, 'un visiteur ne lit pas les destinations');
select tests.ok((fiche_publique(current_setting('vupay.slug')) ->> 'titre') = 'Bazin riche', 'un visiteur voit la fiche publique');
select tests.ok((fiche_publique(current_setting('vupay.slug')) ->> 'prix')::bigint = 15000, 'avec le prix communiqué en FCFA');
select tests.ok(jsonb_array_length(fiche_publique(current_setting('vupay.slug')) -> 'actions') = 3, 'et ses trois boutons de contact');
select tests.ok(fiche_publique(current_setting('vupay.slug'))::text not like '%wa.me%' and fiche_publique(current_setting('vupay.slug'))::text not like '%boutique-kanaga%',
  'la fiche ne révèle aucune adresse de destination');
select tests.ok(fiche_publique(current_setting('vupay.slug'))::text not like '%budget%' and fiche_publique(current_setting('vupay.slug'))::text not like '%tarif%',
  'ni budget ni tarif');
select tests.ok(destination_publique(current_setting('vupay.slug'), 'numero_whatsapp') = 'https://wa.me/22370000002',
  'le bouton mène à la destination enregistrée');
select tests.ok(destination_publique(current_setting('vupay.slug'), 'catalogue_whatsapp') is null, 'un bouton non configuré ne mène nulle part');
select tests.ok(fiche_publique('000000000000') is null, 'une adresse inconnue ne donne rien');

reset role;
select set_config('request.jwt.claim.sub', '', false);
insert into campaigns (id, annonceur_id, titre) values ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Brouillon secret');
select set_config('vupay.brouillon', (select slug from campaigns where id = 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee'), false);
set role anon;
select tests.ok(fiche_publique(current_setting('vupay.brouillon')) is null, 'un brouillon n''est pas public');

set role authenticated;
select set_config('request.jwt.claim.sub', :moderateur, false);
update campaigns set statut = 'en_pause' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
set role anon;
select set_config('request.jwt.claim.sub', '', false);
select tests.ok((fiche_publique(current_setting('vupay.slug')) ->> 'disponible')::boolean = false, 'une campagne en pause reste visible mais indisponible');
select tests.ok(jsonb_array_length(fiche_publique(current_setting('vupay.slug')) -> 'actions') = 0, 'sans aucun bouton de contact');
select tests.ok(destination_publique(current_setting('vupay.slug'), 'numero_whatsapp') is null, 'et aucune redirection');

set role authenticated;
select set_config('request.jwt.claim.sub', :moderateur, false);
update campaigns set statut = 'active' where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
reset role;
select set_config('request.jwt.claim.sub', '', false);
update campaigns set debut = current_date - 10, fin = current_date - 1 where id = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
set role anon;
select tests.ok(destination_publique(current_setting('vupay.slug'), 'numero_whatsapp') is null, 'une campagne expirée ne redirige plus');
select tests.ok(fiche_publique(current_setting('vupay.slug')) ->> 'slug' = current_setting('vupay.slug'), 'mais son adresse reste stable');

-- Photos des produits -------------------------------------------------------------------------
set role authenticated;
select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.ok(tests.lignes($$insert into storage.objects (bucket_id, name) values ('produits', auth.uid() || '/bazin.jpg')$$) = 1,
  'l''annonceur dépose la photo du produit');
select set_config('request.jwt.claim.sub', :autre, false);
select tests.refuse($$insert into storage.objects (bucket_id, name) values ('produits', auth.uid() || '/x.jpg')$$,
  'sans espace annonceur, pas de dépôt de photo produit');

reset role;
do $$ begin raise notice 'TOUS LES TESTS PASSENT : % vérifications', (select n from tests.compteur); end $$;
