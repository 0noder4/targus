#!/usr/bin/env bash
# Export Strapi data using the official strapi export command.
#
# Usage:
#   ./scripts/export-strapi.sh [compose-file] [env-file]

COMPOSE_FILE="${1:-docker-compose.yml}"
ENV_FILE="${2:-.env}"
if [[ "$2" == "" && -f .env.prod && "$1" == *prod* ]]; then
  ENV_FILE=".env.prod"
fi

TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
OUTPUT_DIR="exports/strapi-${TIMESTAMP}"
EXPORT_NAME="strapi-export-${TIMESTAMP}"

echo "Using compose: $COMPOSE_FILE, env: $ENV_FILE"
source "$ENV_FILE" 2>/dev/null || true

PROJECT_NAME="${PROJECT_NAME:-targus}"
BACKEND_CONTAINER="${PROJECT_NAME}_backend"

echo "Running strapi export in backend container..."
if ! docker ps --format '{{.Names}}' | grep -q "^${BACKEND_CONTAINER}$"; then
  echo "Backend container '$BACKEND_CONTAINER' is not running."
  echo "Starting it..."
  docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up -d postgres backend
fi

docker exec "$BACKEND_CONTAINER" npm run strapi export -- --no-encrypt --no-compress -f "$EXPORT_NAME"

mkdir -p "$OUTPUT_DIR"
docker cp "${BACKEND_CONTAINER}:/opt/app/${EXPORT_NAME}.tar" "$OUTPUT_DIR/"

echo ""
echo "Done. Exported to $OUTPUT_DIR/${EXPORT_NAME}.tar"
echo "To restore: strapi import use ./scripts/import-strapi.sh $OUTPUT_DIR/${EXPORT_NAME}.tar"
