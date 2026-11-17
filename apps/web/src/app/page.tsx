import Link from "next/link";

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-bold text-vupay-primaire">Vupay</h1>
      <p className="mt-2">
        Plateforme publicitaire : les marques paient, vous diffusez leurs pubs sur vos statuts et stories, chaque
        vue validée vous rapporte. Retrait Mobile Money dès 1 000 F.
      </p>
      <p className="mt-2 text-sm opacity-70">
        Vupay n'est pas un service de paiement. Les gains dépendent de votre audience réelle.
      </p>
      <div className="mt-6 grid gap-3">
        <Link href="/connexion" className="rounded-xl bg-vupay-primaire px-4 py-3 text-center text-white">
          Je diffuse et je gagne
        </Link>
        <Link href="/connexion?espace=annonceur" className="rounded-xl bg-white px-4 py-3 text-center">
          Je suis une marque
        </Link>
      </div>
    </main>
  );
}
