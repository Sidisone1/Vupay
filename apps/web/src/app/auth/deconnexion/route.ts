import { NextResponse, type NextRequest } from "next/server";
import { supabaseConfigure } from "@/lib/supabase/config";
import { supabaseServeur } from "@/lib/supabase/server";

/** Déconnexion (POST uniquement, pour qu'un simple lien ne déconnecte personne). */
export async function POST(req: NextRequest) {
  if (supabaseConfigure()) await supabaseServeur().auth.signOut();
  return NextResponse.redirect(new URL("/", req.url), { status: 303 });
}
