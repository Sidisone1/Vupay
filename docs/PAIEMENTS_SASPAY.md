# VUPAY — Intégration SasPay (préparation, 23/11/2026)

Documentation officielle : https://docs.saspay.me/

## Usage prévu
- **Pay-in** : recharge des budgets des campagnes par l'annonceur.
- **Payout** : retrait des gains validés vers Mobile Money.
- **Webhook** : notification d'un changement de statut ; jamais une preuve suffisante sans authentification et réconciliation.
- **Vérification** : confirmer côté serveur la référence, le montant, la devise et le statut du fournisseur.

## Sécurité impérative
- **Mode production interdit par défaut.** Ne jamais effectuer un test sur `api.saspay.me`, même avec une clé `sk_test_`.
- Pour les essais futurs, utiliser exclusivement `https://sandbox-api.saspay.me` après confirmation auprès du fournisseur.
- Un rapport indépendant signale des paiements réels déclenchés sur l'hôte production avec des clés dites « test » : https://afro.tools/fr/providers/saspay
- Les clés API restent côté serveur, dans les variables d'environnement, jamais dans GitHub ou dans le navigateur.
- Les montants sont des entiers FCFA en interne ; convertir en chaîne décimale XOF à la frontière API.
- Les callbacks sont authentifiés suivant la méthode exacte documentée par SasPay ; aucun crédit avant vérification serveur.
- Idempotence persistante en base, journal `ledger_entries`, verrouillage du budget et réconciliation obligatoires.
- Vérifier l'éligibilité du Mali, les réseaux actifs, le KYC, les frais et l'activation des reversements avant usage commercial.

## Livré
- `apps/web/src/lib/saspay.ts` : configuration sandbox, format monétaire, normalisation de statut et garde-fou de crédit.
- `apps/web/src/lib/saspay.test.ts` : tests unitaires sans réseau.
- `.github/workflows/ci-vupay.yml` : tests et vérification TypeScript automatiques sur la branche.

## Non livré
Aucun paiement lancé, aucune clé API enregistrée, aucun webhook exposé, aucun endpoint de collecte ou retrait connecté, aucune migration financière appliquée. Les tests unitaires ne remplacent pas une validation de l'API SasPay en sandbox.

## Étapes suivantes
1. Confirmer compte marchand SasPay, accès sandbox séparé et disponibilité des payouts Mali.
2. Finaliser schéma financier SQL + RLS + tests, sans `drop`.
3. Implémenter API serveur pay-in et payout, signature webhook, vérification distante et idempotence.
4. Simuler succès, échec, solde insuffisant, double webhook et timeout.
5. Faire valider la production explicitement avant tout argent réel.
