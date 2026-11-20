import Image from "next/image";
import Link from "next/link";

export default function Accueil() {
  return (
    <main className="mx-auto min-h-screen max-w-lg overflow-hidden bg-vupay-fond text-vupay-encre">
      <header className="border-b-4 border-vupay-ocre bg-vupay-primaire p-6 text-white">
        <div className="flex items-center gap-3">
          <Image src="/icones/vupay/statut-story.png" width={56} height={56} alt="" className="rounded-xl" />
          <span className="text-3xl font-black tracking-tight">Vupay</span>
        </div>
        <p className="mt-2 text-sm">Diffusez • Attirez • Développez votre activité</p>
      </header>
      <section className="space-y-5 px-5 py-8">
        <h1 className="text-3xl font-black leading-tight text-vupay-primaire">Transformez vos partages en opportunités</h1>
        <p className="text-base leading-relaxed">Vupay connecte entreprises, diffuseurs et clients grâce à des campagnes publicitaires avec des liens traçables.</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            ["/icones/vupay/campagne.png","Diffusez"],
            ["/icones/vupay/clic-lien.png","Contacts"],
            ["/icones/vupay/portefeuille.png","Gains"],
          ].map(([src, label]) => (
            <div key={label} className="flex min-w-0 flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
              <Image src={src} width={52} height={52} alt="" className="h-12 w-12 object-contain" />
              <span className="text-sm font-bold">{label}</span>
            </div>
          ))}
        </div>
        <Link href="/connexion?espace=annonceur" className="flex min-h-14 items-center gap-3 rounded-2xl bg-vupay-primaire px-4 py-3 font-bold text-white">
          <Image src="/icones/vupay/annonceur.png" width={44} height={44} alt="" className="h-11 w-11 object-contain" />
          <span>Je suis une entreprise</span>
        </Link>
        <Link href="/connexion" className="flex min-h-14 items-center gap-3 rounded-2xl bg-vupay-ocre px-4 py-3 font-bold text-vupay-encre">
          <Image src="/icones/principale/compte.png" width={44} height={44} alt="" className="h-11 w-11 object-contain" />
          <span>Je veux diffuser des publicités</span>
        </Link>
        <p className="text-center text-sm text-vupay-doux">Les vues et simples visites ne sont pas rémunérées. Les gains dépendent des interactions qualifiées vérifiées.</p>
        <p className="text-center text-xs text-vupay-doux">Vupay est une plateforme publicitaire, pas un service de paiement.</p>
      </section>
    </main>
  );
}
