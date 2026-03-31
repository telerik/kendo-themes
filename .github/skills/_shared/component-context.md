# Shared Component Context

Common conventions, paths, and rules used by `component` and the `scss-*` / `html-*` sub-skills.

## Naming Derivation

From a component name (e.g., `smart-badge`), derive all names used across the monorepo:

| Derived Name | Example |
|-------------|---------|
| SCSS folder name | `smart-badge` |
| SCSS mixin prefix | `kendo-smart-badge` |
| CSS class | `k-smart-badge` |
| SCSS variable prefix | `$kendo-smart-badge-` |
| TS constant prefix | `SMART_BADGE` |
| TypeScript component name | `SmartBadge` |
| Module/folder name string | `"smart-badge"` |

## Package Paths

| Package | Variables path | Layout/theme path |
|---------|---------------|-------------------|
| **core** | `packages/core/scss/components/{component}/_variables.scss` | `packages/core/scss/components/{component}/_layout.scss`, `_theme.scss` |
| **default** | `packages/default/scss/{component}/_variables.scss` | `packages/default/scss/{component}/_layout.scss`, `_theme.scss` |
| **classic** | `packages/classic/scss/{component}/_variables.scss` | same pattern |
| **material** | `packages/material/scss/{component}/_variables.scss` | same pattern |
| **fluent** | `packages/fluent/scss/{component}/_variables.scss` | same pattern |
| **bootstrap** | `packages/bootstrap/scss/{component}/_variables.scss` | same pattern |
| **HTML spec** | `packages/html/src/{component}/{component}.spec.tsx` | - |
| **HTML tests** | `packages/html/src/{component}/tests/*.tsx` | - |

**Key difference:** Core uses `packages/core/scss/components/{component}/`, themes use `packages/{theme}/scss/{component}/` (no `components/` subdirectory).

## Theme-Specific Value Conventions

Use these patterns when assigning values per theme:

| Theme | Font family | Colors | Spacing | Borders |
|-------|-----------|--------|---------|---------|
| **default** | `var( --kendo-font-family, inherit )` | `k-color({token})` | `k-spacing({n})` | `1px` |
| **classic** | `var( --kendo-font-family, inherit )` | `k-color({token})` | `k-spacing({n})` | `1px` |
| **material** | `var( --kendo-font-family, inherit )` | `k-color({token})` | `k-spacing({n})` | `0` or `1px` |
| **fluent** | `var( --kendo-{component}-font-family, var( --kendo-font-family, inherit ) )` | `var( --kendo-{component}-bg, #{k-color(surface)} )` | `var( --kendo-{component}-padding-x, #{k-spacing(2)} )` | `var( --kendo-{component}-border-width, 1px )` |
| **bootstrap** | `var( --kendo-font-family, inherit )` | `k-color({token})` | `k-spacing({n})` | `1px` |

**Fluent theme special rule:** Every variable value in Fluent must be wrapped in `var(--kendo-{var-name}, {fallback})`.

## Reference Components

When working on a component, find a reference of similar complexity in `packages/core/scss/components/`:

- **Simple:** `badge`, `chip`, `avatar`
- **Medium:** `button`, `card`, `tooltip`
- **Complex:** `grid`, `scheduler`, `editor`

## Validation Steps

Run in this order after making changes:

```bash
# 1. SCSS compiles cleanly
npm run sass 2>&1

# 2. No lint violations
npm run lint:styles 2>&1

# 3. HTML package type-checks
npm run typecheck --prefix packages/html 2>&1

# 4. HTML tests build
npm run build:tests --prefix packages/html 2>&1
```

Fix failures before proceeding to the next validation step.

## Common Gotchas

- **Core variables are always `null !default`** — never assign concrete values in core.
- **The `@forward` map must be complete** — every variable that core defines must appear in each theme's `@forward` map. Missing exports cause silent compilation issues where the variable stays `null`.
- **Fluent wraps every value** in `var(--kendo-{var-name}, {fallback})` — forgetting this breaks the Fluent CSS custom property system.
- **Component names in `@include import-once("...")` must be unique** across the entire theme.
- **BEM class names use the `k-` prefix** — `k-{component}`, `k-{component}-{element}`.
- **SassDoc is required** — every variable must have a `///` comment and `@group` annotation.
- **Test files need default exports** — `export default` is mandatory; `export const` won't be picked up by the build system.
- **Wrap test content in `<div id="test-area">`** — screenshot tools look for this ID.

## @forward Map Pattern

When adding or maintaining a theme's `@forward` map:

```scss
@forward "@progress/kendo-theme-core/scss/components/{component}/_variables.scss" with (
    $kendo-{component}-border-width: $kendo-{component}-border-width,
    $kendo-{component}-padding-x: $kendo-{component}-padding-x,
    $kendo-{component}-new-var: $kendo-{component}-new-var       // ← add alphabetically or grouped logically
);
```

The left side is the core variable name, the right side is the theme's local variable. They must match exactly.
