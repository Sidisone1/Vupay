-- Droits par défaut que Supabase accorde sur le schéma public (la RLS fait le tri).
-- Appliqué AVANT les migrations, comme sur un vrai projet, pour que leurs `revoke` comptent.
grant usage on schema public to anon, authenticated, service_role;
alter default privileges in schema public grant all on tables to anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to anon, authenticated, service_role;
alter default privileges in schema public grant execute on functions to anon, authenticated, service_role;
