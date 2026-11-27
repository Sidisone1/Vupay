-- Fonctions serveur préparées pour la recette. Aucun déclencheur, aucun tarif par défaut.
create table tarifs_actions (
  campagne_id uuid not null references campaigns,
  type action_contact not null,
  applicable_le timestamptz not null default now(),
  prix bigint not null check (prix >= 0),
  gain bigint not null check (gain between 0 and prix),
  primary key (campagne_id, type, applicable_le)
);
alter table tarifs_actions enable row level security;
revoke all on tarifs_actions from public, anon, authenticated, service_role;
grant select, insert on tarifs_actions to service_role;

-- La clé primaire conserve un règlement unique, y compris pour une action gratuite.
create table reglements_actions (
  action_id bigint primary key references contact_actions,
  campagne_id uuid not null,
  type action_contact not null,
  applicable_le timestamptz not null,
  debit_id bigint not null unique references ledger_entries,
  credit_id bigint not null unique references ledger_entries,
  foreign key (campagne_id, type, applicable_le) references tarifs_actions
);
alter table reglements_actions enable row level security;
revoke all on reglements_actions from public, anon, authenticated, service_role;
grant select on reglements_actions to service_role;
create index reglements_par_campagne on reglements_actions(campagne_id);

create function regler_action(p_action bigint) returns text
language plpgsql security definer set search_path = public as $$
declare
  a contact_actions;
  c campaigns;
  t tarifs_actions;
  solde numeric;
  consomme numeric;
  debit bigint;
  credit bigint;
begin
  select * into strict a from contact_actions where id = p_action for update;
  if exists (select 1 from reglements_actions where action_id = a.id) then return 'deja_reglee'; end if;
  if a.statut <> 'validee' then return 'non_validee'; end if;
  select * into strict c from campaigns where id = a.campagne_id for update;
  select * into t from tarifs_actions where campagne_id = c.id and type = a.type
    and applicable_le <= a.cree_le order by applicable_le desc limit 1;
  if not found then return 'sans_tarif'; end if;

  -- Toutes les campagnes d'un annonceur partagent le même solde disponible.
  perform 1 from advertisers where id = c.annonceur_id for update;
  select coalesce(sum(montant), 0) into solde from ledger_entries
    where annonceur_id = c.annonceur_id and disponible;
  select coalesce(-sum(e.montant), 0) into consomme from reglements_actions r
    join ledger_entries e on e.id = r.debit_id where r.campagne_id = c.id;
  if c.budget is null or consomme + t.prix > c.budget then return 'budget_insuffisant'; end if;
  if solde < t.prix then return 'solde_insuffisant'; end if;

  insert into ledger_entries (annonceur_id,type,montant,reference)
    values (c.annonceur_id,'debit_campagne',-t.prix,'action:' || a.id) returning id into debit;
  insert into ledger_entries (profil_id,type,montant,reference)
    values (a.diffuseur_id,'gain_clics',t.gain,'action:' || a.id) returning id into credit;
  insert into reglements_actions values (a.id,c.id,a.type,t.applicable_le,debit,credit);
  return 'reglee';
end $$;
revoke all on function regler_action(bigint) from public, anon, authenticated;
grant execute on function regler_action(bigint) to service_role;

-- Le super admin publie une nouvelle version. La date d'effet est fixée en base.
create function publier_tarif_action(p_campagne uuid, p_type action_contact, p_prix bigint, p_gain bigint)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not admin_peut('modifier_parametres') then raise exception 'Accès refusé'; end if;
  insert into tarifs_actions(campagne_id,type,applicable_le,prix,gain)
    values(p_campagne,p_type,clock_timestamp(),p_prix,p_gain);
  insert into audit_logs(admin_id,action,cible,details)
    values(auth.uid(),'tarif_action_publie',p_campagne::text,
      jsonb_build_object('type',p_type,'prix',p_prix::text,'gain',p_gain::text));
end $$;
revoke all on function publier_tarif_action(uuid,action_contact,bigint,bigint) from public, anon;
grant execute on function publier_tarif_action(uuid,action_contact,bigint,bigint) to authenticated;
grant select on tarifs_actions to authenticated;
create policy tarifs_administration on tarifs_actions for select to authenticated
  using (admin_peut('modifier_parametres'));
