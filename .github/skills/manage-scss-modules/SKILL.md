---
name: manage-scss-modules
description: Create or update design system foundation modules — spacing, color-system, typography, elevation, border-radii, motion, and z-index. These modules live in packages/core/scss/ and are re-exported by each theme via packages/{theme}/scss/core/. Use this skill when the user wants to add a spacing token, color constant, font size, elevation level, border-radius scale value, or animation timing.
argument-hint: "[module] e.g. spacing, color-system, typography, elevation"
metadata:
  internal: true
---

# SCSS Module

Create or update design system foundation modules in core and theme packages.

## When to use

When the user asks to:
- Add a new spacing token (e.g., "add a spacing step of 2.5rem")
- Add or change a color constant or palette entry
- Update typography tokens (font family, size, weight, line height)
- Add or modify elevation levels (box-shadow scale)
- Change border-radius scale values
- Update motion/animation timing or easing
- Add or change z-index layers

Not for component-level SCSS (use `manage-scss-variables` for component variables, `manage-scss-styles` for component layout/theme/wiring).

## Module inventory

| Module | Core path | Purpose |
|--------|-----------|---------|
| **spacing** | `packages/core/scss/spacing/index.scss` | `$default-spacing` map — spacing tokens (`k-spacing()` function) |
| **color-system** | `packages/core/scss/color-system/` | Color constants, palettes, swatches, and functions (`k-color()`) |
| **typography** | `packages/core/scss/typography/index.scss` | Font families, sizes, weights, line heights |
| **elevation** | `packages/core/scss/elevation/index.scss` | Box-shadow scale (`k-elevation()` function) |
| **border-radii** | `packages/core/scss/border-radii/index.scss` | Border-radius scale (`k-border-radius()` function) |
| **motion** | `packages/core/scss/motion/index.scss` | Animation timing, easing, and duration tokens |
| **z-index** | `packages/core/scss/z-index/index.scss` | Stacking order layers |

### Theme re-exports

Each theme re-exports core modules via `packages/{theme}/scss/core/`. Theme-specific overrides are placed in the corresponding `packages/{theme}/scss/core/{module}/` directory.

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Module** | Yes | Which module: `spacing`, `color-system`, `typography`, `elevation`, `border-radii`, `motion`, `z-index` |
| **Changes** | Yes | What to add, change, or remove |
| **Target themes** | No | Themes to update if theme-level overrides are needed. Usually changes are core-only. |

## Procedure

### Step 1: Read the current module

Read the module's files in `packages/core/scss/{module}/` to understand the current structure and conventions. Pay attention to:
- How tokens are defined (maps, variables, constants)
- SassDoc documentation patterns
- The function API (e.g., `k-spacing()`, `k-color()`, `k-elevation()`)

### Step 2: Apply changes to core

Edit the appropriate file in `packages/core/scss/{module}/`.

**Rules:**
- Follow the existing naming and documentation patterns in the module
- Add SassDoc `///` comments with `@group` annotations
- Maintain the ordering convention (e.g., spacing values are ordered by size)
- For `color-system`, respect the multi-file structure: constants in `_constants.scss`, palettes in `_palettes.scss`, functions in `_functions.scss`

### Step 3: Apply theme overrides (if needed)

Most design system changes are core-only — themes inherit via `packages/{theme}/scss/core/`. Only edit theme-specific files when:
- A theme needs a **different token value** (e.g., Material uses different elevation shadows)
- A theme adds **theme-specific tokens** not in core
- The swatch configuration (`lib/swatches/`) needs updating

### Step 4: Validate

```bash
npm run lint:styles 2>&1
npm run sass 2>&1
```

If the change affects token functions used by components, also verify:

```bash
npm run docs 2>&1
npm run test:units 2>&1
```

## Gotchas

- **Core modules are foundational** — changes here affect every component and every theme. Be conservative.
- **Spacing map keys are not arbitrary** — the `$default-spacing` map uses a scale (0, 0.5, 1, 1.5, 2...). New keys must fit the scale.
- **Color constants vs swatch colors** — `_constants.scss` has immutable color values (white, black). Swatch-specific colors go in `_swatch.scss` or theme overrides.
- **Theme core re-exports** — `packages/{theme}/scss/core/_index.scss` barrels all core modules. If you add a new sub-module, it needs to be forwarded there.
- **Function API stability** — `k-spacing()`, `k-color()`, `k-elevation()`, `k-border-radius()` are used by hundreds of component files. Don't change function signatures.
