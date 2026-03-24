---
name: accessibility-auditor
description: "Audits and fixes WCAG 2.2 Level AA accessibility for Kendo UI HTML package components: writes ariaSpec.rules, applies ARIA attributes to spec.tsx and templates, and validates with axe tests. Use when auditing a component for accessibility, fixing missing ARIA attributes, or applying WAI-ARIA roles and states. Not for color-contrast-only audits (use npm run test:contrast) or SCSS audits."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Accessibility Auditor (D2)

Audit and fix **WCAG 2.2 Level AA** compliance for Kendo UI components in `packages/html/`.

> **Note:** This skill extends `.github/prompts/accessibility.prompt.md`. Read that file too for the full ARIA application workflow.

## Pre-Flight: Read Context First

1. `.github/prompts/accessibility.prompt.md` — base ARIA workflow (always read first)
2. `aria/[component]_aria.md` — per-component ARIA spec (if it exists)
3. `packages/html/src/[component]/[component].spec.tsx` — current ariaSpec state
4. `packages/html/src/[component]/templates/*.tsx` — rendered HTML structure
5. A completed reference component (e.g., `button`, `checkbox`, `input`) for pattern reference

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `COMPONENT` | ✅ | Component name(s) to audit, e.g. `chip`, `rating`, `datepicker` |
| `SCOPE` | ⬜ | `spec` (ariaSpec rules only), `apply` (spec + attributes), `full` (audit + report). Default: `full` |

---

## Step-by-Step Workflow

### Step 1 — Gather Component Context

For each component to audit:

1. Read `aria/[component]_aria.md` (if present) — this is the authoritative spec
2. Read `packages/html/src/[component]/[component].spec.tsx` — check if `ariaSpec` exists and has `rules`
3. Read all `packages/html/src/[component]/templates/*.tsx` — understand actual rendered HTML
4. Check WAI-ARIA 1.2 Authoring Practices for the component's role
5. Look at a **completed** comparable component for reference patterns:
   - Interactive widget → `button.spec.tsx`
   - Form input → `packages/html/src/input/`
   - Composite widget → `packages/html/src/combobox/` or `packages/html/src/grid/`

### Step 2 — Build `ariaSpec.rules`

**Identify which rules are needed:**

| Component type | Core ARIA requirements |
|----------------|----------------------|
| Interactive (button, link) | `role`, `aria-label` (icon-only), `aria-pressed` (toggle), `disabled` |
| Form input (textbox, checkbox) | `role`, `aria-labelledby`, `aria-required`, `aria-invalid`, `aria-describedby` |
| Composite widget (combobox, grid) | `role`, `aria-expanded`, `aria-haspopup`, `aria-activedescendant` |
| Live region (notification, alert) | `role=alert/status`, `aria-live`, `aria-atomic` |
| Navigation (breadcrumb, menu) | `role=navigation/menubar`, `aria-label`, `aria-current` |
| Landmark (dialog, drawer) | `role=dialog`, `aria-modal`, `aria-labelledby` |

**Rule format:**
```tsx
{ selector: '.k-[component]', attribute: 'role=button', usage: 'Required' }
{ selector: '.k-[component]', attribute: 'aria-label', usage: 'Required when icon-only' }
{ selector: '.k-[component]', attribute: 'aria-pressed', usage: 'When togglable' }
{ selector: '.k-[component]', attribute: 'disabled', usage: 'When disabled' }
{ selector: '.k-[component] .k-icon', attribute: 'aria-hidden=true', usage: 'Required' }
```

**Validate rules before applying:**
- No conflicting roles (e.g., `role="alert"` + `aria-live="polite"` — should be `aria-live="assertive"`)
- Selectors are real CSS selectors that match actual elements in the rendered HTML
- `aria-labelledby` targets must reference real IDs that exist in the DOM

### Step 3 — Apply ARIA Attributes to TSX Files

**Rules for attribute placement (from accessibility.prompt.md):**
- ARIA props always go **after** `className`
- Prefer semantic HTML over role overrides (`<button>` > `<div role="button">`)
- Use conditional values: `aria-expanded={opened ? 'true' : 'false'}`
- Use `undefined` to conditionally omit: `aria-disabled={disabled ? 'true' : undefined}`
- Icon decorative elements: `aria-hidden="true"`

**In `.spec.tsx`:**
```tsx
<div
    className={classNames(...)}
    role="region"
    aria-label={ariaLabel}
    aria-disabled={disabled ? 'true' : undefined}
    {...other}
>
```

**In `templates/*.tsx`:**
```tsx
export const MyTemplate = ({ ariaLabel, opened, ...props }: Props) => (
    <MyComponent
        aria-expanded={opened ? 'true' : 'false'}
        aria-label={ariaLabel}
        {...props}
    />
);
```

**Do NOT modify `tests/` files** unless specifically needed for coverage gaps.

### Step 4 — Update or Create `ariaSpec.rules` in Spec

```tsx
[ComponentName].ariaSpec = {
    selector: '.k-[component]',
    implicitRole: '[role-if-implicit]',    // Optional
    rules: [
        { selector: '.k-[component]', attribute: 'role=[role]', usage: 'Required' },
        { selector: '.k-[component]', attribute: 'aria-label', usage: 'Required when no visible text label' },
        { selector: '.k-[component] .k-icon', attribute: 'aria-hidden=true', usage: 'Required — decorative icons' },
        // ... all rules from aria/[component]_aria.md
    ]
};
```

If `aria/[component]_aria.md` exists, migrate its full rules table into `ariaSpec.rules`.

### Step 5 — Composite Component Handling

If the component renders other components internally (e.g., Grid contains Pager, Toolbar):

1. Import each child component's `ariaSpec.rules`
2. Adapt selectors for the parent DOM context
3. Merge into the parent's `ariaSpec.rules`

```tsx
// In grid.spec.tsx, include pager rules with adjusted selectors:
{ selector: '.k-grid .k-pager', attribute: 'role=navigation', usage: 'Required' },
{ selector: '.k-grid .k-pager-nav', attribute: 'aria-label', usage: 'Required — page navigation buttons' },
```

### Step 6 — Run Validation

```bash
# Validate a single component
npm run test:a11y [component]

# Validate all affected components
npm run test:a11y:affected

# Check color contrast for all themes
npm run test:contrast
```

**Interpret results:**
- `FAIL: missing role` → Add `role=` attribute to the selector
- `FAIL: missing aria-label` → Add `aria-label` prop (may need a new prop in the spec interface)
- `FAIL: aria-hidden not propagated` → Pass `aria-hidden` explicitly to icon children

---

## WCAG 2.2 Quick Reference Checklist

| Criterion | Level | Check |
|-----------|-------|-------|
| 1.1.1 Non-text Content | A | All images/icons have `alt` or `aria-hidden` |
| 1.3.1 Info & Relationships | A | Structure conveyed via semantics, not visuals only |
| 2.1.1 Keyboard | A | All functions operable via keyboard |
| 2.4.3 Focus Order | A | Focus order is logical |
| 2.4.6 Headings and Labels | AA | Descriptive labels on all interactive elements |
| 3.3.1 Error Identification | A | Errors identified and described in text |
| 4.1.2 Name, Role, Value | A | All UI components have name, role, states/properties |

---

## Audit Report Format

When `SCOPE=full`, produce a report:

```markdown
## Accessibility Audit: [component]

### Summary
- **Status:** Pass / Fail / Partial
- **WCAG Level:** A / AA
- **Issues found:** N

### Issues

| Severity | Selector | Issue | Fix |
|----------|----------|-------|-----|
| Critical | `.k-chip` | Missing `role=option` inside listbox | Add `role="option"` |
| Major    | `.k-chip .k-icon` | Decorative icon not hidden | Add `aria-hidden="true"` |

### Applied Fixes
- Added `role="option"` to `.k-chip` when inside `.k-chip-list`
- Added `aria-hidden="true"` to all `.k-icon` decorative elements
- Added `aria-label` prop to `ChipSpec` for icon-only chips

### Remaining Manual Checks
- Focus order validation (visual test required)
- Screen reader announcement testing
```

---

## Edge Cases

- **Icon-only buttons without label**: Add an `ariaLabel` prop to the spec interface; make it required via TypeScript and document it.
- **Dynamic IDs**: Generate with ``id={`${id}-listbox`}`` and ensure `aria-controls` references the same value.
- **Implicit roles from HTML semantics**: Don't add `role="button"` to `<button>` — note it as `implicitRole` in ariaSpec metadata.
- **Legacy `requiredAttributes`/`childSelectors` in existing ariaSpec**: Migrate to `rules` format when editing the file.
- **Component with no existing ariaSpec**: Create one from scratch using WAI-ARIA Authoring Practices and the component's rendered DOM.

---
