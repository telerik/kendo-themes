# ARIA Validation Contract

**Feature**: 001-aria-integration  
**Phase**: Phase 1  
**Contract Type**: Test Validation  
**Command**: `npm run test:aria [component]`

## Contract Overview

This contract defines the input, process, and output specifications for ARIA attribute validation against aria/*.md specifications.

---

## Input Specification

### Required Inputs

| Input | Type | Source | Description |
|-------|------|--------|-------------|
| componentName | string | CLI argument | Component to validate (e.g., "button") |
| ariaSpec | markdown | `aria/{componentName}_aria.md` | ARIA specification file |
| renderedHTML | HTML | Browser render of test scenarios | Actual component markup |

### Input Validation

- Component name must match existing aria/*.md file
- ARIA spec must be valid markdown with table structure
- Rendered HTML must be available from test scenarios

---

## Processing Specification

### Step 1: Parse ARIA Specification

```javascript
// Extract validation rules from aria/*.md
const rules = parseMarkdownTable(ariaSpec, {
  columns: ['Selector', 'Attribute', 'Usage'],
  required: ['Selector', 'Attribute']
});
```

### Step 2: Render Component Tests

```javascript
// Launch browser and render test scenarios
const browser = await Browser.launch();
const html = await browser.renderComponent(componentName);
```

### Step 3: Match Selectors

```javascript
// For each rule, find matching elements
for (const rule of rules) {
  const elements = html.querySelectorAll(rule.selector);
  // Validate each matched element
}
```

### Step 4: Validate Attributes

```javascript
// Check required attributes exist
for (const element of elements) {
  for (const attr of rule.attributes) {
    if (!element.hasAttribute(attr.name)) {
      // Check if alternative satisfied (e.g., native element)
      if (!hasAlternative(element, attr.alternatives)) {
        violations.push({ element, attr, rule });
      }
    }
  }
}
```

### Step 5: Calculate Coverage

```javascript
// Coverage = implemented rules / total rules
const coverage = {
  rulesTotal: rules.length,
  rulesImplemented: rules.length - violations.length,
  percentage: ((rulesImplemented / rulesTotal) * 100).toFixed(2)
};
```

---

## Output Specification

### Success Output (All Validations Pass)

```json
{
  "status": "PASS",
  "component": "button",
  "rulesTotal": 3,
  "rulesImplemented": 3,
  "coverage": "100.00%",
  "violations": [],
  "timestamp": "2026-02-04T10:30:00Z"
}
```

### Failure Output (Violations Found)

```json
{
  "status": "FAIL",
  "component": "button",
  "rulesTotal": 3,
  "rulesImplemented": 2,
  "coverage": "66.67%",
  "violations": [
    {
      "rule": {
        "selector": ".k-button.k-pressed",
        "attribute": "aria-pressed",
        "usage": "Indicates pressed state for toggle buttons"
      },
      "element": "<button class=\"k-button k-pressed\">Toggle</button>",
      "missing": "aria-pressed",
      "alternatives": []
    }
  ],
  "timestamp": "2026-02-04T10:30:00Z"
}
```

### Console Output

```
Test: ARIA Attributes - button
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Rule 1: .k-button [role=button] (2 elements matched)
✓ Rule 2: .k-button[disabled] [aria-disabled=true] (1 element matched)
✗ Rule 3: .k-button.k-pressed [aria-pressed] (1 element matched)
  Missing attribute: aria-pressed
  Element: <button class="k-button k-pressed">Toggle</button>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Coverage: 2/3 rules implemented (66.67%)
Status: FAIL
```

---

## Alternative Attribute Handling

### Semantic HTML vs. ARIA Roles

Some rules accept alternative implementations:

```javascript
// Example: Button role
{
  selector: ".k-button",
  attribute: { name: "role", value: "button" },
  alternatives: [
    { type: "nativeElement", tagName: "button" }
  ]
}

// Validation logic
if (element.tagName.toLowerCase() === 'button') {
  // Native <button> satisfies role="button" requirement
  return PASS;
} else if (element.hasAttribute('role') && element.getAttribute('role') === 'button') {
  return PASS;
} else {
  return FAIL;
}
```

---

## Error Handling

### Error Scenarios

| Error | Cause | Response |
|-------|-------|----------|
| SPEC_NOT_FOUND | aria/*.md file missing | Exit with error, suggest component name |
| INVALID_SPEC | Malformed markdown table | Exit with error, show parsing issue |
| RENDER_FAILED | Browser cannot render component | Exit with error, check test files |
| NO_ELEMENTS_MATCHED | Selector matches zero elements | Warning (not failure), component may not have that variant |

### Warning vs. Failure

- **Warning**: Selector matches no elements (component may not support that variant)
- **Failure**: Selector matches elements but required attributes missing

---

## Performance Requirements

- Validation must complete in <30 seconds per component
- Browser launch overhead amortized across multiple tests
- Parallel execution supported for CI/CD efficiency

---

## Integration Points

### Called By

- `npm run test:aria [component]` - Manual validation
- `npm run test:a11y` - Batch validation (all components)
- `.husky/pre-push` - Git hook (changed components only)
- CI/CD pipeline - Automated validation on PRs

### Depends On

- `scripts/test-aria-attributes.mjs` - Implementation script
- `@progress/kendo-e2e` - Browser automation
- `aria/*.md` - ARIA specifications
- `packages/html/src/[component]/tests/*.tsx` - Test scenarios

---

**Contract Version**: 1.0  
**Implemented By**: `scripts/test-aria-attributes.mjs` (existing)  
**Status**: ✅ Implementation Available