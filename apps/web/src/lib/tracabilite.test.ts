import { describe, expect, it } from "vitest";
import { adresseVisiteur, codeLienValide, empreinte, estRobot, libelleMotif, typeAppareil } from "./tracabilite";

const ANDROID = "Mozilla/5.0 (Linux; Android 13; SM-A145F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36";
const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
const PC = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const TABLETTE = "Mozilla/5.0 (Linux; Android 12; SM-X200) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

describe("robots et aperçus automatiques", () => {
  it("reconnaît les vrais navigateurs", () => {
    for (const ua of [ANDROID, IPHONE, PC]) expect(estRobot(ua)).toBe(false);
  });
  it("écarte robots, aperçus de lien et navigateurs sans identité", () => {
    for (const ua of ["WhatsApp/2.23.20.0 A", "facebookexternalhit/1.1", "Googlebot/2.1", "curl/8.4.0", "python-requests/2.31", "", null, "x"]) {
      expect(estRobot(ua)).toBe(true);
    }
  });
});

describe("appareils", () => {
  it("classe téléphone, tablette et ordinateur", () => {
    expect(typeAppareil(ANDROID)).toBe("mobile");
    expect(typeAppareil(IPHONE)).toBe("mobile");
    expect(typeAppareil(TABLETTE)).toBe("tablette");
    expect(typeAppareil(PC)).toBe("ordinateur");
    expect(typeAppareil(null)).toBe("inconnu");
  });
});

describe("liens et visiteurs", () => {
  it("valide le format du code personnel", () => {
    expect(codeLienValide("0a1b2c3d4e")).toBe(true);
    expect(codeLienValide("0A1B2C3D4E")).toBe(false);
    expect(codeLienValide("../admin")).toBe(false);
  });
  it("garde la première adresse de la chaîne de proxys", () => {
    expect(adresseVisiteur("41.73.1.2, 10.0.0.1")).toBe("41.73.1.2");
    expect(adresseVisiteur(null)).toBe("inconnue");
  });
  it("pseudonymise : même entrée, même empreinte ; jamais la valeur en clair", async () => {
    const sel = "x".repeat(32);
    const a = await empreinte(sel, "41.73.1.2", ANDROID);
    expect(a).toMatch(/^[0-9a-f]{64}$/);
    expect(a).toBe(await empreinte(sel, "41.73.1.2", ANDROID));
    expect(a).not.toBe(await empreinte(sel, "41.73.1.3", ANDROID));
    expect(a).not.toBe(await empreinte("y".repeat(32), "41.73.1.2", ANDROID));
    expect(a).not.toContain("41.73");
  });
  it("refuse un sel trop court", async () => {
    await expect(empreinte("court", "x")).rejects.toThrow();
  });
  it("traduit les motifs de l'antifraude", () => {
    expect(libelleMotif("doublon")).toBe("Personne déjà comptée pour cette action");
    expect(libelleMotif("inconnu")).toBe("inconnu");
  });
});
