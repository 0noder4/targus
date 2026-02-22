#!/usr/bin/env bash
# Build production images and push to registry.
# Usage: ./scripts/publish-prod.sh [compose-file] [env-file]
# Requires: docker login to registry (e.g. docker login)
# Defaults: docker-compose.prod.yml, .env (or .env.prod if it exists)

set -e
cd "$(dirname "$0")/.."
COMPOSE_FILE="${1:-docker-compose.prod.yml}"
ENV_FILE="${2:-.env}"
[[ -z "$2" && -f .env.prod ]] && ENV_FILE=".env.prod"

# Image names from docker-compose.prod.yml (override via env if needed)
REGISTRY_IMAGE="${REGISTRY_IMAGE:-0noder4/targus}"
BACKEND_TAG="${BACKEND_TAG:-backend_2.0}"
FRONTEND_TAG="${FRONTEND_TAG:-frontend_5.0}"

echo "Building production images..."
./scripts/build-prod.sh "$COMPOSE_FILE" "$ENV_FILE"

echo "Pushing backend image..."
docker push "${REGISTRY_IMAGE}:${BACKEND_TAG}"

echo "Pushing frontend image..."
docker push "${REGISTRY_IMAGE}:${FRONTEND_TAG}"

echo "Done. Images pushed:"
echo "  - ${REGISTRY_IMAGE}:${BACKEND_TAG}"
echo "  - ${REGISTRY_IMAGE}:${FRONTEND_TAG}"
