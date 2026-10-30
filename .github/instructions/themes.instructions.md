---
applyTo: "packages/{default,classic,material,fluent,bootstrap,meridian}/**"
---

# Theme packages

`default`, `classic`, `material`, `fluent`, `bootstrap`, `meridian`. Themes give core's null variables concrete values and wire each component into the theme. Meridian is the recommended default; `default` is in maintenance mode.

## Structure

```
packages/{theme}/
├── scss/
│   ├── all.scss               # Wrapper: @forward/@use index, @include kendo-theme--styles()
│   ├── index.scss             # Every component, in dependency order (never alphabetize)
│   ├── _variables.scss        # Theme-level globals only
│   ├── core/_index.scss       # Re-exports core + theme globals
│   └── {component}/           # No `components/` level, unlike core
│       ├── _variables.scss    # Concrete values + @forward … with ( … ) to core
│       ├── _layout.scss       # Usually just @include kendo-{component}--layout-base()
│       ├── _theme.scss        # Usually just @include kendo-{component}--theme-base()
│       └── _index.scss        # Dependencies, @forward variables, kendo-{component}--styles()
└── lib/swatches/*.json        # Color swatches (values in groups[].colorsMap)
```

## Rules

- Every variable uses `!default` and has SassDoc: `/// The {property} of the {Component}.` + `/// @group {component}` (`default-*` variables also get `/// @role default`).
- Every variable a theme declares must also appear in the `@forward "@progress/kendo-theme-core/scss/components/{component}/_variables.scss" with ( … )` map at the bottom of the file — a missing entry silently leaves core's value `null`.
- Use token functions for values: `k-spacing(n)`, `k-color(token)`, `k-border-radius(key)`, `k-elevation(n)`.
- **Fluent:** wrap every value in a CSS custom property: `var( --kendo-{variable-name}, {value} )`.
- Override layout/theme mixins only for genuinely theme-specific structure; otherwise call the core `-base` mixin.

## Workflows

Use the `manage-themes` skill. Run `npm run docs` after changing variables and commit the regenerated docs separately as `chore: regen docs`.
