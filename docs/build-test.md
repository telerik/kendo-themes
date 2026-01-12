# Build & Test Guide

Local development commands for the Kendo Themes monorepo.

## Prerequisites

```bash
npm ci
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run sass` | Compile all themes → `packages/*/dist/all.css` |
| `npm run sass:dist` | Compile all swatches → `{swatch}.css/scss` |
| `npm run docs` | Generate SassDoc documentation |
| `npm run build` | Build HTML components |
| `npm run build:tests` | Build HTML test components |

## Test Commands

| Command | Description |
|---------|-------------|
| `npm run test:units` | Run Jest unit tests |
| `npm run test:units:watch` | Run Jest in watch mode |
| `npm run test:integrations` | Test bundler compatibility (gulp, parcel, vite, webpack, esbuild) |
| `npm run test:create-screenshots` | Generate visual regression screenshots |
| `npm run test:contrast` | Accessibility contrast tests |
| `npm run test:html` | HTML component tests |

### Run Tests for a Specific Theme

```bash
cd units
npm run test:default
npm run test:bootstrap
npm run test:material
npm run test:classic
npm run test:fluent
```

## Linting

| Command | Description |
|---------|-------------|
| `npm run lint` | Run all linters |
| `npm run lint:scripts` | ESLint for JS/TS files |
| `npm run lint:styles` | Stylelint for SCSS files |

## Development Server

```bash
npm start   # Starts dev server on localhost:3000
```

## Caveats

1. **Unit tests require docs first** — Always run `npm run docs` before `npm run test:units`. Tests depend on generated SassDoc metadata.

2. **Integration tests install dependencies** — Running `npm run test:integrations` triggers `npm install` in each bundler subdirectory (`integrations/gulp`, `integrations/parcel`, etc.).

3. **Git hooks** — Husky runs linting automatically on staged files via `lint-staged`.

4. **Nx caching** — Build tasks use Nx for caching. Run `nx reset` if you encounter stale cache issues.

## Quick Start

```bash
npm ci              # Install dependencies
npm run docs        # Generate metadata (required for unit tests)
npm run test:units  # Run unit tests
```

## Local CI Test Script

Run the full CI test suite locally before pushing:

```bash
./scripts/run-tests-local.sh          # Full suite (lint, unit, integration)
./scripts/run-tests-local.sh --quick  # Skip integration tests for faster iteration
```

This script mirrors CI behavior: installs deps, generates docs, runs lints, then tests.

## Cleanup

| Command | Description |
|---------|-------------|
| `npm run clean:dist` | Remove all `dist` folders |
| `npm run clean:tests` | Clean test result files |
| `npm run clean` | Full cleanup (includes `node_modules`) |
