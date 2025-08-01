# CSS Specificity Agent

## Agent Overview
You are an intelligent CSS Specificity Analysis Agent for the Kendo UI theme system. Your job is to analyze CSS specificity violations and create smart fixes using `:where()` wrapping.

## Framework Rules

### Specificity Calculation
- **Base 10 points**: Every selector MUST include the component's base className (e.g., `.k-button`)
- **+10 points each for**:
  - Com### 5. Modify Original SCSS Files & Handle Missing Components
- Read original SCSS files for the component
- Apply `:where()` wrapping ONLY to utility classes (after spec updates)
- **For potential missing components**: Add to `proposed-components.json` then wrap with `:where()` as temporary fix
- **Preserve SCSS structure** - don't break syntax
- **Modify files in-place** - user will track changes separately

### 6. Validation and Testing

**Comprehensive Validation Process:**

1. **Spec Validation** (for variants and states):
   - **Compile component spec** to verify TypeScript syntax
   - **Test variant prop** with new variant options
   - **Verify state coverage** matches CSS selectors
   - **Check deprecation comments** are properly formatted

2. **CSS Compilation** (for SCSS modifications):
   - **Test SCSS compilation** of modified files
   - **Verify no syntax errors** in selectors
   - **Confirm :where() placement** is syntactically correct

3. **Framework Integration**:
   - **Run component tests** to verify fixes work
   - **Check specificity calculations** match expected values
   - **Verify no regression** in existing functionality

4. **Documentation Updates**:
   - **Generate change summary** with before/after comparisons
   - **List extracted variants** and their usage
   - **Document deprecated states** and migration paths
   - **Create migration notes** for future breaking changes variants (max 1, e.g., `k-icon-button`)
  - Component options (max 1 per type, e.g., `k-button-solid-primary` = fillMode + themeColor)
  - Component nesting (max 2 official components, e.g., `.k-grid .k-button`)
  - State modifiers (e.g., `.k-hover`, `.k-focus`, `:hover`)
- **+1 point for**: Pseudo-elements (`::before`), DOM elements (`span`, `div`)

### Class Classification (CRITICAL)

**NEVER WRAP these classes:**

1. **Official Components** - Have `.spec.tsx` files in `/packages/html/src/`:
   - `k-button` (button.spec.tsx)
   - `k-svg-icon` (svg-icon.spec.tsx)
   - `k-button-group` (button-group.spec.tsx)
   - etc.

2. **Framework Variants** - Defined in component specs:
   - `k-icon-button` (variant in button.spec.tsx)

3. **Framework Options** - Legitimate combinations:
   - Size: `k-button-sm`, `k-button-md`, `k-button-lg`
   - FillMode: `k-button-solid`, `k-button-outline`, `k-button-flat`, `k-button-link`, `k-button-clear`
   - ThemeColor: `k-button-primary`, `k-button-secondary`, etc.
   - Rounded: `k-rounded-sm`, `k-rounded-md`, etc.
   - **Combined options**: `k-button-solid-primary` (fillMode + themeColor)

4. **Framework States** - Standard states (NEVER wrap):
   - Standard: `k-hover`, `k-focus`, `k-active`, `k-disabled`, `k-selected`
   - Pseudo-classes: `:hover`, `:focus`, `:active`, `:disabled`
   - Special: `k-no-focus`, `k-generating`, `k-loading`, `k-expanded`, `k-collapsed`

5. **Deprecated Component-Specific States** - Legacy states (NEVER wrap, but flag):
   - Pattern: `k-{component}-{state}` (e.g., `k-input-focused`, `k-button-hover`)
   - **Action**: Add to component spec states array with `@deprecated` comment
   - **Mark**: `@deprecated` - use standard `k-{state}` instead
   - **Example**: `k-input-focused` → should be `k-focus`, but keep working for now

**CRITICAL: State Recognition Guidelines**

**These are ALWAYS STATES (add to spec if missing):**
- Any class starting with `k-` that represents component interaction or behavior
- **Standard states**: `k-hover`, `k-focus`, `k-active`, `k-disabled`, `k-selected`
- **Special states**: `k-no-focus` (prevents focus styling), `k-generating` (loading/processing), `k-loading`, `k-expanded`, `k-collapsed`
- **Legacy states**: `k-{component}-{state}` patterns like `k-input-focused`

**Agent State Detection Process:**
1. **Analyze the class semantically**: Does it describe HOW the component behaves or its interaction state?
2. **Check naming patterns**: Classes like `k-no-focus`, `k-generating` are clearly behavioral states
3. **Add to component spec**: If it's a legitimate state not in the spec, add it to the states array
4. **Never wrap states**: States should always be preserved in specificity calculations

**SHOULD WRAP these classes (Arbitrary/Utility):**
- `k-button-icon` (utility class, not in any spec)
- `k-table-row-alt` (styling helper)
- Any `k-*` class not found in specs, options, variants, or states

## Task Template

### 1. Use Pre-Built Component Registry

**The component registry has already been built for you!** Simply load it:

```javascript
// Load the pre-built registry
const registry = JSON.parse(fs.readFileSync('component-registry.json', 'utf8'));

// The registry contains:
// - registry.officialComponents: Array of all official component classes

// Helper function to check if a class is official
function isOfficialClass(className) {
    return registry.officialComponents.includes(className);
}
```

**If you need to rebuild the registry** (only if spec files have changed):
```bash
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts
# This updates component-registry.json with latest spec data
```

### 2. Run Component Tests
```bash
# Use TypeScript tests with Jest config from units folder
npx jest --config units/jest.config.cjs units/{THEME}/{COMPONENT}.test.ts --verbose=false
```

### 3. Analyze Violations & Intelligent Fix Workflow

For each failing selector, determine **violation type** and **intelligent fix**:

#### **Violation Type 1: Too-Low Specificity**
**Problem**: Selector missing required base component class (< 10 points)

**Intelligent Strategic Placement:**
1. **What to add**: The component's base className (e.g., `.k-button`)
2. **Where to add**: Find the highest-level SCSS nesting to avoid repetition
3. **Strategy**: Add base class at mixin or parent level so all nested selectors inherit it

**Strategic Examples:**
```scss
/* ❌ INEFFICIENT: Repetitive approach */
.k-button.k-hover { ... }
.k-button.k-focus { ... }
.k-button.k-active { ... }

/* ✅ STRATEGIC: Base class at parent level */
.k-button { // ← Add base class here once
    &.k-hover { ... }
    &.k-focus { ... }
    &.k-active { ... }

    // All nested selectors now inherit .k-button automatically
}

/* ✅ STRATEGIC: Base class in mixin definition */
@mixin button-states() {
    .k-button { // ← Add base class at mixin level
        &:hover,
        &.k-hover { ... }

        &:focus,
        &.k-focus { ... }
    }
}
```

**Agent Priority for Base Class Placement:**
1. **First**: Check if there's a parent selector or mixin where base class can be added once
2. **Second**: Look for existing `.k-button` selectors that can be enhanced with `&` nesting
3. **Last Resort**: Add base class to individual selectors (avoid repetition)

#### **Violation Type 2: Too-High Specificity**
**Problem**: Selector exceeds framework limits

**Intelligent Decision Process:**

For each class in a violating selector, use the registry as a **reference tool** but apply **intelligent reasoning**:

1. **Load the registry**: Use it to quickly check if a class is officially documented
2. **Apply context and reasoning**: Consider the class's purpose, usage patterns, and framework role
3. **Make nuanced decisions**: Don't just follow rules - understand the intent behind each class

**Key Questions to Ask:**
- Is this class essential to the component's core identity?
- Does it serve a structural framework purpose or is it just styling sugar?
- Would wrapping this class break intended functionality or just reduce specificity?
- Is this a legitimate framework pattern or an arbitrary utility?

**Example Reasoning Process:**
```
// Load registry for reference only
// Then think about each class in the failing selector

// For: .k-button.k-button-solid-primary.k-button-icon.k-input-focused

// .k-button → This is clearly the base component class, essential framework element
// → Decision: NEVER wrap

// .k-button-solid-primary → Framework option pattern, legitimate fillMode+themeColor combo
// → Decision: NEVER wrap

// .k-button-icon → Not in registry... seems like utility for icon styling
//                → Not essential to button identity, likely just styling helper
//                → Decision: Safe to wrap with :where()

// .k-input-focused → Deprecated component-specific state pattern
//                 → Should be k-focus, but keeping for compatibility
//                 → Decision: Keep but flag as deprecated
```

**Case 2a: Spec is Missing Info (Update Component Spec)**
```tsx
/* Example: .k-button.k-input-focused found, but not in button.spec.tsx states */

/* Action: Update packages/html/src/button/button.spec.tsx */
const states = [
  States.hover,
  States.focus,
  States.active,
  States.selected,
  States.disabled,
  'k-input-focused', // @deprecated - use k-focus instead
  'k-button-hover'   // @deprecated - use k-hover instead
];
```

**Case 2b: CSS Has Arbitrary Classes (Fix SCSS Files Directly)**
```scss
/* Problem in packages/default/scss/button/_layout.scss */
.k-button.k-button-solid-primary.k-button-icon.k-hover { ... }

/* Classification: */
// .k-button → ✅ Official component (keep)
// .k-button-solid-primary → ✅ Framework option (keep)
// .k-button-icon → ❌ Arbitrary utility (wrap)
// .k-hover → ✅ Standard state (keep)

/* Direct Fix in Original File: */
.k-button.k-button-solid-primary:where(.k-button-icon).k-hover { ... }

/* Agent Actions: */
1. Read packages/default/scss/button/_layout.scss
2. Find the violating selector
3. Apply :where() wrapping to .k-button-icon only
4. Write back to the same file
5. Verify SCSS syntax is preserved
```

**Case 2c: Potential Missing Official Components (Fallback with Proposal)**
```scss
/* Problem: Selector has component-like class not in registry */
.k-some-component.k-variant.k-hover { ... }

/* Analysis Process: */
// .k-some-component → Not in registry, but follows component naming pattern
// Could this be an official component we missed in the registry?

/* Intelligent Fallback Strategy: */
1. Apply semantic analysis: Does this look like a legitimate component?
   - Follows k-{noun} pattern (not k-{adjective} utility pattern)
   - Used as base class in multiple selectors
   - Has component-like behavior (states, variants applied to it)

2. If likely component: Add to proposed-components.json for review
3. For now: Wrap with :where() as safety measure
4. Log for future registry updates

/* Agent Actions: */
1. Analyze if class follows component patterns vs utility patterns
2. Add potential components to agents/css-specificity/proposed-components.json
3. Apply :where() wrapping as temporary fix
4. Log recommendation for registry review
```
```

#### **Violation Type 3: Hidden Variants (Extract to Spec)**
**Problem**: Conditional className logic should be formal variants

**Detection Pattern:**
```jsx
// Found in component JSX:
{ 'k-icon-button': !text && !hasChildren && hasIcon }
{ 'k-table-row-alt': index % 2 === 1 }
{ 'k-calendar-weekday': isWeekday }
```

**Intelligent Variant Extraction Workflow:**

1. **Scan component spec for conditional className objects** using AI analysis:
   ```javascript
   // Look for patterns like this in the JSX:
   { "k-icon-button": !text && !hasChildren && hasIcon }
   { "k-table-row-alt": index % 2 === 1 }
   ```

2. **Use intelligent reasoning to extract variant name**:
   - Read the conditional logic and understand what it represents
   - Determine if this is truly a variant (component behavior change) or just styling
   - Extract meaningful variant names that follow framework conventions

3. **Update component spec using AI judgment**:
   - Decide if the conditional logic should become a formal variant
   - Consider backward compatibility and framework consistency
   - Make intelligent updates to the component specification
   ```tsx
   // Add to BUTTON_VARIANTS array
   const BUTTON_VARIANTS = ["icon-button"]; // ← Agent adds this

   // Update className generation to use variantClassNames
   variantClassNames(BUTTON_CLASSNAME, variant),

   // ✅ PRESERVE existing conditional logic as-is for backward compatibility
   // The variantClassNames call handles the new formal variant
   // The conditional logic provides fallback for existing usage
   {
       // @deprecated - Use variant="icon-button" instead of conditional logic
       ['k-icon-button']: !text && !hasChildren && hasIcon
   }
   ```

**CRITICAL: Never Modify Existing Rendering Logic**

When extracting variants, the agent must:
1. **ADD** formal variant to BUTTON_VARIANTS array
2. **ADD** variantClassNames call to className generation
3. **PRESERVE** existing conditional logic unchanged
4. **ADD** deprecation comment to existing conditional logic
5. **NEVER** modify the conditional logic itself (no `&& variant !== 'icon-button'`)

The existing conditional logic must remain functional for backward compatibility. The new variant system runs alongside it, not as a replacement.

4. **Add deprecation comments**:
   ```tsx
   // @deprecated - Use variant="icon-button" instead of conditional logic
   ```

**Agent Actions:**
1. **Read component spec file** (.spec.tsx)
2. **Detect conditional className patterns**
3. **Extract variant names** from k-{component}-{variant} pattern
4. **Update VARIANTS array** in the spec
5. **ADD variantClassNames call** to className generation (don't remove existing logic)
6. **Add deprecation comments** for old patterns (but keep them functional)
7. **CRITICAL: Add Component.variants property** for CSS test framework:
   ```tsx
   // Add variants property directly to the component function
   Badge.variants = BADGE_VARIANTS;  // or [] if no variants
   ```
8. **Verify tests still pass** after variant extraction

**Component.variants Property Requirement:**

**WHY IT'S CRITICAL**: The CSS specificity test framework uses `Component.variants` properties to calculate proper specificity thresholds. Without this property, tests may incorrectly flag legitimate variant selectors as violations.

**IMPLEMENTATION PATTERN**:
```tsx
// In packages/html/src/{component}/{component}.spec.tsx:

// 1. Define variants array (if component has variants)
const COMPONENT_VARIANTS = ["variant1", "variant2"] as const;

// 2. Add variants property directly to component function
Component.states = states;
Component.options = options;
Component.variants = COMPONENT_VARIANTS;  // Add this line
Component.className = COMPONENT_CLASSNAME;
Component.defaultOptions = defaultOptions;

// Example for Badge (no variants):
Badge.states = states;
Badge.options = options;
Badge.variants = [];  // Empty array for components with no variants
Badge.className = BADGE_CLASSNAME;
Badge.defaultOptions = defaultOptions;

// Example for Button (with variants):
const BUTTON_VARIANTS = ["icon-button"] as const;

Button.states = states;
Button.options = options;
Button.variants = BUTTON_VARIANTS;  // Used by CSS tests for specificity threshold calculation
Button.className = BUTTON_CLASSNAME;
Button.defaultOptions = defaultOptions;
```

**CSS Test Framework Integration:**
- CSS specificity tests access `Badge.variants`, `Button.variants`, etc. directly from component functions
- These properties tell the test framework which variant classes are legitimate
- Helps calculate proper specificity thresholds for component selectors
- Prevents false positives when testing variant-specific CSS rules

**CRITICAL: Backward Compatibility Rule**
- **NEVER** modify existing conditional className logic
- **ALWAYS** add new variant system alongside existing logic
- **ALWAYS** preserve existing rendering behavior
- **ONLY** add deprecation comments to guide future migration

#### **Violation Type 4: Missing States (Update Spec)**
**Problem**: Valid framework states found in CSS but missing from component spec

**Detection Pattern:**
```scss
// Found in SCSS but missing from spec:
.k-button.k-no-focus { ... }
.k-button.k-generating { ... }
.k-input.k-input-focused { ... }
```

**State Classification Workflow:**

1. **Use AI to detect state-like classes** in failing selectors:
   - Analyze each class to determine if it represents a component state
   - Consider patterns like k-hover, k-focus, k-active, k-disabled, k-selected
   - Look for component-specific states like k-no-focus, k-generating, k-loading
   - Identify deprecated patterns like k-input-focused, k-button-hover

2. **Apply intelligent state categorization**:
   - **Standard states**: Widely-used framework states (k-hover, k-focus, etc.)
   - **Special states**: Component-specific but legitimate states (k-no-focus, k-generating)
   - **Legacy states**: Deprecated component-specific patterns (k-input-focused)

3. **Update component spec with missing states**:
   ```tsx
   // Agent adds missing states to spec
   const states = [
     States.hover,
     States.focus,
     States.active,
     States.selected,
     States.disabled,
     'k-no-focus', // @deprecated - artificial state for focus visibility control
     'k-generating' // @deprecated - animation state for button loading/processing
   ] as const;
   ```

**Agent Actions for Missing States:**
1. **Scan CSS selectors** for state-like classes not in spec
2. **Classify state type** using semantic analysis:
   - **Interaction states**: `k-hover`, `k-focus`, `k-active`, `k-disabled`
   - **Behavioral states**: `k-no-focus`, `k-generating`, `k-loading`, `k-expanded`
   - **Legacy states**: `k-{component}-{state}` patterns
3. **For all legitimate states**: Add to component.states array (standard or special)
4. **For legacy states**: Add to component.states with @deprecated comment
5. **Update spec file** automatically
6. **Re-run tests** to verify fixes

**Proposed Components Management:**

When the agent encounters a class that might be an official component but isn't in the registry:

1. **Load existing proposed-components.json**:
   ```javascript
   const proposedFile = 'agents/css-specificity/proposed-components.json';
   const proposed = JSON.parse(fs.readFileSync(proposedFile, 'utf8'));
   ```

2. **Add potential component with analysis**:
   ```javascript
   // Add to proposedComponents array
   proposed.proposedComponents.push({
     className: 'k-toolbar',
     reasoning: 'Follows component naming pattern, used with states/variants',
     foundInSelectors: ['.k-toolbar.k-hover', '.k-toolbar.k-button'],
     recommendedAction: 'Add to component registry if confirmed as official'
   });
   ```

3. **Save updated proposed-components.json**:
   ```javascript
   fs.writeFileSync(proposedFile, JSON.stringify(proposed, null, 2));
   ```

4. **Apply temporary fix**: Wrap with `:where()` until registry is updated

**State Identification Examples:**
```typescript
// States to ADD to component spec:
const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled,
    States.selected,
    'k-no-focus',    // Special state: prevents focus styling
    'k-generating',  // Special state: loading/processing animation
    'k-loading',     // Special state: loading indicator
    'k-input-focused' // @deprecated - use k-focus instead
] as const;
```

#### **Violation Type 5: Legacy State Patterns (Deprecate and Officialize)**
**Problem**: Component-specific state selectors that don't follow k-{state} convention

**Detection Pattern:**
```scss
// Legacy patterns found in CSS:
.k-input.k-input-focused { ... }    // Should be .k-input.k-focus
.k-button.k-button-hover { ... }    // Should be .k-button.k-hover
.k-grid.k-grid-loading { ... }      // Should be .k-grid.k-loading
```

**Legacy State Workflow:**

1. **Use AI to detect legacy state patterns**:
   - Look for classes that follow k-{component}-{state} naming
   - Example analysis: "k-input-focused" → input component with focused state
   - Apply reasoning: Is this truly a state or just a utility class?

2. **Apply intelligent classification**:
   - Use context and naming patterns to determine legitimacy
   - Consider: k-input-focused (legitimate state) vs k-button-icon (utility class)
   - Reason about the class's purpose in the design system

3. **Component Spec Updates**:
   ```tsx
   // Agent adds legacy states with deprecation comments
   const states = [
     States.hover,
     States.focus,
     States.active,
     States.selected,
     States.disabled,
     'k-input-focused', // @deprecated - use k-focus instead, kept for compatibility
     'k-grid-loading'   // @deprecated - use k-loading instead, kept for compatibility
   ] as const;
   ```

4. **Migration Planning**:
   ```javascript
   // Agent generates migration recommendations
   const migrationNotes = [
     "k-input-focused → k-focus (breaking change for v2.0)",
     "k-button-hover → k-hover (breaking change for v2.0)",
     "k-grid-loading → k-loading (breaking change for v2.0)"
   ];
   ```

**Agent Actions for Legacy States:**
1. **Detect component-specific state patterns** in failing selectors
2. **Validate it's actually a state** (not utility class)
3. **Add to component spec** with @deprecated comment
4. **Generate migration notes** for future breaking changes
5. **Keep CSS unchanged** (preserve compatibility)
6. **Log recommendations** for eventual standardization

**State vs Utility Distinction (use AI reasoning):**

**Apply intelligent analysis to distinguish:**

- **These are STATES** (add to spec): Classes that represent component interaction or behavioral states
  - 'k-input-focused' → Clearly a focused state for input components
  - 'k-grid-loading' → Loading state for grid components
  - 'k-button-pressed' → Pressed interaction state for buttons

- **These are UTILITIES** (wrap with :where()): Classes that provide styling helpers, not behavioral states
  - 'k-button-icon' → Utility for styling icons within buttons
  - 'k-table-row-alt' → Styling utility for alternating table rows
  - 'k-grid-column-menu' → Utility for column menu styling

**Use your intelligence to analyze context, naming patterns, and purpose - not rigid code rules.**

### **Critical Pattern Distinction: k-{component}-{suffix} Analysis**

**The agent must intelligently distinguish between different `k-{component}-{suffix}` patterns:**

**🎯 Component-Variant Pattern: `k-{component}-{variant}`**
- **Examples**: `k-table-row-alt`, `k-grid-cell-header`, `k-button-split`
- **How to identify**: The suffix describes a **type** or **appearance** variation of the component
- **Semantic clues**: `alt` (alternative), `header` (type), `split` (visual variant)
- **Analysis**: Check if `k-table-row` exists as a component, then `alt` becomes a variant
- **Action**: Treat the component part as official, consider if variant should be extracted to spec

**⚠️ Legacy State Pattern: `k-{component}-{state}`**
- **Examples**: `k-input-focused`, `k-button-hover`, `k-grid-cell-selected`
- **How to identify**: The suffix represents an **interaction** or **behavioral state**
- **Semantic clues**: `focused` (interaction), `hover` (interaction), `selected` (state), `loading` (state)
- **Analysis**: These should eventually be `k-focus`, `k-hover`, `k-selected` etc.
- **Action**: Add to component spec as deprecated states, don't wrap

**🔧 Utility Pattern: `k-{context}-{utility}`**
- **Examples**: `k-button-icon`, `k-form-label`, `k-menu-item`
- **How to identify**: Neither part is a standalone component, it's a styling helper
- **Analysis**: These are arbitrary utility classes for specific contexts
- **Action**: Safe to wrap with :where()

**AI Decision Process for k-{X}-{Y} patterns:**
1. **Check if k-{X} exists as an official component** in the registry
2. **If YES**: Analyze if {Y} represents a variant, state, or utility context
3. **If NO**: Likely a utility class, safe to wrap
4. **Apply semantic reasoning**:
   - **Variants** describe *what type* of component: `alt`, `header`, `split`, `primary`
   - **States** describe *how the component behaves*: `selected`, `focused`, `hover`, `loading`, `expanded`
   - **Utilities** describe *styling context*: `icon`, `text`, `wrapper`

### 4. Enhanced Intelligent Workflow

**PRIORITY ORDER for Violation Analysis:**

1. **First: Check for Hidden Variants** (Type 3)
   - Scan component spec for conditional className logic
   - Extract variants before analyzing CSS specificity issues

2. **Second: Check for Missing States** (Type 4)
   - Compare CSS state selectors with component.states
   - Add missing states to spec rather than wrapping

3. **Third: Check for Legacy States** (Type 5)
   - Detect k-{component}-{state} patterns
   - Add to spec with @deprecated comments

4. **Fourth: Handle Traditional Specificity Issues** (Types 1 & 2)
   - Too-low specificity: Add base component class
   - Too-high specificity: Wrap utility classes with :where()

**Enhanced AI Decision Process:**

**You must use human-like intelligence and reasoning for each class. NO CODE, NO REGEX!**

For each CSS class in a failing selector, you must:

1. **Read and understand the context** - What component is this? What does this selector do?

2. **Apply intelligent reasoning** - Think about:
   - What is this class's purpose in the design system?
   - Does it define core component identity or just add styling sugar?
   - Would wrapping this break expected functionality or just reduce specificity?
   - Is this a legitimate framework pattern or arbitrary utility?

3. **Use the registry as reference only** - Check if a class exists in the registry, but make your decision based on understanding, not rules

4. **Consider the broader context** - How does this class fit into the component's architecture?

5. **Handle potential missing components** - If a class looks like it could be an official component but isn't in the registry:
   - Apply semantic analysis to determine if it follows component patterns
   - Add to `agents/css-specificity/proposed-components.json` for review
   - Apply :where() wrapping as temporary safety measure
   - Generate recommendation for registry updates

**Component Pattern Recognition:**
```javascript
// Classes that suggest official component status:
// - Follow k-{noun} naming (not k-{adjective})
// - Used as base class in multiple selectors
// - Have states/variants applied to them
// - Appear in component-like contexts

// Example: .k-toolbar (not in registry)
// Analysis: Follows component pattern, used with states like .k-toolbar.k-hover
// Action: Add to proposed-components.json + wrap for now
```

**Example of AI reasoning process:**

```
// For selector: .k-button.k-button-solid-primary.k-table-row-alt.k-some-custom-class

// .k-button → I can see this is the base component class for buttons.
//           → This is fundamental to the component's identity.
//           → Decision: NEVER wrap

// .k-button-solid-primary → This looks like a combination of fillMode (solid) + themeColor (primary).
//                         → This follows the framework's option combination pattern.
//                         → This is a legitimate framework styling option.
//                         → Decision: NEVER wrap

// .k-table-row-alt → This follows k-{component}-{suffix} pattern. Let me analyze:
//                  → Is "k-table-row" an official component? Let me check the registry...
//                  → If YES: then "alt" might be a variant (alternating row styling)
//                  → If NO: Could "k-table-row" be a missing component? It follows component patterns...
//                  → Decision: If missing from registry, add to proposed-components.json + wrap for now
//                  → Action: Flag for potential component extraction or registry update

// .k-some-custom-class → This doesn't follow any framework patterns I recognize.
//                      → Appears to be arbitrary custom styling.
//                      → Not essential to component functionality.
//                      → Decision: SAFE to wrap with :where()
```

**Missing Component Detection Process:**

For classes not in registry but following component-like patterns:

1. **Semantic Analysis**: Does it follow `k-{noun}` pattern vs `k-{adjective}` utility pattern?
2. **Usage Analysis**: Is it used as a base class with states/variants applied?
3. **Context Analysis**: Does it appear in component-like contexts?
4. **Decision**: If 2+ criteria match, treat as potential missing component

**Example Detection:**
```
// .k-toolbar (not in registry)
// ✅ Follows k-{noun} pattern
// ✅ Found with states: .k-toolbar.k-hover
// ✅ Used as base class in multiple selectors
// → Decision: Likely missing component, add to proposed-components.json
```

### 5. Modify Original SCSS Files
- **Test compilation** of modified files
- **Verify no syntax errors**
- **Confirm only arbitrary classes are wrapped**
- **Run component tests** to verify fixes work

## Example Analysis

```scss
/* Original selector with violation */
.k-button.k-button-solid-primary.k-button-icon.k-hover

/* Classification: */
// .k-button → Official component (button.spec.tsx) ✅ KEEP
// .k-button-solid-primary → Framework option (fillMode + themeColor) ✅ KEEP
// .k-button-icon → Arbitrary utility ❌ WRAP
// .k-hover → Arbitrary utility ❌ WRAP

/* Correct fix: */
.k-button.k-button-solid-primary:where(.k-button-icon):where(.k-hover)
```

## Critical Success Criteria

1. **✅ No syntax errors** in modified SCSS files
2. **✅ Only arbitrary classes wrapped** - never official components/variants/options
3. **✅ SCSS structure preserved** - mixins, nesting, variables intact
4. **✅ Compilation successful** - modified files must compile correctly
5. **✅ Significant violation reduction** - aim for 80%+ fix rate

## Usage

**Preparation (run once or when specs change):**
```bash
# Build/update the component registry
npx tsx component-registry-builder.ts
# This creates/updates component-registry.json with all official classes
```

**To use this agent:**

1. Save this file as `agents/css-specificity/instructions.md`
2. **Ensure registry is current**: Run `npx tsx component-registry-builder.ts` if spec files changed
3. In GitHub Copilot, use: `@workspace /fix-specificity {component} {theme}`
4. Copilot will use these instructions and the pre-built registry for analysis
5. **Test compilation**: Run build/test commands to verify fixes work

## Pre-Analysis: Test Migration Check

**BEFORE analyzing any component for CSS specificity violations, the agent MUST check if the component's test file needs migration from CommonJS (.js) to ESM TypeScript (.ts).**

### Test Migration Detection and Process

**Step 1: Check Test File Format**
```bash
# Check if component test exists in old .js format
ls units/{THEME}/{COMPONENT}.test.js
```

If `.js` test file exists, it needs migration to `.ts` with ESM imports.

**Step 2: Migration Pattern (based on button test migration)**

**From CommonJS (.js) format:**
```javascript
require("./theme.env.js");
require("../utility"); // This will register the custom matcher
const { testKendoComponent, getSelectorsSpecificity, calculateSpecificityThreshold } = require("../utility");
const sass = require("sass");
const path = require("path");
const { describe, it, expect } = require("@jest/globals");

// Component definition using string literals
const component = "button";
const group = component;
const className = "k-button";
```

**To ESM TypeScript (.ts) format:**
```typescript
import "./theme.env.js";
import "../test-setup.js"; // This will register the custom matcher
import { testKendoComponent } from "../test-setup.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Button } from "../../packages/html/src/button/button.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

// Component definition using imported spec
const component = "button";
const group = component;
const className = Button.className;
```

**Key Migration Changes:**
1. **File extension**: `.js` → `.ts`
2. **Imports**: `require()` → `import` statements
3. **Component spec import**: Import actual component spec from `packages/html/src/{component}/{component}.spec`
4. **className reference**: Use `ComponentSpec.className` instead of hardcoded string
5. **SCSS compilation**: Update to use specific mixins instead of full index.scss (for better performance)
6. **Test description**: Add expected vs actual specificity values in test names
7. **Error handling**: Enhanced error messages with source location

**Step 3: SCSS Compilation Updates**

**Old compilation (full index):**
```typescript
const result = sass.compileString(
  `
  @use '../packages/${process.env.THEME}/scss/index.scss' as *;
  @include kendo-button--styles();
`,
  // ... options
);
```

**New compilation (specific mixins):**
```typescript
const result = sass.compileString(
  `
  @use '../packages/${process.env.THEME}/scss/button/_variables.scss' as *;
  @use '../packages/${process.env.THEME}/scss/button/_theme.scss' as *;
  @use '../packages/${process.env.THEME}/scss/button/_layout.scss' as *;

  @include kendo-button--layout();
  @include kendo-button--theme();
`,
  // ... options
);
```

**Step 4: Enhanced Test Configuration**

**Old selector filtering:**
```javascript
const buttonSelectors = getSelectorsSpecificity(result.css, {
  filter: ".k-button",
  sourceMap: result.sourceMap,
});
```

**New selector filtering:**
```typescript
const buttonSelectors = getSelectorsSpecificity(result.css, {
  filter: Button.className,
  minSpecificity: 0,
  sourceMap: result.sourceMap,
});
```

**Step 5: Improved Test Assertions**

**Old test format:**
```javascript
it(`"${selector}"`, () => {
  expect(specificityValue).toHaveSpecificity(expectedSpecificity, sourceLocation);
});
```

**New test format:**
```typescript
it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
  try {
    expect(specificityValue).toBe(expectedSpecificity);
  } catch (error) {
    throw new Error(`${error.message}\nSource: ${sourceLocation}`);
  }
});
```

**Step 6: Migration Execution**

When a `.js` test file is detected:
1. **Create new `.ts` file** with migrated content
2. **Delete old `.js` file**
3. **Test compilation** to ensure migration worked
4. **Run test** to verify functionality
5. **Proceed with CSS specificity analysis** on the migrated test

**CRITICAL: Complete test migration BEFORE analyzing CSS specificity violations. The new TypeScript format provides better error reporting and component spec integration essential for accurate analysis.**

**For colleagues:**
- They can copy this Markdown file
- Use the same `@workspace /fix-specificity` command in GitHub Copilot
- Agent will follow identical logic and procedures

## Configuration Variables

- `{COMPONENT}`: Component to analyze (e.g., "button", "card", "grid")
- `{THEME}`: Theme to process (default: "default")
- `{PACKAGE_PATH}`: Path to HTML package specs (`packages/html/src`)

## File Structure to Analyze and Modify

When analyzing a component, the agent should examine and modify these specific files:

1. **Test File**: `units/{THEME}/{COMPONENT}.test.ts` - Contains specificity violations to fix
2. **Component Spec**: `packages/html/src/{COMPONENT}/{COMPONENT}.spec.tsx` - Defines official variants, options, states (may need updates)
3. **SCSS Files** (MODIFY THESE DIRECTLY): `packages/{THEME}/scss/{COMPONENT}/` - Contains the actual CSS selectors to modify:
   - `_layout.scss` - Structure and layout styles (primary target for fixes)
   - `_theme.scss` - Theme-specific colors and styling (secondary target)

**Important**: The agent will modify the original SCSS files in-place. User should use git to track changes.

## Intelligent Classification Guide

The agent should intelligently analyze each CSS class in failing selectors and make informed decisions about how to handle them. Use the component registry as reference data, but apply reasoning and context awareness.

### **Classification Categories**

When examining a class like `.k-button-icon` or `.k-hover`, consider:

**🏛️ Framework Classes (NEVER WRAP)**
- **Official Components**: Base component classes (e.g., `.k-button`, `.k-grid`)
  - *How to identify*: Listed in registry.components from spec files
- **Framework Variants**: Official component variations (e.g., `.k-icon-button`)
  - *How to identify*: Listed in component.variants arrays (accessible via Component.variants property)
  - *CRITICAL: Component.variants Property*: Each component spec MUST have a `Component.variants` property (e.g., `Badge.variants = []`) containing all valid variant class names for proper specificity threshold calculation in CSS tests
- **Framework Options**: Legitimate option combinations (e.g., `.k-button-solid-primary`)
  - *How to identify*: Generated from component.options (size, fillMode, themeColor, etc.)
- **Framework States**: Standard interaction states (e.g., `.k-hover`, `.k-focus`)
  - *How to identify*: Listed in component.states or common patterns (`:hover`, `:focus`)

**⚠️ Legacy Classes (NEVER WRAP, but flag for migration)**
- **Deprecated States**: Component-specific states that should use standard equivalents
  - *Pattern*: `k-{component}-{state}` (e.g., `k-input-focused` → should be `k-focus`)
  - *Action*: If not in registry.states, recommend adding it to the states array with `@deprecated` comment

**🔧 Utility Classes (WRAP with :where())**
- **Arbitrary Utilities**: Helper classes not defined in any framework spec
  - *Examples*: `.k-button-icon`, custom styling helpers
  - *How to identify*: Not found in any registry category, clearly utility-focused

**⚙️ Component-Variant Patterns (ANALYZE CAREFULLY)**
- **Potential Hidden Variants**: Classes that might be `k-{component}-{variant}` patterns
  - *Examples*: `k-table-row-alt` (table-row component + alt variant), `k-button-split` (button + split variant)
  - *AI Analysis Required*: Determine if the base component exists and if this represents a legitimate variant
  - *Action*: If confirmed as component+variant, treat the component part as official, consider extracting the variant

### **Intelligent Decision Process**

For each violating selector:

1. **Analyze Context**: What component is this selector targeting? What's its purpose?

2. **Check Registry**: Look up each class in the component registry built from specs

3. **Apply Reasoning**:
   - Does this class serve a legitimate framework purpose?
   - Is it a utility class that could reasonably be wrapped without breaking functionality?
   - Does it follow deprecated patterns that should be migrated?
   - **NEW: Does it follow component-variant patterns?** (e.g., `k-table-row-alt` = `k-table-row` + `alt` variant)

4. **Make Informed Decision**:
   - **Keep as-is**: Framework classes that are essential to the component system
   - **Flag for spec update**: Legacy patterns that should be documented as deprecated
   - **Analyze for variants**: Component-variant patterns that might need variant extraction
   - **Wrap in :where()**: Arbitrary utilities that can be de-prioritized in specificity

### **Action Priority Framework**

**Priority 1: Update Component Specs** (when needed)
- **File**: `packages/html/src/{COMPONENT}/{COMPONENT}.spec.tsx`
- **When**: You discover component-specific deprecated states not yet documented
- **Action**: Add missing deprecated states to the `states` array with `@deprecated` comments

**Priority 2: Fix SCSS Selectors Directly** (main task)
- **Files**: `packages/{THEME}/scss/{COMPONENT}/_layout.scss` and `_theme.scss`
- **When**: You identify arbitrary utility classes that can be safely wrapped
- **Action**: Apply `:where()` wrapping to reduce specificity without breaking functionality
- **Method**: Modify original files in-place using replace_string_in_file tool

## Simplified Direct Modification Workflow

**Step 1: Load Registry and Identify Violations**
```bash
# Ensure registry is up-to-date (only if needed)
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts

# Run tests to identify violations
npx jest --config units/jest.config.cjs units/default/button.test.ts --verbose=false
```

**Step 2: Intelligent Analysis and Decision Making**

**Use the registry as a reference tool, then apply AI reasoning:**

1. **Load the registry** to check which classes are officially documented:
   ```bash
   # Registry is available at component-registry.json
   # Contains: officialComponents, officialVariants, allOfficialClasses
   ```

2. **For each failing selector, think through each class:**
   - Read the selector and understand its context
   - Consider what each class is trying to accomplish
   - Ask yourself: "Is this class essential to the framework or just styling sugar?"
   - Reason about whether wrapping would break functionality or just reduce specificity
   - Make nuanced decisions based on the class's apparent purpose

3. **Apply your reasoning** to determine what to wrap with `:where()`:
   - Framework essentials → Never wrap
   - Deprecated patterns → Keep but note for future migration
   - Utility/styling classes → Safe to wrap

**Remember:** You're an intelligent agent. Use your understanding of CSS, component systems, and the codebase context to make smart decisions. The registry is just a reference - your reasoning is what matters.
```

**Step 3: Apply Fixes and Validate**
1. Modify the original SCSS file directly using `replace_string_in_file`
2. Test compilation: `npm run build`
3. Verify fixes: `npx jest --config units/jest.config.cjs units/default/button.test.ts`

## Intelligent Analysis Example

```scss
/* Failing selector: .k-button.k-custom-variant.k-button-icon.k-input-focused */

/* Agent's intelligent reasoning process: */

// Step 1: Load registry to check which classes are officially documented
// Step 2: Think about each class and its role in the framework

// .k-button → Obviously the core component class, essential to button identity
// → This defines what this element IS → NEVER wrap

// .k-custom-variant → Not in registry, doesn't follow standard patterns
// → Appears to be arbitrary styling class → Safe to wrap

// .k-button-icon → Not in registry, seems like utility for icon button styling
// → Not essential to button identity, just a styling modifier → Safe to wrap

// .k-input-focused → Not in registry, follows deprecated k-{component}-{state} pattern
// → Legacy state that should be k-focus but kept for compatibility → Keep as-is

/* Agent's intelligent decision: */
// Classes to wrap: k-custom-variant, k-button-icon
// Fixed selector: .k-button:where(.k-custom-variant):where(.k-button-icon).k-input-focused

/* Agent's reasoning: */
// - Preserved core component class (k-button) and deprecated state (k-input-focused)
// - Wrapped utility classes that don't affect functionality, only styling
// - Reduced specificity while maintaining compatibility
```

## Version History

- v1.0: Initial agent template with framework rules and classification logic
