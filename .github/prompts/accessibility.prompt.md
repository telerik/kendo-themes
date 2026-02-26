---
agent: "agent"
description: "Apply ARIA accessibility attributes to an HTML package component"
---

# Accessibility

Given a component name or `.spec.tsx` file, apply WAI-ARIA attributes to make it WCAG 2.2 Level AA compliant.

## Steps

### 1. Gather context

- Read `aria/[component]_aria.md` if it exists (reference documentation)
- Read `packages/html/src/[component]/[component].spec.tsx` and `templates/*.tsx`
- Look at similarly completed components (those with an `ariaSpec.rules` array) for reference patterns

### 2. Build the `ariaSpec` rules

The `ariaSpec` static object on the spec component is the **single source of truth** for ARIA testing. It must include a `rules` array — each entry maps a CSS selector to an expected attribute.

If `aria/[component]_aria.md` exists, migrate its rule table into `ariaSpec.rules`. If no markdown spec exists, create rules based on:
- WAI-ARIA 1.2 Authoring Practices and WCAG 2.2
- The component's rendered HTML structure and interactive behavior
- Specs from similar components (e.g. `combobox` ↔ `autocomplete`)

Flag and fix issues before applying (wrong selectors, contradictory roles like `role="alert"` + `aria-live="polite"`, missing states).

**Format:**

```tsx
Component.ariaSpec = {
    selector: '.k-component',
    implicitRole: 'button',
    rules: [
        { selector: '.k-component', attribute: 'role=button', usage: 'Required' },
        { selector: '.k-component', attribute: 'aria-label or aria-labelledby or title', usage: 'Required when icon-only' },
        { selector: '.k-component', attribute: 'aria-pressed', usage: 'When togglable' },
        { selector: '.k-component', attribute: 'disabled', usage: 'When disabled' },
        { selector: '.k-component .k-icon', attribute: 'aria-hidden=true', usage: 'Required' },
    ]
};
```

Each rule: `{ selector, attribute, usage }` — same columns as the markdown tables. The test runner reads `ariaSpec.rules` directly; legacy fields (`requiredAttributes`, `childSelectors`) are still supported as fallback but should be migrated to `rules`.

**Composite components:** Complex components that embed other components (e.g. Grid contains Pager, Toolbar, ColumnMenu) must include the child component rules in their own `ariaSpec.rules`. The test validates the **full rendered HTML** from each template, so all nested selectors must be accounted for. Reference the child component's `ariaSpec.rules` and adapt selectors to the parent's DOM structure. Building blocks that don't have their own spec (internal abstractions) must still produce accessible HTML — ensure correct attributes flow via props from parent or are set directly in templates.

### 3. Apply ARIA to TSX files

Edit `.spec.tsx` and `templates/*.tsx`. Rules:

- **Attributes after `className`** — always place ARIA props after the className prop
- **Semantic HTML first** — prefer `<button>` over `<div role="button">`
- **Conditional values** — `aria-pressed={selected ? 'true' : 'false'}`, use `undefined` to omit
- **Dynamic IDs** — use `nextId(prefix)` from `misc` to generate unique IDs (see patterns below); never hardcode sequential IDs like `item-1`, `item-2`
- **Coordinated IDs** — when an ARIA attribute references another element's `id` (e.g. `aria-labelledby`, `aria-controls`, `aria-activedescendant`), store the `nextId()` result in a variable and use that variable in both places
- **Icon-only buttons** — require `aria-label`
- **`disabled` propagation** — pass to all interactive children
- **No structural changes** — only add attributes; never add or remove HTML elements
- **`tests/` folder** — do not modify unless specifically needed for missing coverage

#### Patterns

**Attribute placement** — always after `className`:
```tsx
// ❌ BAD
<button role="button" className="k-button">

// ✅ GOOD
<button className="k-button" role="button" aria-label="Close">
```

**Conditional / state-based attributes:**
```tsx
<button
    className="k-button"
    aria-expanded={opened ? 'true' : 'false'}
    aria-disabled={disabled ? 'true' : undefined}
    {...(loading && { 'aria-busy': 'true' })}
/>
```

**Dynamic ID references — use `nextId()` from `misc`:**

Single-use IDs (each element gets its own unique ID):
```tsx
import { nextId } from '../../misc';

<ListItem id={nextId('list-item')}>Item 1</ListItem>
<ListItem id={nextId('list-item')}>Item 2</ListItem>
// Produces: id="k-list-item-1", id="k-list-item-2"
```

Cross-referenced IDs (ARIA attribute references another element's ID — must use a variable):
```tsx
import { nextId } from '../../misc';

// ❌ BAD — two nextId() calls produce different values
<ListUl aria-labelledby={nextId('group')}>
    <ListGroupItem id={nextId('group')}>Group</ListGroupItem>  {/* IDs won't match! */}

// ✅ GOOD — same variable used in both places
const groupId = nextId('group');
<ListUl aria-labelledby={groupId}>
    <ListGroupItem id={groupId}>Group</ListGroupItem>
```

Spec-level IDs (component root with derived sub-IDs):
```tsx
const { id = 'combobox' } = props;

<input
    className="k-input-inner"
    role="combobox"
    aria-controls={opened ? `${id}-listbox` : undefined}
/>
```

**Icon-only buttons:**
```tsx
// ❌ BAD — no accessible name
<Button icon="close" />

// ✅ GOOD
<Button icon="close" aria-label="Close dialog" />
```

**Attribute-only changes — never add/remove elements:**
```tsx
// ❌ BAD — adding wrapper element
<div role="region" aria-label="Actions">
    <Button>Save</Button>
</div>

// ✅ GOOD — attributes on existing element
<Button aria-label="Save document">Save</Button>
```

**Coverage gaps — add templates for untested states:**
```tsx
// templates/combobox-disabled.tsx
export const ComboboxDisabled = (props) => (
    <Combobox disabled {...props} />
);
// then export from index.ts
```

Add **TSDoc** on props that affect ARIA:

```tsx
export type KendoComponentProps = {
    /** @aria aria-pressed="true" when selected */
    selected?: boolean;
    /** @aria aria-label required for icon-only usage */
    icon?: string;
};
```

### 4. Validate iteratively

Run after every edit round:

```bash
npm run build --prefix packages/html && \
npm run test:a11y [component]
```

Fix violations and re-run until clean. Also run `npm run typecheck --prefix packages/html` to catch type errors.

### Known acceptable violations

These are out of scope — note but don't try to fix:
- `label` — form labels provided by consuming apps
- `target-size` (2.5.8) — controlled by product implementations
- jQuery legacy specs — excluded from compliance testing

### Must-fix violations

Always resolve these:
- `button-name` — buttons without accessible text
- `aria-valid-attr-value` — invalid ARIA attribute values
- `aria-required-attr` — missing required ARIA attributes
- Any other axe-core WCAG 2.2 Level AA violations
