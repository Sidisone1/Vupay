# Icônes — Collection Bogolan

Les icônes officielles de Vupay sont les **109 icônes Collection Bogolan** (la même collection que Tchi TELIMAN).

- **Icônes prêtes à l'emploi** : `apps/web/public/icones/<catégorie>/<nom>.png` (144 × 144, coins arrondis).
  Dans l'app : `<img src="/icones/trajets/monnaie.png" alt="" width="28" height="28">`.
- **Planches sources** : `bogolan/planches/` (9 catégories : principale, actions, utilitaires, confiance,
  statuts, commandes, lieux, trajets, suite).
- **Découpe** : `python3 design/icones/bogolan/decouper.py` (Pillow et numpy) régénère les PNG depuis les planches.
- Les icônes sont en couleur : on ne les teinte pas. Un onglet inactif les pâlit (opacité 50 %).

## Correspondance Vupay

| Usage dans Vupay | Icône | Fichier |
| --- | --- | --- |
| Onglet Campagnes, diffuser | Partager | `actions/partager-trajet.png` |
| Onglet Gains, gain, coût par vue | Monnaie | `trajets/monnaie.png` |
| Onglet Retrait, retraits | Espèces | `trajets/especes.png` |
| Onglet Profil | Compte | `principale/compte.png` |
| Vues | Œil | `commandes/afficher.png` |
| Clics | Navigation | `suite/navigation.png` |
| Taux de clic | Avis | `suite/avis.png` |
| Code de connexion | Code SMS | `confiance/code-sms.png` |
| Preuve (capture) | Ajouter une photo | `utilitaires/ajouter-photo.png` |
| Délai de publication | Temps d'attente | `suite/temps-attente.png` |
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
| Portefeuille, recharge | Paiement | `principale/paiement.png` |
| Factures | Reçu | `actions/recu.png` |
| Entreprise | Travail | `lieux/travail.png` |
| Villes d'audience | Destination | `principale/destination.png` |
| Documents légaux | Conditions | `confiance/conditions.png` |
| Utilisateurs | Passagers | `trajets/passagers.png` |
| Paramètres | Paramètres | `suite/parametres.png` |
| Journal | Historique | `suite/historique.png` |

Les icônes propres au transport (moto-taxi, voiture, chauffeur, gare…) ne servent pas dans Vupay.
Manquent encore pour Vupay : une icône « statut / story » et une icône « campagne publicitaire »,
à dessiner dans le même style si besoin.
