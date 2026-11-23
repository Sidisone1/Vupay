// Droits des utilisateurs côté application. La base applique les mêmes règles (RLS,
// supabase/migrations/0002_comptes_permissions.sql) : ce module sert à orienter l'utilisateur
// et à masquer ce qu'il ne peut pas faire, la base reste l'arbitre final.
import type { Role, RoleAdmin, StatutKyc } from "./types";

export type PermissionAdmin =
  | "moderer_campagnes"
  | "valider_kyc"
  | "verifier_entreprises"
  | "gerer_retraits"
  | "voir_journal"
  | "modifier_parametres"
  | "suspendre_utilisateurs"
  | "gerer_admins";

/** Même correspondance que la fonction SQL admin_peut(). Le super admin a tout. */
export const PERMISSIONS_ADMIN: Record<Exclude<RoleAdmin, "super_admin">, readonly PermissionAdmin[]> = {
  moderateur: ["moderer_campagnes", "valider_kyc", "verifier_entreprises"],
  finance: ["gerer_retraits", "voir_journal"],
  support: ["suspendre_utilisateurs"],
};

export interface Utilisateur {
  roles: Role[];
  roleAdmin: RoleAdmin | null;
  suspendu: boolean;
  statutKyc: StatutKyc;
}

export function aRole(u: Utilisateur, role: Role): boolean {
  return !u.suspendu && u.roles.includes(role);
}

export function adminPeut(u: Utilisateur, permission: PermissionAdmin): boolean {
  if (!aRole(u, "admin") || !u.roleAdmin) return false;
  return u.roleAdmin === "super_admin" || PERMISSIONS_ADMIN[u.roleAdmin].includes(permission);
}

/** Un utilisateur ne peut s'ouvrir lui-même que les espaces diffuseur et annonceur. */
export function peutOuvrirEspace(u: Utilisateur, role: Role): boolean {
  return !u.suspendu && role !== "admin" && !u.roles.includes(role);
}

/** Retrait Mobile Money : diffuseur actif avec identité vérifiée. */
export function peutDemanderRetrait(u: Utilisateur): boolean {
  return aRole(u, "diffuseur") && u.statutKyc === "valide";
}

/** Soumission d'une campagne à la modération : annonceur actif avec entreprise vérifiée. */
export function peutSoumettreCampagne(u: Utilisateur, statutEntreprise: StatutKyc): boolean {
  return aRole(u, "annonceur") && statutEntreprise === "valide";
}

// Accès aux pages ----------------------------------------------------------------------

/** Pages ouvertes à tous, connectés ou non. */
const PAGES_PUBLIQUES = [/^\/$/, /^\/connexion(\/|$)/, /^\/c\//, /^\/p\//, /^\/api\/webhooks\//, /^\/suspendu$/, /^\/deconnexion$/];

/** Pages admin et permission exigée ; les autres pages admin demandent seulement le rôle admin. */
const PAGES_ADMIN: [RegExp, PermissionAdmin][] = [
  [/^\/admin\/campagnes(\/|$)/, "moderer_campagnes"],
  [/^\/admin\/preuves(\/|$)/, "moderer_campagnes"],
  [/^\/admin\/kyc(\/|$)/, "valider_kyc"],
  [/^\/admin\/retraits(\/|$)/, "gerer_retraits"],
  [/^\/admin\/journal(\/|$)/, "voir_journal"],
  [/^\/admin\/parametres(\/|$)/, "modifier_parametres"],
];

export function estPublique(chemin: string): boolean {
  return PAGES_PUBLIQUES.some((motif) => motif.test(chemin));
}

/** Espace auquel appartient une page, ou null pour les pages communes. */
export function espaceDuChemin(chemin: string): Role | null {
  const espace = chemin.split("/")[1];
  return espace === "diffuseur" || espace === "annonceur" || espace === "admin" ? espace : null;
}

export type DecisionAcces = { autorise: true } | { autorise: false; redirection: string };

/**
 * Décide si une page s'affiche.
 * @param u utilisateur connecté avec son profil ; null = non connecté ; "sans_profil" = connecté
 *          par OTP mais profil pas encore créé.
 */
export function accesPage(u: Utilisateur | "sans_profil" | null, chemin: string): DecisionAcces {
  if (estPublique(chemin)) return { autorise: true };
  if (u === null) return { autorise: false, redirection: `/connexion?suite=${encodeURIComponent(chemin)}` };
  if (chemin === "/bienvenue") return { autorise: true };
  const espace = espaceDuChemin(chemin);
  if (u === "sans_profil") {
    const suite = espace && espace !== "admin" ? `?espace=${espace}` : "";
    return { autorise: false, redirection: `/bienvenue${suite}` };
  }
  if (u.suspendu) return { autorise: false, redirection: "/suspendu" };
  if (espace === null) return { autorise: true };
  if (!u.roles.includes(espace)) {
    return { autorise: false, redirection: espace === "admin" ? accueilUtilisateur(u) : `/bienvenue?espace=${espace}` };
  }
  if (espace === "admin") {
    const exigee = PAGES_ADMIN.find(([motif]) => motif.test(chemin));
    if (exigee && !adminPeut(u, exigee[1])) return { autorise: false, redirection: "/admin" };
  }
  return { autorise: true };
}

/** Page d'arrivée après connexion : l'espace demandé s'il est ouvert, sinon le premier espace. */
export function accueilUtilisateur(u: Utilisateur, souhait?: string | null): string {
  if (u.suspendu) return "/suspendu";
  const utile = souhait && /^\/(diffuseur|annonceur|admin)(\/|$)/.test(souhait);
  if (utile && accesPage(u, souhait).autorise) return souhait;
  for (const role of ["admin", "annonceur", "diffuseur"] as const) {
    if (u.roles.includes(role)) return `/${role}`;
  }
  return "/bienvenue";
}
