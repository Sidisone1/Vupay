import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/** Client Supabase côté serveur, au nom de l'utilisateur connecté (RLS appliquée). */
export function supabaseServeur() {
  const magasin = cookies();
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => magasin.getAll(),
      setAll: (liste: { name: string; value: string; options: CookieOptions }[]) => {
        try {
          liste.forEach(({ name, value, options }) => magasin.set(name, value, options));
        } catch {
          // Appelé depuis un composant serveur : le middleware rafraîchit la session.
        }
      },
    },
  });
}
