import { NextResponse, type NextRequest } from "next/server";

// Lien court personnel du diffuseur : vupay.app/c/[code].
// Lot 3 : retrouver l'assignment par son code, enregistrer le clic (IP hachée avec SEL_HACHAGE_IP,
// appareil, robot ou non), appliquer clicValide() puis rediriger vers le lien de l'annonceur.
export async function GET(_req: NextRequest, { params }: { params: { code: string } }) {
  if (!/^[a-z0-9]{4,12}$/.test(params.code)) {
    return NextResponse.json({ erreur: "Lien invalide" }, { status: 404 });
  }
  return NextResponse.json({ erreur: "Mesure des clics pas encore active (lot 3)" }, { status: 501 });
}
