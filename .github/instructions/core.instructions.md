---
applyTo: "packages/core/**"
---

# Core package

Core is the design-system skeleton shared by every theme: token modules, functions, mixins, and per-component SCSS with **no concrete values**. Themes supply the values.

## Structure

```
packages/core/scss/
├── index.scss                 # Import-only entry (@forward of all modules)
├── all.scss                   # CSS-emitting entry
├── {module}/                  # spacing, color-system, typography, elevation, border-radii, motion, z-index
├── functions/  mixins/
└── components/{component}/
    ├── _variables.scss        # null declarations
    ├── _layout.scss           # @mixin kendo-{component}--layout-base()
    └── _theme.scss            # @mixin kendo-{component}--theme-base()
```

Core components have no `_index.scss` — each theme wires them up.

## Rules

- Component variables are `$kendo-{component}-*: null !default;`. Never assign concrete values in core.
- No SassDoc on core component variables — themes document them. Exceptions: the `$kendo-{component}-sizes` and `$kendo-{component}-theme-colors` maps.
- `_layout.scss` = structure (display, spacing, sizing, typography metrics). `_theme.scss` = visuals (color, background, border-color, shadow). Both reference only `$kendo-*` variables.
- State selectors pair the pseudo-class with the state class: `&:hover, &.k-hover { … }`.
- Every public `k-*` function gets SassDoc with `@group functions` (unit tests read this metadata):

```scss
/// Returns a CSS variable reference for a spacing step.
/// @param {Number | String} $step - The spacing step key from $kendo-spacing.
/// @return {String} CSS variable reference for the given spacing step.
/// @group functions
@function k-spacing($step) { … }
```

- Token functions (`k-spacing()`, `k-color()`, `k-elevation()`, `k-border-radius()`, …) are used across every theme — don't change their signatures.

## Workflows

Use the `manage-themes` skill for variables, styles, foundation tokens, and new components.
