-- Tests des écrans admin (migration 0003) : journal d'audit et protection contre l'auto-blocage.
-- S'exécute après 10_comptes_permissions.sql, sur la même base (mêmes personnes, mêmes outils).

\set ON_ERROR_STOP on
\set diffuseur   '''11111111-1111-1111-1111-111111111111'''
\set autre       '''33333333-3333-3333-3333-333333333333'''
\set moderateur  '''44444444-4444-4444-4444-444444444444'''
\set support     '''66666666-6666-6666-6666-666666666666'''
\set superadmin  '''77777777-7777-7777-7777-777777777777'''

update tests.compteur set n = 0;
set role authenticated;

-- Suspension -----------------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :support, false);
select tests.ok(tests.lignes($$update profiles set suspendu = true where id = '11111111-1111-1111-1111-111111111111'$$) = 1,
  'le support suspend un compte depuis l''écran utilisateurs');
select tests.ok(exists (select 1 from audit_logs where action = 'compte_suspendu' and cible = '11111111-1111-1111-1111-111111111111'
  and admin_id = auth.uid()), 'la suspension est inscrite au journal d''audit avec le nom de l''admin');
select tests.ok(tests.lignes($$update profiles set suspendu = false where id = '11111111-1111-1111-1111-111111111111'$$) = 1,
  'le support réactive le compte');
select tests.ok(exists (select 1 from audit_logs where action = 'compte_reactive'), 'la réactivation est inscrite au journal');
select tests.refuse($$update profiles set suspendu = true where id = auth.uid()$$, 'un admin ne se suspend pas lui-même');

-- Accès admin ------------------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :superadmin, false);
select tests.ok(tests.lignes($$insert into profile_roles values ('33333333-3333-3333-3333-333333333333', 'admin')$$) = 1,
  'le super admin donne l''accès admin');
select tests.ok(exists (select 1 from audit_logs where action = 'acces_admin_donne' and cible = '33333333-3333-3333-3333-333333333333'),
  'l''accès admin donné est inscrit au journal');
update profiles set role_admin = 'support' where id = :autre;
select tests.ok(exists (select 1 from audit_logs where action = 'role_admin_modifie' and details->>'apres' = 'support'),
  'le changement de rôle admin est inscrit au journal (avant / après)');
select tests.ok(tests.lignes($$delete from profile_roles where profil_id = '33333333-3333-3333-3333-333333333333' and role = 'admin'$$) = 1,
  'le super admin retire l''accès admin');
select tests.ok(exists (select 1 from audit_logs where action = 'acces_admin_retire'), 'le retrait d''accès est inscrit au journal');
select tests.refuse($$delete from profile_roles where profil_id = auth.uid() and role = 'admin'$$,
  'le super admin ne se retire pas lui-même l''accès admin');
select tests.ok(exists (select 1 from profile_roles where profil_id = auth.uid() and role = 'admin'), 'il garde son accès');

-- Journal ----------------------------------------------------------------------------------
select set_config('request.jwt.claim.sub', :diffuseur, false);
select tests.ok((select count(*) from audit_logs) = 0, 'un utilisateur ne lit pas le journal d''audit');
select tests.refuse($$insert into audit_logs (admin_id, action) values (auth.uid(), 'faux')$$, 'personne n''écrit directement au journal');
select set_config('request.jwt.claim.sub', :moderateur, false);
select tests.invisible($$delete from audit_logs$$, 'un admin n''efface pas le journal');

-- Écrans de vérification : lecture des dossiers en attente avec le profil du demandeur ---------
select tests.ok((select count(*) from kyc_documents k join profiles p on p.id = k.profil_id where k.statut = 'en_attente') = 1,
  'le modérateur voit la file des KYC en attente avec le profil');
select tests.ok((select count(*) from advertisers where statut_verification = 'en_attente') = 2,
  'le modérateur voit la file des entreprises en attente');

reset role;
do $$ begin raise notice 'TOUS LES TESTS PASSENT : % vérifications', (select n from tests.compteur); end $$;
