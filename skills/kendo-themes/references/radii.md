# Border Radii

The border radius system provides a consistent rounding scale used by all components.

## Base Variable

All border radius sizes scale from a single base value. Setting `--kendo-border-radius-base` (or `$kendo-border-radius-base` in Sass) automatically adjusts every size token proportionally, since each is defined as a CSS `calc()` multiplier relative to it:

```css
:root {
  --kendo-border-radius-base: 0.5rem; /* double the default — scales all sizes */
}
```

Equivalent Sass override:

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-border-radius-base: 0.5rem
);
```

The default is `0.25rem`. Each size token is a fixed multiple:

| Token | Multiplier | Default (`base = 0.25rem`) |
|---|---|---|
| `xs` | `base × 0.25` | `~0.063rem` |
| `sm` | `base × 0.5` | `0.125rem` |
| `md` | `base × 1` | `0.25rem` |
| `lg` | `base × 1.5` | `0.375rem` |
| `xl` | `base × 2` | `0.5rem` |
| `xxl` | `base × 3` | `0.75rem` |
| `xxxl` | `base × 4` | `1rem` |
| `full` | `base × 9999` | `9999px` (pill) |

## Customization

### CSS Custom Properties

```css
:root {
  --kendo-border-radius-md: 6px;
  --kendo-border-radius-lg: 8px;
}
```

### Sass Variable Override

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-border-radius-md: 6px,
  $kendo-border-radius-lg: 8px
);
```

## Available Tokens

| Token | Default Value | CSS Variable |
|---|---|---|
| `none` | `0px` | `--kendo-border-radius-none` |
| `xs` | `calc(base × 0.25)` | `--kendo-border-radius-xs` |
| `sm` | `calc(base × 0.5)` | `--kendo-border-radius-sm` |
| `md` | `var(--kendo-border-radius-base)` | `--kendo-border-radius-md` |
| `lg` | `calc(base × 1.5)` | `--kendo-border-radius-lg` |
| `xl` | `calc(base × 2)` | `--kendo-border-radius-xl` |
| `xxl` | `calc(base × 3)` | `--kendo-border-radius-xxl` |
| `xxxl` | `calc(base × 4)` | `--kendo-border-radius-xxxl` |
| `full` | `calc(base × 9999)` | `--kendo-border-radius-full` |

## Further Reading

- [Border Radius](https://www.telerik.com/design-system/docs/foundation/border-radius)
- [Border Radius Usage](https://www.telerik.com/design-system/docs/foundation/border-radius/usage)
