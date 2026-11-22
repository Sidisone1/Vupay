import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { verifierAcces, zoneDuChemin } from "@/lib/espaces";
import { lireProfil } from "@/lib/supabase/profil";

/**
 * Rafraîchit la session Supabase (cookies) et protège /diffuseur, /annonceur, /admin et /compte.
 * La RLS reste la vraie barrière : ce contrôle évite seulement d'afficher une page interdite.
 */
export async function middleware(req: NextRequest) {
  const chemin = req.nextUrl.pathname;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const cle = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !cle) {
    if (!zoneDuChemin(chemin)) return NextResponse.next();
    return NextResponse.redirect(new URL("/connexion", req.url));
  }

  let reponse = NextResponse.next({ request: req });
  const supabase = createServerClient(url, cle, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (liste: { name: string; value: string; options: CookieOptions }[]) => {
        liste.forEach(({ name, value }) => req.cookies.set(name, value));
        reponse = NextResponse.next({ request: req });
        liste.forEach(({ name, value, options }) => reponse.cookies.set(name, value, options));
      },
    },
  });

  const { data } = await supabase.auth.getUser();
  if (!zoneDuChemin(chemin)) return reponse;

  const profil = await lireProfil(supabase, data.user);
  const acces = verifierAcces(chemin, Boolean(data.user), profil);
  if (acces.ok) return reponse;

  const redirection = NextResponse.redirect(new URL(acces.redirection, req.url));
  reponse.cookies.getAll().forEach((c) => redirection.cookies.set(c));
  return redirection;
}

export const config = {
  // Pas de middleware sur les fichiers statiques, les images ni les liens courts /c/… (rapides en 3G).
  matcher: ["/((?!_next/static|_next/image|icones/|c/|api/webhooks/|favicon|apple-touch-icon|manifest).*)"],
};
