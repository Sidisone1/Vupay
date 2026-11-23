"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseServeur } from "@/lib/supabase/server";

const RESEAUX = ["whatsapp", "instagram", "facebook"];

/** Crée (ou retrouve) le lien personnel du diffuseur pour ce réseau ; la base fait les contrôles. */
export async function obtenirLien(form: FormData) {
  const campagne = String(form.get("campagne") ?? "");
  const reseau = String(form.get("reseau") ?? "");
  if (!/^[0-9a-f-]{36}$/.test(campagne)) redirect("/diffuseur/campagnes");
  if (!RESEAUX.includes(reseau)) redirect(`/diffuseur/campagnes/${campagne}?erreur=reseau`);
  const { error } = await supabaseServeur().rpc("accepter_campagne", { p_campagne: campagne, p_reseau: reseau });
  revalidatePath(`/diffuseur/campagnes/${campagne}`);
  redirect(`/diffuseur/campagnes/${campagne}${error ? "?erreur=lien" : ""}`);
}
