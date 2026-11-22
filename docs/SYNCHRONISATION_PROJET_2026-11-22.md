# VUPAY — état de synchronisation GitHub (22 novembre 2026)

## Dépôt
- Dépôt : https://github.com/Sidisone1/Vupay
- Branche principale : `main`
- Documentation et code existants conservés ; ce fichier complète le projet sans écraser les travaux précédents.

## Périmètre produit confirmé
- Deux parcours : annonceur (création et suivi des campagnes) et diffuseur (partage des campagnes, suivi des gains et retraits).
- Diffusion via statuts WhatsApp, Instagram et Facebook.
- Liens traçables menant à une page intermédiaire Vupay.
- Actions mesurées séparément : numéro WhatsApp, catalogue WhatsApp, envoyer un message, acheter.
- Les visites et les vues seules ne constituent pas des actions rémunérables validées.
- Mesures antifraude et suivi des clics qualifiés.
- Parcours mobile : accueil, inscription, tableau de bord diffuseur, campagnes, gains, retraits, profil.
- Identité visuelle : vert et icônes inspirées du Bogolan, avec éléments sans débordement.
- Langues prévues : français, anglais, espagnol, italien, chinois, portugais et bambara.

## Architecture existante identifiée dans README
- `apps/web/` : application web/PWA Next.js et Tailwind.
- `supabase/` : base initiale et Edge Functions ; migration V2 à réaliser.
- `design/` : icônes, images et maquettes.
- `docs/` : spécifications, architecture et feuille de route.

## À vérifier avant mise en production
- Audit du code réel, des tests et des dépendances.
- Migration V2 de la base et règles d'accès.
- Vérification du tracking d'actions sans prétendre détecter une vente externe non confirmée.
- Antifraude, contrôles de retrait et audit des paiements.
- Tarifs des actions qualifiées : non validés.
- Configuration des secrets et intégrations externes.
- Validation des maquettes, de l'accessibilité et du responsive.

## État
Documentation de synchronisation publiée sur GitHub. Cela ne signifie pas que toutes les fonctionnalités sont développées, testées ou déployées.
