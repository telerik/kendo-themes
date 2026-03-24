---
name: token-scaffolder
description: "Adds a new $kendo-* SCSS design token to all packages: null definition in core, themed values with SassDoc in all five theme packages, and @forward map registration. Use when adding any new $kendo-* variable that does not already exist. Not for changing an existing variable's value, renaming a variable, or creating a full new component (use component-generator)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Token Scaffolder (B1)

Add a **new design token** (SCSS variable) to the repository, wired through the full stack: `core` (null) → all theme packages (values) → SassDoc → `@forward` map.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md` — variable naming rules, SassDoc format
2. `.github/prompts/variable-create.prompt.md` — existing variable creation protocol
3. `.github/prompts/variable-docs.prompt.md` — documentation standards
4. The component's `_variables.scss` in **both** core and default theme — for naming context and existing variable neighbours

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `COMPONENT` | ✅ | Component name, e.g. `button`, `grid`, `datepicker` |
| `VARIABLE_NAME` | ✅ | Full `$kendo-*` name, e.g. `$kendo-button-sm-outline-hover-bg` |
| `DESCRIPTION` | ✅ | Human-readable description for the SassDoc comment |
| `DEFAULT_VALUE` | ✅ | Value for the `default` theme (token function or literal) |
| `IS_DEFAULT_VARIABLE` | ⬜ | Whether this is a `$kendo-[component]-default-*` variable — adds `/// @role default` |
| `THEME_VALUES` | ⬜ | Override values for other themes (classic, material, fluent, bootstrap) |

---

## Step-by-Step Workflow

### Step 1 — Validate Variable Name

Check naming follows the convention (from `repo-conventions.md`):

```
$kendo-<component>[-sub-element][-size][-fill-mode][-state]-<css-property>
```

**Reject if:**
- Missing `$kendo-` prefix
- Uses camelCase instead of kebab-case
- CSS property doesn't follow the allowed list (`bg`, `text`, `border`, `shadow`, `opacity`, `padding-x`, `padding-y`, `font-size`, `font-weight`, `line-height`, `width`, `height`, `transition`, `gradient`, `radius`, `gap`)
- Variable already exists (search codebase first)

**Search for existing variable before creating:**

```bash
grep -r "VARIABLE_NAME" packages/*/scss/ --include="*.scss"
```

### Step 2 — Find Insertion Position

In each `_variables.scss` file, find the correct position:

1. Same component group as related variables
2. Group by category: layout vars first (padding, sizing), then visual vars (bg, text, border, shadow)
3. Group by state: base → hover → focus → active → selected → disabled
4. Within a state group, order: `bg` → `text` → `border` → `gradient` → `shadow`

### Step 3 — Add to Core Package

**File:** `packages/core/scss/components/[component]/_variables.scss`

Add the variable with `null !default` and **no** SassDoc:

```scss
$kendo-button-sm-outline-hover-bg: null !default;
```

Position it near semantically related variables (e.g., after `$kendo-button-sm-outline-bg` if it exists, or grouped with `hover` variants).

### Step 4 — Add to Default Theme

**File:** `packages/default/scss/[component]/_variables.scss`

Add with full SassDoc + value + `!default`:

```scss
/// The background color of the hovered small outline Button.
/// @group button
$kendo-button-sm-outline-hover-bg: k-color( base-subtle-hover ) !default;
```

If it's a `$kendo-[component]-default-*` variable, add `/// @role default`:

```scss
/// The default fill mode of the Button.
/// @group button
/// @role default
$kendo-button-default-fill-mode: "solid" !default;
```

**Also add to the `@forward` map** at the bottom of the file:

```scss
@forward "@progress/kendo-theme-core/scss/components/[component]/_variables.scss" with (
    // ... existing entries ...
    $kendo-button-sm-outline-hover-bg: $kendo-button-sm-outline-hover-bg,
);
```

### Step 5 — Add to Other Theme Packages

For `classic`, `material`, `fluent`, `bootstrap`:

1. Read the theme's existing `_variables.scss` for the component to understand its color language
2. Derive a contextually appropriate value using that theme's tokens
3. Add with full SassDoc + value + `!default`
4. Add to the `@forward` map

If theme-specific value is unknown:

```scss
/// The background color of the hovered small outline Button.
/// @group button
$kendo-button-sm-outline-hover-bg: $kendo-button-sm-outline-bg !default; // TODO: verify theme value
```

### Step 6 — Verify Usage in Layout/Theme Files

If the variable is brand new (not referenced anywhere yet), check whether it should be used in a layout or theme mixin:

- **Layout file** (`_layout.scss`): padding, sizing, display, border-width, border-radius, font-size, font-weight, line-height, gap
- **Theme file** (`_theme.scss`): bg, text, border color, shadow, gradient, opacity

If the variable is needed in a mixin, add it:

```scss
// In _theme.scss, inside the hover block:
&:hover,
&.k-hover {
    @include fill(
        $kendo-button-sm-outline-hover-text,
        $kendo-button-sm-outline-hover-bg,   // ← add here
        $kendo-button-sm-outline-hover-border
    );
}
```

---

## Post-Generation Validation Checklist

- [ ] Variable exists in `packages/core/.../[component]/_variables.scss` as `null !default`
- [ ] Variable exists in `packages/default/.../[component]/_variables.scss` with SassDoc + value
- [ ] SassDoc has `/// Description`, `/// @group [component]`, and optionally `/// @role default`
- [ ] Variable is in the `@forward` map of default theme `_variables.scss`
- [ ] Same done for classic, material, fluent, bootstrap packages
- [ ] If the variable is consumed in a mixin, it appears in the correct layout/theme file

## Verify Build

```bash
npm run sass          # No compilation errors
npm run docs          # SassDoc generates without warnings
npm run lint:styles   # Stylelint clean
npm run test:units    # Unit tests pass (requires npm run docs first)
```

---

## Edge Cases

- **Variable exists in some themes but not others**: Add only to the missing packages. Do not re-add where it already exists.
- **Computed value** (e.g., derived from another variable): Use SCSS expressions — `if($kendo-button-bg, rgba($kendo-button-bg, 0.8), null)`.
- **Boolean or keyword variable** (e.g., `"solid"`, `true`): No token function needed; use the literal string or boolean directly.
- **Variable that replaces a hardcoded value**: Find all usages of the hardcoded value in layout/theme files and replace with the variable before adding it.
- **Size-variant token group** (sm/md/lg set): Add all three at once (`$kendo-button-sm-padding-x`, `$kendo-button-md-padding-x`, `$kendo-button-lg-padding-x`) and wire all three into the sizes map if present.

---
