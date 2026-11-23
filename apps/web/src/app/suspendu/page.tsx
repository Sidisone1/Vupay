export default function Suspendu() {
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <h1 className="text-2xl font-black text-vupay-erreur">Compte suspendu</h1>
      <p className="mt-3 text-sm">
        Votre compte est suspendu pendant une vérification. Vos gains et vos données sont conservés.
        Contactez le support Vupay pour en connaître la raison.
      </p>
      <form action="/deconnexion" method="post">
        <button className="mt-6 min-h-12 w-full rounded-2xl border-2 border-vupay-primaire px-4 font-bold text-vupay-primaire">
          Se déconnecter
        </button>
      </form>
    </main>
  );
}
