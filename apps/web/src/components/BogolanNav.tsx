import Image from "next/image";
import Link from "next/link";

const liens = [
  { titre: "Accueil", chemin: "/diffuseur", icone: "/icones/principale/accueil.png" },
  { titre: "Campagnes", chemin: "/diffuseur/campagnes", icone: "/icones/vupay/campagne.png" },
  { titre: "Gains", chemin: "/diffuseur/gains", icone: "/icones/trajets/monnaie.png" },
  { titre: "Retraits", chemin: "/diffuseur/retraits", icone: "/icones/vupay/retrait-mobile.png" },
  { titre: "Profil", chemin: "/diffuseur/profil", icone: "/icones/principale/compte.png" },
] as const;

/** Composant mobile Bogolan, avec dimensions fixes pour éviter les débordements. */
export function BogolanNav({ actif }: { actif?: (typeof liens)[number]["titre"] }) {
  return (
    <nav aria-label="Navigation diffuseur" className="grid grid-cols-5 gap-1 rounded-t-3xl bg-vupay-primaire px-2 py-3 text-white">
      {liens.map((lien) => (
        <Link
          key={lien.chemin}
          href={lien.chemin}
          aria-current={actif === lien.titre ? "page" : undefined}
          className={`flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-center text-[10px] font-semibold leading-tight sm:text-xs ${actif === lien.titre ? "bg-vupay-fond text-vupay-encre" : "text-white"}`}
        >
          <Image src={lien.icone} alt="" width={32} height={32} className="h-8 w-8 shrink-0 object-contain" />
          <span className="max-w-full break-words">{lien.titre}</span>
        </Link>
      ))}
    </nav>
  );
}
