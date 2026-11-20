import type { Config } from "tailwindcss";
// Charte Bogolan verte v4; anciens alias conservés pour les pages non migrées.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vupay: {
          primaire: "#006B3A",
          vert: "#14AA4D",
          ocre: "#F08300",
          encre: "#092E1B",
          fond: "#FFF7E6",
          surface: "#FFFBF4",
          brun: "#884A1F",
          doux: "#665E52",
          sable: "#F3DDB4",
          trait: "#EBDABE",
          succes: "#14AA4D",
          alerte: "#95600A",
          erreur: "#A3281A",
          rouille: "#A9431E",
          terre: "#C2562A",
          accent: "#F08300",
          indigo: "#006B3A",
          safran: "#F08300",
        },
      },
    },
  },
  plugins: [],
};
export default config;
