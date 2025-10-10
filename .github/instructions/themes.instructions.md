---
applyTo: "packages/{default,classic,material,fluent,bootstrap}/**"
---

# Theme Packages

Instructions for all theme packages: `default`, `classic`, `material`, `fluent`, and `bootstrap`.

## Package Purpose

Consume and extend core package foundation to provide production-ready styling:

- **Concrete Values** - Override core's null variables with actual design values
- **Theme Identity** - Apply distinct visual styling (Material, Fluent, Bootstrap, etc.)
- **Multiple Swatches** - Generate color variants via JSON configuration
- **Production CSS** - Complete, optimized CSS for end-user applications
- **Customizable Tokens** - Allow brand customization through variable overrides
- **Cross-Framework** - Work with Angular, React, Vue, jQuery, and more

**Principle:** Themes provide values ("what"), core provides structure ("how").

## Package Structure

```
packages/[theme]/
├── scss/
│   ├── all.scss                        # Main entry point
│   ├── _variables.scss                 # Theme-level variables
│   └── [component]/                    # Component overrides
│       ├── _index.scss                 # Entry with mixin
│       ├── _variables.scss             # Override core nulls
│       ├── _layout.scss                # Extend core layout
│       └── _theme.scss                 # Apply theme colors
├── lib/swatches/                       # JSON swatch configs
├── dist/                               # Compiled CSS (all.css + swatches)
└── docs/                               # Generated SassDoc
```

## Component File Pattern

Same 4-file structure as core, but with actual values:

```
[component]/
├── _index.scss       # Entry point with dependencies
├── _variables.scss   # Override core nulls with values
├── _layout.scss      # Extend core structure
└── _theme.scss       # Apply theme styling
```

## Development Workflow

### 1. Variables (`_variables.scss`)

Override core nulls with actual values:

```scss
/// Button horizontal padding
/// @group button
$kendo-button-padding-x: k-spacing(2) !default;

/// Button border width
/// @group button
$kendo-button-border-width: 1px !default;

@forward "@progress/kendo-theme-core/scss/components/button/_variables.scss" with (
    $kendo-button-padding-x: $kendo-button-padding-x,
    $kendo-button-border-width: $kendo-button-border-width
);
```

### 2. Layout (`_layout.scss`)

Extend core patterns, apply values:

```scss
@use "@progress/kendo-theme-core/scss/components/button/_layout.scss" as *;

@mixin kendo-button--layout() {
    @include kendo-button--layout-base();

    .k-button {
        padding: $kendo-button-padding-y $kendo-button-padding-x;
        font-size: $kendo-button-font-size;
    }
}
```

### 3. Theme (`_theme.scss`)

Apply colors and visual styles:

```scss
@use "@progress/kendo-theme-core/scss/components/button/_theme.scss" as *;

@mixin kendo-button--theme() {
    @include kendo-button--theme-base();

    .k-button {
        color: $kendo-button-text;
        background-color: $kendo-button-bg;

        &:hover { background-color: $kendo-button-hover-bg; }
    }
}
```

### 4. Index (`_index.scss`)

Import dependencies and compose:

```scss
@use "../core/_index.scss" as *;
@use "../icon/_index.scss" as *;

@forward "./_variables.scss";
@use "./_layout.scss" as *;
@use "./_theme.scss" as *;

@mixin kendo-button--styles() {
    @include import-once("button") {
        @include kendo-button--layout();
        @include kendo-button--theme();
    }
}
```

## Swatch Generation

Swatches are color variants configured via JSON in `lib/swatches/`:

```json
{
    "name": "ocean-blue",
    "displayName": "Ocean Blue",
    "variables": {
        "kendo-color-primary": "#0058e9",
        "kendo-color-secondary": "#666666"
    }
}
```

Generate with: `npm run sass:dist`

## Build Commands

```bash
npm run sass              # Compile theme → dist/all.css
npm run sass:dist         # Compile all swatches
npm run sass:watch        # Watch mode
npm run docs              # Generate SassDoc
npm run lint:styles       # Run Stylelint
```

## Related Documentation

- Root instructions: `../../.github/copilot-instructions.md`
- Core package: `.github/instructions/core.instructions.md`

