# Component Context (SCSS)

Canonical naming, paths, and rules for component SCSS. Other references link here instead of repeating these rules.

## Naming

From a component name (e.g., `smart-badge`):

| Item | Example |
|------|---------|
| Folder | `smart-badge` |
| CSS class | `k-smart-badge`, sub-elements `k-smart-badge-{element}` |
| Variable prefix | `$kendo-smart-badge-` |
| Mixin prefix | `kendo-smart-badge` (`--layout-base`, `--theme-base`, `--layout`, `--theme`, `--styles`) |
| `import-once` key | `"smart-badge"` (unique across the theme) |

## Paths

| Package | Component folder |
|---------|------------------|
| core | `packages/core/scss/components/{component}/` — `_variables.scss`, `_layout.scss`, `_theme.scss` |
| themes (`default`, `classic`, `material`, `fluent`, `bootstrap`, `meridian`) | `packages/{theme}/scss/{component}/` — same three files + `_index.scss` (no `components/` level) |
| theme entry | `packages/{theme}/scss/index.scss` — every component, in dependency order |
| unit tests | `units/{theme}/{component}.test.ts` |

## Value conventions

| Theme | Example values |
|-------|----------------|
| default, classic, bootstrap, material, meridian | `k-spacing(2)`, `k-color(surface-alt)`, `k-border-radius(md)`, `1px`, `var( --kendo-font-family, inherit )` |
| fluent | Every value wrapped: `var( --kendo-{variable-name}, {value} )`, e.g. `var( --kendo-button-padding-x, k-spacing(3) )`. Interpolation (`#{k-spacing(3)}`) is also used — match the surrounding file. |

## Rules

1. **Core holds no values.** Core variables are `$kendo-*: null !default;`; core mixins only reference `$kendo-*` variables.
2. **Every theme variable has `!default` and SassDoc** (see [variables.md](variables.md#sassdoc-rules)). Core variables have no SassDoc, except the `sizes` / `theme-colors` maps.
3. **The `@forward` map must be complete.** Each theme `_variables.scss` ends with:
   ```scss
   @forward "@progress/kendo-theme-core/scss/components/{component}/_variables.scss" with (
       $kendo-{component}-padding-x: $kendo-{component}-padding-x,
       $kendo-{component}-gap: $kendo-{component}-gap
   );
   ```
   Both sides use the same name. A missing entry silently leaves core's value `null`.
4. **State selectors pair pseudo-class and class:** `&:hover, &.k-hover { … }` (the class lets visual tests render the state).
5. **Order matters.** Keep related variables grouped; keep theme `index.scss` in dependency order — never alphabetize.
6. **Only touch the themes the user asked for.** If unspecified, ask (new components default to all themes).

## Reference components

Copy patterns from a component of similar complexity: simple `badge`, `chip`, `avatar`; medium `button`, `card`, `tooltip`; complex `grid`, `scheduler`, `editor`.

## Validation

```bash
npm run lint:styles 2>&1
npm run sass 2>&1
npm run docs 2>&1          # after variable changes; commit separately as `chore: regen docs`
npm run test:units 2>&1    # after variable or structure changes (needs docs first)
```
