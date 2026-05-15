# Plan: Migrate SassDoc Variable Annotations to Core

> **Status:** Not started
> **Created:** 2025-05-15

## Problem

SassDoc `///` annotations for SCSS variables are duplicated across all 6 theme packages (~7,000+ comments each, ~42,000 total), while the core package has only ~86. The descriptions are nearly identical — they describe what a variable controls, not what value it has. This causes:

- Maintenance burden: every doc improvement must be replicated 6 times
- Drift: themes have slightly different wording for the same variable
- Noise: theme variable files are 2–3× longer than needed

## Goal

Move all shared SassDoc annotations to core's `_variables.scss` files and strip them from theme files. Theme files keep documentation **only** for theme-specific variables (ones that don't exist in core).

## Current State (numbers)

| Package | `///` comments | Variable files | Theme-only variables |
|---------|---------------|----------------|---------------------|
| **core** | 86 | 123 | — |
| meridian | 7,332 | 124 | ~129 |
| fluent | 7,208 | 123 | ~520 |
| bootstrap | 7,085 | 124 | ~8 |
| classic | 7,075 | 124 | ~5 |
| default | 7,085 | 124 | ~5 |
| material | 7,094 | 124 | ~14 |

## Architecture

### How it works today

1. **Core** declares `$kendo-*: null !default;` with almost no `///` docs.
2. **Themes** redeclare every variable with a concrete value, a `///` doc block, and an `@forward` map to pass values back to core.
3. `scripts/sassdoc.js` runs SassDoc per theme. It already merges any core-only documented variables into the theme output (lines 48–82).

### How it will work after migration

1. **Core** declares `$kendo-*: null !default;` **with full `///` docs** on every variable.
2. **Themes** redeclare variables with concrete values **without `///` docs** (unless theme-specific).
3. `scripts/sassdoc.js` is updated so that when a theme variable has no doc, it inherits the description from core's SassDoc data while using the theme's resolved value.

## Migration Procedure (per component)

### Step 1 — Copy docs to core

Open `packages/core/scss/components/{component}/_variables.scss`. For each `$kendo-*` variable that lacks a `///` block:

1. Find the matching variable in `packages/meridian/scss/{component}/_variables.scss` (meridian is the most complete source).
2. Copy the `///` comment block (description + `@group`) above the variable in core.
3. Do **not** change the `null !default` value.

**Before (core):**
```scss
$kendo-button-border-width: null !default;
```

**After (core):**
```scss
/// The width of the border around the Button.
/// @group button
$kendo-button-border-width: null !default;
```

### Step 2 — Add missing null variables to core

Check if any theme has variables not declared in core. If a variable is used by 2+ themes, add it to core as `null !default` with docs. If it's truly theme-specific (1 theme only), leave it documented in that theme.

### Step 3 — Strip docs from theme files

For each theme's `packages/{theme}/scss/{component}/_variables.scss`:

- Remove `///` comment blocks from variables that now have docs in core.
- Keep `///` blocks on theme-specific variables (ones not in core).
- Keep all `@use`, `@forward`, variable assignments, and `//` section comments.

**Before (theme):**
```scss
/// The width of the border around the Button.
/// @group button
$kendo-button-border-width: 1px !default;
```

**After (theme):**
```scss
$kendo-button-border-width: 1px !default;
```

### Step 4 — Validate

```bash
npm run docs           # Rebuild SassDoc across all themes
npm run test:units     # Unit tests verify docs metadata
npm run docs:check     # Consistency check
```

Compare `dist/meta/sassdoc-raw-data.json` before/after for each theme — every variable must still appear with its description and resolved value.

### Step 5 — Commit

```
chore(docs): migrate {component} sassdoc annotations to core
```

## `sassdoc.js` Changes

Update the merge logic in `scripts/sassdoc.js` (around line 48–82) so that:

1. When processing a theme, load core's `sassdoc-raw-data.json`.
2. For each theme variable that has **no** `///` doc, look up the same variable name in core's data and inherit its `description` and `group`.
3. Theme-level `///` docs still win (override) if present.
4. Build core docs first (`npm run docs` in core), then themes.

## Fluent Special Case

Fluent has ~520 theme-specific variables (e.g., `$kendo-actionsheet-header-bg`, `$kendo-actionsheet-header-font-size`). These are granular sub-component variables that don't exist in core. Strategy:

- **Promote to core** any that appear in 2+ themes → add as `null !default` with docs.
- **Keep in fluent** any that are truly fluent-only → keep their `///` docs in fluent.
- This evaluation happens during fluent's migration pass.

## Execution Order

Process components in batches. Suggested priority:

1. **Pilot** — `button` (well-understood, good test case)
2. **High-traffic** — `input`, `grid`, `dropdown*`, `datepicker`, `dialog`
3. **Remaining** — alphabetical through the rest of the 123 components
4. **sassdoc.js update** — can happen before or alongside component migration
5. **Fluent triage** — evaluate fluent-only variables during the fluent pass

## Using the Skill

A dedicated skill `migrate-sassdoc` is available at `.github/skills/migrate-sassdoc/SKILL.md`.

Invoke it per component:
```
Use the migrate-sassdoc skill to migrate SassDoc annotations for the button component.
```

Or in batch:
```
Use the migrate-sassdoc skill to migrate SassDoc annotations for: input, textbox, textarea, maskedtextbox, numerictextbox.
```
