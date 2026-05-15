---
name: migrate-sassdoc
description: Migrate SassDoc variable annotations from theme packages to core for a specific component. Copies `///` docs to core null variables, strips them from all 6 themes, and validates the result. Use when the user wants to consolidate variable documentation into core.
argument-hint: "[component] e.g. button, input, grid — or a comma-separated list"
---

# Migrate SassDoc Annotations to Core

Move `///` SassDoc annotations from theme variable files to the core package for one or more components, then strip the duplicated docs from all themes.

Read [../_shared/component-context.md](../_shared/component-context.md) for package paths and naming conventions.
Read [../../plans/migrate-sassdoc-to-core.md](../../plans/migrate-sassdoc-to-core.md) for the full migration plan and rationale.

## When to use

- User asks to migrate/consolidate SassDoc docs for a component
- User asks to move variable documentation to core
- Batch migration of multiple components

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component(s)** | Yes | One or more component names in kebab-case (e.g., `button`, `input, grid`) |

## Procedure

### Step 0 — Read the doc conventions

Read `/.github/prompts/variable-docs.prompt.md` to understand the SassDoc annotation format, description patterns, and quality rules. All `///` blocks you write must follow those conventions.

### Step 1 — Inventory

For each component:

1. Read core variables: `packages/core/scss/components/{component}/_variables.scss`
2. Read meridian variables (primary doc source): `packages/meridian/scss/{component}/_variables.scss`
3. Collect the list of `$kendo-*` variable names from core.
4. Collect the list of `$kendo-*` variable names from each theme: meridian, fluent, bootstrap, classic, default, material.

Build three sets:
- **Shared variables** — exist in both core and at least one theme
- **Core-only variables** — exist in core but not in any theme (rare, usually maps)
- **Theme-only variables** — exist in a theme but not in core

### Step 2 — Copy docs to core

Open `packages/core/scss/components/{component}/_variables.scss`.

For each **shared variable** that lacks a `///` block in core:

1. Find the `///` block for that variable in meridian's `_variables.scss`.
2. If meridian doesn't have it, check classic or default.
3. Copy the `///` block (all `///` lines including `@group`) and place it immediately above the variable declaration in core.
4. Keep the `null !default` value — never change core values.
5. Verify the doc follows the conventions from variable-docs.prompt.md:
   - Starts with `/// The ...`
   - Ends with a period
   - Has `/// @group {component}` on the next line
   - Uses the component's PascalCase name in the description

**Example transformation:**

```scss
// Before (core):
$kendo-button-border-width: null !default;

// After (core):
/// The width of the border around the Button.
/// @group button
$kendo-button-border-width: null !default;
```

### Step 3 — Promote shared theme-only variables

For each **theme-only variable** that appears in **2 or more themes**:

1. Add it to core as `$kendo-{name}: null !default;` with the `///` doc block.
2. Place it near related variables in core's file.

For variables that exist in **only 1 theme**, leave them in that theme with their docs.

### Step 4 — Strip docs from all themes

For **each** of the 6 theme packages (default, classic, bootstrap, material, fluent, meridian):

Open `packages/{theme}/scss/{component}/_variables.scss` and:

1. **Remove** all `///` comment blocks from variables that now have docs in core.
2. **Keep** `///` blocks on theme-specific variables (ones that remain only in that theme).
3. **Keep** everything else unchanged: `@use`, `@forward`, variable assignments, `//` section comments, blank lines.

**Important:** Only remove `///` lines (SassDoc triple-slash). Do NOT remove:
- `//` single-line comments (section headers, notes)
- `@use` / `@forward` statements
- Variable declarations
- Blank lines between logical sections

**Example transformation:**

```scss
// Before (theme):
/// The width of the border around the Button.
/// @group button
$kendo-button-border-width: 1px !default;

// After (theme):
$kendo-button-border-width: 1px !default;
```

### Step 5 — Handle special annotations

Some variables have extra SassDoc annotations beyond `@group`:

- `@role default` — used on default-value variables like `$kendo-button-default-theme-color`. Move these to core along with the doc.
- `@type` — type annotations. Move to core.
- `@see` — cross-references. Move to core.
- `@deprecated` — deprecation notices. Move to core.

### Step 6 — Validate

After editing all files for a component:

1. Check that core's variable file has `///` blocks on every `$kendo-*` variable.
2. Check that theme files have no `///` blocks on shared variables.
3. Check that theme-specific variables still have their `///` blocks.
4. Verify no `@forward` maps or variable assignments were accidentally removed.

If the repo has a docs build available, run:
```bash
cd packages/core && npx sassdoc scss --parse
```

### Step 7 — Commit

Create a single commit per component (or small batch):
```
chore(docs): migrate {component} sassdoc annotations to core
```

## Processing multiple components

When given a list of components, process them sequentially. Complete all steps for one component before moving to the next. This allows catching patterns and issues early.

## Quality checklist

- [ ] Every `$kendo-*` variable in core has a `///` block
- [ ] `///` blocks follow variable-docs.prompt.md conventions
- [ ] `@group` matches the component's kebab-case name
- [ ] Theme files have no `///` on shared variables
- [ ] Theme-only variables retain their `///` docs
- [ ] `@forward` maps are untouched
- [ ] Variable assignments and values are untouched
- [ ] `//` section comments are preserved
