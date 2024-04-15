#!/bin/bash
set -e

# Ensure environment variables for all credentials are set
if [ -z "$PGADMIN" ] || [ -z "$PGPASSWORD" ] || [ -z "$PGHOST" ] ||
  [ -z "$PGPORT" ]; then
  echo "Error: Required environment variables for database credentials are not set."
  exit 1
fi

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to start..."
MAX_TRIES=15
TRIES=0
while ! psql -h "$PGHOST" -U "$PGADMIN" -d "postgres" -c '\q' 2>/dev/null; do
  TRIES=$((TRIES+1))
  if [ "$TRIES" -ge "$MAX_TRIES" ]; then
    echo "PostgreSQL is not available after $MAX_TRIES attempts... exiting."
    exit 1
  fi
  echo "PostgreSQL is unavailable - sleeping"
  sleep 2
done

echo "Creating databases ..."

# Use default database to run creation scripts
psql -v ON_ERROR_STOP=1 --username "$PGADMIN" --dbname "postgres" --host "$PGHOST" --port "$PGPORT" <<-EOSQL
    CREATE DATABASE IF NOT EXISTS faktenforum;
    CREATE DATABASE IF NOT EXISTS kratos;
EOSQL



echo "Databases created."