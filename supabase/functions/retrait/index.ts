// Edge Function (Deno) — demande de retrait Mobile Money. Lot 4.
// 1. Vérifier KYC, numéro au nom du titulaire, seuil et solde (calculé depuis ledger_entries).
// 2. Écrire le débit « retrait » au journal avec une référence unique, dans la même transaction.
// 3. Sous le plafond journalier : appel payout à l'agrégateur (sandbox d'abord) ; au-dessus : file admin.
// 4. Le webhook /api/webhooks/paiements confirme ou recrédite (« retrait_annule ») en cas d'échec.
Deno.serve(() =>
  new Response(JSON.stringify({ erreur: "Pas encore implémenté (lot 4)" }), {
    status: 501,
    headers: { "content-type": "application/json" },
  }),
);
