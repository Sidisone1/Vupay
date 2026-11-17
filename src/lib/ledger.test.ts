import { describe, expect, it } from "vitest";
import { soldes, verifierRetrait } from "./ledger";
import type { Ecriture } from "./types";

const journal: Ecriture[] = [
  { compte: "d1", type: "gain_vues", montant: 1200, disponible: true },
  { compte: "d1", type: "gain_vues", montant: 300, disponible: false },
  { compte: "d1", type: "retrait", montant: -1000, disponible: true },
  { compte: "d2", type: "gain_clics", montant: 50, disponible: true },
];

describe("ledger", () => {
  it("calcule les soldes depuis le journal", () => {
    expect(soldes(journal, "d1")).toEqual({ disponible: 200, enAttente: 300 });
  });
  it("applique les règles de retrait", () => {
    const ok = { seuil: 1000, kycValide: true, numeroAuNomDuTitulaire: true };
    expect(verifierRetrait(1000, 1500, ok)).toEqual([]);
    expect(verifierRetrait(500, 1500, ok)).toHaveLength(1);
    expect(verifierRetrait(2000, 1500, ok)).toHaveLength(1);
    expect(verifierRetrait(1000, 1500, { ...ok, kycValide: false })).toHaveLength(1);
  });
});
