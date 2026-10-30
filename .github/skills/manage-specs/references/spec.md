# HTML Component Spec

Create or update an HTML component specification in `packages/html/src/{component}/`.

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

### Step 1: Read a reference spec

Derive the names and pick a reference component from [context.md](context.md); read its spec before writing.

### Step 2: Create `constants.ts`

Create `packages/html/src/{component}/constants.ts`:

```typescript
export const {COMPONENT_UPPER}_MODULE_NAME = '{component}';
export const {COMPONENT_UPPER}_FOLDER_NAME = {COMPONENT_UPPER}_MODULE_NAME;
```

### Step 3: Create `{component}.spec.tsx`

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

**Accessibility** — document ARIA with `@aria`/`@keyboard`/`@ux`/`@see` JSDoc annotations on the spec component. See [a11y.md](a11y.md).

### Step 4: Create `index.ts`

Create `packages/html/src/{component}/index.ts`:

```typescript
export * from './{component}.spec';
```

Add template exports as templates are created ([templates.md](templates.md)), and `export * from './demos/{component}';` if the component has a demo.

### Step 5: Register in main index (new components only)

For new components, add the export to `packages/html/src/index.ts`:

```typescript
export * from './{component}/index';
```

Place it in the matching category group (the file is grouped by comments like `// Indicators`, `// Navigation`), not alphabetically.

### Step 6: Validate

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

Shared rules are in [context.md](context.md). Spec-specific:

- Merge `className` via `classNames()` — never overwrite it. Forward remaining HTML attributes with `{...other}`.
- `optionClassNames` produces `k-{component}-{option}-{value}`; `stateClassNames` produces the state classes.
- Static properties (`states`, `options`, `className`, `defaultOptions`, `moduleName`, `folderName`) are required — the build, tests, and docs read them. `moduleName`/`folderName` must equal the folder name.
- The `as` prop (from `KendoBaseProps`) lets callers change the root element.
