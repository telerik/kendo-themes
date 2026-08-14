# Native CSS theme — proof of concept

Standalone, hand-written CSS reimplementation of the Meridian **button** and
**input/textbox** styles. It does not import, wrap, or compile anything from
`packages/` — the Sass themes are kept untouched purely as the comparison
baseline.

## Result

```
100.00% computed-style parity
   510 rendered cases   (fill mode x theme colour x state x size x roundness)
19,890 computed declarations compared
     0 mismatches
```

```
artifact                              bytes     gzip
----------------------------------------------------
meridian/all.css                     42,635    7,022
  |- core (shared by all themes)     16,070    2,664
  `- meridian (tokens+deltas)        26,644    4,497
swatch: meridian-main-dark           13,960    2,271
----------------------------------------------------
sass baseline (586 rules)           110,447
reduction                             61.4%
```

The 61% figure understates it. Of the 42,635 bytes, **26,644 is the Meridian
token layer** — a fixed cost that does not grow as components are added, and
that is already CSS-native in the Sass build too. The actual component CSS for
both components is **16,070 bytes against 110,447**, a **85.4% reduction**, and
that 16 KB is theme-agnostic: it is the *same bytes* for all six themes.

## How to run it

```bash
node poc/build/build.mjs        # build + byte report
node poc/verify/run.mjs         # parity vs packages/meridian/dist/all.css
node poc/verify/swatch.mjs      # swatch is colour-only
```

`poc/verify/run.mjs` requires `packages/meridian/dist/all.css` (`npx sass
packages/meridian/scss/all.scss packages/meridian/dist/all.css`) and Google
Chrome. There is no Playwright in the repo, so verification drives
`chrome --headless --dump-dom` with an in-page `getComputedStyle` harness.

## Layout

```
poc/
  src/
    core/            common.css, button.css, input.css   <- theme-agnostic
    meridian/
      tokens.css     generated design tokens (127 colours + spacing/type/...)
      theme.css      Meridian's component token assignments  <- the whole theme
      swatches/      meridian-main-dark.css
      index.css      distributable entry (layer order + imports)
  build/
    build.mjs        the entire build: lightningcss, ~90 lines
    extract-tokens.mjs   one-shot migration tool (not a build step)
    swatch.mjs           swatch JSON -> CSS
  verify/
    matrix.mjs       variant matrix + page generator
    run.mjs          parity gate
    swatch.mjs       swatch smoke test
```

## The architectural change

In the Sass build `packages/core` is a **template, not a stylesheet**. Its
`_variables.scss` files are all `null !default` and its mixins are never
compiled standalone; a theme `@use`s them and Sass injects the theme's values
into core's mixin bodies at compile time. That is why every theme has to
recompile every component, and why 79% of selectors are shared across all six
themes while every theme ships its own copy of them.

CSS has no injection step, so the relationship inverts:

- **core** becomes real, shippable CSS that reads `var(--kendo-*)`
- **a theme** becomes a file that assigns those variables
- **cascade layers** replace `@use`/`@forward` ordering with one explicit
  `@layer` declaration

`poc/src/meridian/theme.css` is the entire Meridian look for both components:
token assignments and nothing else. It is ~90 lines.

### The colour bridge

The single biggest win. Meridian emits a full declaration set per
(fill mode x theme colour) pair — 10 colours x 5 fill modes x 4 states. Instead,
each colour modifier names its palette entries once:

```css
.k-button.k-button-primary {
  --kc: var(--kendo-color-primary);
  --kc-hover: var(--kendo-color-primary-hover);
  --kc-on: var(--kendo-color-on-primary);
  --kc-on-surface: var(--kendo-color-primary-on-surface);
  /* ... */
}
```

and each fill mode consumes them exactly once:

```css
.k-button.k-button-outline {
  border-color: var(--kc-outline-border);
  color: var(--kc-outline-text);
  &:hover { background-color: color-mix(in srgb, var(--kc-subtle-hover) var(--kc-mix), transparent); }
}
```

Theme-colour combinatorics account for **13.1% of all rule bytes** in the
compiled Meridian theme. This pattern collapses them, and it generalises to
every coloured component (chip, badge, notification, ...).

### Sass patterns and what replaced them

| Sass pattern | Native CSS |
| --- | --- |
| `$var: null !default` + `@if $var` | `var(--x, <fallback>)` fallback chain |
| `k-when-default()` emitting an extra selector | base rule reads the var the default modifier assigns |
| `@each $color in $theme-colors` | the colour bridge above |
| `.k-input.k-input-sm .k-input-inner` per size | inherited custom property, one descendant rule |
| `@use` / `@forward` ordering | `@layer kendo.tokens, kendo.components, kendo.theme, kendo.overrides` |
| one 900 KB compile per swatch | one ~14 KB colour file per swatch |
| `@include import-once()` | unnecessary — nothing is duplicated |

## Things that bit, and are worth knowing before committing to this

1. **Native `&` raises specificity.** It compiles to `:is()`, which takes the
   weight of the *strongest* branch. Writing the solid fill mode as
   `.k-button, .k-button.k-button-solid { &:hover { ... } }` produced a 0,3,0
   selector that silently beat the later `.k-button-flat` and `.k-button-link`
   rules — this caused 84 of the parity failures. The solid states are
   deliberately written as explicit selector lists; see the comment in
   `core/button.css`. The repo already has a specificity analyser in `units/`
   that would catch this class of regression.

2. **Do not lower colours at build time.** `lightningcss` (and any
   autoprefixer-style tool) will rewrite `oklch(100% 0 0deg)` into a `lab()`
   fallback. The token layer is built on relative colour syntax
   (`oklch(from var(--kendo-color-app-surface) ... calc(h + 261.13))`), so
   lowering the *base* colour silently changes what `h` resolves to downstream.
   This was the single largest source of mismatches (742 declarations) and it
   is completely invisible in the source. `build.mjs` passes
   `exclude: Features.Colors`.

3. **`@property` and `var()` fallbacks are mutually exclusive.** Registering a
   custom property with an `initial-value` means it is never
   guaranteed-invalid, so every `var(--x, fallback)` fallback becomes dead
   code. Pick one. This POC uses fallback chains and registers nothing.

4. **`@layer` changes the consumer contract.** Layered theme CSS loses to any
   unlayered application CSS. That is better DX, but it is a behaviour change
   for existing users and needs to be a deliberate, communicated decision.

5. **Conditional emission is the one genuine regression.** `@if
   $kendo-enable-focus-contrast` has no clean CSS equivalent; the space-toggle
   hack works but is fragile. These sites should be restructured rather than
   translated.

6. **Per-colour exceptions still exist and still need a home.** Meridian tones
   the flat `warning` washes down (25%/35% instead of 50%/70%). In CSS that is
   one rule with two declarations in the theme layer, versus four emitted
   rules — but the exception itself does not disappear.

## What this does not prove

- Only two components. Button is the combinatorial worst case and input is the
  composed/adornment case, but neither exercises overlays, transitions between
  stacking contexts, or RTL.
- **The `!default` customisation API is untouched.** 25,966 `!default`
  variables are the real migration blocker, not syntax: `units/utility.ts`
  compiles SCSS with injected variable overrides and asserts the value reaches
  the output, per component per theme. Custom properties can express most of
  that contract, but not the ones that change *structure* rather than values.
- No visual regression run; parity here is computed-style equality on a
  specific matrix, which is stricter in some ways and blinder in others
  (nothing here catches a layout that is wrong in both builds).
