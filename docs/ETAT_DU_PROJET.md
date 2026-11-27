# État du projet Vupay — 27 novembre 2026

Document de reprise : toute personne ou toute IA qui reprend le projet commence ici, puis lit `AGENTS.md`.

## Le produit en une phrase

Vupay met en relation des **annonceurs** (entreprises d'Afrique de l'Ouest) et des **diffuseurs** (particuliers) qui partagent des publicités dans leurs statuts WhatsApp, Instagram ou Facebook. Le lien du diffuseur ouvre une **fiche produit Vupay** ; seules les **actions qualifiées** sur cette fiche (numéro WhatsApp, catalogue, message, achat) pourront être rémunérées. **Les vues et les simples visites ne sont jamais payées.**

## Où en sont les étapes (feuille de route : `docs/ROADMAP_V2.md`, issues GitHub #7 à #15)

| Étape | État | Détail |
| --- | --- | --- |
| 0. Reprise et cadrage | Fait | `docs/PRODUIT_V2_CLICS_QUALIFIES.md` |
| 1. Design | En-têtes des 48 maquettes enregistrés, correction mobile intégrée par la PR #25. Recette globale à terminer | `design/` |
| 2. Comptes et permissions | Construit et testé ; essai réel à faire | `docs/ETAPE_2_COMPTES.md` |
| 3. Publicités | Construit et testé ; essai réel à faire | `docs/ETAPE_3_PUBLICITES.md` |
| 4. Traçabilité | Construit et testé ; essai réel à faire | `docs/ETAPE_4_TRACABILITE.md` |
| 5. Finance | Version de travail testée en local : portefeuilles, barèmes versionnés, règlement atomique par action et contrôle du budget. Intégration opérateur à faire | [Recette financière](ETAPE_5_FINANCE_PREPARATION.md) |
| 6. Pilotage | Version de travail : statistiques agrégées et export CSV par campagne, journal financier et suivi des retraits | Recette avec les trois rôles à faire |
| 7. Pilote Bamako | À planifier | — |
| 8. Expansion | Plus tard | — |

## Ordre de mise en service

| Ordre | Travail restant | Preuve attendue |
| --- | --- | --- |
| 1 | Revoir et intégrer la branche finance. Appliquer les migrations 0007 à 0009 sur une base de recette avant le déploiement web correspondant. | Numéros des migrations, version web, connexion de chaque rôle et vérification des écrans. |
| 2 | Valider le barème par action, les seuils, les frais, les règles de litige et le prestataire. Le minimum historique de 25 000 FCFA du schéma de campagne est distinct du minimum de recharge à décider. | Décision du porteur et versions des tarifs dans la base de recette. |
| 3 | Raccorder les recharges, le traitement des actions, les retraits et la réconciliation à l’opérateur retenu. | Références de test, double notification sans double crédit, rejet et remboursement vérifiés, rapprochement du journal. |
| 4 | Configurer l’hébergement, Orange SMS et la supervision. Effectuer le parcours sur téléphone à Bamako avec annonceur, diffuseur et administrateur. | URL et version testées, OTP reçu, résultats et incidents du pilote, décision de lancement. |

## Infrastructure

| Élément | État |
| --- | --- |
| Code | GitHub `Sidisone1/Vupay` ; application Next.js 14 dans `apps/web` |
| Base | Supabase **vupay-v2** (Paris, `pwubrzwwbbmwagehdzfq`), migrations `0001` à `0006` appliquées, identiques au dépôt |
| Ancien projet Supabase « vupay » (Londres) | Version antérieure, vide, non utilisée ; à supprimer par le porteur du projet |
| SMS de connexion | Fonction `envoyer-sms` (Orange) déployée, inactive tant que le compte Orange Developer n'est pas branché (`docs/CONNEXION_SMS.md`) |
| Site en ligne (Vercel) | **Pas encore créé** : le connecteur n'a pas le droit ; à faire par le porteur (`docs/MISE_EN_SERVICE.md`) |

## Tests

- `cd apps/web && npm test` : règles côté application (Vitest), 88 tests.
- `PGHOST=… PGUSER=postgres supabase/tests/lancer.sh` : droits et règles en base sur un Postgres local, 198 vérifications (`10_comptes_permissions`, `20_administration`, `30_publicites`, `40_tracabilite`).
- `cd apps/web && npm run typecheck && npm run build`.

## Décisions importantes (et pourquoi)

1. **Pas de rémunération aux vues** : ni l'API officielle de WhatsApp ni aucun outil fiable ne mesure les vues des statuts (`docs/MESURE_VUES_WHATSAPP.md`). Contrainte en base : `campagne_sans_vues`.
2. **Les migrations n'effacent jamais rien** (aucun `drop`) : Supabase exige une confirmation manuelle pour tout effacement et le porteur du projet n'est pas technique. On modifie en place (`alter policy`, nouvelles colonnes). Conséquence : `profiles.role` (V1) existe encore, inutilisée et protégée.
3. **La base est l'arbitre** : toutes les règles de droits sont en RLS et en déclencheurs, testées par le rôle réel de chaque utilisateur. Le code de l'application reprend les mêmes règles pour guider l'interface (`apps/web/src/lib/permissions.ts`).
4. **Visites et actions enregistrées uniquement par le serveur** (clé service) : sinon n'importe qui pourrait fabriquer de faux visiteurs.
5. **Une personne ne compte qu'une fois par campagne et par bouton** : index unique `contact_actions_unique`.
6. **SMS par Orange** (tous opérateurs du pays) au Mali, en Côte d'Ivoire, au Sénégal, au Burkina Faso, en Guinée-Bissau et en Guinée ; agrégateur à choisir pour le Togo, le Bénin et le Niger.
7. **Montants en entiers FCFA**, tout mouvement d'argent par `ledger_entries` (étape 5).

## Ce qui attend le porteur du projet

1. Créer le site sur Vercel et y mettre les variables d'environnement (`docs/MISE_EN_SERVICE.md`).
2. Ouvrir le compte Orange Developer et brancher le SMS (`docs/CONNEXION_SMS.md`).
3. Se connecter une première fois, puis faire nommer le premier super admin.
4. Décider des tarifs par action, de la marge, des seuils et de l'agrégateur Mobile Money (débloque l'étape 5).
5. Valider les maquettes (étape 1) et dire s'il faut ajouter la Guinée (Conakry) aux pays.
6. Supprimer l'ancien projet Supabase « vupay ».

## Carte du code

| Dossier | Contenu |
| --- | --- |
| `apps/web/src/lib/` | Règles métier pures et testées (permissions, téléphones, pièces, destinations, campagnes, traçabilité, statistiques…) |
| `apps/web/src/app/` | Écrans : `connexion`, `bienvenue`, `diffuseur/`, `annonceur/`, `admin/`, fiche publique `p/[slug]`, liens `c/[code]` |
| `supabase/migrations/` | Schéma, règles d'accès, fonctions |
| `supabase/tests/` | Tests SQL et leur lanceur |
| `supabase/functions/` | Fonctions serveur (`envoyer-sms` active ; `retrait`, `verifier-preuve` : V1, non actives) |
| `docs/` | Cahier des charges, cadrage V2, étapes, mise en service, décisions |
| `design/` | Charte, icônes Bogolan, maquettes |
