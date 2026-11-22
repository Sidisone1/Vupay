import type { SupabaseClient, User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { supabaseConfigure } from "./config";
import { lireProfil } from "./profil";
import { supabaseServeur } from "./server";

/** Session courante côté serveur. `configure` est faux tant que Supabase n'est pas branché. */
export async function lireSession() {
  if (!supabaseConfigure()) return { configure: false as const, supabase: null, user: null, profil: null };
  const supabase = supabaseServeur();
  const { data } = await supabase.auth.getUser();
  const profil = await lireProfil(supabase, data.user);
  return { configure: true as const, supabase, user: data.user, profil };
}

/** Pour les pages et actions qui exigent un compte connecté. */
export async function exigerUtilisateur() {
  const session = await lireSession();
  if (!session.configure || !session.user) redirect("/connexion");
  return session as typeof session & { configure: true; supabase: SupabaseClient; user: User };
}
