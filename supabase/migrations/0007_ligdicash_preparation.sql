-- VUPAY étape 5 : registre de transactions préparatoires, AUCUN transfert automatique.
-- Appliquer après revue de sécurité, uniquement sur environnement de test contrôlé.
create table if not exists public.payment_intents (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id),
  provider text not null check (provider in ('ligdicash','saspay')),
  direction text not null check (direction in ('payin','payout')),
  reference text not null unique,
  provider_token text unique,
  amount_fcfa bigint not null check (amount_fcfa > 0),
  currency text not null default 'XOF' check (currency = 'XOF'),
  status text not null default 'created'
    check (status in ('created','pending','completed','failed','cancelled','review')),
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint completed_must_be_verified check (status <> 'completed' or verified_at is not null)
);
create index if not exists payment_intents_owner on public.payment_intents(owner_id,created_at desc);
create index if not exists payment_intents_provider_status on public.payment_intents(provider,status);
alter table public.payment_intents enable row level security;
-- Aucun accès client direct en écriture. L'accès de lecture est limité au propriétaire.
create policy payment_intents_owner_read on public.payment_intents
  for select to authenticated using (owner_id = (select auth.uid()));
revoke all on public.payment_intents from anon, authenticated;

create table if not exists public.payment_events (
  id bigint generated always as identity primary key,
  intent_id uuid not null references public.payment_intents(id),
  event_key text not null unique,
  provider text not null check (provider in ('ligdicash','saspay')),
  observed_status text not null,
  verified_remote boolean not null default false,
  recorded_at timestamptz not null default now()
);
create index if not exists payment_events_intent on public.payment_events(intent_id,recorded_at desc);
alter table public.payment_events enable row level security;
revoke all on public.payment_events from anon, authenticated;
-- Les opérations d'écriture sont réservées au service role du backend.
-- Ne PAS considérer ces tables comme un ledger de soldes : aucune fonction de crédit n'est créée.
