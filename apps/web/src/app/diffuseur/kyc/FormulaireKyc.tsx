"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChampPiece } from "@/components/ChampPiece";
import { supabaseNavigateur } from "@/lib/supabase/client";
import { deposerPiece } from "@/lib/supabase/deposer";

export function FormulaireKyc({ utilisateurId }: { utilisateurId: string }) {
  const router = useRouter();
  const [piece, setPiece] = useState<Blob | null>(null);
  const [selfie, setSelfie] = useState<Blob | null>(null);
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function envoyer(e: React.FormEvent) {
    e.preventDefault();
    if (!piece || !selfie) {
      setErreur("Ajoutez les deux photos.");
      return;
    }
    setErreur(null);
    setEnvoi(true);
    try {
      const client = supabaseNavigateur();
      const chemin_piece = await deposerPiece(client, "kyc", utilisateurId, "piece", piece);
      const chemin_selfie = await deposerPiece(client, "kyc", utilisateurId, "selfie", selfie);
      const { error } = await client.from("kyc_documents").insert({ profil_id: utilisateurId, chemin_piece, chemin_selfie });
      if (error) throw error;
      router.refresh();
    } catch {
      setErreur("L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.");
      setEnvoi(false);
    }
  }

  return (
    <form onSubmit={envoyer} className="mt-2">
      <ChampPiece
        type="piece"
        camera="environment"
        aide="Carte d'identité, passeport ou carte NINA. Les 4 coins visibles, texte lisible, sans reflet."
        onChange={setPiece}
      />
      <ChampPiece
        type="selfie"
        camera="user"
        aide="Votre visage et la pièce tenue à côté, dans un endroit éclairé."
        onChange={setSelfie}
      />
      {erreur && (
        <p role="alert" className="mt-3 text-sm font-bold text-vupay-erreur">
          {erreur}
        </p>
      )}
      <button
        type="submit"
        disabled={envoi || !piece || !selfie}
        className="mt-5 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white disabled:opacity-60"
      >
        {envoi ? "Envoi en cours…" : "Envoyer pour vérification"}
      </button>
    </form>
  );
}
