#!/usr/bin/env bash
# Import Strapi data using the official strapi import command.
# WARNING: Deletes all existing data before import.
#
# Usage:
#   ./scripts/import-strapi.sh <path-to-export.tar> [compose-file] [env-file]
set -e
cd "$(dirname "$0")/.."

IMPORT_FILE="$1"
COMPOSE_FILE="${2:-docker-compose.yml}"
ENV_FILE="${3:-.env}"
if [[ -z "$3" && -f .env.prod && "$2" == *prod* ]]; then
  ENV_FILE=".env.prod"
fi

# Resolve path relative to project root
if [[ ! "$IMPORT_FILE" = /* ]]; then
  IMPORT_FILE="$(pwd)/$IMPORT_FILE"
fi
if [[ ! -f "$IMPORT_FILE" ]]; then
  echo "ERROR: File not found: $1"
  exit 1
fi

echo "→ Using compose: $COMPOSE_FILE, env: $ENV_FILE"
source "$ENV_FILE" 2>/dev/null || true

PROJECT_NAME="${PROJECT_NAME:-targus}"
BACKEND_CONTAINER="${PROJECT_NAME}_backend"
UPLOADS_VOLUME="${PROJECT_NAME}_backend_uploads"
CONTAINER_IMPORT_PATH="/opt/app/strapi-import.tar"
USE_IMPORT_OVERRIDE=false

echo "Copying export file into container..."
docker cp "$IMPORT_FILE" "${BACKEND_CONTAINER}:${CONTAINER_IMPORT_PATH}"

echo "Running strapi import..."
docker exec "$BACKEND_CONTAINER" npm run strapi import -- -f "$CONTAINER_IMPORT_PATH"}

echo "Cleaning data..."
docker exec "$BACKEND_CONTAINER" rm -f "$CONTAINER_IMPORT_PATH"

echo ""
echo "Done. Strapi data imported from $IMPORT_FILE"
