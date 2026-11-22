export const metadata = { title: "Compte suspendu — Vupay" };

export default function CompteSuspendu() {
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <h1 className="text-2xl font-black text-vupay-erreur">Compte suspendu</h1>
      <p className="mt-3 text-base leading-relaxed">
        Votre compte est temporairement suspendu, en général à la suite d&apos;un contrôle antifraude.
        Vos gains déjà validés restent enregistrés dans le journal.
      </p>
      <p className="mt-3 text-base">Pour en savoir plus ou contester, contactez le support Vupay.</p>
      <form action="/auth/deconnexion" method="post" className="mt-6">
        <button className="rounded-xl border border-vupay-trait bg-white px-4 py-2 font-semibold">Se déconnecter</button>
      </form>
    </main>
  );
}
