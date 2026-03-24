# Kendo Themes — Repo Conventions Reference

This document is the shared source-of-truth consumed by all agent skills in `.github/skills/`. Read it before executing any skill.

---

## Repository Identity

A **monorepo SCSS theme engine** providing production-ready CSS for 80+ Kendo UI components across Angular, React, Vue, and jQuery. Five theme packages (`default`, `classic`, `material`, `fluent`, `bootstrap`) each extend a shared `core` foundation package. An `html` package (React/TSX) provides component specs and visual test infrastructure.

---

## Directory Layout

```
packages/
├── core/              # Null-variable skeleton — structure, no values
├── default/           # Default theme (primary reference theme)
├── classic/           # Classic theme
├── material/          # Material Design theme
├── fluent/            # Fluent (Windows) theme
├── bootstrap/         # Bootstrap-compatible theme
├── html/              # React TSX component specs & visual tests
└── utils/             # Utility-first CSS classes (standalone)
aria/                  # Per-component ARIA specification markdown files
.github/
├── copilot-instructions.md
├── instructions/      # Per-package path-scoped instructions
├── prompts/           # Reusable agent prompt files
└── skills/            # Agent skill SKILL.md files (this directory)
```

---

## SCSS Architecture

### Core Package (`packages/core/`)

**Philosophy:** Template system only. Every variable is `null !default`. Themes provide values.

**Component files** — 3 files per component (NO `_index.scss` in core):
```
packages/core/scss/components/[component]/
├── _variables.scss    # null !default variables with SassDoc
├── _layout.scss       # Structural mixin: kendo-[component]--layout-base()
└── _theme.scss        # Visual mixin:     kendo-[component]--theme-base()
```

**How core variables look:**
```scss
// _variables.scss
$kendo-button-bg: null !default;
$kendo-button-text: null !default;
$kendo-button-border: null !default;
$kendo-button-hover-bg: null !default;
```

**How core layout/theme mixins look:**
```scss
// _layout.scss
@mixin kendo-button--layout-base() {
    .k-button {
        padding: $kendo-button-padding-y $kendo-button-padding-x;
    }
}

// _theme.scss
@mixin kendo-button--theme-base() {
    .k-button {
        color: $kendo-button-text;
        background-color: $kendo-button-bg;
    }
}
```

### Theme Packages (`packages/default/`, etc.)

**Philosophy:** Override core nulls with actual values, compose core mixins.

**Component files** — 4 files per component:
```
packages/[theme]/scss/[component]/
├── _index.scss        # Dependencies → @forward vars → @use layout/theme → expose mixin
├── _variables.scss    # Override core nulls with !default values + @forward map
├── _layout.scss       # @use core layout → invoke layout-base()
└── _theme.scss        # @use core theme → invoke theme-base()
```

**`_index.scss` pattern:**
```scss
// Dependencies
@use "../core/_index.scss" as *;
@use "../icons/_index.scss" as *;

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

**`_variables.scss` pattern:**
```scss
@use "sass:map";
@use "../core/_index.scss" as *;

/// The background color of the Component.
/// @group [component]
$kendo-[component]-bg: k-color(base-subtle) !default;

/// The text color of the Component.
/// @group [component]
$kendo-[component]-text: k-color(on-base) !default;

@forward "@progress/kendo-theme-core/scss/components/[component]/_variables.scss" with (
    $kendo-[component]-bg: $kendo-[component]-bg,
    $kendo-[component]-text: $kendo-[component]-text
);
```

**`_layout.scss` pattern:**
```scss
@use "@progress/kendo-theme-core/scss/components/[component]/_layout.scss" as *;

@mixin kendo-[component]--layout() {
    @include kendo-[component]--layout-base();
}
```

**`_theme.scss` pattern:**
```scss
@use "@progress/kendo-theme-core/scss/components/[component]/_theme.scss" as *;

@mixin kendo-[component]--theme() {
    @include kendo-[component]--theme-base();
}
```

### Registration

- **Core** variables/layout/theme are used directly by theme packages — no core-level index entry needed per component.
- **Theme `packages/[theme]/scss/index.scss`** — add two entries:
  1. `@forward "./[component]/_index.scss";` in the forward section
  2. `@include kendo-[component]--styles();` inside the `@mixin kendo-theme--styles()` body (in order)

---

## Variable Naming Convention

```
$kendo-<component>[-sub-element][-size][-fill-mode][-state]-<css-property>
$kendo-button-hover-bg
$kendo-button-sm-padding-x
$kendo-grid-header-cell-padding-x
$kendo-button-solid-hover-bg
```

- **Prefix:** always `$kendo-`
- **Component name:** lowercase, hyphenated (`dropdownlist`, `panelbar`, `timepicker`)
- **Sub-element** (optional): `header`, `item`, `cell`, `icon`, `arrow`, `label`
- **Size** (optional): `sm`, `md`, `lg`
- **Fill mode** (optional): `solid`, `outline`, `flat`, `link`, `clear`
- **State** (optional): `hover`, `focus`, `active`, `selected`, `disabled`, `invalid`, `expanded`
- **CSS property:** `bg`, `text`, `border`, `shadow`, `gradient`, `opacity`, `padding-x`, `padding-y`, `font-size`, `font-weight`, `line-height`, `width`, `height`, `transition`

---

## SassDoc Documentation Format

**Required on ALL theme-package variables (not core nulls):**
```scss
/// The horizontal padding of the Component.
/// @group [component]
$kendo-[component]-padding-x: k-spacing(2) !default;

/// The default theme color of the Button.
/// @group button
/// @role default
$kendo-button-default-theme-color: "base" !default;
```

- `/// Description on the line immediately above`
- `/// @group [component-name]` — matches the component's folder name
- `/// @role default` — only for `$kendo-[component]-default-*` variables

---

## HTML Package (`packages/html/`)

### Component file structure
```
packages/html/src/[component]/
├── [component].spec.tsx   # Component definition, props, ariaSpec, static metadata
├── constants.ts           # MODULE_NAME and FOLDER_NAME exports
├── index.ts               # re-exports (spec + all templates)
├── templates/             # Reusable render helpers (named React components)
│   └── [template-name].tsx
└── tests/                 # Visual test scenarios
    └── [component]-[scenario].tsx
```

### Spec file pattern
```tsx
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';
import { KendoComponent } from '../_types/component';
import { COMPONENT_FOLDER_NAME, COMPONENT_MODULE_NAME } from './constants';

export const COMPONENT_CLASSNAME = `k-[component]`;

const states = [States.hover, States.focus, States.active, States.disabled] as const;

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline],
};

export type KendoComponentOptions = { size?: ...; fillMode?: ... };
export type KendoComponentProps = KendoComponentOptions & { children?: React.ReactNode };
export type KendoComponentState = { [K in (typeof states)[number]]?: boolean };

export const MyComponent: KendoComponent<KendoComponentProps & KendoComponentState & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { size, fillMode, hover, focus, active, disabled, children, ...other } = props;
    return (
        <div
            className={classNames(
                COMPONENT_CLASSNAME,
                optionClassNames(COMPONENT_CLASSNAME, props),
                stateClassNames(COMPONENT_CLASSNAME, props)
            )}
            {...other}
        >
            {children}
        </div>
    );
};

MyComponent.states = states;
MyComponent.options = options;
MyComponent.className = COMPONENT_CLASSNAME;
MyComponent.defaultOptions = {};
MyComponent.moduleName = COMPONENT_MODULE_NAME;
MyComponent.folderName = COMPONENT_FOLDER_NAME;

MyComponent.ariaSpec = {
    selector: '.k-[component]',
    rules: [
        { selector: '.k-[component]', attribute: 'role=...', usage: 'Required' },
    ]
};

export default MyComponent;
```

### Constants file pattern
```ts
export const COMPONENT_MODULE_NAME = '[component]';
export const COMPONENT_FOLDER_NAME = COMPONENT_MODULE_NAME;
```

### Index file pattern
```ts
export * from "./[component].spec";
export * from "./templates/[template-1]";
export * from "./templates/[template-2]";
```

### Test file pattern
```tsx
import { MyComponent } from '../../[component]';

export default () => (
    <div id="test-area">
        <MyComponent>Default</MyComponent>
        <MyComponent hover>Hover</MyComponent>
        <MyComponent disabled>Disabled</MyComponent>
    </div>
);
```

---

## CSS Class Naming (HTML)

- **BEM with `k-` prefix:** `.k-button`, `.k-button-solid`, `.k-button-primary`
- **State classes:** `.k-hover`, `.k-focus`, `.k-active`, `.k-selected`, `.k-disabled`, `.k-invalid`
- **Size classes:** `.k-button-sm`, `.k-button-md`, `.k-button-lg`
- **Roundness:** `.k-rounded-sm`, `.k-rounded-md`, `.k-rounded-lg`, `.k-rounded-full`, `.k-rounded-none`

---

## ARIA Conventions

- `ariaSpec.rules` on the spec component is the single source of truth
- Each rule: `{ selector: string, attribute: string, usage: string }`
- `attribute` format: `role=X`, `aria-label`, `aria-pressed`, `disabled`
- Reference doc: `aria/[component]_aria.md`
- Validation: `npm run test:a11y [component]`

---

## Build Commands Reference

```bash
npm run sass              # Compile all themes → dist/all.css
npm run sass:dist         # Compile all swatches
npm run docs              # Generate SassDoc metadata (required before unit tests)
npm run test:units        # Run Jest unit tests
npm run lint:styles       # Stylelint SCSS
npm run lint:scripts      # ESLint JS/TS
npm run build             # Build HTML components
npm run build:tests       # Build HTML test components
npm run test:a11y         # Accessibility test (all)
npm run test:a11y [comp]  # Accessibility test (single component)
```

---

## Commit Message Format

```
type(scope): summary
```
- Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`, `ci`, `build`, `revert`
- Scope: component name or area (`button`, `token`, `core`, `default`, `html`)
- Breaking changes: add `BREAKING CHANGE:` in body

---

## Swatch Configuration (`lib/swatches/`)

Swatches live in `packages/[theme]/lib/swatches/[swatch-name].json`:
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
