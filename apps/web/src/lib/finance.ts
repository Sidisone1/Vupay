/**
 * Vupay V2 — calculs financiers purs, sans mouvement d'argent.
 * Les tarifs sont explicitement fournis par une campagne approuvée.
 * Ce module ne crédite aucun compte et ne déclenche aucun paiement.
 */
export type ActionQualifiee = "numero_whatsapp" | "catalogue_whatsapp" | "envoyer_message" | "acheter";
export type StatutAction = "en_attente" | "validee" | "refusee";

export interface RegleTarifaire {
  type: ActionQualifiee;
  prixAnnonceurFcfa: number;
  remunerationDiffuseurFcfa: number;
}

function entierFcfa(valeur: number): boolean {
  return Number.isSafeInteger(valeur) && valeur >= 0;
}

export function verifierTarif(regle: RegleTarifaire): void {
  if (!entierFcfa(regle.prixAnnonceurFcfa) || !entierFcfa(regle.remunerationDiffuseurFcfa)) {
    throw new Error("Les montants doivent être des entiers FCFA positifs ou nuls.");
  }
  if (regle.remunerationDiffuseurFcfa > regle.prixAnnonceurFcfa) {
    throw new Error("La rémunération ne peut pas dépasser le prix annonceur.");
  }
}

export interface CalculAction {
  statut: StatutAction;
  type: ActionQualifiee;
  tarif: RegleTarifaire | null;
}

/** Simulation uniquement : le débit réel exige une transaction serveur idempotente. */
export function simulerAction(action: CalculAction): {
  debitAnnonceurFcfa: number;
  creditDiffuseurFcfa: number;
  margePlateformeFcfa: number;
} {
  const zero = { debitAnnonceurFcfa: 0, creditDiffuseurFcfa: 0, margePlateformeFcfa: 0 };
  if (action.statut !== "validee") return zero;
  if (!action.tarif || action.tarif.type !== action.type) {
    throw new Error("Tarif approuvé correspondant à l'action requis.");
  }
  verifierTarif(action.tarif);
  return {
    debitAnnonceurFcfa: action.tarif.prixAnnonceurFcfa,
    creditDiffuseurFcfa: action.tarif.remunerationDiffuseurFcfa,
    margePlateformeFcfa: action.tarif.prixAnnonceurFcfa - action.tarif.remunerationDiffuseurFcfa,
  };
}
