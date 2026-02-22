#!/usr/bin/env bash
# Export Strapi data using the official strapi export command.
# Creates a .tar archive with config, entities, links, assets (uploads), schemas.
# Run from project root. Requires running postgres + backend containers.
#
# Usage:
#   ./scripts/export-strapi.sh [compose-file] [env-file]
#
# Examples:
#   ./scripts/export-strapi.sh                           # uses docker-compose.yml, .env
#   ./scripts/export-strapi.sh docker-compose.prod.yml   # export from production stack

set -e
cd "$(dirname "$0")/.."

COMPOSE_FILE="${1:-docker-compose.yml}"
ENV_FILE="${2:-.env}"
if [[ "$2" == "" && -f .env.prod && "$1" == *prod* ]]; then
  ENV_FILE=".env.prod"
fi

TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
OUTPUT_DIR="exports/strapi-${TIMESTAMP}"
EXPORT_NAME="strapi-export-${TIMESTAMP}"

echo "→ Using compose: $COMPOSE_FILE, env: $ENV_FILE"
source "$ENV_FILE" 2>/dev/null || true

PROJECT_NAME="${PROJECT_NAME:-targus}"
BACKEND_CONTAINER="${PROJECT_NAME}_backend"

echo "→ Running strapi export in backend container..."
if ! docker ps --format '{{.Names}}' | grep -q "^${BACKEND_CONTAINER}$"; then
  echo "ERROR: Backend container '$BACKEND_CONTAINER' is not running."
  echo "       Start it with: docker compose -f $COMPOSE_FILE up -d postgres backend"
  exit 1
fi

# Run strapi export inside the container (--no-encrypt --no-compress for plain .tar)
docker exec "$BACKEND_CONTAINER" npm run strapi export -- --no-encrypt --no-compress -f "$EXPORT_NAME"

# Copy the .tar file from container to local filesystem
mkdir -p "$OUTPUT_DIR"
docker cp "${BACKEND_CONTAINER}:/opt/app/${EXPORT_NAME}.tar" "$OUTPUT_DIR/"

echo ""
echo "Done. Exported to $OUTPUT_DIR/${EXPORT_NAME}.tar"
echo "  Contents: config, entities, links, assets (uploads), schemas, metadata.json"
echo ""
echo "To restore: strapi import -f $OUTPUT_DIR/${EXPORT_NAME}.tar"
echo "To inspect: tar -xf $OUTPUT_DIR/${EXPORT_NAME}.tar"
