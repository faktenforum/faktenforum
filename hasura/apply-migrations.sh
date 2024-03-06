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
: ${WAIT_FOR_ENDPOINT:=true}

# Wait for the endpoint to be available
if [ "$WAIT_FOR_ENDPOINT" = "true" ]; then
    echo "Waiting for Hasura endpoint $HASURA_ENDPOINT to be available..."
    while true; do
        if curl -s -o /dev/null "$HASURA_ENDPOINT/v1/version"; then
            echo "Endpoint $HASURA_ENDPOINT is now available."
            break
        else
            echo "Endpoint $HASURA_ENDPOINT not available, waiting..."
            sleep 1
        fi
    done
fi

# Apply seeds if enabled


# Apply migrations if enabled
if [ "$APPLY_MIGRATIONS" = "true" ]; then
    echo "Applying migrations..."
    hasura migrate apply --endpoint $HASURA_ENDPOINT --admin-secret $HASURA_ADMIN_SECRET 
else
    echo "Skipping migrations."
fi

if [ "$APPLY_SEEDS" = "true" ]; then
    echo "Applying seeds..."
    hasura seed apply --endpoint $HASURA_ENDPOINT --admin-secret $HASURA_ADMIN_SECRET 
else
    echo "Skipping seeds."
fi

# Apply metadata if enabled
if [ "$APPLY_METADATA" = "true" ]; then
    echo "Applying metadata..."
    hasura metadata apply --endpoint $HASURA_ENDPOINT --admin-secret $HASURA_ADMIN_SECRET 
else
    echo "Skipping metadata."
fi

