# Elevation

The elevation system provides box-shadow tokens that give Kendo and Telerik components visual depth and layering. Each theme defines its own shadow values per level.

## Available Tokens

All themes provide 5 elevation levels: `--kendo-elevation-1` through `--kendo-elevation-5`.

### Meridian Values (recommended theme)

| Level | Value |
|---|---|
| 1 | `0 0 4px 1px rgba(56,66,80,.05), 0 4px 6px -2px rgba(56,66,80,.06)` |
| 2 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 4px 6px -2px rgba(56,66,80,.02), 0 12px 16px -4px rgba(56,66,80,.08)` |
| 3 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 8px 10px -4px rgba(56,66,80,.04), 0 16px 20px -4px rgba(56,66,80,.08)` |
| 4 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 12px 14px -4px rgba(56,66,80,.04), 0 18px 24px -5px rgba(56,66,80,.08)` |
| 5 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 16px 18px -6px rgba(56,66,80,.06), 0 20px 28px -6px rgba(56,66,80,.08)` |

### Usage Guidelines

- Level 1–2: Subtle depth for cards, inputs, and inline elements.
- Level 3–4: Popovers, popups, and overlays.
- Level 5: Modals and high-priority layers.

### Elevation Background

In dark mode, themes also apply an `elevation-bg` function that subtly increases lightness at higher elevation levels (using OKLCH color math). This is automatic and does not require consumer configuration.

## Customization

### CSS Override

```css
:root {
    --kendo-elevation-1: 0 2px 4px rgba(0, 0, 0, 0.1);
    --kendo-elevation-2: 0 4px 8px rgba(0, 0, 0, 0.12);
}
```

### Sass Override

Configure the `$kendo-elevation` map in the theme `@use ... with ()` clause:

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as * with (
    $kendo-elevation: (
        1: (0 2px 4px rgba(0, 0, 0, 0.1)),
        2: (0 4px 8px rgba(0, 0, 0, 0.12)),
        3: (0 8px 16px rgba(0, 0, 0, 0.14)),
        4: (0 12px 24px rgba(0, 0, 0, 0.16)),
        5: (0 16px 32px rgba(0, 0, 0, 0.18))
    )
);
```

### Using Elevation in Custom Components

```css
.my-card {
    box-shadow: var(--kendo-elevation-2);
}
```

## Further Reading

- [Elevation](https://www.telerik.com/design-system/docs/foundation/elevation)
- [Elevation Usage](https://www.telerik.com/design-system/docs/foundation/elevation/usage)
