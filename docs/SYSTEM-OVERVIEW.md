# Kendo Themes System Overview

SCSS theme monorepo for 80+ Kendo UI components across all Kendo products.

## Tech Stack

- **SCSS** (dart-sass) — theme source
- **TypeScript/React** — HTML test specs
- **Nx + Lerna** — monorepo orchestration
- **Jest** — unit tests
- **SassDoc** — documentation

## Packages

| Package | Purpose |
|---------|---------|
| `core` | Design foundation — variables, mixins, component skeletons |
| `default` | Default theme |
| `bootstrap` | Bootstrap theme |
| `material` | Material Design theme |
| `classic` | Classic theme |
| `fluent` | Fluent theme |
| `utils` | Standalone utility CSS classes |
| `html` | React component specs for visual testing |

## Key Commands

```bash
npm ci                  # Install
npm run sass            # Compile themes → packages/*/dist/all.css
npm start               # Dev server (localhost:3000)
npm run lint            # ESLint + Stylelint
npm run docs            # Generate SassDoc
npm run test:units      # Jest tests (run docs first)
```

## Entry Points

- **Theme entry**: `packages/*/scss/_index.scss`
- **Build output**: `packages/*/dist/all.css`
- **Dev server**: `scripts/start-dev-server.js`

## Package Dependencies

```
core ← default, bootstrap, material, classic, fluent
utils (standalone)
html (standalone test specs)
```

## Lowest-Risk Module

**`packages/utils`** — standalone utility classes with no theme dependencies.
