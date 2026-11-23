import { NextResponse, type NextRequest } from "next/server";
import { ACTIONS_CONTACT, destinationAutorisee, libelleAction, type ActionContact } from "@/lib/contacts";
import { supabaseServeur } from "@/lib/supabase/server";
import { supabaseConfigure } from "@/lib/supabase/utilisateur";

/**
 * Bouton de contact d'une fiche : redirige UNIQUEMENT vers la destination enregistrée et
 * contrôlée de cette campagne, si elle est diffusable aujourd'hui. Aucun paramètre d'adresse
 * n'est lu dans la requête : pas de redirection ouverte.
 * L'enregistrement de l'action (visite, clic qualifié) arrive à l'étape 4.
 */
export async function GET(req: NextRequest, { params }: { params: { slug: string; type: string } }) {
  const retour = NextResponse.redirect(new URL(`/p/${params.slug}?indisponible=1`, req.url), 303);
  if (!/^[0-9a-f]{12}$/.test(params.slug)) return NextResponse.json({ erreur: "Lien invalide" }, { status: 404 });
  if (!ACTIONS_CONTACT.includes(params.type as ActionContact) || !supabaseConfigure()) return retour;

  const type = params.type as ActionContact;
  const { data: url } = await supabaseServeur().rpc("destination_publique", { p_slug: params.slug, p_type: type });
  // Double contrôle : même si la base renvoyait une adresse inattendue, on ne la suit pas.
  if (typeof url !== "string" || !destinationAutorisee({ type, url, libelle: libelleAction(type) })) return retour;

  const sortie = NextResponse.redirect(url, 302);
  sortie.headers.set("Cache-Control", "no-store");
  sortie.headers.set("Referrer-Policy", "no-referrer");
  return sortie;
}
