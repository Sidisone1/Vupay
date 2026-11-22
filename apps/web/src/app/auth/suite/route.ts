import { NextResponse, type NextRequest } from "next/server";
import { destinationApresConnexion } from "@/lib/espaces";
import { lireSession } from "@/lib/supabase/session";

/** Après validation du code OTP : envoie vers l'inscription, l'espace choisi ou la page demandée. */
export async function GET(req: NextRequest) {
  const { user, profil } = await lireSession();
  if (!user) return NextResponse.redirect(new URL("/connexion", req.url));
  const p = req.nextUrl.searchParams;
  const cible = destinationApresConnexion(profil, { espace: p.get("espace"), suite: p.get("suite") });
  return NextResponse.redirect(new URL(cible, req.url));
}
