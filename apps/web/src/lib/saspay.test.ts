import { describe, expect, it } from "vitest";
import { montantSasPay, peutCrediterPaiement, statutSasPay, urlSasPay } from "./saspay";

describe("SasPay — garde-fous sans transaction réseau", () => {
  it("utilise un hôte sandbox distinct", () => {
    expect(urlSasPay("sandbox")).toBe("https://sandbox-api.saspay.me");
    expect(() => urlSasPay("production")).toThrow();
  });
  it("convertit les entiers XOF en chaînes", () => {
    expect(montantSasPay(200)).toBe("200.00");
    expect(() => montantSasPay(1.5)).toThrow();
    expect(() => montantSasPay(-5)).toThrow();
  });
  it("ne confond pas succès API et succès financier", () => {
    expect(statutSasPay("PENDING")).toBe("en_attente");
    expect(statutSasPay("SUCCESS")).toBe("reussi");
    expect(statutSasPay("n'importe quoi")).toBe("inconnu");
  });
  it("ne crédite qu'un paiement confirmé par vérification serveur", () => {
    const p = { referenceInterne: "VUP-123", referenceFournisseur: "SAS-123", montantFcfa: 500, devise: "XOF" as const, statut: "reussi" as const };
    const attendu = { referenceInterne: "VUP-123", montantFcfa: 500 };
    expect(peutCrediterPaiement(p, attendu, false)).toBe(false);
    expect(peutCrediterPaiement(p, attendu, true)).toBe(true);
    expect(peutCrediterPaiement({ ...p, montantFcfa: 499 }, attendu, true)).toBe(false);
    expect(peutCrediterPaiement({ ...p, statut: "en_attente" }, attendu, true)).toBe(false);
    expect(peutCrediterPaiement({ ...p, referenceInterne: "AUTRE" }, attendu, true)).toBe(false);
  });
});
