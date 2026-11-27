"use client";

import { useState } from "react";

/** Lien personnel : copier, ou ouvrir le menu de partage du téléphone. */
export function PartageLien({ reseau, adresse, titre }: { reseau: string; adresse: string; titre: string }) {
  const [copie, setCopie] = useState(false);
  const texte = `Publicité · ${titre}\n${adresse}`;

  async function copier() {
    try {
      await navigator.clipboard.writeText(adresse);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      setCopie(false);
    }
  }

  async function partager() {
    if (navigator.share) {
      try {
        await navigator.share({ title: titre, text: texte });
      } catch {
        // partage annulé par l'utilisateur
      }
    } else {
      await copier();
    }
  }

  return (
    <div className="min-w-0 rounded-2xl border-2 border-vupay-succes bg-white p-4">
      <p className="text-sm font-bold">{reseau}</p>
      <p className="mt-1 break-all rounded-lg bg-vupay-fond p-2 font-mono text-sm">{adresse}</p>
      <div className="mt-3 grid gap-2 min-[360px]:grid-cols-2">
        <button type="button" onClick={copier} className="min-h-11 rounded-xl border-2 border-vupay-primaire text-sm font-bold text-vupay-primaire">
          {copie ? "Copié ✓" : "Copier le lien"}
        </button>
        <button type="button" onClick={partager} className="min-h-11 rounded-xl bg-vupay-primaire text-sm font-bold text-white">
          Partager
        </button>
      </div>
    </div>
  );
}
