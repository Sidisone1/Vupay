import { describe, expect, it } from "vitest";
import { simulerAction, verifierTarif } from "./finance";

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
