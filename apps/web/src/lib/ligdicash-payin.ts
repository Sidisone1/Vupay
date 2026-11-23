import { montantLigdiCash } from "./ligdicash";

/** Contrat de création payin redirect : toutes les URLs sont contrôlées par le serveur. */
export interface FactureVupay {
  reference: string;
  montantFcfa: number;
  description: string;
  callbackUrl: string;
  returnUrl: string;
}

function urlHttps(url: string): string {
  const parsed = new URL(url);
  if (parsed.protocol !== "https:" || parsed.username || parsed.password || parsed.hash) {
    throw new Error("URL HTTPS requise");
  }
  return parsed.toString();
}

/** Ne jamais accepter les URLs callback/return du navigateur. */
export function preparerFactureLigdiCash(f: FactureVupay): Record<string, unknown> {
  if (!/^[a-zA-Z0-9_-]{8,100}$/.test(f.reference)) throw new Error("Référence invalide");
  if (!f.description.trim() || f.description.length > 200) throw new Error("Description invalide");
  return {
    commande: {
      invoice: {
        items: [{ name: f.description, description: f.description, quantity: 1, unit_price: montantLigdiCash(f.montantFcfa), total_price: montantLigdiCash(f.montantFcfa) }],
        total_amount: montantLigdiCash(f.montantFcfa),
        devise: "XOF",
        description: f.description,
        customer: "",
        customer_firstname: "",
        customer_lastname: "",
        customer_email: "",
        external_id: f.reference,
      },
      store: { name: "VUPAY", website_url: urlHttps(f.returnUrl) },
      actions: { cancel_url: urlHttps(f.returnUrl), return_url: urlHttps(f.returnUrl), callback_url: urlHttps(f.callbackUrl) },
      custom_data: { transaction_id: f.reference },
    },
  };
}
