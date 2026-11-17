import type { Fcfa } from "./types";

/** Vérifie qu'un montant est un entier FCFA (jamais de décimales). */
export function estFcfa(n: number): n is Fcfa {
  return Number.isSafeInteger(n);
}

export function exigerFcfa(n: number, nom = "montant"): Fcfa {
  if (!estFcfa(n)) throw new Error(`${nom} doit être un entier en FCFA (reçu ${n})`);
  return n;
}

/** Affiche un montant : 57118 → « 57 118 F ». */
export function formaterFcfa(n: Fcfa): string {
  exigerFcfa(n);
  const signe = n < 0 ? "-" : "";
  const chiffres = Math.abs(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${signe}${chiffres} F`;
}
