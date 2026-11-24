# Étape 5 — Finance V2 : préparation technique (23/11/2026)

## Préparation technique disponible
- `apps/web/src/lib/finance.ts` : simulation pure de répartition en FCFA entiers.
- `apps/web/src/lib/finance.test.ts` : cas de tests Vitest, à exécuter dans l'environnement du projet.
- Aucune activation de paiement, aucun tarif commercial présumé, aucune migration SQL.

## Aperçu du budget d'une campagne

`simulerBudgetCampagne` calcule à partir des tarifs fournis et des actions déjà validées le coût annonceur, la rémunération diffuseur, la marge et le budget restant ou manquant. Un doublon identique est ignoré. Une clé répétée avec un statut différent ou un autre type est rejetée. Les visites sont exclues de l'entrée du calcul.

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

**État :** préparation du code de calcul uniquement ; aucun paiement actif.
