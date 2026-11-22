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

## Façon de travailler sur le dépôt

Règle fixée par le porteur du projet, à suivre à chaque modification :

1. **Modifier** : faire les changements demandés et lancer les tests (`cd apps/web && npm test`).
2. **Mettre à jour** : commiter et pousser sur la branche de travail de la session, jamais directement sur la branche principale.
3. **Demander** : résumer au porteur du projet ce qui a changé et lui demander l'accord pour l'ajouter à la branche principale.
4. **Ajouter seulement après accord** : une fois l'accord donné, ouvrir la pull request et la fusionner dans la branche principale. Sans accord explicite, rien n'est fusionné.
