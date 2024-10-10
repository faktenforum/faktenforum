// Bash script to create or update the system user if not exists
// File: /scripts/create_or_update_system_user.sh

#!/bin/bash

# Variables
ADMIN_USER="${SYNAPSE_ADMIN_USER:-@system:chat.localhost}"
ADMIN_PASSWORD="${SYNAPSE_ADMIN_PASSWORD:-abcd1234!D}"
SYNAPSE_URL="http://localhost:8008"
ACCESS_TOKEN="${SYNAPSE_ADMIN_ACCESS_TOKEN}"

# Check if the user exists
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X GET "$SYNAPSE_URL/_synapse/admin/v1/users/$ADMIN_USER" -H "Authorization: Bearer $ACCESS_TOKEN")

if [ "$RESPONSE" -eq 200 ]; then
  echo "User $ADMIN_USER already exists, updating password."
  # Update the password of the existing user
  curl -s -X PUT "$SYNAPSE_URL/_synapse/admin/v1/users/$ADMIN_USER" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"password\": \"$ADMIN_PASSWORD\"}"
else
  echo "User $ADMIN_USER does not exist, creating user."
  # Create a new admin user
  curl -s -X PUT "$SYNAPSE_URL/_synapse/admin/v2/users/$ADMIN_USER" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"password\": \"$ADMIN_PASSWORD\", \"admin\": true}"
fi

# Unset environment variables
unset ADMIN_USER
unset ADMIN_PASSWORD
unset SYNAPSE_URL
unset ACCESS_TOKEN
