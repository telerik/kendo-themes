---
description: Update a starter theme component to match a new Figma design
agent: agent
---

# Update Starter Theme Component from Figma

Use the `manage-components` skill to update the **{{component}}** component in the **starter** theme.

## Instructions

1. **Get the design** — Use the Figma MCP tools to fetch the design context and screenshot from the link above. Extract all relevant design tokens: spacing, colors, border-radius, font-size, font-weight, line-height, border-width, shadows, and any state variations (hover, focus, active, disabled, selected).

2. **Audit current state** — Read the existing starter theme variables for this component at `packages/starter/scss/{{component}}/_variables.scss` and the core null declarations at `packages/core/scss/components/{{component}}/_variables.scss`. Identify what needs to change.

3. **Update SCSS variables** — Update only the starter theme variable overrides in `packages/starter/scss/{{component}}/_variables.scss` to match the Figma design. Map Figma values to the design token system:
   - Spacing → `k-spacing()` values
   - Colors → `k-color()` or swatch-level color variables
   - Border radius → `k-border-radius()` values
   - Elevation/shadows → `k-elevation()` values
   - Keep using `!default` on all variables

4. **Add new variables if needed** — If the Figma design introduces tokens that don't have a corresponding core variable:
   - Add the null declaration in `packages/core/scss/components/{{component}}/_variables.scss`.
   - Add the layout property usage in core `_layout.scss` or `_theme.scss` if applicable.
   - Set the concrete value in `packages/starter/scss/{{component}}/_variables.scss`.
   - **Propagate to all themes**: If this variable is not starter theme specific and is meaningful to have in the other themes as well, add a `null !default` declaration and the corresponding `@forward` entry in every other theme's `_variables.scss` for this component (`packages/{default,bootstrap,material,classic,fluent}/scss/{{component}}/_variables.scss`). This keeps variable maps consistent across all themes.
   - Follow the `manage-scss-variables` skill.

5. **Update SCSS styles if needed** — If the design requires structural changes (new elements, changed selectors, layout changes), update the layout/theme mixins following the `manage-scss-styles` skill.

6. **Convert focus indicators to outline style** — The starter theme uses outline-based focus indicators instead of box-shadow. Check if the component has any focus-related shadow variables (e.g., `*-focus-shadow`, `*-focus-shadow-blur`, `*-focus-shadow-spread`, `*-focus-shadow-color`). If it does:
   - Null out the existing shadow variable(s) in the starter `_variables.scss` (set to `null !default`).
   - Add **local** outline focus variables (do NOT add these to core or other themes):
     ```scss
     $kendo-{component}-focus-outline-color: k-color(subtle) !default;
     $kendo-{component}-focus-outline-width: 1px !default;
     $kendo-{component}-focus-outline-offset: 1px !default;
     ```
   - Do **not** forward these outline variables in the `@forward` block — they are local to the starter theme only.
   - Override the theme mixin in `packages/starter/scss/{{component}}/_theme.scss` to apply the outline focus:
     ```scss
     @use "../core/_index.scss" as *;
     @use "./_variables.scss" as *;
     @use "@progress/kendo-theme-core/scss/components/{{component}}/_theme.scss" as *;

     @mixin kendo-{component}--theme() {
         @include kendo-{component}--theme-base();

         .k-{component} {
             &:focus,
             &.k-focus {
                 @include focus-indicator(
                     $type: "outline",
                     $indicator: $kendo-{component}-focus-outline-color,
                     $outline-width: $kendo-{component}-focus-outline-width,
                     $outline-offset: $kendo-{component}-focus-outline-offset
                 );
             }
         }
     }
     ```
   - Reference `packages/starter/scss/expansion-panel/_theme.scss` and `packages/starter/scss/bubble/_theme.scss` as working examples of this pattern.

7. **Validate** — Compile the theme with `npx gulp sass --theme starter` and fix any errors.

## Rules

- Modify files in `packages/starter/` and `packages/core/` (if new variables are needed).
- When adding new core variables, also add the `null !default` declaration and `@forward` entry in **all** other themes (`default`, `bootstrap`, `material`, `classic`, `fluent`). Every theme must forward every component variable for consistency.
- Focus outline variables (`*-focus-outline-color`, `*-focus-outline-width`, `*-focus-outline-offset`) are **starter-only** — do NOT add them to core or propagate to other themes. Do NOT include them in the `@forward` block.
- Prefer token functions over hardcoded values.
- Preserve existing SassDoc comments; add comments for new variables.
- If a Figma value doesn't map cleanly to an existing token, note it and ask before proceeding.
