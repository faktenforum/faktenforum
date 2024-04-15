#!/bin/bash
set -e

# Function to create a database
function create_db() {
    local dbname=$1
    echo "Creating database: $dbname"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE $dbname;
EOSQL
}

# Function to create a database and enable an extension
function create_db_with_extension() {
    local dbname=$1
    echo "Creating database: $dbname"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE $dbname;
EOSQL

    echo "Enabling extensions for: $dbname"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=$dbname <<-EOSQL
        CREATE EXTENSION IF NOT EXISTS temporal_tables;
EOSQL
}

# Create databases without extensions
create_db kratos
create_db hasura

# Create database with the extension
create_db_with_extension faktenforum
