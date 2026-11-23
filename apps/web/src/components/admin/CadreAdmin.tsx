import Link from "next/link";

export function CadreAdmin({ titre, retour = "/admin", children }: { titre: string; retour?: string | null; children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-vupay-fond px-4 py-6 text-vupay-encre">
      {retour && (
        <Link href={retour} className="text-sm font-bold text-vupay-primaire">
          ← Back-office
        </Link>
      )}
      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">{titre}</h1>
      {children}
    </main>
  );
}

export function Message({ type, texte }: { type: "ok" | "erreur"; texte: string }) {
  return (
    <p role={type === "erreur" ? "alert" : "status"} className={`mt-3 rounded-xl p-3 text-sm font-bold ${type === "ok" ? "bg-white text-vupay-succes" : "bg-white text-vupay-erreur"}`}>
      {texte}
    </p>
  );
}

/** Choix « Valider » / « Refuser avec motif », sans JavaScript (formulaires simples, adaptés à la 3G). */
export function FormulaireDecision({
  action,
  id,
  motifs,
  libelleValider = "Valider",
}: {
  action: (form: FormData) => Promise<void>;
  id: string;
  motifs: readonly string[];
  libelleValider?: string;
}) {
  return (
    <div className="mt-3 grid gap-2">
      <form action={action}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="decision" value="valide" />
        <button className="min-h-12 w-full rounded-xl bg-vupay-primaire px-4 font-bold text-white">{libelleValider}</button>
      </form>
      <details className="rounded-xl border-2 border-vupay-erreur bg-white">
        <summary className="flex min-h-12 cursor-pointer items-center justify-center px-4 font-bold text-vupay-erreur">Refuser…</summary>
        <form action={action} className="grid gap-2 p-3">
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="decision" value="refuse" />
          <fieldset className="grid gap-1 text-sm">
            <legend className="font-bold">Motif (visible par l&apos;utilisateur)</legend>
            {motifs.map((m) => (
              <label key={m} className="flex items-start gap-2">
                <input type="radio" name="motif" value={m} className="mt-1" />
                <span>{m}</span>
              </label>
            ))}
          </fieldset>
          <label className="text-sm font-bold" htmlFor={`libre-${id}`}>
            Ou motif personnalisé
          </label>
          <textarea id={`libre-${id}`} name="motif_libre" maxLength={300} rows={2} className="rounded-xl border border-vupay-trait p-2 text-base" />
          <button className="min-h-12 rounded-xl bg-vupay-erreur px-4 font-bold text-white">Confirmer le refus</button>
        </form>
      </details>
    </div>
  );
}
