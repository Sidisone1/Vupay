/**
 * SasPay — configuration et normalisation de réponses, SANS appel réseau.
 * Documentation: https://docs.saspay.me/
 * Le client réel ne doit être créé que côté serveur après revue des API.
 */
export const SASPAY_SANDBOX_HOST = "https://sandbox-api.saspay.me";
export const SASPAY_PRODUCTION_HOST = "https://api.saspay.me";

export type EnvironnementSasPay = "sandbox" | "production";
export type StatutPaiement = "en_attente" | "reussi" | "echoue" | "annule" | "inconnu";

export function urlSasPay(env: EnvironnementSasPay, autoriserProduction = false): string {
  if (env === "production") {
    if (!autoriserProduction) throw new Error("SasPay production désactivé : approbation explicite requise");
    return SASPAY_PRODUCTION_HOST;
  }
  if (env !== "sandbox") throw new Error("Environnement SasPay invalide");
  return SASPAY_SANDBOX_HOST;
}

/** Les montants XOF sont envoyés comme chaînes décimales, sans flottants. */
export function montantSasPay(fcfa: number): string {
  if (!Number.isSafeInteger(fcfa) || fcfa <= 0) throw new Error("Montant FCFA invalide");
  return fcfa.toString() + ".00";
}

/** Un succès HTTP/API n'est pas une preuve de paiement. */
export function statutSasPay(statut: unknown): StatutPaiement {
  if (typeof statut !== "string") return "inconnu";
  switch (statut.toUpperCase()) {
    case "SUCCESS": case "PAID": case "COMPLETED": return "reussi";
    case "PENDING": case "PROCESSING": return "en_attente";
    case "FAILED": case "ERROR": return "echoue";
    case "CANCELLED": case "CANCELED": case "EXPIRED": return "annule";
    default: return "inconnu";
  }
}

export interface PaiementSasPayVerifie {
  referenceInterne: string;
  referenceFournisseur: string;
  montantFcfa: number;
  devise: "XOF";
  statut: StatutPaiement;
}

/** Refuse de créditer sur la seule base d'un retour navigateur ou webhook non vérifié. */
export function peutCrediterPaiement(
  paiement: PaiementSasPayVerifie,
  attendu: { referenceInterne: string; montantFcfa: number },
  verifieCoteServeur: boolean,
): boolean {
  return verifieCoteServeur &&
    paiement.statut === "reussi" &&
    paiement.devise === "XOF" &&
    paiement.referenceInterne === attendu.referenceInterne &&
    paiement.referenceFournisseur.trim().length > 0 &&
    Number.isSafeInteger(attendu.montantFcfa) && attendu.montantFcfa > 0 &&
    paiement.montantFcfa === attendu.montantFcfa;
}
