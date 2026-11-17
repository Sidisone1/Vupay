import { NextResponse, type NextRequest } from "next/server";

// Webhook de l'agrégateur Mobile Money (encaissements annonceurs et décaissements diffuseurs).
// Lot 4 : vérifier la signature avec PAIEMENT_SECRET_WEBHOOK, retrouver l'opération par sa référence
// unique, écrire au journal (ledger_entries) ; un échec de retrait recrédite le solde.
export async function POST(_req: NextRequest) {
  return NextResponse.json({ erreur: "Paiements pas encore actifs (lot 4)" }, { status: 501 });
}
