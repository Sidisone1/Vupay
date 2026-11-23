import { describe, expect, it } from "vitest";
import { reconcilerRecharge, type IntentionPaiement } from "./ligdicash-reconciliation";

const intention: IntentionPaiement = { reference: "VUPAY_123456", token: "TOKEN_123", montantFcfa: 2000, direction: "payin", statut: "pending" };
const distant = { status: "completed", transaction_id: "VUPAY_123456", token: "TOKEN_123", amount: 2000, currency: "XOF" };
describe("LigdiCash: réconciliation stricte", () => {
  it("confirme uniquement après contrôle distant authentifié", () => {
    expect(reconcilerRecharge(intention, distant, true).decision).toBe("confirmer");
    expect(reconcilerRecharge(intention, distant, false).decision).toBe("revue");
  });
  it("refuse les différences de montant, devise et référence", () => {
    for (const modif of [{ amount: 2001 }, { currency: "EUR" }, { token: "FAUX" }, { transaction_id: "FAUX" }]) {
      expect(reconcilerRecharge(intention, { ...distant, ...modif }, true).decision).toBe("revue");
    }
  });
  it("ignore les répétitions et les statuts en attente", () => {
    expect(reconcilerRecharge({ ...intention, statut: "completed" }, distant, true).decision).toBe("ignorer");
    expect(reconcilerRecharge(intention, { ...distant, status: "pending" }, true).decision).toBe("ignorer");
  });
  it("n'autorise pas de crédit pour un retrait", () => {
    expect(reconcilerRecharge({ ...intention, direction: "payout" }, distant, true).decision).toBe("ignorer");
  });
});
