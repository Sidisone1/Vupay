begin;
reset role;
insert into page_visits(assignment_id,campagne_id,visiteur,empreinte)
select a.id,a.campagne_id,'visite-' || n,'test' from assignments a cross join generate_series(1,1001) n
where code_lien=(select valeur from tests.memo where cle='lien');
set local role authenticated;
select set_config('request.jwt.claim.sub','22222222-2222-2222-2222-222222222222',true);
select tests.ok((resultats_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff',false)->>'visites')::bigint
  = (select count(*) from page_visits where campagne_id='ffffffff-ffff-ffff-ffff-ffffffffffff' and not robot),'total de toutes les visites humaines');
select tests.ok((resultats_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff',false)->>'visites')::bigint>1000,'au-delà de la première page API');
select tests.ok((resultats_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff',false)->>'validees')::bigint
  = (select count(*) from contact_actions where statut='validee' and campagne_id='ffffffff-ffff-ffff-ffff-ffffffffffff'),'actions validées réconciliées');
select set_config('request.jwt.claim.sub','33333333-3333-3333-3333-333333333333',true);
select tests.ok((resultats_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff',true)->>'liens')::bigint=2,'liens du diffuseur');
select tests.ok((resultats_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff',false)->>'liens')::bigint=0,'espace annonceur isolé');
set local role anon;
select tests.refuse($$select resultats_campagne('ffffffff-ffff-ffff-ffff-ffffffffffff',true)$$,'pas de statistiques publiques');
rollback;
