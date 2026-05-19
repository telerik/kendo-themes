# Iconography

The theme defines **how icons look** (size, color, spacing). Frameworks (React, Angular, Vue, jQuery) define **which icon to render** via `@progress/kendo-svg-icons`. This reference covers the styling layer only.

## Icon CSS Classes

| Class | Purpose |
|---|---|
| `.k-icon` | Base icon class — used by components for sizing and layout context |
| `.k-svg-icon` | SVG icon container (current standard) |
| `.k-font-icon` | Font-icon container (legacy, avoid in new code) |

## Sizing

Size classes apply on `.k-svg-icon`:

| Class | Scale | Default px |
|---|---|---|
| `.k-icon-xs` | 75% | 12px |
| `.k-icon-sm` | 87.5% | 14px |
| `.k-icon-md` | 100% (default) | 16px |
| `.k-icon-lg` | 125% | 20px |
| `.k-icon-xl` | 150% | 24px |
| `.k-icon-xxl` | 200% | 32px |
| `.k-icon-xxxl` | 300% | 48px |

All sizes derive from `$kendo-icon-size` (default: `16px` or `1rem` depending on the theme).

### Customizing Icon Size

```css
:root {
    --kendo-icon-size: 20px;
}

.k-svg-icon {
    width: var(--kendo-icon-size);
    height: var(--kendo-icon-size);
}

.k-font-icon {
    font-size: var(--kendo-icon-size);
}
```

```scss
@use "@progress/kendo-theme-default/scss/index.scss" as * with (
    $kendo-icon-size: 20px
);
```

## Coloring

Icons inherit text color via `fill: currentColor`. Override with color tokens:

```css
.k-svg-icon {
    color: var(--kendo-color-primary);
}
```

## Transforms

Flip and rotate classes are provided by `@progress/kendo-svg-icons` and apply the transform to the inner `> svg` element:

| Class | Effect |
|---|---|
| `.k-flip-h` | Mirror horizontally |
| `.k-flip-v` | Mirror vertically |
| `.k-flip-both` | Mirror both axes |
| `.k-rotate-{degrees}` | Rotate (0, 45, 90, 135, 180, 225, 270, 315) |

## Customizable Variables

| Variable | Default | Used by |
|---|---|---|
| `$kendo-icon-size` | `16px` or `1rem` | Icon sizing scale |
| `$kendo-icon-spacing` | `k-spacing(1)` or `k-spacing(2)` | Gap between icons and adjacent content in components |
| `$kendo-icon-padding` | `k-spacing(1)` | Clickable icon hit area |
| `$kendo-accent-icon-color` | Theme-specific | Accent-colored icons |

## SVG Icons Package

Icon definitions (SVG paths) come from `@progress/kendo-svg-icons`. How icons are rendered is framework-specific — refer to your product documentation for usage details.
