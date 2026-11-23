// Règles des campagnes côté application. La base applique les mêmes (migration 0004,
// fonction proteger_campagne) ; ici on guide l'annonceur avant qu'il soumette.
import { estFcfa } from "./argent";
import type { StatutCampagne } from "./types";

export const STATUTS: Record<StatutCampagne, { libelle: string; texte: string; couleur: string }> = {
  brouillon: { libelle: "Brouillon", texte: "Complétez la fiche puis envoyez-la en modération.", couleur: "border-vupay-trait" },
  en_moderation: { libelle: "En modération", texte: "Un modérateur vérifie votre campagne.", couleur: "border-vupay-ocre" },
  active: { libelle: "Publiée", texte: "Votre fiche est en ligne.", couleur: "border-vupay-succes" },
  en_pause: { libelle: "En pause", texte: "La fiche est visible mais les boutons de contact sont désactivés.", couleur: "border-vupay-ocre" },
  terminee: { libelle: "Terminée", texte: "La campagne est close.", couleur: "border-vupay-trait" },
  refusee: { libelle: "Refusée", texte: "Corrigez selon le motif puis renvoyez-la en modération.", couleur: "border-vupay-erreur" },
};

/** L'annonceur ne modifie sa campagne qu'en brouillon ou après un refus. */
export const estModifiable = (statut: StatutCampagne) => statut === "brouillon" || statut === "refusee";

export interface EtatCampagne {
  titre: string;
  texte: string | null;
  photo: string | null;
  debut: string | null; // AAAA-MM-JJ
  fin: string | null;
  nbDestinations: number;
}

/** Ce qui manque encore avant de pouvoir soumettre (liste vide = prête). */
export function champsManquants(c: EtatCampagne, aujourdhui: string): string[] {
  const manque: string[] = [];
  if (c.titre.trim().length < 3) manque.push("Un nom de produit (3 caractères minimum)");
  if (!c.texte?.trim()) manque.push("Une description");
  if (!c.photo) manque.push("Une photo du produit");
  if (!c.debut || !c.fin) manque.push("Les dates de diffusion");
  else if (c.fin < c.debut) manque.push("Une date de fin après la date de début");
  else if (c.fin < aujourdhui) manque.push("Une date de fin qui n'est pas passée");
  if (c.nbDestinations === 0) manque.push("Au moins un bouton de contact");
  return manque;
}

/** Prix saisi par l'annonceur : entier FCFA positif, espaces tolérés. Vide = pas de prix affiché. */
export function lirePrix(saisie: string): { ok: true; prix: number | null } | { ok: false } {
  const propre = saisie.replace(/[\s .]/g, "");
  if (!propre) return { ok: true, prix: null };
  if (!/^\d{1,10}$/.test(propre)) return { ok: false };
  const prix = Number(propre);
  return estFcfa(prix) ? { ok: true, prix } : { ok: false };
}

/** Affichage public du prix : 15000 → « 15 000 FCFA ». */
export function prixPublic(prix: number): string {
  return `${prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} FCFA`;
}
