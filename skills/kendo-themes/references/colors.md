# Colors

Colors are the most commonly customized aspect of component styling. The color system defines semantic tokens used by every Kendo and Telerik component.

Set a single base color (e.g., `primary`) and all derived variants — hover, active, emphasis, on-color, subtle — are automatically computed. One value rebrands every component that uses it.

## Color Layers

1. **Semantic tokens** — Named roles such as `primary`, `error`, `surface`, and `border`
2. **CSS custom properties** — Runtime-accessible `--kendo-color-{name}` variables generated from those semantic tokens

## Available Color Tokens

### Surface & Misc

| Token | CSS Variable | Purpose |
|---|---|---|
| `app-surface` | `--kendo-color-app-surface` | Application background |
| `on-app-surface` | `--kendo-color-on-app-surface` | Text on app background |
| `subtle` | `--kendo-color-subtle` | Subtle/muted content |
| `surface` | `--kendo-color-surface` | Component surfaces |
| `surface-alt` | `--kendo-color-surface-alt` | Alternate surfaces |
| `border` | `--kendo-color-border` | Default borders |
| `border-alt` | `--kendo-color-border-alt` | Alternate borders |

### Semantic Color Groups

Each semantic color has **10 variants** following a consistent pattern:

| Suffix | Purpose | Example (primary) |
|---|---|---|
| `-subtle` | Light background | `--kendo-color-primary-subtle` |
| `-subtle-hover` | Light background hover | `--kendo-color-primary-subtle-hover` |
| `-subtle-active` | Light background active | `--kendo-color-primary-subtle-active` |
| *(base)* | Main color | `--kendo-color-primary` |
| `-hover` | Hover state | `--kendo-color-primary-hover` |
| `-active` | Active/pressed state | `--kendo-color-primary-active` |
| `-emphasis` | High emphasis variant | `--kendo-color-primary-emphasis` |
| `-on-subtle` | Text on subtle bg | `--kendo-color-primary-on-subtle` |
| `on-{name}` | Text on main color | `--kendo-color-on-primary` |
| `-on-surface` | Text on surface | `--kendo-color-primary-on-surface` |

**Semantic color names:**
`base`, `primary`, `secondary`, `tertiary`, `info`, `success`, `warning`, `error`, `inverse`

## Customization

Override color tokens via CSS custom properties or Sass. Recommended order:

1. **CSS custom properties** — for runtime theming and scoped overrides (simplest).
2. **Swatches** — when an existing color variant already matches your needs.
3. **Sass `$kendo-colors` map** — for compile-time control over semantic tokens.

### CSS Custom Properties

Set just the base color — all variants (hover, active, emphasis, on-color, subtle, etc.) auto-compute from it at runtime:

```css
:root {
  --kendo-color-primary: #ff6358;
}
```

Override multiple semantic groups at once:

```css
:root {
  --kendo-color-primary: #5c6bc0;
  --kendo-color-secondary: #78909c;
  --kendo-color-error: #e53935;
}
```

For precise control over individual states, override specific variant tokens:

```css
:root {
  --kendo-color-primary: #5c6bc0;
  --kendo-color-primary-hover: #3f51b5;
  --kendo-color-on-primary: #ffffff;
}
```

### Sass Overrides

The `$kendo-colors` map merges with defaults — specify only the tokens you want to change:

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as * with (
  $kendo-colors: (
    primary: #5c6bc0,
    secondary: #78909c,
    error: #e53935
  )
);
```

For precise control over individual states, override specific variant tokens:

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as * with (
  $kendo-colors: (
    primary: #5c6bc0,
    primary-hover: #3f51b5,
    on-primary: #ffffff
  )
);
```

**Derived color tokens:** When a base color such as `--kendo-color-primary` is set, derived variants (hover, active, emphasis, on-color, subtle, etc.) are computed from it at runtime; no manual mapping is needed unless a specific variant needs an explicit override.

## Swatches

Swatches are pre-configured color variants shipped with each theme.

### Importing a Swatch

**CSS** (recommended):

```ts
import "@progress/kendo-theme-meridian/dist/meridian-main.css";
```

**Sass** (for further customization):

```scss
@use "@progress/kendo-theme-meridian/dist/meridian-main.scss" as *;
```

### Available Swatches

**Meridian:** `meridian-main`, `meridian-main-dark`

**Default:** `default-main`, `default-main-dark`, `default-blue`, `default-blue-dark`, `default-green`, `default-green-dark`, `default-orange`, `default-purple`, `default-turquoise`, `default-ocean-blue`, `default-ocean-blue-a11y`, `default-urban`, `default-nordic`

**Bootstrap:** `bootstrap-main`, `bootstrap-main-dark`, `bootstrap-3`, `bootstrap-3-dark`, `bootstrap-4`, `bootstrap-4-dark`, `bootstrap-turquoise`, `bootstrap-turquoise-dark`, `bootstrap-urban`, `bootstrap-nordic`, `bootstrap-vintage`

**Material:** `material-main`, `material-main-dark`, `material-2`, `material-2-dark`, `material-arctic`, `material-lime`, `material-lime-dark`, `material-pacific`, `material-pacific-dark`, `material-sky`, `material-sky-dark`, `material-smoke`, `material-nova`, `material-eggplant`, `material-burnt-teal`, `material-aqua-dark`

**Classic:** `classic-main`, `classic-main-dark`, `classic-green`, `classic-green-dark`, `classic-silver`, `classic-silver-dark`, `classic-opal`, `classic-opal-dark`, `classic-lavender`, `classic-lavender-dark`, `classic-metro`, `classic-metro-dark`, `classic-moonlight`, `classic-uniform`

**Fluent:** `fluent-main`, `fluent-main-dark`, `fluent-1`, `fluent-1-dark`

## Data Visualization (Series)

A base `series` token controls the starting point for chart colors. Six named series (`a` through `f`) are derived from it, each with 5 variants:

| Suffix | Purpose |
|---|---|
| `series-{x}` | Series base color |
| `series-{x}-bold` | Darker variant |
| `series-{x}-bolder` | Darkest variant |
| `series-{x}-subtle` | Lighter variant |
| `series-{x}-subtler` | Lightest variant |

Where `{x}` is `a`, `b`, `c`, `d`, `e`, or `f`. All six series follow this same pattern.

## Further Reading

- [Color System](https://www.telerik.com/design-system/docs/foundation/color)
- [Color Usage](https://www.telerik.com/design-system/docs/foundation/color/usage)
- [Swatches](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches)
