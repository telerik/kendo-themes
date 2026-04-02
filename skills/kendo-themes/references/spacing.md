# Spacing

The spacing system provides a consistent scale for margins, padding, gaps, and sizing across all components.

## Customization

### CSS Custom Properties

```css
:root {
  --kendo-spacing-4: 1.2rem;  /* Override the default 1rem */
  --kendo-spacing-8: 2.5rem;
}
```

### Sass Map Override

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-spacing: (
    4: 1.2rem,
    8: 2.5rem
  )
);
```

## Available Tokens

| Key | Default Value | CSS Variable |
|---|---|---|
| `0` | `0px` | `--kendo-spacing-0` |
| `1px` | `1px` | `--kendo-spacing-1px` |
| `0.5` | `.125rem` | `--kendo-spacing-0\.5` |
| `1` | `.25rem` | `--kendo-spacing-1` |
| `1.5` | `.375rem` | `--kendo-spacing-1\.5` |
| `2` | `.5rem` | `--kendo-spacing-2` |
| `2.5` | `.625rem` | `--kendo-spacing-2\.5` |
| `3` | `.75rem` | `--kendo-spacing-3` |
| `3.5` | `.875rem` | `--kendo-spacing-3\.5` |
| `4` | `1rem` | `--kendo-spacing-4` |
| `4.5` | `1.125rem` | `--kendo-spacing-4\.5` |
| `5` | `1.25rem` | `--kendo-spacing-5` |
| `5.5` | `1.375rem` | `--kendo-spacing-5\.5` |
| `6` | `1.5rem` | `--kendo-spacing-6` |
| `6.5` | `1.625rem` | `--kendo-spacing-6\.5` |
| `7` | `1.75rem` | `--kendo-spacing-7` |
| `7.5` | `1.875rem` | `--kendo-spacing-7\.5` |
| `8` | `2rem` | `--kendo-spacing-8` |
| `9` | `2.25rem` | `--kendo-spacing-9` |
| `10` | `2.5rem` | `--kendo-spacing-10` |
| `11` | `2.75rem` | `--kendo-spacing-11` |
| `12` | `3rem` | `--kendo-spacing-12` |
| `13` | `3.25rem` | `--kendo-spacing-13` |
| `14` | `3.5rem` | `--kendo-spacing-14` |
| `15` | `3.75rem` | `--kendo-spacing-15` |
| `16` | `4rem` | `--kendo-spacing-16` |
| `17` | `4.25rem` | `--kendo-spacing-17` |
| `18` | `4.5rem` | `--kendo-spacing-18` |
| `19` | `4.75rem` | `--kendo-spacing-19` |
| `20` | `5rem` | `--kendo-spacing-20` |
| `21` | `5.25rem` | `--kendo-spacing-21` |
| `22` | `5.5rem` | `--kendo-spacing-22` |
| `23` | `5.75rem` | `--kendo-spacing-23` |
| `24` | `6rem` | `--kendo-spacing-24` |
| `25` | `7rem` | `--kendo-spacing-25` |
| `26` | `8rem` | `--kendo-spacing-26` |
| `27` | `9rem` | `--kendo-spacing-27` |
| `28` | `10rem` | `--kendo-spacing-28` |
| `29` | `11rem` | `--kendo-spacing-29` |
| `30` | `12rem` | `--kendo-spacing-30` |

Components reference spacing via the `k-spacing()` Sass function, which outputs `var(--kendo-spacing-{step})`.

## Further Reading

- [Spacing](https://www.telerik.com/design-system/docs/foundation/spacing)
- [Spacing Usage](https://www.telerik.com/design-system/docs/foundation/spacing/usage)
