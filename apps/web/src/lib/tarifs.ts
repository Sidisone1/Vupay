import { exigerFcfa } from "./argent";
import type { Fcfa, Niveau } from "./types";

// Hypothèses du cahier des charges (« Modèle économique ») : à tester, réglables par pays
// et par réseau depuis le back-office (table settings).
export const TARIFS_PAR_DEFAUT = {
  vue: { annonceur: 2, diffuseur: 1 },
  clic: { annonceur: 20, diffuseur: 10 },
  budgetMinimumCampagne: 25_000,
  seuilRetrait: 1_000,
  plafondRetraitAutoJournalier: 25_000,
} as const;

/** Vues payées au maximum par story, selon le niveau du diffuseur. */
export const PLAFOND_VUES_PAR_STORY: Record<Niveau, number> = {
  bronze: 500,
  argent: 1_500,
  or: 5_000,
};

export interface Tarif {
  annonceur: Fcfa;
  diffuseur: Fcfa;
}

/** Estimation avant paiement : combien de vues ou clics un budget achète. */
export function estimerCampagne(budget: Fcfa, tarifUnitaireAnnonceur: Fcfa) {
  exigerFcfa(budget, "budget");
  exigerFcfa(tarifUnitaireAnnonceur, "tarif");
  if (tarifUnitaireAnnonceur <= 0) throw new Error("tarif annonceur invalide");
  if (budget < TARIFS_PAR_DEFAUT.budgetMinimumCampagne) {
    throw new Error(`budget minimum : ${TARIFS_PAR_DEFAUT.budgetMinimumCampagne} F`);
  }
  return { unites: Math.floor(budget / tarifUnitaireAnnonceur) };
}

/** Répartition d'unités validées (vues ou clics) entre diffuseur, annonceur et marge. */
export function repartir(unites: number, tarif: Tarif) {
  if (!Number.isSafeInteger(unites) || unites < 0) throw new Error("unités invalides");
  const debitAnnonceur = unites * tarif.annonceur;
  const gainDiffuseur = unites * tarif.diffuseur;
  return { debitAnnonceur, gainDiffuseur, marge: debitAnnonceur - gainDiffuseur };
}
