---
name: theme-creator
description: "Creates a new Kendo UI color swatch (JSON config in lib/swatches/ with token overrides) or a full new theme package (complete SCSS component scaffold). Use when creating a new color variant, dark mode swatch, or brand theme. Not for modifying existing theme values or adding a single token (use token-scaffolder)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Theme Creator (B2)

Create a **complete new theme** — either a lightweight color swatch (JSON config) or a full new theme package (SCSS scaffold).

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md`
2. `.github/instructions/themes.instructions.md`
3. An existing swatch: `packages/default/lib/swatches/ocean-blue.json`
4. The default theme's variables: `packages/default/scss/_variables.scss`

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `THEME_TYPE` | ✅ | `swatch` (color variant of existing theme) or `package` (full new theme) |
| `BASE_THEME` | ✅ | Which theme to base on: `default`, `classic`, `material`, `fluent`, `bootstrap` |
| `THEME_NAME` | ✅ | kebab-case name (e.g., `ocean-blue`, `midnight-dark`, `brand-acme`) |
| `DISPLAY_NAME` | ✅ | Human-readable name (e.g., "Ocean Blue", "Midnight Dark") |
| `COLOR_PALETTE` | ✅ | Key brand colors: primary, secondary, base background, text color |
| `IS_DARK` | ⬜ | Whether this is a dark mode theme. Default: `false` |

---

## Step-by-Step Workflow: Swatch

### Step 1 — Read Existing Swatches

Read `packages/[base-theme]/lib/swatches/` to see all existing swatch configs and their structure.

Read `packages/[base-theme]/scss/_variables.scss` to understand which root-level tokens are available for overriding (look for `kendo-color-primary`, `kendo-color-secondary`, `kendo-color-base`, etc.).

### Step 2 — Identify Token Overrides

Based on `COLOR_PALETTE`, map provided colors to variable names:

| Design Intent | Token Variable |
|--------------|----------------|
| Primary action color | `kendo-color-primary` |
| Secondary / accent | `kendo-color-secondary` |
| Background base | `kendo-color-base` |  
| Body text | `kendo-color-on-surface` |
| Error | `kendo-color-error` |
| Success | `kendo-color-success` |
| Warning | `kendo-color-warning` |

For dark mode swatches, additionally derive:
- `kendo-color-surface` → dark background
- `kendo-color-on-surface` → light text

### Step 3 — Generate Swatch JSON

**`packages/[base-theme]/lib/swatches/[theme-name].json`**

```json
{
    "name": "[theme-name]",
    "displayName": "[Display Name]",
    "variables": {
        "kendo-color-primary": "#[hex]",
        "kendo-color-primary-lighter": "#[computed lighter]",
        "kendo-color-primary-darker": "#[computed darker]",
        "kendo-color-secondary": "#[hex]",
        "kendo-color-base": "#[hex]",
        "kendo-color-on-base": "#[hex]"
    }
}
```

For dark mode, wrap with a `useDark: true` flag if the base swatch system supports it — check existing dark swatches for the exact format.

### Step 4 — Verify Swatch Compiles

```bash
npm run sass:dist -- --swatch [theme-name]
```

Look for CSS output in `packages/[base-theme]/dist/[theme-name].css`.

---

## Step-by-Step Workflow: Full Theme Package

### Step 1 — Copy Package Structure

Use `packages/default/` as the reference. Create a parallel structure:

```
packages/[theme-name]/
├── package.json               # Copy + update name, version
├── scss/
│   ├── all.scss               # Copy as-is
│   ├── index.scss             # Copy — update variable/mixin names if needed
│   ├── _variables.scss        # Theme-level root variables
│   └── [component]/           # One folder per component
│       ├── _index.scss
│       ├── _variables.scss
│       ├── _layout.scss
│       └── _theme.scss
├── lib/
│   └── swatches/              # JSON swatch configs
└── dist/                      # Git-ignored, generated
```

### Step 2 — Create Root `_variables.scss`

Define the theme's color palette:

```scss
// [Theme Name] — Root Variables

/// The primary color.
/// @group colors
$kendo-color-primary: #[hex] !default;

/// The secondary color.
/// @group colors
$kendo-color-secondary: #[hex] !default;

// ... surface, background, text colors ...
```

### Step 3 — Scaffold Component Files

For each component in `packages/default/scss/`:

1. Copy the component folder structure
2. In `_variables.scss`: use theme-appropriate token references instead of default's values
3. In `_layout.scss` and `_theme.scss`: keep the same core mixin calls (`kendo-[component]--layout-base()` / `kendo-[component]--theme-base()`)

```scss
// Material-style button variables as example:
$kendo-button-border-radius: k-border-radius(full) !default;   // fully rounded
$kendo-button-border-width: 0px !default;                       // no border
$kendo-button-shadow: k-elevation(2) !default;                  // elevation shadow
```

### Step 4 — Create Default Swatch

```json
// packages/[theme-name]/lib/swatches/default.json
{
    "name": "default",
    "displayName": "[Theme Name]",
    "variables": {}
}
```

### Step 5 — Register Package

In `lerna.json` or `package.json` workspaces:
```json
"packages": ["packages/*"]
```
If already glob-matched, no change needed. Otherwise add `"packages/[theme-name]"`.

---

## Post-Generation Validation Checklist

For **swatches:**
- [ ] JSON is valid (no trailing commas)
- [ ] All specified color tokens exist in the base theme's variables
- [ ] Color values are valid hex codes or CSS color values
- [ ] Dark mode flag format matches existing dark swatches

For **full packages:**
- [ ] `package.json` has unique name `@progress/kendo-theme-[name]`
- [ ] All components from base theme are represented
- [ ] `@forward` maps are complete
- [ ] Lerna/workspace knows about the new package

## Verify Build

```bash
# For swatch:
npm run sass:dist

# For full package:
cd packages/[theme-name] && npm run sass
```

---

## Edge Cases

- **Inaccessible color contrast**: Run `npm run test:contrast` — primary color must have ≥ 4.5:1 contrast on white/background. If not, adjust the lighter/darker variants.
- **Dark swatch structure varies by base theme**: Always read existing dark swatches in `lib/swatches/` first — the exact format differs between default and material.
- **Missing color stop (lighter/darker)**: Use HSL manipulation rules — lighter = +15% lightness, darker = -15% lightness. Provide hex values.
- **Full package with 80+ components**: Scaffold the most-used 20 first (`button`, `input`, `dropdown`, `grid`, `calendar`, `datepicker`, `notification`, `dialog`, `tooltip`, `chip`), flag the rest as TODOs.

---
