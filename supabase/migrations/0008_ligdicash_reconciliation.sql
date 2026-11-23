-- VUPAY: réconciliation idempotente de payin. NE crédite AUCUN portefeuille.
-- Exécuter après 0007, après revue par l'administrateur de la base.
create or replace function public.confirmer_paiement_sans_credit(
  p_reference text,
  p_token text,
  p_event_key text,
  p_montant_fcfa bigint
) returns boolean
language plpgsql security definer set search_path = public
as $$
declare
  v_intent public.payment_intents%rowtype;
begin
  -- Jamais d'appel direct depuis un utilisateur authentifié.
  if coalesce(auth.role(), '') <> 'service_role' then
    raise exception 'Opération réservée au service role';
  end if;
  if p_event_key is null or length(p_event_key) < 8 then
    raise exception 'Clé événement invalide';
  end if;
  select * into v_intent from public.payment_intents
    where reference = p_reference and provider = 'ligdicash' and direction = 'payin'
    for update;
  if not found then raise exception 'Transaction inconnue'; end if;
  if v_intent.provider_token is distinct from p_token or
     v_intent.amount_fcfa is distinct from p_montant_fcfa then
    raise exception 'Montant ou token incorrect';
  end if;
  if v_intent.status = 'completed' then return false; end if;
  if v_intent.status not in ('created','pending') then
    raise exception 'Transition de statut interdite';
  end if;
  insert into public.payment_events(intent_id,event_key,provider,observed_status,verified_remote)
  values (v_intent.id,p_event_key,'ligdicash','completed',true)
  on conflict (event_key) do nothing;
  if not found then return false; end if;
  update public.payment_intents
    set status = 'completed', verified_at = now(), updated_at = now()
    where id = v_intent.id;
  return true;
end $$;
revoke all on function public.confirmer_paiement_sans_credit(text,text,text,bigint) from public, anon, authenticated;
grant execute on function public.confirmer_paiement_sans_credit(text,text,text,bigint) to service_role;
-- À appeler UNIQUEMENT après une vérification distante du montant et du statut
-- par le backend. Cette fonction n'est pas une preuve de paiement à elle seule.
