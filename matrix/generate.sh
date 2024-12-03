#!/bin/bash

# Generate basic config (what the original entrypoint did)

echo "Generating config"
cp /config/homeserver.yaml.tmpl /data/
cp /config/chat.faktenforum.log.config /data/
rm /data/homeserver.yaml

# Strip all comments and blank lines from input files
#sed -i -E '/^\s*$|^\s*#/d' /data/homeserver.yaml
sed -i -E '/^\s*$|^\s*#/d' /data/homeserver.yaml.tmpl

# Replace all variables using environment variables
yq -i '(.. | select(tag == "!!str")) |= envsubst' /data/homeserver.yaml.tmpl

mv /data/homeserver.yaml.tmpl /data/homeserver.yaml

echo "Creating signing key"
# Create sigingkey from env variable
rm /data/chat.faktenforum.org.signing.key
echo ${SIGNING_KEY} > /data/chat.faktenforum.org.signing.key

echo "Creating appservices directory"
# Create appservices directory
mkdir -p /data/appservices

echo "Creating application service registration file"
# Generate a simple application service registration file
cat > /data/appservices/migration_service.yaml << EOF
id: "migration_service"
url: "http://localhost"  # This can be any value since we won't use it
as_token: "${AS_TOKEN}"
hs_token: "${HS_TOKEN}"
sender_localpart: "migrator"
namespaces:
  users:
    - exclusive: false   # Set to false to allow regular user creation
      regex: ".*"        # Match all users for migration
  aliases: []
  rooms: []
protocols: []
rate_limited: false
EOF


