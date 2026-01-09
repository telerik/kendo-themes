# Dependency Management Policy

> Last updated: 2026-01-09

## Overview

This document defines the dependency management strategy for the kendo-themes monorepo, ensuring reproducible builds and controlled upgrades.

## Lockfile Strategy

| Aspect | Policy |
|--------|--------|
| **Lockfile** | `package-lock.json` (lockfileVersion 3) |
| **Committed** | Yes — ensures reproducible CI/CD builds |
| **Install command** | `npm ci` (uses lockfile exactly) |

The lockfile pins exact versions of all direct and transitive dependencies. Using `npm ci` guarantees identical `node_modules` across all environments.

## Critical Dependencies

Dependencies marked as **critical** have direct impact on build output or developer workflow. Changes require extra scrutiny.

### Build Pipeline (Critical)

| Package | Role | Current Range |
|---------|------|---------------|
| `sass` | SCSS compilation | `^1.93.3` |
| `sass-embedded` | Fast SCSS compilation | `^1.93.3` |
| `gulp` | Build orchestration | `^5.0.0` |
| `postcss` | CSS post-processing | `^8.4.47` |
| `autoprefixer` | Browser prefix insertion | `^10.4.20` |
| `esbuild` | JS/TS bundling | `^0.27.0` |

### Monorepo Management (Critical)

| Package | Role | Current Range |
|---------|------|---------------|
| `lerna` | Release management | `^9.0.0` |
| `nx` | Task orchestration | `^22.0.1` |

### Testing Infrastructure (Critical)

| Package | Role | Current Range |
|---------|------|---------------|
| `jest` | Unit test runner | `^30.0.0` |
| `@progress/kendo-e2e` | Visual regression | `^4.0.0` |
| `stylelint` | SCSS linting | `^16.8.1` |
| `eslint` | JS/TS linting | `^9.6.0` |

### Runtime Dependencies (packages/html)

| Package | Role | Current Range |
|---------|------|---------------|
| `@progress/kendo-svg-icons` | SVG icon library | `^4.5.0` |
| `react` (peer) | React framework | `^17 \|\| ^18 \|\| ^19` |

## Upgrade Policy

### Routine Updates

1. **Patch versions**: May be applied via `npm update` after local verification
2. **Minor versions**: Require `npm run sass && npm run test:units` to pass
3. **Major versions**: Require team review and full CI validation

### Upgrade Workflow

```bash
# 1. Create feature branch
git checkout -b chore/deps-update

# 2. Update specific package
npm update <package-name>

# 3. Verify build
npm run sass
npm run lint
npm run test:units

# 4. Commit lockfile changes
git add package-lock.json
git commit -m "chore(deps): update <package-name> to x.y.z"
```

### Prohibited Actions

- **Do not** delete `package-lock.json` to resolve conflicts
- **Do not** use `npm install` in CI (use `npm ci`)
- **Do not** upgrade critical deps without running full test suite

## Engine Constraints

```json
{
  "engines": {
    "node": "^22"
  }
}
```

Node.js 22.x is required. This is enforced in `package.json`.

## Workspace Structure

This monorepo uses npm workspaces defined in root `package.json`:

```
packages/
├── core/       # Design system foundation (no deps)
├── default/    # Default theme (no deps)
├── bootstrap/  # Bootstrap theme (no deps)
├── classic/    # Classic theme (no deps)
├── material/   # Material theme (no deps)
├── fluent/     # Fluent theme (no deps)
├── utils/      # Utility classes (no deps)
└── html/       # React component specs
    └── dependencies:
        └── @progress/kendo-svg-icons
```

Theme packages have **no runtime dependencies** — they produce CSS output only.

## Verification Commands

```bash
# Verify lockfile integrity
npm ci

# Verify build pipeline
npm run sass

# Verify tests
npm run test:units

# Verify linting
npm run lint
```

## Troubleshooting

### "npm ci" fails with lockfile mismatch

```bash
# Regenerate lockfile from package.json (local only)
rm -rf node_modules package-lock.json
npm install
# Then commit the updated lockfile
```

### Conflicting peer dependencies

Check `npm ls <package>` to identify version conflicts, then align ranges in the relevant `package.json` files.
