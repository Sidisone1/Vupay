import { NextRequest, NextResponse } from "next/server";
import { extraireTokenNotification, verifierSecretWebhook } from "@/lib/ligdicash-webhook";

export const dynamic = "force-dynamic";

/**
 * Endpoint de réception neutralisé tant que l'authenticité du callback officiel
 * et la vérification distante ne sont pas implémentées.
 * IMPORTANT: ne jamais traiter un callback comme preuve de paiement.
 */
export async function POST(request: NextRequest) {
  if (!verifierSecretWebhook(request.headers.get("x-vupay-webhook-secret"), process.env.VUPAY_LIGDICASH_CALLBACK_SECRET)) {
    return NextResponse.json({ error: "Notification non autorisée" }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }
  if (!extraireTokenNotification(body)) return NextResponse.json({ error: "Token invalide" }, { status: 400 });
  // Répondre sans confirmer, débiter ou créditer. Le fournisseur n'a pas encore
  // été vérifié et l'authentification officielle n'a pas été implémentée.
  return NextResponse.json({ received: true, processed: false }, { status: 202 });
}
