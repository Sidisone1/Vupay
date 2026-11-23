import { describe, expect, it } from "vitest";
import { resumer, tauxAction } from "./statistiques";

describe("résumé des visites et actions", () => {
  const r = resumer(
    [{ robot: false }, { robot: false }, { robot: true }, { robot: false }],
    [
      { type: "numero_whatsapp", statut: "validee" },
      { type: "numero_whatsapp", statut: "refusee" },
      { type: "acheter", statut: "en_attente" },
    ],
  );
  it("compte les visites humaines à part (robots exclus)", () => {
    expect(r.visites).toBe(3);
  });
  it("répartit les actions par type et par statut", () => {
    expect(r.parType.numero_whatsapp).toEqual({ validee: 1, en_attente: 0, refusee: 1 });
    expect(r.parType.acheter.en_attente).toBe(1);
    expect(r.parType.catalogue_whatsapp).toEqual({ validee: 0, en_attente: 0, refusee: 0 });
    expect([r.validees, r.enAttente, r.refusees]).toEqual([1, 1, 1]);
  });
  it("calcule le taux d'action sur les seules actions validées", () => {
    expect(tauxAction(r)).toBe(33);
    expect(tauxAction(resumer([], []))).toBeNull();
  });
});
