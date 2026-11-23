// Construction des destinations de contact à partir de ce que l'annonceur sait saisir :
// son numéro WhatsApp, un message d'accueil, l'adresse de sa boutique en ligne.
// L'annonceur ne colle jamais d'adresse WhatsApp à la main : on la fabrique, puis on la contrôle.
import { destinationAutorisee, libelleAction, type ActionContact } from "./contacts";
import { normaliserTelephone } from "./telephone";
import type { Pays } from "./types";

export const LONGUEUR_MAX_MESSAGE = 200;

export type SaisieDestination =
  | { type: "numero_whatsapp" | "catalogue_whatsapp"; telephone: string }
  | { type: "envoyer_message"; telephone: string; message: string }
  | { type: "acheter"; url: string };

export type ResultatDestination = { ok: true; url: string; libelle: string } | { ok: false; erreur: string };

/** Adresse de boutique : HTTPS imposé, hôte mis en minuscules, rien d'autre n'est réécrit. */
export function normaliserLienAchat(saisie: string): string | null {
  const brut = saisie.trim();
  if (!brut) return null;
  try {
    const u = new URL(/^[a-z][a-z0-9+.-]*:/i.test(brut) ? brut : `https://${brut}`);
    if (u.protocol !== "https:") return null;
    return u.toString();
  } catch {
    return null;
  }
}

/** Fabrique et contrôle une destination ; même verdict que la base de données. */
export function construireDestination(saisie: SaisieDestination, pays: Pays): ResultatDestination {
  let url: string;
  if (saisie.type === "acheter") {
    const lien = normaliserLienAchat(saisie.url);
    if (!lien) return { ok: false, erreur: "Adresse invalide : elle doit commencer par https://" };
    url = lien;
  } else {
    const tel = normaliserTelephone(saisie.telephone, pays);
    if (!tel) return { ok: false, erreur: "Numéro WhatsApp invalide." };
    const chiffres = tel.e164.slice(1);
    if (saisie.type === "envoyer_message") {
      const message = saisie.message.replace(/\s+/g, " ").trim();
      if (!message) return { ok: false, erreur: "Écrivez le message d'accueil." };
      if (message.length > LONGUEUR_MAX_MESSAGE) return { ok: false, erreur: `${LONGUEUR_MAX_MESSAGE} caractères maximum.` };
      url = `https://wa.me/${chiffres}?text=${encodeURIComponent(message)}`;
    } else {
      url = saisie.type === "numero_whatsapp" ? `https://wa.me/${chiffres}` : `https://wa.me/c/${chiffres}`;
    }
  }
  const libelle = libelleAction(saisie.type);
  if (!destinationAutorisee({ type: saisie.type, url, libelle })) {
    return { ok: false, erreur: "Cette adresse n'est pas acceptée (HTTPS, sans adresse IP ni port)." };
  }
  return { ok: true, url, libelle };
}

/** Relit une destination enregistrée pour pré-remplir le formulaire. */
export function lireDestination(type: ActionContact, url: string): { telephone?: string; message?: string; url?: string } {
  if (type === "acheter") return { url };
  const m = url.match(/^https:\/\/wa\.me\/(?:c\/)?(\d+)(?:\?text=(.*))?$/);
  if (!m) return {};
  return { telephone: `+${m[1]}`, message: m[2] ? decodeURIComponent(m[2]) : undefined };
}
