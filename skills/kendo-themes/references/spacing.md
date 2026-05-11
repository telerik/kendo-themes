# Spacing

The spacing system provides a consistent scale for margins, padding, gaps, and sizing across all Kendo and Telerik components.

All themes share the same base value (`0.25rem`) and the same 34-step token scale. Every token is a `calc()` multiplier of `--kendo-spacing-base`, so changing the base rescales the entire system proportionally.

## Available Tokens

| Step | CSS Variable | Computed (base = 0.25rem) |
|------|------|------|
| `0` | `--kendo-spacing-0` | `0px` |
| `1px` | `--kendo-spacing-1px` | `1px` |
| `0.5` | `--kendo-spacing-0\.5` | `0.125rem` |
| `1` | `--kendo-spacing-1` | `0.25rem` |
| `1.5` | `--kendo-spacing-1\.5` | `0.375rem` |
| `2` | `--kendo-spacing-2` | `0.5rem` |
| `2.5` | `--kendo-spacing-2\.5` | `0.625rem` |
| `3` | `--kendo-spacing-3` | `0.75rem` |
| `3.5` | `--kendo-spacing-3\.5` | `0.875rem` |
| `4` | `--kendo-spacing-4` | `1rem` |
| `4.5` | `--kendo-spacing-4\.5` | `1.125rem` |
| `5` | `--kendo-spacing-5` | `1.25rem` |
| `5.5` | `--kendo-spacing-5\.5` | `1.375rem` |
| `6` | `--kendo-spacing-6` | `1.5rem` |
| `6.5` | `--kendo-spacing-6\.5` | `1.625rem` |
| `7` | `--kendo-spacing-7` | `1.75rem` |
| `7.5` | `--kendo-spacing-7\.5` | `1.875rem` |
| `8` | `--kendo-spacing-8` | `2rem` |
| `9` | `--kendo-spacing-9` | `2.25rem` |
| `10` | `--kendo-spacing-10` | `2.5rem` |
| `11` | `--kendo-spacing-11` | `2.75rem` |
| `12` | `--kendo-spacing-12` | `3rem` |
| `13` | `--kendo-spacing-13` | `3.25rem` |
| `14` | `--kendo-spacing-14` | `3.5rem` |
| `15` | `--kendo-spacing-15` | `3.75rem` |
| `16` | `--kendo-spacing-16` | `4rem` |
| `17` | `--kendo-spacing-17` | `4.25rem` |
| `18` | `--kendo-spacing-18` | `4.5rem` |
| `19` | `--kendo-spacing-19` | `4.75rem` |
| `20` | `--kendo-spacing-20` | `5rem` |
| `21` | `--kendo-spacing-21` | `5.25rem` |
| `22` | `--kendo-spacing-22` | `5.5rem` |
| `23` | `--kendo-spacing-23` | `5.75rem` |
| `24` | `--kendo-spacing-24` | `6rem` |

## Customization

### CSS — Override the Base

Change a single variable to rescale every spacing token:

```css
:root {
  --kendo-spacing-base: 0.3rem;
}
```

### CSS — Override Individual Tokens

```css
:root {
  --kendo-spacing-4: 1.25rem;
  --kendo-spacing-8: 2.5rem;
}
```

### Sass — Override at Build Time

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as * with (
  $kendo-spacing-base: 0.3rem
);
```

## How It Works

Each token is defined as `calc(<step> * var(--kendo-spacing-base))`. The two fixed tokens (`0` and `1px`) are absolute values unaffected by the base.

## Further Reading

- [Spacing](https://www.telerik.com/design-system/docs/foundation/spacing)
- [Spacing Usage](https://www.telerik.com/design-system/docs/foundation/spacing/usage)
