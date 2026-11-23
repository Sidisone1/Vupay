// Dépôt des pièces justificatives : identité du diffuseur (KYC) et entreprise de l'annonceur.
// Mêmes contraintes que la base (migration 0002) : chaque fichier est rangé dans le dossier
// de son propriétaire, et un dossier traité n'est jamais modifié.
import type { StatutKyc } from "./types";

export type TypePiece = "piece" | "selfie" | "entreprise" | "produit";

export const PIECES_ACCEPTEES: Record<TypePiece, { types: readonly string[]; tailleMax: number; libelle: string }> = {
  piece: { types: ["image/jpeg", "image/png", "image/webp"], tailleMax: 8_000_000, libelle: "Photo de la pièce d'identité" },
  selfie: { types: ["image/jpeg", "image/png", "image/webp"], tailleMax: 8_000_000, libelle: "Selfie avec la pièce" },
  produit: { types: ["image/jpeg", "image/png", "image/webp"], tailleMax: 8_000_000, libelle: "Photo du produit" },
  entreprise: {
    types: ["image/jpeg", "image/png", "image/webp", "application/pdf"],
    tailleMax: 10_000_000,
    libelle: "RCCM, NIF ou équivalent",
  },
};

/** Taille visée après compression dans le navigateur : envoi rapide en 3G. */
export const COTE_MAX_IMAGE = 1600;

const EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "application/pdf": "pdf",
};

/** Message d'erreur en français, ou null si le fichier peut être envoyé. */
export function verifierFichier(type: TypePiece, fichier: { type: string; size: number }): string | null {
  const regle = PIECES_ACCEPTEES[type];
  if (!regle.types.includes(fichier.type)) {
    return type === "entreprise" ? "Format accepté : photo (JPG, PNG) ou PDF." : "Format accepté : photo JPG ou PNG.";
  }
  if (fichier.size === 0) return "Le fichier est vide.";
  if (fichier.size > regle.tailleMax) return `Fichier trop lourd (${Math.round(regle.tailleMax / 1_000_000)} Mo maximum).`;
  return null;
}

/** Chemin dans le stockage : <id utilisateur>/<type>-<horodatage>.<ext>. Unique, jamais écrasé. */
export function cheminPiece(utilisateurId: string, type: TypePiece, typeMime: string, maintenant = Date.now()): string {
  if (!/^[0-9a-f-]{36}$/.test(utilisateurId)) throw new Error("Identifiant utilisateur invalide");
  const ext = EXTENSIONS[typeMime];
  if (!ext) throw new Error("Format non accepté");
  return `${utilisateurId}/${type}-${maintenant}.${ext}`;
}

/** Ce que l'écran KYC propose selon le statut du dernier dossier. */
export function etatKyc(statut: StatutKyc): { peutDeposer: boolean; titre: string; texte: string } {
  switch (statut) {
    case "non_soumis":
      return { peutDeposer: true, titre: "Vérifiez votre identité", texte: "Obligatoire avant votre premier retrait." };
    case "en_attente":
      return { peutDeposer: false, titre: "Vérification en cours", texte: "Un administrateur vérifie vos pièces. Vous serez prévenu." };
    case "valide":
      return { peutDeposer: false, titre: "Identité vérifiée", texte: "Vous pouvez retirer vos gains." };
    case "refuse":
      return { peutDeposer: true, titre: "Vérification refusée", texte: "Corrigez le problème indiqué et envoyez de nouvelles photos." };
  }
}

export interface FicheEntreprise {
  raisonSociale: string;
  pays: string;
  secteur: string;
  rccm: string;
  nif: string;
}

/** Contrôle du formulaire entreprise. Renvoie les erreurs par champ (vide = valide). */
export function verifierFicheEntreprise(f: FicheEntreprise): Partial<Record<keyof FicheEntreprise, string>> {
  const erreurs: Partial<Record<keyof FicheEntreprise, string>> = {};
  if (f.raisonSociale.trim().length < 2) erreurs.raisonSociale = "Indiquez le nom de l'entreprise.";
  else if (f.raisonSociale.trim().length > 120) erreurs.raisonSociale = "120 caractères maximum.";
  if (!f.pays) erreurs.pays = "Choisissez le pays.";
  if (f.secteur.trim().length > 80) erreurs.secteur = "80 caractères maximum.";
  if (!f.rccm.trim() && !f.nif.trim()) erreurs.rccm = "Indiquez au moins le RCCM ou le NIF.";
  for (const champ of ["rccm", "nif"] as const) {
    const v = f[champ].trim();
    if (v && !/^[A-Za-z0-9][A-Za-z0-9 ./-]{2,39}$/.test(v)) erreurs[champ] = "Numéro invalide (lettres, chiffres, points, tirets).";
  }
  return erreurs;
}

/** L'annonceur peut (re)demander la vérification si elle n'est ni en cours ni acquise. */
export function peutDemanderVerification(statut: StatutKyc): boolean {
  return statut === "non_soumis" || statut === "refuse";
}
