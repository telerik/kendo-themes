# Elevation

The elevation system provides shadow tokens for visual depth and layering.

## Customization

### CSS Custom Properties

```css
:root {
  --kendo-elevation-2: 0 4px 8px rgba(0, 0, 0, 0.08);
  --kendo-elevation-4: 0 8px 16px rgba(0, 0, 0, 0.12);
}
```

### Sass Map Override

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-elevation: (
    2: (0 4px 8px rgba(0, 0, 0, 0.08)),
    4: (0 8px 16px rgba(0, 0, 0, 0.12))
  )
);
```

## Available Tokens

| Level | CSS Variable | Default Value |
|---|---|---|
| 1 | `--kendo-elevation-1` | `0 2px 3px rgba(0, 0, 0, .04)` |
| 2 | `--kendo-elevation-2` | `0 4px 6px rgba(0, 0, 0, .06), 0 4px 16px rgba(0, 0, 0, .12)` |
| 3 | `--kendo-elevation-3` | `0 6px 8px rgba(0, 0, 0, .08), 0 4px 16px rgba(0, 0, 0, .12)` |
| 4 | `--kendo-elevation-4` | Progressive depth |
| 5 | `--kendo-elevation-5` | Progressive depth |
| 6 | `--kendo-elevation-6` | Progressive depth |
| 7 | `--kendo-elevation-7` | Progressive depth |
| 8 | `--kendo-elevation-8` | Progressive depth |
| 9 | `--kendo-elevation-9` | Maximum depth |

Higher levels produce deeper, more diffused shadows. Use level 1–3 for most components, 4–6 for overlays/popups, 7–9 for modals.

## Usage Example

```css
.my-card {
  box-shadow: var(--kendo-elevation-2);
}

.my-modal {
  box-shadow: var(--kendo-elevation-6);
}
```

## Further Reading

- [Elevation](https://www.telerik.com/design-system/docs/foundation/elevation)
- [Elevation Usage](https://www.telerik.com/design-system/docs/foundation/elevation/usage)
