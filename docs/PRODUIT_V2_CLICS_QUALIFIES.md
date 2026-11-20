# Vupay — Cadrage produit V2 (20 novembre 2026)

> **Décisions récentes validées.** Ce document prévaut sur les passages du cahier des charges 17/11/2026 qui évoquent la rémunération à la vue. Les prix, marges, minimums de campagne et seuils de retrait ne sont PAS validés.

## Positionnement
Vupay met en relation des annonceurs et des diffuseurs qui publient des campagnes sur WhatsApp et, progressivement, d'autres réseaux (Instagram, Facebook, TikTok, Telegram). Les visiteurs n'ont pas besoin d'un compte Vupay.

## Principe économique confirmé
- **Pas de rémunération aux vues**. Une capture de vues peut servir de preuve contextuelle, mais n'ouvre aucun droit au paiement.
- Le diffuseur reçoit un lien **unique par campagne, diffuseur et canal**.
- Ce lien mène à une **page publique Vupay** décrivant le produit (photo, prix communiqué par l'annonceur, description, mentions publicitaires).
- Les **ouvertures de la page** sont enregistrées à titre analytique, **sans rémunération**.
- Les actions sur la page sont suivies par type : `numero_whatsapp`, `catalogue_whatsapp`, `envoyer_message`, `acheter`.
- La rémunération concerne uniquement **l'interaction de contact qualifiée**, validée après antifraude, selon la politique de campagne. Une simple ouverture du lien d'un statut n'est pas rémunérable.
- L'ouverture de WhatsApp ou de la page de paiement est une **intention**, pas une preuve de message envoyé ni de commande payée.
- Les tarifs de chaque action, la part de Vupay, les frais et les éventuels abonnements restent **à définir**.

## Parcours
1. L'annonceur ouvre un compte, fait vérifier son entreprise, crée une campagne et configure une ou plusieurs destinations de contact/achat.
2. Le budget est approvisionné via un prestataire habilité et réservé. L'admin modère.
3. Le diffuseur accepte une mission et obtient le créatif, la mention publicitaire et un lien personnel.
4. Il publie sur ses statuts ou stories selon les fonctionnalités réellement disponibles sur chaque réseau.
5. Le visiteur ouvre le lien, découvre la fiche produit publique Vupay et choisit **WhatsApp numéro**, **catalogue**, **envoyer un message** ou **acheter**.
6. Le serveur journalise séparément la visite et l'action de sortie; il redirige vers la destination autorisée.
7. Le moteur de risque classe chaque action (`en_attente`, `validee`, `refusee`). Les événements invalides ne sont pas payés.
8. Le journal financier crédite le diffuseur et débite l'annonceur **une seule fois par action validée**, suivant le tarif confirmé de la campagne.
9. Retrait Mobile Money après vérification d'identité, respect des conditions et confirmation de l'agrégateur.

## Espaces
- **Diffuseur** : accueil, campagnes disponibles, détail, accepter, partager, lien personnel, justificatif optionnel, résultats par type de clic, gains en attente/disponibles, retraits, profil, langue.
- **Annonceur** : créer/financer campagne, destinations, création de fiche produit, ciblage, suivi des visites/actions qualifiées, diffuseurs, budget, factures.
- **Visiteur** : page publique produit responsive, actions accessibles, transparence sur la destination, pas d'inscription obligatoire.
- **Admin** : modération, vérification entreprise/KYC, antifraude, limites, journal, retraits, plaintes, statistiques et audit.

## Gestion des situations limites
- Même visiteur/campagne/action répétée : idempotence et déduplication définies en fonction des règles de validation.
- Auto-clic et trafic automatisé : marquer suspect et bloquer toute rémunération non confirmée.
- Campagne en pause, expirée, budget indisponible ou produit retiré : **ne plus générer d'interactions payantes**, afficher une information claire.
- Destination manquante, invalide ou inaccessible : présenter une erreur sûre; **jamais** redirection non vérifiée.
- Échec Mobile Money ou callback en double : journal unique, réconciliation, aucun double débit.
- Changement de rôle diffuseur/annonceur : même identité, permissions distinctes et soldes indépendants.
- Captures WhatsApp : ne pas promettre de détection parfaite des retouches ni l'accès à des statistiques privées Meta.
- Consentement et données : minimisation, conservation limitée et journal d'audit.

## Langues
Français et bambara prioritaires au Mali, puis anglais, espagnol, italien, chinois simplifié, portugais, arabe et langues africaines supplémentaires. Traductions locales à valider.

## Source design
[Canva — 48 pages Vupay](https://www.canva.com/d/JFygNqJaw1LNavO). Format mobile 390×844. La collection Bogolan existante est dans `apps/web/public/icones/`.

## Important
Le dépôt possède encore des schémas et fonctions V1 liés aux vues et aux prix hypothétiques. **Ne pas activer les paiements V2** avant migration, tests de bout en bout, décision sur les tarifs, audit de sécurité et autorisation de mise en production.
