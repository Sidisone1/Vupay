# Charte visuelle v2 — Vupay

Source : `design/maquettes/vupay-ui.css` (utilisée par toutes les maquettes) et `apps/web/tailwind.config.ts`.

## Idée directrice

**L'anneau de statut** (le cercle qui se vide en 24 h autour d'un statut ou d'une story) est la signature :
il compose le logo, le compte à rebours des preuves et l'exemple de gains. Le **safran** marque l'argent gagné
et l'action principale ; l'**indigo** les actions secondaires et l'état actif ; l'**encre** les surfaces de solde.

## Couleurs

| Nom | Valeur | Usage |
| --- | --- | --- |
| Encre | `#15162B` | Textes, cartes de solde, menu latéral |
| Indigo | `#3533B8` | Boutons secondaires, liens, onglet actif, graphiques |
| Safran | `#F6A609` | Bouton principal (texte encre dessus), gains, mises en avant |
| Corail | `#EE5A3B` | Anneau de story, compte à rebours |
| Pierre | `#F4F4EF` | Fond des écrans |
| Surface | `#FFFFFF` | Cartes |
| Trait | `#E3E2DA` | Bordures, séparateurs |
| Doux | `#66677D` | Textes secondaires |
| Succès / Alerte / Erreur | `#12825A` / `#A86400` / `#C9362C` | États : validé, en attente, refusé |

Aucune couleur de réseau social (vert WhatsApp, dégradé Instagram, bleu Facebook, jaune Snapchat) ni de WhatsPay.

## Typographie

- **Bricolage Grotesque** (titres, montants) : caractère affirmé, chiffres tabulaires pour les FCFA.
- **DM Sans** (texte, interface) : lisible en petite taille sur mobile.
- Deux polices Google Fonts, avec repli système.

## Composants

Boutons (safran, indigo, contour), champs, puces de filtre, pastilles d'état (point + libellé),
carte de solde encre, anneau de compte à rebours, tableaux à chiffres alignés.
