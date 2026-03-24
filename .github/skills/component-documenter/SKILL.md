---
name: component-documenter
description: "Generates SassDoc comments on all public SCSS variables for a component and produces a variables reference table (layout, colors, states). Use when documenting undocumented or poorly documented components, adding SassDoc @group and @role annotations, or generating a customization guide. Not for JS framework API docs or changelog entries (use changelog-author)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Component Documenter (E1)

Generate **complete documentation** for a component: SassDoc comments on variables, a `README.md` with customization guide, and a variables table.

## Pre-Flight: Read Context First

1. `.github/prompts/variable-docs.prompt.md` — SassDoc documentation standards (always read first)
2. `.github/skills/shared/repo-conventions.md` — SassDoc format rules
3. `packages/default/scss/[component]/_variables.scss` — variables to document
4. `packages/html/src/[component]/[component].spec.tsx` — component props for usage examples
5. A well-documented reference: `packages/default/scss/button/_variables.scss`

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `COMPONENT` | ✅ | Component name (e.g., `chip`, `grid`, `datepicker`) |
| `OUTPUT` | ⬜ | `sassdoc` (comments only), `readme` (markdown file), `all`. Default: `all` |

---

## Step-by-Step Workflow

### Step 1 — Inventory Variables

Read `packages/default/scss/[component]/_variables.scss` and list every variable:

- Categorize by type: layout (padding, sizing, border), visual (bg, text, border color, shadow), state (hover, focus, disabled), sub-element
- Flag variables that already have SassDoc (✅) vs those that don't (❌)

### Step 2 — Add SassDoc Comments

For every variable missing a SassDoc comment, add:

```scss
/// The [human description of what this controls].
/// @group [component]
$kendo-[component]-[property]: [value] !default;
```

**Formatting rules:**

- Start with "The" (e.g., "The horizontal padding of the Button")
- Be specific: "The background color of the **hovered** Button" not just "The hover background"
- Use present tense, lowercase component name in description
- `@group` must match the component folder name exactly
- Add `/// @role default` only for `$kendo-[component]-default-*` variables

**Example output (well-documented):**

```scss
/// The horizontal padding of the small Button.
/// @group button
$kendo-button-sm-padding-x: k-spacing(2) !default;

/// The horizontal padding of the medium Button.
/// @group button
$kendo-button-md-padding-x: k-spacing(2) !default;

/// The default fill mode of the Button.
/// @group button
/// @role default
$kendo-button-default-fill-mode: "solid" !default;

/// The background color of the Button.
/// @group button
$kendo-button-bg: k-color( base-subtle ) !default;

/// The background color of the hovered Button.
/// @group button
$kendo-button-hover-bg: k-color( base-subtle-hover ) !default;

/// The shadow of the focused Button.
/// @group button
$kendo-button-focus-shadow: k-elevation(2) !default;

/// The background color of the disabled Button.
/// @group button
$kendo-button-disabled-bg: null !default;
```

**Apply to ALL theme packages** — not just default. Each theme's `_variables.scss` file needs SassDoc comments.

### Step 3 — Generate Variables Reference Table (README)

**`packages/[theme]/scss/[component]/README.md`** (or append to existing):

```markdown
# [ComponentName] Variables

Customizable SCSS variables for the [ComponentName] component. Override before importing the theme to apply customizations.

## Usage

```scss
// Override before theme import
$kendo-[component]-bg: #myColor;
$kendo-[component]-border-radius: 8px;

@import "@progress/kendo-theme-default/scss/all";
```

## Variables Reference

### Layout

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `$kendo-[component]-padding-x` | `number` | `k-spacing(2)` | Horizontal padding |
| `$kendo-[component]-padding-y` | `number` | `k-spacing(1)` | Vertical padding |
| `$kendo-[component]-font-size` | `string` | `inherit` | Font size |
| `$kendo-[component]-border-width` | `number` | `1px` | Border width |
| `$kendo-[component]-border-radius` | `number` | `k-border-radius(md)` | Border radius |

### Colors

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `$kendo-[component]-bg` | `color` | `k-color(base-subtle)` | Background color |
| `$kendo-[component]-text` | `color` | `k-color(on-base)` | Text color |
| `$kendo-[component]-border` | `color` | `k-color(border)` | Border color |

### States

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `$kendo-[component]-hover-bg` | `color` | `k-color(base-subtle-hover)` | Background on hover |
| `$kendo-[component]-focus-shadow` | `shadow` | `k-elevation(2)` | Box shadow on focus |
| `$kendo-[component]-disabled-bg` | `color` | `null` | Background when disabled |
```

### Step 4 — Verify SassDoc Generation

```bash
npm run docs
```

Check that the component shows up in `docs/` with all variables listed. Fix any SassDoc parse errors (malformed comments, missing `@group`).

---

## Post-Generation Validation Checklist

- [ ] Every variable in `packages/default/scss/[component]/_variables.scss` has a SassDoc comment
- [ ] Every `@group` tag matches the component's folder name
- [ ] `/// @role default` present on all `$kendo-[component]-default-*` variables
- [ ] No duplicate `///` comments (check for doubled comments on existing documented vars)
- [ ] `npm run docs` runs without errors
- [ ] `npm run lint:styles` passes (SassDoc comments are not flagged)

---

## Edge Cases

- **Variable with `null !default` has no meaningful "default" to document**: Write "The [property] of the [ComponentName]. When `null`, inherits from the parent or global default." 
- **Map variables** (e.g., `$kendo-button-sizes`): Document the map with a single comment explaining its structure, not each entry separately.
- **Theme-specific variables with no core equivalent**: Still document — prefix description with the theme name if needed: "The background color of the solid Button in the Default theme."
- **Classic/material theme variables already partially documented**: Only add missing comments, don't overwrite existing ones.

---
