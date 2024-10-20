#!/bin/bash
set -e

# Function to check if a database exists and create it if it does not
function create_db() {
    local dbname=$1
    local initdb_args=$2
    local template=${3:-""}
    echo "Checking if database exists: $dbname"
    if ! psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_database WHERE datname = '$dbname'" | grep -q 1; then
        echo "Creating database: $dbname with args: $initdb_args"
        if [ -n "$template" ]; then
            psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
                CREATE DATABASE $dbname WITH $initdb_args TEMPLATE $template;
EOSQL
        else
            psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
                CREATE DATABASE $dbname WITH $initdb_args;
EOSQL
        fi
        echo "Database $dbname created"
    else
        echo "Database $dbname already exists"
    fi
}

# Function to create a database and enable an extension
function create_db_with_extension() {
    local dbname=$1
    create_db $dbname ""

    echo "Enabling extensions for: $dbname"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=$dbname <<-EOSQL
        CREATE EXTENSION IF NOT EXISTS "temporal_tables";
EOSQL
}

# Create databases without extensions
create_db "kratos" ""
create_db "hasura" ""
# Create synapse database with specific initdb args
create_db "synapse" "ENCODING 'UTF8' LC_COLLATE 'C' LC_CTYPE 'C'" "template0"
# Create database with the extension
create_db_with_extension "faktenforum"
