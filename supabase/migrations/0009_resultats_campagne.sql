-- Une ligne par type de bouton, quel que soit le nombre d'événements dans PostgREST.
create function resultats_campagne(p_campagne uuid, p_diffuseur boolean)
returns jsonb language sql stable security invoker set search_path = public as $$
  with liens as (
    select a.id from assignments a join campaigns c on c.id = a.campagne_id
    where c.id = p_campagne and (
      (p_diffuseur and a.diffuseur_id = auth.uid()) or
      (not p_diffuseur and exists (select 1 from advertisers e
        where e.id = c.annonceur_id and e.proprietaire_id = auth.uid()))
    )
  ), actions as (
    select t.type,
      count(a.id) filter (where a.statut = 'validee') as validee,
      count(a.id) filter (where a.statut = 'en_attente') as en_attente,
      count(a.id) filter (where a.statut = 'refusee') as refusee
    from unnest(enum_range(null::action_contact)) t(type)
    left join contact_actions a on a.type = t.type and a.campagne_id = p_campagne
      and a.assignment_id in (select id from liens)
    group by t.type
  )
  select jsonb_build_object(
    'visites', (select count(*) from page_visits where campagne_id = p_campagne
      and assignment_id in (select id from liens) and not robot),
    'liens', (select count(*) from liens),
    'parType', jsonb_object_agg(type, jsonb_build_object('validee',validee,'en_attente',en_attente,'refusee',refusee)),
    'validees', sum(validee), 'enAttente', sum(en_attente), 'refusees', sum(refusee)
  ) from actions;
$$;
revoke all on function resultats_campagne(uuid, boolean) from public, anon;
grant execute on function resultats_campagne(uuid, boolean) to authenticated;
