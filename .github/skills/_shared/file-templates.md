# File Templates Reference

Detailed boilerplate templates for each file in the component scaffold. The agent should read this file during Step 2-6 of the scaffold procedure.

## Core Package Templates

### `packages/core/scss/components/{component}/_variables.scss`

```scss
@use "../../color-system/_swatch.scss" as *;

// {ComponentName}

$kendo-{component}-default-theme-color: null !default;
$kendo-{component}-default-fill-mode: null !default;
$kendo-{component}-default-roundness: null !default;
$kendo-{component}-default-size: null !default;

/// The width of the border around the {ComponentName}.
/// @group {component}
$kendo-{component}-border-width: null !default;

/// The border radius of the {ComponentName}.
/// @group {component}
$kendo-{component}-border-radius: null !default;

/// The horizontal padding of the {ComponentName}.
/// @group {component}
$kendo-{component}-padding-x: null !default;

/// The vertical padding of the {ComponentName}.
/// @group {component}
$kendo-{component}-padding-y: null !default;

/// The font family of the {ComponentName}.
/// @group {component}
$kendo-{component}-font-family: null !default;

/// The font size of the {ComponentName}.
/// @group {component}
$kendo-{component}-font-size: null !default;

/// The line height of the {ComponentName}.
/// @group {component}
$kendo-{component}-line-height: null !default;

/// The background color of the {ComponentName}.
/// @group {component}
$kendo-{component}-bg: null !default;

/// The text color of the {ComponentName}.
/// @group {component}
$kendo-{component}-text: null !default;

/// The border color of the {ComponentName}.
/// @group {component}
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

```scss
// Dependencies
@use "../core/_index.scss" as *;

// Component
@forward "./_variables.scss";
@use "./_layout.scss" as *;
@use "./_theme.scss" as *;

// Expose
@mixin kendo-{component}--styles() {
    @include import-once( "{component}" ) {
        @include core-styles();
        @include kendo-{component}--layout();
        @include kendo-{component}--theme();
    }
}
```

## HTML Package Templates

### `packages/html/src/{component}/constants.ts`

```typescript
export const {COMPONENT_UPPER}_FOLDER_NAME = "{component}";
export const {COMPONENT_UPPER}_MODULE_NAME = "{component}";
```

### `packages/html/src/{component}/{component}.spec.tsx`

```tsx
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent, KendoBaseProps } from '../_types/component';
import { {COMPONENT_UPPER}_FOLDER_NAME, {COMPONENT_UPPER}_MODULE_NAME } from './constants';
export const {COMPONENT_UPPER}_CLASSNAME = `k-{component}`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled
] as const;

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ],
    themeColor: [ ThemeColor.undefined, ThemeColor.base, ThemeColor.primary, ThemeColor.secondary, ThemeColor.tertiary, ThemeColor.info, ThemeColor.success, ThemeColor.warning, ThemeColor.error ],
};

export type Kendo{ComponentName}Options = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
    themeColor?: (typeof options.themeColor)[number] | null;
};

export type Kendo{ComponentName}Props = Kendo{ComponentName}Options & {
    // Add component-specific props here
};

export type Kendo{ComponentName}State = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const {ComponentName}: KendoComponent<Kendo{ComponentName}Props & Kendo{ComponentName}State & React.HTMLAttributes<HTMLDivElement>> = (
    props: Kendo{ComponentName}Props &
        Kendo{ComponentName}State &
        KendoBaseProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        as: Component = 'div',
        size,
        rounded,
        fillMode,
        themeColor,
        hover,
        focus,
        active,
        disabled,
        className,
        ...other
    } = props;

    return (
        <Component
            className={classNames(
                className,
                {COMPONENT_UPPER}_CLASSNAME,
                optionClassNames({COMPONENT_UPPER}_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                    themeColor,
                }),
                stateClassNames({COMPONENT_UPPER}_CLASSNAME, {
                    hover,
                    focus,
                    active,
                    disabled,
                })
            )}
            {...other}
        >
            {props.children}
        </Component>
    );
};

{ComponentName}.states = states;
{ComponentName}.options = options;
{ComponentName}.className = {COMPONENT_UPPER}_CLASSNAME;
{ComponentName}.defaultOptions = defaultOptions;
{ComponentName}.moduleName = {COMPONENT_UPPER}_MODULE_NAME;
{ComponentName}.folderName = {COMPONENT_UPPER}_FOLDER_NAME;

export default {ComponentName};
```

### `packages/html/src/{component}/templates/{component}-default.tsx`

```tsx
import { {ComponentName} } from '../{component}.spec';

export const {ComponentName}Default = (props: any) => (
    <{ComponentName} {...props}>
        {props.children || 'Content'}
    </{ComponentName}>
);
```

### `packages/html/src/{component}/index.ts`

```typescript
export * from "./{component}.spec";
export * from "./templates/{component}-default";
```

## Visual Test Templates

Visual tests live in `packages/html/src/{component}/tests/`. Each file has a default export rendering a test layout. The screenshot tool captures `#test-area`.

### `packages/html/src/{component}/tests/{component}-default.tsx`

```tsx
import { {ComponentName}Default } from '..';

export default () => (
    <div id="test-area" className="k-d-grid" style={{ gap: 10 }}>
        <section>
            <{ComponentName}Default />
        </section>
    </div>
);
```

### `packages/html/src/{component}/tests/{component}-states.tsx` (if component has states)

```tsx
import { {ComponentName} } from '..';

export default () => (
    <div id="test-area" className="k-d-grid" style={{ gap: 10 }}>
        <section>
            <{ComponentName}>Normal</{ComponentName}>
            <{ComponentName} hover>Hover</{ComponentName}>
            <{ComponentName} focus>Focus</{ComponentName}>
            <{ComponentName} active>Active</{ComponentName}>
            <{ComponentName} disabled>Disabled</{ComponentName}>
        </section>
    </div>
);
```

### `packages/html/src/{component}/tests/{component}-sizes.tsx` (if component has size option)

```tsx
import { {ComponentName} } from '..';

export default () => (
    <div id="test-area" className="k-d-grid" style={{ gap: 10 }}>
        {{ComponentName}.options.size.map((size) => (
            <section>
                <span>{`${size}`}</span>
                <{ComponentName} size={size}>Content</{ComponentName}>
            </section>
        ))}
    </div>
);
```

### `packages/html/src/{component}/tests/index.ts`

```typescript
export { default as {ComponentName}Default } from './{component}-default';
export { default as {ComponentName}States } from './{component}-states';
```

The exports use PascalCase naming: `{ComponentName}{Scenario}`.

## Unit Test Template

### `units/default/{component}.test.ts`

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
