# Consignes pour les IA et les développeurs — Vupay

Ce fichier est lu par les assistants de code (Claude Code via `CLAUDE.md`, Codex, Cursor, Copilot, Gemini…). **Commencer par `docs/ETAT_DU_PROJET.md`** : état des étapes, infrastructure, décisions et ce qui reste à faire.

Reprises du cahier des charges (section « Consignes à donner à Claude Code »).

- Travailler **lot par lot** (voir `docs/ROADMAP_V2.md`) ; ne pas commencer un lot avant que le précédent soit testé.
- Toutes les sommes en **entiers FCFA**, jamais en décimales ; tout mouvement d'argent passe par `ledger_entries`.
- Règles de sécurité Supabase (**RLS**) sur chaque table dès sa création.
- Clés API dans les variables d'environnement, **jamais dans le code** ; ne jamais commiter de `.env`.
- Paiements d'abord en **mode test (sandbox)** ; passage en production seulement avec l'accord du porteur du projet.
- Interface en **français**, mobile d'abord, pages légères pour la 3G.
- Identité visuelle propre à Vupay : aucune reprise des couleurs, logo ou visuels de WhatsPay ni des réseaux.
- Les règles métier vivent dans `apps/web/src/lib`, sans dépendance, avec leurs tests (`cd apps/web && npm test`).

## Règles techniques établies (ne pas défaire)

- **Aucune rémunération aux vues ni aux visites** : seules les actions qualifiées (`contact_actions` validées) pourront être payées.
- **Migrations sans aucun `drop`** (ni table, ni colonne, ni règle) : Supabase demande alors une confirmation manuelle. Modifier en place (`alter policy`, `create or replace function`, nouvelles colonnes). Numéroter à la suite (`0007_…`).
- **Chaque migration a ses tests SQL** dans `supabase/tests/NN_*.sql`, joués par `supabase/tests/lancer.sh` sur un Postgres local (avec `00_simulation_supabase.sql`). Tester chaque droit avec le rôle réel de l'utilisateur.
- **Une migration appliquée sur Supabase doit être identique au fichier du dépôt.**
- Visites et actions s'enregistrent **uniquement côté serveur** (clé service), jamais depuis le navigateur.
- Aucune redirection vers une adresse lue dans la requête : seulement vers des destinations enregistrées et contrôlées.
- Aucune adresse IP en clair : empreintes HMAC avec `SEL_HACHAGE_IP`.

## Commandes

```bash
cd apps/web && npm install && npm test && npm run typecheck && npm run build
PGHOST=localhost PGUSER=postgres supabase/tests/lancer.sh   # tests des droits en base
```

## Façon de travailler sur le dépôt

Règle fixée par le porteur du projet, à suivre à chaque modification :

1. **Modifier** : faire les changements demandés et lancer les tests (`cd apps/web && npm test`).
2. **Mettre à jour** : commiter et pousser sur la branche de travail de la session, jamais directement sur la branche principale.
3. **Demander** : résumer au porteur du projet ce qui a changé et lui demander l'accord pour l'ajouter à la branche principale.
4. **Ajouter seulement après accord** : une fois l'accord donné, ouvrir la pull request et la fusionner dans la branche principale. Sans accord explicite, rien n'est fusionné.

Le porteur du projet n'est pas technique : lui expliquer simplement, en français, et prendre les décisions techniques à sa place quand il le demande.
