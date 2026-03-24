# Component Generator — File Templates

> Reference for [component-generator/SKILL.md](../SKILL.md). Replace every `[component]` with the kebab-case component name and `[ComponentName]` with the PascalCase name.

## Contents
- [Core Package Templates](#core-package-templates)
- [Theme Package Templates](#theme-package-templates)
- [HTML Package Templates](#html-package-templates)

---

## Core Package Templates

### `packages/core/scss/components/[component]/_variables.scss`

```scss
// [ComponentName]

// Layout variables
$kendo-[component]-padding-x: null !default;
$kendo-[component]-padding-y: null !default;
$kendo-[component]-font-size: null !default;
$kendo-[component]-line-height: null !default;
$kendo-[component]-border-width: null !default;
$kendo-[component]-border-radius: null !default;

// Theme variables
$kendo-[component]-bg: null !default;
$kendo-[component]-text: null !default;
$kendo-[component]-border: null !default;
$kendo-[component]-shadow: null !default;

// Hover state
$kendo-[component]-hover-bg: null !default;
$kendo-[component]-hover-text: null !default;
$kendo-[component]-hover-border: null !default;

// Focus state
$kendo-[component]-focus-shadow: null !default;

// Disabled state
$kendo-[component]-disabled-bg: null !default;
$kendo-[component]-disabled-text: null !default;
$kendo-[component]-disabled-border: null !default;
```

> If `HAS_SIZE=true`, also add `$kendo-[component]-sm-padding-x`, `-md-padding-x`, `-lg-padding-x` etc. for each size variant.

### `packages/core/scss/components/[component]/_layout.scss`

```scss
@use "../../mixins/index.scss" as *;
@use "./_variables.scss" as *;

@mixin kendo-[component]--layout-base() {

    // [ComponentName]
    .k-[component] {
        box-sizing: border-box;
        border-width: $kendo-[component]-border-width;
        border-style: solid;
        padding: $kendo-[component]-padding-y $kendo-[component]-padding-x;
        font-size: $kendo-[component]-font-size;
        line-height: $kendo-[component]-line-height;
        display: inline-flex;
        align-items: center;
        position: relative;
    }
}
```

### `packages/core/scss/components/[component]/_theme.scss`

```scss
@use "../../mixins/index.scss" as *;
@use "./_variables.scss" as *;

@mixin kendo-[component]--theme-base() {

    .k-[component] {
        @include fill(
            $kendo-[component]-text,
            $kendo-[component]-bg,
            $kendo-[component]-border
        );
        @include box-shadow( $kendo-[component]-shadow );

        &:hover,
        &.k-hover {
            @include fill(
                $kendo-[component]-hover-text,
                $kendo-[component]-hover-bg,
                $kendo-[component]-hover-border
            );
        }

        &:focus,
        &.k-focus {
            @include box-shadow( $kendo-[component]-focus-shadow );
        }

        &:disabled,
        &.k-disabled {
            @include fill(
                $kendo-[component]-disabled-text,
                $kendo-[component]-disabled-bg,
                $kendo-[component]-disabled-border
            );
            @include disabled();
        }
    }
}
```

---

## Theme Package Templates

### `packages/[theme]/scss/[component]/_variables.scss`

```scss
@use "sass:map";
@use "../core/_index.scss" as *;


// [ComponentName]

/// The horizontal padding of the [ComponentName].
/// @group [component]
$kendo-[component]-padding-x: k-spacing(2) !default;
/// The vertical padding of the [ComponentName].
/// @group [component]
$kendo-[component]-padding-y: k-spacing(1) !default;
/// The font size of the [ComponentName].
/// @group [component]
$kendo-[component]-font-size: var( --kendo-font-size, inherit ) !default;
/// The line height of the [ComponentName].
/// @group [component]
$kendo-[component]-line-height: var( --kendo-line-height, normal ) !default;
/// The border width of the [ComponentName].
/// @group [component]
$kendo-[component]-border-width: 1px !default;
/// The border radius of the [ComponentName].
/// @group [component]
$kendo-[component]-border-radius: k-border-radius(md) !default;

/// The background color of the [ComponentName].
/// @group [component]
$kendo-[component]-bg: k-color( base-subtle ) !default;
/// The text color of the [ComponentName].
/// @group [component]
$kendo-[component]-text: k-color( on-base ) !default;
/// The border color of the [ComponentName].
/// @group [component]
$kendo-[component]-border: k-color( border ) !default;
/// The shadow of the [ComponentName].
/// @group [component]
$kendo-[component]-shadow: null !default;

/// The background color of the [ComponentName] on hover.
/// @group [component]
$kendo-[component]-hover-bg: k-color( base-subtle-hover ) !default;
/// The text color of the [ComponentName] on hover.
/// @group [component]
$kendo-[component]-hover-text: null !default;
/// The border color of the [ComponentName] on hover.
/// @group [component]
$kendo-[component]-hover-border: null !default;

/// The shadow of the focused [ComponentName].
/// @group [component]
$kendo-[component]-focus-shadow: k-elevation(2) !default;

/// The background color of the disabled [ComponentName].
/// @group [component]
$kendo-[component]-disabled-bg: null !default;
/// The text color of the disabled [ComponentName].
/// @group [component]
$kendo-[component]-disabled-text: null !default;
/// The border color of the disabled [ComponentName].
/// @group [component]
$kendo-[component]-disabled-border: null !default;

@forward "@progress/kendo-theme-core/scss/components/[component]/_variables.scss" with (
    $kendo-[component]-padding-x: $kendo-[component]-padding-x,
    $kendo-[component]-padding-y: $kendo-[component]-padding-y,
    $kendo-[component]-font-size: $kendo-[component]-font-size,
    $kendo-[component]-line-height: $kendo-[component]-line-height,
    $kendo-[component]-border-width: $kendo-[component]-border-width,
    $kendo-[component]-border-radius: $kendo-[component]-border-radius,
    $kendo-[component]-bg: $kendo-[component]-bg,
    $kendo-[component]-text: $kendo-[component]-text,
    $kendo-[component]-border: $kendo-[component]-border,
    $kendo-[component]-shadow: $kendo-[component]-shadow,
    $kendo-[component]-hover-bg: $kendo-[component]-hover-bg,
    $kendo-[component]-hover-text: $kendo-[component]-hover-text,
    $kendo-[component]-hover-border: $kendo-[component]-hover-border,
    $kendo-[component]-focus-shadow: $kendo-[component]-focus-shadow,
    $kendo-[component]-disabled-bg: $kendo-[component]-disabled-bg,
    $kendo-[component]-disabled-text: $kendo-[component]-disabled-text,
    $kendo-[component]-disabled-border: $kendo-[component]-disabled-border
);
```

> For `classic`, `material`, `fluent`, `bootstrap`: use the same structure but adjust token values for the theme's design language. When unknown, use the same values as `default` and add `// TODO: verify for [theme]`.

### `packages/[theme]/scss/[component]/_layout.scss`

```scss
@use "@progress/kendo-theme-core/scss/components/[component]/_layout.scss" as *;


@mixin kendo-[component]--layout() {
    @include kendo-[component]--layout-base();
}
```

### `packages/[theme]/scss/[component]/_theme.scss`

```scss
@use "@progress/kendo-theme-core/scss/components/[component]/_theme.scss" as *;


@mixin kendo-[component]--theme() {
    @include kendo-[component]--theme-base();
}
```

### `packages/[theme]/scss/[component]/_index.scss`

```scss
// Dependencies
@use "../core/_index.scss" as *;
// Add: @use "../icons/_index.scss" as *; etc. for each dependency

// Component
@forward "./_variables.scss";
@use "./_layout.scss" as *;
@use "./_theme.scss" as *;

// Expose
@mixin kendo-[component]--styles() {
    @include import-once( "[component]" ) {
        @include core-styles();
        @include kendo-[component]--layout();
        @include kendo-[component]--theme();
    }
}
```

---

## HTML Package Templates

### `packages/html/src/[component]/constants.ts`

```ts
export const [COMPONENT]_MODULE_NAME = '[component]';
export const [COMPONENT]_FOLDER_NAME = [COMPONENT]_MODULE_NAME;
```

### `packages/html/src/[component]/[component].spec.tsx`

```tsx
import React from 'react';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';
import { KendoComponent } from '../_types/component';
import { [COMPONENT]_FOLDER_NAME, [COMPONENT]_MODULE_NAME } from './constants';

export const [COMPONENT]_CLASSNAME = `k-[component]`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled,
] as const;

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    // Add fillMode, themeColor options here if HAS_THEME_COLOR is true
};

export type Kendo[ComponentName]Options = {
    size?: (typeof options.size)[number] | null;
};

export type Kendo[ComponentName]Props = Kendo[ComponentName]Options & {
    children?: React.ReactNode;
};

export type Kendo[ComponentName]State = { [K in (typeof states)[number]]?: boolean };

export const [ComponentName]: KendoComponent<Kendo[ComponentName]Props & Kendo[ComponentName]State & React.HTMLAttributes<HTMLDivElement>> = (
    props: Kendo[ComponentName]Props & Kendo[ComponentName]State & React.HTMLAttributes<HTMLDivElement>
) => {
    const { size, hover, focus, active, disabled, children, ...other } = props;

    return (
        <div
            className={classNames(
                [COMPONENT]_CLASSNAME,
                optionClassNames( [COMPONENT]_CLASSNAME, props ),
                stateClassNames( [COMPONENT]_CLASSNAME, props )
            )}
            {...other}
        >
            {children}
        </div>
    );
};

[ComponentName].states = states;
[ComponentName].options = options;
[ComponentName].className = [COMPONENT]_CLASSNAME;
[ComponentName].defaultOptions = {};
[ComponentName].moduleName = [COMPONENT]_MODULE_NAME;
[ComponentName].folderName = [COMPONENT]_FOLDER_NAME;

[ComponentName].ariaSpec = {
    selector: '.k-[component]',
    rules: [
        // Add ARIA rules. See aria/[component]_aria.md or run: npm run test:a11y [component]
    ]
};

export default [ComponentName];
```

### `packages/html/src/[component]/templates/[component].tsx`

```tsx
import { [ComponentName] } from '../[component].spec';

export const Default[ComponentName] = (props: any) => <[ComponentName] children="[ComponentName]" {...props} />;
```

### `packages/html/src/[component]/tests/[component]-base.tsx`

```tsx
import { [ComponentName] } from '../../[component]';

export default () => (
    <div id="test-area">
        <[ComponentName]>Default</[ComponentName]>
        <[ComponentName] hover>Hover</[ComponentName]>
        <[ComponentName] focus>Focus</[ComponentName]>
        <[ComponentName] active>Active</[ComponentName]>
        <[ComponentName] disabled>Disabled</[ComponentName]>
    </div>
);
```

### `packages/html/src/[component]/index.ts`

```ts
export * from "./[component].spec";
export * from "./templates/[component]";
```

### `packages/html/src/index.ts` (add entry)

```ts
export * from './[component]/index';  // Insert alphabetically
```
