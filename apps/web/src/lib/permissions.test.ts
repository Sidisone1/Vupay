import { describe, expect, it } from "vitest";
import {
  accesPage,
  accueilUtilisateur,
  adminPeut,
  peutDemanderRetrait,
  peutOuvrirEspace,
  peutSoumettreCampagne,
  type Utilisateur,
} from "./permissions";

const diffuseur: Utilisateur = { roles: ["diffuseur"], roleAdmin: null, suspendu: false, statutKyc: "non_soumis" };
const double: Utilisateur = { ...diffuseur, roles: ["diffuseur", "annonceur"] };
const admin = (roleAdmin: Utilisateur["roleAdmin"]): Utilisateur => ({ ...diffuseur, roles: ["diffuseur", "admin"], roleAdmin });

describe("permissions admin", () => {
  it("le super admin a toutes les permissions", () => {
    expect(adminPeut(admin("super_admin"), "gerer_admins")).toBe(true);
    expect(adminPeut(admin("super_admin"), "modifier_parametres")).toBe(true);
  });
  it("chaque rôle admin n'a que ses permissions", () => {
    expect(adminPeut(admin("moderateur"), "valider_kyc")).toBe(true);
    expect(adminPeut(admin("moderateur"), "gerer_retraits")).toBe(false);
    expect(adminPeut(admin("finance"), "gerer_retraits")).toBe(true);
    expect(adminPeut(admin("finance"), "valider_kyc")).toBe(false);
    expect(adminPeut(admin("support"), "suspendre_utilisateurs")).toBe(true);
    expect(adminPeut(admin("support"), "modifier_parametres")).toBe(false);
  });
  it("sans rôle admin, ou suspendu, aucune permission", () => {
    expect(adminPeut({ ...diffuseur, roleAdmin: "super_admin" }, "valider_kyc")).toBe(false);
    expect(adminPeut({ ...admin("super_admin"), suspendu: true }, "valider_kyc")).toBe(false);
    expect(adminPeut(admin(null), "valider_kyc")).toBe(false);
  });
});

describe("espaces et actions", () => {
  it("on s'ouvre soi-même diffuseur ou annonceur, jamais admin", () => {
    expect(peutOuvrirEspace(diffuseur, "annonceur")).toBe(true);
    expect(peutOuvrirEspace(diffuseur, "diffuseur")).toBe(false);
    expect(peutOuvrirEspace(diffuseur, "admin")).toBe(false);
    expect(peutOuvrirEspace({ ...diffuseur, suspendu: true }, "annonceur")).toBe(false);
  });
  it("le retrait exige un KYC validé", () => {
    expect(peutDemanderRetrait(diffuseur)).toBe(false);
    expect(peutDemanderRetrait({ ...diffuseur, statutKyc: "valide" })).toBe(true);
    expect(peutDemanderRetrait({ ...diffuseur, statutKyc: "valide", suspendu: true })).toBe(false);
  });
  it("la soumission d'une campagne exige une entreprise vérifiée", () => {
    expect(peutSoumettreCampagne(double, "en_attente")).toBe(false);
    expect(peutSoumettreCampagne(double, "valide")).toBe(true);
    expect(peutSoumettreCampagne(diffuseur, "valide")).toBe(false);
  });
});

describe("accès aux pages", () => {
  it("les pages publiques sont ouvertes à tous", () => {
    for (const chemin of ["/", "/connexion", "/c/ab12cd", "/p/produit", "/api/webhooks/paiements", "/deconnexion"]) {
      expect(accesPage(null, chemin)).toEqual({ autorise: true });
    }
  });
  it("un visiteur non connecté est envoyé vers la connexion, avec retour prévu", () => {
    expect(accesPage(null, "/diffuseur/gains")).toEqual({ autorise: false, redirection: "/connexion?suite=%2Fdiffuseur%2Fgains" });
  });
  it("un connecté sans profil termine son inscription", () => {
    expect(accesPage("sans_profil", "/annonceur")).toEqual({ autorise: false, redirection: "/bienvenue?espace=annonceur" });
    expect(accesPage("sans_profil", "/admin")).toEqual({ autorise: false, redirection: "/bienvenue" });
    expect(accesPage("sans_profil", "/bienvenue")).toEqual({ autorise: true });
  });
  it("un compte suspendu ne voit que la page de suspension", () => {
    expect(accesPage({ ...diffuseur, suspendu: true }, "/diffuseur")).toEqual({ autorise: false, redirection: "/suspendu" });
  });
  it("un espace non ouvert propose de l'ouvrir ; l'espace admin renvoie à l'accueil", () => {
    expect(accesPage(diffuseur, "/annonceur/campagnes")).toEqual({ autorise: false, redirection: "/bienvenue?espace=annonceur" });
    expect(accesPage(diffuseur, "/admin")).toEqual({ autorise: false, redirection: "/diffuseur" });
    expect(accesPage(double, "/annonceur/campagnes")).toEqual({ autorise: true });
  });
  it("chaque page admin exige sa permission", () => {
    expect(accesPage(admin("finance"), "/admin/retraits")).toEqual({ autorise: true });
    expect(accesPage(admin("finance"), "/admin/kyc")).toEqual({ autorise: false, redirection: "/admin" });
    expect(accesPage(admin("moderateur"), "/admin/kyc")).toEqual({ autorise: true });
    expect(accesPage(admin("moderateur"), "/admin/parametres")).toEqual({ autorise: false, redirection: "/admin" });
    expect(accesPage(admin("support"), "/admin/utilisateurs")).toEqual({ autorise: true });
  });
  it("un chemin qui ressemble à un espace sans en être un n'ouvre rien", () => {
    expect(accesPage(diffuseur, "/administration")).toEqual({ autorise: true });
    expect(accesPage(diffuseur, "/admin-faux")).toEqual({ autorise: true });
  });
});

describe("page d'arrivée après connexion", () => {
  it("va vers la page demandée si elle est permise", () => {
    expect(accueilUtilisateur(double, "/annonceur/campagnes")).toBe("/annonceur/campagnes");
  });
  it("ignore une page interdite ou une adresse externe", () => {
    expect(accueilUtilisateur(diffuseur, "/admin/parametres")).toBe("/diffuseur");
    expect(accueilUtilisateur(diffuseur, "//site-pirate.example")).toBe("/diffuseur");
    expect(accueilUtilisateur(diffuseur, "https://site-pirate.example")).toBe("/diffuseur");
  });
  it("sinon ouvre l'espace principal", () => {
    expect(accueilUtilisateur(admin("finance"))).toBe("/admin");
    expect(accueilUtilisateur(double)).toBe("/annonceur");
    expect(accueilUtilisateur({ ...diffuseur, roles: [] })).toBe("/bienvenue");
  });
});
