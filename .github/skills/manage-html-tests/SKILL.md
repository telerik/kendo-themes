---
name: manage-html-tests
description: Create or update visual test scenarios for a Kendo UI component in the HTML package. Creates TSX test files that exercise component states, variants, and edge cases for screenshot-based visual regression testing. Use this skill when the user wants to add test coverage, create visual tests, or ensure a component has proper test scenarios.
argument-hint: "[component] e.g. button, chip, grid"
---

# Add Visual Test

Create visual test scenarios for a component in `packages/html/src/{component}/tests/`.

## When to use

When the user asks to add visual tests, improve test coverage, or create screenshot test cases for a component. Not for unit tests (those are in `units/`) or accessibility tests (use the `manage-html-a11y` skill).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component** | Yes | Component name (e.g., `chip`, `badge`, `notification`) |
| **Coverage goals** | No | `states`, `sizes`, `fill-modes`, `theme-colors`, or `all`. Default: `all` |
| **Gap only** | No | If `true`, only add tests not already present. Default: `false` |

## Procedure

### Step 1: Understand the component

1. Read the component spec: `packages/html/src/{component}/{component}.spec.tsx`
2. Extract from the spec:
   - `states` array → which states need coverage
   - `options.size` → which sizes need coverage
   - `options.fillMode` → which fill modes need coverage
   - `options.themeColor` → which theme colors need coverage
3. Read existing templates in `packages/html/src/{component}/templates/`
4. Check existing tests in `packages/html/src/{component}/tests/` to avoid duplication
5. Look at a well-covered reference: `packages/html/src/button/tests/`

### Step 2: Plan test scenarios

Each test file should cover one axis of variation. Common patterns:

| Scenario | What it tests | File name |
|----------|--------------|-----------|
| Base | Default rendering with all states | `{component}.tsx` |
| Fill modes | solid, outline, flat, link, clear | `{component}-fillmodes.tsx` |
| Theme colors | base, primary, secondary, error, etc. | `{component}-themecolors.tsx` |
| Sizes | sm, md, lg | `{component}-sizes.tsx` |
| States | hover, focus, active, disabled, selected | `{component}-states.tsx` |
| Rounded | none, sm, md, lg, full | `{component}-rounded.tsx` |
| RTL | Right-to-left rendering | `{component}-rtl.tsx` |
| Content variants | icon-only, text-only, icon+text | `{component}-content.tsx` |
| Combinations | Fill mode × theme color matrix | `{component}-solid.tsx` |
| Edge cases | Long text, icons, empty, nested | `{component}-edge-cases.tsx` |

### Step 3: Create test files

Each test file is a TSX module with a default export rendering a test layout.

**Base test (if missing):**

```tsx
import { MyComponent } from '../../{component}';

export default () => (
    <div id="test-area">
        <MyComponent>Default</MyComponent>
        <MyComponent hover>Hover</MyComponent>
        <MyComponent focus>Focus</MyComponent>
        <MyComponent active>Active</MyComponent>
        <MyComponent disabled>Disabled</MyComponent>
    </div>
);
```

**States test — use dynamic mapping for auto-updating:**

```tsx
import { MyComponent } from '../../{component}';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(${MyComponent.states.length + 1}, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Normal</span>
            <MyComponent>Normal</MyComponent>
            {MyComponent.states.map((state) => (
                <>
                    <span>{state}</span>
                    <MyComponent {...{ [state]: true }}>{state}</MyComponent>
                </>
            ))}
        </div>
    </>
);
```

**Size test (if component has sizes):**

```tsx
import { MyComponent } from '../../{component}';

export default () => (
    <div id="test-area">
        {MyComponent.options.size
            .filter(size => size !== undefined)
            .map((size) => (
                <div key={size}>
                    <span>{size}</span>
                    <MyComponent size={size}>Size {size}</MyComponent>
                </div>
            ))}
    </div>
);
```

**Fill mode × theme color test (one per fill mode):**

```tsx
import { MyComponent } from '../../{component}';

export default () => (
    <div id="test-area" className="k-d-flex k-flex-wrap k-gap-4">
        {MyComponent.options.themeColor.map((themeColor) => (
            <MyComponent
                key={themeColor}
                fillMode="solid"
                themeColor={themeColor}
            >
                {themeColor || 'undefined'}
            </MyComponent>
        ))}
    </div>
);
```

**Rules:**
- Wrap in `<div id="test-area">` — the screenshot tool captures this element
- Use `className="k-d-grid"` or flexbox for layout (avoid inline styles where Kendo utility classes exist)
- Group related variants in `<section>` elements
- Import the component from its spec file (relative path `../../{component}`)
- Do NOT import from `index.ts` — import directly from the spec
- Default export only (no named exports)
- Use dynamic mapping over `Component.options.*` and `Component.states` arrays instead of hard-coding values — this auto-updates when new variants are added

### Step 4: Export from index

Add each new test file to `packages/html/src/{component}/tests/index.ts`:

```typescript
export { default as {ComponentScenario} } from './{component}-{scenario}';
```

The naming convention for exports is PascalCase: `ButtonSolid`, `ButtonSizes`, `ChipStates`.

### Step 5: Validate

```bash
npm run build:tests --prefix packages/html
```

Check that the compiled test output renders correctly — confirm no JSX/TS errors.

## Gotchas

- Each test file must have a **default export** (not named) — the build system expects `export default`.
- Tests render to static HTML — no interactivity, event handlers, or React hooks.
- State classes (hover, focus, etc.) are applied via props, not CSS pseudo-classes — the test renders the _appearance_ of that state.
- The `id="test-area"` wrapper is mandatory — screenshot tools look for this ID.
- Don't test ARIA attributes here — that's the accessibility testing pipeline.
- Keep test files focused: one axis of variation per file. A 200-variant mega-file produces unreadable screenshots.
- Check `packages/html/src/{component}/tests/` before creating — don't duplicate existing scenarios.
- For complex composite components, create test files that exercise sub-components independently first, then composite scenarios.
- Components with required props: provide sensible defaults in test files; don't leave required props undefined.
