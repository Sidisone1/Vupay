/**
 * Vupay V2 — calculs financiers purs, sans mouvement d'argent.
 * Les tarifs sont explicitement fournis par une campagne approuvée.
 * Ce module ne crédite aucun compte et ne déclenche aucun paiement.
 */
import { ACTIONS_CONTACT, type ActionContact, type EvenementActionContact, type StatutAction } from "./contacts";

export type ActionQualifiee = ActionContact;
export type { StatutAction } from "./contacts";

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


type ActionBudget = Pick<EvenementActionContact, "campagneId" | "cleIdempotence" | "type" | "statut">;

export interface SimulationBudget {
  campagneId: string;
  budgetDisponibleFcfa: number;
  tarifs: readonly RegleTarifaire[];
  actions: readonly ActionBudget[];
}

export interface ResumeBudget {
  actionsValidees: number;
  debitAnnonceurFcfa: number;
  creditDiffuseurFcfa: number;
  margePlateformeFcfa: number;
  resteDisponibleFcfa: number;
  manqueFcfa: number;
}

/** Prévisualise le coût des actions déjà validées, sans modifier les comptes ni le journal. */
export function simulerBudgetCampagne(input: SimulationBudget): ResumeBudget {
  if (!entierFcfa(input.budgetDisponibleFcfa)) {
    throw new Error("Le budget disponible doit être un entier FCFA positif ou nul.");
  }
  const tarifs = new Map<ActionQualifiee, RegleTarifaire>();
  for (const tarif of input.tarifs) {
    if (!ACTIONS_CONTACT.includes(tarif.type) || tarifs.has(tarif.type)) {
      throw new Error("Type de tarif inconnu ou défini plusieurs fois.");
    }
    verifierTarif(tarif);
    tarifs.set(tarif.type, tarif);
  }

  const actionsVues = new Map<string, ActionBudget>();
  let debitAnnonceurFcfa = 0;
  let creditDiffuseurFcfa = 0;
  let actionsValidees = 0;
  for (const action of input.actions) {
    if (action.campagneId !== input.campagneId || !action.cleIdempotence.trim()) {
      throw new Error("Action d'une autre campagne ou clé d'idempotence manquante.");
    }
    const precedente = actionsVues.get(action.cleIdempotence);
    if (precedente) {
      if (precedente.type !== action.type || precedente.statut !== action.statut) {
        throw new Error("Plusieurs versions de la même action figurent dans le lot.");
      }
      continue;
    }
    actionsVues.set(action.cleIdempotence, action);
    if (action.statut !== "validee") continue;

    const calcul = simulerAction({ ...action, tarif: tarifs.get(action.type) ?? null });
    debitAnnonceurFcfa += calcul.debitAnnonceurFcfa;
    creditDiffuseurFcfa += calcul.creditDiffuseurFcfa;
    if (!entierFcfa(debitAnnonceurFcfa)) {
      throw new Error("Le total dépasse la plage des entiers FCFA sûrs.");
    }
    actionsValidees += 1;
  }

  const solde = input.budgetDisponibleFcfa - debitAnnonceurFcfa;
  return {
    actionsValidees,
    debitAnnonceurFcfa,
    creditDiffuseurFcfa,
    margePlateformeFcfa: debitAnnonceurFcfa - creditDiffuseurFcfa,
    resteDisponibleFcfa: Math.max(0, solde),
    manqueFcfa: Math.max(0, -solde),
  };
}
