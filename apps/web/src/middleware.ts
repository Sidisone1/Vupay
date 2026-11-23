import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { accesPage, estPublique } from "@/lib/permissions";
import { chargerUtilisateur, supabaseConfigure } from "@/lib/supabase/utilisateur";

/**
 * À chaque page : rafraîchit la session Supabase puis applique accesPage().
 * Sans configuration Supabase, les pages protégées restent fermées (on ne devine pas les droits).
 */
export async function middleware(req: NextRequest) {
  const chemin = req.nextUrl.pathname;
  if (!supabaseConfigure()) {
    return estPublique(chemin) ? NextResponse.next() : redirection(req, `/connexion?suite=${encodeURIComponent(chemin)}`);
  }

  let reponse = NextResponse.next({ request: req });
  const client = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (liste: { name: string; value: string; options: CookieOptions }[]) => {
        liste.forEach(({ name, value }) => req.cookies.set(name, value));
        reponse = NextResponse.next({ request: req });
        liste.forEach(({ name, value, options }) => reponse.cookies.set(name, value, options));
      },
    },
  });

  // Les pages publiques n'ont pas besoin du profil : on évite une requête sur réseau lent.
  if (estPublique(chemin)) {
    await client.auth.getUser();
    return reponse;
  }
  const decision = accesPage(await chargerUtilisateur(client), chemin);
  if (decision.autorise) return reponse;
  const sortie = redirection(req, decision.redirection);
  reponse.cookies.getAll().forEach((c) => sortie.cookies.set(c));
  return sortie;
}

function redirection(req: NextRequest, cible: string) {
  return NextResponse.redirect(new URL(cible, req.url));
}

export const config = {
  // Tout sauf les fichiers statiques (icônes, images, manifeste).
  matcher: ["/((?!_next/static|_next/image|icones/|favicon.png|apple-touch-icon.png|icon-|manifest.webmanifest).*)"],
};
