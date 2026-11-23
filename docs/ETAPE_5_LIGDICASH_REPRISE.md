# VUPAY — Point de reprise LigdiCash (23/11/2026)

## Code sur branche feature/finance-v2-budget-20261123
- `ligdicash-client.ts` : adaptateur HTTP avec désactivation par défaut.
- `ligdicash-payin.ts` : brouillon de payload de facture payin redirect (à comparer à la référence API exacte).
- `ligdicash-reconciliation.ts` : décision pure de rapprochement après confirmation distante.
- `0007_ligdicash_preparation.sql` : intentions et événements de paiement (non appliquée).
- `0008_ligdicash_reconciliation.sql` : confirmation idempotente sans crédit (non appliquée).
- Tests Vitest associés écrits mais **non exécutés/vérifiés**.

## Blocages avant intégration complète
1. Lire les pages de référence officielles pour valider les corps des requêtes, réponses et paramètres de confirmation (les champs `transaction_id`, `token`, `amount`, `currency`, `status` sont des hypothèses d'adaptation, pas un contrat certifié).
2. Ajouter routes Next.js authentifiées pour initier la recharge, la vérifier et gérer les callbacks, sans exposer de secrets.
3. Implémenter un ledger financier équilibré et atomique, des règles d'autorisation admin pour payout, des protections contre les soldes négatifs, les répétitions et les appels concurrents.
4. Vérifier le processus officiel de vérification/authentification des callbacks, puis gérer les retries, timeouts et événements hors ordre.
5. Faire revue SQL/RLS, appliquer migrations en environnement contrôlé, exécuter tests Vitest, typecheck, build et tests SQL.
6. Faire valider le contrat marchand et les conditions d'essai LigdiCash : aucun sandbox isolé annoncé.
7. Après tests et validation, demander l'accord avant de fusionner dans main.

## Sécurité
Aucune clé n'a été créée, aucune transaction n'a été exécutée et aucune migration n'a été appliquée. Le module ne doit pas être activé en production en l'état.
