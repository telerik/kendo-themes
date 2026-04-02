# Iconography

The Kendo icon system provides CSS styling for SVG icons. Icon rendering is framework-specific, but **theme-level styling is framework-agnostic**.

## Key Concept

The theme defines **how icons look** (size, color, spacing). Frameworks (React, Angular, Vue, jQuery) define **which icon to render**. This reference covers only the theme layer.

## Icon CSS Classes

| Class | Purpose |
|---|---|
| `.k-icon` | Base icon container |
| `.k-svg-icon` | SVG icon wrapper (primary) |
| `.k-icon-wrap` | Icon group wrapper |
| `.k-icon-action` | Clickable icon (adds padding + cursor) |
| `.k-button-icon` | Icon inside buttons |
| `.k-accent-icon` | Accent-colored icon |
| `.k-i-none` | Hidden icon placeholder |

## Sizing

Apply size classes alongside `.k-icon`:

| Class | Size | Scale |
|---|---|---|
| `.k-icon-xs` | 12px | 75% of base |
| `.k-icon-sm` | 14px | 87.5% of base |
| `.k-icon-md` | 16px | 100% (default) |
| `.k-icon-lg` | 20px | 125% of base |
| `.k-icon-xl` | 24px | 150% of base |
| `.k-icon-xxl` | 32px | 200% of base |
| `.k-icon-xxxl` | 48px | 300% of base |

All sizes are calculated from the base `--kendo-icon-size` (default: `16px`).

### Customizing Icon Size

```css
:root {
  --kendo-icon-size: 18px;  /* Changes base, all sizes recalculate */
}
```

```scss
$kendo-icon-size: 18px;
```

## Coloring

Icons inherit text color via `fill: currentColor`. Color them with:

```css
/* Using Kendo color utilities */
.k-icon { color: var(--kendo-color-primary); }

/* Or text color classes */
<span class="k-icon k-svg-icon k-text-primary">...</span>
```

Available color classes: `.k-text-primary`, `.k-text-secondary`, `.k-text-tertiary`, `.k-text-subtle`

## Transforms

| Class | Effect |
|---|---|
| `.k-flip-h` | Mirror horizontally |
| `.k-flip-v` | Mirror vertically |
| `.k-flip-both` | Mirror both axes |
| `.k-rotate-{degrees}` | Rotate (0, 45, 90, 135, 180, 225, 270, 315) |

## Customizable Variables

| SCSS Variable | CSS Variable | Default |
|---|---|---|
| `$kendo-icon-size` | `--kendo-icon-size` | `16px` |
| `$kendo-icon-spacing` | — | `k-spacing(1)` |
| `$kendo-icon-padding` | — | `k-spacing(1)` |
| `$kendo-accent-icon-color` | — | Theme-specific |

## Common Mistakes

- **Missing base class**: Always include `.k-icon` — size/transform classes need it for layout
- **Hardcoded sizes**: Use size classes or `--kendo-icon-size` instead of pixel values
- **Decorative icons**: Add `aria-hidden="true"` to icons that don't convey meaning

## SVG Icons Package

The icon definitions (SVG paths) come from `@progress/kendo-svg-icons`. This package provides 800+ icons as JavaScript objects. How they're consumed depends on the framework:

- **React/Angular/Vue**: Use the framework's icon component, which renders the SVG
- **jQuery/Vanilla**: Embed SVG markup within `.k-icon.k-svg-icon` wrappers

The theme doesn't control which icons are available — only how they're styled.

## Further Reading

- [Iconography](https://www.telerik.com/design-system/docs/foundation/iconography)
- [SVG Icons](https://www.telerik.com/design-system/docs/foundation/iconography/svg-icons)
- [Icon Styles](https://www.telerik.com/design-system/docs/foundation/iconography/styles-and-guidelines)
