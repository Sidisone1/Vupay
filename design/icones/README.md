# Icônes — Collection Bogolan + icônes Vupay

> **Nouveau (22/11/2026)** : 32 icônes Bogolan aux couleurs de la charte V4 (vert profond, vert vif, ocre, brun, crème),
> dont les 5 onglets (accueil, campagnes, gains, retraits, profil) : [`bogolan/vupay/`](bogolan/vupay/README.md),
> à valider avant de remplacer les icônes de l'app. Catalogue des 1000 icônes à dessiner : [`bogolan/CATALOGUE.md`](bogolan/CATALOGUE.md).

Les icônes de Vupay sont de deux sources, dans le même style (tuile crème, volumes façon argile, ocre, rouille,
brun, frise zigzag-points) :

1. **18 icônes Vupay** dessinées pour ce projet (`vupay/`), pour ce que la collection ne couvrait pas.
2. **109 icônes Collection Bogolan** reprises de Tchi TELIMAN, pour le reste.

## Icônes Vupay (créées pour le projet)

PNG 144 × 144 : `apps/web/public/icones/vupay/` · sources SVG modifiables : `design/icones/vupay/svg/`.

![Icônes Vupay](vupay/apercu.png)

| Icône | Fichier | Usage |
| --- | --- | --- |
| Campagne (mégaphone) | `vupay/campagne.png` | Onglet et menu Campagnes |
| Statut / story (anneau) | `vupay/statut-story.png` | Publier en statut ou story |
| Preuve (capture) | `vupay/preuve-capture.png` | Envoi et file des preuves |
| Vues validées | `vupay/vues-validees.png` | Statistiques de vues |
| Clic / lien | `vupay/clic-lien.png` | Clics sur le lien personnel |
| Code unique | `vupay/code-unique.png` | Code ST-XXX du visuel |
| Compte à rebours | `vupay/compte-a-rebours.png` | Délai de 20 à 24 h |
| Retrait Mobile Money | `vupay/retrait-mobile.png` | Onglet et écran Retrait |
| Portefeuille | `vupay/portefeuille.png` | Portefeuille annonceur |
| Budget | `vupay/budget.png` | Budget, coût par vue |
| Ciblage | `vupay/ciblage.png` | Audience, villes |
| Statistiques | `vupay/statistiques.png` | Taux de clic, rapports |
| Annonceur (boutique) | `vupay/annonceur.png` | Compte entreprise |
| Modération | `vupay/moderation.png` | Modération des campagnes |
| Parrainage (cadeau) | `vupay/parrainage.png` | Prime de parrainage (V2) |
| Niveaux Bronze, Argent, Or | `vupay/niveau-bronze.png`, `niveau-argent.png`, `niveau-or.png` | Niveaux des diffuseurs |

Icône de l'application (anneau de statut et frise) : `apps/web/public/icon-512.png`, `icon-192.png`,
`apple-touch-icon.png`, `favicon.png`.

**Modifier ou ajouter une icône Vupay** : éditer `vupay/generer_svg.py`, puis
`python3 design/icones/vupay/generer_svg.py` (écrit les SVG dans `vupay/svg/`) et
`node design/icones/vupay/exporter_png.js` (écrit les PNG dans `apps/web/public/`, Playwright requis).

## Collection Bogolan (reprise de Tchi TELIMAN)


- **Icônes prêtes à l'emploi** : `apps/web/public/icones/<catégorie>/<nom>.png` (144 × 144, coins arrondis).
  Dans l'app : `<img src="/icones/trajets/monnaie.png" alt="" width="28" height="28">`.
- **Planches sources** : `bogolan/planches/` (9 catégories : principale, actions, utilitaires, confiance,
  statuts, commandes, lieux, trajets, suite).
- **Découpe** : `python3 design/icones/bogolan/decouper.py` (Pillow et numpy) régénère les PNG depuis les planches.
- Les icônes sont en couleur : on ne les teinte pas. Un onglet inactif les pâlit (opacité 50 %).

### Icônes de la collection utilisées dans Vupay

| Usage dans Vupay | Icône | Fichier |
| --- | --- | --- |
| Onglet Gains, gain, coût par vue | Monnaie | `trajets/monnaie.png` |
| Onglet Profil | Compte | `principale/compte.png` |
| Code de connexion | Code SMS | `confiance/code-sms.png` |
| Preuve validée | Opération réussie | `statuts/operation-reussie.png` |
| Vérification en cours | Validation en cours | `statuts/validation-en-cours.png` |
| Pièce d'identité | Identité | `suite/identite.png` |
| Selfie | Selfie | `confiance/selfie.png` |
| Confidentialité, verrou | Verrouiller | `utilitaires/verrouiller.png` |
| Information | Informations | `utilitaires/informations.png` |
| Alerte, fraude | Signaler | `actions/signaler.png` |
| Relier un réseau | Ajouter | `actions/ajouter-etape.png` |
| Accueil, tableau de bord | Accueil | `principale/accueil.png` |
| Nouvelle campagne | Modifier | `commandes/modifier.png` |
| Factures | Reçu | `actions/recu.png` |
| Documents légaux | Conditions | `confiance/conditions.png` |
| Utilisateurs | Passagers | `trajets/passagers.png` |
| Paramètres | Paramètres | `suite/parametres.png` |
| Journal | Historique | `suite/historique.png` |

Les icônes propres au transport (moto-taxi, voiture, chauffeur, gare…) ne servent pas dans Vupay.
