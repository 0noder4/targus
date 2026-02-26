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

echo "Starting postgres"

docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d postgres

echo "Building backend..."
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" build backend

echo "Starting backend..."
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d backend

echo "Waiting for backend..."
until docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" exec -T backend node -e "require('http').get('http://localhost:1337/', r => process.exit(r.statusCode && r.statusCode < 500 ? 0 : 1)).on('error', () => process.exit(1))" 2>/dev/null; do
  sleep 5
done

echo "Building frontend..."
DOCKER_BUILDKIT=0 docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" build --no-cache frontend

echo "Restarting all services..."
docker compose  --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d

echo "Done."
