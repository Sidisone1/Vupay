import { simulerAction, type ActionQualifiee, type RegleTarifaire, type StatutAction } from "./finance";

/** Calcul prévisionnel uniquement. Le solde réel doit être verrouillé en base. */
export interface BudgetCampagne {
  budgetTotalFcfa: number;
  montantReserveFcfa: number;
  montantDepenseFcfa: number;
}

function entierPositif(n: number): boolean {
  return Number.isSafeInteger(n) && n >= 0;
}

export function budgetDisponible(b: BudgetCampagne): number {
  if (![b.budgetTotalFcfa, b.montantReserveFcfa, b.montantDepenseFcfa].every(entierPositif)) {
    throw new Error("Budget invalide : montants FCFA entiers et positifs requis.");
  }
  if (b.montantReserveFcfa > b.budgetTotalFcfa ||
      b.montantDepenseFcfa > b.budgetTotalFcfa - b.montantReserveFcfa) {
    throw new Error("Budget invalide : montants réservés ou dépensés excessifs.");
  }
  return b.budgetTotalFcfa - b.montantReserveFcfa - b.montantDepenseFcfa;
}

export function prevoirDebit(
  budget: BudgetCampagne,
  action: { type: ActionQualifiee; statut: StatutAction; tarif: RegleTarifaire | null },
): { autorise: boolean; debitFcfa: number; disponibleApresFcfa: number; motif: string | null } {
  const disponible = budgetDisponible(budget);
  const debit = simulerAction(action).debitAnnonceurFcfa;
  if (action.statut !== "validee") {
    return { autorise: false, debitFcfa: 0, disponibleApresFcfa: disponible, motif: "Action non validée" };
  }
  if (debit === 0) {
    return { autorise: false, debitFcfa: 0, disponibleApresFcfa: disponible, motif: "Tarif nul : rémunération désactivée" };
  }
  if (debit > disponible) {
    return { autorise: false, debitFcfa: 0, disponibleApresFcfa: disponible, motif: "Budget insuffisant" };
  }
  return { autorise: true, debitFcfa: debit, disponibleApresFcfa: disponible - debit, motif: null };
}
