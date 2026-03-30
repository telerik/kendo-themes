---
name: manage-scss-styles
description: Create or update SCSS layout mixins, theme mixins, module entry points (_index.scss), and registration in theme entry points for a Kendo UI component. Covers the full component SCSS lifecycle — structural styles, visual styles, wiring, and registration. Use this skill when the user wants to change a component's CSS structure, add visual states, create the style skeleton for a new component, wire up dependencies, or register a component in a theme.
argument-hint: "[component] e.g. chip, button, tooltip"
---

# SCSS Styles

Create or update layout, theme, module, and registration files for a component in core and targeted themes.

Read [../_shared/component-context.md](../_shared/component-context.md) for naming conventions, theme paths, and common gotchas.

## When to use

When the user asks to:
- Change a component's CSS layout (e.g., "change chip from inline-flex to flex")
- Add visual styling for a new state (e.g., "add selected state styles to badge")
- Create layout/theme skeletons for a new component (as part of `component`)
- Wire up a new component's `_index.scss` and register it in a theme's entry point
- Add or change a component's dependencies
- Add box-shadow, border-radius, or other visual properties

Not for variable declarations (use `manage-scss-variables`) or design system foundation modules like spacing/color-system/typography (use `manage-scss-modules`).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case (e.g., `chip`, `button`, `info-bar`) |
| **Changes** | Yes | Description of structural or visual changes, or "scaffold" for new components |
| **Target themes** | No | Which themes to update: `all`, or a list like `default, fluent`. Default: **ask the user** |
| **Scope** | No | `layout`, `theme`, `module`, `register`, or `all`. Default: inferred from changes. |
| **Dependencies** | No | Other components this depends on (e.g., `icon`, `button`) |

## Procedure

### Step 1: Classify the changes

- **Structural properties** → `_layout.scss`: display, flex, grid, padding, margin, gap, position, overflow, box-sizing, font metrics
- **Visual properties** → `_theme.scss`: color, background, border-color, box-shadow, opacity, outline, text-decoration
- **Wiring** → `_index.scss`: dependencies, variable forwarding, mixin exposure
- **Registration** → theme `index.scss`: `@forward` + `@include` in entry point

For new components, all four are needed.

### Step 2: Apply layout and theme to core

Edit `packages/core/scss/components/{component}/_layout.scss` and/or `_theme.scss`.

**Layout mixin** (`kendo-{component}--layout-base`):
```scss
@mixin kendo-{component}--layout-base() {
    .k-{component} {
        // structural properties referencing $kendo-{component}-* variables
    }
}
```

**Theme mixin** (`kendo-{component}--theme-base`):
```scss
@mixin kendo-{component}--theme-base() {
    .k-{component} {
        // visual properties referencing $kendo-{component}-* variables
    }
}
```

**Rules:**
- Never assign concrete values in core — only reference `$kendo-{component}-*` variables
- Keep the mixin names unchanged (`--layout-base`, `--theme-base`)
- New CSS properties that need customization require new variables (use `manage-scss-variables` skill first)
- State selectors: `.k-{component}.k-hover`, `.k-{component}.k-selected`, etc.
- For new components, use templates from [../_shared/file-templates.md](../_shared/file-templates.md)

### Step 3: Apply layout and theme to targeted themes

Most themes delegate directly to core and don't need changes:

```scss
// packages/{theme}/scss/{component}/_layout.scss
@mixin kendo-{component}--layout() {
    @include kendo-{component}--layout-base();
}
```

Only edit theme-specific layout/theme files when:
- A theme needs to **override** core's structure (rare)
- A theme adds **extra selectors** not in core
- A theme has **theme-specific** visual tweaks beyond variables

For new components, use templates from [../_shared/file-templates.md](../_shared/file-templates.md).

### Step 4: Create or update `_index.scss`

For each theme in the **target themes** list, create or edit `packages/{theme}/scss/{component}/_index.scss`:

```scss
// Dependencies
@use "../core/_index.scss" as *;

// Component
@forward "./_variables.scss";
@use "./_layout.scss" as *;
@use "./_theme.scss" as *;

// Expose
@mixin kendo-{component}--styles() {
    @include import-once( "{component}" ) {
        @include core-styles();
        @include kendo-{component}--layout();
        @include kendo-{component}--theme();
    }
}
```

If the component has **dependencies** on other components, add them after core:

```scss
// Dependencies
@use "../core/_index.scss" as *;
@use "../icon/_index.scss" as *;
@use "../button/_index.scss" as *;
```

### Step 5: Register in theme entry point (new components only)

Edit `packages/{theme}/scss/index.scss` for each targeted theme:

1. **Add `@forward`** — in the existing `@forward` section, preserving the dependency-based order used in the file (do not reorder alphabetically):
   ```scss
   @forward "./{component}/_index.scss";
   ```

2. **Add `@include`** — inside `@mixin kendo-theme--styles()`, in the appropriate category group:
   ```scss
   @include kendo-{component}--styles();
   ```

### Step 6: Validate

```bash
npm run lint:styles 2>&1
npm run sass 2>&1
```

## Gotchas

- **Core changes propagate automatically** — most themes call `@include kendo-{component}--layout-base()`, so changes to core affect all themes.
- **New CSS properties need variables** — don't hardcode values in core. Add a variable via `manage-scss-variables` first, then reference it here.
- **State classes, not pseudo-classes** — use `.k-{component}.k-hover` (class applied by JS), not `.k-{component}:hover` (CSS pseudo).
- **BEM naming** — sub-elements: `.k-{component}-{element}`, modifiers: `.k-{component}-{modifier}`.
- **Component names in `@include import-once("...")` must be unique** across the entire theme.
- **`@forward` must come before any `@use` of the same module** — SCSS module system requirement.
- **Order matters in `index.scss`** — dependencies must be `@include`d before the components that use them.
- Check `packages/{theme}/scss/index.scss` to verify the registration location — components should be added in dependency order within the appropriate category group.
