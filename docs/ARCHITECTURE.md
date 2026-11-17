# Architecture — Vupay

Déduite du [cahier des charges](CAHIER_DES_CHARGES.md). Une seule base de code web, installable
comme application (PWA), sert les trois espaces ; les apps des stores viendront en V2 autour du même front.

## Vue d'ensemble

```
 Diffuseur (PWA mobile)      Annonceur (web)        Admin (web)
          │                        │                      │
          └──────────── Next.js (Vercel) ─────────────────┘
                 │ pages /diffuseur /annonceur /admin
                 │ /c/[code]  → mesure du clic puis redirection
                 │ /api/webhooks/paiements ← agrégateur Mobile Money
                 ▼
            Supabase
            ├─ Auth : numéro + code OTP (WhatsApp Business ou SMS)
            ├─ Postgres + RLS : profils, campagnes, preuves, clics, journal, retraits
            ├─ Storage privé : créatifs, captures de preuve, pièces KYC
            └─ Edge Functions : verifier-preuve (OCR + vision), retrait (payout)
                 │                         │
           Modèle de vision           Agrégateur Mobile Money
           (lecture vues + code)      (FeexPay / pawaPay / CinetPay : à choisir)
```

## Choix techniques

| Couche | Choix | Raison |
| --- | --- | --- |
| Front des 3 espaces | Next.js 14 (App Router) + Tailwind, PWA | Une base, léger en 3G, mobile d'abord |
| Apps mobiles (V2) | Capacitor ou Expo autour du même front | Présence sur les stores |
| Backend | Supabase (Postgres, Auth OTP, Storage, Edge Functions) | Déjà connecté à l'environnement |
| OCR des captures | Modèle de vision appelé depuis une Edge Function | Lecture du chiffre et du code, détection de retouche |
| Liens de clic | Route `/c/[code]` + table `clicks` | Mesure maîtrisée, sans service tiers |
| Paiements | Agrégateur Mobile Money (webhooks) | Encaissement + décaissement, pas de fonds détenus en propre |
| Hébergement | Vercel + Supabase | Déploiement simple |

## Parcours d'une campagne

1. L'annonceur crée la campagne (objectif, créatif 9:16, ciblage, budget ≥ 25 000 F) et recharge son portefeuille.
2. L'admin la modère ; elle passe `active`.
3. Le diffuseur voit les campagnes qui correspondent à son profil et en accepte une sur un réseau :
   un **assignment** est créé avec un **code visuel** (ex. `ST-4K7`, imprimé sur l'image) et un **lien court**.
4. Il publie en statut ou story. Les **clics** sont comptés en continu par `/c/[code]`.
5. Entre 20 et 24 h, il envoie la **capture des vues**. `verifier-preuve` lit le nombre et le code,
   applique les règles anti-fraude : validation automatique, vérification manuelle ou refus.
6. Après validation : écriture `gain_vues` au journal pour le diffuseur, `debit_campagne` pour l'annonceur.
7. Le diffuseur retire (≥ 1 000 F, KYC validé) ; `retrait` passe par l'agrégateur, le webhook confirme ou recrédite.

## Argent : un journal unique

- Toutes les sommes sont des **entiers FCFA** (`bigint` en base, `Fcfa` dans le code).
- Tout mouvement est une ligne de `ledger_entries` ; les soldes sont **calculés** (vue `soldes`,
  fonction `soldes()` de `src/lib/ledger.ts`), jamais stockés.
- Les gains passent `disponible = false` (en attente) puis `true` après validation.
- Chaque opération agrégateur a une référence unique ; un échec opérateur crée une écriture `retrait_annule`.

## Sécurité

- RLS sur chaque table : chacun ne lit que ses données ; l'admin passe par `est_admin()`.
- Les écritures sensibles (journal, validation des preuves, retraits) passent par les Edge Functions
  avec la clé service, jamais depuis le navigateur.
- Un trigger empêche un utilisateur de modifier lui-même son rôle, son niveau, son statut KYC ou sa suspension.
- Pièces d'identité, selfies et captures : buckets privés.
- IP des clics hachées avec un sel secret (`SEL_HACHAGE_IP`).
- Clés API uniquement dans les variables d'environnement (voir `.env.example`).

## Où se trouve quoi dans le code

| Règle du cahier des charges | Fichier |
| --- | --- |
| Montants en FCFA entiers, affichage | `src/lib/argent.ts` |
| Réseaux, phases, pays et opérateurs | `src/lib/reseaux.ts` |
| Tarifs, budget minimum, estimation, marge | `src/lib/tarifs.ts` |
| Anti-fraude des preuves et des clics | `src/lib/antifraude.ts` |
| Soldes et règles de retrait | `src/lib/ledger.ts` |
| Codes courts (visuel, lien) | `src/lib/codes.ts` |
| Tables, enums et RLS | `supabase/migrations/0001_schema_initial.sql` |
