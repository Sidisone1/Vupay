-- Vupay — durcissement signalé par le contrôle de sécurité de Supabase.
-- Les fonctions de déclencheur n'ont pas à être appelables par l'API (/rest/v1/rpc/…) :
-- un déclencheur s'exécute sans que l'utilisateur ait le droit EXECUTE.
revoke execute on function
  proteger_colonnes_profil(), decision_kyc(), synchroniser_kyc(), proteger_entreprise(),
  auditer_profil(), auditer_roles(), proteger_campagne(), nouvelle_campagne(), photo_campagne_controlee()
from public, anon, authenticated;

-- Restent appelables, volontairement :
-- • est_admin, admin_peut, a_role, campagne_modifiable, entreprise_verifiee : utilisées par
--   les règles d'accès (RLS), évaluées avec les droits de l'appelant ; elles ne renvoient que
--   le statut de l'utilisateur connecté (ou « vérifiée oui / non » pour une entreprise).
-- • fiche_publique, destination_publique : la fiche produit est publique par nature.
-- • creer_mon_profil : réservée aux utilisateurs connectés (déjà retirée aux visiteurs).
comment on function est_admin() is 'Utilisée par la RLS. Ne révèle que le statut de l''appelant.';
comment on function admin_peut(text) is 'Utilisée par la RLS. Ne révèle que les permissions de l''appelant.';
comment on function a_role(role_utilisateur) is 'Utilisée par la RLS. Ne révèle que les rôles de l''appelant.';
comment on function fiche_publique(text) is 'Fiche produit publique : sans adresses de destination, budget ni tarif.';
comment on function destination_publique(text, action_contact) is 'Destination enregistrée d''une campagne diffusable, ou null.';
