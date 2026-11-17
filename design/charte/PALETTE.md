# Charte visuelle v3 « Bogolan » — Vupay

La charte part des **109 icônes Collection Bogolan** (pâte d'argile, motifs zigzag et points),
reprises comme icônes officielles du projet (`design/icones/`). Couleurs, typographie et frise en découlent,
pour un rendu fait main et ancré au Mali plutôt qu'un rendu d'interface générique.

Source : `design/maquettes/vupay-ui.css` (toutes les maquettes) et `apps/web/tailwind.config.ts`.

## Couleurs (tirées des icônes)

| Nom | Valeur | Usage |
| --- | --- | --- |
| Brun profond | `#3D2116` | Textes, cartes de solde, menu latéral |
| Rouille | `#A9431E` | Boutons secondaires, liens, onglet actif, graphiques, frise |
| Ocre | `#E3961A` | Bouton principal (texte brun dessus), gains, mises en avant |
| Terre cuite | `#C2562A` | Anneau de statut (compte à rebours 24 h) |
| Crème | `#FBF3E4` | Fond des écrans |
| Blanc chaud | `#FFFBF4` | Cartes |
| Sable | `#F3DDB4` | Pastilles, fonds d'icônes |
| Trait | `#EBDABE` | Bordures, séparateurs |
| Brun doux | `#876752` | Textes secondaires |
| Validé / En attente / Refusé | `#4C7A2C` / `#95600A` / `#A3281A` | États |

Aucune couleur de réseau social ni de WhatsPay.

## Typographie

- **Fredoka** (titres, montants) : formes arrondies qui répondent au modelé des icônes en argile.
- **Nunito Sans** (texte, interface) : lisible en petite taille, chiffres alignés pour les FCFA.

## Motif bogolan

Frise **zigzag · point · deux traits** (reprise du bas des planches Collection Bogolan), crème sur rouille :
bas des cartes de solde, pied du menu latéral, en-tête des planches. Variable CSS `--motif`.

## Logo provisoire

Anneau de statut ocre et rouille + « vupay » en Fredoka, en attendant la vérification du nom et un logo définitif.
