# Extending Kendo Theme Utils

This guide covers how to extend and customize the `@progress/kendo-themes-utils` package.

## Overview

The utils package provides utility-first CSS classes for common styling needs:
- **Spacing** — padding, margin, gap
- **Sizing** — width, height, min/max variants
- **Flexbox/Grid** — display, alignment, justify
- **Typography** — font size, weight, alignment
- **Effects** — opacity, shadows, transforms
- **Responsive** — breakpoint-aware variants

All classes use the `k-` prefix (configurable) and follow the pattern `.k-{property}-{value}`.

## Extension Points

### 1. Custom Utility Classes via `generate-utils`

The core mixin `generate-utils` powers all utility generation. Use it to create custom utilities:

```scss
@use "@progress/kendo-themes-utils/scss/mixins" as *;

// Custom z-index utilities
$my-z-indexes: (
    0: 0,
    10: 10,
    50: 50,
    modal: 1000,
    tooltip: 1100
);

@include generate-utils(z, z-index, $my-z-indexes);
// Generates: .k-z-0, .k-z-10, .k-z-50, .k-z-modal, .k-z-tooltip
// Plus !important variants: .\!k-z-0, etc.
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$name` | String | Base class name (e.g., "z" → `.k-z-*`) |
| `$props` | String/List | CSS property or properties to set |
| `$values` | Map/List | Key-value pairs for class suffixes and values |
| `$function` | String | Optional transform function name |
| `$important` | Bool/String | Generate `!important` variants |
| `$css-var` | String | Optional CSS custom property for theming |

### 2. Breakpoint Customization

Override the default breakpoints before importing:

```scss
// Before importing utils
$kendo-breakpoints: (
    xs: 0,
    sm: 480px,    // Changed from 576px
    md: 768px,
    lg: 1024px,   // Changed from 992px
    xl: 1280px,   // Changed from 1200px
    xxl: 1536px   // Changed from 1400px
);

@use "@progress/kendo-themes-utils/scss/index" as *;
```

**Breakpoint mixins:**

```scss
// Styles for md and up (min-width: 768px)
@include kendo-breakpoint-up(md) {
    .my-component { display: flex; }
}

// Styles for smaller than md (max-width: 767.98px)
@include kendo-breakpoint-down(md) {
    .my-component { display: block; }
}

// Styles only for md (768px to 991.98px)
@include kendo-breakpoint-only(md) {
    .my-component { display: grid; }
}
```

### 3. Prefix and Importance Configuration

```scss
// Change the class prefix (default: "k-")
$kendo-prefix: "my-";

// Control !important variant generation
$kendo-important: true;   // Both normal and !important (default)
$kendo-important: false;  // Only normal classes
$kendo-important: "only"; // Only !important classes

@use "@progress/kendo-themes-utils/scss/index" as *;
```

### 4. Selective Imports

Import only what you need to reduce CSS output:

```scss
// Instead of importing everything
@use "@progress/kendo-themes-utils/scss/spacing/padding";
@use "@progress/kendo-themes-utils/scss/flex-grid/display";
@use "@progress/kendo-themes-utils/scss/sizing/width";
```

## Test Guidance

### Verifying Custom Utilities

1. **Compile and inspect output:**
   ```bash
   npm run sass --prefix packages/utils
   grep "your-class-name" packages/utils/dist/all.css
   ```

2. **Check for naming conflicts:**
   ```bash
   # Ensure your utility names don't conflict with existing ones
   grep "\.k-your-name" packages/utils/dist/all.css
   ```

3. **Validate responsive variants:**
   ```bash
   # Check breakpoint media queries are correct
   grep -A2 "@media.*min-width" packages/utils/dist/all.css | head -20
   ```

### Integration Testing

If adding utils to a project:

```scss
// test.scss
@use "your-custom-utils";

.test-element {
    @extend .k-p-4;        // Should work
    @extend .k-your-util;  // Your custom utility
}
```

Compile and verify the output contains expected CSS.

## Common Patterns

### Adding CSS Custom Property Support

```scss
@include generate-utils(
    gap,
    gap,
    $kendo-spacing,
    $css-var: "spacing"  // Creates var(--kendo-spacing-{key})
);
```

### Using Transform Functions

```scss
// For values that need wrapping (e.g., translate, rotate)
@include generate-utils(rotate, transform, $rotations, k-rotate);
// k-rotate($val) returns rotate($val)
```

## Related Files

- [_mixins.scss](../packages/utils/scss/_mixins.scss) — Core mixins
- [_variables.scss](../packages/utils/scss/_variables.scss) — Configuration variables
- [_functions.scss](../packages/utils/scss/_functions.scss) — Helper functions

---

*Last updated: 2026-01-06 | Crawl Exercise 04*
