import type { Config } from "tailwindcss";

// Identité propre à Vupay (aucune reprise des couleurs de WhatsPay ni des réseaux sociaux).
// Palette provisoire, à remplacer par la charte définitive.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vupay: {
          encre: "#1B1640",
          primaire: "#6C3BF5",
          accent: "#FFB020",
          fond: "#F7F5FF",
          succes: "#14915F",
          erreur: "#C8302B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
