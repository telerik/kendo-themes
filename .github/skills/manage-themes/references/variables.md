# Component Variables

Add, change, remove, or deprecate `$kendo-{component}-*` variables. Rules on core values, the `@forward` map, and Fluent wrapping are in [context.md](context.md).

## Add a variable

1. **Core** — `packages/core/scss/components/{component}/_variables.scss`, next to related variables:
   ```scss
   $kendo-{component}-gap: null !default;
   ```
2. **Each targeted theme** — `packages/{theme}/scss/{component}/_variables.scss`:
   ```scss
   /// The gap between the items of the {ComponentName}.
   /// @group {component}
   $kendo-{component}-gap: k-spacing(1) !default;
   ```
   Then add `$kendo-{component}-gap: $kendo-{component}-gap` to the `@forward … with ( … )` map at the bottom. Fluent: wrap the value in `var( --kendo-{component}-gap, … )`.
3. **Use it** — reference the variable in core `_layout.scss` (structure: padding, gap, display, sizing) or `_theme.scss` (visuals: color, background, shadow). See [styles.md](styles.md).

For a brand-new component, start from the templates in [file-templates.md](file-templates.md).

## Change a value

- Edit only the targeted themes; never the core `null` declaration.
- Update the SassDoc description if it no longer fits.
- Check derived variables that use this one (e.g. `$kendo-button-sm-calc-size`).
- Fluent: change the fallback inside `var( … )`.

## Remove or deprecate

Removal is breaking — confirm with the user first, or deprecate instead:

```scss
// @deprecated Use $kendo-{component}-new-var instead.
$kendo-{component}-old-var: $kendo-{component}-new-var !default;
```

When removing: delete from core, every theme `_variables.scss`, every `@forward` map, and every `_layout.scss` / `_theme.scss` reference; update unit tests in `units/{theme}/` that list the variable.

## SassDoc rules

- Description: `/// The {property} of the {ComponentName}[ {sub-element}].` — starts with "The", PascalCase component name, ends with a period.
- Name the state or sub-element when relevant: "The background color of the hovered Chip."
- Use standard terms (`padding`, `margin`, `width`, `radius`, `color`); "horizontal"/"vertical" for `-x`/`-y`.
- `@group` is the component folder name: lowercase, hyphenated, singular (`tile-layout`).
- `$kendo-{component}-default-*` variables (default size, fill mode, theme color, roundness) also get `/// @role default`.
- Descriptions are unique within a file.
