# CSS Specificity Agent - Streamlined Instructions

## Quick Reference
- **Purpose**: Fix CSS specificity violations in Kendo UI theme system
- **Core Tool**: `:where()` wrapper for reducing specificity
- **Registry**: Use `component-registry.json` as reference
- **Modification**: Direct SCSS file updates only

## Execution Workflow

### 1. Registry Preparation
```bash
# Build/update registry when specs change
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts
# Creates component-registry.json with all official classes
```

### 2. Pre-Analysis Check
```bash
# Check if test needs migration from .js to .ts
ls units/{THEME}/{COMPONENT}.test.js
# If exists, migrate using ESM template before proceeding
```

### 3. Run Tests & Identify Violations
```bash
npx jest --config units/jest.config.mjs units/{THEME}/{COMPONENT}.test.ts --verbose=false
```

### 4. Analyze Test Results & Fix Violations

**IMPORTANT: Only proceed with fixes after analyzing actual test failures!**

#### A. First, Analyze the Failing Selectors
Look at the test output to understand what's actually failing:
- What selectors are violating specificity rules?
- What are the Expected vs Actual values?
- What patterns do you see in the failures?

#### B. Then Fix Based on Violation Type

**For Missing States/Variants in Test Results:**
- If test shows unknown states → Add to states array
- If test shows hidden variants → Check JSX for conditional logic
- If test shows Component.variants missing → Add property

**For SCSS Specificity Issues:**
- Missing base class → Add at parent/mixin level
- Excess specificity → Wrap utilities with `:where()`

#### C. Hidden Variant Detection (only if test suggests it)
If failing selectors contain patterns like `k-icon-button`, then check JSX:
```jsx
// Look for conditional className logic:
{ 'k-icon-button': !text && !hasChildren && hasIcon }
```
Extract these to formal variants in spec.

### 5. Validate Changes
```bash
# Re-run tests to verify fixes
npx jest --config units/jest.config.mjs units/{THEME}/{COMPONENT}.test.ts --verbose=false
```

## Classification Rules

### Never Wrap (Framework Classes)
- **Components**: `.k-button`, `.k-grid` (in registry)
- **Variants**: `.k-icon-button` (in Component.variants)
- **Options**: `.k-button-solid-primary` (size/fill/color combos)
- **States**: `.k-hover`, `.k-focus`, `k-generating`
- **Deprecated**: `k-input-focused` (keep but flag)

### Always Wrap (Utilities)
- Not in registry/specs
- Not following framework patterns
- Styling helpers: `.k-button-icon`, `.k-grid-toolbar`

### Handle Unknown Components
If a class looks like a component but isn't in registry:
1. Add to `agents/css-specificity/proposed-components.json`
2. Wrap with `:where()` as temporary fix
3. Log for registry review

## AI Decision Process

### Pattern Analysis: k-{component}-{suffix}

For patterns like `k-table-row-alt` or `k-input-focused`:

1. **Component-Variant Pattern**: `k-{component}-{variant}`
   - Example: `k-table-row-alt` (table-row + alt variant)
   - Check if base component exists, treat as variant

2. **Legacy State Pattern**: `k-{component}-{state}`
   - Example: `k-input-focused` (should be `k-focus`)
   - Add to spec with `@deprecated` comment

3. **Utility Pattern**: Neither component nor state
   - Example: `k-button-icon` (styling helper)
   - Safe to wrap with `:where()`

### Intelligent Reasoning Process

For each class in a failing selector:
1. **Check registry** - Is it documented?
2. **Analyze semantics** - What's its purpose?
3. **Consider context** - How is it used?
4. **Apply reasoning** - Framework essential or styling sugar?

Example reasoning:
```
.k-button.k-button-solid-primary.k-button-icon.k-generating

.k-button → Base component (essential) → NEVER wrap
.k-button-solid-primary → Framework option → NEVER wrap
.k-button-icon → Utility for icon styling → WRAP
.k-generating → Behavioral state → Add to spec if missing
```

## Specificity Calculation Rules
- **Base 10 points**: Component base class (e.g., `.k-button`)
- **+10 points each**:
  - Component variants (max 1)
  - Component options (max 1 per type)
  - Component nesting (max 2)
  - State modifiers
- **+1 point**: Pseudo-elements, DOM elements

## Component Spec Updates

### Adding Hidden Variants
```typescript
// 1. Define variants
const BUTTON_VARIANTS = ["icon-button"] as const;

// 2. Add to className generation
variantClassNames(BUTTON_CLASSNAME, variant),

// 3. PRESERVE existing conditional (with deprecation)
{
    // @deprecated - Use variant="icon-button" instead
    ['k-icon-button']: !text && !hasChildren && hasIcon
}

// 4. Add variants property
Button.variants = BUTTON_VARIANTS;  // Critical!
```

### Adding Missing States
```typescript
const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled,
    'k-generating',     // Special state
    'k-input-focused'   // @deprecated - use k-focus
] as const;
```

### Legacy State Migration
For `k-{component}-{state}` patterns:
1. Add to states with `@deprecated` comment
2. Keep CSS unchanged for compatibility
3. Document migration for future: `k-input-focused → k-focus`

## Proposed Components Management

When encountering potential missing components:

```javascript
// Load existing file
const proposed = JSON.parse(fs.readFileSync(
    'agents/css-specificity/proposed-components.json', 'utf8'
));

// Add potential component
proposed.proposedComponents.push({
    className: 'k-toolbar',
    reasoning: 'Follows component pattern, used with states',
    foundInSelectors: ['.k-toolbar.k-hover'],
    recommendedAction: 'Add to registry if official'
});

// Save updated file
fs.writeFileSync(proposedFile, JSON.stringify(proposed, null, 2));
```

## Test Migration Template

```typescript
import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { {COMPONENT_CAPITALIZED} } from "../../packages/html/src/{component}/{component}.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "{component}";
const group = component;
const className = {COMPONENT_CAPITALIZED}.className;
const dependencyClassNames = [];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/{component}/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/{component}/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/{component}/_layout.scss' as *;

    @include kendo-{component}--layout();
    @include kendo-{component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const {component}Selectors = getSelectorsSpecificity(result.css, {
    filter: {COMPONENT_CAPITALIZED}.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  {component}Selectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, {COMPONENT_CAPITALIZED});

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
```

## SCSS Fix Examples

### Strategic Base Class Addition
```scss
/* ❌ Inefficient: Multiple separate .k-button blocks */
.k-button {
    // base styles
}
.k-button {
    &.k-hover { ... }
}
.k-button {
    &.k-focus { ... }
}

/* ❌ Also inefficient: Repetitive base class */
.k-button.k-hover { ... }
.k-button.k-focus { ... }
.k-button.k-active { ... }

/* ✅ PREFERRED: Single parent with all nesting */
.k-button {
    // base styles here

    &.k-hover { ... }
    &.k-focus { ... }
    &.k-active { ... }

    &.k-icon-button {
        // icon variant styles
    }

    &.k-button-flat {
        // flat variant styles
    }

    // ALL button-related styles nested here
}

/* ✅ Strategic: Mixin level for multiple components */
@mixin button-states() {
    .k-button {
        &:hover,
        &.k-hover { ... }
    }
}
```

**IMPORTANT: When adding base class, look for opportunities to consolidate multiple `.k-button` blocks into a single parent selector with proper nesting. This improves maintainability and reduces redundancy.**

### Wrapping Utilities Only
```scss
/* Original violation */
.k-button.k-button-solid-primary.k-button-icon.k-hover

/* Analysis:
   .k-button → Component (keep)
   .k-button-solid-primary → Option (keep)
   .k-button-icon → Utility (wrap)
   .k-hover → State (keep)
*/

/* Fixed */
.k-button.k-button-solid-primary:where(.k-button-icon).k-hover
```

## Common Violation Patterns

### Pattern 1: Missing Base Class
```
FAIL: ".k-icon-button (Expected: 0, Actual: 10)"
```
**Root Cause**: SCSS generates standalone selectors
**Fix**: Add `.k-button` at parent/mixin level

### Pattern 2: Unrecognized State
```
FAIL: ".k-button.k-generating (Expected: 10, Actual: 20)"
```
**Root Cause**: State not in component spec
**Fix**: Add `'k-generating'` to states array

### Pattern 3: Hidden Variant
```jsx
{ 'k-icon-button': !text && !hasChildren && hasIcon }
```
**Root Cause**: Conditional logic should be formal variant
**Fix**: Extract to BUTTON_VARIANTS array

### Pattern 4: Legacy State
```
FAIL: ".k-input.k-input-focused"
```
**Root Cause**: Old component-specific state pattern
**Fix**: Add to spec with @deprecated, plan migration

## Critical Success Criteria
- ✅ Component specs updated with all variants/states
- ✅ Component.variants property present
- ✅ SCSS compiles without errors
- ✅ Only utilities wrapped, never framework classes
- ✅ Tests pass with 80%+ violation reduction
- ✅ Proposed components documented
- ✅ Legacy patterns flagged for migration

## File Locations & Modification Boundaries

### Files You CAN Modify:
- **Test File**: `units/{THEME}/{COMPONENT}.test.ts` (only for migration from .js)
- **Component Spec**: `packages/html/src/{COMPONENT}/{COMPONENT}.spec.tsx` (add variants/states)
- **SCSS Files**: `packages/{THEME}/scss/{COMPONENT}/_layout.scss`, `_theme.scss` (apply :where())

### Files You MUST NOT Touch:
- **Infrastructure**: `specificity-analyzer.js`, `utility.js`, `component-registry-builder.ts`
- **Jest Config**: `units/jest.config.mjs`
- **Build Scripts**: Any build or compilation scripts
- **Core Functions**: Any files in `/units/` except the specific component test
- **Package Files**: `package.json`, `tsconfig.json`, etc.

### Read-Only References:
- **Registry**: `component-registry.json` (read-only reference)
- **Proposed**: `agents/css-specificity/proposed-components.json` (append only)

**CRITICAL: If you find issues with infrastructure files, document them but DO NOT modify. Only work within the component's own files.**

## Agent Behavior Rules
- **NO** script creation or automation
- **NO** complex test logic or beforeAll blocks
- **NO** modifications to infrastructure files
- **ONLY** modify: component spec, test file (for migration), SCSS files
- **NEVER** touch: analyzer functions, jest config, build scripts
- **ALWAYS** validate changes with build/test
- **NEVER** wrap framework classes
- **ALWAYS** check specs before modifying SCSS
- **DOCUMENT** potential missing components
- **PRESERVE** backward compatibility
