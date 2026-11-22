import { estPays } from "./telephone";
import type { Pays, Role } from "./types";

/** Espace ouvert par un utilisateur. Une même identité peut ouvrir les deux. */
export type Espace = "diffuseur" | "annonceur";
export const ESPACES: readonly Espace[] = ["diffuseur", "annonceur"];

export function estEspace(v: unknown): v is Espace {
  return v === "diffuseur" || v === "annonceur";
}

/** Ce que l'application sait du profil connecté (null = connecté mais pas encore inscrit). */
export interface ProfilSession {
  role: Role;
  espaces: Espace[];
  suspendu: boolean;
}

export const CHEMINS = {
  connexion: "/connexion",
  inscription: "/inscription",
  suspendu: "/compte/suspendu",
  ajouterEspace: "/compte/espaces",
} as const;

type ZoneProtegee = Espace | "admin" | "compte";

/** Zone protégée d'un chemin, ou null si la page est publique. */
export function zoneDuChemin(chemin: string): ZoneProtegee | null {
  const m = /^\/(diffuseur|annonceur|admin|compte)(?:\/|$)/.exec(chemin);
  return m ? (m[1] as ZoneProtegee) : null;
}

/** Évite les redirections ouvertes : seul un chemin interne simple est accepté. */
export function cheminSur(suite: string | null | undefined): string | null {
  if (!suite || !suite.startsWith("/") || suite.startsWith("//") || suite.includes("\\")) return null;
  if (/[\u0000-\u001f]/.test(suite)) return null;
  return suite;
}

export type Acces = { ok: true } | { ok: false; redirection: string };

/** Décide si le profil peut ouvrir ce chemin ; sinon, où l'envoyer. */
export function verifierAcces(chemin: string, connecte: boolean, profil: ProfilSession | null): Acces {
  const zone = zoneDuChemin(chemin);
  if (!zone) return { ok: true };
  if (!connecte) return { ok: false, redirection: `${CHEMINS.connexion}?suite=${encodeURIComponent(chemin)}` };
  if (!profil) return { ok: false, redirection: CHEMINS.inscription };
  if (profil.suspendu && chemin !== CHEMINS.suspendu) return { ok: false, redirection: CHEMINS.suspendu };
  if (zone === "compte") return { ok: true };
  if (zone === "admin") return profil.role === "admin" ? { ok: true } : { ok: false, redirection: accueilDuProfil(profil) };
  if (profil.espaces.includes(zone)) return { ok: true };
  return { ok: false, redirection: `${CHEMINS.ajouterEspace}?ajouter=${zone}` };
}

/** Page d'accueil par défaut d'un profil. */
export function accueilDuProfil(profil: ProfilSession): string {
  if (profil.suspendu) return CHEMINS.suspendu;
  if (profil.role === "admin") return "/admin";
  return `/${profil.espaces[0] ?? "diffuseur"}`;
}

/** Où envoyer quelqu'un qui vient de valider son code OTP. */
export function destinationApresConnexion(
  profil: ProfilSession | null,
  options: { espace?: string | null; suite?: string | null } = {},
): string {
  const espace = estEspace(options.espace) ? options.espace : null;
  if (!profil) return espace ? `${CHEMINS.inscription}?espace=${espace}` : CHEMINS.inscription;
  if (profil.suspendu) return CHEMINS.suspendu;
  const suite = cheminSur(options.suite);
  if (suite && verifierAcces(suite, true, profil).ok) return suite;
  if (espace) return profil.espaces.includes(espace) ? `/${espace}` : `${CHEMINS.ajouterEspace}?ajouter=${espace}`;
  return accueilDuProfil(profil);
}

// Inscription -------------------------------------------------------------------

export const AGE_MINIMUM = 18;
export const INTERETS = [
  "Mode et beauté",
  "Téléphones et électronique",
  "Alimentation et restaurants",
  "Sport",
  "Musique et sorties",
  "Éducation et formation",
  "Immobilier",
  "Auto et moto",
  "Santé et bien-être",
  "Voyages",
  "Services et artisanat",
] as const;
export const INTERETS_MAX = 5;

export interface DonneesInscription {
  pays: Pays;
  ville: string;
  annee_naissance: number;
  sexe: "F" | "M" | null;
  interets: string[];
  espaces: Espace[];
  nom_affiche: string | null;
}

export type ResultatInscription =
  | { ok: true; donnees: DonneesInscription }
  | { ok: false; erreurs: Partial<Record<keyof DonneesInscription, string>> };

/** Valide le formulaire d'inscription (même règles côté serveur et navigateur). */
export function validerInscription(
  saisie: {
    pays?: unknown; ville?: unknown; annee_naissance?: unknown; sexe?: unknown;
    interets?: unknown[]; espace?: unknown; nom_affiche?: unknown;
  },
  anneeCourante: number,
): ResultatInscription {
  const erreurs: Partial<Record<keyof DonneesInscription, string>> = {};
  const texte = (v: unknown) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ") : "");

  const pays = estPays(saisie.pays) ? saisie.pays : null;
  if (!pays) erreurs.pays = "Choisissez votre pays.";

  const ville = texte(saisie.ville);
  if (ville.length < 2 || ville.length > 60) erreurs.ville = "Indiquez votre ville (2 à 60 caractères).";

  const annee = Number(texte(saisie.annee_naissance));
  if (!Number.isInteger(annee) || annee < anneeCourante - 100 || annee > anneeCourante) {
    erreurs.annee_naissance = "Année de naissance invalide.";
  } else if (anneeCourante - annee < AGE_MINIMUM) {
    erreurs.annee_naissance = `Vupay est réservé aux personnes de ${AGE_MINIMUM} ans et plus.`;
  }

  const sexeBrut = texte(saisie.sexe);
  const sexe = sexeBrut === "F" || sexeBrut === "M" ? sexeBrut : null;
  if (sexeBrut && !sexe) erreurs.sexe = "Valeur invalide.";

  const interets = [...new Set((saisie.interets ?? []).map(texte))].filter(Boolean);
  if (interets.some((i) => !(INTERETS as readonly string[]).includes(i))) erreurs.interets = "Centre d'intérêt inconnu.";
  else if (interets.length > INTERETS_MAX) erreurs.interets = `${INTERETS_MAX} centres d'intérêt au maximum.`;

  const espace = estEspace(saisie.espace) ? saisie.espace : null;
  if (!espace) erreurs.espaces = "Choisissez votre espace.";

  const nom = texte(saisie.nom_affiche);
  if (nom && (nom.length < 2 || nom.length > 60)) erreurs.nom_affiche = "Nom entre 2 et 60 caractères.";

  if (Object.keys(erreurs).length > 0 || !pays || !espace) return { ok: false, erreurs };
  return {
    ok: true,
    donnees: { pays, ville, annee_naissance: annee, sexe, interets, espaces: [espace], nom_affiche: nom || null },
  };
}
