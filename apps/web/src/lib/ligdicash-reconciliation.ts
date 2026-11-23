import { etatLigdiCash, peutValiderRechargeLigdiCash, type ConfirmationLigdiCash } from "./ligdicash";

/**
 * Pure decision logic: remote confirmation MUST be performed by the server first.
 * This module does not credit any balance or execute any payout.
 */
export interface IntentionPaiement {
  reference: string;
  token: string;
  montantFcfa: number;
  direction: "payin" | "payout";
  statut: "created" | "pending" | "completed" | "failed" | "cancelled" | "review";
}

export interface ReponseConfirmation {
  status: unknown;
  transaction_id: unknown;
  token: unknown;
  amount: unknown;
  currency: unknown;
}

export type DecisionReconciliation =
  | { decision: "ignorer"; motif: string }
  | { decision: "revue"; motif: string }
  | { decision: "confirmer"; reference: string; token: string; montantFcfa: number };

export function reconcilerRecharge(
  intention: IntentionPaiement,
  distant: ReponseConfirmation,
  verificationDistanteAuthentifiee: boolean,
): DecisionReconciliation {
  if (intention.direction !== "payin") return { decision: "ignorer", motif: "Type de transaction incorrect" };
  if (intention.statut === "completed") return { decision: "ignorer", motif: "Transaction déjà confirmée" };
  if (intention.statut === "failed" || intention.statut === "cancelled") return { decision: "revue", motif: "Statut final contradictoire" };
  const statut = etatLigdiCash(distant.status);
  if (statut === "en_attente") return { decision: "ignorer", motif: "Paiement en attente" };
  if (statut !== "reussi") return { decision: "revue", motif: "Statut non confirmé" };
  const confirmation: ConfirmationLigdiCash = {
    referenceInterne: typeof distant.transaction_id === "string" ? distant.transaction_id : "",
    tokenFacture: typeof distant.token === "string" ? distant.token : "",
    montantFcfa: typeof distant.amount === "number" ? distant.amount : NaN,
    devise: typeof distant.currency === "string" ? distant.currency : "",
    statut,
  };
  if (!peutValiderRechargeLigdiCash(confirmation, {
    referenceInterne: intention.reference, tokenFacture: intention.token, montantFcfa: intention.montantFcfa,
  }, verificationDistanteAuthentifiee)) return { decision: "revue", motif: "Données distantes non concordantes ou non vérifiées" };
  return { decision: "confirmer", reference: intention.reference, token: intention.token, montantFcfa: intention.montantFcfa };
}
