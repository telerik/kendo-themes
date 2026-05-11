# Border Radii

The border radius system provides a consistent rounding scale for Kendo and Telerik components. All size tokens derive from a single base variable using `calc()` multipliers, so changing the base rescales the entire radius scale proportionally.

## Available Tokens

| CSS Variable | Description |
|---|---|
| `--kendo-border-radius-base` | Foundation value; all other tokens scale from this |
| `--kendo-border-radius-none` | Always `0px` |
| `--kendo-border-radius-xs` | Extra small |
| `--kendo-border-radius-sm` | Small |
| `--kendo-border-radius-md` | Medium (equals base) |
| `--kendo-border-radius-lg` | Large |
| `--kendo-border-radius-xl` | Extra large |
| `--kendo-border-radius-xxl` | 2× extra large |
| `--kendo-border-radius-xxxl` | 3× extra large |
| `--kendo-border-radius-full` | Pill shape (`base × 9999`) |

## Per-Theme Base Values

Each theme sets its own `--kendo-border-radius-base`. The multiplier ratios from base to each size token also vary per theme.

| Theme | Base Value |
|---|---|
| Meridian | `0.375rem` |
| Bootstrap | `0.375rem` |
| Default | `0.25rem` |
| Classic | `0.25rem` |
| Fluent | `0.25rem` |
| Material | `0.25rem` |

## Customization

### CSS — override the base (rescales all tokens)

```css
:root {
  --kendo-border-radius-base: 0.5rem;
}
```

### CSS — override individual tokens

```css
:root {
  --kendo-border-radius-lg: 0.75rem;
  --kendo-border-radius-full: 50%;
}
```

### Sass — override at build time

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as * with (
    $kendo-border-radius-base: 0.5rem
);
```

## Further Reading

- [Border Radius](https://www.telerik.com/design-system/docs/foundation/border-radius)
- [Border Radius Usage](https://www.telerik.com/design-system/docs/foundation/border-radius/usage)
