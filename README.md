# Vupay

Vupay est une application qui paie par vue.

Plateforme publicitaire : des marques (annonceurs) paient pour que des particuliers (diffuseurs)
publient leurs pubs sur leur **statut WhatsApp** et leurs **stories** Instagram, Facebook, TikTok,
Snapchat et Telegram. Le diffuseur est payé **à la vue et au clic validés** et retire ses gains en
**Mobile Money** dans les 8 pays de l'UEMOA.

> Vupay est une plateforme publicitaire, pas un service de paiement. Marque, design et code propres :
> aucune reprise du nom, des couleurs, du logo ou des visuels de WhatsPay ni des réseaux sociaux.

- Cahier des charges : [`docs/CAHIER_DES_CHARGES.md`](docs/CAHIER_DES_CHARGES.md)
  (référence en ligne : https://claude.ai/code/artifact/88ea2633-767a-4d80-9876-02c6f3c32a76)
- Architecture : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Consignes pour Claude Code : [`AGENTS.md`](AGENTS.md)

## État

**Architecture posée, lot 1 (socle) à démarrer.** Ce qui existe :

- les trois espaces (diffuseur, annonceur, admin) avec tous leurs écrans en place, marqués « à construire » avec leur lot ;
- les règles métier testées dans `src/lib` : montants en FCFA entiers, tarifs et estimation de campagne,
  anti-fraude des preuves et des clics, soldes calculés depuis le journal, règles de retrait ;
- le schéma Supabase complet avec la sécurité RLS sur chaque table (`supabase/migrations`) ;
- les squelettes de la route des liens courts `/c/[code]`, du webhook de paiement et des Edge Functions.

## Organisation

| Dossier | Contenu |
| --- | --- |
| `src/app/(auth)` | Connexion par numéro WhatsApp + code OTP |
| `src/app/diffuseur` | Espace diffuseur : campagnes, preuves, gains, retraits, profil, KYC |
| `src/app/annonceur` | Espace annonceur : campagnes, création, portefeuille, entreprise |
| `src/app/admin` | Back-office : preuves, KYC, modération, retraits, utilisateurs, paramètres, journal |
| `src/app/c/[code]` | Lien court personnel du diffuseur (mesure des clics) |
| `src/app/api/webhooks` | Webhooks de l'agrégateur Mobile Money |
| `src/lib` | Règles métier pures et testées + clients Supabase |
| `src/components` | Composants d'interface partagés |
| `supabase/migrations` | Schéma de la base (Postgres) et règles RLS |
| `supabase/functions` | Edge Functions : vérification des preuves (OCR), retraits |
| `public` | Manifeste PWA, icônes |
| `docs` | Cahier des charges, architecture |

## Démarrer

```bash
npm install
cp .env.example .env.local   # renseigner les clés Supabase (jamais commitées)
npm test                     # règles métier
npm run dev                  # http://localhost:3000
```

Base de données : créer un projet Supabase, puis appliquer `supabase/migrations/0001_schema_initial.sql`
(`supabase db push` avec la CLI, ou l'éditeur SQL du tableau de bord).

## Feuille de route du MVP

| Lot | Contenu | Durée estimée |
| --- | --- | --- |
| 1. Socle | Next.js + Supabase, auth OTP, rôles, profils, schéma, déploiement Vercel | ≈ 1 semaine |
| 2. Campagnes | Création annonceur, modération admin, liste et acceptation diffuseur, code unique et lien court | ≈ 1 semaine |
| 3. Preuves et clics | Upload de capture, OCR, score de fraude, file admin, comptage des clics, journal | ≈ 1 à 2 semaines |
| 4. Argent | Portefeuille annonceur, retraits via l'agrégateur (sandbox), webhooks, KYC | ≈ 1 à 2 semaines |
| 5. Pilote | 3 à 5 annonceurs, 100 à 300 diffuseurs dans un pays, ajustement des seuils | ≈ 2 semaines |

V2 après le pilote : niveaux et badges, parrainage, apps Play Store / App Store, rapports PDF, pays supplémentaires.
