-- Consultation du journal dans l'espace choisi, avec les droits du lecteur.
create index ledger_profil_historique on ledger_entries (profil_id, id desc);
create index ledger_annonceur_historique on ledger_entries (annonceur_id, id desc);

create function mon_portefeuille(p_espace text, p_avant bigint default null)
returns jsonb language plpgsql stable security invoker set search_path = public as $$
begin
  if auth.uid() is null or p_espace is null or p_espace not in ('diffuseur', 'annonceur') then
    raise exception 'Compte ou espace invalide';
  end if;
  return (
    with journal as (
      select id, type, montant, disponible, cree_le from ledger_entries
      where (p_espace = 'diffuseur' and profil_id = auth.uid())
         or (p_espace = 'annonceur' and annonceur_id in
             (select id from advertisers where proprietaire_id = auth.uid()))
    ), page as (
      select * from journal where p_avant is null or id < p_avant order by id desc limit 21
    ), lignes as (
      select * from page order by id desc limit 20
    )
    select jsonb_build_object(
      'disponible', coalesce(sum(montant) filter (where disponible), 0)::text,
      'en_attente', coalesce(sum(montant) filter (where not disponible), 0)::text,
      'suite', (select count(*) > 20 from page),
      'lignes', (select coalesce(jsonb_agg(jsonb_build_object(
        'id', id::text, 'montant', montant::text, 'type', type,
        'disponible', disponible, 'date', cree_le
      ) order by id desc), '[]'::jsonb) from lignes)
    ) from journal
  );
end $$;
revoke all on function mon_portefeuille(text, bigint) from public, anon;
grant execute on function mon_portefeuille(text, bigint) to authenticated;

alter policy journal_lecture on ledger_entries using (
  profil_id = auth.uid() or admin_peut('voir_journal') or annonceur_id in
    (select id from advertisers where proprietaire_id = auth.uid())
);
alter policy retrait_lecture on withdrawals using (profil_id = auth.uid() or admin_peut('gerer_retraits'));
revoke truncate, insert, update, delete on ledger_entries, withdrawals from anon, authenticated;
