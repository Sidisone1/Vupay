import Link from "next/link";

/** Écran provisoire : décrit ce que le module fera et le lot de la feuille de route qui le construit. */
export function EcranAVenir({
  titre,
  fonctions,
  lot,
  retour,
}: {
  titre: string;
  fonctions: string[];
  lot: string;
  retour?: string;
}) {
  return (
    <main className="mx-auto max-w-xl px-4 py-6">
      {retour && (
        <Link href={retour} className="text-sm text-vupay-primaire">
          ← Retour
        </Link>
      )}
      <h1 className="mt-2 text-2xl font-bold">{titre}</h1>
      <p className="mt-1 text-sm opacity-70">À construire — {lot}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5">
        {fonctions.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
