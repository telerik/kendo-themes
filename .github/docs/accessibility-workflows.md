# Accessibility Testing & Validation Workflows

This guide explains how to use the accessibility tools and workflows in the Kendo Themes repository.

## Quick Start

```bash
# Test all components for accessibility
npm run test:a11y

# Test specific component
npm run test:aria button
npm run test:wcag button
npm run test:contrast

# Bulk ARIA application workflow
npm run aria:init      # Initialize progress tracking
npm run aria:status    # View progress
npm run aria:plan      # See application plan
npm run aria:next      # Get next component to work on

# Apply ARIA to a component (using agent)
# Use the @accessibility-specialist agent in GitHub Copilot
```

## Testing Tools

### 1. ARIA Attribute Validator (`test:aria`)

Validates that components have correct ARIA attributes according to specifications.

**Usage:**
```bash
# Test all components
npm run test:aria

# Test specific component
npm run test:aria button

# Verbose output with details
npm run test:aria button -- --verbose

# Show fix suggestions
npm run test:aria -- --fix
```

**What it checks:**
- ✅ Required ARIA attributes are present
- ✅ Attribute values are correct
- ✅ Alternative attributes (when spec allows)
- ✅ Conditional attributes (state-based)

**Output:**
- Console summary with pass/fail status
- Detailed JSON report: `tests/_output/aria-validation-report.json`

**Example Output:**
```
✅ tests/button/button.html: All checks passed
❌ tests/dialog/dialog.html: 2 violation(s)
   1. .k-dialog
      Missing/incorrect: aria-labelledby
      Usage: Associate the title of the dialog
```

### 2. WCAG Compliance Tester (`test:wcag`)

Comprehensive WCAG 2.2 compliance testing using axe-core.

**Usage:**
```bash
# Test for AA compliance (default)
npm run test:wcag

# Test for AAA compliance
npm run test:wcag -- --level=aaa

# Test specific component
npm run test:wcag grid

# Summary only
npm run test:wcag -- --summary

# Verbose with details
npm run test:wcag grid -- --verbose
```

**What it checks:**
- ✅ All WCAG 2.2 Level A/AA/AAA criteria
- ✅ Keyboard accessibility
- ✅ Screen reader compatibility
- ✅ Focus management
- ✅ Semantic HTML
- ✅ Form accessibility
- ✅ And 90+ other rules

**Output:**
- Compliance score per page
- Violations grouped by severity
- WCAG success criteria mapping
- Detailed JSON report: `tests/_output/wcag-compliance-report.json`

**Example Output:**
```
📊 WCAG Compliance Summary

Compliance Level: WCAG 2.2 Level AA
Pages Tested: 45
Total Checks Passed: 1,234
Total Violations: 12
Average Compliance Score: 98.5%

Violations by Severity:
  🔴 Critical: 0
  🟠 Serious: 2
  🟡 Moderate: 7
  🔵 Minor: 3
```

### 3. Contrast Checker (`test:contrast`)

Validates color contrast ratios for text and UI components.

**Usage:**
```bash
# Run contrast tests
npm run test:contrast
```

**What it checks:**
- ✅ Text contrast (WCAG AA: 4.5:1, AAA: 7:1)
- ✅ UI component contrast (WCAG AA: 3:1)
- ✅ Focus indicator contrast (3:1)
- ✅ Handles transparent/semi-transparent colors

**Note:** This tool is already part of the CI pipeline.

### 4. Complete A11y Test Suite (`test:a11y`)

Runs all accessibility tests in sequence.

**Usage:**
```bash
# Run everything
npm run test:a11y

# Equivalent to:
# npm run test:aria && npm run test:wcag && npm run test:contrast
```

## Applying ARIA to Components

### Workflow 1: Single Component Application

**Use the Accessibility Agent:**

1. **Invoke the Agent**
   ```
   @accessibility-specialist Apply ARIA attributes to the button component
   ```

2. **Agent Workflow**
   - Reads ARIA spec from `aria/button_aria.md`
   - Analyzes TSX files in `packages/html/src/button/`
   - Creates todo list for all attributes
   - Applies ARIA attributes systematically
   - Builds and validates HTML output
   - Runs compliance tests
   - Generates report

3. **Review Changes**
   - Check the TSX files for applied attributes
   - Review the generated HTML in `tests/button/`
   - Read the agent's summary report

4. **Validate**
   ```bash
   npm run test:aria button
   npm run test:wcag button
   ```

### Workflow 2: Bulk Application (All Components)

**For systematic application to all components:**

1. **Initialize Progress Tracking**
   ```bash
   npm run aria:init
   ```
   Creates `.github/docs/aria-application-progress.json` to track progress

2. **View Current Progress**
   ```bash
   npm run aria:status
   ```
   Shows:
   - Overall completion percentage
   - Progress by priority level
   - Recently completed components

3. **Generate Application Plan**
   ```bash
   npm run aria:plan
   ```
   Shows all components grouped by dependency level:
   - Level 1: Base components (icon, badge, skeleton)
   - Level 2: Simple standalone (button, checkbox, chip)
   - Level 3-12: More complex components

4. **Get Next Component**
   ```bash
   npm run aria:next
   ```
   Shows:
   - Next component name and priority
   - Path to spec and TSX files
   - Step-by-step application instructions

5. **Apply ARIA Using Agent**
   ```
   @accessibility-specialist apply ARIA to [component]
   ```

6. **Test & Validate**
   ```bash
   npm run test:aria [component]
   npm run test:wcag [component]
   ```

7. **Mark Complete**
   ```bash
   node scripts/aria-bulk-apply.mjs complete [component]
   ```

8. **Repeat**
   Go back to step 4 until all components are complete

**Best Practices for Bulk Application:**
- Work through components level-by-level (complete all base before moving to simple)
- Commit after each successful component
- Fix critical/serious violations before marking complete
- Track compliance scores in commit messages
- Document any spec gaps or issues

### Workflow 3: Creating ARIA Spec from Scratch

**When you have HTML but no spec:**

1. **Invoke the Agent**
   ```
   @accessibility-specialist create ARIA spec for the card component
   ```

2. **Agent Workflow**
   - Analyzes `packages/html/src/card/` structure
   - Researches ARIA patterns from APG
   - Documents all required attributes
   - Creates `aria/card_aria.md`
   - Notes states and alternatives

3. **Review Generated Spec**
   - Check `aria/card_aria.md`
   - Verify against ARIA Authoring Practices
   - Ensure all states documented
   - Add any missing notes

4. **Apply the Spec** (Workflow 1)
   ```
   @accessibility-specialist apply ARIA to card component
   ```

### Manual Application

If applying manually without the agent:

1. **Read the Spec**
   ```bash
   cat aria/[component]_aria.md
   ```

2. **Edit TSX Files**
   - Find `packages/html/src/[component]/`
   - Add ARIA attributes after `className`
   - Follow TypeScript syntax

3. **Build & Test**
   ```bash
   npm run build:tests
   npm run test:render-test-pages [component]
   npm run test:aria [component]
   ```

## Understanding Test Results

### ARIA Validation Results

**✅ Passed**
- All required attributes present
- Values are correct
- Alternatives properly used

**❌ Failed**
- `missing`: Required attribute not found
- `incorrect-value`: Wrong value assigned
- `error`: Selector or validation error

**Action:** Review spec, update TSX, rebuild, retest

### WCAG Compliance Results

**Severity Levels:**
- 🔴 **Critical**: Blocks users completely (must fix)
- 🟠 **Serious**: Major barrier for many users (should fix)
- 🟡 **Moderate**: Affects some users in some contexts
- 🔵 **Minor**: Best practice, minimal user impact

**Compliance Scores:**
- **95-100%**: Excellent, minor issues only
- **90-95%**: Good, some moderate issues
- **80-90%**: Needs attention, several issues
- **<80%**: Poor, significant accessibility barriers

**Action:** Focus on Critical/Serious first, then Moderate

### Contrast Check Results

**Pass:** All contrast ratios meet WCAG requirements

**Fail:** Specific elements listed with:
- Current contrast ratio
- Required ratio
- Element selector/description

**Action:** Adjust colors in theme SCSS files

## CI/CD Integration

### Current CI Pipeline

The repository already has a11y testing in CI:

```yaml
# .github/workflows/ci.yml
jobs:
  a11y:
    - Builds themes (including a11y swatch)
    - Runs contrast tests
    - Fails build on violations
```

### Enhanced Pipeline (After POC)

Will include:
```yaml
jobs:
  a11y-full:
    - Build components
    - Run ARIA validation
    - Run WCAG compliance tests
    - Run contrast tests
    - Generate compliance report
    - Post summary to PR
```

## Compliance Reports

### JSON Reports

Located in `tests/_output/`:

**aria-validation-report.json**
```json
{
  "timestamp": "2024-12-04T...",
  "summary": {
    "filesTest ed": 45,
    "passed": 423,
    "violations": 12
  },
  "results": [...]
}
```

**wcag-compliance-report.json**
```json
{
  "meta": {
    "complianceLevel": "AA",
    "wcagVersion": "2.2"
  },
  "summary": {
    "avgScore": 98.5,
    "totalViolations": 12
  },
  "criteriaGroups": {...},
  "detailedResults": [...]
}
```

### Using Reports

```bash
# View summary
cat tests/_output/wcag-compliance-report.json | jq '.summary'

# Find violations for specific component
cat tests/_output/aria-validation-report.json | jq '.results[] | select(.filePath | contains("button"))'

# List all violated WCAG criteria
cat tests/_output/wcag-compliance-report.json | jq '.criteriaGroups | keys'
```

## Troubleshooting

### "No test files found"

**Cause:** Component name doesn't match folder structure

**Solution:** Check `tests/` directory for correct component folder name

### "No ARIA spec found"

**Cause:** Component doesn't have an `aria/*.md` file

**Solution:** Create the spec file first, or skip ARIA validation for this component

### "Failed to navigate to URL"

**Cause:** HTTP server not starting or port in use

**Solution:**
```bash
# Check if port is in use
lsof -i :18112  # or 18113 for WCAG tester

# Kill process using port
kill -9 <PID>

# Try again
npm run test:aria
```

### "Selector not found"

**Cause:** Element not rendered in test page, or selector is conditional

**Solution:**
- Check test HTML files in `tests/[component]/`
- Verify element exists in that test case
- Some selectors are conditional (OK to not find them)

### "TypeScript errors after adding ARIA"

**Cause:** Invalid JSX syntax or props

**Solution:**
```tsx
// ❌ Wrong
<div aria-label=Label>

// ✅ Correct
<div aria-label="Label">

// ✅ Dynamic
<div aria-label={labelText}>

// ✅ Conditional
<div {...(needsLabel && { 'aria-label': labelText })}>
```

## Best Practices

### For Developers

1. **Always test locally** before pushing
   ```bash
   npm run test:aria [component]
   npm run test:wcag [component]
   ```

2. **Review compliance scores** - aim for >95%

3. **Fix Critical/Serious** violations immediately

4. **Document exceptions** in code comments

5. **Update specs** if implementation differs

### For Reviewers

1. **Check test results** in PR

2. **Verify ARIA attributes** are present in code

3. **Run tests locally** for critical components

4. **Review compliance report** for regressions

5. **Approve only if** tests pass or exceptions are documented

## Next Steps

After POC completion:

1. **Full Coverage** - Apply ARIA to all components
2. **CI Integration** - Add ARIA/WCAG tests to pipeline
3. **VPAT Generation** - Automated compliance documentation
4. **Dashboard** - Real-time compliance tracking
5. **Training** - Team workshops on accessibility

## Resources

- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM Articles](https://webaim.org/articles/)
- [Deque University](https://dequeuniversity.com/)

## Getting Help

- **Issues with tests**: Check logs in `tests/_output/`
- **ARIA questions**: Refer to specs in `aria/*.md`
- **Workflow questions**: See `.github/agents/accessibility.agent.md`
- **Team support**: Ask in accessibility channel
