---
agent: "agent"
description: "Apply ARIA accessibility attributes to an HTML package component"
---

# Accessibility

Given a component name or `.spec.tsx` file, apply WAI-ARIA attributes to make it WCAG 2.2 Level AA compliant.

> **See also:** The [manage-html-a11y skill](../skills/manage-html-a11y/SKILL.md) contains the same workflow with additional reference material. This prompt and the skill share the same patterns and rules.

## Steps

### 1. Gather context

- Read `packages/html/src/[component]/[component].spec.tsx` and `templates/*.tsx`
- Look at similarly completed components (those with an `ariaSpec.rules` array) for reference patterns
- Read the component's sub-component specs (e.g. `tabstrip-item.tsx`, `step.tsx`) to understand rendered HTML structure

### 2. Build the `ariaSpec` rules

The `ariaSpec` static object on the spec component is the **single source of truth** for ARIA testing. It must include a `rules` array — each entry maps a CSS selector to an expected attribute.

Create rules based on:
- WAI-ARIA 1.2 Authoring Practices and WCAG 2.2
- The component's rendered HTML structure and interactive behavior
- Specs from similar components (e.g. `combobox` ↔ `autocomplete`)

Flag and fix issues before applying (wrong selectors, contradictory roles like `role="alert"` + `aria-live="polite"`, missing states).

**Rule changes require explicit user permission:** Never add, remove, or modify ariaSpec rules without asking the user first. Present proposed rule changes and wait for approval before applying them.

**Selector validation — always verify against actual rendered HTML:**

The markdown spec selectors may not match the actual class names or DOM structure produced by the TSX component. Before adding a rule, check that:
- The CSS class in the selector matches what the component actually renders (e.g. `stateClassNames()` produces `k-disabled` not `k-step-disabled`, so `.k-step-disabled` must become `.k-step.k-disabled`)
- Child `>` vs descendant ` ` selectors match the actual nesting depth
- Selectors don't assume a specific icon rendering mode — use `[class*="i-icon-name"]` instead of `.k-svg-i-icon-name` to match both SVG (`k-svg-i-*`) and font (`k-i-*`) icon classes

**Conditional/cross-reference rules:**

Rules with `aria-controls`, `aria-labelledby`, or similar ID-reference attributes often require:
- A selector guard like `[aria-controls]` to only match when the attribute is actually present (e.g. `.k-button[aria-controls]` instead of `.k-button`)
- Templates that render both the referencing element AND the target element with matching IDs
- Sub-component prop additions (e.g. adding an `ariaControls` prop to a child component so the link `<a>` can receive `aria-controls`)

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
- **Verify spec HTML matches real product HTML** — check that components render using the same element types as the real product. For example, if the product uses `<span class="k-remove-tab k-button ...">` for a close button, don't use `<IconButton>` (which renders a `<button>`) in the spec — use `<span>` with the appropriate classes to avoid WCAG violations like `nested-interactive`
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

### 4. Ensure full coverage — no gaps allowed

After adding rules, ensure **every single rule** is tested by at least one template. **Coverage gaps are NOT acceptable** — every ariaSpec rule MUST be matched by at least one rendered element across all templates. Gaps mean the test infrastructure cannot verify that the rule is correctly applied, which defeats the purpose of the ariaSpec.

1. Run `npm run build --prefix packages/html && npm run test:a11y [component]`
2. Check the output for **coverage gaps** — rules where the selector never matched any element in any template
3. For each gap, either:
   - Modify an existing template to render the missing state/element, OR
   - Create a new template that renders the component in the required state
4. Export any new template from the component's `index.ts`
5. Re-run until: **0 ARIA violations, 0 WCAG violations, 0 coverage gaps**

**This step is mandatory.** Do NOT consider the task complete if coverage gaps remain.

Common states that need dedicated templates:
- **Disabled** — for `aria-disabled` rules
- **Selected/Active** — for `aria-selected`, `aria-current`, `aria-pressed` rules
- **Expanded** — for `aria-expanded`, `aria-controls`, nested popup/submenu rules
- **Focused** — for `tabindex=0` on focused items

### 5. Validate iteratively

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
- `nested-interactive` — in some composite components (e.g. MenuButton inside TabStripItem), interactive controls are nested within interactive containers; these are documented as known exceptions in the component's ariaSpec and markdown spec
- jQuery legacy specs — excluded from compliance testing

When an acceptable violation is encountered, it will appear in test output with `ℹ️` prefix. Document the exception in the ariaSpec as a comment.

### Must-fix violations

Always resolve these:
- `button-name` — buttons without accessible text
- `aria-valid-attr-value` — invalid ARIA attribute values
- `aria-required-attr` — missing required ARIA attributes
- Any other axe-core WCAG 2.2 Level AA violations
