# File Templates Reference

Detailed boilerplate templates for each file in the component scaffold. Used when scaffolding a new component (see [component.md](component.md)).

## Core Package Templates

### `packages/core/scss/components/{component}/_variables.scss`

```scss
// {ComponentName}

$kendo-{component}-default-theme-color: null !default;
$kendo-{component}-default-fill-mode: null !default;
$kendo-{component}-default-roundness: null !default;
$kendo-{component}-default-size: null !default;

$kendo-{component}-border-width: null !default;
$kendo-{component}-border-radius: null !default;
$kendo-{component}-padding-x: null !default;
$kendo-{component}-padding-y: null !default;
$kendo-{component}-font-family: null !default;
$kendo-{component}-font-size: null !default;
$kendo-{component}-line-height: null !default;
$kendo-{component}-bg: null !default;
$kendo-{component}-text: null !default;
$kendo-{component}-border: null !default;
```

### `packages/core/scss/components/{component}/_layout.scss`

```scss
@use "./_variables.scss" as *;
@use "../../functions/index.scss" as *;
@use "../../border-radii/index.scss" as *;

@mixin kendo-{component}--layout-base() {

    // {ComponentName}
    .k-{component} {
        border-width: $kendo-{component}-border-width;
        border-style: solid;
        box-sizing: border-box;
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        padding-inline: $kendo-{component}-padding-x;
        padding-block: $kendo-{component}-padding-y;
        font-family: $kendo-{component}-font-family;
        font-size: $kendo-{component}-font-size;
        line-height: $kendo-{component}-line-height;

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }
    }

}
```

### `packages/core/scss/components/{component}/_theme.scss`

```scss
@use "sass:map";
@use "../../color-system/_functions.scss" as *;
@use "../../functions/index.scss" as *;
@use "../../_variables.scss" as *;
@use "./_variables.scss" as *;

@mixin kendo-{component}--theme-base() {

    .k-{component} {
        color: $kendo-{component}-text;
        background-color: $kendo-{component}-bg;
        border-color: $kendo-{component}-border;
    }

}
```

## Theme Package Templates

### `packages/{theme}/scss/{component}/_variables.scss`

```scss
@use "sass:map";
@use "../core/_index.scss" as *;

// {ComponentName}

/// The width of the border around the {ComponentName}.
/// @group {component}
$kendo-{component}-border-width: 1px !default;

/// The horizontal padding of the {ComponentName}.
/// @group {component}
$kendo-{component}-padding-x: k-spacing(2) !default;

/// The vertical padding of the {ComponentName}.
/// @group {component}
$kendo-{component}-padding-y: k-spacing(1) !default;

/// The font family of the {ComponentName}.
/// @group {component}
$kendo-{component}-font-family: var( --kendo-font-family, inherit ) !default;

/// The font size of the {ComponentName}.
/// @group {component}
$kendo-{component}-font-size: var( --kendo-font-size, inherit ) !default;

/// The line height of the {ComponentName}.
/// @group {component}
$kendo-{component}-line-height: var( --kendo-line-height, normal ) !default;

/// The background color of the {ComponentName}.
/// @group {component}
$kendo-{component}-bg: k-color(surface-alt) !default;

/// The text color of the {ComponentName}.
/// @group {component}
$kendo-{component}-text: k-color(on-app-surface) !default;

/// The border color of the {ComponentName}.
/// @group {component}
$kendo-{component}-border: k-color(border) !default;


@forward "@progress/kendo-theme-core/scss/components/{component}/_variables.scss" with (
    $kendo-{component}-border-width: $kendo-{component}-border-width,
    $kendo-{component}-padding-x: $kendo-{component}-padding-x,
    $kendo-{component}-padding-y: $kendo-{component}-padding-y,
    $kendo-{component}-font-family: $kendo-{component}-font-family,
    $kendo-{component}-font-size: $kendo-{component}-font-size,
    $kendo-{component}-line-height: $kendo-{component}-line-height,
    $kendo-{component}-bg: $kendo-{component}-bg,
    $kendo-{component}-text: $kendo-{component}-text,
    $kendo-{component}-border: $kendo-{component}-border
);
```

**Fluent theme variation** — wrap every value in a CSS custom property:
```scss
$kendo-{component}-bg: var(--kendo-{component}-bg, #{k-color(surface-alt)}) !default;
```

### `packages/{theme}/scss/{component}/_layout.scss`

```scss
@use "@progress/kendo-theme-core/scss/components/{component}/_layout.scss" as *;


@mixin kendo-{component}--layout() {
    @include kendo-{component}--layout-base();
}
```

### `packages/{theme}/scss/{component}/_theme.scss`

```scss
@use "@progress/kendo-theme-core/scss/components/{component}/_theme.scss" as *;


@mixin kendo-{component}--theme() {
    @include kendo-{component}--theme-base();
}
```

### `packages/{theme}/scss/{component}/_index.scss`

See "Theme `_index.scss`" in [styles.md](styles.md).

## HTML Package Templates

See [../../manage-specs/references/](../../manage-specs/references/) — `spec.md` (constants, spec, index), `templates.md`, and `tests.md` contain the boilerplate.

## Unit Test Template

### `units/{theme}/{component}.test.ts`

Create one per targeted theme; the content is identical.

```typescript
import "./theme.env.js";
import { {ComponentName} } from "../../packages/html/src/{component}/{component}.spec";
import { testKendoComponent } from "../utility";

const component = {ComponentName}.moduleName;
const group = component;
const className = {ComponentName}.className;

const dependencyClassNames: string[] = [];
const expected: string[] = [];
const unexpected: string[] = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
```
