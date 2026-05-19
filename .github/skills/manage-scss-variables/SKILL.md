---
name: manage-scss-variables
description: Create or update SCSS variables for a Kendo UI component — null declarations in core and concrete overrides in targeted theme packages. Handles SassDoc comments, @forward maps, and theme-specific conventions (Fluent CSS custom properties). Use this skill when the user wants to add, change, or remove a component variable.
argument-hint: "[component] [variable-name] e.g. chip gap, button padding-x"
metadata:
  internal: true
---

# SCSS Variables

Create or update SCSS variables for a component in core and targeted themes.

Read [../_shared/component-context.md](../_shared/component-context.md) for naming conventions, theme paths, and common gotchas.

## When to use

When the user asks to:
- Add a new variable to a component (e.g., "add a gap variable to the chip")
- Change a variable's value in specific themes (e.g., "change button padding to spacing(3) in default")
- Create all variables for a new component (as part of `component`)
- Remove or deprecate a variable

Not for layout/theme mixin changes or component registration (use `manage-scss-styles`) or design system foundation modules like spacing/colors (use `manage-scss-modules`).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case (e.g., `chip`, `button`, `info-bar`) |
| **Variables** | Yes | Variable names and values, or "all defaults" for new components |
| **Target themes** | No | Which themes to update: `all`, or a list like `default, fluent`. Default: **ask the user** |
| **Operation** | No | `add`, `change`, `remove`, `deprecate`. Inferred from context. |

## Procedure

### Step 1: Determine scope

- **New component** — create full variable files in core + all targeted themes
- **New variable** — add to core (null) + targeted themes (concrete) + `@forward` maps
- **Value change** — update targeted themes only, leave core untouched
- **Remove** — confirm breaking change with user, then remove from all files

### Step 2: Apply to core

For new or added variables, edit `packages/core/scss/components/{component}/_variables.scss`:

```scss
/// The gap between items in the {ComponentName}.
/// @group {component}
$kendo-{component}-gap: null !default;
```

**Rules:**
- Every variable is `null !default` — never assign concrete values in core
- Every variable has a `///` SassDoc comment and `@group {component}` annotation
- Place near related variables (all padding vars together, all color vars together)
- For a new component, use the core template from [../_shared/file-templates.md](../_shared/file-templates.md)

### Step 3: Apply to targeted themes

For each theme in the **target themes** list, edit `packages/{theme}/scss/{component}/_variables.scss`:

1. **Add the declaration** with concrete value and `!default`:
   ```scss
   /// The gap between items in the {ComponentName}.
   /// @group {component}
   $kendo-{component}-gap: k-spacing(1) !default;
   ```

2. **Add to the `@forward` map** at the bottom of the file:
   ```scss
   @forward "@progress/kendo-theme-core/scss/components/{component}/_variables.scss" with (
       // ... existing entries ...
       $kendo-{component}-gap: $kendo-{component}-gap
   );
   ```

3. **Follow theme-specific conventions** from [../_shared/component-context.md](../_shared/component-context.md)

For a new component, use the theme variable template from [../_shared/file-templates.md](../_shared/file-templates.md).

### Step 4: Fluent special handling

Every variable in Fluent must wrap its value in a CSS custom property:

```scss
$kendo-{component}-gap: var( --kendo-{component}-gap, #{k-spacing(1)} ) !default;
```

### Step 5: Validate

```bash
npm run lint:styles 2>&1
npm run sass 2>&1
```

## Variable change checklist

When **changing** an existing variable's value:
- Update only the targeted themes — don't touch themes the user didn't request
- Do NOT change the core `null` declaration
- Update the SassDoc comment if the description no longer fits
- Verify the `@forward` map still includes this variable
- Check for derived/calc variables that depend on this one
- Regenerate docs: `npm run docs`

When **removing** a variable:
- Confirm breaking change with user, or deprecate instead:
  ```scss
  // @deprecated Use $kendo-{component}-new-var instead.
  $kendo-{component}-old-var: $kendo-{component}-new-var !default;
  ```
- Remove from core, all theme files, all `@forward` maps, and layout/theme references

## Gotchas

- **`@forward` map must stay complete** — missing exports cause silent compilation issues where the variable stays `null`.
- **Preserve existing variable order** — add new variables near related ones, don't append randomly at the end.
- **Check for calc/derived variables** — some variables (e.g., `$kendo-button-sm-calc-size`) are computed from others.
