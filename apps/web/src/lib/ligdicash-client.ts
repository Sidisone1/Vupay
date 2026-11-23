import "server-only";
import { montantLigdiCash } from "./ligdicash";

/**
 * Adaptateur HTTP LigdiCash — aucun appel à l'import.
 * IMPORTANT: les clés ne doivent jamais être exposées au navigateur.
 * La configuration doit être approuvée et les contrats de payload validés
 * sur la documentation du compte marchand avant l'activation.
 */
export const LIGDICASH_PATHS = {
  creerFacture: "/pay/v01/redirect/checkout-invoice/create",
  confirmerFacture: "/pay/v01/redirect/checkout-invoice/confirm",
  retraitMobileMoney: "/pay/v01/straight/payout",
  confirmerRetrait: "/pay/v01/withdrawal/confirm",
} as const;

export interface LigdiCashConfig {
  baseUrl: string;
  apiKey: string;
  authorization: string;
  /** Doit être true explicitement après autorisation d'effectuer des appels réels. */
  appelsReelsAutorises: boolean;
}

export interface TransportLigdiCash {
  (url: string, init: RequestInit): Promise<Response>;
}

export interface ReponseLigdiCash {
  response_code?: string;
  response_text?: string;
  token?: string;
  wiki?: string;
  [key: string]: unknown;
}

function baseSecurisee(baseUrl: string): string {
  const url = new URL(baseUrl);
  if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
    throw new Error("URL LigdiCash HTTPS invalide");
  }
  // Empêche la substitution d'hôte par une entrée utilisateur.
  if (url.hostname !== "app.ligdicash.com") throw new Error("Hôte LigdiCash non autorisé");
  return url.origin;
}

export class ClientLigdiCash {
  private readonly base: string;

  constructor(private readonly config: LigdiCashConfig, private readonly transport: TransportLigdiCash = fetch) {
    this.base = baseSecurisee(config.baseUrl);
    if (!config.apiKey.trim() || !config.authorization.trim()) throw new Error("Identifiants LigdiCash manquants");
  }

  private async demander(path: string, method: "GET" | "POST", data?: unknown, token?: string): Promise<ReponseLigdiCash> {
    if (!this.config.appelsReelsAutorises) throw new Error("Appels LigdiCash réels désactivés");
    const url = new URL(path, this.base);
    if (token) url.searchParams.set("token", token);
    const response = await this.transport(url.toString(), {
      method,
      headers: {
        Apikey: this.config.apiKey,
        Authorization: this.config.authorization,
        Accept: "application/json",
        ...(method === "POST" ? { "Content-Type": "application/json" } : {}),
      },
      ...(method === "POST" ? { body: JSON.stringify(data) } : {}),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`LigdiCash HTTP ${response.status}`);
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || Array.isArray(result)) throw new Error("Réponse LigdiCash invalide");
    return result as ReponseLigdiCash;
  }

  /**
   * Le payload est préparé côté serveur selon la version API du compte marchand.
   * Ne pas fournir de données directement issues du navigateur.
   */
  async creerFacture(payload: Record<string, unknown>): Promise<ReponseLigdiCash> {
    return this.demander(LIGDICASH_PATHS.creerFacture, "POST", payload);
  }

  async confirmerFacture(token: string): Promise<ReponseLigdiCash> {
    if (!token.trim()) throw new Error("Token de facture manquant");
    return this.demander(LIGDICASH_PATHS.confirmerFacture, "GET", undefined, token);
  }

  async creerRetraitMobileMoney(payload: Record<string, unknown>): Promise<ReponseLigdiCash> {
    return this.demander(LIGDICASH_PATHS.retraitMobileMoney, "POST", payload);
  }

  async confirmerRetrait(token: string): Promise<ReponseLigdiCash> {
    if (!token.trim()) throw new Error("Token de retrait manquant");
    return this.demander(LIGDICASH_PATHS.confirmerRetrait, "GET", undefined, token);
  }
}

/** Vérification de montants avant constitution de la facture. */
export function montantFactureXof(montantFcfa: number): number {
  return montantLigdiCash(montantFcfa);
}
