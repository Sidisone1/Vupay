import { describe, expect, it } from "vitest";
import { champsManquants, lirePrix, prixPublic } from "./campagnes";
import { construireDestination, lireDestination, normaliserLienAchat } from "./destinations";

describe("destinations WhatsApp fabriquées depuis un numéro", () => {
  it("numéro, catalogue et message", () => {
    expect(construireDestination({ type: "numero_whatsapp", telephone: "70 12 34 56" }, "ML")).toEqual({
      ok: true, url: "https://wa.me/22370123456", libelle: "Numéro WhatsApp",
    });
    expect(construireDestination({ type: "catalogue_whatsapp", telephone: "+223 70123456" }, "ML")).toMatchObject({ ok: true, url: "https://wa.me/c/22370123456" });
    expect(construireDestination({ type: "envoyer_message", telephone: "70123456", message: "Bonjour, je veux le bazin" }, "ML")).toMatchObject({
      ok: true, url: "https://wa.me/22370123456?text=Bonjour%2C%20je%20veux%20le%20bazin",
    });
  });
  it("refuse un numéro invalide ou un message vide ou trop long", () => {
    expect(construireDestination({ type: "numero_whatsapp", telephone: "123" }, "ML").ok).toBe(false);
    expect(construireDestination({ type: "envoyer_message", telephone: "70123456", message: "  " }, "ML").ok).toBe(false);
    expect(construireDestination({ type: "envoyer_message", telephone: "70123456", message: "x".repeat(201) }, "ML").ok).toBe(false);
  });
  it("relit une destination enregistrée", () => {
    expect(lireDestination("envoyer_message", "https://wa.me/22370123456?text=Bonjour%20toi")).toEqual({ telephone: "+22370123456", message: "Bonjour toi" });
    expect(lireDestination("catalogue_whatsapp", "https://wa.me/c/22370123456")).toEqual({ telephone: "+22370123456", message: undefined });
  });
});

describe("lien de boutique pour « Acheter »", () => {
  it("ajoute https:// et met l'hôte en minuscules", () => {
    expect(normaliserLienAchat("Boutique-Kanaga.ml/bazin")).toBe("https://boutique-kanaga.ml/bazin");
    expect(construireDestination({ type: "acheter", url: "https://boutique.ml/p?id=3" }, "ML")).toMatchObject({ ok: true, url: "https://boutique.ml/p?id=3" });
  });
  it("refuse HTTP, javascript:, IP, port, identifiant et localhost", () => {
    for (const url of ["http://boutique.ml", "javascript:alert(1)", "https://192.168.1.1/x", "https://boutique.ml:8443/", "https://moi@boutique.ml/", "https://localhost/x"]) {
      expect(construireDestination({ type: "acheter", url }, "ML").ok).toBe(false);
    }
  });
});

describe("campagne prête à soumettre", () => {
  const complete = { titre: "Bazin riche", texte: "Teint à Bamako", photo: "id/bazin.jpg", debut: "2026-11-23", fin: "2026-12-23", nbDestinations: 1 };
  it("rien ne manque pour une campagne complète", () => {
    expect(champsManquants(complete, "2026-11-23")).toEqual([]);
  });
  it("liste ce qui manque", () => {
    expect(champsManquants({ ...complete, photo: null, nbDestinations: 0 }, "2026-11-23")).toEqual(["Une photo du produit", "Au moins un bouton de contact"]);
    expect(champsManquants({ ...complete, fin: "2026-11-01" }, "2026-11-23")).toEqual(["Une date de fin après la date de début"]);
    expect(champsManquants({ ...complete, debut: "2026-10-01", fin: "2026-11-01" }, "2026-11-23")).toEqual(["Une date de fin qui n'est pas passée"]);
  });
  it("prix en entiers FCFA", () => {
    expect(lirePrix("15 000")).toEqual({ ok: true, prix: 15000 });
    expect(lirePrix("")).toEqual({ ok: true, prix: null });
    expect(lirePrix("15,5")).toEqual({ ok: false });
    expect(lirePrix("-3")).toEqual({ ok: false });
    expect(prixPublic(15000)).toBe("15 000 FCFA");
  });
});
