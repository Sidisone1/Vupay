-- Tests de sécurité du socle (Lot 1). Lancés par supabase/tests/lancer.sh sur un Postgres local.
-- Chaque bloc échoue bruyamment (raise exception) si une règle n'est pas respectée.
\set ON_ERROR_STOP on
set client_min_messages = notice;

-- Comptes Auth de test (créés avec les droits du propriétaire, comme le ferait Supabase Auth).
insert into auth.users (id, phone) values
  ('00000000-0000-0000-0000-00000000000a', '22370000001'),  -- Awa
  ('00000000-0000-0000-0000-00000000000b', '22370000002'),  -- Bakary
  ('00000000-0000-0000-0000-00000000000c', '22370000003');  -- Admin

-- Utilitaires -------------------------------------------------------------------
create or replace function test_en_tant_que(uid uuid) returns void language plpgsql as $$
begin
  perform set_config('request.jwt.claim.sub', coalesce(uid::text, ''), false);
  if uid is null then execute 'set role anon'; else execute 'set role authenticated'; end if;
end $$;
create or replace function test_proprietaire() returns void language plpgsql as $$
begin
  perform set_config('request.jwt.claim.sub', '', false);
  execute 'reset role';
end $$;
create or replace function test_doit_echouer(requete text, nom text) returns void language plpgsql as $$
begin
  begin
    execute requete;
  exception when others then
    raise notice 'ok — refusé : %', nom;
    return;
  end;
  raise exception 'ÉCHEC — aurait dû être refusé : %', nom;
end $$;
create or replace function test_verifier(condition boolean, nom text) returns void language plpgsql as $$
begin
  if condition is not true then raise exception 'ÉCHEC — %', nom; end if;
  raise notice 'ok — %', nom;
end $$;
grant execute on function test_en_tant_que(uuid), test_proprietaire(), test_doit_echouer(text, text), test_verifier(boolean, text)
  to anon, authenticated;

-- 1. Création de profil --------------------------------------------------------
select test_en_tant_que('00000000-0000-0000-0000-00000000000a');
select test_doit_echouer($$insert into profiles (id, telephone, pays, espaces)
  values ('00000000-0000-0000-0000-00000000000a', 'x', 'ML', '{admin}')$$, 'espace admin choisi par l''utilisateur');
select test_doit_echouer($$insert into profiles (id, telephone, pays)
  values ('00000000-0000-0000-0000-00000000000b', 'x', 'ML')$$, 'créer le profil de quelqu''un d''autre');
insert into profiles (id, telephone, pays, ville, espaces, role, statut_kyc, niveau, suspendu)
  values ('00000000-0000-0000-0000-00000000000a', '+22399999999', 'ML', 'Bamako', '{diffuseur}', 'admin', 'valide', 'or', false);
select test_verifier((select telephone from profiles where id = auth.uid()) = '+22370000001',
  'le téléphone vient du compte vérifié, pas du formulaire');
select test_verifier((select role from profiles where id = auth.uid()) = 'diffuseur', 'impossible de se déclarer admin');
select test_verifier((select statut_kyc from profiles where id = auth.uid()) = 'non_soumis', 'KYC remis à non_soumis');
select test_verifier((select niveau from profiles where id = auth.uid()) = 'bronze', 'niveau remis à bronze');
select test_verifier((select code_parrain from profiles where id = auth.uid()) ~ '^VU[0-9A-F]{6}$', 'code parrain généré');

select test_en_tant_que('00000000-0000-0000-0000-00000000000b');
insert into profiles (id, telephone, pays, espaces) values ('00000000-0000-0000-0000-00000000000b', '', 'CI', '{annonceur}');
select test_verifier((select role from profiles where id = auth.uid()) = 'annonceur', 'rôle principal = premier espace');

-- 2. Lecture : chacun ne voit que son profil -------------------------------------
select test_verifier((select count(*) from profiles) = 1, 'Bakary ne voit que son propre profil');
select test_en_tant_que(null);
select test_verifier((select count(*) from profiles) = 0, 'un visiteur anonyme ne voit aucun profil');

-- 3. Mises à jour ------------------------------------------------------------------
select test_en_tant_que('00000000-0000-0000-0000-00000000000a');
update profiles set ville = 'Ségou' where id = auth.uid();
select test_verifier((select ville from profiles where id = auth.uid()) = 'Ségou', 'Awa modifie sa ville');
update profiles set espaces = '{diffuseur,annonceur}' where id = auth.uid();
select test_verifier((select espaces from profiles where id = auth.uid()) = '{diffuseur,annonceur}',
  'Awa ouvre l''espace annonceur avec la même identité');
select test_doit_echouer($$update profiles set statut_kyc = 'valide' where id = auth.uid()$$, 'valider son propre KYC');
select test_doit_echouer($$update profiles set role = 'admin' where id = auth.uid()$$, 'se promouvoir admin');
select test_doit_echouer($$update profiles set telephone = '+22311111111' where id = auth.uid()$$, 'changer de téléphone');
select test_doit_echouer($$update profiles set espaces = '{}' where id = auth.uid()$$, 'retirer tous ses espaces');
select test_doit_echouer($$update profiles set espaces = '{diffuseur,admin}' where id = auth.uid()$$, 'ajouter l''espace admin');
update profiles set ville = 'Piraté' where id = '00000000-0000-0000-0000-00000000000b';
select test_proprietaire();
select test_verifier((select ville from profiles where id = '00000000-0000-0000-0000-00000000000b') is null,
  'Awa ne peut pas modifier le profil de Bakary');

-- 4. Espace annonceur ---------------------------------------------------------------
-- Clara : diffuseuse seulement.
insert into auth.users (id, phone) values ('00000000-0000-0000-0000-00000000000d', '22370000004');
select test_en_tant_que('00000000-0000-0000-0000-00000000000d');
insert into profiles (id, telephone, pays) values ('00000000-0000-0000-0000-00000000000d', '', 'ML');
select test_doit_echouer($$insert into advertisers (proprietaire_id, raison_sociale, pays)
  values ('00000000-0000-0000-0000-00000000000d', 'Boutique Clara', 'ML')$$, 'créer une entreprise sans espace annonceur');
select test_en_tant_que('00000000-0000-0000-0000-00000000000a');
insert into advertisers (proprietaire_id, raison_sociale, pays) values (auth.uid(), 'Awa Couture', 'ML');
select test_verifier((select count(*) from advertisers) = 1, 'Awa (annonceuse) crée son entreprise');
select test_doit_echouer($$insert into advertisers (proprietaire_id, raison_sociale, pays)
  values ('00000000-0000-0000-0000-00000000000b', 'Au nom de Bakary', 'CI')$$, 'créer une entreprise au nom d''un autre');

-- 5. Argent : aucun utilisateur n'écrit dans le journal ---------------------------------
select test_doit_echouer($$insert into ledger_entries (profil_id, type, montant)
  values (auth.uid(), 'gain_clics', 100000)$$, 'se créditer dans le journal');
select test_doit_echouer($$insert into withdrawals (profil_id, montant, operateur, numero)
  values (auth.uid(), 5000, 'orange', '+22370000001')$$, 'créer un retrait directement');

-- 6. Suspension et admin -------------------------------------------------------------------
select test_proprietaire();
insert into profiles (id, telephone, pays, role, role_admin)
  values ('00000000-0000-0000-0000-00000000000c', '+22370000003', 'ML', 'admin', 'super_admin');
update profiles set suspendu = true where id = '00000000-0000-0000-0000-00000000000d';
select test_en_tant_que('00000000-0000-0000-0000-00000000000d');
update profiles set ville = 'Kayes' where id = auth.uid();
select test_proprietaire();
select test_verifier((select ville from profiles where id = '00000000-0000-0000-0000-00000000000d') is null,
  'un compte suspendu ne modifie plus son profil');

select test_en_tant_que('00000000-0000-0000-0000-00000000000c');
select test_verifier((select count(*) from profiles) = 4, 'l''admin voit tous les profils');
update profiles set statut_kyc = 'valide' where id = '00000000-0000-0000-0000-00000000000a';
select test_verifier((select statut_kyc from profiles where id = '00000000-0000-0000-0000-00000000000a') = 'valide',
  'l''admin peut valider un KYC');
select test_proprietaire();

\echo 'Tous les tests de sécurité du socle sont passés.'
