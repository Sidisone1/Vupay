# Grille déplaçable des icônes Vupay (charte V4)

`index.html` affiche les 32 icônes de `../png/` dans une grille infinie que l'on fait glisser à la souris ou au doigt.
Le composant vient d'OriginKit : **Draggable Grid** (https://www.originkit.dev/components/draggable-grid), avec React 18.3.1
et framer-motion 11.11.17, compilé dans `grille.js` avec esbuild. Seules modifications : départ centré, image en
« contain » et légende sous chaque icône.

Ouvrir `index.html` dans un navigateur (aucun serveur nécessaire).
