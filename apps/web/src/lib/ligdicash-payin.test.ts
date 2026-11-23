import { describe, expect, it } from "vitest";
import { preparerFactureLigdiCash } from "./ligdicash-payin";

const input = { reference: "VUPAY_12345678", montantFcfa: 1000, description: "Recharge VUPAY", callbackUrl: "https://vupay.example/api/callback", returnUrl: "https://vupay.example/retour" };
describe("Facture LigdiCash", () => {
  it("construit un montant XOF et une référence interne", () => {
    const payload = preparerFactureLigdiCash(input);
    expect(JSON.stringify(payload)).toContain("VUPAY_12345678");
    expect(JSON.stringify(payload)).toContain('"total_amount":1000');
  });
  it("refuse les montants et URLs dangereux", () => {
    expect(() => preparerFactureLigdiCash({ ...input, montantFcfa: -1 })).toThrow();
    expect(() => preparerFactureLigdiCash({ ...input, callbackUrl: "http://localhost/callback" })).toThrow();
    expect(() => preparerFactureLigdiCash({ ...input, reference: "../x" })).toThrow();
  });
});
