/** Actions de sortie depuis une fiche publicitaire Vupay.
 * Ne déclenche aucune rémunération et n'enregistre aucun événement à lui seul.
 * Le serveur doit résoudre l'attribution, contrôler la destination et valider l'action.
 */
export const ACTIONS_CONTACT = [
  "numero_whatsapp",
  "catalogue_whatsapp",
  "envoyer_message",
  "acheter",
] as const;

export type ActionContact = (typeof ACTIONS_CONTACT)[number];

export type DestinationContact = {
  type: ActionContact;
  url: string;
  libelle: string;
};

const HOSTS_WHATSAPP = new Set(["wa.me", "api.whatsapp.com", "web.whatsapp.com", "www.whatsapp.com"]);
const HOSTS_BLOQUES = new Set(["localhost", "127.0.0.1", "::1"]);

/** Contrôle défensif de base; une liste d'origines approuvées doit aussi être tenue côté serveur. */
export function destinationAutorisee(d: DestinationContact): boolean {
  if (!ACTIONS_CONTACT.includes(d.type) || !d.libelle.trim()) return false;
  try {
    const u = new URL(d.url);
    if (u.protocol !== "https:" || u.username || u.password || u.port) return false;
    if (HOSTS_BLOQUES.has(u.hostname) || u.hostname.endsWith(".localhost")) return false;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(u.hostname)) return false;
    if ((d.type === "numero_whatsapp" || d.type === "catalogue_whatsapp" || d.type === "envoyer_message") &&
      !HOSTS_WHATSAPP.has(u.hostname)) return false;
    return true;
  } catch {
    return false;
  }
}

export function libelleAction(type: ActionContact): string {
  const labels: Record<ActionContact, string> = {
    numero_whatsapp: "Numéro WhatsApp",
    catalogue_whatsapp: "Voir le catalogue WhatsApp",
    envoyer_message: "Envoyer un message",
    acheter: "Acheter",
  };
  return labels[type];
}

export type StatutAction = "en_attente" | "validee" | "refusee";
export interface EvenementActionContact {
  attributionId: string;
  campagneId: string;
  type: ActionContact;
  destinationId: string;
  cleIdempotence: string;
  statut: StatutAction;
  horodatage: string;
}

/** Une visite sans action de contact n'est jamais une interaction rémunérable. */
export function potentiellementRemunerable(action: EvenementActionContact | null): boolean {
  return action !== null && action.statut === "validee";
}
