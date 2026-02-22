#!/usr/bin/env bash
# Import Strapi data using the official strapi import command.
# Restores config, entities, links, assets (uploads), schemas from a .tar export.
# WARNING: Deletes all existing data before import.
# Run from project root. Requires running postgres + backend containers.
#
# With docker-compose.prod.yml: uses --exclude files (avoids "backup folder" permission
# error), then extracts assets from the tar and copies them into the prod volume.
#
# Usage:
#   ./scripts/import-strapi.sh <path-to-export.tar> [compose-file] [env-file]
#
# Examples:
#   ./scripts/import-strapi.sh exports/strapi-20260222-181028/strapi-export-20260222-181028.tar
#   ./scripts/import-strapi.sh exports/strapi-*/strapi-export-*.tar docker-compose.prod.yml

set -e
cd "$(dirname "$0")/.."

if [[ $# -lt 1 || "$1" == "-h" || "$1" == "--help" ]]; then
  echo "Usage: $0 <path-to-export.tar> [compose-file] [env-file]"
  echo ""
  echo "  path-to-export.tar  Path to strapi export .tar file (from strapi export)"
  echo "  compose-file       docker-compose.yml (default) or docker-compose.prod.yml"
  echo "  env-file           .env (default) or .env.prod"
  echo ""
  echo "WARNING: Import deletes all existing data including database and uploads."
  exit 1
fi

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

# Prod: Strapi import fails with "backup folder for assets could not be created" when
# public/uploads is a Docker volume. Workaround: import with --exclude files (skips that
# step), then extract assets from the tar and copy into the volume.
if [[ "$COMPOSE_FILE" == *prod* ]]; then
  USE_IMPORT_OVERRIDE=true
  IMPORT_EXCLUDE_FILES="--exclude files"
fi

run_import() {
  echo "→ Copying export file into container..."
  docker cp "$IMPORT_FILE" "${BACKEND_CONTAINER}:${CONTAINER_IMPORT_PATH}"

  echo "→ Running strapi import${IMPORT_EXCLUDE_FILES:+ (excluding files, will restore assets separately)}..."
  docker exec "$BACKEND_CONTAINER" npm run strapi import -- -f "$CONTAINER_IMPORT_PATH" --force ${IMPORT_EXCLUDE_FILES}

  docker exec "$BACKEND_CONTAINER" rm -f "$CONTAINER_IMPORT_PATH"
}

restore_assets_from_tar() {
  echo "→ Extracting assets from export and copying to prod volume..."
  ASSETS_TEMP="$(mktemp -d)"
  tar -xf "$IMPORT_FILE" -C "$ASSETS_TEMP" assets/uploads 2>/dev/null || true
  if [[ -d "$ASSETS_TEMP/assets/uploads" ]]; then
    docker run --rm \
      -v "$ASSETS_TEMP/assets/uploads:/src:ro" \
      -v "${UPLOADS_VOLUME}:/dest" \
      alpine sh -c "rm -rf /dest/* /dest/.[!.]* 2>/dev/null; cp -a /src/. /dest/"
  fi
  rm -rf "$ASSETS_TEMP"
}

if [[ "$USE_IMPORT_OVERRIDE" == true ]]; then
  if ! docker ps --format '{{.Names}}' | grep -q "^${BACKEND_CONTAINER}$"; then
    echo "ERROR: Backend container '$BACKEND_CONTAINER' is not running."
    echo "       Start it with: docker compose -f $COMPOSE_FILE up -d postgres backend"
    exit 1
  fi
  echo "→ Prod mode: importing with --exclude files (workaround for volume permission error)"
  run_import
  restore_assets_from_tar
else
  if ! docker ps --format '{{.Names}}' | grep -q "^${BACKEND_CONTAINER}$"; then
    echo "ERROR: Backend container '$BACKEND_CONTAINER' is not running."
    echo "       Start it with: docker compose -f $COMPOSE_FILE up -d postgres backend"
    exit 1
  fi
  run_import
fi

echo ""
echo "Done. Strapi data imported from $IMPORT_FILE"
