# Kendo Themes Monorepo

SCSS themes for all Kendo UI products (80+ components). Nx monorepo built with dart-sass. Check `package.json` files for tooling and versions.

## Packages

| Package | Purpose | Path instructions |
|---------|---------|-------------------|
| **core** | Design system foundation: null variables, mixins, functions, component skeletons | `.github/instructions/core.instructions.md` |
| **default** | Default Kendo theme (maintenance mode) | `.github/instructions/themes.instructions.md` |
| **bootstrap**, **material**, **classic**, **fluent** | Theme implementations | `.github/instructions/themes.instructions.md` |
| **meridian** | Recommended default theme for Kendo and Telerik products | `.github/instructions/themes.instructions.md` |
| **utils** | Standalone utility-first CSS classes | `.github/instructions/utils.instructions.md` |
| **html** | React/TSX component specs, templates, and visual tests | `.github/instructions/html.instructions.md` |

Other top-level folders: `scripts/` (build tooling), `units/` (Jest tests), `tests/` (visual test output), `integrations/` (bundler tests).

## Workflows

Use the skills in `.github/skills/` for multi-step work:

- `manage-themes` — all SCSS (core + themes): variables, styles, design tokens, theme packages/swatches, and the end-to-end component workflow
- `manage-specs` — HTML package: specs, templates, visual tests, and accessibility
- `audit-design-tokens` — find hardcoded values that should use tokens
- `component-pr-description` — PR descriptions for component changes

## Commands

```bash
npm ci                      # Install
npm run sass                # Compile all themes → packages/*/dist/all.css
npm run sass:dist           # Compile all swatches
npm run docs                # Generate SassDoc docs (run after changing SCSS variables)
npm run lint                # ESLint + Stylelint
npm run test:units          # Jest unit tests (run `npm run docs` first)
npm run test:a11y [comp]    # axe-core WCAG validation
npm run test:contrast       # Color contrast tests
npm start                   # Dev server on localhost:3000
```

## Conventions

- Conventional Commits: `type(scope): summary`, imperative mood, ~80 chars max, `BREAKING CHANGE:` in body when applicable.
- Regenerated docs (`packages/*/docs/*.md` from `npm run docs`) go in a separate `chore: regen docs` commit.
- Copilot coding agent: use `chore(plan): initial plan for #{issue-number}` for planning commits, `chore(deps): …` for dependency updates, `chore(format): …` for lint-only changes.
- SCSS: dart-sass syntax only; `k-` prefixed BEM-like classes; `!default` on every customizable variable; explicit dependency imports in `_index.scss`; wrap output in `@include import-once()`.
- Accessibility: ARIA is documented with `@aria`/`@keyboard`/`@ux`/`@see` JSDoc annotations in `.spec.tsx` files and validated on the `default-ocean-blue-a11y` swatch.
- New component features need HTML tests in `packages/html/src/[component]/tests/`; variable customization needs unit tests in `units/`.
