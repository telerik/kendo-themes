# Quick Start Guide: ARIA Integration Workflow

**Feature**: 001-aria-integration  
**Target Audience**: Developers implementing accessibility integration  
**Estimated Time**: 15-20 minutes per component

---

## Prerequisites

### Required Knowledge
- TypeScript/React fundamentals
- SCSS/CSS basics
- Familiarity with ARIA attributes
- Understanding of WCAG 2.2 Level AA criteria

### Required Tools
- Node.js v20+
- npm/pnpm package manager
- Git
- VS Code (recommended) with extensions:
  - ESLint
  - Stylelint
  - TypeScript

### Repository Setup
```bash
# Clone and install dependencies
git clone <repo-url>
cd kendo-themes
npm ci

# Checkout feature branch
git checkout 001-aria-integration

# Build themes and start dev server
npm run sass
npm start  # Starts on localhost:3000
```

---

## Phase 1: Apply ARIA Attributes (P1)

### Workflow Overview

```
1. Read ARIA spec → 2. Apply to templates → 3. Validate → 4. Commit
   (aria/*.md)         (packages/html/)      (test:aria)
```

### Step-by-Step Process

#### 1. Select Component and Read Spec

```bash
# Example: Working on Button component
cd /Users/dtopalov/Documents/Work/packages/kendo-themes

# Read the ARIA specification
cat aria/button_aria.md
```

**Spec Format** (example):
```markdown
| Selector | Attribute | Usage |
|----------|-----------|-------|
| .k-button | role="button" | Use native <button> or add role |
| .k-button[disabled] | aria-disabled="true" | Disabled state |
| .k-button.k-pressed | aria-pressed="true\|false" | Toggle state |
```

#### 2. Locate Component Templates

```bash
# Navigate to HTML package component folder
cd packages/html/src/button

# List template files
ls -la
# Expected files:
# - button.spec.tsx (main component)
# - templates/ (various button templates)
# - tests/ (test cases)
# - index.ts (exports)
```

#### 3. Apply ARIA Attributes to Templates

**Example: Adding ARIA to Button**

```typescript
// packages/html/src/button/button.spec.tsx

export const Button = (props: ButtonProps) => {
    return (
        <button
            className="k-button"
            // Add ARIA attributes AFTER className
            role="button"  // ← Applied from spec
            aria-disabled={props.disabled ? "true" : undefined}  // ← Conditional
            {...props}
        >
            {props.children}
        </button>
    );
};
```

**For Toggle Button Template**:

```typescript
// packages/html/src/button/templates/button-toggle.tsx

export const ButtonToggle = (props: ButtonToggleProps) => {
    const pressed = props.pressed || false;
    
    return (
        <button
            className={`k-button ${pressed ? 'k-pressed' : ''}`}
            role="button"
            aria-pressed={String(pressed)}  // ← "true" or "false"
            {...props}
        >
            {props.children}
        </button>
    );
};
```

#### 4. Apply to All Component Templates

Check all template variations in `templates/` folder:

```bash
cd packages/html/src/button/templates
ls -la

# Apply ARIA to each template:
# - button-default.tsx
# - button-icon.tsx
# - button-toggle.tsx
# - button-disabled.tsx
# etc.
```

**For Icon-Only Buttons** (require aria-label):

```typescript
export const ButtonIcon = (props: ButtonIconProps) => {
    return (
        <button
            className="k-button k-icon-only"
            role="button"
            aria-label={props.ariaLabel || "Icon button"}  // ← Required
            {...props}
        >
            <span className="k-icon k-i-close"></span>
        </button>
    );
};
```

#### 5. Update Template Exports

Ensure new templates are exported:

```typescript
// packages/html/src/button/index.ts

export { Button } from './button.spec';
export { ButtonToggle } from './templates/button-toggle';
export { ButtonIcon } from './templates/button-icon';
export { ButtonDisabled } from './templates/button-disabled';
// ... add all templates
```

#### 6. Validate with test:aria

```bash
# Run ARIA validation for the component
npm run test:aria button

# Expected output:
# ✓ .k-button has role="button"
# ✓ .k-button[disabled] has aria-disabled="true"
# ✓ .k-button.k-pressed has aria-pressed="true|false"
# ✓ Coverage: 3/3 rules (100%)
```

**Fixing Violations**:

```bash
# If validation fails:
# ✗ .k-button.k-pressed missing aria-pressed="true|false"
#   Found in: aria/button_aria.md
#   Not found in: packages/html/src/button/templates/button-toggle.tsx

# Fix: Add missing attribute to button-toggle.tsx template
```

#### 7. Validate with test:wcag

```bash
# Run WCAG compliance validation
npm run test:wcag button

# Expected output:
# Running axe-core accessibility tests for button
# ✓ No critical violations
# ✓ No serious violations
# ✓ WCAG 2.2 Level AA: PASS
```

#### 8. Run TypeScript Validation

```bash
# Ensure no TypeScript errors
npm run typecheck

# Or use VS Code's built-in TypeScript checker
```

#### 9. Commit Changes

```bash
git add aria/button_aria.md
git add packages/html/src/button/

git commit -m "feat(button): apply ARIA attributes from spec

- Add role='button' to all button templates
- Add aria-disabled for disabled state
- Add aria-pressed for toggle buttons
- Add aria-label for icon-only buttons
- Validate with test:aria and test:wcag

Refs: #001-aria-integration
ARIA Coverage: 3/3 rules (100%)
WCAG: PASS"
```

---

## Phase 2: Migrate Knowledge (P2)

### Workflow Overview

```
1. Review spec → 2. Write hybrid docs → 3. Apply to components → 4. Validate
   (aria/*.md)     (TSDoc + JSDoc tags)  (packages/html/)        (coverage)
```

### Step-by-Step Process

#### 1. Convert ARIA Spec to Hybrid Format

**Read hybrid format contract**:
```bash
cat specs/001-aria-integration/contracts/hybrid-format.contract.md
```

**Write TSDoc documentation** following the hybrid format:

```typescript
/**
 * Accessible button component following WCAG 2.2 Level AA standards.
 * 
 * Buttons use native <button> elements which provide built-in keyboard
 * accessibility and screen reader support. For icon-only buttons, an
 * aria-label is required to provide accessible text for screen readers.
 * Toggle buttons use aria-pressed to indicate their state.
 * 
 * @aria .k-button role="button" | nodeName="button"
 * @aria .k-button.k-pressed aria-pressed="true|false"
 * @aria .k-button.k-icon-only aria-label="[descriptive text]"
 * @wcag 4.1.2 A Name, Role, Value
 * @wcag 2.1.1 A Keyboard
 * @selector .k-button Base button element
 * 
 * @example
 * <button className="k-button">Click Me</button>
 * 
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
export const Button: React.FC<ButtonProps> = (props) => {
  // Implementation...
};
```

#### 2. Apply to Component File

Add documentation to:
- Main component file (`button.spec.tsx`)
- Individual templates (`templates/*.tsx`)
- Test files (`tests/*.tsx`)

#### 3. Validate Completeness

**Check all rules migrated**:

```bash
# Compare aria/*.md rules to @aria tags in component
# Ensure every row in markdown table has corresponding @aria tag

# Manual check:
# 1. Count rules in aria/button_aria.md: 3 rules
# 2. Count @aria tags in button.spec.tsx: 3 tags
# 3. Verify each selector/attribute pair matches
```

#### 4. Generate Documentation

```bash
# Generate component documentation (future)
npm run docs:components

# Verify hybrid format renders correctly
```

#### 5. Commit Migration

```bash
git add packages/html/src/button/button.spec.tsx
git add packages/html/src/button/templates/*.tsx

git commit -m "docs(button): migrate ARIA knowledge to hybrid format

- Add TSDoc documentation with accessibility patterns
- Document ARIA attributes with @aria tags
- Reference WCAG criteria with @wcag tags
- Add examples for all button variants
- Preserve all information from aria/button_aria.md

Refs: #001-aria-integration
Phase: P2 - Knowledge Migration"
```

---

## Phase 3: AI Workflow Automation (P3)

### Workflow Overview

AI agents can now:
1. Read hybrid format documentation
2. Extract @aria/@wcag tags programmatically
3. Apply patterns to new components
4. Validate against contracts

### AI-Assisted Component Creation

```typescript
// AI Prompt: "Create accessible dropdown component"
// AI reads: specs/001-aria-integration/contracts/hybrid-format.contract.md
// AI generates component with proper ARIA attributes and documentation

/**
 * Accessible dropdown component with proper ARIA state management.
 * 
 * @aria .k-dropdown-button role="combobox"
 * @aria .k-dropdown-button aria-expanded="true|false"
 * @wcag 4.1.2 A Name, Role, Value
 * ...
 */
export const DropDownList: React.FC<DropDownListProps> = (props) => {
  // AI-generated implementation with ARIA attributes
};
```

---

## Common Patterns

### Pattern 1: Native Element Alternatives

```typescript
// Prefer native <button> over <div role="button">
/**
 * @aria .k-button role="button" | nodeName="button"
 */
<button className="k-button">Native Button</button>  // ✅ Preferred
<div className="k-button" role="button">Div Button</div>  // ⚠️ Only if necessary
```

### Pattern 2: Conditional ARIA Attributes

```typescript
// Only apply when condition is true
<button
    className="k-button"
    aria-disabled={props.disabled ? "true" : undefined}  // ✅ Conditional
>
    Button
</button>
```

### Pattern 3: Dynamic IDs for aria-controls

```typescript
const id = useId();  // React hook for unique ID

<button
    className="k-dropdown-button"
    aria-controls={`${id}-popup`}
    aria-expanded={isOpen}
>
    Dropdown
</button>
<div id={`${id}-popup`} className="k-dropdown-popup">
    Popup Content
</div>
```

### Pattern 4: Icon-Only Buttons Require Labels

```typescript
/**
 * @aria .k-button.k-icon-only aria-label="[descriptive text]"
 */
<button className="k-button k-icon-only" aria-label="Close">
    <span className="k-icon k-i-close"></span>
</button>
```

---

## Validation Commands Reference

```bash
# Test single component
npm run test:aria button
npm run test:wcag button

# Test all components
npm run test:aria
npm run test:wcag

# Test all accessibility (ARIA + WCAG + contrast)
npm run test:a11y

# Run color contrast validation
npm run test:contrast

# Run TypeScript type checking
npm run typecheck

# Run all linters
npm run lint
npm run lint:scripts  # ESLint
npm run lint:styles   # Stylelint
```

---

## Troubleshooting

### Issue: test:aria fails with "Selector not found"

**Symptom**:
```bash
✗ .k-button.k-pressed missing aria-pressed="true|false"
  Selector not found in rendered HTML
```

**Solution**:
1. Check if template exists: `packages/html/src/button/templates/button-toggle.tsx`
2. Verify template is exported in `index.ts`
3. Check if test case renders the template: `packages/html/src/button/tests/button.test.tsx`
4. Add test case if missing

### Issue: test:wcag fails with "Color contrast violation"

**Symptom**:
```bash
✗ .k-button: color-contrast (serious)
  Element has insufficient color contrast (3.5:1)
```

**Solution**:
1. This is a theme issue, not an ARIA issue
2. Check theme SCSS: `packages/default/scss/button/_theme.scss`
3. Adjust color values to meet WCAG AA contrast ratio (4.5:1)
4. Run `npm run test:contrast` to validate

### Issue: TypeScript error on ARIA attribute

**Symptom**:
```typescript
Property 'aria-pressed' does not exist on type 'ButtonHTMLAttributes'
```

**Solution**:
1. Ensure `@types/react` is up to date: `npm update @types/react`
2. Use string syntax: `aria-pressed="true"` not `ariaPressed={true}`
3. Check if attribute is valid HTML/ARIA attribute

### Issue: Hybrid format documentation not rendering

**Symptom**:
Documentation site doesn't show accessibility information

**Solution**:
1. Verify TSDoc format follows contract: `contracts/hybrid-format.contract.md`
2. Check @aria tags have correct syntax: `@aria {selector} {attr}={value}`
3. Regenerate docs: `npm run docs`

---

## Best Practices

### ✅ DO:
- Use native HTML elements when possible (`<button>` over `<div role="button">`)
- Apply ARIA attributes AFTER `className` prop for consistency
- Use conditional ARIA attributes (render `undefined` when not applicable)
- Add `aria-label` to icon-only buttons
- Document rationale in TSDoc prose
- Run validation commands before committing

### ❌ DON'T:
- Modify HTML structure during ARIA integration (only add attributes)
- Apply ARIA to `div` when semantic element exists
- Use `aria-label` on elements with visible text
- Skip validation commands
- Commit without running `test:aria` and `test:wcag`
- Modify theme styles during ARIA integration (separate concern)

---

## Component Priority Tiers

### P0: High-Traffic Interactive Components (Complete First)
- Button, Checkbox, Radio, Switch
- TextBox, NumericTextBox, DatePicker
- DropDownList, ComboBox, MultiSelect
- Grid, TreeView, Menu

### P1: Medium-Traffic Components
- Calendar, Scheduler, Gantt
- Dialog, Notification, Tooltip
- TabStrip, PanelBar, Drawer

### P2: Low-Traffic/Specialized Components
- Barcode, QRCode, Signature
- Spreadsheet, Diagram, Map

---

## Getting Help

### Resources
- **ARIA Spec Files**: `aria/*.md` (component-specific rules)
- **Constitution**: `.specify/memory/constitution.md` (governance principles)
- **Feature Spec**: `specs/001-aria-integration/spec.md` (detailed requirements)
- **Hybrid Format**: `specs/001-aria-integration/contracts/hybrid-format.contract.md`
- **W3C ARIA Patterns**: https://www.w3.org/WAI/ARIA/apg/patterns/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG22/quickref/

### Team Support
- Check existing PRs for similar components
- Review completed components as reference
- Ask questions in team channel
- Consult accessibility specialist for complex patterns

---

**Guide Version**: 1.0  
**Last Updated**: 2026-02-04  
**Estimated Completion Time**: 15-20 minutes per component (P1 phase)