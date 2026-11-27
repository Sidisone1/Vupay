begin;
reset role;
insert into ledger_entries (profil_id, type, montant, disponible)
select '33333333-3333-3333-3333-333333333333', 'ajustement', 10, true from generate_series(1,21);
insert into ledger_entries (profil_id, type, montant, disponible)
values ('33333333-3333-3333-3333-333333333333','ajustement',9007199254740993,false);
insert into ledger_entries (annonceur_id, type, montant)
values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','recharge_annonceur',450);
set local role authenticated;
select set_config('request.jwt.claim.sub','33333333-3333-3333-3333-333333333333',true);
select tests.ok(mon_portefeuille('diffuseur')->>'en_attente' = '9007199254740993','précision entière du solde');
select tests.ok(mon_portefeuille('diffuseur')->>'disponible' = '210','total sur toutes les pages');
select tests.ok(jsonb_array_length(mon_portefeuille('diffuseur')->'lignes') = 20,'taille de page');
select tests.ok((mon_portefeuille('diffuseur')->>'suite')::boolean,'suite annoncée');
select tests.ok(jsonb_array_length(mon_portefeuille('diffuseur',(mon_portefeuille('diffuseur')#>>'{lignes,19,id}')::bigint)->'lignes')=2,'suite sans répétition');
select tests.ok(mon_portefeuille('annonceur')->>'disponible'='0','isolation annonceur');
select set_config('request.jwt.claim.sub','22222222-2222-2222-2222-222222222222',true);
select tests.ok(mon_portefeuille('annonceur')->>'disponible'='450','solde entreprise');
select tests.refuse($$select mon_portefeuille('admin')$$,'espace inconnu');
select set_config('request.jwt.claim.sub','66666666-6666-6666-6666-666666666666',true);
select tests.ok((select count(*) from ledger_entries)=0,'support ne lit pas les finances des clients');
select set_config('request.jwt.claim.sub','55555555-5555-5555-5555-555555555555',true);
select tests.ok((select count(*) from ledger_entries)=23,'lecture par le gestionnaire finance');
set local role anon;
select tests.refuse($$select mon_portefeuille('diffuseur')$$,'connexion requise');
rollback;
