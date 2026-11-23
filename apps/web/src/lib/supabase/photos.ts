/** Adresse publique d'une photo du compartiment « produits » (affichable sans connexion, mise en cache). */
export function urlPhotoProduit(chemin: string | null): string | null {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!chemin || !base) return null;
  return `${base}/storage/v1/object/public/produits/${chemin.split("/").map(encodeURIComponent).join("/")}`;
}
