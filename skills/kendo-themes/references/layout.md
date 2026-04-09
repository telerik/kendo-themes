# Layout

The layout sub-system provides responsive breakpoint tokens and media-query mixins. For general layout utilities (flex, grid), use Tailwind or your preferred CSS framework — Kendo themes focus on component styling, not page layout.

## Breakpoints

| Name | Value | CSS Variable |
|---|---|---|
| `xs` | `0` | `--kendo-container-xs-max-width` |
| `sm` | `576px` | `--kendo-container-sm-max-width` |
| `md` | `768px` | `--kendo-container-md-max-width` |
| `lg` | `992px` | `--kendo-container-lg-max-width` |
| `xl` | `1200px` | `--kendo-container-xl-max-width` |
| `xxl` | `1400px` | `--kendo-container-xxl-max-width` |

### Container Max-Widths

| Breakpoint | Max Width |
|---|---|
| `sm` | `540px` |
| `md` | `720px` |
| `lg` | `960px` |
| `xl` | `1140px` |
| `xxl` | `1320px` |

## Customization (Sass Only)

Override `$kendo-breakpoints` using the Sass pattern from the [main skill](../SKILL.md#customization). Breakpoints are Sass-only — not available as CSS custom properties.

## Media-Query Mixins

Available when importing via Sass:

```scss
// Mobile-first (min-width)
@include kendo-breakpoint-up(md) {
  .my-layout { display: grid; }
}

// Desktop-first (max-width)
@include kendo-breakpoint-down(md) {
  .my-layout { display: block; }
}

// Exact range (between breakpoint and next)
@include kendo-breakpoint-only(md) {
  .my-layout { max-width: 720px; }
}
```

## Further Reading

- [Spacing](https://www.telerik.com/design-system/docs/foundation/spacing) (related: spacing tokens used in layout)
