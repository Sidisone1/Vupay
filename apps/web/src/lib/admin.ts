// Règles des écrans d'administration : menu selon les permissions, motifs de refus, recherche.
import { adminPeut, type PermissionAdmin, type Utilisateur } from "./permissions";

export interface LienAdmin {
  href: string;
  libelle: string;
  permission: PermissionAdmin | null; // null = tout admin
}

export const LIENS_ADMIN: LienAdmin[] = [
  { href: "/admin/kyc", libelle: "Vérifications d'identité", permission: "valider_kyc" },
  { href: "/admin/entreprises", libelle: "Vérifications d'entreprise", permission: "verifier_entreprises" },
  { href: "/admin/campagnes", libelle: "Modération des campagnes", permission: "moderer_campagnes" },
  { href: "/admin/utilisateurs", libelle: "Utilisateurs", permission: null },
  { href: "/admin/retraits", libelle: "Retraits", permission: "gerer_retraits" },
  { href: "/admin/journal", libelle: "Journal financier", permission: "voir_journal" },
  { href: "/admin/parametres", libelle: "Paramètres", permission: "modifier_parametres" },
];

/** Le menu ne montre que les écrans que cet admin peut ouvrir. */
export function menuAdmin(u: Utilisateur): LienAdmin[] {
  return LIENS_ADMIN.filter((l) => (l.permission === null ? u.roles.includes("admin") && !u.suspendu : adminPeut(u, l.permission)));
}

/** Motifs proposés en un clic ; l'admin peut aussi écrire le sien. */
export const MOTIFS_KYC = [
  "Photo floue ou illisible",
  "Pièce coupée : les 4 coins doivent être visibles",
  "Pièce expirée",
  "Le visage du selfie ne correspond pas à la pièce",
  "La pièce n'apparaît pas sur le selfie",
] as const;

export const MOTIFS_ENTREPRISE = [
  "Justificatif illisible",
  "Le numéro RCCM ou NIF ne correspond pas au justificatif",
  "Le nom de l'entreprise ne correspond pas au justificatif",
  "Justificatif expiré ou non officiel",
] as const;

/** Un refus doit être motivé clairement : 5 à 300 caractères. Renvoie le motif nettoyé ou null. */
export function motifValide(motif: string): string | null {
  const propre = motif.replace(/\s+/g, " ").trim();
  return propre.length >= 5 && propre.length <= 300 ? propre : null;
}

/** Recherche d'utilisateur par numéro : ne garde que les chiffres (au moins 4). */
export function filtreTelephone(saisie: string): string | null {
  const chiffres = saisie.replace(/\D/g, "");
  return chiffres.length >= 4 ? chiffres.slice(0, 15) : null;
}

export const PAR_PAGE = 20;

/** Numéro de page lu dans l'adresse, toujours ≥ 1. */
export function lirePage(valeur: string | undefined): number {
  const n = Number.parseInt(valeur ?? "1", 10);
  return Number.isFinite(n) && n >= 1 ? Math.min(n, 1000) : 1;
}
