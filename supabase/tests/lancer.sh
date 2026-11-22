#!/usr/bin/env bash
# Applique les migrations sur une base Postgres locale jetable, puis lance les tests RLS.
# Usage : supabase/tests/lancer.sh   (variables PG* standard pour se connecter, ex. PGUSER=postgres)
set -euo pipefail
ici="$(cd "$(dirname "$0")" && pwd)"
base="vupay_test_$$"
createdb "$base"
trap 'dropdb --if-exists "$base"' EXIT
psql_() { psql -v ON_ERROR_STOP=1 -q -X -tA -d "$base" "$@"; }
psql_ -f "$ici/stub_auth.sql"
psql_ -f "$ici/droits_supabase.sql"
for m in "$ici"/../migrations/*.sql; do psql_ -f "$m"; done
for t in "$ici"/rls_*.sql; do echo "== $(basename "$t")"; psql_ -f "$t"; done
