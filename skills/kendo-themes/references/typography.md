# Typography

The typography system defines font families, sizes, weights, line heights, and letter spacing applied to all Kendo and Telerik components. All tokens are emitted as CSS custom properties on `:root` and shared across every theme.

## Per-Theme Defaults

### Base Font Family (`--kendo-font-family`)

| Theme | Value |
|---|---|
| Meridian | `Inter, system-ui, -apple-system, "Segoe UI", Roboto, …` |
| Bootstrap | `system-ui, -apple-system, "Segoe UI", Roboto, …` |
| Material | `Roboto, "Helvetica Neue", sans-serif` |
| Fluent | `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, …` |
| Classic / Default | `inherit` |

### Base Font Size (`--kendo-font-size`)

| Theme | Value |
|---|---|
| Meridian | `1rem` |
| Bootstrap | `1rem` |
| Material | `0.875rem` |
| Fluent | `0.875rem` |
| Classic / Default | `0.875rem` |

## Tokens

### Font Families

| CSS Variable | Core Default |
|---|---|
| `--kendo-font-family` | `inherit` (overridden per theme — see above) |
| `--kendo-font-family-sans` | `Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans` |
| `--kendo-font-family-serif` | `"Times New Roman", Georgia, Garamond, Palatino, Baskerville` |
| `--kendo-font-family-sans-serif` | `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", …` |
| `--kendo-font-family-monospace` | `SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", …` |

### Font Sizes

| CSS Variable | Core Default |
|---|---|
| `--kendo-font-size` | `0.875rem` (overridden per theme — see above) |
| `--kendo-font-size-xxs` | `0.5rem` |
| `--kendo-font-size-xs` | `0.625rem` |
| `--kendo-font-size-sm` | `0.75rem` |
| `--kendo-font-size-md` | `0.875rem` |
| `--kendo-font-size-lg` | `1rem` |
| `--kendo-font-size-xl` | `1.25rem` |

### Line Heights

| CSS Variable | Core Default |
|---|---|
| `--kendo-line-height` | `1.4286` |
| `--kendo-line-height-xs` | `1` |
| `--kendo-line-height-sm` | `1.25` |
| `--kendo-line-height-md` | `1.4286` |
| `--kendo-line-height-lg` | `1.5` |

### Font Weights

| CSS Variable | Core Default |
|---|---|
| `--kendo-font-weight` | `400` |
| `--kendo-font-weight-thin` | `100` |
| `--kendo-font-weight-extra-light` | `200` |
| `--kendo-font-weight-light` | `300` |
| `--kendo-font-weight-normal` | `400` |
| `--kendo-font-weight-medium` | `500` |
| `--kendo-font-weight-semibold` | `600` |
| `--kendo-font-weight-bold` | `700` |
| `--kendo-font-weight-extra-bold` | `800` |
| `--kendo-font-weight-black` | `900` |

### Letter Spacing

| CSS Variable | Core Default |
|---|---|
| `--kendo-letter-spacing` | `null` |
| `--kendo-letter-spacing-tightest` | `-0.15px` |
| `--kendo-letter-spacing-tighter` | `-0.10px` |
| `--kendo-letter-spacing-tight` | `-0.5px` |
| `--kendo-letter-spacing-normal` | `0px` |
| `--kendo-letter-spacing-wide` | `0.5px` |
| `--kendo-letter-spacing-wider` | `0.10px` |
| `--kendo-letter-spacing-widest` | `0.15px` |

## Customization

### CSS

Override any token on `:root` or a scoped selector:

```css
:root {
  --kendo-font-family: "Inter", sans-serif;
  --kendo-font-size: 1rem;
  --kendo-font-weight: 400;
  --kendo-line-height: 1.5;
  --kendo-letter-spacing: 0px;
}
```

### Sass

Configure the corresponding `$kendo-` variables in the theme `@use ... with ()` clause:

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as * with (
  $kendo-font-family: "Inter" sans-serif,
  $kendo-font-size: 1rem,
  $kendo-font-weight: 400,
  $kendo-line-height: 1.5,
  $kendo-letter-spacing: 0px
);
```

Theme builds emit typography tokens as CSS custom properties on `:root`. Component-level typography references the base tokens through variables such as `var(--kendo-font-size)` and `var(--kendo-font-family)`.
