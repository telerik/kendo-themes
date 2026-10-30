# Theme Package

Create a new theme package or update an existing theme's tokens, swatches, and component overrides.

For component-level or core token work, use [variables.md](variables.md), [styles.md](styles.md), [component.md](component.md), or [foundation-modules.md](foundation-modules.md). Shared SCSS rules are in [context.md](context.md).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Theme name** | Yes | kebab-case (e.g., `corporate`, `dark-mode`). Existing: `default`, `classic`, `material`, `fluent`, `bootstrap`, `meridian`. |
| **Operation** | No | `create` or `update`. Inferred from whether the package exists. |
| **Base theme** | For new | Which existing theme to fork from. Default: `meridian` (recommended; `default` is in maintenance mode). |
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

### Step 3: Register the theme in the repo

A theme is referenced outside its package (CI workflows, `integrations/`, `units/{theme}/`, `packages/html/devkit`, `scripts/`, root `package.json`). Find every place with:

```bash
git grep -lw {base} -- ':!packages/{base}' ':!packages/*/docs' ':!tests' ':!**/CHANGELOG.md'
```

Add the new theme next to each `{base}` entry. Copy `units/{base}/` to `units/{theme}/` and set `process.env.THEME` in its `theme.env.js`.

### Step 4: Apply design token customizations

Customize the theme's visual identity. Use the appropriate reference for each change type:

**Design system tokens** (spacing, colors, elevation, typography, border-radii):
- Follow [foundation-modules.md](foundation-modules.md) if the change should be in core (affects all themes)
- Edit `scss/core/_index.scss` if the change is a theme-specific override of a core module

**Component variables** (padding, font-size, border-width, colors per component):
- Follow [variables.md](variables.md) for systematic variable changes
- Or edit `scss/{component}/_variables.scss` directly for simple value changes

**Component styles** (layout, theme mixins):
- Follow [styles.md](styles.md) for structural or visual mixin changes

**Swatch colors**:
- Edit `lib/swatches/{theme}-main.json` directly

### Step 5: Validate

```bash
cd packages/{theme}
npm run sass 2>&1
npx stylelint "scss/**/*.scss" 2>&1
```

## Procedure — Update Theme

### Step 1: Identify what to change

Categorize the requested changes:

| Change type | Reference | Files affected |
|-------------|-------------|----------------|
| **Design token** (spacing, colors, elevation) | [foundation-modules.md](foundation-modules.md) | `packages/core/scss/{module}/`, theme core re-exports |
| **Theme-level variable** (z-index, focus-shadow) | Direct edit | `scss/_variables.scss` |
| **Component variable** | [variables.md](variables.md) | `scss/{component}/_variables.scss` |
| **Component style** | [styles.md](styles.md) | `scss/{component}/_layout.scss`, `_theme.scss` |
| **Multiple components** | [component.md](component.md) | Multiple component directories |
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
   - Reference: {which reference to follow}
### Summary: Files modified N, Files created N
```

### Step 3: Apply changes

Follow the references or edit directly based on the change plan:

- **Token changes** → follow [foundation-modules.md](foundation-modules.md) for core changes, or edit `scss/core/_index.scss` for theme-only overrides
- **Component variable changes** → follow [variables.md](variables.md)
- **Component style changes** → follow [styles.md](styles.md)
- **Multi-component changes** → delegate to [component.md](component.md)
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

- **Theme-level vs component variables** — `scss/_variables.scss` only holds a few globals (z-index, focus shadow); component values go in `scss/{component}/_variables.scss`.
- **Copy, don't write from scratch** — the `_index.scss` and `@forward`/`@use` wiring is error-prone.
- **Swatch `base`** must be the theme's npm package name.
- **Token changes are broad** — a spacing or primary-color change affects many components; check visual tests, not just compilation.
