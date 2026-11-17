import type { Config } from "tailwindcss";

// Charte v3 « Bogolan » (design/charte/PALETTE.md). Aucune couleur de WhatsPay ni des réseaux sociaux.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vupay: {
          encre: "#3D2116",
          rouille: "#A9431E",
          ocre: "#E3961A",
          terre: "#C2562A",
          fond: "#FBF3E4",
          surface: "#FFFBF4",
          sable: "#F3DDB4",
          trait: "#EBDABE",
          doux: "#876752",
          succes: "#4C7A2C",
          alerte: "#95600A",
          erreur: "#A3281A",
          // alias des anciens noms utilisés dans le code
          primaire: "#A9431E",
          accent: "#E3961A",
          indigo: "#A9431E",
          safran: "#E3961A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
