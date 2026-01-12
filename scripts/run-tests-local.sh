#!/usr/bin/env bash
# run-tests-local.sh — Run the full CI test suite locally
# Usage: ./scripts/run-tests-local.sh [--quick]
#   --quick  Skip integration tests (faster iteration)

set -euo pipefail

QUICK_MODE=false
if [[ "${1:-}" == "--quick" ]]; then
    QUICK_MODE=true
fi

echo "==> Installing dependencies..."
npm ci --no-audit --no-fund

echo "==> Generating docs (required for unit tests)..."
npm run docs

echo "==> Running linters..."
npm run lint

echo "==> Running unit tests..."
npm run test:units

if [[ "$QUICK_MODE" == false ]]; then
    echo "==> Running integration tests..."
    npm run test:integrations
else
    echo "==> Skipping integration tests (--quick mode)"
fi

echo ""
echo "✅ All tests passed!"
