import { describe, expect, it } from "vitest";
import { clicValide, evaluerPreuve, type EntreePreuve } from "./antifraude";

const base: EntreePreuve = {
  vuesLues: 120,
  codeLu: "ST-4K7",
  codeAttendu: "ST-4K7",
  porteeHabituelle: 100,
  empreinteDejaVue: false,
  interfaceReseauConforme: true,
  niveau: "bronze",
  clicsValides: 2,
};

describe("antifraude", () => {
  it("valide automatiquement un cas normal", () => {
    expect(evaluerPreuve(base)).toEqual({ statut: "validee_auto", motifs: [], vuesPayees: 120 });
  });
  it("refuse un code faux ou une capture réutilisée", () => {
    expect(evaluerPreuve({ ...base, codeLu: "ST-XXX" }).statut).toBe("refusee");
    expect(evaluerPreuve({ ...base, empreinteDejaVue: true }).statut).toBe("refusee");
  });
  it("envoie en vérification les vues anormales et les taux de clic suspects", () => {
    expect(evaluerPreuve({ ...base, vuesLues: 200 }).statut).toBe("a_verifier");
    expect(evaluerPreuve({ ...base, clicsValides: 30 }).statut).toBe("a_verifier");
  });
  it("plafonne les vues payées selon le niveau", () => {
    const d = evaluerPreuve({ ...base, vuesLues: 800, porteeHabituelle: 700 });
    expect(d.vuesPayees).toBe(500);
  });
  it("ne compte pas les clics du diffuseur, des robots ou en double", () => {
    expect(clicValide({ estRobot: false, estLeDiffuseur: false, dejaCompteSur24h: false })).toBe(true);
    expect(clicValide({ estRobot: true, estLeDiffuseur: false, dejaCompteSur24h: false })).toBe(false);
    expect(clicValide({ estRobot: false, estLeDiffuseur: true, dejaCompteSur24h: false })).toBe(false);
    expect(clicValide({ estRobot: false, estLeDiffuseur: false, dejaCompteSur24h: true })).toBe(false);
  });
});
