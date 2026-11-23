// Traçabilité côté serveur : reconnaître robots et appareils, pseudonymiser les visiteurs.
// La décision (validée, en attente, refusée) est prise par la base : enregistrer_action(),
// migration 0006. Ici, on prépare seulement des empreintes : jamais d'adresse IP en clair.

/** Code d'un lien personnel : 10 caractères hexadécimaux (vupay.app/c/<code>). */
export const codeLienValide = (code: string) => /^[0-9a-f]{10}$/.test(code);

/** Nom du témoin (cookie) qui reconnaît un navigateur d'une visite à l'autre. */
export const TEMOIN_VISITEUR = "vupay_v";
export const DUREE_TEMOIN_JOURS = 365;

const ROBOTS =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp\/|telegrambot|preview|curl|wget|python|httpclient|java\/|headless|lighthouse|scrapy|axios|node-fetch|go-http/i;

/**
 * Robot ou aperçu automatique (ex. WhatsApp qui affiche l'aperçu d'un lien) : la visite est
 * notée comme robot et un clic venant d'un robot n'est jamais retenu.
 * Un navigateur sans identité est aussi traité comme robot.
 */
export function estRobot(agent: string | null): boolean {
  return !agent || agent.trim().length < 10 || ROBOTS.test(agent);
}

export function typeAppareil(agent: string | null): "mobile" | "tablette" | "ordinateur" | "inconnu" {
  if (!agent) return "inconnu";
  if (/ipad|tablet|(android(?!.*mobile))/i.test(agent)) return "tablette";
  if (/mobi|iphone|android/i.test(agent)) return "mobile";
  if (/windows|macintosh|linux|cros/i.test(agent)) return "ordinateur";
  return "inconnu";
}

/** Première adresse de l'en-tête x-forwarded-for (celle du visiteur derrière les proxys). */
export function adresseVisiteur(enTete: string | null): string {
  return enTete?.split(",")[0]?.trim() || "inconnue";
}

/** Identifiant aléatoire du témoin (le navigateur le garde un an). */
export function nouveauTemoin(): string {
  return crypto.randomUUID();
}

/** Empreinte HMAC-SHA256 : impossible de retrouver la valeur d'origine sans le sel secret. */
export async function empreinte(sel: string, ...parties: string[]): Promise<string> {
  if (sel.length < 32) throw new Error("SEL_HACHAGE_IP trop court (32 caractères minimum)");
  const cle = await crypto.subtle.importKey("raw", new TextEncoder().encode(sel), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", cle, new TextEncoder().encode(parties.join("|")));
  return Array.from(new Uint8Array(signature), (o) => o.toString(16).padStart(2, "0")).join("");
}

/** Libellés des motifs de l'antifraude (écrans annonceur, diffuseur et admin). */
export const MOTIFS_ACTION: Record<string, string> = {
  robot: "Robot ou aperçu automatique",
  auto_clic: "Clic du diffuseur sur son propre lien",
  annonceur: "Clic de l'annonceur sur sa propre campagne",
  sans_visite: "Clic sans passage par la fiche",
  trop_rapide: "Clic trop rapide après l'ouverture",
  doublon: "Personne déjà comptée pour cette action",
  appareil_repete: "Même appareil déjà compté (à vérifier)",
  volume_reseau: "Beaucoup d'actions depuis le même réseau (à vérifier)",
  rafale: "Rafale de clics sur ce lien (à vérifier)",
};

export const libelleMotif = (m: string) => MOTIFS_ACTION[m] ?? m;
