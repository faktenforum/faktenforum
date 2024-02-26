#!/bin/bash

# Environment variables expected to be set:
# HASURA_ENDPOINT - the Hasura GraphQL engine endpoint
# HASURA_ADMIN_SECRET - the Hasura admin secret, if needed
# APPLY_MIGRATIONS - Set to "true" to apply migrations
# APPLY_METADATA - Set to "true" to apply metadata
# APPLY_SEEDS - Set to "true" to apply seeds

# Default values for actions
: ${APPLY_MIGRATIONS:=false}
: ${APPLY_METADATA:=false}
: ${APPLY_SEEDS:=false}

# Apply migrations if enabled
if [ "$APPLY_MIGRATIONS" = "true" ]; then
    echo "Applying migrations..."
    hasura migrate apply --endpoint $HASURA_ENDPOINT --admin-secret $HASURA_ADMIN_SECRET --skip-update-check
else
    echo "Skipping migrations."
fi

# Apply metadata if enabled
if [ "$APPLY_METADATA" = "true" ]; then
    echo "Applying metadata..."
    hasura metadata apply --endpoint $HASURA_ENDPOINT --admin-secret $HASURA_ADMIN_SECRET --skip-update-check
else
    echo "Skipping metadata."
fi

# Apply seeds if enabled
if [ "$APPLY_SEEDS" = "true" ]; then
    echo "Applying seeds..."
    hasura seed apply --endpoint $HASURA_ENDPOINT --admin-secret $HASURA_ADMIN_SECRET --skip-update-check
else
    echo "Skipping seeds."
fi
