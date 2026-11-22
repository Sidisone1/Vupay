"use server";

import { redirect } from "next/navigation";
import { destinationApresConnexion, validerInscription, type DonneesInscription } from "@/lib/espaces";
import { exigerUtilisateur } from "@/lib/supabase/session";

export type EtatInscription = { erreurs: Partial<Record<keyof DonneesInscription | "general", string>> };

export async function inscrire(_etat: EtatInscription, form: FormData): Promise<EtatInscription> {
  const { supabase, user, profil } = await exigerUtilisateur();
  if (profil) redirect(destinationApresConnexion(profil));

  const resultat = validerInscription(
    {
      pays: form.get("pays"), ville: form.get("ville"), annee_naissance: form.get("annee_naissance"),
      sexe: form.get("sexe"), interets: form.getAll("interets"), espace: form.get("espace"),
      nom_affiche: form.get("nom_affiche"),
    },
    new Date().getFullYear(),
  );
  if (!resultat.ok) return { erreurs: resultat.erreurs };

  // Le téléphone est recopié depuis le compte vérifié par la base (trigger preparer_profil).
  const { error } = await supabase.from("profiles").insert({ id: user.id, telephone: "", ...resultat.donnees });
  if (error) return { erreurs: { general: "Impossible d'enregistrer votre profil. Réessayez." } };

  const espace = resultat.donnees.espaces[0];
  redirect(destinationApresConnexion({ role: espace, espaces: [espace], suspendu: false }, { suite: String(form.get("suite") ?? "") }));
}
