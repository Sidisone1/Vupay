import { describe, expect, it } from "vitest";
import { etatLigdiCash, montantLigdiCash, peutValiderRechargeLigdiCash } from "./ligdicash";

describe("LigdiCash : validation locale sans réseau", () => {
  const confirmation = { referenceInterne: "VUP-1", tokenFacture: "TOKEN-1", montantFcfa: 1000, devise: "XOF", statut: "reussi" as const };
  const attendu = { referenceInterne: "VUP-1", tokenFacture: "TOKEN-1", montantFcfa: 1000 };
  it("reconnaît les statuts documentés", () => {
    expect(etatLigdiCash("completed")).toBe("reussi");
    expect(etatLigdiCash("pending")).toBe("en_attente");
    expect(etatLigdiCash("unknown")).toBe("inconnu");
  });
  it("refuse les montants invalides", () => {
    expect(montantLigdiCash(1000)).toBe(1000);
    expect(() => montantLigdiCash(1.5)).toThrow();
    expect(() => montantLigdiCash(0)).toThrow();
  });
  it("n'accepte pas un callback seul", () => {
    expect(peutValiderRechargeLigdiCash(confirmation, attendu, false)).toBe(false);
  });
  it("exige une confirmation serveur et la concordance des références et montants", () => {
    expect(peutValiderRechargeLigdiCash(confirmation, attendu, true)).toBe(true);
    expect(peutValiderRechargeLigdiCash({ ...confirmation, tokenFacture: "FAUX" }, attendu, true)).toBe(false);
    expect(peutValiderRechargeLigdiCash({ ...confirmation, montantFcfa: 900 }, attendu, true)).toBe(false);
    expect(peutValiderRechargeLigdiCash({ ...confirmation, statut: "en_attente" }, attendu, true)).toBe(false);
  });
});
