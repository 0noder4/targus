#!/usr/bin/env bash
# Build production images. Backend must be reachable during frontend build for static prerender.
# Usage: ./scripts/build-prod.sh [compose-file] [env-file]
# Defaults: docker-compose.prod.yml, .env (or .env.prod if it exists)

set -e
cd "$(dirname "$0")/.."
COMPOSE_FILE="${1:-docker-compose.prod.yml}"
ENV_FILE="${2:-.env}"
[[ -z "$2" && -f .env.prod ]] && ENV_FILE=".env.prod"

source "$ENV_FILE" 2>/dev/null || true
if [[ -z "${BACKEND_API_TOKEN:-}" ]]; then
  echo "ERROR: BACKEND_API_TOKEN not set. Create an API token in Strapi admin and add it to $ENV_FILE"
  exit 1
fi

echo "Starting postgres and backend..."
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d postgres backend

echo "Waiting for backend..."
until docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" exec -T backend node -e "require('http').get('http://localhost:1337/', r => process.exit(r.statusCode && r.statusCode < 500 ? 0 : 1)).on('error', () => process.exit(1))" 2>/dev/null; do
  sleep 3
done

echo "Building frontend..."
DOCKER_BUILDKIT=0 docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" build frontend

echo "Starting all services..."
docker compose  --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d

echo "Done."
