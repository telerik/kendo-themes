---
agent: "agent"
description: "Add or update accessibility annotations and validate WCAG compliance for an HTML package component"
---

# Accessibility

Given a component name or `.spec.tsx` file, document its ARIA attributes using JSDoc annotations and validate WCAG 2.2 Level AA compliance via axe-core.

> **See also:** The [manage-html-a11y skill](../skills/manage-html-a11y/SKILL.md) contains the same workflow with additional reference material.

## Architecture overview

Accessibility in the HTML package works in two layers:

**1. JSDoc annotations in spec files** — the single source of truth for ARIA documentation.
All annotations live in the spec file alongside the component that renders them.

**2. WCAG validation via axe-core** — `npm run test:a11y [component]` renders templates in JSDOM and runs axe-core. No browser required. No separate ARIA rule validation exists — the spec rendering IS the specification.

## JSDoc annotation conventions

### Placement

**Component JSDoc block** — directly before `export const X: KendoComponent`:
Contains `@aria` and `@ux` tags (structural declarations).

**Bottom JSDoc block** — directly before `export default`:
Contains `@keyboard` and `@see` tags (behavior + references).

```tsx
/**
 * @aria {role="combobox"} Announces the input as a combobox widget.
 * @aria {aria-haspopup="listbox"} Indicates a listbox popup is available.
 * @aria {aria-expanded="true"|"false"} Announces popup visibility state.
 * @aria {aria-label|aria-labelledby} Accessible name for the component.
 * @ux {Keyboard navigation} Arrow keys move through the suggestion list.
 */
export const Autocomplete: KendoComponent<...>

// ... component code and static assignments ...

/**
 * @keyboard {Alt + ArrowDown} Opens the suggestion list.
 * @keyboard {Escape} Closes the list and clears the value.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ WAI-ARIA Combobox Pattern
 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — combobox must have accessible name
 */

export default Autocomplete;
```

### Tag formats

| Tag | Format | Where |
|-----|--------|-------|
| `@aria` | `@aria {attribute="value"} Description` | Component JSDoc |
| `@ux` | `@ux {Feature name} Description` | Component JSDoc |
| `@keyboard` | `@keyboard {Trigger key(s)} What happens` | Bottom JSDoc |
| `@see` | `@see https://url Display text` | Bottom JSDoc |

### `@aria` rules

- One annotation per distinct attribute
- Use `|` for alternatives: `@aria {aria-label|aria-labelledby} Accessible name`
- Include value context: `@aria {aria-expanded="true"|"false"} Popup state`
- State-dependent: `@aria {aria-disabled="true"} Rendered only when disabled`

### `@keyboard` trigger format

Uses `KeyboardEvent.key` values: `{Enter}`, `{Space}`, `{Shift + Tab}`, `{Alt + ArrowDown}`, `{Control/Cmd(Mac) + Home}`

### `@see` for WCAG references

```
@see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — [component context]
```

Common WCAG Understanding URLs:
- `1.1.1` → `/non-text-content.html`
- `1.3.1` → `/info-and-relationships.html`
- `4.1.2` → `/name-role-value.html`
- `4.1.3` → `/status-messages.html`

## Steps

### 1. Read the component

- Read `packages/html/src/[component]/[component].spec.tsx` and sub-component specs
- Read templates to understand what HTML is rendered
- Check similar components for patterns (good references: `autocomplete`, `button`, `combobox`, `tabstrip`)

### 2. Add `@aria` annotations to the component JSDoc block

Cover:
- Role (implicit from element type or explicit `role=`)
- Required accessible name (`aria-label`, `aria-labelledby`, `title`)
- State attributes (`aria-expanded`, `aria-disabled`, `aria-selected`, etc.)
- Value attributes for range inputs (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`)
- ID-reference attributes (`aria-controls`, `aria-describedby`, `aria-activedescendant`)

**Sub-components** (e.g. `tabstrip-item.spec.tsx`) each get their own `@aria` annotations covering only what they render.

### 3. Apply ARIA attributes to the JSX rendering

- **Semantic HTML first** — `<button>` over `<div role="button">`
- **Attributes after `className`**
- **Conditional values** — `aria-expanded={opened ? 'true' : 'false'}`, `undefined` to omit
- **Icon-only buttons** — require `aria-label`
- **Dynamic IDs** — use `nextId(prefix)` from `misc`

```tsx
<input
    className="k-input-inner"
    role="combobox"
    aria-expanded={opened ? 'true' : 'false'}
    aria-controls={opened ? `${id}-listbox` : undefined}
    aria-label={ariaLabel}
    aria-disabled={disabled ? 'true' : undefined}
/>
```

### 4. Add `@keyboard` and `@see` to the bottom JSDoc block

```tsx
Component.states = states;
// ... other assignments

/**
 * @keyboard {ArrowDown} Moves focus to the next item.
 * @keyboard {Escape} Closes the popup.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ WAI-ARIA Combobox Pattern
 */

export default Component;
```

### 5. Validate WCAG compliance

```bash
npm run build --prefix packages/html
npm run test:a11y [component]           # Target: 0 WCAG violations
```

Fix violations by correcting HTML structure, adding missing labels, fixing `disabled` propagation.

### 6. Regenerate and review docs

```bash
npm run docs --prefix packages/html
```

Review `packages/html/docs/[component].md` — it shows sections generated from each annotation type.

## Commands reference

```bash
npm run test:a11y                       # All components
npm run test:a11y button                # One component
npm run test:a11y -- --build            # Build HTML package first
npm run docs --prefix packages/html     # Regenerate all docs
```
