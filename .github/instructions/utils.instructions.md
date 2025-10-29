---
applyTo: "packages/utils/**"
---

# Utils Package

Utility-first CSS library providing atomic classes for rapid layout development. Distributed standalone, works alongside Kendo themes.

## Package Purpose

- **Utility-First** - Atomic CSS classes with `k-` prefix
- **Rapid Prototyping** - Build layouts without custom CSS
- **Standalone** - Works independently from theme packages
- **Comprehensive** - Spacing, display, positioning, sizing, colors, typography

## Package Structure

```
packages/utils/
├── scss/
│   ├── all.scss                        # Main entry point
│   ├── _variables.scss                 # Configuration
│   ├── _functions.scss                 # Utility functions
│   ├── _mixins.scss                    # Reusable mixins
│   ├── accessibility/                  # Screen reader utilities
│   ├── background/                     # Background utilities
│   ├── border/                         # Border utilities
│   ├── flex-grid/                      # Flexbox & grid utilities
│   ├── layout/                         # Display, position, overflow
│   ├── sizing/                         # Width, height utilities
│   ├── spacing/                        # Margin, padding utilities
│   └── typography/                     # Text, font utilities
├── dist/                               # Compiled CSS
└── docs/                               # Generated SassDoc
```

## Utility Module Pattern

Each category follows this structure:

```
[utility]/
├── _index.scss                    # Entry point with mixins
├── [variant].scss                  # Specific utility implementations
└── ...                             # Additional variants
```

**Example (background/):**
```
background/
├── _index.scss
├── background-color.scss
├── background-position.scss
└── background-size.scss
```

## Naming Convention

Pattern: `k-{property}-{modifier}`

- **Prefix:** Always `k-`
- **Property:** Short abbreviation (`m` = margin, `p` = padding, `d` = display)
- **Modifier:** Size, direction, or value (`t` = top, `4` = size 4)

**Examples:**
- `k-mt-4` → margin-top size 4
- `k-p-2` → padding size 2
- `k-text-center` → text-align center
- `k-d-flex` → display flex

## Development Workflow

### Creating New Utilities

1. Create directory under `scss/[utility]/`
2. Create variant files for different aspects
3. Create `_index.scss` to include all variants
4. Define mixins for generating classes
5. Document variables with SassDoc
6. Update `scss/all.scss` to include utility

### Mixin Pattern

Utilities generate via SCSS mixins:

```scss
@mixin generate-margin-utilities() {
    @each $size, $value in $spacing-scale {
        .k-m-#{$size} {
            margin: $value !important;
        }
        .k-mt-#{$size} {
            margin-top: $value !important;
        }
    }
}

@include generate-margin-utilities();
```

## Build Commands

```bash
npm run sass              # Compile to dist/all.css
npm run sass:dist         # Compile with compression
npm run sass:watch        # Watch mode
npm run docs              # Generate SassDoc
npm run lint:styles       # Run Stylelint
```

## Related Documentation

- Root instructions: `../../.github/copilot-instructions.md`
- Core package: `.github/instructions/core.instructions.md`

