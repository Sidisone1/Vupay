import { describe, expect, it } from "vitest";
import { simulerAction, simulerBudgetCampagne, verifierTarif } from "./finance";

const tarif = { type: "envoyer_message" as const, prixAnnonceurFcfa: 100, remunerationDiffuseurFcfa: 70 };

describe("finance V2 — simulation sans paiement", () => {
  it("ne paie jamais une action en attente", () => {
    expect(simulerAction({ statut: "en_attente", type: "envoyer_message", tarif })).toEqual({
      debitAnnonceurFcfa: 0, creditDiffuseurFcfa: 0, margePlateformeFcfa: 0,
    });
  });
  it("ne paie jamais une action refusée", () => {
    expect(simulerAction({ statut: "refusee", type: "envoyer_message", tarif })).toMatchObject({ creditDiffuseurFcfa: 0 });
  });
  it("calcule la répartition d'une action validée", () => {
    expect(simulerAction({ statut: "validee", type: "envoyer_message", tarif })).toEqual({
      debitAnnonceurFcfa: 100, creditDiffuseurFcfa: 70, margePlateformeFcfa: 30,
    });
  });
  it("rejette les tarifs absents ou non correspondants", () => {
    expect(() => simulerAction({ statut: "validee", type: "acheter", tarif })).toThrow();
    expect(() => simulerAction({ statut: "validee", type: "acheter", tarif: null })).toThrow();
  });
  it("rejette les valeurs non entières, négatives ou déficitaires", () => {
    expect(() => verifierTarif({ ...tarif, prixAnnonceurFcfa: 10.5 })).toThrow();
    expect(() => verifierTarif({ ...tarif, remunerationDiffuseurFcfa: -1 })).toThrow();
    expect(() => verifierTarif({ ...tarif, remunerationDiffuseurFcfa: 101 })).toThrow();
    expect(() => verifierTarif({ ...tarif, prixAnnonceurFcfa: Number.MAX_SAFE_INTEGER + 1 })).toThrow();
  });
});


describe("simulation de budget par campagne", () => {
  const validee = {
    campagneId: "campagne-1",
    cleIdempotence: "action-1",
    type: "envoyer_message",
    statut: "validee",
  } as const;
  const input = { campagneId: validee.campagneId, budgetDisponibleFcfa: 150, tarifs: [tarif] };

  it("exclut les actions non validées et ne compte chaque action qu'une fois", () => {
    expect(simulerBudgetCampagne({
      ...input,
      actions: [
        validee,
        { ...validee },
        { ...validee, cleIdempotence: "attente", statut: "en_attente" },
        { ...validee, cleIdempotence: "refus", statut: "refusee" },
      ],
    })).toEqual({
      actionsValidees: 1, debitAnnonceurFcfa: 100, creditDiffuseurFcfa: 70,
      margePlateformeFcfa: 30, resteDisponibleFcfa: 50, manqueFcfa: 0,
    });
  });

  it("signale le montant manquant si le budget ne couvre pas les actions", () => {
    expect(simulerBudgetCampagne({
      ...input, actions: [validee, { ...validee, cleIdempotence: "action-2" }],
    })).toMatchObject({ actionsValidees: 2, resteDisponibleFcfa: 0, manqueFcfa: 50 });
  });

  it("refuse un tarif manquant ou ambigu et un budget non entier", () => {
    expect(() => simulerBudgetCampagne({ ...input, tarifs: [], actions: [validee] })).toThrow();
    expect(() => simulerBudgetCampagne({ ...input, tarifs: [tarif, tarif], actions: [] })).toThrow();
    expect(() => simulerBudgetCampagne({ ...input, budgetDisponibleFcfa: 0.5, actions: [] })).toThrow();
  });

  it("refuse les actions d'une autre campagne et les doublons contradictoires", () => {
    expect(() => simulerBudgetCampagne({
      ...input, actions: [{ ...validee, campagneId: "campagne-2" }],
    })).toThrow();
    expect(() => simulerBudgetCampagne({
      ...input, actions: [validee, { ...validee, statut: "refusee" }],
    })).toThrow();
  });

  it("refuse de cumuler des montants qui ne sont plus des entiers sûrs", () => {
    expect(() => simulerBudgetCampagne({
      ...input,
      tarifs: [{ ...tarif, prixAnnonceurFcfa: Number.MAX_SAFE_INTEGER }],
      actions: [validee, { ...validee, cleIdempotence: "action-2" }],
    })).toThrow();
  });
});
