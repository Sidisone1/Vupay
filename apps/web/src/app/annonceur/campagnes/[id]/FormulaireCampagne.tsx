"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChampPiece } from "@/components/ChampPiece";
import { lirePrix } from "@/lib/campagnes";
import { supabaseNavigateur } from "@/lib/supabase/client";
import { deposerPiece } from "@/lib/supabase/deposer";

interface Campagne {
  id: string;
  titre: string;
  texte: string;
  prix: number | null;
  photo: string | null;
  photoUrl: string | null;
  debut: string;
  fin: string;
}

export function FormulaireCampagne({ utilisateurId, campagne }: { utilisateurId: string; campagne: Campagne }) {
  const router = useRouter();
  const [titre, setTitre] = useState(campagne.titre);
  const [texte, setTexte] = useState(campagne.texte);
  const [prix, setPrix] = useState(campagne.prix?.toString() ?? "");
  const [debut, setDebut] = useState(campagne.debut);
  const [fin, setFin] = useState(campagne.fin);
  const [photo, setPhoto] = useState<Blob | null>(null);
  const [etat, setEtat] = useState<{ type: "ok" | "erreur"; texte: string } | null>(null);
  const [envoi, setEnvoi] = useState(false);

  async function enregistrer(e: React.FormEvent) {
    e.preventDefault();
    const p = lirePrix(prix);
    if (titre.trim().length < 3) return setEtat({ type: "erreur", texte: "Le nom doit faire au moins 3 caractères." });
    if (!p.ok) return setEtat({ type: "erreur", texte: "Prix invalide : un nombre entier en FCFA, sans virgule." });
    if (debut && fin && fin < debut) return setEtat({ type: "erreur", texte: "La date de fin doit suivre la date de début." });
    setEnvoi(true);
    setEtat(null);
    try {
      const client = supabaseNavigateur();
      const chemin_creatif = photo ? await deposerPiece(client, "produits", utilisateurId, "produit", photo) : campagne.photo;
      const { error } = await client
        .from("campaigns")
        .update({ titre: titre.trim(), texte: texte.trim() || null, prix: p.prix, debut: debut || null, fin: fin || null, chemin_creatif })
        .eq("id", campagne.id);
      if (error) throw error;
      setEtat({ type: "ok", texte: "Fiche enregistrée." });
      setPhoto(null);
      router.refresh();
    } catch {
      setEtat({ type: "erreur", texte: "L'enregistrement n'a pas abouti. Vérifiez votre connexion et réessayez." });
    } finally {
      setEnvoi(false);
    }
  }

  const champ = "mt-1 block min-h-12 w-full rounded-xl border border-vupay-trait bg-white px-3 text-base";
  return (
    <form onSubmit={enregistrer} className="mt-2">
      <label htmlFor="titre" className="block text-sm font-bold">
        Nom du produit
      </label>
      <input id="titre" className={champ} value={titre} onChange={(e) => setTitre(e.target.value)} maxLength={80} />

      <label htmlFor="texte" className="mt-4 block text-sm font-bold">
        Description
      </label>
      <textarea id="texte" className={`${champ} py-2`} rows={4} value={texte} onChange={(e) => setTexte(e.target.value)} maxLength={1000} placeholder="Ce qui rend votre produit intéressant, tailles, livraison…" />
      <p className="text-right text-xs text-vupay-doux">{texte.length} / 1000</p>

      <label htmlFor="prix" className="mt-2 block text-sm font-bold">
        Prix en FCFA <span className="font-normal text-vupay-doux">(facultatif)</span>
      </label>
      <input id="prix" className={champ} inputMode="numeric" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="15 000" />

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="debut" className="block text-sm font-bold">
            Début
          </label>
          <input id="debut" type="date" className={champ} value={debut} onChange={(e) => setDebut(e.target.value)} />
        </div>
        <div>
          <label htmlFor="fin" className="block text-sm font-bold">
            Fin
          </label>
          <input id="fin" type="date" className={champ} value={fin} min={debut || undefined} onChange={(e) => setFin(e.target.value)} />
        </div>
      </div>

      {campagne.photoUrl && !photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={campagne.photoUrl} alt="Photo actuelle du produit" className="mt-4 max-h-40 rounded-xl object-contain" />
      )}
      <ChampPiece type="produit" aide="Photo nette du produit, carrée de préférence. Elle sera visible publiquement." onChange={setPhoto} />

      {etat && (
        <p role={etat.type === "erreur" ? "alert" : "status"} className={`mt-3 text-sm font-bold ${etat.type === "ok" ? "text-vupay-succes" : "text-vupay-erreur"}`}>
          {etat.texte}
        </p>
      )}
      <button disabled={envoi} className="mt-4 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white disabled:opacity-60">
        {envoi ? "Enregistrement…" : "Enregistrer la fiche"}
      </button>
    </form>
  );
}
