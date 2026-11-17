import { describe, expect, it } from "vitest";
import { estimerCampagne, repartir, TARIFS_PAR_DEFAUT } from "./tarifs";

describe("tarifs", () => {
  it("exemple du cahier des charges : 100 000 F achètent 50 000 vues", () => {
    expect(estimerCampagne(100_000, TARIFS_PAR_DEFAUT.vue.annonceur).unites).toBe(50_000);
    expect(repartir(50_000, TARIFS_PAR_DEFAUT.vue)).toEqual({
      debitAnnonceur: 100_000,
      gainDiffuseur: 50_000,
      marge: 50_000,
    });
  });
  it("refuse un budget sous le minimum", () => {
    expect(() => estimerCampagne(10_000, 2)).toThrow(/minimum/);
  });
});
