# VUPAY V2 — préparation du budget (branche de travail, 23/11/2026)

## Ajouts
- `apps/web/src/lib/budget-campagne.ts` : vérification de budget disponible, réservations et dépenses, prévision d'un débit.
- `apps/web/src/lib/budget-campagne.test.ts` : tests Vitest de simulation.

## Sécurité et limites
- Aucun tarif commercial inventé : tous les montants sont fournis par la campagne.
- Aucune écriture Supabase ni activation de paiement.
- Une action non validée n'est jamais facturée.
- Ce contrôle côté TypeScript ne suffit **pas** à empêcher les doubles paiements : il faudra une transaction PostgreSQL atomique avec verrouillage, idempotence et écritures `ledger_entries`.
- Les tests ajoutés sont à exécuter dans l'environnement Next.js ; ils ne sont pas attestés par le simple commit GitHub.

## Suite
1. Approuver les règles de tarification, marge et seuils.
2. Créer migration `0007` sans effacement, avec RLS et tests SQL.
3. Développer transaction de crédit/débit atomique, idempotence et réconciliation.
4. Intégrer le prestataire Mobile Money en sandbox.
5. Tester de bout en bout avant fusion dans `main` et mise en service.

Branche volontairement séparée de `main`, conformément à `AGENTS.md`.
