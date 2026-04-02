# Typography

The typography system defines font families, sizes, weights, line heights, and letter spacing.

## Customization

### CSS Custom Properties

```css
:root {
  --kendo-font-family: 'Inter', sans-serif;
  --kendo-font-size: 15px;
  --kendo-line-height: 1.5;
  --kendo-font-weight: 400;
}
```

### Sass Variable Override

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-font-family: ('Inter', sans-serif),
  $kendo-font-size: 15px,
  $kendo-line-height: 1.5
);
```

## Available Tokens

### Font Families

| Token | Default | CSS Variable |
|---|---|---|
| `font-family` | `inherit` | `--kendo-font-family` |
| `font-family-sans` | `Arial, Verdana, ...` | `--kendo-font-family-sans` |
| `font-family-serif` | `Times New Roman, Georgia, ...` | `--kendo-font-family-serif` |
| `font-family-sans-serif` | `system-ui, -apple-system, Segoe UI, Roboto, ...` | `--kendo-font-family-sans-serif` |
| `font-family-monospace` | `SFMono-Regular, Menlo, Monaco, ...` | `--kendo-font-family-monospace` |

### Font Sizes

| Token | Default | CSS Variable |
|---|---|---|
| `font-size` | `0.875rem` (base) | `--kendo-font-size` |
| `font-size-xxs` | `0.5rem` | `--kendo-font-size-xxs` |
| `font-size-xs` | `0.625rem` | `--kendo-font-size-xs` |
| `font-size-sm` | `0.75rem` | `--kendo-font-size-sm` |
| `font-size-md` | `0.875rem` | `--kendo-font-size-md` |
| `font-size-lg` | `1rem` | `--kendo-font-size-lg` |
| `font-size-xl` | `1.25rem` | `--kendo-font-size-xl` |

### Line Heights

| Token | Default | CSS Variable |
|---|---|---|
| `line-height` | `1.4286` (base) | `--kendo-line-height` |
| `line-height-xs` | `1` | `--kendo-line-height-xs` |
| `line-height-sm` | `1.25` | `--kendo-line-height-sm` |
| `line-height-md` | `1.4286` | `--kendo-line-height-md` |
| `line-height-lg` | `1.5` | `--kendo-line-height-lg` |

### Font Weights

| Token | Default | CSS Variable |
|---|---|---|
| `font-weight` | `400` (base) | `--kendo-font-weight` |
| `font-weight-thin` | `100` | `--kendo-font-weight-thin` |
| `font-weight-extra-light` | `200` | `--kendo-font-weight-extra-light` |
| `font-weight-light` | `300` | `--kendo-font-weight-light` |
| `font-weight-normal` | `400` | `--kendo-font-weight-normal` |
| `font-weight-medium` | `500` | `--kendo-font-weight-medium` |
| `font-weight-semibold` | `600` | `--kendo-font-weight-semibold` |
| `font-weight-bold` | `700` | `--kendo-font-weight-bold` |
| `font-weight-extra-bold` | `800` | `--kendo-font-weight-extra-bold` |
| `font-weight-black` | `900` | `--kendo-font-weight-black` |

### Letter Spacing

| Token | Default | CSS Variable |
|---|---|---|
| `letter-spacing` | `null` (base) | `--kendo-letter-spacing` |
| `letter-spacing-tightest` | `-.15px` | `--kendo-letter-spacing-tightest` |
| `letter-spacing-tighter` | `-.10px` | `--kendo-letter-spacing-tighter` |
| `letter-spacing-tight` | `-.5px` | `--kendo-letter-spacing-tight` |
| `letter-spacing-normal` | `0px` | `--kendo-letter-spacing-normal` |
| `letter-spacing-wide` | `.5px` | `--kendo-letter-spacing-wide` |
| `letter-spacing-wider` | `.10px` | `--kendo-letter-spacing-wider` |
| `letter-spacing-widest` | `.15px` | `--kendo-letter-spacing-widest` |

## Further Reading

- [Typography](https://www.telerik.com/design-system/docs/foundation/typography)
- [Typography Usage](https://www.telerik.com/design-system/docs/foundation/typography/usage)
