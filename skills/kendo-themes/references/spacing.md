# Spacing

The spacing system provides a consistent scale for margins, padding, gaps, and sizing used by all Kendo and Telerik components.

## Base Variable

All spacing values are computed from a single base unit. Setting `--kendo-spacing-base` (or `$kendo-spacing-base` in Sass) scales the entire spacing map proportionally:

```css
:root {
  --kendo-spacing-base: 0.3rem; /* slightly larger than the 0.25rem default */
}
```

Equivalent Sass override:

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-spacing-base: 0.3rem
);
```

The default base is `0.25rem`. Each spacing step is a CSS `calc()` multiplier of the base, for example:

```scss
$kendo-spacing-base: 0.25rem !default;

$default-spacing: (
    0.5: calc(0.5 * var(--kendo-spacing-base)),
    1: calc(1 * var(--kendo-spacing-base)),
    1.5: calc(1.5 * var(--kendo-spacing-base)),
    ...
);
```

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

Components reference spacing via the `k-spacing()` Sass function, which outputs `var(--kendo-spacing-{step})`.

## Further Reading

- [Spacing](https://www.telerik.com/design-system/docs/foundation/spacing)
- [Spacing Usage](https://www.telerik.com/design-system/docs/foundation/spacing/usage)
