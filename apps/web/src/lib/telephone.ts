// Numéros de téléphone de la zone UEMOA, au format international E.164 (+223XXXXXXXX).
// Sert à la connexion par code OTP : le numéro saisi est normalisé avant l'envoi du code.
import type { Pays } from "./types";

export const NUMEROTATION: Record<Pays, { nom: string; indicatif: string; chiffres: number }> = {
  ML: { nom: "Mali", indicatif: "223", chiffres: 8 },
  CI: { nom: "Côte d'Ivoire", indicatif: "225", chiffres: 10 },
  SN: { nom: "Sénégal", indicatif: "221", chiffres: 9 },
  BF: { nom: "Burkina Faso", indicatif: "226", chiffres: 8 },
  BJ: { nom: "Bénin", indicatif: "229", chiffres: 10 },
  TG: { nom: "Togo", indicatif: "228", chiffres: 8 },
  NE: { nom: "Niger", indicatif: "227", chiffres: 8 },
  GW: { nom: "Guinée-Bissau", indicatif: "245", chiffres: 9 },
};

export interface Telephone {
  e164: string;
  pays: Pays;
}

/**
 * Normalise une saisie libre (« 70 12 34 56 », « +223 70-12-34-56 », « 0022370123456 »).
 * Un numéro sans indicatif est lu dans le pays choisi ; un numéro avec indicatif doit
 * appartenir à l'un des pays couverts. Renvoie null si le numéro est invalide.
 */
export function normaliserTelephone(saisie: string, paysChoisi: Pays): Telephone | null {
  const nettoye = saisie.trim().replace(/[\s.\-()]/g, "");
  let chiffres: string;
  if (nettoye.startsWith("+")) chiffres = nettoye.slice(1);
  else if (nettoye.startsWith("00")) chiffres = nettoye.slice(2);
  else {
    const { indicatif, chiffres: longueur } = NUMEROTATION[paysChoisi];
    return /^\d+$/.test(nettoye) && nettoye.length === longueur ? { e164: `+${indicatif}${nettoye}`, pays: paysChoisi } : null;
  }
  if (!/^\d+$/.test(chiffres)) return null;
  for (const [pays, { indicatif, chiffres: longueur }] of Object.entries(NUMEROTATION) as [Pays, (typeof NUMEROTATION)[Pays]][]) {
    if (chiffres.startsWith(indicatif) && chiffres.length === indicatif.length + longueur) {
      return { e164: `+${chiffres}`, pays };
    }
  }
  return null;
}

/** Code reçu par SMS ou WhatsApp : exactement 6 chiffres. */
export function codeOtpValide(code: string): boolean {
  return /^\d{6}$/.test(code.trim());
}

/** Affichage discret : +223 •• •• 34 56 (seuls les 4 derniers chiffres restent visibles). */
export function masquerTelephone(e164: string): string {
  const pays = (Object.keys(NUMEROTATION) as Pays[]).find((p) => e164.startsWith(`+${NUMEROTATION[p].indicatif}`));
  if (!pays) return "•••";
  const { indicatif } = NUMEROTATION[pays];
  const national = e164.slice(indicatif.length + 1);
  const masque = national.slice(0, -4).replace(/\d/g, "•") + national.slice(-4);
  return `+${indicatif} ${masque.replace(/(.{2})(?=.)/g, "$1 ")}`;
}
