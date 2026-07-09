---
name: manage-html-a11y
description: Create or update ARIA accessibility annotations and validate WCAG compliance for a Kendo UI component. Reads the component spec, writes @aria/@keyboard/@ux/@see JSDoc annotations, applies attributes to TSX templates, and validates with the axe-core test runner. Use this skill when the user wants to add accessibility support, fix ARIA violations, document keyboard shortcuts, or ensure WCAG 2.2 Level AA compliance.
argument-hint: "[component] e.g. button, checkbox, grid"
compatibility: Requires Node.js with npm, and a built HTML package
metadata:
  internal: true
---

# Add Accessibility

Document ARIA attributes as JSDoc annotations in component specs and validate WCAG 2.2 Level AA compliance.

> **See also:** The [accessibility prompt](../../prompts/accessibility.prompt.md) contains the same workflow as a standalone prompt.

## When to use

When the user asks to "add accessibility", "add ARIA", "fix a11y", "document keyboard navigation", "add @aria annotations", or ensure a component is WCAG 2.2 Level AA compliant.

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case, e.g., `checkbox`, `date-picker`, `grid` |
| **Scope** | No | `annotations` (add @aria/@keyboard), `apply` (annotations + JSX attrs), `full` (audit + validate). Default: `full` |

---

## Architecture

**The spec rendering IS the accessibility specification.** ARIA attributes are applied directly in the JSX render function. The `@aria` JSDoc annotations document what the component renders — they are not a test target.

The test runner (`npm run test:a11y`) only validates WCAG compliance via axe-core in JSDOM — no browser required. There is no ARIA rule comparison against a spec list.

---

## JSDoc annotation system

All accessibility documentation lives in the spec file as structured JSDoc tags.

### Two JSDoc blocks per component

```
[imports]
[type definitions]

/**                           ← COMPONENT BLOCK
 * @aria {attr} desc          ← ARIA attributes this component renders
 * @ux {feature} desc         ← UX interaction behaviors
 */
export const ComponentName: KendoComponent<...>

[render function]

ComponentName.states = ...
ComponentName.options = ...
ComponentName.folderName = ...

/**                           ← BOTTOM BLOCK
 * @keyboard {trigger} desc   ← Keyboard shortcuts
 * @see https://url text      ← WAI-ARIA specs, WCAG references
 */

export default ComponentName;
```

### Tag reference

#### `@aria` — ARIA attributes (component block)

```tsx
@aria {role="combobox"} Announces the input as a combobox widget.
@aria {aria-haspopup="listbox"} Indicates a listbox popup is available.
@aria {aria-expanded="true"|"false"} Announces popup visibility state.
@aria {aria-label|aria-labelledby} Required accessible name.
@aria {aria-disabled="true"} Rendered only when the component is disabled.
@aria {aria-controls} Points to the listbox id when popup is open.
```

Rules:
- One tag per distinct attribute
- `|` for alternatives: `{aria-label|aria-labelledby}`
- Include value context: `{aria-expanded="true"|"false"}`
- State-dependent: `{aria-disabled="true"} Rendered only when disabled`
- Sub-components each get their own `@aria` annotations

#### `@ux` — UX behaviors (component block)

```tsx
@ux {Fixed position} Stays visible while the user scrolls the page.
@ux {Item selection} Clicking an item transfers focus and selection to it.
```

#### `@keyboard` — Keyboard shortcuts (bottom block)

Uses `KeyboardEvent.key` names:
```tsx
@keyboard {Tab} Moves focus to the next focusable element.
@keyboard {Shift + Tab} Moves focus to the previous element.
@keyboard {Enter or Space} Activates the focused item.
@keyboard {Alt + ArrowDown} Opens the popup.
@keyboard {Control/Cmd(Mac) + Home} Moves focus to the first item.
```

#### `@see` — References (bottom block)

```tsx
@see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ WAI-ARIA Combobox Pattern
@see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — combobox must have accessible name
```

WCAG Understanding page URLs:
- `1.1.1` → `/non-text-content.html`
- `1.3.1` → `/info-and-relationships.html`
- `4.1.2` → `/name-role-value.html`
- `4.1.3` → `/status-messages.html`

---

## Procedure

### Step 1: Gather context

```
packages/html/src/[component]/
├── [component].spec.tsx       ← main spec
├── [sub-component].spec.tsx   ← sub-component specs (if any)
├── templates/*.tsx            ← what actually renders
└── index.ts
```

Read the spec(s) and templates. Identify:
- What HTML elements and CSS classes are rendered
- Which elements are interactive
- What states exist (disabled, selected, expanded, etc.)
- Whether sub-components have their own spec files

Good reference components to review: `autocomplete`, `button`, `combobox`, `tabstrip`

### Step 2: Add `@aria` annotations

Add/update the component JSDoc block before `export const X: KendoComponent`.

What to annotate:
- **Role** — implicit from `<button>`, `<nav>`, `<input>` OR explicit `role=`
- **Accessible name** — `aria-label`, `aria-labelledby`, `title`
- **State** — `aria-expanded`, `aria-disabled`, `aria-selected`, `aria-checked`, `aria-pressed`
- **Range values** — `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- **ID references** — `aria-controls`, `aria-describedby`, `aria-activedescendant`
- **Ownership** — `aria-owns`

**Sub-components** (separate `.spec.tsx` files) get their own `@aria` block covering only what they render. Example: `tabstrip.spec.tsx` has `@aria {role="tablist"}`, while `tabstrip-item.spec.tsx` has `@aria {role="tab"}`.

### Step 3: Apply ARIA attributes in JSX

Rules:
- **Semantic HTML first** — `<button>` over `<div role="button">`
- **Attributes after `className`**
- **Conditional values** — use `undefined` to omit: `aria-expanded={opened ? 'true' : 'false'}`
- **Icon-only elements** — require `aria-label`
- **`disabled` propagation** — pass to all interactive children
- **Dynamic IDs** — use `nextId(prefix)` from `misc`; use a variable when two elements reference the same ID

```tsx
// ✅ Correct attribute placement and conditional values
<input
    className="k-input-inner"
    role="combobox"
    aria-expanded={opened ? 'true' : 'false'}
    aria-controls={opened ? `${id}-listbox` : undefined}
    aria-label={ariaLabel}
    aria-disabled={disabled ? 'true' : undefined}
/>
```

### Step 4: Add `@keyboard` and `@see` to the bottom block

After all static property assignments, add the bottom JSDoc block:

```tsx
ComponentName.folderName = FOLDER_NAME;

/**
 * @keyboard {ArrowDown} Moves focus to the next item.
 * @keyboard {Escape} Closes the popup.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ WAI-ARIA Combobox Pattern
 */

export default ComponentName;
```

### Step 5: Validate WCAG compliance

```bash
npm run build --prefix packages/html
npm run test:a11y [component]
```

**Target: 0 violations.**

For each violation:
1. Read the axe-core rule description
2. Fix the HTML structure or add missing attributes
3. Create additional templates for states that need coverage
4. Re-run until clean

```bash
npm run test:a11y [component] -- --build     # Build first then test
```

### Step 6: Regenerate docs

```bash
npm run build --prefix packages/html
npm run docs --prefix packages/html
```

Verify `packages/html/docs/[component].md` shows correct sections:
- **Component Style Options** — from `Component.options` (auto-generated)
- **ARIA Attributes** — from `@aria` annotations
- **Keyboard Navigation** — from `@keyboard` annotations
- **UX Behavior** — from `@ux` annotations
- **Resources** — from `@see` annotations

---

## Commands reference

```bash
npm run test:a11y                         # All components
npm run test:a11y button                  # One component
npm run test:a11y -- --build              # Build HTML package first
npm run docs --prefix packages/html       # Regenerate all docs
```
