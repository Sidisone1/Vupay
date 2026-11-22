-- Vupay — Lot 1 · durcissement signalé par l'analyse de sécurité Supabase.
-- Les fonctions de trigger n'ont pas à être appelables via l'API (/rest/v1/rpc/…) :
-- un trigger s'exécute sans que l'appelant ait le droit EXECUTE.
revoke execute on function preparer_profil() from public, anon, authenticated;
revoke execute on function proteger_colonnes_profil() from public, anon, authenticated;

-- est_admin() et a_espace() restent appelables : les règles RLS les évaluent avec les droits
-- de l'appelant, et elles ne renvoient que le statut de l'utilisateur connecté lui-même.
comment on function est_admin() is 'Utilisée par la RLS. Ne révèle que le statut de l''appelant.';
comment on function a_espace(role_utilisateur) is 'Utilisée par la RLS. Ne révèle que les espaces de l''appelant.';
