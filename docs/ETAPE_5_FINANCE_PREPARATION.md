# Étape 5 — Finance V2 : préparation technique (23/11/2026)

## Livré dans ce commit
- `apps/web/src/lib/finance.ts` : simulation pure de répartition en FCFA entiers.
- `apps/web/src/lib/finance.test.ts` : cas de tests Vitest, à exécuter dans l'environnement du projet.
- Aucune activation de paiement, aucun tarif commercial présumé, aucune migration SQL.

## Invariants
1. Une action refusée ou en attente ne produit aucun montant simulé.
2. Une action validée exige un tarif correspondant au type de bouton.
3. La rémunération diffuseur ne dépasse pas le coût annonceur.
4. Les montants sont des entiers FCFA sûrs, jamais des nombres flottants.
5. Une visite ou une vue ne fait pas partie des types d'actions rémunérables.

## Avant de brancher les flux réels
- Approuver tarifs, marge, seuils, prestataire de paiement et cadre légal.
- Définir une table de tarifs versionnés par campagne et action.
- Écrire les mouvements dans `ledger_entries` au sein d'une transaction PostgreSQL atomique.
- Garantir l'idempotence avec une contrainte unique par action validée.
- Vérifier le budget disponible avec verrouillage transactionnel avant débit.
- Implémenter remboursements, litiges, réconciliation et callbacks signés.
- Tester en base les accès RLS, doubles callbacks, courses concurrentes et insuffisance de solde.
- Ne déployer aucun paiement sans revue de sécurité et accord explicite.

**État :** préparation du code de calcul uniquement ; aucun paiement actif. Les tests de ce commit n'ont pas été exécutés par cette opération GitHub.
