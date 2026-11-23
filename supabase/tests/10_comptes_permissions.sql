-- Tests de l'étape 2 : chaque droit est prouvé en jouant le rôle réel de l'utilisateur
-- (rôle Postgres « authenticated » + identité simulée), la RLS et les déclencheurs s'appliquent.
-- Lancer avec supabase/tests/lancer.sh. Le premier test en échec arrête tout.

\set ON_ERROR_STOP on
set client_min_messages = notice;

-- Outils de test --------------------------------------------------------------------
create schema tests;
grant usage on schema tests to authenticated, anon;

create table tests.compteur (n int not null);
insert into tests.compteur values (0);
grant all on tests.compteur to authenticated, anon;

-- Exécute une requête et renvoie le nombre de lignes touchées.
create function tests.lignes(requete text) returns int language plpgsql as $$
declare n int;
begin
  execute requete;
  get diagnostics n = row_count;
  return n;
end $$;

create function tests.ok(condition boolean, description text) returns void language plpgsql as $$
begin
  if condition is not true then
    raise exception 'ÉCHEC : %', description;
  end if;
  update tests.compteur set n = n + 1;
  raise notice 'ok  %', description;
end $$;

-- La requête doit être refusée par une erreur (RLS en insertion, déclencheur, contrainte).
create function tests.refuse(requete text, description text) returns void language plpgsql as $$
begin
  begin
    execute requete;
  exception when others then
    perform tests.ok(true, description || ' (refusé : ' || sqlerrm || ')');
    return;
  end;
  raise exception 'ÉCHEC : % — la requête est passée', description;
end $$;

-- La requête passe mais ne touche aucune ligne (RLS en lecture, mise à jour, suppression).
create function tests.invisible(requete text, description text) returns void language plpgsql as $$
begin
  perform tests.ok(tests.lignes(requete) = 0, description);
end $$;

grant execute on all functions in schema tests to authenticated, anon;

-- Personnes de test -----------------------------------------------------------------
\set diffuseur   '''11111111-1111-1111-1111-111111111111'''
\set annonceur   '''22222222-2222-2222-2222-222222222222'''
\set autre       '''33333333-3333-3333-3333-333333333333'''
\set moderateur  '''44444444-4444-4444-4444-444444444444'''
\set finance     '''55555555-5555-5555-5555-555555555555'''
\set support     '''66666666-6666-6666-6666-666666666666'''
\set superadmin  '''77777777-7777-7777-7777-777777777777'''

insert into auth.users (id, phone) values
  (:diffuseur, '22370000001'), (:annonceur, '22370000002'), (:autre, '22570000000003'),
  (:moderateur, '22370000004'), (:finance, '22370000005'), (:support, '22370000006'),
  (:superadmin, '22370000007');

-- Profil : création à la première connexion -----------------------------------------
set role anon;
select set_config('request.jwt.claim.sub', '', false);
select tests.refuse($$select creer_mon_profil('ML', 'diffuseur')$$, 'un visiteur non connecté ne crée pas de profil');

set role authenticated;
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.refuse($$select creer_mon_profil('ML', 'admin')$$, 'personne ne s''attribue l''espace admin à l''inscription');
select creer_mon_profil('ML', 'diffuseur', 'Bamako');
select tests.ok((select telephone from profiles where id = auth.uid()) = '+22370000001',
  'le téléphone du profil est celui vérifié par OTP, pas une saisie libre');
select tests.refuse($$select creer_mon_profil('ML', 'diffuseur')$$, 'un seul profil par personne');
select tests.refuse($$insert into profiles (id, telephone, pays) values (auth.uid(), '+22399999999', 'ML')$$,
  'l''insertion directe d''un profil est interdite');

select set_config('request.jwt.claim.sub', :annonceur, false);
select creer_mon_profil('ML', 'annonceur');
select set_config('request.jwt.claim.sub', :autre, false);
select creer_mon_profil('CI', 'diffuseur');
select set_config('request.jwt.claim.sub', :moderateur, false);
select creer_mon_profil('ML', 'diffuseur');
select set_config('request.jwt.claim.sub', :finance, false);
select creer_mon_profil('ML', 'diffuseur');
select set_config('request.jwt.claim.sub', :support, false);
select creer_mon_profil('ML', 'diffuseur');
select set_config('request.jwt.claim.sub', :superadmin, false);
select creer_mon_profil('ML', 'diffuseur');

-- Le premier super admin est nommé côté serveur (clé service), jamais depuis l'application.
reset role;
select set_config('request.jwt.claim.sub', '', false);
insert into profile_roles (profil_id, role) values (:superadmin, 'admin');
update profiles set role_admin = 'super_admin' where id = :superadmin;

-- Rôles ------------------------------------------------------------------------------------
set role authenticated;
select set_config('request.jwt.claim.sub', :superadmin, false);
select tests.ok(tests.lignes($$insert into profile_roles values ('44444444-4444-4444-4444-444444444444', 'admin'),
  ('55555555-5555-5555-5555-555555555555', 'admin'), ('66666666-6666-6666-6666-666666666666', 'admin')$$) = 3,
  'le super admin nomme les admins');
select tests.ok(tests.lignes($$update profiles set role_admin = 'moderateur' where id = '44444444-4444-4444-4444-444444444444'$$) = 1,
  'le super admin attribue un rôle d''administration');
update profiles set role_admin = 'finance' where id = :finance;
update profiles set role_admin = 'support' where id = :support;

select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.ok(tests.lignes($$insert into profile_roles values (auth.uid(), 'annonceur')$$) = 1,
  'un diffuseur ouvre aussi son espace annonceur (rôles multiples)');
select tests.ok((select count(*) from profile_roles where profil_id = auth.uid()) = 2, 'il a maintenant deux rôles');
select tests.refuse($$insert into profile_roles values (auth.uid(), 'admin')$$, 'un utilisateur ne se donne pas le rôle admin');
select tests.refuse($$insert into profile_roles values ('33333333-3333-3333-3333-333333333333', 'annonceur')$$,
  'un utilisateur ne donne pas de rôle à quelqu''un d''autre');
select tests.invisible($$delete from profile_roles where profil_id = auth.uid()$$, 'un utilisateur ne supprime pas ses rôles');
select tests.ok((select count(*) from profile_roles) = 2, 'un utilisateur ne voit que ses propres rôles');

select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.refuse($$insert into profile_roles values ('33333333-3333-3333-3333-333333333333', 'admin')$$,
  'un modérateur ne nomme pas d''admin');
select tests.refuse($$update profiles set role_admin = 'super_admin' where id = auth.uid()$$,
  'un modérateur ne s''élève pas en super admin');

-- Profil : colonnes protégées --------------------------------------------------------------
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.ok(tests.lignes($$update profiles set ville = 'Ségou' where id = auth.uid()$$) = 1, 'chacun modifie sa ville');
select tests.refuse($$update profiles set suspendu = true where id = auth.uid()$$, 'un utilisateur ne change pas sa suspension');
select tests.refuse($$update profiles set statut_kyc = 'valide' where id = auth.uid()$$, 'un utilisateur ne valide pas son KYC');
select tests.refuse($$update profiles set role_admin = 'support' where id = auth.uid()$$, 'un utilisateur ne se donne pas de rôle admin');
select tests.refuse($$update profiles set telephone = '+22370000002' where id = auth.uid()$$, 'un utilisateur ne change pas son numéro vérifié');
select tests.refuse($$update profiles set niveau = 'or' where id = auth.uid()$$, 'un utilisateur ne change pas son niveau');
select tests.invisible($$update profiles set ville = 'X' where id = '33333333-3333-3333-3333-333333333333'$$,
  'un utilisateur ne modifie pas le profil d''un autre');
select tests.ok((select count(*) from profiles) = 1, 'un utilisateur ne lit que son propre profil');

select set_config('request.jwt.claim.sub', :finance, false);
select tests.ok((select count(*) from profiles) = 7, 'un admin lit tous les profils');
select tests.refuse($$update profiles set suspendu = true where id = '33333333-3333-3333-3333-333333333333'$$,
  'l''admin finance ne suspend pas');
select set_config('request.jwt.claim.sub', :support, false);
select tests.ok(tests.lignes($$update profiles set suspendu = true where id = '33333333-3333-3333-3333-333333333333'$$) = 1,
  'le support suspend un compte');

select set_config('request.jwt.claim.sub', :autre, false);
select tests.refuse($$insert into profile_roles values (auth.uid(), 'annonceur')$$, 'un compte suspendu n''ouvre pas de nouvel espace');
select tests.refuse($$insert into kyc_documents (profil_id, chemin_piece, chemin_selfie)
  values (auth.uid(), auth.uid() || '/piece.jpg', auth.uid() || '/selfie.jpg')$$, 'un compte suspendu ne dépose pas de KYC');

select set_config('request.jwt.claim.sub', :support, false);
update profiles set suspendu = false where id = :autre;

-- Vérification d'identité (KYC) ----------------------------------------------------------
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.refuse($$insert into kyc_documents (profil_id, chemin_piece, chemin_selfie)
  values (auth.uid(), '33333333-3333-3333-3333-333333333333/piece.jpg', auth.uid() || '/selfie.jpg')$$,
  'on ne dépose pas la pièce rangée dans le dossier d''un autre');
select tests.refuse($$insert into kyc_documents (profil_id, chemin_piece, chemin_selfie, statut)
  values (auth.uid(), auth.uid() || '/piece.jpg', auth.uid() || '/selfie.jpg', 'valide')$$,
  'on ne dépose pas un dossier déjà validé');
select tests.ok(tests.lignes($$insert into kyc_documents (profil_id, chemin_piece, chemin_selfie)
  values (auth.uid(), auth.uid() || '/piece.jpg', auth.uid() || '/selfie.jpg')$$) = 1, 'un diffuseur dépose son KYC');
select tests.ok((select statut_kyc from profiles where id = auth.uid()) = 'en_attente', 'son profil passe « en attente »');
select tests.refuse($$insert into kyc_documents (profil_id, chemin_piece, chemin_selfie)
  values (auth.uid(), auth.uid() || '/piece2.jpg', auth.uid() || '/selfie2.jpg')$$, 'un seul dossier en attente à la fois');
select tests.invisible($$update kyc_documents set statut = 'valide'$$, 'un utilisateur ne valide pas son propre dossier');

select set_config('request.jwt.claim.sub', :autre, false);
select tests.ok((select count(*) from kyc_documents) = 0, 'on ne voit pas le dossier KYC d''un autre');

select set_config('request.jwt.claim.sub', :finance, false);
select tests.invisible($$update kyc_documents set statut = 'valide'$$, 'l''admin finance ne valide pas les KYC');

select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.refuse($$update kyc_documents set statut = 'refuse'$$, 'un refus de KYC doit être motivé');
select tests.refuse($$update kyc_documents set chemin_piece = '11111111-1111-1111-1111-111111111111/autre.jpg'$$,
  'les pièces déposées ne sont pas modifiables');
select tests.ok(tests.lignes($$update kyc_documents set statut = 'valide'$$) = 1, 'le modérateur valide le KYC');
select tests.ok((select statut_kyc from profiles where id = '11111111-1111-1111-1111-111111111111') = 'valide',
  'le profil du diffuseur passe « validé »');
select tests.ok((select traite_par from kyc_documents) = auth.uid(), 'la décision garde le nom de l''admin');
select tests.ok(exists (select 1 from audit_logs where action = 'kyc_valide' and admin_id = auth.uid()),
  'la décision est inscrite au journal d''audit');
select tests.refuse($$update kyc_documents set statut = 'refuse', motif_refus = 'erreur'$$, 'un dossier traité ne change plus');

-- Entreprise -------------------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :autre, false);
select tests.refuse($$insert into advertisers (proprietaire_id, raison_sociale, pays) values (auth.uid(), 'Sans rôle', 'CI')$$,
  'il faut l''espace annonceur pour créer une entreprise');

select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.refuse($$insert into advertisers (proprietaire_id, raison_sociale, pays, statut_verification)
  values (auth.uid(), 'Triche SARL', 'ML', 'valide')$$, 'une entreprise ne se déclare pas vérifiée');
select tests.refuse($$insert into advertisers (proprietaire_id, raison_sociale, pays) values ('33333333-3333-3333-3333-333333333333', 'Pour autrui', 'ML')$$,
  'on ne crée pas d''entreprise au nom d''un autre');
insert into advertisers (id, proprietaire_id, raison_sociale, pays)
  values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', auth.uid(), 'Boutique Kanaga', 'ML');
select tests.ok((select statut_verification from advertisers) = 'non_soumis', 'l''annonceur crée son entreprise, non vérifiée');
select tests.refuse($$update advertisers set statut_verification = 'en_attente'$$, 'la demande de vérification exige un justificatif');
select tests.refuse($$update advertisers set chemin_document = '11111111-1111-1111-1111-111111111111/rccm.pdf'$$,
  'le justificatif doit être dans le dossier du propriétaire');
select tests.ok(tests.lignes($$update advertisers set chemin_document = auth.uid() || '/rccm.pdf', rccm = 'MA.BKO.2026.B.1234',
  statut_verification = 'en_attente'$$) = 1, 'l''annonceur demande la vérification avec son RCCM');
select tests.refuse($$update advertisers set statut_verification = 'valide'$$, 'l''annonceur ne valide pas sa propre entreprise');
select tests.refuse($$update advertisers set proprietaire_id = '11111111-1111-1111-1111-111111111111'$$,
  'le propriétaire d''une entreprise ne change pas');

select tests.refuse($$insert into campaigns (annonceur_id, titre, objectif, chemin_creatif, texte, lien_cible, reseaux, budget, debut, fin, statut)
  values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Promo', 'clics', 'c.jpg', 'Publicité', 'https://wa.me/22370000002', '{whatsapp}', 25000,
  current_date, current_date + 7, 'en_moderation')$$, 'pas de campagne en modération sans entreprise vérifiée');
select tests.ok(tests.lignes($$insert into campaigns (id, annonceur_id, titre, objectif, chemin_creatif, texte, lien_cible, reseaux, budget, debut, fin)
  values ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Promo', 'clics', 'c.jpg', 'Publicité',
  'https://wa.me/22370000002', '{whatsapp}', 25000, current_date, current_date + 7)$$) = 1,
  'un brouillon de campagne reste possible avant vérification');

select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.refuse($$insert into campaigns (annonceur_id, titre, objectif, chemin_creatif, texte, lien_cible, reseaux, budget, debut, fin)
  values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Vol', 'clics', 'c.jpg', 'Pub', 'https://wa.me/1', '{whatsapp}', 25000, current_date, current_date)$$,
  'on ne crée pas de campagne pour l''entreprise d''un autre');

select set_config('request.jwt.claim.sub', :finance, false);
select tests.invisible($$update advertisers set statut_verification = 'valide'$$, 'l''admin finance ne vérifie pas les entreprises');

select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.refuse($$update advertisers set statut_verification = 'refuse'$$, 'un refus d''entreprise doit être motivé');
select tests.ok(tests.lignes($$update advertisers set statut_verification = 'valide'$$) = 1, 'le modérateur vérifie l''entreprise');
select tests.ok((select verifie_par from advertisers) = auth.uid(), 'la vérification garde le nom de l''admin');
select tests.ok(exists (select 1 from audit_logs where action = 'entreprise_valide'), 'la vérification est inscrite au journal d''audit');

select set_config('request.jwt.claim.sub', :annonceur, false);
select tests.ok(tests.lignes($$update campaigns set statut = 'en_moderation'$$) = 1,
  'une fois l''entreprise vérifiée, la campagne part en modération');
update advertisers set raison_sociale = 'Kanaga Distribution';
select tests.ok((select statut_verification from advertisers) = 'en_attente',
  'une entreprise vérifiée qui change de nom repasse en vérification');
select tests.refuse($$update campaigns set titre = 'Promo 2'$$,
  'une campagne en modération ne se modifie plus si l''entreprise n''est plus vérifiée');

select set_config('request.jwt.claim.sub', :finance, false);
select tests.invisible($$update campaigns set statut = 'active'$$, 'l''admin finance ne modère pas les campagnes');
select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.ok(tests.lignes($$update campaigns set statut = 'active'$$) = 1, 'le modérateur active la campagne');

-- Paramètres -------------------------------------------------------------------------------
select tests.invisible($$update settings set valeur = '500' where cle = 'seuil_retrait'$$, 'un modérateur ne change pas les paramètres');
select set_config('request.jwt.claim.sub', :superadmin, false);
select tests.ok(tests.lignes($$update settings set valeur = '1000' where cle = 'seuil_retrait'$$) = 1, 'le super admin change les paramètres');

-- Stockage privé des pièces -----------------------------------------------------------------
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.ok(tests.lignes($$insert into storage.objects (bucket_id, name) values ('kyc', auth.uid() || '/piece.jpg')$$) = 1,
  'chacun dépose ses pièces dans son dossier');
select tests.refuse($$insert into storage.objects (bucket_id, name) values ('kyc', '33333333-3333-3333-3333-333333333333/piece.jpg')$$,
  'on ne dépose pas dans le dossier d''un autre');
select tests.invisible($$delete from storage.objects$$, 'une pièce déposée ne peut pas être supprimée');

select set_config('request.jwt.claim.sub', :autre, false);
select tests.ok((select count(*) from storage.objects) = 0, 'on ne lit pas les pièces d''un autre');
select set_config('request.jwt.claim.sub', :finance, false);
select tests.ok((select count(*) from storage.objects) = 0, 'l''admin finance ne lit pas les pièces KYC');
select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.ok((select count(*) from storage.objects) = 1, 'le modérateur lit les pièces KYC à vérifier');

-- Nouveau dépôt après un refus (parcours des écrans de dépôt) ---------------------------------
select set_config('request.jwt.claim.sub', :autre, false);
insert into kyc_documents (profil_id, chemin_piece, chemin_selfie)
  values (:autre, :autre || '/piece-1.jpg', :autre || '/selfie-1.jpg');
select set_config('request.jwt.claim.sub', :moderateur, false);
update kyc_documents set statut = 'refuse', motif_refus = 'Photo floue' where profil_id = :autre;
select set_config('request.jwt.claim.sub', :autre, false);
select tests.ok((select statut_kyc from profiles where id = auth.uid()) = 'refuse', 'le diffuseur voit que son KYC est refusé');
select tests.ok((select motif_refus from kyc_documents where profil_id = auth.uid()) = 'Photo floue', 'il lit le motif du refus');
select tests.ok(tests.lignes($$insert into kyc_documents (profil_id, chemin_piece, chemin_selfie)
  values (auth.uid(), auth.uid() || '/piece-2.jpg', auth.uid() || '/selfie-2.jpg')$$) = 1, 'après un refus, il dépose un nouveau dossier');
select tests.ok((select statut_kyc from profiles where id = auth.uid()) = 'en_attente', 'son profil repasse « en attente »');

select set_config('request.jwt.claim.sub', :diffuseur, false);
insert into advertisers (id, proprietaire_id, raison_sociale, pays, rccm, chemin_document, statut_verification)
  values ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', :diffuseur, 'Atelier Bogolan', 'ML', 'MA.BKO.2026.A.1', :diffuseur || '/entreprise-1.pdf', 'en_attente');
select tests.ok(tests.lignes($$insert into storage.objects (bucket_id, name) values ('entreprises', auth.uid() || '/entreprise-1.pdf')$$) = 1,
  'l''annonceur envoie son justificatif dans le compartiment entreprises');
select set_config('request.jwt.claim.sub', :moderateur, false);
update advertisers set statut_verification = 'refuse', motif_refus = 'RCCM illisible' where id = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
select tests.ok((select count(*) from storage.objects where bucket_id = 'entreprises') = 1, 'le modérateur lit le justificatif d''entreprise');
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.ok(tests.lignes($$update advertisers set rccm = 'MA.BKO.2026.A.2', chemin_document = auth.uid() || '/entreprise-2.pdf',
  statut_verification = 'en_attente' where id = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'$$) = 1,
  'après un refus, l''annonceur renvoie un justificatif corrigé');
select tests.refuse($$update advertisers set motif_refus = null where id = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'$$,
  'l''annonceur n''efface pas le motif du refus');

-- Bilan ----------------------------------------------------------------------------------------
reset role;
do $$ begin raise notice 'TOUS LES TESTS PASSENT : % vérifications', (select n from tests.compteur); end $$;
