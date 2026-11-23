"use client";

import { useEffect, useId, useState } from "react";
import { COTE_MAX_IMAGE, PIECES_ACCEPTEES, verifierFichier, type TypePiece } from "@/lib/pieces";

/**
 * Choix d'une pièce justificative (photo ou PDF). Les photos sont réduites et recompressées
 * dans le navigateur avant l'envoi : une photo de 4 Mo passe à environ 300 Ko.
 */
export function ChampPiece({
  type,
  aide,
  camera,
  onChange,
}: {
  type: TypePiece;
  aide: string;
  camera?: "user" | "environment";
  onChange: (fichier: Blob | null) => void;
}) {
  const id = useId();
  const [apercu, setApercu] = useState<string | null>(null);
  const [nomPdf, setNomPdf] = useState<string | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);
  const [travail, setTravail] = useState(false);
  const regle = PIECES_ACCEPTEES[type];

  useEffect(() => () => {
    if (apercu) URL.revokeObjectURL(apercu);
  }, [apercu]);

  async function choisir(e: React.ChangeEvent<HTMLInputElement>) {
    const fichier = e.target.files?.[0];
    setErreur(null);
    setApercu(null);
    setNomPdf(null);
    onChange(null);
    if (!fichier) return;
    const probleme = verifierFichier(type, fichier);
    if (probleme) {
      setErreur(probleme);
      return;
    }
    if (fichier.type === "application/pdf") {
      setNomPdf(fichier.name);
      onChange(fichier);
      return;
    }
    setTravail(true);
    try {
      const reduite = await compresserImage(fichier);
      setApercu(URL.createObjectURL(reduite));
      onChange(reduite);
    } catch {
      setErreur("Cette photo n'a pas pu être lue. Essayez une autre photo.");
    } finally {
      setTravail(false);
    }
  }

  return (
    <div className="mt-4">
      <label htmlFor={id} className="block text-sm font-bold">
        {regle.libelle}
      </label>
      <p className="text-xs text-vupay-doux">{aide}</p>
      <label
        htmlFor={id}
        className="mt-2 flex min-h-32 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-vupay-trait bg-white p-2 text-center text-sm font-bold text-vupay-primaire"
      >
        {travail ? (
          "Préparation de la photo…"
        ) : apercu ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={apercu} alt="Aperçu de la pièce choisie" className="max-h-48 w-auto rounded-lg object-contain" />
        ) : nomPdf ? (
          <span>📄 {nomPdf}</span>
        ) : (
          <span>{camera ? "Prendre une photo" : "Choisir un fichier"}</span>
        )}
      </label>
      <input
        id={id}
        type="file"
        accept={regle.types.join(",")}
        capture={camera}
        onChange={choisir}
        className="sr-only"
      />
      {(apercu || nomPdf) && <p className="mt-1 text-xs text-vupay-doux">Touchez l&apos;image pour la remplacer.</p>}
      {erreur && (
        <p role="alert" className="mt-1 text-sm font-bold text-vupay-erreur">
          {erreur}
        </p>
      )}
    </div>
  );
}

async function compresserImage(fichier: File): Promise<Blob> {
  const image = await createImageBitmap(fichier);
  const echelle = Math.min(1, COTE_MAX_IMAGE / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(image.width * echelle);
  canvas.height = Math.round(image.height * echelle);
  canvas.getContext("2d")!.drawImage(image, 0, 0, canvas.width, canvas.height);
  image.close();
  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("compression"))), "image/jpeg", 0.8),
  );
}
