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
