import { redirect } from "next/navigation";
import { adminPeut, type PermissionAdmin, type Utilisateur } from "../permissions";
import { supabaseServeur } from "./server";
import { chargerUtilisateur } from "./utilisateur";

/**
 * À appeler en tête de chaque page et action admin : vérifie la permission avant toute lecture.
 * La base refait le même contrôle (RLS) ; ceci évite d'afficher un écran inutilisable.
 */
export async function exigerAdmin(permission: PermissionAdmin | null) {
  const client = supabaseServeur();
  const utilisateur = await chargerUtilisateur(client);
  if (utilisateur === null) redirect("/connexion?suite=/admin");
  if (utilisateur === "sans_profil" || utilisateur.suspendu || !utilisateur.roles.includes("admin")) redirect("/");
  if (permission && !adminPeut(utilisateur, permission)) redirect("/admin");
  const {
    data: { user },
  } = await client.auth.getUser();
  return { client, utilisateur: utilisateur as Utilisateur, moi: user!.id };
}

/** Liens temporaires (5 minutes) pour afficher des pièces privées à un admin habilité. */
export async function liensTemporaires(
  client: ReturnType<typeof supabaseServeur>,
  compartiment: "kyc" | "entreprises",
  chemins: string[],
): Promise<Record<string, string>> {
  if (!chemins.length) return {};
  const { data } = await client.storage.from(compartiment).createSignedUrls(chemins, 300);
  const liens: Record<string, string> = {};
  for (const d of data ?? []) if (d.path && d.signedUrl) liens[d.path] = d.signedUrl;
  return liens;
}
