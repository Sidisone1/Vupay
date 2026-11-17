# Consignes pour Claude Code — Vupay

Reprises du cahier des charges (section « Consignes à donner à Claude Code »).

- Travailler **lot par lot** (voir `docs/FEUILLE_DE_ROUTE.md`) ; ne pas commencer un lot avant que le précédent soit testé.
- Toutes les sommes en **entiers FCFA**, jamais en décimales ; tout mouvement d'argent passe par `ledger_entries`.
- Règles de sécurité Supabase (**RLS**) sur chaque table dès sa création.
- Clés API dans les variables d'environnement, **jamais dans le code** ; ne jamais commiter de `.env`.
- Paiements d'abord en **mode test (sandbox)** ; passage en production seulement avec l'accord du porteur du projet.
- Interface en **français**, mobile d'abord, pages légères pour la 3G.
- Identité visuelle propre à Vupay : aucune reprise des couleurs, logo ou visuels de WhatsPay ni des réseaux.
- Les règles métier vivent dans `apps/web/src/lib`, sans dépendance, avec leurs tests (`cd apps/web && npm test`).
