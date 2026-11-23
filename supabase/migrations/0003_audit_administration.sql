-- Vupay — étape 2 : traçabilité des actions d'administration sur les comptes.
-- Chaque suspension, réactivation, attribution ou retrait de rôle admin est inscrit au journal
-- d'audit. Un admin ne peut ni se suspendre ni se retirer lui-même l'accès admin (pas de
-- verrouillage accidentel du back-office).

create or replace function auditer_profil() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then
    return new;
  end if;
  if new.suspendu is distinct from old.suspendu then
    if new.id = auth.uid() then
      raise exception 'Un admin ne peut pas se suspendre lui-même';
    end if;
    insert into audit_logs (admin_id, action, cible)
    values (auth.uid(), case when new.suspendu then 'compte_suspendu' else 'compte_reactive' end, new.id::text);
  end if;
  if new.role_admin is distinct from old.role_admin then
    insert into audit_logs (admin_id, action, cible, details)
    values (auth.uid(), 'role_admin_modifie', new.id::text,
            jsonb_build_object('avant', old.role_admin, 'apres', new.role_admin));
  end if;
  return new;
end $$;
create trigger profil_audit after update on profiles for each row execute function auditer_profil();

create or replace function auditer_roles() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  ligne profile_roles := case when tg_op = 'DELETE' then old else new end;
begin
  if auth.uid() is null or ligne.role <> 'admin' then
    return ligne;
  end if;
  if tg_op = 'DELETE' and ligne.profil_id = auth.uid() then
    raise exception 'Un admin ne peut pas se retirer lui-même l''accès admin';
  end if;
  insert into audit_logs (admin_id, action, cible)
  values (auth.uid(), case when tg_op = 'DELETE' then 'acces_admin_retire' else 'acces_admin_donne' end, ligne.profil_id::text);
  return ligne;
end $$;
create trigger roles_audit before insert or delete on profile_roles for each row execute function auditer_roles();
