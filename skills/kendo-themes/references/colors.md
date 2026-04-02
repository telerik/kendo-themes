# Colors

The color system is the most commonly customized sub-system. It defines semantic color tokens used across all components.

For most customization work, start with **semantic color tokens**, **CSS custom properties**, and **swatches**. Treat palettes as an advanced Sass building block that feeds semantic tokens, not as the primary API most consumers should edit directly.

## Color Layers

Colors are organized in layers:

1. **Semantic tokens** — Named roles such as `primary`, `error`, `surface`, and `border`
2. **CSS custom properties** — Runtime-accessible `--kendo-color-{name}` variables generated from those semantic tokens
3. **Palettes** — Advanced Sass source ramps that can feed semantic tokens when building custom theme variants

## Customization

Recommended order:

1. Use **CSS custom properties** for runtime theming and scoped overrides.
2. Use **swatches** when an existing color variant already matches your needs.
3. Use **Sass `$kendo-colors` overrides** when you want compile-time control over semantic tokens.
4. Reach for **palettes** only if you are doing advanced Sass-level theme construction.

### CSS Custom Properties

Override at `:root` for global changes, or scope to specific selectors:

```css
:root {
  --kendo-color-primary: #0058e9;
  --kendo-color-primary-hover: #004dcc;
  --kendo-color-primary-active: #0042b0;
  --kendo-color-on-primary: #ffffff;
}

/* Scoped dark mode */
.dark-mode {
  --kendo-color-app-surface: #1e1e1e;
  --kendo-color-on-app-surface: #ffffff;
  --kendo-color-surface: #2d2d2d;
}
```

### Sass: Auto-Expand from a Single Color (Easiest)

Use `k-generate-color-variations()` to generate all 10 semantic variants from one base color, then merge them into `$kendo-colors`:

```scss
@use "sass:map";
@use "@progress/kendo-theme-default/scss/color-system/_functions.scss" as fn;
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-colors: map.merge(
    fn.k-generate-color-variations("primary", #0058e9, "default"),
    fn.k-generate-color-variations("secondary", #6c757d, "default")
  )
);
```

`k-generate-color-variations($name, $color, $theme)` returns a map with all 10 variants (`-subtle`, `-hover`, `-active`, `-emphasis`, `on-`, etc.) computed from the base color using theme-appropriate tint/shade math.

The `$theme` parameter must match your chosen theme: `"default"`, `"bootstrap"`, `"material"`, `"fluent"`, or `"classic"`. Each theme applies different tint/shade ratios — using the wrong value produces visually inconsistent results.

### Sass: Manual Map Override (Full Control)

When you need exact control over individual states — e.g. a brand spec dictates the precise hover color — override `$kendo-colors` directly:

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-colors: (
    primary: #0058e9,
    primary-hover: #004dcc,
    primary-active: #0042b0,
    on-primary: #ffffff
  )
);
```

You only need to specify the tokens you want to change — the theme merges your overrides with defaults via `map.merge($default-colors, $kendo-colors)`, so unspecified tokens keep their default values.

You can also combine both approaches: auto-expand most colors, then manually override specific states that need precise values.

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

| Token | CSS Variable | Value |
|---|---|---|
| white | `--kendo-color-white` | `#ffffff` |
| black | `--kendo-color-black` | `#000000` |
| transparent | `--kendo-color-rgba-transparent` | `rgba(0, 0, 0, 0)` |

### Source Palettes (Advanced Sass)

Palettes are optional source ramps for advanced Sass users building or remapping semantic tokens:

`$kendo-palette-gray`, `$kendo-palette-coral`, `$kendo-palette-sky-blue`, `$kendo-palette-green`, `$kendo-palette-blue`, `$kendo-palette-yellow`, `$kendo-palette-red`, `$kendo-palette-lemon-yellow`, `$kendo-palette-spring-green`, `$kendo-palette-royal-blue`, `$kendo-palette-lavender-purple`, `$kendo-palette-flamingo-pink`

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
- [Color Palettes](https://www.telerik.com/design-system/docs/foundation/color/color-palettes)
- [Color Usage](https://www.telerik.com/design-system/docs/foundation/color/usage)
- [Swatches](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches)
