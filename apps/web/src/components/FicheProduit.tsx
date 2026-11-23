import { libelleAction, type ActionContact } from "@/lib/contacts";
import { prixPublic } from "@/lib/campagnes";

export interface DonneesFiche {
  titre: string;
  description: string | null;
  prix: number | null;
  photo: string | null; // adresse publique de l'image
  annonceur: string;
  disponible: boolean;
  actions: { type: ActionContact; libelle: string }[];
}

const ICONES: Record<ActionContact, string> = {
  numero_whatsapp: "📞",
  catalogue_whatsapp: "🗂️",
  envoyer_message: "💬",
  acheter: "🛒",
};

/**
 * Fiche produit publique : ce que voit le visiteur qui ouvre le lien d'un statut.
 * `lien` fabrique l'adresse de chaque bouton ; null = aperçu (boutons inactifs).
 */
export function FicheProduit({ fiche, lien }: { fiche: DonneesFiche; lien: ((type: ActionContact) => string) | null }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
      {fiche.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={fiche.photo} alt={fiche.titre} width={800} height={800} className="aspect-square w-full bg-vupay-sable object-cover" />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-vupay-sable text-sm text-vupay-doux">Photo du produit</div>
      )}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-vupay-ocre">Publicité · {fiche.annonceur}</p>
        <h1 className="mt-1 text-2xl font-black leading-tight text-vupay-encre">{fiche.titre}</h1>
        {fiche.prix !== null && <p className="mt-2 text-xl font-black text-vupay-primaire">{prixPublic(fiche.prix)}</p>}
        {fiche.description && <p className="mt-3 whitespace-pre-line text-base leading-relaxed">{fiche.description}</p>}

        {fiche.disponible ? (
          <div className="mt-5 grid gap-2">
            {fiche.actions.map((a) =>
              lien ? (
                <a
                  key={a.type}
                  href={lien(a.type)}
                  rel="nofollow noopener"
                  className={`flex min-h-14 items-center gap-3 rounded-2xl px-4 font-bold ${a.type === "acheter" ? "bg-vupay-ocre text-vupay-encre" : "bg-vupay-primaire text-white"}`}
                >
                  <span aria-hidden>{ICONES[a.type]}</span>
                  <span>{a.libelle || libelleAction(a.type)}</span>
                </a>
              ) : (
                <span key={a.type} className="flex min-h-14 items-center gap-3 rounded-2xl bg-vupay-sable px-4 font-bold">
                  <span aria-hidden>{ICONES[a.type]}</span>
                  <span>{a.libelle || libelleAction(a.type)}</span>
                </span>
              ),
            )}
          </div>
        ) : (
          <p role="status" className="mt-5 rounded-2xl border-2 border-vupay-trait p-4 text-center font-bold">
            Cette offre n&apos;est plus disponible pour le moment.
          </p>
        )}
        <p className="mt-5 text-xs text-vupay-doux">
          Les boutons ouvrent WhatsApp ou la boutique de l&apos;annonceur. Vupay est une plateforme publicitaire : la vente se fait
          directement avec l&apos;annonceur.
        </p>
      </div>
    </article>
  );
}
