# Component Variables

Add, change, remove, or deprecate `$kendo-{component}-*` variables. Rules on core values, the `@forward` map, and Fluent's value format are in [context.md](context.md).

## Add a variable

1. **Core** — `packages/core/scss/components/{component}/_variables.scss`, next to related variables. Core is where the variable is documented:
   ```scss
   /// The gap between the items of the {ComponentName}.
   /// @group {component}
   $kendo-{component}-gap: null !default;
   ```
2. **Each targeted theme** — `packages/{theme}/scss/{component}/_variables.scss`, with no SassDoc (it is inherited from core):
   ```scss
   $kendo-{component}-gap: k-spacing(1) !default;
   ```
   Then add `$kendo-{component}-gap: $kendo-{component}-gap` to the `@forward … with ( … )` map at the bottom. Fluent: wrap the value in `var( --kendo-{component}-gap, … )` (see [context.md](context.md#value-conventions)).
3. **Use it** — reference the variable in core `_layout.scss` (structure: padding, gap, display, sizing) or `_theme.scss` (visuals: color, background, shadow). See [styles.md](styles.md).

For a brand-new component, start from the templates in [file-templates.md](file-templates.md).

## Change a value

- Edit only the targeted themes; never the core `null` declaration.
- Update the SassDoc description in core if it no longer fits. Never add or edit descriptions in themes.
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

Variable docs are written once, in core. Themes only inherit them: `scripts/sassdoc.js` copies the description, `@group` and `@role` from core onto each theme variable and keeps the theme's own value. Core itself generates no markdown; the docs come from the theme packages.

- **Core variable** — always documented, including module maps (`$kendo-colors`, `$kendo-spacing`, `$kendo-font-sizes`, …) and the `-sizes` / `-theme-colors` maps. Theme variables with the same name carry no `///` block.
- **Theme-only variable** (declared in one theme, absent from core) — documented in that theme with the same rules. If a second theme needs it, move it to core as `null` with the docs instead.
- **Redeclared variables** (e.g. a map set with `!default` and then merged) — put the docs on the first, `!default` declaration, in core.
- **Pass-through** — a variable pinned in the `@forward … with ( … )` map without `!default` is not documented or configurable.
- After changing docs, run `npm run docs` and commit the output separately as `chore: regen docs`.

Format:

- Description: `/// The {property} of the {ComponentName}[ {sub-element}].` — starts with "The", PascalCase component name, ends with a period.
- Name the state or sub-element when relevant: "The background color of the hovered Chip."
- Use standard terms (`padding`, `margin`, `width`, `radius`, `color`); "horizontal"/"vertical" for `-x`/`-y`.
- `@group` equals the component folder name exactly: lowercase, hyphenated (`tile-layout`, `action-buttons`).
- `$kendo-{component}-default-*` variables (default size, fill mode, theme color, roundness) also get `/// @role default`.
- Descriptions are unique within a file.
- Keep terms consistent across components: `CheckBox`, `TreeView`, `Toolbar`, `SmartBox`; "line height", not "line-height".
- The description must match how the variable is used (state, axis, property): check `_layout.scss` / `_theme.scss` before writing it.
