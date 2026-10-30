---
applyTo: "packages/utils/**"
---

# Utils package

Standalone utility-first CSS (`k-d-flex`, `k-mt-4`, `k-text-center`, …). Works with or without a Kendo theme.

## Structure

```
packages/utils/scss/
├── index.scss / all.scss      # Import-only / CSS-emitting entries
├── _variables.scss            # $kendo-utils config maps
├── _mixins.scss               # generate-utils() and helpers
└── {category}/                # accessibility, background, border, flex-grid, layout, sizing, spacing, typography, …
    ├── index.scss             # @mixin kendo-utils--{category}() including every part
    └── _{part}.scss           # @mixin kendo-utils--{category}--{part}()
```

## Rules

- Class pattern: `k-{abbreviation}-{modifier}` (e.g. `m`/`p` = margin/padding, `t`/`x`/`y` = side/axis, number = spacing step).
- Generate classes with `generate-utils( {abbr}, {property}, {values-map}, … )` inside `@include import-once("utils-{category}-{part}")` — follow an existing part such as `spacing/_margin.scss`.
- Value maps come from `$kendo-utils` in `_variables.scss`; spacing values reference the spacing scale via `$css-var: "spacing"`.
- A new part needs a `_{part}.scss`, an `@use` and `@include` in its category `index.scss`, and must be reachable from `scss/index.scss`.
