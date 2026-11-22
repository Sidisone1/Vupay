import type { Pays } from "./types";

/** Indicatif et longueur du numéro national (sans indicatif) par pays de la zone Vupay. */
export const PAYS_TELEPHONE: Record<Pays, { nom: string; indicatif: string; chiffres: number }> = {
  ML: { nom: "Mali", indicatif: "223", chiffres: 8 },
  CI: { nom: "Côte d'Ivoire", indicatif: "225", chiffres: 10 },
  SN: { nom: "Sénégal", indicatif: "221", chiffres: 9 },
  BF: { nom: "Burkina Faso", indicatif: "226", chiffres: 8 },
  BJ: { nom: "Bénin", indicatif: "229", chiffres: 10 },
  TG: { nom: "Togo", indicatif: "228", chiffres: 8 },
  NE: { nom: "Niger", indicatif: "227", chiffres: 8 },
  GW: { nom: "Guinée-Bissau", indicatif: "245", chiffres: 9 },
};

export const LISTE_PAYS = Object.keys(PAYS_TELEPHONE) as Pays[];

export function estPays(valeur: unknown): valeur is Pays {
  return typeof valeur === "string" && valeur in PAYS_TELEPHONE;
}

/**
 * Met un numéro saisi au format international E.164 (+22370000000) pour le pays choisi.
 * Accepte les espaces, tirets, points, l'indicatif avec + ou 00. Renvoie null si invalide.
 */
export function normaliserTelephone(saisie: string, pays: Pays): string | null {
  const { indicatif, chiffres } = PAYS_TELEPHONE[pays];
  const brut = saisie.trim();
  if (!/^[+\d\s().-]+$/.test(brut)) return null;
  let n = brut.replace(/[\s().-]/g, "");
  if (n.startsWith("+")) n = n.slice(1);
  else if (n.startsWith("00")) n = n.slice(2);
  else if (n.length === chiffres) n = indicatif + n;
  if (!/^\d+$/.test(n) || !n.startsWith(indicatif)) return null;
  if (n.length !== indicatif.length + chiffres) return null;
  return "+" + n;
}

/** Retrouve le pays d'un numéro E.164, si son indicatif est dans la zone Vupay. */
export function paysDuTelephone(e164: string): Pays | null {
  const n = e164.replace(/^\+/, "");
  return LISTE_PAYS.find((p) => {
    const { indicatif, chiffres } = PAYS_TELEPHONE[p];
    return n.startsWith(indicatif) && n.length === indicatif.length + chiffres;
  }) ?? null;
}

/** Affichage lisible : +223 70 00 00 01. */
export function formaterTelephone(e164: string): string {
  const pays = paysDuTelephone(e164);
  if (!pays) return e164;
  const { indicatif } = PAYS_TELEPHONE[pays];
  const national = e164.replace(/^\+/, "").slice(indicatif.length);
  return `+${indicatif} ${national.replace(/(\d{2})(?=\d)/g, "$1 ")}`;
}
