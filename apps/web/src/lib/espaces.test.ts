import { describe, expect, it } from "vitest";
import { cheminSur, destinationApresConnexion, validerInscription, verifierAcces, type ProfilSession } from "./espaces";

const diffuseur: ProfilSession = { role: "diffuseur", espaces: ["diffuseur"], suspendu: false };
const lesDeux: ProfilSession = { role: "diffuseur", espaces: ["diffuseur", "annonceur"], suspendu: false };
const admin: ProfilSession = { role: "admin", espaces: ["diffuseur"], suspendu: false };

describe("accès aux espaces", () => {
  it("laisse passer les pages publiques", () => {
    expect(verifierAcces("/", false, null)).toEqual({ ok: true });
    expect(verifierAcces("/c/AB12", false, null)).toEqual({ ok: true });
    expect(verifierAcces("/diffuseurs-info", false, null)).toEqual({ ok: true });
  });
  it("envoie un visiteur vers la connexion en gardant la page demandée", () => {
    expect(verifierAcces("/annonceur/portefeuille", false, null))
      .toEqual({ ok: false, redirection: "/connexion?suite=%2Fannonceur%2Fportefeuille" });
  });
  it("envoie un connecté sans profil vers l'inscription", () => {
    expect(verifierAcces("/diffuseur", true, null)).toEqual({ ok: false, redirection: "/inscription" });
  });
  it("propose d'ouvrir l'espace annonceur au lieu de refuser", () => {
    expect(verifierAcces("/annonceur", true, diffuseur)).toEqual({ ok: false, redirection: "/compte/espaces?ajouter=annonceur" });
    expect(verifierAcces("/annonceur", true, lesDeux)).toEqual({ ok: true });
  });
  it("réserve l'administration aux admins", () => {
    expect(verifierAcces("/admin/retraits", true, lesDeux)).toEqual({ ok: false, redirection: "/diffuseur" });
    expect(verifierAcces("/admin/retraits", true, admin)).toEqual({ ok: true });
  });
  it("bloque un compte suspendu partout sauf la page d'explication", () => {
    const suspendu = { ...lesDeux, suspendu: true };
    expect(verifierAcces("/diffuseur", true, suspendu)).toEqual({ ok: false, redirection: "/compte/suspendu" });
    expect(verifierAcces("/compte/suspendu", true, suspendu)).toEqual({ ok: true });
  });
});

describe("redirection après le code OTP", () => {
  it("nouvel utilisateur : inscription, en gardant l'espace choisi", () => {
    expect(destinationApresConnexion(null, { espace: "annonceur" })).toBe("/inscription?espace=annonceur");
    expect(destinationApresConnexion(null, { espace: "pirate" })).toBe("/inscription");
  });
  it("reprend la page demandée si elle est autorisée", () => {
    expect(destinationApresConnexion(lesDeux, { suite: "/annonceur/campagnes" })).toBe("/annonceur/campagnes");
    expect(destinationApresConnexion(diffuseur, { suite: "/admin" })).toBe("/diffuseur");
  });
  it("refuse les redirections vers un autre site", () => {
    expect(cheminSur("https://evil.example")).toBeNull();
    expect(cheminSur("//evil.example")).toBeNull();
    expect(cheminSur("/\\evil.example")).toBeNull();
    expect(destinationApresConnexion(diffuseur, { suite: "//evil.example" })).toBe("/diffuseur");
  });
  it("respecte l'espace choisi sur l'accueil", () => {
    expect(destinationApresConnexion(lesDeux, { espace: "annonceur" })).toBe("/annonceur");
    expect(destinationApresConnexion(diffuseur, { espace: "annonceur" })).toBe("/compte/espaces?ajouter=annonceur");
    expect(destinationApresConnexion(admin)).toBe("/admin");
  });
});

describe("formulaire d'inscription", () => {
  const ok = { pays: "ML", ville: "  Bamako ", annee_naissance: "1998", sexe: "F", interets: ["Sport", "Sport"], espace: "diffuseur" };
  it("accepte un formulaire valide et nettoie les valeurs", () => {
    const r = validerInscription(ok, 2026);
    expect(r).toEqual({ ok: true, donnees: {
      pays: "ML", ville: "Bamako", annee_naissance: 1998, sexe: "F", interets: ["Sport"], espaces: ["diffuseur"], nom_affiche: null,
    } });
  });
  it("refuse les mineurs", () => {
    const r = validerInscription({ ...ok, annee_naissance: "2010" }, 2026);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.erreurs.annee_naissance).toMatch(/18 ans/);
  });
  it("refuse pays, espace et intérêts inconnus", () => {
    const r = validerInscription({ ...ok, pays: "FR", espace: "admin", interets: ["Casino"] }, 2026);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(Object.keys(r.erreurs).sort()).toEqual(["espaces", "interets", "pays"]);
  });
  it("limite le nombre de centres d'intérêt", () => {
    const r = validerInscription({ ...ok, interets: ["Sport", "Voyages", "Immobilier", "Auto et moto", "Musique et sorties", "Santé et bien-être"] }, 2026);
    expect(r.ok).toBe(false);
  });
});
