---
name: scss-module-author
description: "Creates a new non-component SCSS partial or module: correct directory placement in core/utils, manifest registration in index.scss, wiring into the existing mixin/function library, and correct naming conventions. Use when adding design-system scale modules, utility partials, mixins, or function files. Not for component-specific SCSS (use component-generator) or single variables (use token-scaffolder)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: SCSS Module Author (C1)

Create a **new SCSS partial** following the repo's architecture: correct placement, registration, and use of the existing infrastructure.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md`
2. `.github/instructions/core.instructions.md`
3. An existing design-system module as reference:
   - `packages/core/scss/spacing/` — for token/scale modules
   - `packages/core/scss/mixins/` — for mixin modules
   - `packages/core/scss/elevation/` — for another scale module

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `MODULE_TYPE` | ✅ | `design-system` (tokens/scale), `mixin`, `function`, or `utility` |
| `MODULE_NAME` | ✅ | kebab-case name (e.g., `motion`, `z-index`, `filters`) |
| `DESCRIPTION` | ✅ | What this module provides |
| `PACKAGE` | ⬜ | `core`, `default`, or `utils`. Default: `core` |

---

## Step-by-Step Workflow

### Step 1 — Choose Directory and File Structure

**Design-system module** (tokens, scale, palette) in `packages/core/scss/`:
```
scss/[module-name]/
├── index.scss          # @forward variables, @use, expose mixin
├── _constants.scss     # Static, non-overrideable values (optional)
└── _functions.scss     # Helper functions (optional)
```

**Mixin module** in `packages/core/scss/mixins/`:
```
mixins/
└── _[mixin-name].scss  # One file per mixin group
```

Then update `packages/core/scss/mixins/index.scss` to `@forward` the new file.

**Function module** in `packages/core/scss/functions/`:
```
functions/
└── _[function-name].scss
```

Then update `packages/core/scss/functions/index.scss`.

**Utility module** in `packages/utils/`:
```
scss/[category]/
└── _[utility-name].scss
```

### Step 2 — Write the Module

**Design-system module example (`z-index`):**

```scss
// z-index/index.scss

// Z-Index Scale
$kendo-zindex-popup: null !default;
$kendo-zindex-window: null !default;
$kendo-zindex-tooltip: null !default;
$kendo-zindex-loading-mask: null !default;

@mixin kendo-z-index--styles() {
    :root {
        --kendo-zindex-popup: #{$kendo-zindex-popup};
        --kendo-zindex-window: #{$kendo-zindex-window};
    }
}
```

**Mixin module example:**

```scss
// mixins/_color-utils.scss

/// Apply fill (color, bg, border) shorthand
/// @param {color} $color - Text color
/// @param {color} $bg - Background color
/// @param {color} $border - Border color
@mixin fill($color: null, $bg: null, $border: null) {
    @if $color { color: $color; }
    @if $bg { background-color: $bg; }
    @if $border { border-color: $border; }
}
```

**Function module example:**

```scss
// functions/_k-spacing.scss

/// Convert spacing index to rem value
/// @param {number} $index - Spacing step (0-32)
/// @return {string} - rem value
@function k-spacing($index) {
    @return calc(#{$index} * 0.25rem);
}
```

### Step 3 — Register the Module

**For core design-system modules:**

In `packages/core/scss/index.scss`, add:
```scss
@forward "./[module-name]/index.scss";
@use "./[module-name]/index.scss" as *;
```

And inside `@mixin core-styles()`, add:
```scss
@include kendo-[module]--styles();
```

**For mixin/function modules:**

In `packages/core/scss/mixins/index.scss`:
```scss
@forward "./_[mixin-name].scss";
```

**For utility modules (`packages/utils/`):**

In `packages/utils/scss/index.scss`, add:
```scss
@forward "./[category]/_[utility-name].scss";
```

### Step 4 — Override in Theme Packages (if design-system module)

If the new module has `null !default` variables (design-system pattern), add overrides in each theme's module folder.

For core modules that are referenced by themes via `@progress/kendo-theme-core/...`, each theme needs to `@forward` with its own values:

```scss
// packages/default/scss/[module-name]/index.scss
@forward "@progress/kendo-theme-core/scss/[module-name]/index.scss" with (
    $kendo-[module]-var: [theme-value],
);
```

---

## Post-Generation Validation Checklist

- [ ] Module file placed in the correct directory
- [ ] `index.scss` in the relevant manifest (`@forward`/`@use` added)
- [ ] Design-system modules registered in `@mixin core-styles()`
- [ ] Mixin/function modules accessible via `@use "../../mixins/index.scss" as *`
- [ ] No name conflicts with existing mixins/functions (`grep` to verify)
- [ ] SassDoc present on public functions/mixins

## Verify

```bash
npm run sass          # No errors
npm run lint:styles   # Stylelint clean
npm run docs          # SassDoc generates
```

---
