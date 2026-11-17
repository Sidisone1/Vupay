import type { Config } from "tailwindcss";

// Charte v2 (design/charte/PALETTE.md). Aucune couleur de WhatsPay ni des réseaux sociaux.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vupay: {
          encre: "#15162B",
          indigo: "#3533B8",
          safran: "#F6A609",
          corail: "#EE5A3B",
          fond: "#F4F4EF",
          trait: "#E3E2DA",
          doux: "#66677D",
          succes: "#12825A",
          alerte: "#A86400",
          erreur: "#C9362C",
          // alias des anciens noms utilisés dans le code
          primaire: "#3533B8",
          accent: "#F6A609",
        },
      },
    },
  },
  plugins: [],
};
export default config;
