import type { NextRequest, NextResponse } from "next/server";
import { adresseVisiteur, DUREE_TEMOIN_JOURS, empreinte, estRobot, nouveauTemoin, TEMOIN_VISITEUR, typeAppareil } from "@/lib/tracabilite";

/** Identité pseudonyme d'un visiteur, calculée côté serveur à partir de la requête. */
export async function identiteVisiteur(req: NextRequest) {
  const sel = process.env.SEL_HACHAGE_IP;
  if (!sel) return null;
  const agent = req.headers.get("user-agent");
  const temoinExistant = req.cookies.get(TEMOIN_VISITEUR)?.value;
  const temoin = temoinExistant && /^[0-9a-f-]{36}$/.test(temoinExistant) ? temoinExistant : null;
  const reseau = await empreinte(sel, "reseau", adresseVisiteur(req.headers.get("x-forwarded-for")), agent ?? "");
  return {
    // Sans témoin, l'empreinte réseau + appareil sert d'identité de secours.
    visiteur: temoin ? await empreinte(sel, "temoin", temoin) : await empreinte(sel, "sans-temoin", reseau),
    empreinte: reseau,
    robot: estRobot(agent),
    appareil: typeAppareil(agent),
    temoinAPoser: temoin ? null : nouveauTemoin(),
  };
}

export function poserTemoin(reponse: NextResponse, valeur: string | null) {
  if (!valeur) return;
  reponse.cookies.set(TEMOIN_VISITEUR, valeur, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/c",
    maxAge: DUREE_TEMOIN_JOURS * 24 * 3600,
  });
}
