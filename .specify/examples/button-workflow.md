# Example Workflow: Applying ARIA Attributes to Button Component

**Component**: Button  
**Phase**: Phase 3 - User Story 1 (Apply ARIA Specifications)  
**Created**: 2026-02-05 (T009 - Foundation Phase)

This document demonstrates the complete workflow for applying ARIA attributes to a component, using the Button as a reference example for all other components.

---

## Step 1: Read ARIA Specification

**File**: `aria/button_aria.md`

**Content**:
```markdown
## WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-button` | `role=button` or `nodeName=button` | If the used element is not `<button>`, explicitly set its `role` to `button`. |
```

**Analysis**:
- **Selector**: `.k-button` - The CSS class for button elements
- **Attribute**: `role=button` OR native `<button>` element
- **Usage**: Only add role if element is NOT a native `<button>` tag
- **Complexity**: Simple (1 rule, alternative handling)

---

## Step 2: Locate Component Files

**Component Directory**: `packages/html/src/button/`

**File Structure**:
```
button/
├── button.spec.tsx           ← Main component spec (TARGET)
├── constants.ts              ← Component constants
├── index.ts                  ← Exports
├── templates/                ← Component variations (TARGET)
│   ├── button.tsx
│   ├── icon-button.tsx
│   └── [other templates]
└── tests/                    ← Test scenarios (NO MODIFICATIONS)
    └── button.tsx
```

**Key Points**:
- ✅ Modify: `button.spec.tsx` and `templates/*.tsx`
- ❌ Do NOT modify: `tests/` folder (entry points only)

---

## Step 3: Current Component Implementation

**File**: `packages/html/src/button/button.spec.tsx` (excerpt)

**Current Code** (without ARIA attributes):
```tsx
export const Button: React.FC<KendoButtonProps> = (props) => {
    const {
        icon,
        text,
        size = Size.medium,
        rounded = Roundness.medium,
        fillMode = FillMode.solid,
        themeColor = ThemeColor.base,
        variant,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                BUTTON_CLASSNAME,
                // ... class logic
            )}
            {...otherProps}
        >
            {icon && <Icon icon={icon} />}
            {text && text}
        </button>
    );
};
```

**Analysis**:
- ✅ Already uses native `<button>` element
- ✅ Semantic HTML preferred over ARIA role (per Constitution Principle II)
- ✅ No `role` attribute needed (native button provides implicit role)
- ℹ️ This is the **preferred pattern** - native element > ARIA role

---

## Step 4: Apply ARIA Attributes (If Needed)

**Decision Tree**:
```
Is element a native <button>?
├─ YES → Skip adding role="button" (native element preferred)
└─ NO → Add role="button" to the element
```

**For Button Component**: No changes needed! ✅

**Why**: The component already uses `<button>`, which provides:
- Implicit `role="button"` 
- Built-in keyboard support (Enter, Space)
- Native focus management
- Screen reader compatibility

**Alternative Example** (if element was `<div>`):
```tsx
// ❌ BAD: Non-semantic element requiring ARIA
<div className="k-button" role="button" tabIndex={0}>
    Click Me
</div>

// ✅ GOOD: Native semantic element (current implementation)
<button className="k-button">
    Click Me
</button>
```

---

## Step 5: Validate with test:aria

**Command**:
```bash
npm run test:aria button
```

**Expected Output**:
```
🔍 ARIA Attributes Validator

📦 Testing: button

Checking packages/html/src/button/tests/button.tsx

✓ .k-button has role="button" OR nodeName="button"
  Found: <button> element (semantic HTML - preferred)

📊 Results:
  ✓ 1/1 rules validated (100% coverage)
  ✓ All required attributes present
  ✓ Semantic HTML used where possible

✅ PASS: Button component meets ARIA specification
```

**Validation Points**:
- ✅ Selector `.k-button` found in rendered HTML
- ✅ Native `<button>` element detected (preferred over role attribute)
- ✅ 100% rule coverage (1/1 rules validated)

---

## Step 6: Validate with test:wcag

**Command**:
```bash
npm run test:wcag button
```

**Expected Output**:
```
🔍 WCAG 2.2 Compliance Validator

📦 Testing: button

Running axe-core analysis...

✓ No violations found
✓ WCAG 2.2 Level AA: PASS

📊 Accessibility Score: 100%

Criteria Met:
  ✓ 4.1.2 (Name, Role, Value) - Level A
  ✓ 2.1.1 (Keyboard) - Level A
  ✓ 2.4.7 (Focus Visible) - Level AA

✅ PASS: Button component is WCAG 2.2 Level AA compliant
```

**Validation Points**:
- ✅ Zero critical violations
- ✅ Zero serious violations
- ✅ WCAG 2.2 Level AA compliance
- ✅ Button has accessible name (text content)
- ✅ Keyboard accessible (native button)
- ✅ Focus visible

---

## Step 7: TypeScript Validation

**Command**:
```bash
cd packages/html && npm run typecheck
```

**Expected Output**:
```
> @progress/kendo-themes-html@13.0.0-dev.5 typecheck
> npx tsc --noEmit --emitDeclarationOnly false --project tsconfig.json

[No output = success]
```

**Validation Points**:
- ✅ No TypeScript errors
- ✅ ARIA attributes type-safe (React.ButtonHTMLAttributes includes all ARIA props)
- ✅ Component props properly typed

---

## Step 8: Update Tracking & Commit

**Update Tracking Spreadsheet**:
```csv
Component,Priority,Has ARIA Spec,Phase 1 Status,Phase 2 Status,Phase 3 Status,Notes
button,P0,Yes,Complete,Pending,Pending,Native <button> used (no role needed)
```

**Git Commit**:
```bash
git add aria/button_aria.md
git add packages/html/src/button/

git commit -m "chore(button): verify ARIA compliance

- Component already uses native <button> element (semantic HTML)
- No ARIA role attribute needed (implicit from native element)
- Validates 100% against aria/button_aria.md specification
- test:aria PASS (1/1 rules validated)
- test:wcag PASS (WCAG 2.2 Level AA compliant)

Refs: #001-aria-integration
ARIA Coverage: 1/1 rules (100%)
WCAG: PASS"
```

---

## Workflow Summary

```
┌─────────────────────────────────────────────────────────────┐
│                    ARIA Application Workflow                 │
└─────────────────────────────────────────────────────────────┘

1. READ SPEC
   └─→ aria/[component]_aria.md
       Extract: selectors, attributes, usage rules

2. LOCATE FILES
   └─→ packages/html/src/[component]/
       Targets: *.spec.tsx, templates/*.tsx
       Exclude: tests/

3. ANALYZE CURRENT
   └─→ Check if semantic HTML already provides functionality
       Prefer: native elements > ARIA attributes

4. APPLY ATTRIBUTES
   └─→ Add ARIA only if semantic HTML insufficient
       Position: After className prop
       Format: Conditional attributes for state

5. VALIDATE: test:aria
   └─→ npm run test:aria [component]
       Goal: 100% rule coverage

6. VALIDATE: test:wcag
   └─→ npm run test:wcag [component]
       Goal: WCAG 2.2 Level AA, zero violations

7. VALIDATE: typecheck
   └─→ cd packages/html && npm run typecheck
       Goal: No TypeScript errors

8. COMMIT
   └─→ Update tracking spreadsheet
       Git commit with validation results
```

---

## Time Estimate

**For Simple Components** (like Button):
- Read spec: 2 min
- Locate files: 1 min
- Analyze/Apply: 5-8 min
- Validate (3 tests): 3-5 min
- Commit: 2 min

**Total**: ~15-20 minutes per component (P0/P1 components)

**For Complex Components** (like Grid, Scheduler):
- Read spec: 5 min
- Locate files: 2 min
- Analyze/Apply: 15-20 min (multiple selectors, states)
- Validate: 5-10 min
- Commit: 3 min

**Total**: ~30-40 minutes per complex component

---

## Key Learnings from Button Example

1. ✅ **Semantic HTML First**: Native `<button>` preferred over `<div role="button">`
2. ✅ **Implicit ARIA**: Native elements provide roles automatically
3. ✅ **Validation Order**: test:aria → test:wcag → typecheck
4. ✅ **Tracking**: Update spreadsheet before commit
5. ✅ **Commit Format**: Include coverage metrics and validation results

---

## Pattern for Components Requiring ARIA

**Example: Icon-Only Button** (requires aria-label)

**ARIA Spec**: 
- Icon-only buttons must have `aria-label` for screen readers

**Implementation**:
```tsx
export const IconButton: React.FC<IconButtonProps> = (props) => {
    const { icon, ariaLabel, ...otherProps } = props;
    
    return (
        <button
            className="k-button k-icon-button"
            aria-label={ariaLabel || "Icon button"}  // ← ARIA attribute after className
            {...otherProps}
        >
            <Icon icon={icon} />
        </button>
    );
};
```

**Key Points**:
- ARIA attribute comes AFTER className
- Conditional: Only apply when needed
- Provide default value if prop missing

---

## Next Steps

This workflow serves as the template for all 112 components. Follow the same pattern for each component batch:

**Batch 1 (P0)**: 14 components - Start here for MVP  
**Batch 2 (P1)**: 69 components - Medium priority  
**Batch 3 (P2)**: 29 components - Complete coverage

---

**Example Complete**: Button workflow documented  
**Status**: Ready for replication across all components  
**Reference**: Use this document for Tasks T013+ (Phase 3 implementation)