import { describe, expect, it } from "vitest";
import { filtreTelephone, lirePage, menuAdmin, motifValide } from "./admin";
import type { Utilisateur } from "./permissions";

const admin = (roleAdmin: Utilisateur["roleAdmin"]): Utilisateur => ({ roles: ["admin"], roleAdmin, suspendu: false, statutKyc: "non_soumis" });
const liens = (u: Utilisateur) => menuAdmin(u).map((l) => l.href);

describe("menu admin", () => {
  it("le super admin voit tout", () => {
    expect(liens(admin("super_admin"))).toHaveLength(8);
  });
  it("chaque rôle ne voit que ses écrans", () => {
    expect(liens(admin("moderateur"))).toEqual(["/admin/kyc", "/admin/entreprises", "/admin/campagnes", "/admin/actions", "/admin/utilisateurs"]);
    expect(liens(admin("finance"))).toEqual(["/admin/utilisateurs", "/admin/retraits", "/admin/journal"]);
    expect(liens(admin("support"))).toEqual(["/admin/utilisateurs"]);
  });
  it("un compte suspendu ou sans rôle admin ne voit rien", () => {
    expect(liens({ ...admin("super_admin"), suspendu: true })).toEqual([]);
    expect(liens({ ...admin("super_admin"), roles: ["diffuseur"] })).toEqual([]);
  });
});

describe("motif de refus", () => {
  it("nettoie et accepte un motif clair", () => {
    expect(motifValide("  Photo   floue ")).toBe("Photo floue");
  });
  it("refuse un motif vide, trop court ou trop long", () => {
    expect(motifValide("   ")).toBeNull();
    expect(motifValide("non")).toBeNull();
    expect(motifValide("x".repeat(301))).toBeNull();
  });
});

describe("recherche et pages", () => {
  it("ne garde que les chiffres d'un numéro", () => {
    expect(filtreTelephone("+223 70 12")).toBe("2237012");
    expect(filtreTelephone("70")).toBeNull();
    expect(filtreTelephone("abc")).toBeNull();
  });
  it("lit un numéro de page sûr", () => {
    expect(lirePage(undefined)).toBe(1);
    expect(lirePage("3")).toBe(3);
    expect(lirePage("-2")).toBe(1);
    expect(lirePage("abc")).toBe(1);
    expect(lirePage("999999")).toBe(1000);
  });
});
