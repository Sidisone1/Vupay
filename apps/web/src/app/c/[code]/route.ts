import { NextResponse, type NextRequest } from "next/server";
import { supabaseService } from "@/lib/supabase/service";
import { codeLienValide } from "@/lib/tracabilite";
import { identiteVisiteur, poserTemoin } from "../identite";

/**
 * Lien personnel du diffuseur : vupay.app/c/<code>.
 * Enregistre la VISITE (jamais rémunérée) puis ouvre la fiche produit, dont les boutons
 * passeront par /c/<code>/vers/<type> pour que l'action soit attribuée à ce diffuseur.
 */
export async function GET(req: NextRequest, { params }: { params: { code: string } }) {
  if (!codeLienValide(params.code)) return introuvable();
  const service = supabaseService();
  const identite = await identiteVisiteur(req);
  if (!service || !identite) {
    return NextResponse.json({ erreur: "Mesure des liens pas encore configurée" }, { status: 503 });
  }
  const { data: slug } = await service.rpc("enregistrer_visite", {
    p_code: params.code,
    p_visiteur: identite.visiteur,
    p_empreinte: identite.empreinte,
    p_appareil: identite.appareil,
    p_robot: identite.robot,
  });
  if (typeof slug !== "string") return introuvable();

  const reponse = NextResponse.redirect(new URL(`/p/${slug}?via=${params.code}`, req.url), 302);
  reponse.headers.set("Cache-Control", "no-store");
  poserTemoin(reponse, identite.temoinAPoser);
  return reponse;
}

function introuvable() {
  return new NextResponse("Ce lien n'existe pas ou n'est plus actif.", {
    status: 404,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
