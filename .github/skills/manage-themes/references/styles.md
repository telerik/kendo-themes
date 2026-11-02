# Component Styles

Layout and theme mixins, the theme `_index.scss` wiring, and registration in a theme. Naming, paths, and shared rules are in [context.md](context.md).

## Where a property goes

| File | Holds |
|------|-------|
| `_layout.scss` | Structure: display, flex/grid, padding, margin, gap, position, overflow, sizing, font metrics |
| `_theme.scss` | Visuals: color, background, border-color, box-shadow, opacity, outline |
| `_index.scss` (theme only) | Dependencies, variable forwarding, the `--styles()` mixin |
| `scss/index.scss` (theme) | Registration |

Every customizable value needs a variable — add it first via [variables.md](variables.md). For a new component, all four files are needed; start from [file-templates.md](file-templates.md).

## Core mixins

Edit `packages/core/scss/components/{component}/_layout.scss` / `_theme.scss`. Keep the mixin names `kendo-{component}--layout-base()` and `kendo-{component}--theme-base()`:

```scss
@mixin kendo-{component}--theme-base() {
    .k-{component} {
        color: $kendo-{component}-text;
        background-color: $kendo-{component}-bg;

        &:hover,
        &.k-hover {
            background-color: $kendo-{component}-hover-bg;
        }
    }
}
```

Sub-elements are `.k-{component}-{element}`; modifiers `.k-{component}-{modifier}`.

## Theme mixins

Most themes only delegate; core changes then propagate automatically:

```scss
@use "@progress/kendo-theme-core/scss/components/{component}/_layout.scss" as *;

@mixin kendo-{component}--layout() {
    @include kendo-{component}--layout-base();
}
```

Add theme-specific selectors after the `-base` include only when the theme genuinely differs.

## Theme `_index.scss`

Dependencies are both `@use`d and `@include`d (their styles must be emitted before the component's):

```scss
// Dependencies
@use "../core/_index.scss" as *;
@use "../icons/_index.scss" as *;

// Component
@forward "./_variables.scss";
@use "./_layout.scss" as *;
@use "./_theme.scss" as *;

// Expose
@mixin kendo-{component}--styles() {
    @include import-once( "{component}" ) {
        @include core-styles();
        @include kendo-icon--styles();
        @include kendo-{component}--layout();
        @include kendo-{component}--theme();
    }
}
```

## Register a new component

In each targeted theme's `packages/{theme}/scss/index.scss`, add three lines, each in its section and after the component's dependencies:

1. `@forward "./{component}/_index.scss";` — forward section
2. `@use "./{component}/_index.scss" as *;` — use section
3. `@include kendo-{component}--styles();` — inside `@mixin kendo-theme--styles()`, in the matching category group

## Gotchas

- **`backdrop-filter`/`filter` on a container traps `position: fixed` descendants** — per the Filter Effects spec, applying `backdrop-filter` (or `filter`) directly to an element creates a CSS containing block for that element's `position: fixed`/`absolute` descendants. If the element also has `overflow: hidden` (common on `k-` root containers), any inline-declared Popup/Dialog/Tooltip nested inside it (rather than portaled to `<body>`) gets visually clipped to the container's bounds instead of overlaying the viewport (see kendo-themes#5968, #6096). This is the root cause behind Meridian's translucency/glass effect on components like `.k-card`, `.k-appbar`, `.k-bottom-nav`, `.k-drawer`, `.k-expander`, `.k-pager`. **Fix pattern**: move `backdrop-filter` off the real element onto a content-less `::before` pseudo-element (`content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit; pointer-events: none;`) — a pseudo-element has no descendants, so it can carry the filter without trapping anything. If the base selector has no default `position`, add `position: relative` (scoped with `:not()` around any modifier classes that already set `position: fixed`/`sticky`, e.g. `.k-appbar:not(.k-appbar-fixed):not(.k-appbar-sticky)`) so the pseudo sizes correctly. Do **not** use `isolation: isolate` as a shortcut — it can create unrelated stacking-context regressions for siblings. Before reusing an element's `::before`/`::after` for this, check it isn't already used for something else (e.g. `.k-toolbar`'s pseudo-elements are already used for spacer/scroll-fade effects — see kendo-themes#6121 — so that one needs a different approach).
