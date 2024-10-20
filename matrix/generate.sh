#!/bin/bash

# Generate basic config (what the original entrypoint did)


cp /config/homeserver.yaml.tmpl /data/
cp /config/chat.faktenforum.log.config /data/
rm /data/homeserver.yaml

/start.py generate
# Strip all comments and blank lines from input files
sed -i -E '/^\s*$|^\s*#/d' /data/homeserver.yaml
sed -i -E '/^\s*$|^\s*#/d' /data/homeserver.yaml.tmpl

# Delete conflicting keys and arrays from basic config
yq -i 'del(.listeners, .configbase, .trusted_key_servers)' /data/homeserver.yaml

# Merge and sort the input files alphabetically
yq -i '. *= load("/data/homeserver.yaml") | sort_keys(..)' /data/homeserver.yaml.tmpl

# Replace all variables using environment variables
yq -i '(.. | select(tag == "!!str")) |= envsubst' /data/homeserver.yaml.tmpl

mv /data/homeserver.yaml.tmpl /data/homeserver.yaml


# Create sigingkey from env variable
rm /data/chat.faktenforum.org.signing.key
echo ${SIGNING_KEY} > /data/chat.faktenforum.org.signing.key


