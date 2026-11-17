# Charte visuelle v3 — Vupay (couleur de base verte)

Source : `design/maquettes/vupay-ui.css` (utilisée par toutes les maquettes) et `apps/web/tailwind.config.ts`.

## Idée directrice

**L'anneau de statut** (le cercle qui se vide en 24 h autour d'un statut ou d'une story) est la signature :
il compose le logo, le compte à rebours des preuves et l'exemple de gains. Le **vert feuille** est la couleur de base
(actions, liens, état actif, graphiques) ; le **safran** marque l'argent gagné et l'action principale ; l'**encre vert-noir**
les surfaces de solde et le menu latéral. Les icônes sont les icônes 3D **Bogolan** de Vupay
(`design/icones/bogolan/vupay/`). Décision du porteur de projet, 17/11/2026 (remplace l'indigo de la v2).

## Couleurs

| Nom | Valeur | Usage |
| --- | --- | --- |
| Encre | `#16221A` | Textes, cartes de solde, menu latéral (vert-noir) |
| **Vert (base)** | `#2E6B34` | Boutons secondaires, liens, onglet actif, graphiques |
| Vert pâle | `#E6F0E3` | Fonds d'état actif, encarts d'information |
| Safran | `#F6A609` | Bouton principal (texte encre dessus), gains, mises en avant |
| Corail | `#EE5A3B` | Anneau de story, compte à rebours |
| Pierre | `#F4F4EF` | Fond des écrans |
| Surface | `#FFFFFF` | Cartes |
| Trait | `#E3E2DA` | Bordures, séparateurs |
| Doux | `#646B66` | Textes secondaires |
| Succès / Alerte / Erreur | `#12825A` / `#A86400` / `#C9362C` | États : validé, en attente, refusé |

Aucune couleur de réseau social (vert WhatsApp, dégradé Instagram, bleu Facebook, jaune Snapchat) ni de WhatsPay.
Le vert de Vupay est un **vert feuille foncé** (`#2E6B34`) : ne jamais le remplacer par un vert vif ou un vert-bleu
proche de WhatsApp (`#25D366`, `#128C7E`, `#075E54`). L'ancien indigo (`#3533B8`) n'est plus utilisé ; le nom `indigo`
reste un alias du vert dans le code et la feuille de style, le temps de migrer.

## Typographie

- **Bricolage Grotesque** (titres, montants) : caractère affirmé, chiffres tabulaires pour les FCFA.
- **DM Sans** (texte, interface) : lisible en petite taille sur mobile.
- Deux polices Google Fonts, avec repli système.

## Composants

Boutons (safran, indigo, contour), champs, puces de filtre, pastilles d'état (point + libellé),
carte de solde encre, anneau de compte à rebours, tableaux à chiffres alignés.
