import type { SupabaseClient } from "@supabase/supabase-js";
import type { Utilisateur } from "../permissions";
import type { Role, RoleAdmin, StatutKyc } from "../types";

export const supabaseConfigure = () =>
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

/**
 * Utilisateur connecté et ses droits, lus au nom de l'utilisateur (RLS appliquée).
 * null = non connecté ; "sans_profil" = connecté par OTP, inscription à terminer.
 */
export async function chargerUtilisateur(client: SupabaseClient): Promise<Utilisateur | "sans_profil" | null> {
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) return null;
  const { data } = await client
    .from("profiles")
    .select("role_admin, suspendu, statut_kyc, profile_roles(role)")
    .eq("id", user.id)
    .maybeSingle();
  if (!data) return "sans_profil";
  return {
    roles: ((data.profile_roles ?? []) as { role: Role }[]).map((r) => r.role),
    roleAdmin: data.role_admin as RoleAdmin | null,
    suspendu: data.suspendu as boolean,
    statutKyc: data.statut_kyc as StatutKyc,
  };
}
