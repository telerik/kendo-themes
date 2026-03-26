---
name: manage-html-a11y
description: Create or update ARIA accessibility attributes and tests for a Kendo UI component. Reads the ARIA reference doc, builds ariaSpec rules on the HTML spec, applies attributes to TSX templates, and validates with the a11y test runner until all violations and coverage gaps are resolved. Use this skill when the user wants to add accessibility support, fix ARIA violations, update ariaSpec rules, or ensure a component is WCAG 2.2 Level AA compliant.
argument-hint: "[component] e.g. button, checkbox, grid"
compatibility: Requires Node.js with npm, and a built HTML package
---

# Add Accessibility

Apply WAI-ARIA attributes to a component's HTML spec and validate WCAG 2.2 Level AA compliance.

> **See also:** The [accessibility prompt](../../prompts/accessibility.prompt.md) contains the same workflow as a standalone prompt. This skill and the prompt share the same patterns and rules — use whichever invocation method is convenient.

## When to use

When the user asks to "add accessibility", "add ARIA", "fix a11y violations", "make component accessible", or update `ariaSpec` rules for a component. Also when a component has no `ariaSpec` yet and needs one.

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case, e.g., `checkbox`, `date-picker`, `grid` |
| **Scope** | No | `spec` (ariaSpec rules only), `apply` (spec + attributes), `full` (audit + report). Default: `full` |
| **Sub-component** | No | Specific part, e.g., "just the header" for grid |

If no component name is given, ask. Everything else can be inferred from existing files.

## Procedure

### Step 1: Gather context

Read all relevant source files to understand the component's structure:

1. **ARIA reference doc** — `aria/{component}_aria.md` (may not exist for all components)
2. **Component spec** — `packages/html/src/{component}/{component}.spec.tsx`
3. **Templates** — `packages/html/src/{component}/templates/*.tsx`
4. **Sub-component specs** — any related `.spec.tsx` files in the same directory (e.g., `tabstrip-item.spec.tsx`)
5. **Reference component** — find a similar component that already has `ariaSpec.rules` and use it as a pattern reference (good examples: `button`, `checkbox`, `combobox`, `tabstrip`)

Note the component's:
- Rendered HTML structure (element types, class names, nesting)
- Interactive elements (buttons, inputs, links)
- States (disabled, selected, expanded, focused, etc.)
- Sub-components embedded in templates

### Step 2: Build `ariaSpec.rules`

The `ariaSpec` static object on the spec component is the **single source of truth** for ARIA testing. Create or update it.

**If `aria/{component}_aria.md` exists:** migrate every row from its rule table into `ariaSpec.rules`. No cherry-picking — every single row must be included. If a rule seems wrong, fix the selector or attribute but still include it.

**If no ARIA markdown exists:** create rules based on:
- WAI-ARIA 1.2 Authoring Practices and WCAG 2.2
- The component's rendered HTML and interactive behavior
- Specs from similar components

Read [references/ariaspec-reference.md](references/ariaspec-reference.md) for complete format details, rule patterns, and examples from real components (Button, Checkbox, TabStrip, Combobox).

**Format:**

```tsx
Component.ariaSpec = {
    selector: '.k-component',
    rules: [
        { selector: '.k-component', attribute: 'role=button', usage: 'Required' },
        { selector: '.k-component', attribute: 'aria-label or aria-labelledby', usage: 'Required when icon-only' },
        { selector: '.k-component', attribute: 'aria-disabled=true (when disabled)', usage: 'When disabled' },
    ]
};
```

**Selector validation — always verify against actual rendered HTML:**

- CSS class selectors must match what the component actually renders (check `className`, `stateClassNames()` output)
- Child `>` vs descendant ` ` selectors must match actual nesting depth
- For icon selectors, use `[class*="i-icon-name"]` instead of `.k-svg-i-icon-name` to match both SVG and font icon modes
- Conditional attributes (e.g., `aria-controls`) may need a selector guard like `[aria-controls]`

**Composite components:** complex components that embed others (e.g., Grid contains Pager, Toolbar) must include child component rules adapted to the parent's DOM structure.

### Step 3: Apply ARIA attributes to TSX files

Edit `.spec.tsx` and `templates/*.tsx` following these rules:

**Placement:** ARIA attributes always go after the `className` prop.

```tsx
// ✅ GOOD
<button className="k-button" role="button" aria-label="Close">

// ❌ BAD
<button role="button" className="k-button">
```

**Semantic HTML first:** prefer `<button>` over `<div role="button">`.

**Conditional values:**
```tsx
<button
    className="k-button"
    aria-expanded={opened ? 'true' : 'false'}
    aria-disabled={disabled ? 'true' : undefined}
/>
```

**Dynamic IDs — use `nextId()` from misc:**
```tsx
import { nextId } from '../../misc';

// Cross-referenced IDs — same variable for both elements
const groupId = nextId('group');
<ListUl aria-labelledby={groupId}>
    <ListGroupItem id={groupId}>Group</ListGroupItem>
```

**Icon-only buttons:** always require `aria-label`.

**No structural changes:** only add attributes — never add or remove HTML elements.

**Verify spec HTML matches real product HTML** — don't introduce element type mismatches (e.g., using `<button>` where the product uses `<span class="k-button">`).

**Do not modify `tests/` folder** unless specifically needed for missing coverage.

**Add TSDoc on ARIA-relevant props:**
```tsx
export type KendoComponentProps = {
    /** @aria aria-pressed="true" when selected */
    selected?: boolean;
};
```

### Step 4: Ensure full template coverage

After adding rules, every rule must be testable by at least one template:

1. Run the a11y tests (see Step 5) and check for **coverage gaps** — rules whose selector never matched any element in any template
2. For each gap, create a new template that renders the component in the required state:
   - **Disabled** → for `aria-disabled` rules
   - **Selected/Active** → for `aria-selected`, `aria-pressed` rules
   - **Expanded** → for `aria-expanded`, `aria-controls`, popup rules
   - **Focused** → for `tabindex=0` on focused items
3. Export new templates from the component's `index.ts`
4. Re-run until: **0 ARIA violations, 0 WCAG violations, 0 coverage gaps**

### Step 5: Validate iteratively

Run after every edit round:

```bash
npm run build --prefix packages/html && npm run test:a11y {component}
```

The test runner performs:
- **ARIA validation** — checks `ariaSpec.rules` against rendered HTML (JSDOM)
- **WCAG validation** — runs axe-core against rendered templates in a browser
- **Coverage check** — reports rules that no template exercises

Fix violations and re-run until clean. Also run type checking:

```bash
npm run typecheck --prefix packages/html
```

### Step 6: Update ARIA reference doc (if needed)

If `aria/{component}_aria.md` exists and is outdated (selectors don't match, rules are missing), update it to match the implemented `ariaSpec.rules`. The spec TSX is the source of truth; the markdown is reference documentation.

If no ARIA markdown exists and the component is complex enough to warrant one, create `aria/{component}_aria.md` following the format of existing docs (see `aria/button_aria.md` or `aria/checkbox_aria.md`).

## WCAG 2.2 Quick Reference

Key criteria to verify: 1.1.1 (non-text content `alt`/`aria-hidden`), 1.3.1 (semantic structure), 2.1.1 (keyboard operable), 2.4.3 (logical focus order), 2.4.6 (descriptive labels), 3.3.1 (error identification in text), 4.1.2 (name/role/value on all UI components). Target Level AA compliance.

## Audit Report Format

When scope is `full`, produce a report:

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

### Remaining Manual Checks
- Focus order validation (visual test required)
- Screen reader announcement testing
```

## Known acceptable violations

These are out of scope — note but don't try to fix:
- `label` — form labels provided by consuming apps
- `target-size` (2.5.8) — controlled by product implementations
- jQuery legacy specs — excluded from compliance testing

## Must-fix violations

Always resolve these:
- `button-name` — buttons without accessible text
- `aria-valid-attr-value` — invalid ARIA attribute values
- `aria-required-attr` — missing required ARIA attributes
- Any other axe-core WCAG 2.2 Level AA violations

## Gotchas

- The `ariaSpec.rules` array is the **single source of truth** — the test runner reads it directly. Legacy fields (`requiredAttributes`, `childSelectors`) are still supported as fallback but should be migrated to `rules`.
- Templates render to **static HTML** — no interactivity. State classes (hover, focus) are applied via props, not CSS pseudo-classes.
- The `npm run test:a11y` command requires the HTML package to be built first (`npm run build --prefix packages/html`).
- For `--affected` mode, the runner detects changes via git — useful for testing only what you changed: `npm run test:a11y -- --affected`.
- Use `--verbose` for detailed output: `npm run test:a11y {component} -- --verbose`.
- Composite components (Grid, Scheduler, FileManager) are the hardest — they embed many sub-components and need extensive rule sets.
- `nextId()` produces IDs like `k-{prefix}-1`, `k-{prefix}-2` — never hardcode sequential IDs.
- When cross-referencing IDs (`aria-labelledby`, `aria-controls`), always store `nextId()` in a variable and use that variable in both the referencing and target elements.
