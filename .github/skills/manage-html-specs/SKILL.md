---
name: manage-html-specs
description: Create or update an HTML component specification (.spec.tsx) in the HTML package. Defines the component's TypeScript types, options, states, render function, constants, and index exports. Use this skill when the user wants to create a new HTML spec, add states/options to a component, or modify a component's HTML structure.
argument-hint: "[component] e.g. button, chip, grid"
---

# Add HTML Component Spec

Create or update an HTML component specification in `packages/html/src/{component}/`.

## When to use

When the user asks to create a new component spec, add new states or options to a component, modify the HTML structure or class names of a component, or scaffold the HTML package portion of a new component. Not for visual tests (use `manage-html-tests`) or templates (use `manage-html-templates`).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case (e.g., `chip`, `info-bar`, `smart-badge`) |
| **HTML element** | No | Root HTML element (`div`, `span`, `button`, `nav`). Default: `div` |
| **States** | No | e.g., `hover`, `focus`, `active`, `disabled`, `selected`. Default: `[hover, focus, active, disabled]` |
| **Options** | No | Which option axes to support: `size`, `fillMode`, `themeColor`, `rounded`. Default: `[size, rounded, fillMode, themeColor]` |
| **Component-specific props** | No | Additional props beyond options and states (e.g., `icon`, `text`, `showAvatar`) |
| **Description** | No | One sentence describing the component |
| **Dependencies** | No | Other HTML components this imports (e.g., `Icon`, `Avatar`) |

If the user doesn't specify states/options, use reasonable defaults based on similar components. Look at an existing component of similar complexity for reference.

## Procedure

### Step 1: Derive naming constants

From the component name (e.g., `smart-badge`), derive:

| Derived Name | Example |
|-------------|---------|
| CSS class | `k-smart-badge` |
| Classname constant | `SMART_BADGE_CLASSNAME` |
| Folder/module constant prefix | `SMART_BADGE` |
| TypeScript component name | `SmartBadge` |
| Module/folder name string | `"smart-badge"` |

### Step 2: Research a reference component

Find an existing component of similar complexity in `packages/html/src/` and use it as a structural reference:
- **Simple** (no states, few options): `badge`, `avatar`
- **Medium** (states + options): `button`, `chip`, `card`
- **Complex** (sub-components, multiple specs): `grid`, `toolbar`, `scheduler`

Read the reference spec to understand the patterns used.

### Step 3: Create `constants.ts`

Create `packages/html/src/{component}/constants.ts`:

```typescript
export const {COMPONENT_UPPER}_MODULE_NAME = '{component}';
export const {COMPONENT_UPPER}_FOLDER_NAME = {COMPONENT_UPPER}_MODULE_NAME;
```

### Step 4: Create `{component}.spec.tsx`

Create `packages/html/src/{component}/{component}.spec.tsx` with the following structure:

**Imports** — import helpers from `../misc` and types from `../_types/component`:

```tsx
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent, KendoBaseProps } from '../_types/component';
import { {COMPONENT_UPPER}_FOLDER_NAME, {COMPONENT_UPPER}_MODULE_NAME } from './constants';
```

**Classname constant:**

```tsx
export const {COMPONENT_UPPER}_CLASSNAME = `k-{component}`;
```

**States array** — include only states the component actually supports:

```tsx
const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled
] as const;
```

**Options object** — include only option axes the component supports. Use the enum values from `../misc`:

```tsx
const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ],
    themeColor: [ ThemeColor.undefined, ThemeColor.base, ThemeColor.primary, ThemeColor.secondary, ThemeColor.tertiary, ThemeColor.info, ThemeColor.success, ThemeColor.warning, ThemeColor.error ],
};
```

**Type definitions** — define Options, Props, and State types:

```tsx
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
```

**Default options:**

```tsx
const defaultOptions = {};
```

**Component function** — renders the HTML with proper classNames:

```tsx
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
```

**Static properties** — attach metadata to the component function:

```tsx
{ComponentName}.states = states;
{ComponentName}.options = options;
{ComponentName}.className = {COMPONENT_UPPER}_CLASSNAME;
{ComponentName}.defaultOptions = defaultOptions;
{ComponentName}.moduleName = {COMPONENT_UPPER}_MODULE_NAME;
{ComponentName}.folderName = {COMPONENT_UPPER}_FOLDER_NAME;

export default {ComponentName};
```

**ARIA spec** — if `aria/{component}_aria.md` exists, add an `ariaSpec` property based on that document. Otherwise omit or add a minimal spec:

```tsx
{ComponentName}.ariaSpec = {
    selector: '.k-{component}',
    rules: []
};
```

### Step 5: Create `index.ts`

Create `packages/html/src/{component}/index.ts`:

```typescript
export * from './{component}.spec';
```

This file will be extended by the `manage-html-templates` skill when templates are added.

### Step 6: Register in main index (new components only)

For new components, add the export to `packages/html/src/index.ts`:

```typescript
export * from './{component}';
```

Place it alphabetically among existing exports.

### Step 7: Validate

```bash
npm run typecheck --prefix packages/html 2>&1
```

Fix any TypeScript errors before proceeding.

## Updating an existing spec

When updating an existing spec (adding states, options, or props):

1. **Read the existing spec** to understand its current structure
2. **Add to the `states` array** if adding new states
3. **Add to the `options` object** if adding new option values
4. **Update the type definitions** to include new props
5. **Update the render function** destructuring to handle new props
6. **Update classNames** if new props affect CSS classes
7. **Update `defaultOptions`** if new props have defaults
8. **Don't change the component's static property assignments** unless adding new properties

## Gotchas

- Import helpers from `../misc` — this module exports `classNames`, `optionClassNames`, `stateClassNames`, `States`, `Size`, `Roundness`, `FillMode`, `ThemeColor`, and other enums.
- Import `KendoComponent` and `KendoBaseProps` from `../_types/component`.
- The `as` prop (via `KendoBaseProps`) allows changing the root element at usage time.
- Use `{...other}` spread to forward HTML attributes to the root element.
- States are boolean props (`hover`, `focus`, etc.) — they add CSS state classes, not pseudo-classes.
- The `className` prop must be merged via `classNames()` — don't overwrite it.
- Use `optionClassNames` for options (generates `k-{component}-{option}-{value}`) and `stateClassNames` for states (generates `k-{component}-{state}`).
- Static properties (`states`, `options`, `className`, etc.) on the component function are required — they're used by the test and build systems.
- The `moduleName` and `folderName` must match the folder name in `packages/html/src/`.
- Only include option values that the SCSS theme actually supports — don't add `ThemeColor.inverse` if the component has no inverse styles.
- The spec file is the **single source of truth** for the component's HTML output — templates and tests depend on it.
