import { describe, expect, it } from "vitest";
import { extraireTokenNotification, verifierSecretWebhook } from "./ligdicash-webhook";

describe("Webhook LigdiCash : garde-fous", () => {
  it("refuse les secrets manquants ou incorrects", () => {
    expect(verifierSecretWebhook(null, "abc")).toBe(false);
    expect(verifierSecretWebhook("abc", undefined)).toBe(false);
    expect(verifierSecretWebhook("incorrect", "abc")).toBe(false);
    expect(verifierSecretWebhook("abc", "abc")).toBe(true);
  });
  it("valide seulement les tokens de forme attendue", () => {
    expect(extraireTokenNotification({ token: "token_123456" })).toBe("token_123456");
    expect(extraireTokenNotification({ token: "../danger" })).toBeNull();
    expect(extraireTokenNotification({ token: 123 })).toBeNull();
  });
});
