import { createHash, timingSafeEqual } from "node:crypto";

/**
 * Gate provisoire : aucun webhook ne peut modifier le solde.
 * Le secret partagé est un contrôle additionnel, PAS une signature officielle LigdiCash.
 * La confirmation distante et la réconciliation restent obligatoires.
 */
export function verifierSecretWebhook(recu: string | null, attendu: string | undefined): boolean {
  if (!attendu || !recu) return false;
  const a = createHash("sha256").update(recu).digest();
  const b = createHash("sha256").update(attendu).digest();
  return timingSafeEqual(a, b);
}

export function extraireTokenNotification(body: unknown): string | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const token = (body as Record<string, unknown>).token;
  return typeof token === "string" && /^[a-zA-Z0-9_-]{8,256}$/.test(token) ? token : null;
}
