import type { SupabaseClient } from "@supabase/supabase-js";
import { cheminPiece, type TypePiece } from "../pieces";

/** Envoie une pièce dans le compartiment privé ; renvoie son chemin, à enregistrer ensuite en base. */
export async function deposerPiece(
  client: SupabaseClient,
  compartiment: "kyc" | "entreprises",
  utilisateurId: string,
  type: TypePiece,
  fichier: Blob,
): Promise<string> {
  const chemin = cheminPiece(utilisateurId, type, fichier.type);
  const { error } = await client.storage.from(compartiment).upload(chemin, fichier, { contentType: fichier.type, upsert: false });
  if (error) throw new Error("envoi");
  return chemin;
}
