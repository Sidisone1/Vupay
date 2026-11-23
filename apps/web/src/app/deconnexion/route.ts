import { NextResponse, type NextRequest } from "next/server";
import { supabaseServeur } from "@/lib/supabase/server";
import { supabaseConfigure } from "@/lib/supabase/utilisateur";

/** Déconnexion en POST uniquement (un simple lien ne doit pas pouvoir déconnecter). */
export async function POST(req: NextRequest) {
  if (supabaseConfigure()) await supabaseServeur().auth.signOut();
  return NextResponse.redirect(new URL("/", req.url), { status: 303 });
}
