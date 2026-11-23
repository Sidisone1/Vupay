import { describe, expect, it } from "vitest";
import { budgetDisponible, prevoirDebit } from "./budget-campagne";

const budget = { budgetTotalFcfa: 1000, montantReserveFcfa: 200, montantDepenseFcfa: 500 };
const tarif = { type: "acheter" as const, prixAnnonceurFcfa: 250, remunerationDiffuseurFcfa: 200 };

describe("prévision budgétaire V2 sans écriture comptable", () => {
  it("calcule le solde disponible", () => {
    expect(budgetDisponible(budget)).toBe(300);
  });
  it("autorise une action validée couverte par le budget", () => {
    expect(prevoirDebit(budget, { type: "acheter", statut: "validee", tarif })).toEqual({
      autorise: true, debitFcfa: 250, disponibleApresFcfa: 50, motif: null,
    });
  });
  it("refuse un débit dépassant le budget", () => {
    expect(prevoirDebit({ ...budget, montantDepenseFcfa: 600 }, { type: "acheter", statut: "validee", tarif }).autorise).toBe(false);
  });
  it("ne débite jamais les actions en attente ou refusées", () => {
    for (const statut of ["en_attente", "refusee"] as const) {
      expect(prevoirDebit(budget, { type: "acheter", statut, tarif }).debitFcfa).toBe(0);
    }
  });
  it("rejette les budgets négatifs, fractionnaires ou incohérents", () => {
    expect(() => budgetDisponible({ ...budget, montantReserveFcfa: -1 })).toThrow();
    expect(() => budgetDisponible({ ...budget, budgetTotalFcfa: 0.5 })).toThrow();
    expect(() => budgetDisponible({ ...budget, montantReserveFcfa: 900 })).toThrow();
  });
  it("ne traite pas un tarif nul comme un paiement", () => {
    expect(prevoirDebit(budget, { type: "acheter", statut: "validee", tarif: { ...tarif, prixAnnonceurFcfa: 0, remunerationDiffuseurFcfa: 0 } }).autorise).toBe(false);
  });
});
