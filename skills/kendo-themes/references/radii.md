# Border Radii

The border radius system provides a consistent rounding scale applied to Kendo and Telerik components.

## Base Variable

All sizes scale from `--kendo-border-radius-base` (Sass: `$kendo-border-radius-base`). Default: `0.25rem`. Each size token is a fixed multiplier of the base. Changing the base rescales every radius token proportionally.

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

Override border radius tokens using the CSS or Sass patterns from the [main skill](../SKILL.md#customization).

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
