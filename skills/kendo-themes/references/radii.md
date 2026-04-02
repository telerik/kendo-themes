# Border Radii

The border radius system provides a consistent rounding scale used by all components.

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
| `xs` | `1px` | `--kendo-border-radius-xs` |
| `sm` | `.125rem` | `--kendo-border-radius-sm` |
| `md` | `.25rem` | `--kendo-border-radius-md` |
| `lg` | `.375rem` | `--kendo-border-radius-lg` |
| `xl` | `.5rem` | `--kendo-border-radius-xl` |
| `xxl` | `.75rem` | `--kendo-border-radius-xxl` |
| `xxxl` | `1rem` | `--kendo-border-radius-xxxl` |
| `full` | `9999px` | `--kendo-border-radius-full` |

## Further Reading

- [Border Radius](https://www.telerik.com/design-system/docs/foundation/border-radius)
- [Border Radius Usage](https://www.telerik.com/design-system/docs/foundation/border-radius/usage)
