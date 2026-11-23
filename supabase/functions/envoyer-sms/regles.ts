// Règles d'envoi du code de connexion par l'API SMS d'Orange (sans dépendance Deno :
// testées depuis apps/web, voir apps/web/src/lib/sms-orange.test.ts).
// Documentation : https://developer.orange.com/apis/sms/getting-started

export const URL_JETON = "https://api.orange.com/oauth/v3/token";
export const URL_SMS = "https://api.orange.com/smsmessaging/v1";

/** Numéro d'expéditeur Orange par pays couvert (indicatif + 0000), d'après la documentation Orange. */
export const EXPEDITEURS_ORANGE: Record<string, { pays: string; numero: string }> = {
  "223": { pays: "Mali", numero: "2230000" },
  "225": { pays: "Côte d'Ivoire", numero: "2250000" },
  "221": { pays: "Sénégal", numero: "2210000" },
  "226": { pays: "Burkina Faso", numero: "2260000" },
  "245": { pays: "Guinée-Bissau", numero: "2450000" },
  "224": { pays: "Guinée", numero: "2240000" },
};

/** Expéditeur Orange pour un numéro au format +XXX…, ou null si le pays n'est pas couvert. */
export function expediteurPour(telephone: string): string | null {
  const chiffres = telephone.replace(/^\+/, "");
  if (!/^\d{8,15}$/.test(chiffres)) return null;
  const indicatif = Object.keys(EXPEDITEURS_ORANGE).find((i) => chiffres.startsWith(i));
  return indicatif ? EXPEDITEURS_ORANGE[indicatif].numero : null;
}

/**
 * Texte du SMS : court (un seul SMS), sans lien, et sans citer la marque WhatsApp
 * (Orange Mali bloque les messages qui la mentionnent).
 */
export function messageCode(code: string): string {
  if (!/^\d{4,8}$/.test(code)) throw new Error("Code invalide");
  return `Vupay : votre code de connexion est ${code}. Ne le communiquez à personne.`;
}

/** Nom d'expéditeur personnalisé : 11 caractères alphanumériques ou espaces au plus (règle Orange). */
export function nomExpediteurValide(nom: string | undefined): string | undefined {
  const propre = nom?.trim();
  return propre && /^[A-Za-z0-9 ]{1,11}$/.test(propre) ? propre : undefined;
}

/** Requête d'envoi Orange : adresse et corps, prêts pour fetch. */
export function requeteEnvoi(telephone: string, code: string, nomExpediteur?: string) {
  const expediteur = expediteurPour(telephone);
  if (!expediteur) throw new Error("Pays non couvert par l'API SMS Orange");
  const destinataire = telephone.replace(/^\+/, "");
  const nom = nomExpediteurValide(nomExpediteur);
  return {
    url: `${URL_SMS}/outbound/${encodeURIComponent(`tel:+${expediteur}`)}/requests`,
    corps: {
      outboundSMSMessageRequest: {
        address: `tel:+${destinataire}`,
        senderAddress: `tel:+${expediteur}`,
        ...(nom && { senderName: nom }),
        outboundSMSTextMessage: { message: messageCode(code) },
      },
    },
  };
}
