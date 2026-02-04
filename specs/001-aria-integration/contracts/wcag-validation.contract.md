# WCAG Compliance Validation Contract

**Feature**: 001-aria-integration  
**Phase**: Phase 1  
**Contract Type**: Test Validation  
**Command**: `npm run test:wcag [component]`

## Contract Overview

This contract defines the input, process, and output specifications for WCAG 2.2 Level AA/AAA compliance validation using axe-core.

---

## Input Specification

### Required Inputs

| Input | Type | Source | Description |
|-------|------|--------|-------------|
| componentName | string | CLI argument | Component to validate (e.g., "button") |
| renderedHTML | HTML | Browser render of test scenarios | Actual component markup in context |
| wcagLevel | enum | Configuration | AA (minimum) or AAA (target) |

### Input Validation

- Component name must match existing component directory
- Rendered HTML must include full page context (not isolated markup)
- WCAG level defaults to AA if not specified

---

## Processing Specification

### Step 1: Configure AxeBuilder

```javascript
import { AxeBuilder } from '@axe-core/webdriverjs';

const axeBuilder = new AxeBuilder(driver)
  .withTags(['wcag2a', 'wcag2aa', 'wcag22aa']) // WCAG 2.2 Level AA
  .disableRules([/* page-level rules to filter */]);
```

### Step 2: Render Component Tests

```javascript
const browser = await Browser.launch();
await browser.goto(`http://localhost:18113/tests/${componentName}/`);
await browser.waitForSelector('.k-' + componentName);
```

### Step 3: Run AxeCore Analysis

```javascript
const results = await axeBuilder.analyze();
```

### Step 4: Filter Component-Specific Violations

```javascript
// Remove page-level violations (html, head, meta, etc.)
const componentViolations = results.violations.filter(violation => {
  return violation.nodes.some(node => {
    const selector = node.target.join(' ');
    return selector.startsWith(`.k-${componentName}`);
  });
});
```

### Step 5: Categorize by Severity

```javascript
const categorized = {
  critical: componentViolations.filter(v => v.impact === 'critical'),
  serious: componentViolations.filter(v => v.impact === 'serious'),
  moderate: componentViolations.filter(v => v.impact === 'moderate'),
  minor: componentViolations.filter(v => v.impact === 'minor')
};
```

### Step 6: Calculate Compliance Score

```javascript
const complianceScore = {
  totalRules: results.passes.length + results.violations.length,
  passedRules: results.passes.length,
  failedRules: results.violations.length,
  percentage: ((passedRules / totalRules) * 100).toFixed(2)
};
```

---

## Output Specification

### Success Output (Zero Violations)

```json
{
  "status": "PASS",
  "component": "button",
  "wcagLevel": "AA",
  "violations": [],
  "passes": 15,
  "complianceScore": "100.00%",
  "summary": {
    "critical": 0,
    "serious": 0,
    "moderate": 0,
    "minor": 0
  },
  "timestamp": "2026-02-04T10:30:00Z"
}
```

### Failure Output (Violations Found)

```json
{
  "status": "FAIL",
  "component": "button",
  "wcagLevel": "AA",
  "violations": [
    {
      "id": "button-name",
      "impact": "critical",
      "description": "Buttons must have discernible text",
      "help": "Buttons must have discernible text",
      "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/button-name",
      "wcagCriteria": ["4.1.2"],
      "nodes": [
        {
          "html": "<button class=\"k-button k-icon-only\"><span class=\"k-icon k-i-close\"></span></button>",
          "target": [".k-button.k-icon-only"],
          "failureSummary": "Fix any of the following:\n  Element does not have inner text\n  aria-label attribute does not exist\n  aria-labelledby attribute does not exist\n  Element has no title attribute"
        }
      ]
    }
  ],
  "passes": 14,
  "complianceScore": "93.33%",
  "summary": {
    "critical": 1,
    "serious": 0,
    "moderate": 0,
    "minor": 0
  },
  "timestamp": "2026-02-04T10:30:00Z"
}
```

### Console Output

```
Test: WCAG Compliance - button
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WCAG Level: AA (WCAG 2.2)

Violations Found: 1 critical

[CRITICAL] button-name
  Description: Buttons must have discernible text
  WCAG: 4.1.2 (Name, Role, Value) Level A
  Help: https://dequeuniversity.com/rules/axe/4.7/button-name
  
  Element: <button class="k-button k-icon-only">
             <span class="k-icon k-i-close"></span>
           </button>
  
  Fix: Add aria-label, aria-labelledby, or visible text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Compliance Score: 14/15 rules passed (93.33%)
Status: FAIL - Fix critical violations to pass
```

---

## WCAG Success Criteria Coverage

### WCAG 2.2 Level AA Rules

| Criterion | Description | Tested By AxeCore |
|-----------|-------------|-------------------|
| 1.3.1 | Info and Relationships | ✓ |
| 1.4.3 | Contrast (Minimum) | ✓ |
| 2.1.1 | Keyboard | ✓ |
| 2.4.7 | Focus Visible | ✓ |
| 4.1.2 | Name, Role, Value | ✓ |
| 4.1.3 | Status Messages | ✓ |

### Common Violations

| Violation ID | WCAG | Common Cause | Fix |
|--------------|------|--------------|-----|
| button-name | 4.1.2 | Icon-only buttons missing label | Add aria-label |
| link-name | 4.1.2 | Links without text | Add aria-label or visible text |
| label | 1.3.1 | Form inputs without labels | Add <label> or aria-labelledby |
| color-contrast | 1.4.3 | Insufficient contrast | Adjust theme colors |
| aria-required-attr | 4.1.2 | Missing required ARIA attrs | Add missing attributes |

---

## Severity Levels

### AxeCore Impact Ratings

| Impact | Priority | Action Required |
|--------|----------|-----------------|
| **critical** | Must Fix | Blocks WCAG compliance, breaks assistive tech |
| **serious** | Should Fix | Major accessibility issue, fix before release |
| **moderate** | Consider Fix | Impacts some users, fix when possible |
| **minor** | Nice to Fix | Edge case or best practice improvement |

### Pass/Fail Criteria

- **PASS**: Zero critical or serious violations
- **FAIL**: One or more critical or serious violations
- **WARNING**: Only moderate or minor violations (passes but with recommendations)

---

## Page-Level Filtering

### Excluded Rules (Not Component Responsibility)

These rules apply to page structure, not individual components:

- `html-has-lang` - Page-level: <html lang> attribute
- `html-lang-valid` - Page-level: Valid language code
- `valid-lang` - Page-level: Language attribute validity
- `landmark-one-main` - Page-level: Main landmark requirement
- `region` - Page-level: Page regions
- `page-has-heading-one` - Page-level: <h1> requirement
- `meta-viewport` - Page-level: Viewport meta tag

### Component-Scoped Validation

Only violations matching `.k-[component-name]` selector are reported. This ensures:
- Component-specific accessibility issues are caught
- Page structure issues don't block component validation
- Consuming applications responsible for page-level compliance

---

## Performance Requirements

- Validation must complete in <30 seconds per component
- Browser launch overhead amortized across multiple tests
- Results cached for repeated runs within same session

---

## Integration Points

### Called By

- `npm run test:wcag [component]` - Manual validation
- `npm run test:a11y` - Batch validation (all components)
- `.husky/pre-push` - Git hook (changed components only)
- CI/CD pipeline - Automated validation on PRs

### Depends On

- `scripts/test-wcag-compliance.mjs` - Implementation script
- `@axe-core/webdriverjs` - WCAG validation engine
- `@progress/kendo-e2e` - Browser automation
- `packages/html/src/[component]/tests/*.tsx` - Test scenarios
- HTTP server on port 18113 for test page serving

---

## Exit Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 0 | Success | Zero critical/serious violations |
| 1 | Failure | Critical or serious violations found |
| 2 | Warning | Only moderate/minor violations found |
| 3 | Error | Test execution error (cannot analyze) |

---

**Contract Version**: 1.0  
**Implemented By**: `scripts/test-wcag-compliance.mjs` (existing)  
**Status**: ✅ Implementation Available