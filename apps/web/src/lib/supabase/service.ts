import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client « clé service » : SERVEUR UNIQUEMENT (routes /c/…), jamais importé dans un composant
 * navigateur. Sert à enregistrer visites et actions, que seul le serveur Vupay peut écrire.
 * Renvoie null si la clé n'est pas configurée.
 */
export function supabaseService(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const cle = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !cle) return null;
  return createClient(url, cle, { auth: { persistSession: false, autoRefreshToken: false } });
}
