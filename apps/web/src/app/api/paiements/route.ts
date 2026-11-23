import { NextResponse } from "next/server";
import { supabaseServeur } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

/**
 * Historique des intentions de paiement de l'utilisateur connecté.
 * La politique RLS payment_intents_owner_read restreint aussi l'accès en base.
 * Aucun secret marchand, token fournisseur ou opération d'argent n'est exposé.
 */
export async function GET() {
  const supabase = supabaseServeur();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) return NextResponse.json({ error: "Authentification requise" }, { status: 401 });

  const { data, error } = await supabase
    .from("payment_intents")
    .select("id,reference,provider,direction,amount_fcfa,currency,status,created_at,verified_at")
    .eq("owner_id", auth.user.id)
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) return NextResponse.json({ error: "Historique indisponible" }, { status: 503 });
  return NextResponse.json({ paiements: data ?? [] }, { headers: { "Cache-Control": "no-store" } });
}
