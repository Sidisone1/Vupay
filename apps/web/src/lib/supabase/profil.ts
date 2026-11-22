import type { SupabaseClient, User } from "@supabase/supabase-js";
import { estEspace, type ProfilSession } from "../espaces";
import type { Role } from "../types";

/** Lit le profil de l'utilisateur connecté (RLS : il ne peut lire que le sien). */
export async function lireProfil(supabase: SupabaseClient, user: User | null): Promise<ProfilSession | null> {
  if (!user) return null;
  const { data } = await supabase.from("profiles").select("role, espaces, suspendu").eq("id", user.id).maybeSingle();
  if (!data) return null;
  return {
    role: data.role as Role,
    espaces: ((data.espaces as string[] | null) ?? []).filter(estEspace),
    suspendu: Boolean(data.suspendu),
  };
}
