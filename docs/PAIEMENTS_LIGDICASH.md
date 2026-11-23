# VUPAY — LigdiCash (préparation technique)

Documentation : https://developers.ligdicash.com/
Site officiel : https://www.ligdicash.com/api-et-tarifs
SDK officiel : https://github.com/Ligdicash/ligdicash-php

## Fonctions
- Pay-in avec redirection : recharge de campagne annonceur.
- Payout : versement vers Mobile Money après KYC, contrôles financiers et validation admin.
- Status : vérification distante de la transaction avant toute écriture de crédit.
- Callback : notification à authentifier et réconcilier, jamais source unique de vérité.
- LigdiCash indique couvrir le Mali (Orange Money, Moov Africa) ; vérifier les opérateurs et plafonds effectivement activés sur le compte marchand.

## Environnement et contrat
L'obtention de l'API passe par contrat, KYC et identifiants temporaires d'intégration. Le domaine public documenté `app.ligdicash.com` peut traiter des fonds réels : **aucun appel réseau ni paiement test ne doit être exécuté sans confirmation écrite de LigdiCash sur les conditions d'essai**.

## Implémentation actuelle
- `apps/web/src/lib/ligdicash.ts` : normalisation des statuts et vérification locale de concordance après confirmation distante.
- `apps/web/src/lib/ligdicash.test.ts` : tests sans réseau.
- `apps/web/src/lib/prestataires-paiement.ts` : registre des prestataires SasPay et LigdiCash, tous désactivés en production.
- Aucune clé API, aucune collecte réelle, aucun reversement, aucun endpoint webhook.

## Avant activation
1. Obtenir les identifiants du compte marchand, les tarifs et les règles d'essai.
2. Développer le client serveur pay-in/payout et le contrôle de statut avec authentification.
3. Valider signature/provenance des callbacks selon la documentation du compte.
4. Développer le journal SQL atomique, idempotence, RLS, anti-double débit et tests de concurrence.
5. Tester le parcours réel dans les conditions approuvées par LigdiCash, puis obtenir autorisation explicite pour la production.

## Choix produit VUPAY validés à partir de l'index officiel

Index de documentation : https://developers.ligdicash.com/llms.txt

| Fonction VUPAY | Méthode | Endpoint documenté |
| --- | --- | --- |
| Recharge campagne (MVP) | Payin avec redirection | `POST /pay/v01/redirect/checkout-invoice/create` |
| Confirmation recharge | Vérification payin | `GET /pay/v01/redirect/checkout-invoice/confirm` |
| Recharge native (ultérieure) | Payin sans redirection | `POST /pay/v01/straight/checkout-invoice/create` |
| Retrait Mobile Money diffuseur | Payout Marchand | `POST /pay/v01/straight/payout` |
| Retrait wallet LigdiCash (optionnel) | Payout Client | `POST /pay/v01/withdrawal/create` |
| Vérification retrait | Confirmation payout | `GET /pay/v01/withdrawal/confirm` |

**Important** : la documentation officielle indique les statuts `pending`, `completed`, `notcompleted`. Le code normalise `notcompleted` comme échec. Une transaction `pending` ne crédite jamais de solde.

**Important** : https://developers.ligdicash.com/concepts/environnements.md confirme l'absence de sandbox. Les essais d'intégration utilisent un compte réel temporaire fourni par LigdiCash. Aucun essai payant ne doit être lancé sans accord préalable.

**Callbacks** : https://developers.ligdicash.com/api-paiement/callback/idempotence.md indique que LigdiCash envoie deux POST par événement. Il faut une contrainte d'idempotence persistante et vérifier le statut à distance avant crédit.

**Traçabilité** : créer et persister un `transaction_id` VUPAY avant chaque appel ; conserver le token LigdiCash pour les confirmations et les callbacks. Le retour navigateur n'est jamais une preuve de paiement.

**Couverture** : la documentation officielle liste Orange Money Mali en payin sans redirection, mais la disponibilité exacte des opérateurs et du payout doit être confirmée sur le compte marchand.

## Adaptateur serveur ajouté

`apps/web/src/lib/ligdicash-client.ts` expose les quatre opérations HTTP (création/confirmation de facture, création/confirmation de retrait) et accepte un transport injecté pour les tests. `ligdicash-client.test.ts` simule les réponses sans envoyer de fonds.

**Statut : intégration partielle, non exploitable en production.** L'adaptateur est désactivé par défaut ; aucun route handler Next.js, aucun formulaire, aucun mapping de payload marchand vérifié, aucune écriture comptable ou callback n'est encore relié. Les appels ne doivent pas être autorisés avant revue de la référence API complète, en particulier les paramètres des endpoints de confirmation, le schéma exact de création de facture et celui du payout.

Documentation des endpoints : https://developers.ligdicash.com/reference/endpoints/payin-redirect-create.md et https://developers.ligdicash.com/reference/endpoints/straight-payout.md

**Tests** : fichiers Vitest ajoutés, résultat d'exécution CI non encore confirmé.
