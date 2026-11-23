#!/usr/bin/env bash
# Rejoue toutes les migrations sur une base Postgres neuve puis lance les tests de droits (RLS).
# Prérequis : un serveur Postgres 15+ local et psql. Connexion réglée par les variables
# habituelles (PGHOST, PGPORT, PGUSER) ; l'utilisateur doit pouvoir créer une base.
#   Exemple : PGHOST=localhost PGUSER=postgres supabase/tests/lancer.sh
set -euo pipefail

ici="$(cd "$(dirname "$0")" && pwd)"
base="${VUPAY_BASE_TEST:-vupay_test}"

psql -v ON_ERROR_STOP=1 -q -d postgres -c "drop database if exists $base" -c "create database $base"
run() { psql -v ON_ERROR_STOP=1 -q -X -o /dev/null -d "$base" -f "$1"; }

run "$ici/00_simulation_supabase.sql"
for migration in "$ici"/../migrations/*.sql; do
  run "$migration"
done
for test in "$ici"/[1-9]*.sql; do
  echo "== $(basename "$test")"
  run "$test"
done
