---
name: component-generator
description: "Scaffolds a complete new Kendo UI component across core (null variables/layout/theme), all five theme packages (index/variables/layout/theme), and the HTML package (spec/templates/tests/index). Registers the component in all index.scss files. Use when creating a new component from scratch. Not for adding variants to existing components (use component-variant-expander) or editing existing styles."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Component Generator (A1)

Scaffold a **complete new component** following all repo conventions across `packages/core`, all theme packages, and `packages/html`.

## Pre-Flight: Read Context First

Before generating any file, read these references:

1. `.github/skills/shared/repo-conventions.md` — full pattern reference
2. A **similar existing component** from core + default theme as concrete reference:
   - Simple widget: `packages/core/scss/components/button/` + `packages/default/scss/button/`
   - Container: `packages/core/scss/components/card/` + `packages/default/scss/card/`
   - Navigation: `packages/core/scss/components/breadcrumb/` + `packages/default/scss/breadcrumb/`
3. `packages/html/src/button/` — for HTML spec patterns
4. `packages/default/scss/index.scss` — to find the right insertion position

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `COMPONENT_NAME` | ✅ | kebab-case component name (e.g., `file-box`, `smart-badge`) |
| `DESCRIPTION` | ✅ | One sentence describing what the component does |
| `DEPENDENCIES` | ⬜ | Other components this component depends on (e.g., `icon`, `button`) |
| `HTML_ELEMENT` | ⬜ | Root HTML element (`div`, `span`, `button`, `nav`). Default: `div` |
| `HAS_SIZE` | ⬜ | Whether component supports `sm`/`md`/`lg` sizes. Default: `true` |
| `HAS_THEME_COLOR` | ⬜ | Whether component supports theme colors. Default: `false` |

---

## Step-by-Step Workflow

### Step 1 — Derive Naming Constants

From `COMPONENT_NAME` (e.g., `smart-badge`):

- **SCSS folder name:** `smart-badge`  
- **SCSS mixin prefix:** `kendo-smart-badge`  
- **CSS class:** `k-smart-badge`  
- **SCSS variable prefix:** `$kendo-smart-badge-`
- **TS constant prefix:** `SMART_BADGE`
- **TypeScript component name:** `SmartBadge`
- **Module/folder name string:** `"smart-badge"`

### Step 2 — Create Core Package Files

Create 3 files in `packages/core/scss/components/[component]/`:
- `_variables.scss` — all variables as `null !default`, no SassDoc
- `_layout.scss` — structural mixin `kendo-[component]--layout-base()`
- `_theme.scss` — visual mixin `kendo-[component]--theme-base()` using `@include fill()`

→ **Templates:** [references/file-templates.md § Core Package Templates](references/file-templates.md#core-package-templates)

### Step 3 — Create Default Theme Package Files

Create 4 files in `packages/default/scss/[component]/`:
- `_variables.scss` — override core nulls with token values + SassDoc + `@forward` map
- `_layout.scss` — `@use` core layout + call `kendo-[component]--layout-base()`
- `_theme.scss` — `@use` core theme + call `kendo-[component]--theme-base()`
- `_index.scss` — dependencies + `@forward` variables + `@use` layout/theme + expose mixin

→ **Templates:** [references/file-templates.md § Theme Package Templates](references/file-templates.md#theme-package-templates)

### Step 4 — Repeat for ALL Other Theme Packages

Replicate the same 4-file structure for:
- `packages/classic/scss/[component]/`
- `packages/material/scss/[component]/`
- `packages/fluent/scss/[component]/`
- `packages/bootstrap/scss/[component]/`

> **Important:** For classic/material/fluent/bootstrap, the `_variables.scss` values should use theme-appropriate token functions. When in doubt, start with the same values as `default` — the theme maintainers will adjust.

### Step 5 — Register in Theme `index.scss` Files

For **each** of the 5 theme packages, edit `packages/[theme]/scss/index.scss`:

1. Add `@forward "./[component]/_index.scss";` in the `@forward` section, ordered alphabetically among similar components.
2. Inside `@mixin kendo-theme--styles()`, add `@include kendo-[component]--styles();` in the appropriate category group (buttons, forms, layout, etc.).

### Step 6 — Create HTML Package Files

Create 5 files in `packages/html/src/[component]/`:
- `constants.ts` — `MODULE_NAME` and `FOLDER_NAME` string exports
- `[component].spec.tsx` — `KendoComponent` with `states`, `options`, `className`, `ariaSpec`
- `templates/[component].tsx` — default render template
- `tests/[component]-base.tsx` — base visual test (all states)
- `index.ts` — re-exports spec + all templates

Then add `export * from './[component]/index';` to `packages/html/src/index.ts` in alphabetical position.

→ **Templates:** [references/file-templates.md § HTML Package Templates](references/file-templates.md#html-package-templates)

---

## Post-Generation Validation Checklist

- [ ] All variable names follow `$kendo-[component]-[state]-[property]` pattern
- [ ] All SassDoc comments present on default-theme variables
- [ ] `@forward` map in `_variables.scss` covers every variable defined above it
- [ ] `_index.scss` lists all dependencies before the component files
- [ ] Theme `index.scss` has both the `@forward` line and the `@include` call
- [ ] HTML spec exports `states`, `options`, `className`, `defaultOptions`, `moduleName`, `folderName`, `ariaSpec`
- [ ] `packages/html/src/index.ts` includes the new component
- [ ] Replicated across **all 5** theme packages (default, classic, material, fluent, bootstrap)

## Verify Build

```bash
npm run sass          # Should compile without errors
npm run lint:styles   # Should pass
npm run build         # Should build HTML package without TS errors
```

---

## Edge Cases

- **Component with sub-elements** (e.g., header/body/footer): Create additional variable groups in `_variables.scss` per sub-element, extend layout mixin with nested selectors.
- **Component with no theme colors**: Skip `$kendo-[component]-bg` variants and `@include fill()` — use CSS inheritance.
- **Component depending on another** (e.g., depends on `icon`): Add `@use "../icons/_index.scss" as *;` in `_index.scss` and `@include kendo-icon--styles();` before the component's layout call.
- **Classic/material/fluent values differ significantly**: Use the same `null !default` placeholder — create a tracking comment `// TODO: apply [theme]-specific token` for values that need theme-specific adjustment.

---
