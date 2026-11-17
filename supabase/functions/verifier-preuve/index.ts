// Edge Function (Deno) — vérification d'une capture de preuve. Lot 3.
// 1. Charger la preuve, son assignment et l'historique du diffuseur (clé service).
// 2. Appeler le modèle de vision (VISION_CLE_API) : nombre de vues, code court, interface du réseau, retouche.
// 3. Appliquer les règles de src/lib/antifraude.ts (evaluerPreuve) avec les seuils de la table settings.
// 4. validee_auto → écriture « gain_vues » au journal (disponible) ; a_verifier → file admin ; refusee → motif.
// 5. Notifier le diffuseur.
Deno.serve(() =>
  new Response(JSON.stringify({ erreur: "Pas encore implémenté (lot 3)" }), {
    status: 501,
    headers: { "content-type": "application/json" },
  }),
);
