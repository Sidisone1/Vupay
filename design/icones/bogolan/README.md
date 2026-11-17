# Icônes Bogolan — guide pour le dépôt d'icônes

Ce dossier prépare un **dépôt d'icônes réutilisable** pour tous les projets : la liste complète des icônes
à dessiner dans le style bogolan, les règles de dessin, la structure du dépôt et les sources libres de droits.

- [`CATALOGUE.md`](CATALOGUE.md) : **846 icônes** dans 26 catégories, chacune avec son nom de fichier et le motif bogolan à utiliser.
- [`icones.json`](icones.json) : le même catalogue en version machine (pour générer dossiers, sprite et composants).

Le dossier peut être copié tel quel à la racine du nouveau dépôt.

## 1. Règles de dessin (pour que toutes les icônes aillent ensemble)

| Règle | Valeur |
| --- | --- |
| Grille | 24 × 24 px, zone utile 20 × 20 (2 px de marge) |
| Trait | 1,75 à 2 px, extrémités et angles arrondis, comme un trait de calame |
| Variantes | `outline` (trait), `solid` (plein), `duotone` (fond terre + trait sombre) |
| Couleur dans le SVG | `currentColor` uniquement : la couleur vient du projet, jamais du fichier |
| Motif | Un seul détail bogolan par icône (points, chevron, zigzag, cercle pointé) : l'icône doit rester lisible à 16 px |
| Lisibilité | Tester à 16, 20, 24 et 48 px, sur fond clair et sombre |
| Fichiers | SVG optimisés (SVGO), `viewBox="0 0 24 24"`, pas de `width`/`height` fixes, noms en `kebab-case` anglais |

**Palette de référence bogolan** (pour les aperçus, le duotone et les motifs de fond ; chaque projet garde la sienne) :
noir de boue `#2B211C`, brun `#5A3A22`, rouille `#9C4A1A`, ocre `#C68A3C`, kaki `#8A7F55`, écru `#EFE6D2`.
Pour Vupay, appliquer les couleurs de `design/charte/PALETTE.md` via `currentColor`.

**Ce qui fait « bogolan »** sans nuire à la lecture : terminaisons légèrement épaisses, petits points alignés
en remplissage, chevrons et zigzags en détail, cercles pointés pour les éléments « centre » (profil, position, cible).

## 2. Structure proposée du dépôt

```
bogolan-icons/
├── README.md
├── LICENSE                 # licence de VOS dessins (ex. MIT ou CC BY 4.0)
├── CATALOGUE.md / icones.json
├── svg/
│   ├── outline/            # home.svg, wallet.svg…
│   ├── solid/
│   └── duotone/
├── motifs/                 # les 16 motifs seuls + motifs répétables (fonds, bordures)
│   └── patterns/           # tuiles SVG répétables pour fonds d'écran, cartes, emballages
├── brands/                 # logos officiels NON modifiés + fichier SOURCES.md (origine, date, charte)
├── app-icons/              # gabarits d'icônes d'application (voir §4)
├── dist/                   # généré : sprite.svg, composants React/Vue, police d'icônes
└── scripts/                # optimisation SVGO + génération à partir de icones.json
```

Une icône = un fichier par variante, même nom partout : `svg/outline/wallet.svg`, `svg/solid/wallet.svg`.

## 3. Sources libres pour partir des formes (puis appliquer le style bogolan)

Redessiner à partir d'une base existante va beaucoup plus vite. Ces jeux ont une licence qui le permet
(garder la mention de licence dans le dépôt) :

| Jeu | Licence | Intérêt |
| --- | --- | --- |
| [Lucide](https://lucide.dev) | ISC | ~1 500 icônes trait 2 px sur 24 px : même grille que notre catalogue |
| [Tabler Icons](https://tabler.io/icons) | MIT | ~5 000 icônes, trait et plein |
| [Phosphor](https://phosphoricons.com) | MIT | 6 graisses dont duotone |
| [Iconoir](https://iconoir.com) | MIT | Trait 1,5 px, style doux |
| [Material Symbols](https://fonts.google.com/icons) | Apache 2.0 | Très complet (UI, objets du quotidien) |
| [Simple Icons](https://simpleicons.org) | CC0 (mais les logos restent des marques) | Logos de réseaux et services pour `brands/` |
| [Iconify](https://icon-sets.iconify.design) | — | Moteur de recherche dans plus de 200 000 icônes, pour trouver une base |

Les icônes vraiment africaines (moto-taxi, calebasse, mortier, canari, attiéké, kora, daba, tontine, mobile money…)
n'existent dans presque aucun jeu : ce sont celles qui rendront le dépôt unique, à dessiner en priorité.

## 4. Icônes d'application à prévoir pour chaque projet

| Fichier | Taille | Usage |
| --- | --- | --- |
| `favicon.svg` + `favicon.ico` | 16, 32, 48 | Onglet du navigateur |
| `apple-touch-icon.png` | 180 × 180 | Écran d'accueil iPhone |
| `icon-192.png`, `icon-512.png` | 192, 512 | PWA (manifeste) |
| `icon-maskable-512.png` | 512, zone sûre = cercle de 80 % | PWA Android (formes rondes, carrées…) |
| Android adaptatif | 108 dp (avant-plan + arrière-plan, zone sûre 66 dp) | Application Android |
| iOS | 1024 × 1024 sans transparence | App Store |
| `og-image.png` | 1200 × 630 | Aperçu des liens partagés (WhatsApp, Facebook…) |

Un motif bogolan en arrière-plan + le pictogramme du projet au centre donne une famille d'icônes reconnaissable.

## 5. Ordre de production conseillé

1. Les 16 motifs (`motifs/`) : ils fixent le style.
2. Les catégories **P1** (≈ 470 icônes) : navigation, actions, statuts, social, paiement, communication, médias, temps, personnes, sécurité, Vupay.
3. Les **P2** (commerce, quotidien, cuisine, transport, lieux, émotions), puis les **P3** selon les projets.
4. `brands/` : télécharger les logos officiels au fur et à mesure des besoins, sans les modifier.

## 6. Points d'attention

- **Logos des réseaux et opérateurs** (WhatsApp, TikTok, Orange Money, Wave…) : ce sont des marques déposées.
  Ne pas les redessiner en bogolan ni les recolorer ; les utiliser tels quels, seulement pour désigner le service.
  Pour l'identité de Vupay, le cahier des charges interdit tout logo de réseau : utiliser les pictos génériques.
- **Respect du bogolan** : les motifs ont un sens (voir le tableau du catalogue). Éviter les motifs liés au deuil
  ou à l'excision sur des actions banales, et créditer l'origine (bogolanfini bamanan, Mali) dans le README du dépôt.
- **Licence** : si une icône part d'un jeu existant, garder sa licence (MIT/ISC/Apache) dans `LICENSE-THIRD-PARTY`.

## Sources

- Motifs et significations : The Ethnic Home, « The Bogolan Mudcloth » ; Wikipédia, « Bogolan » ;
  Smithsonian Center for Folklife, « Malian Bogolan ».
