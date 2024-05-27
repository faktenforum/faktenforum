#!/bin/bash
set -e

# Function to check if a database exists and create it if it does not
function create_db() {
    local dbname=$1
    echo "Checking if database exists: $dbname"
    if ! psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_database WHERE datname = '$dbname'" | grep -q 1; then
        echo "Creating database: $dbname"
        psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
            CREATE DATABASE $dbname;
EOSQL
    echo "Database $dbname created"
    else
        echo "Database $dbname already exists"
    fi
}

# Function to create a database and enable an extension
function create_db_with_extension() {
    local dbname=$1
    create_db $dbname

    echo "Enabling extensions for: $dbname"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=$dbname <<-EOSQL
        CREATE EXTENSION IF NOT EXISTS "temporal_tables";
EOSQL
}

# Create databases without extensions
create_db "kratos"
create_db "hasura"

# Create database with the extension
create_db_with_extension "faktenforum"
