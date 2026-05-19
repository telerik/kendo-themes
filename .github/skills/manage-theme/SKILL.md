---
name: manage-theme
description: Create a new Kendo UI theme package from scratch or update an existing theme's design tokens, swatches, and component overrides. Handles package scaffolding, core re-exports, swatch configuration, design token changes (spacing, colors, elevation, typography, border-radii), and component-level variable/style overrides. Use this skill when the user wants to create a new theme, change a theme's design tokens, add or edit swatches, or apply broad styling changes across components in a theme.
argument-hint: "[theme-name] e.g. new-brand, default, fluent"
metadata:
  internal: true
---

# Theme

Create a new theme package or update an existing theme's tokens, swatches, and component overrides.

## Related skills

| Skill | When to delegate |
|-------|-----------------|
| [manage-scss-variables](../manage-scss-variables/SKILL.md) | Adding or changing `$kendo-*` component variables (null in core, concrete in theme) |
| [manage-scss-styles](../manage-scss-styles/SKILL.md) | Changing component layout/theme mixins, `_index.scss` wiring, or registration |
| [manage-scss-modules](../manage-scss-modules/SKILL.md) | Changing design system foundation tokens (spacing scale, color palettes, elevation, typography, border-radii, motion) |
| [manage-components](../manage-components/SKILL.md) | Full component create/update across core + themes + HTML |

## When to use

- **New theme** — "create a new corporate theme", "scaffold a dark-mode theme"
- **Token changes** — "change the spacing scale in material", "update the primary color in default"
- **Swatch changes** — "add a high-contrast swatch to fluent", "change ocean-blue primary"
- **Broad component updates** — "update padding across all form components in bootstrap"

Not for single-component work (use [manage-components](../manage-components/SKILL.md)). Not for core design system modules (use [manage-scss-modules](../manage-scss-modules/SKILL.md)).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Theme name** | Yes | kebab-case (e.g., `corporate`, `dark-mode`). For existing themes: `default`, `classic`, `material`, `fluent`, `bootstrap`. |
| **Operation** | No | `create` or `update`. Inferred from whether the package exists. |
| **Base theme** | For new | Which existing theme to fork from. Default: `default`. |
| **Design tokens** | No | Spacing, color, typography, elevation, border-radius, or motion changes. |
| **Swatch config** | No | New swatch name, colors, preview colors. |
| **Component overrides** | No | Component-level variable or style changes. |
| **Description** | For new | One sentence describing the theme's purpose / visual identity. |

## Theme package structure

Every theme lives under `packages/{theme}/` and follows this structure:

```
packages/{theme}/
├── package.json
├── .sassdocrc
├── scss/
│   ├── all.scss                        # Entry: @forward + @use index, @include kendo-theme--styles()
│   ├── index.scss                      # All @forward + @use for every component (dependency order)
│   ├── _variables.scss                 # Theme-level globals (z-index, focus-shadow)
│   ├── _layout.scss                    # Theme-level layout overrides (usually empty)
│   ├── core/
│   │   └── _index.scss                 # Re-exports core + theme _variables, optional :root overrides
│   └── {component}/                    # Per-component overrides
│       ├── _index.scss                 # Entry: deps, @forward vars, @use layout+theme, styles mixin
│       ├── _variables.scss             # Concrete values + @forward to core with override map
│       ├── _layout.scss                # Extends core layout mixin
│       └── _theme.scss                 # Extends core theme mixin
└── lib/
    └── swatches/
        ├── {theme}-main.json           # Default swatch color config
        ├── {theme}-ocean-blue.json     # Additional swatches
        └── index.js                    # Barrel export
```

### Key files explained

**`scss/all.scss`** — minimal wrapper:
```scss
@forward "./index.scss";
@use "./index.scss" as *;
@include kendo-theme--styles();
```

**`scss/index.scss`** — the big file. Two sections:
1. `@forward` statements for every component (re-exports variables)
2. `@use` statements + a `kendo-theme--styles()` mixin calling all component style mixins

Both sections are in **dependency order** — do not reorder.

**`scss/core/_index.scss`** — re-exports the core design system + theme globals:
```scss
@forward "@progress/kendo-theme-core/scss/index.scss";
@forward "../_variables.scss";
```

**`scss/{component}/_variables.scss`** — this is where themes differ. Contains concrete values + `@forward` map:
```scss
$kendo-button-padding-x: k-spacing(2) !default;
@forward "@progress/kendo-theme-core/scss/components/button/_variables.scss" with (
    $kendo-button-padding-x: $kendo-button-padding-x
);
```

**Swatch JSON** — color variant configs in `lib/swatches/`. Colors live in `groups[].colorsMap`:
```json
{
    "name": "Default Ocean Blue",
    "base": "@progress/kendo-theme-default",
    "groups": [{
        "colorsMap": {
            "app-surface": { "name": "App Surface", "type": "color", "value": "#ffffff" }
        }
    }]
}
```

## Procedure — New Theme

### Step 1: Gather requirements

Confirm at minimum:
- **Theme name** (kebab-case, e.g., `corporate`)
- **Base theme** — which existing theme to use as reference
- **Visual identity** — primary color, font family, spacing philosophy, etc.

Derive constants:

| Constant | Value |
|----------|-------|
| `{theme}` | kebab-case name (e.g., `corporate`) |
| `{Theme}` | PascalCase (e.g., `Corporate`) |
| `{pkg}` | `packages/{theme}` |
| `{base}` | base theme name (e.g., `default`) |

### Step 2: Copy the base theme

Copy the entire `packages/{base}/scss/` directory to `packages/{theme}/scss/`.
Copy `package.json`, `.sassdocrc`, `lib/swatches/` from the base theme.

Update `package.json`:
- Change `name` to `@progress/kendo-theme-{theme}`
- Update `description`
- Keep all other fields (dependencies, scripts, devDependencies) identical

Update `.sassdocrc` `meta.name` and `meta.friendlyName`.

Update swatch JSON files: rename files from `{base}-*.json` to `{theme}-*.json`, update `name` and `base` fields inside each, update `lib/swatches/index.js` exports.

### Step 3: Apply design token customizations

Customize the theme's visual identity. Use the appropriate sub-skill for each change type:

**Design system tokens** (spacing, colors, elevation, typography, border-radii):
- Use the [manage-scss-modules skill](../manage-scss-modules/SKILL.md) if the change should be in core (affects all themes)
- Edit `scss/core/_index.scss` if the change is a theme-specific override of a core module

**Component variables** (padding, font-size, border-width, colors per component):
- Use the [manage-scss-variables skill](../manage-scss-variables/SKILL.md) for systematic variable changes
- Or edit `scss/{component}/_variables.scss` directly for simple value changes

**Component styles** (layout, theme mixins):
- Use the [manage-scss-styles skill](../manage-scss-styles/SKILL.md) for structural or visual mixin changes

**Swatch colors**:
- Edit `lib/swatches/{theme}-main.json` directly

### Step 4: Validate

```bash
cd packages/{theme}
npm run sass 2>&1
npx stylelint "scss/**/*.scss" 2>&1
```

## Procedure — Update Theme

### Step 1: Identify what to change

Categorize the requested changes:

| Change type | Skill to use | Files affected |
|-------------|-------------|----------------|
| **Design token** (spacing, colors, elevation) | [manage-scss-modules](../manage-scss-modules/SKILL.md) | `packages/core/scss/{module}/`, theme core re-exports |
| **Theme-level variable** (z-index, focus-shadow) | Direct edit | `scss/_variables.scss` |
| **Component variable** | [manage-scss-variables](../manage-scss-variables/SKILL.md) | `scss/{component}/_variables.scss` |
| **Component style** | [manage-scss-styles](../manage-scss-styles/SKILL.md) | `scss/{component}/_layout.scss`, `_theme.scss` |
| **Multiple components** | [manage-components](../manage-components/SKILL.md) | Multiple component directories |
| **Swatch color** | Direct edit | `lib/swatches/{swatch}.json` |
| **New swatch** | Direct edit | `lib/swatches/{new}.json`, `lib/swatches/index.js` |

### Step 2: Present change plan

For non-trivial changes, present the plan and **wait for user confirmation**:

```
## Change Plan: {theme}
### Changes:
1. **[Type]** — {description}
   - Files: {list}
   - Before → After: {values}
   - Skill: {which sub-skill to delegate to}
### Summary: Files modified N, Files created N
```

### Step 3: Apply changes

Delegate to sub-skills or edit directly based on the change plan:

- **Token changes** → delegate to [manage-scss-modules](../manage-scss-modules/SKILL.md) for core changes, or edit `scss/core/_index.scss` for theme-only overrides
- **Component variable changes** → delegate to [manage-scss-variables](../manage-scss-variables/SKILL.md)
- **Component style changes** → delegate to [manage-scss-styles](../manage-scss-styles/SKILL.md)
- **Multi-component changes** → delegate to [manage-components](../manage-components/SKILL.md)
- **Swatch changes** → edit directly:
  - Existing swatch: edit the JSON in `lib/swatches/`
  - New swatch: copy an existing swatch JSON, change `name`, colors, and `previewColors`, register in `lib/swatches/index.js`

### Step 4: Validate

```bash
npm run sass 2>&1
npm run lint:styles 2>&1
```

For swatch changes:
```bash
npm run sass:dist 2>&1
```

For token changes that may affect components:
```bash
npm run docs 2>&1
npm run test:units 2>&1
```

## Gotchas

- **Theme `_variables.scss` vs component `_variables.scss`** — the theme-level file at `scss/_variables.scss` only has a few global variables (z-index, focus shadow). Component-specific values go in `scss/{component}/_variables.scss`.
- **`@forward` maps must stay in sync** — when adding a variable override in a component's `_variables.scss`, always add it to the `@forward ... with ()` map at the bottom.
- **Copy the base theme** — for new themes, start from an existing theme's files rather than writing from scratch. The `_index.scss` and `@forward`/`@use` wiring is complex and error-prone.
- **Swatch `base` field** — the swatch JSON's `base` field must point to the npm package name of the theme.
- **Component dependency order** — The `scss/index.scss` file lists components in a specific dependency order. Don't reorder arbitrarily.
- **`!default` is mandatory** — every variable declaration must use `!default` to allow downstream customization.
- **Broad changes are risky** — changing a design token (like spacing or primary color) affects many components. Validate visually, not just for compilation.
