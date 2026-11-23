import { NextResponse, type NextRequest } from "next/server";
import { ACTIONS_CONTACT, destinationAutorisee, libelleAction, type ActionContact } from "@/lib/contacts";
import { supabaseServeur } from "@/lib/supabase/server";
import { supabaseService } from "@/lib/supabase/service";
import { supabaseConfigure } from "@/lib/supabase/utilisateur";
import { codeLienValide } from "@/lib/tracabilite";
import { identiteVisiteur, poserTemoin } from "../../../identite";

/**
 * Bouton de contact depuis un lien personnel : la base décide si l'action est retenue
 * (validée, en attente de vérification, refusée) et renvoie la destination enregistrée.
 * Le visiteur est redirigé dans tous les cas où la campagne est diffusable ; seule la
 * rémunération future dépend du statut. Aucune adresse n'est lue dans la requête.
 */
export async function GET(req: NextRequest, { params }: { params: { code: string; type: string } }) {
  if (!codeLienValide(params.code) || !ACTIONS_CONTACT.includes(params.type as ActionContact)) {
    return new NextResponse("Lien invalide", { status: 404 });
  }
  const type = params.type as ActionContact;
  const service = supabaseService();
  const identite = await identiteVisiteur(req);
  if (!service || !identite) return NextResponse.json({ erreur: "Mesure des liens pas encore configurée" }, { status: 503 });

  // Compte Vupay connecté sur ce navigateur : sert à repérer l'auto-clic.
  let utilisateur: string | null = null;
  if (supabaseConfigure()) {
    const {
      data: { user },
    } = await supabaseServeur().auth.getUser();
    utilisateur = user?.id ?? null;
  }

  const { data } = await service.rpc("enregistrer_action", {
    p_code: params.code,
    p_type: type,
    p_visiteur: identite.visiteur,
    p_empreinte: identite.empreinte,
    p_robot: identite.robot,
    p_utilisateur: utilisateur,
  });
  const destination = Array.isArray(data) ? data[0]?.destination : undefined;

  if (typeof destination !== "string" || !destinationAutorisee({ type, url: destination, libelle: libelleAction(type) })) {
    // Campagne en pause, expirée ou bouton absent : retour à la fiche avec un message.
    const { data: lien } = await service.from("assignments").select("campaigns(slug)").eq("code_lien", params.code).maybeSingle();
    const slug = (lien?.campaigns as { slug?: string } | null)?.slug;
    return NextResponse.redirect(new URL(slug ? `/p/${slug}?indisponible=1` : "/", req.url), 303);
  }
  const sortie = NextResponse.redirect(destination, 302);
  sortie.headers.set("Cache-Control", "no-store");
  sortie.headers.set("Referrer-Policy", "no-referrer");
  poserTemoin(sortie, identite.temoinAPoser);
  return sortie;
}
