# Kendo Themes Monorepo

SCSS themes for all Kendo UI products (80+ components). Nx monorepo built with dart-sass. Check `package.json` files for tooling and versions.

## Packages

| Package | Purpose |
|---------|---------|
| **core** | Design-system skeleton: token modules, functions, mixins, and per-component SCSS with no concrete values |
| **meridian** | Recommended default theme for Kendo and Telerik products |
| **default** | Default Kendo theme (maintenance mode) |
| **bootstrap**, **material**, **classic**, **fluent** | Theme implementations |
| **utils** | Standalone utility-first CSS classes |
| **html** | React/TSX specs that render each component's HTML; drive visual tests, a11y checks, and docs |

Other top-level folders: `scripts/` (build tooling), `units/` (Vitest unit tests, one folder per theme), `tests/` (generated visual test output — never edit), `integrations/` (bundler tests).

## Skills

Use the skills in `.github/skills/` for multi-step work:

- `manage-themes` — all SCSS (core + themes): variables, styles, design tokens, theme packages/swatches, and the end-to-end component workflow
- `manage-specs` — HTML package: specs, templates, visual tests, and accessibility
- `audit-design-tokens` — find hardcoded values that should use tokens
- `write-pr-description` — PR descriptions for the current branch

## Package rules

**core** (`packages/core/scss/`)
- Component variables are `$kendo-{component}-*: null !default;` — never concrete values. No SassDoc on them, except the `-sizes` / `-theme-colors` maps.
- Components live in `components/{component}/` with `_variables.scss`, `_layout.scss` (`kendo-{component}--layout-base()`), `_theme.scss` (`kendo-{component}--theme-base()`); no `_index.scss`.
- Every public `k-*` function has SassDoc with `@group functions` (unit tests read it). Don't change token function signatures.

**Themes** (`packages/{theme}/scss/{component}/` — no `components/` level)
- Every variable has `!default`, SassDoc (`/// The {property} of the {Component}.` + `/// @group {component}`), and an entry in the `@forward … with ( … )` map at the bottom of the file — a missing entry silently leaves core's value `null`.
- Use token functions for values: `k-spacing()`, `k-color()`, `k-border-radius()`, `k-elevation()`.
- Fluent wraps every value: `var( --kendo-{variable-name}, {value} )`.
- `scss/index.scss` lists components in dependency order — never alphabetize.

**Both:** state selectors pair pseudo-class and class (`&:hover, &.k-hover`); classes are `k-` prefixed BEM-like; wrap output in `@include import-once()`.

**html** (`packages/html/src/{component}/`)
- Edit only `.tsx`/`.ts` sources. Output is static — no hooks, handlers, or side effects; states are boolean props that add `k-*` classes.
- Option values (`Size`, `FillMode`, `ThemeColor`, `Roundness`) must exist in the theme SCSS.
- ARIA is documented with `@aria`/`@ux` JSDoc before the component and `@keyboard`/`@see` before `export default`; target WCAG 2.2 AA with 0 axe violations.

**utils** (`packages/utils/scss/{category}/`)
- Classes are `k-{abbreviation}-{modifier}` (e.g. `k-mt-4`), generated with `generate-utils()` inside `import-once`; follow `spacing/_margin.scss`.

## Commands

```bash
npm ci                      # Install
npm run sass                # Compile all themes → packages/*/dist/all.css
npm run sass:dist           # Compile all swatches
npm run docs                # Generate SassDoc docs (run after changing SCSS variables)
npm run lint                # ESLint + Stylelint
npm run test:units          # Vitest unit tests (run `npm run docs` first)
npm run test:a11y [comp]    # axe-core WCAG validation
npm run test:contrast       # Color contrast tests
npm start                   # Dev server on localhost:3000
npm run typecheck --prefix packages/html
npm run build:tests --prefix packages/html
```

## Conventions

- Conventional Commits: `type(scope): summary`, imperative mood, ~80 chars max, `BREAKING CHANGE:` in body when applicable.
- Regenerated docs (`packages/*/docs/*.md` from `npm run docs`) go in a separate `chore: regen docs` commit.
- Copilot coding agent: use `chore(plan): initial plan for #{issue-number}` for planning commits, `chore(deps): …` for dependency updates, `chore(format): …` for lint-only changes.
- New component features need HTML tests in `packages/html/src/{component}/tests/`; variable customization needs unit tests in `units/{theme}/`.
