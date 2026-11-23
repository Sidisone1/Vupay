import { describe, expect, it } from "vitest";
import { cheminPiece, etatKyc, peutDemanderVerification, verifierFicheEntreprise, verifierFichier } from "./pieces";

const ID = "11111111-1111-1111-1111-111111111111";

describe("fichiers acceptés", () => {
  it("accepte une photo pour la pièce d'identité", () => {
    expect(verifierFichier("piece", { type: "image/jpeg", size: 500_000 })).toBeNull();
  });
  it("refuse un PDF pour le selfie mais l'accepte pour l'entreprise", () => {
    expect(verifierFichier("selfie", { type: "application/pdf", size: 500_000 })).toMatch(/Format/);
    expect(verifierFichier("entreprise", { type: "application/pdf", size: 500_000 })).toBeNull();
  });
  it("refuse un fichier vide ou trop lourd", () => {
    expect(verifierFichier("piece", { type: "image/png", size: 0 })).toMatch(/vide/);
    expect(verifierFichier("piece", { type: "image/png", size: 9_000_000 })).toMatch(/8 Mo/);
    expect(verifierFichier("entreprise", { type: "application/pdf", size: 11_000_000 })).toMatch(/10 Mo/);
  });
});

describe("chemin dans le stockage", () => {
  it("range le fichier dans le dossier de son propriétaire, avec un nom unique", () => {
    expect(cheminPiece(ID, "selfie", "image/jpeg", 1700000000000)).toBe(`${ID}/selfie-1700000000000.jpg`);
    expect(cheminPiece(ID, "entreprise", "application/pdf", 1)).toBe(`${ID}/entreprise-1.pdf`);
  });
  it("refuse un identifiant qui pourrait sortir du dossier", () => {
    expect(() => cheminPiece("../autre", "piece", "image/jpeg")).toThrow();
    expect(() => cheminPiece(ID, "piece", "text/html")).toThrow();
  });
});

describe("écran KYC", () => {
  it("propose le dépôt seulement si aucun dossier n'est en cours ou validé", () => {
    expect(etatKyc("non_soumis").peutDeposer).toBe(true);
    expect(etatKyc("refuse").peutDeposer).toBe(true);
    expect(etatKyc("en_attente").peutDeposer).toBe(false);
    expect(etatKyc("valide").peutDeposer).toBe(false);
  });
});

describe("fiche entreprise", () => {
  const fiche = { raisonSociale: "Boutique Kanaga", pays: "ML", secteur: "Commerce", rccm: "MA.BKO.2026.B.1234", nif: "" };
  it("accepte une fiche complète", () => {
    expect(verifierFicheEntreprise(fiche)).toEqual({});
  });
  it("exige un nom et au moins le RCCM ou le NIF", () => {
    expect(verifierFicheEntreprise({ ...fiche, raisonSociale: " " }).raisonSociale).toBeDefined();
    expect(verifierFicheEntreprise({ ...fiche, rccm: "" }).rccm).toBeDefined();
    expect(verifierFicheEntreprise({ ...fiche, rccm: "", nif: "084123456K" })).toEqual({});
  });
  it("refuse des numéros fantaisistes", () => {
    expect(verifierFicheEntreprise({ ...fiche, rccm: "<script>" }).rccm).toBeDefined();
  });
  it("la vérification se redemande après un refus, pas pendant ni après validation", () => {
    expect(peutDemanderVerification("non_soumis")).toBe(true);
    expect(peutDemanderVerification("refuse")).toBe(true);
    expect(peutDemanderVerification("en_attente")).toBe(false);
    expect(peutDemanderVerification("valide")).toBe(false);
  });
});
