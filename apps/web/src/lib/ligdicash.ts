/** LigdiCash — adaptation de données SANS requête réseau ni argent réel.
 * Sources : https://www.ligdicash.com/ et https://github.com/Ligdicash/ligdicash-php
 */
export type EtatLigdiCash = "en_attente" | "reussi" | "echoue" | "inconnu";
export const LIGDICASH_DEVISE = "XOF" as const;

/** Un retour navigateur ou une réponse de création de facture n'est jamais une preuve de paiement. */
export function etatLigdiCash(statut: unknown): EtatLigdiCash {
  if (typeof statut !== "string") return "inconnu";
  switch (statut.toLowerCase()) {
    case "completed": return "reussi";
    case "pending": return "en_attente";
    case "notcompleted": case "failed": case "cancelled": case "canceled": return "echoue";
    default: return "inconnu";
  }
}

export function montantLigdiCash(fcfa: number): number {
  if (!Number.isSafeInteger(fcfa) || fcfa <= 0) throw new Error("Montant XOF invalide");
  return fcfa;
}

export interface ConfirmationLigdiCash {
  referenceInterne: string;
  tokenFacture: string;
  montantFcfa: number;
  devise: string;
  statut: EtatLigdiCash;
}

/** Vérification locale après confirmation distante authentifiée côté serveur.
 * À compléter par un contrôle atomique et idempotent dans PostgreSQL.
 */
export function peutValiderRechargeLigdiCash(
  confirmation: ConfirmationLigdiCash,
  attendu: { referenceInterne: string; tokenFacture: string; montantFcfa: number },
  confirmationServeurAuthentifiee: boolean,
): boolean {
  return confirmationServeurAuthentifiee &&
    confirmation.statut === "reussi" &&
    confirmation.devise === LIGDICASH_DEVISE &&
    confirmation.referenceInterne === attendu.referenceInterne &&
    confirmation.tokenFacture.length > 0 &&
    confirmation.tokenFacture === attendu.tokenFacture &&
    Number.isSafeInteger(attendu.montantFcfa) &&
    attendu.montantFcfa > 0 &&
    confirmation.montantFcfa === attendu.montantFcfa;
}
