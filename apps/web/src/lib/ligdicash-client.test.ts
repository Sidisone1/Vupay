import { describe, expect, it, vi } from "vitest";
import { ClientLigdiCash, LIGDICASH_PATHS } from "./ligdicash-client";

const config = { baseUrl: "https://app.ligdicash.com", apiKey: "factice", authorization: "Bearer factice", appelsReelsAutorises: false };
const ok = () => new Response(JSON.stringify({ response_code: "00", token: "exemple" }), { status: 200 });

describe("LigdiCash : client HTTP contrôlé", () => {
  it("bloque tout appel réel par défaut", async () => {
    const transport = vi.fn(async () => ok());
    const client = new ClientLigdiCash(config, transport);
    await expect(client.creerFacture({})).rejects.toThrow("désactivés");
    expect(transport).not.toHaveBeenCalled();
  });
  it("refuse les hôtes arbitraires et les clés manquantes", () => {
    expect(() => new ClientLigdiCash({ ...config, baseUrl: "https://exemple.com" })).toThrow();
    expect(() => new ClientLigdiCash({ ...config, apiKey: "" })).toThrow();
  });
  it("utilise les endpoints officiels avec transport simulé", async () => {
    const transport = vi.fn(async () => ok());
    const client = new ClientLigdiCash({ ...config, appelsReelsAutorises: true }, transport);
    await client.creerFacture({ montant: 1000 });
    await client.confirmerFacture("token-1");
    await client.creerRetraitMobileMoney({ montant: 1000 });
    await client.confirmerRetrait("token-2");
    expect(transport).toHaveBeenCalledTimes(4);
    expect(transport.mock.calls[0][0]).toContain(LIGDICASH_PATHS.creerFacture);
    expect(transport.mock.calls[1][0]).toContain(LIGDICASH_PATHS.confirmerFacture);
    expect(transport.mock.calls[2][0]).toContain(LIGDICASH_PATHS.retraitMobileMoney);
    expect(transport.mock.calls[3][0]).toContain(LIGDICASH_PATHS.confirmerRetrait);
  });
  it("refuse les réponses HTTP en échec", async () => {
    const client = new ClientLigdiCash({ ...config, appelsReelsAutorises: true }, async () => new Response("non", { status: 401 }));
    await expect(client.creerFacture({})).rejects.toThrow("HTTP 401");
  });
});
