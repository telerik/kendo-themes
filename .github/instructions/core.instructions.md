---
applyTo: "packages/core/**"
---

# Core Package

The foundational package providing design system framework, component structure, functions, and mixins. Core defines skeleton patterns with null variables - themes provide actual values.

## Package Purpose

- **Design System Foundation** - Base design tokens (spacing, typography, colors, elevation, motion)
- **Component Skeletons** - Structure definitions for 80+ UI components
- **Functions & Mixins** - SCSS utilities and common patterns
- **Null Variables** - Variables set to `null` (themes override with values)
- **Template Patterns** - Layout and theme patterns without specific values

**Philosophy:** Core is a template system, not a theme. Structure is defined, values come from themes.

## Package Structure

```
packages/core/
├── scss/
│   ├── all.scss                        # Main entry (generates CSS)
│   ├── index.scss                      # Import-only entry
│   ├── _variables.scss                 # Design system foundation
│   ├── border-radii/                   # Border radius scale
│   ├── color-system/                   # Color palette structure
│   ├── elevation/                      # Shadow system
│   ├── functions/                      # SCSS utility functions
│   ├── mixins/                         # Reusable SCSS mixins
│   ├── motion/                         # Animation timing/easing
│   ├── spacing/                        # Spacing scale
│   ├── typography/                     # Font system
│   ├── z-index/                        # Stacking order
│   └── components/[component]/         # Component definitions
│       ├── _index.scss                 # Entry with mixin
│       ├── _variables.scss             # Null variables
│       ├── _layout.scss                # Structure skeleton
│       └── _theme.scss                 # Visual template
├── dist/                               # Compiled output
└── docs/                               # Generated SassDoc
```

## Design System Modules

| Module | Purpose |
|--------|---------|
| **color-system** | Color palette structure, semantic colors, state colors |
| **typography** | Font families, sizes, weights, line heights |
| **spacing** | Spacing scale (0-32+ levels) for margins, padding, gaps |
| **border-radii** | Border radius scale (none, sm, md, lg, xl, full) |
| **elevation** | Shadow system for depth (0-24+ levels) |
| **motion** | Animation timing, easing functions, transitions |
| **z-index** | Stacking order (base, overlay, modal, tooltip, notification) |

## Component File Pattern

Each component follows this 4-file structure:

```
[component]/
├── _index.scss       # Entry point with mixin and dependencies
├── _variables.scss   # Null variables with SassDoc
├── _layout.scss      # Structural styles (no values)
└── _theme.scss       # Visual patterns (no values)
```

### Variables (`_variables.scss`)

Define customizable properties as null:

```scss
/// Component background color
/// @group component-name
$kendo-component-bg: null !default;

/// Component padding
/// @group component-name
$kendo-component-padding: null !default;
```

### Layout (`_layout.scss`)

Define structure without values:

```scss
@mixin kendo-component--layout() {
    .k-component {
        padding: $kendo-component-padding;      // Use variables
        display: $kendo-component-display;
    }
}
```

### Theme (`_theme.scss`)

Define visual patterns without values:

```scss
@mixin kendo-component--theme() {
    .k-component {
        color: $kendo-component-text;           // Use variables
        background-color: $kendo-component-bg;
    }
}
```

## Build Commands

```bash
npm run sass              # Compile to dist/all.css
npm run sass:watch        # Watch mode
npm run docs              # Generate SassDoc
npm run lint:styles       # Run Stylelint
```

## Related Documentation

- Root instructions: `../../.github/copilot-instructions.md`
- Themes: `.github/instructions/themes.instructions.md`

