import type { Config } from "tailwindcss";

// Charte v3, couleur de base verte (design/charte/PALETTE.md). Aucune couleur de WhatsPay ni des réseaux sociaux :
// le vert est un vert feuille foncé, distinct du vert WhatsApp.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vupay: {
          encre: "#16221A",
          vert: "#2E6B34",
          "vert-pale": "#E6F0E3",
          indigo: "#2E6B34", // ancien nom, remplacé par vert
          safran: "#F6A609",
          corail: "#EE5A3B",
          fond: "#F4F4EF",
          trait: "#E3E2DA",
          doux: "#646B66",
          succes: "#12825A",
          alerte: "#A86400",
          erreur: "#C9362C",
          // alias des anciens noms utilisés dans le code
          primaire: "#2E6B34",
          accent: "#F6A609",
        },
      },
    },
  },
  plugins: [],
};
export default config;
