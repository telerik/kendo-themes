# Colors

Colors are the most commonly customized aspect of component styling. The color system defines semantic tokens used by every Kendo and Telerik component.

For most work, start with **semantic color tokens** and **CSS custom properties**. The color system uses **OKLCH relative color syntax**, which means setting a single base color automatically computes all derived variants (hover, active, emphasis, on-color, etc.) at runtime — so changing one value rebrands every component that uses it.

## Color Layers

Colors are organized in layers:

1. **Semantic tokens** — Named roles such as `primary`, `error`, `surface`, and `border`
2. **CSS custom properties** — Runtime-accessible `--kendo-color-{name}` variables generated from those semantic tokens

## Customization

Override color tokens using the CSS or Sass patterns from the [main skill](../SKILL.md#customization). Recommended order:

1. **CSS custom properties** for runtime theming and scoped overrides.
2. **Swatches** when an existing color variant already matches your needs.
3. **Sass `$kendo-colors` overrides** for compile-time control over semantic tokens.

### OKLCH Relative Colors

The themes use **CSS relative color syntax** in the OKLCH color space. Set just the base semantic color token — all derived variants (hover, active, emphasis, on-color, subtle, etc.) auto-compute from it at runtime:

```css
--kendo-color-<role>-hover: oklch(from var(--kendo-color-<role>) calc(l - 0.044) calc(c - 0.012) h);
--kendo-color-<role>-active: oklch(from var(--kendo-color-<role>) calc(l - 0.088) calc(c - 0.027) h);
--kendo-color-<role>-emphasis: oklch(from var(--kendo-color-<role>) calc(l * 0.665 + 0.33) calc(c * 0.61) h);
```

Updating a base color propagates the change to all its derived states without any additional overrides.

### Sass Overrides

The `$kendo-colors` map merges with defaults (`map.merge`) — specify only the tokens you want to change. Use `k-generate-color-variations(<role>, <color>, "default")` to auto-expand one base color into all 10 semantic variants at compile time. For precise control over individual states, override `$kendo-colors` directly.

## Available Color Tokens

### Surface & Base

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
`base`, `primary`, `secondary`, `tertiary`, `info`, `success`, `warning`, `error`, `light`, `dark`, `inverse`

### Data Visualization (Series)

6 chart series colors, each with 5 variants:

`series-a`, `series-a-bold`, `series-a-bolder`, `series-a-subtle`, `series-a-subtler`

Series: `a` through `f`.

### Constants

These are Sass-only constants available in core sources. They are **not** exported as `--kendo-color-*` CSS custom properties.

| Token | Sass Constant | Value |
|---|---|---|
| white | `$kendo-color-white` | `#ffffff` |
| black | `$kendo-color-black` | `#000000` |
| transparent | `$kendo-color-rgba-transparent` | `rgba(0, 0, 0, 0)` |

## Swatches

Swatches are pre-configured color variants shipped with each theme.

### Importing a Swatch

**CSS** (recommended):

Import the compiled swatch CSS from your application entry point:

```ts
import "@progress/kendo-theme-default/dist/default-ocean-blue.css";
```

**Sass** (for further customization):

```scss
// In your app stylesheet, use a pre-built swatch SCSS and customize further
@use "@progress/kendo-theme-default/dist/default-ocean-blue.scss" as *;
```

### Available Swatches

**Default:** `default-main`, `default-main-dark`, `default-blue`, `default-blue-dark`, `default-green`, `default-green-dark`, `default-orange`, `default-purple`, `default-turquoise`, `default-ocean-blue`, `default-ocean-blue-a11y`, `default-urban`, `default-nordic`

**Bootstrap:** `bootstrap-main`, `bootstrap-main-dark`, `bootstrap-3`, `bootstrap-3-dark`, `bootstrap-4`, `bootstrap-4-dark`, `bootstrap-turquoise`, `bootstrap-turquoise-dark`, `bootstrap-urban`, `bootstrap-nordic`, `bootstrap-vintage`

**Material:** `material-main`, `material-main-dark`, `material-2`, `material-2-dark`, `material-arctic`, `material-lime`, `material-lime-dark`, `material-pacific`, `material-pacific-dark`, `material-sky`, `material-sky-dark`, `material-smoke`, `material-nova`, `material-eggplant`, `material-burnt-teal`, `material-aqua-dark`

**Classic:** `classic-main`, `classic-main-dark`, `classic-green`, `classic-green-dark`, `classic-silver`, `classic-silver-dark`, `classic-opal`, `classic-opal-dark`, `classic-lavender`, `classic-lavender-dark`, `classic-metro`, `classic-metro-dark`, `classic-moonlight`, `classic-uniform`

**Fluent:** `fluent-main`, `fluent-main-dark`, `fluent-1`, `fluent-1-dark`

## Further Reading

- [Color System](https://www.telerik.com/design-system/docs/foundation/color)
- [Color Usage](https://www.telerik.com/design-system/docs/foundation/color/usage)
- [Swatches](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches)
