import { describe, expect, it } from "vitest";
import { expediteurPour, messageCode, nomExpediteurValide, requeteEnvoi } from "../../../../supabase/functions/envoyer-sms/regles";

describe("SMS de connexion par Orange", () => {
  it("choisit le numéro d'expéditeur Orange du pays", () => {
    expect(expediteurPour("+22370123456")).toBe("2230000");
    expect(expediteurPour("+2250701020304")).toBe("2250000");
    expect(expediteurPour("221771234567")).toBe("2210000");
  });
  it("refuse les pays non couverts par Orange et les numéros invalides", () => {
    expect(expediteurPour("+22997000000")).toBeNull(); // Bénin
    expect(expediteurPour("+33612345678")).toBeNull();
    expect(expediteurPour("+223abc")).toBeNull();
  });
  it("écrit un message court, sans lien ni la marque WhatsApp", () => {
    const m = messageCode("123456");
    expect(m).toContain("123456");
    expect(m.length).toBeLessThanOrEqual(160);
    expect(m).not.toMatch(/whatsapp|http/i);
    expect(() => messageCode("12ab")).toThrow();
  });
  it("n'accepte qu'un nom d'expéditeur conforme à Orange", () => {
    expect(nomExpediteurValide("VUPAY")).toBe("VUPAY");
    expect(nomExpediteurValide("Vupay Mali 2026")).toBeUndefined();
    expect(nomExpediteurValide("Vu-pay")).toBeUndefined();
    expect(nomExpediteurValide(undefined)).toBeUndefined();
  });
  it("construit la requête attendue par Orange", () => {
    const r = requeteEnvoi("+22370123456", "654321", "VUPAY");
    expect(r.url).toBe("https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B2230000/requests");
    expect(r.corps.outboundSMSMessageRequest).toEqual({
      address: "tel:+22370123456",
      senderAddress: "tel:+2230000",
      senderName: "VUPAY",
      outboundSMSTextMessage: { message: messageCode("654321") },
    });
    expect(requeteEnvoi("+22370123456", "654321").corps.outboundSMSMessageRequest).not.toHaveProperty("senderName");
    expect(() => requeteEnvoi("+22890000000", "654321")).toThrow(/non couvert/);
  });
});
