"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { motifValide } from "@/lib/admin";
import { adminPeut } from "@/lib/permissions";
import { exigerAdmin } from "@/lib/supabase/admin";
import type { RoleAdmin } from "@/lib/types";

const texte = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");
const UUID = /^[0-9a-f-]{36}$/;

/** Lit la décision d'un formulaire : « valide », ou « refuse » avec un motif obligatoire. */
function lireDecision(form: FormData) {
  const id = texte(form.get("id"));
  const decision = texte(form.get("decision"));
  if (!UUID.test(id) || (decision !== "valide" && decision !== "refuse")) return null;
  if (decision === "valide") return { id, statut: "valide" as const, motif: null };
  const motif = motifValide(texte(form.get("motif_libre")) || texte(form.get("motif")));
  return motif ? { id, statut: "refuse" as const, motif } : null;
}

export async function deciderKyc(form: FormData) {
  const { client } = await exigerAdmin("valider_kyc");
  const d = lireDecision(form);
  if (!d) redirect("/admin/kyc?erreur=motif");
  // Seul un dossier encore en attente est modifié : deux admins ne décident pas deux fois.
  const { data } = await client
    .from("kyc_documents")
    .update({ statut: d.statut, motif_refus: d.motif })
    .eq("id", d.id)
    .eq("statut", "en_attente")
    .select("id");
  revalidatePath("/admin/kyc");
  redirect(`/admin/kyc?${data?.length ? `fait=${d.statut}` : "erreur=base"}`);
}

export async function deciderEntreprise(form: FormData) {
  const { client } = await exigerAdmin("verifier_entreprises");
  const d = lireDecision(form);
  if (!d) redirect("/admin/entreprises?erreur=motif");
  const { data } = await client
    .from("advertisers")
    .update({ statut_verification: d.statut, motif_refus: d.motif })
    .eq("id", d.id)
    .eq("statut_verification", "en_attente")
    .select("id");
  revalidatePath("/admin/entreprises");
  redirect(`/admin/entreprises?${data?.length ? `fait=${d.statut}` : "erreur=base"}`);
}

function retourUtilisateurs(form: FormData, resultat: string): never {
  const q = texte(form.get("q"));
  const page = texte(form.get("page"));
  const params = new URLSearchParams({ ...(q && { q }), ...(page && { page }), resultat });
  redirect(`/admin/utilisateurs?${params}`);
}

export async function changerSuspension(form: FormData) {
  const { client, moi } = await exigerAdmin("suspendre_utilisateurs");
  const id = texte(form.get("id"));
  const suspendre = texte(form.get("suspendre")) === "oui";
  if (!UUID.test(id) || id === moi) retourUtilisateurs(form, "erreur");
  const { data } = await client.from("profiles").update({ suspendu: suspendre }).eq("id", id).select("id");
  revalidatePath("/admin/utilisateurs");
  retourUtilisateurs(form, !data?.length ? "erreur" : suspendre ? "suspendu" : "reactive");
}

const ROLES_ADMIN: RoleAdmin[] = ["super_admin", "moderateur", "finance", "support"];

/** Donne, change ou retire l'accès admin d'un compte (super admin uniquement). */
export async function changerRoleAdmin(form: FormData) {
  const { client, moi, utilisateur } = await exigerAdmin("gerer_admins");
  const id = texte(form.get("id"));
  const choix = texte(form.get("role_admin"));
  if (!UUID.test(id) || id === moi || !adminPeut(utilisateur, "gerer_admins")) retourUtilisateurs(form, "erreur");

  let echec = false;
  if (choix === "aucun") {
    echec = Boolean((await client.from("profile_roles").delete().eq("profil_id", id).eq("role", "admin")).error);
    if (!echec) echec = Boolean((await client.from("profiles").update({ role_admin: null }).eq("id", id)).error);
  } else if ((ROLES_ADMIN as string[]).includes(choix)) {
    const ajout = await client.from("profile_roles").upsert({ profil_id: id, role: "admin" }, { onConflict: "profil_id,role", ignoreDuplicates: true });
    echec = Boolean(ajout.error);
    if (!echec) echec = Boolean((await client.from("profiles").update({ role_admin: choix }).eq("id", id)).error);
  } else {
    echec = true;
  }
  revalidatePath("/admin/utilisateurs");
  retourUtilisateurs(form, echec ? "erreur" : "role");
}
