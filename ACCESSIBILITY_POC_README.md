# Accessibility Integration POC

This PR implements a comprehensive accessibility validation and compliance framework for Kendo Themes.

## 🎯 What's Included

### 1. Testing Tools
- **ARIA Attribute Validator** (`test:aria`) - Validates ARIA attributes against specs with coverage metrics
- **WCAG Compliance Tester** (`test:wcag`) - Comprehensive WCAG 2.2 testing with axe-core
- **Unified Test Suite** (`test:a11y`) - Runs all accessibility tests
- **Bulk Application Helper** (`aria:*`) - Manages systematic ARIA application with progress tracking
- **Coverage Reporter** - Tracks % of ARIA rules applied per component

### 2. Enhanced Agent
- **`@accessibility-specialist`** - GitHub Copilot agent with comprehensive a11y workflows
- **Updated Workflows (V2)**:
  1. Creating ARIA spec from existing HTML
  2. Applying ARIA to single component with **100% rule coverage**
  3. **New:** Verifying rule coverage and creating test scenarios
  4. Bulk ARIA application (all components)
  5. End-to-end spec creation + application
- **Template modification support** - Can now update `/templates` folders
- **Visual regression safety** - Ensures no unintended visual changes
- Systematic ARIA application guidance
- TypeScript-safe examples
- State management strategies

### 3. Documentation
- **Integration Plan** - Architecture and roadmap
- **Workflows Guide** - Complete usage documentation
- **POC Summary** - Detailed deliverables and results

## 🚀 Quick Start

### Testing Components

```bash
# Install dependencies
npm ci

# Build test files
npm run build:tests
npm run test:render-test-pages

# Run accessibility tests
npm run test:a11y           # Run all tests
npm run test:aria button    # Test ARIA attributes
npm run test:wcag button    # Test WCAG compliance

# View reports
cat tests/_output/aria-validation-report.json | jq
cat tests/_output/wcag-compliance-report.json | jq
```

### Bulk ARIA Application

```bash
# Initialize progress tracking
npm run aria:init

# View current progress
npm run aria:status

# Generate application plan
npm run aria:plan

# Get next component to work on
npm run aria:next

# Mark component as complete
node scripts/aria-bulk-apply.mjs complete button
```

### Creating ARIA Spec from HTML

```bash
# Invoke the agent with Workflow 1
@accessibility-specialist create ARIA spec for the card component

# The agent will:
# 1. Analyze packages/html/src/card/
# 2. Research ARIA patterns
# 3. Create aria/card_aria.md
# 4. Document all requirements
```

### Applying ARIA to Component

```bash
# Invoke the agent with Workflow 2
@accessibility-specialist apply ARIA to button component

# The agent will:
# 1. Read aria/button_aria.md
# 2. Apply attributes to TSX
# 3. Build and validate
# 4. Run tests
# 5. Generate report
```

## 📊 Key Features

✅ **ARIA Validation with Coverage Metrics**
- Parses ARIA specs from markdown
- Validates HTML output
- **Tracks % of rules applied** per component
- Reports missing/unapplied rules
- Supports alternative attributes
- Component-level filtering

✅ **WCAG Testing**
- 90+ accessibility rules
- Level A/AA/AAA support
- Compliance scoring
- WCAG criteria mapping

✅ **100% Rule Coverage Goal**
- Verify all ARIA spec rules are applied
- Create test scenarios for missing attributes
- Ensure complete accessibility coverage

✅ **Template Modification Support**
- Can modify `/templates` folders
- Maintains markup structure integrity
- No element addition/removal/reordering
- Visual regression safety built-in

✅ **Engineer-Friendly**
- Simple npm commands
- Clear reports with actionable insights
- Agent guidance for complex tasks
- No deep a11y expertise needed

## 📁 Files Added

```
scripts/
├── test-aria-attributes.mjs        # ARIA validator
├── test-wcag-compliance.mjs        # WCAG tester
└── aria-bulk-apply.mjs             # Bulk application helper

.github/
├── docs/
│   ├── accessibility-integration-plan.md   # Architecture
│   ├── accessibility-workflows.md          # Usage guide
│   └── accessibility-poc-summary.md        # Deliverables
└── agents/
    └── accessibility.agent.md              # Enhanced agent (4 workflows)
```

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| `.github/docs/accessibility-workflows.md` | Complete usage guide with examples |
| `.github/docs/accessibility-integration-plan.md` | Architecture and implementation plan |
| `.github/docs/accessibility-poc-summary.md` | Detailed POC results and coverage |
| `.github/agents/accessibility.agent.md` | Agent specification with 4 workflows |
| `scripts/aria-bulk-apply.mjs` | Bulk application helper (CLI tool) |

## 🔄 Agent Workflows

The `@accessibility-specialist` agent includes comprehensive workflows for accessibility compliance:

### Workflow 1: Create ARIA Spec from HTML
**Use when**: You have existing HTML/TSX but no ARIA spec

```bash
@accessibility-specialist create ARIA spec for [component]
```

Steps:
1. Analyze HTML structure
2. Research ARIA patterns from APG
3. Create `aria/[component]_aria.md`
4. Document all states and attributes
5. Add alternatives and notes

### Workflow 2: Apply ARIA to Single Component (Updated V2)
**Use when**: You have an ARIA spec and need to apply it with **100% coverage**

```bash
@accessibility-specialist apply ARIA to [component] with full coverage
```

**Updated Steps**:
1. Read ARIA spec and create rule checklist
2. Apply ARIA attributes to root `.spec.tsx` files
3. **Check rule coverage** - identify which rules are applied vs. missing
4. **Analyze missing rules** - determine why they're not applied
5. **Update templates** - modify files in `templates/` folder to ensure all rules can be tested
6. **Create new test scenarios** (if needed) - add scenarios in `templates/` that specifically test missing attributes
7. Build & validate (`npm run build:tests`)
8. Test compliance (`npm run test:aria [component]`)
9. **Verify 100% rule coverage** - ensure all spec rules are present in generated HTML
10. **Visual regression check** - confirm no unintended visual changes
11. Mark component complete

**Key Requirements**:
- ✅ Modify root-level `.spec.tsx` files
- ✅ **Modify `templates/` folder files**
- ❌ Do NOT modify `tests/` folder files
- ✅ Apply attributes only (no structure changes)
- ✅ Achieve 100% rule coverage
- ✅ Maintain visual consistency

### Workflow 3: Rule Coverage Verification (New)
**Use when**: Need to verify 100% of ARIA rules are applied to a component

```bash
@accessibility-specialist verify ARIA coverage for [component]
```

Steps:
1. **Parse spec file** - extract all rules from `aria/[component]_aria.md`
2. **Build and render** - generate HTML from TSX components
3. **Run ARIA validation** - execute `npm run test:aria [component] -- --verbose`
4. **Calculate coverage** - determine % of rules applied
5. **Identify gaps** - list rules not found in generated HTML
6. **Analyze causes**:
   - Missing template scenarios for specific states
   - Conditional attributes not triggered
   - State combinations not covered
7. **Recommend solutions**:
   - New template files needed
   - Props to add to existing templates
   - Test scenarios to create
8. **Generate report** with:
   - Coverage percentage (X/Y rules applied)
   - List of missing rules with selectors
   - Actionable fix recommendations

**Output Example**:
```
Component: button
ARIA Coverage: 18/20 rules (90%)

Missing Rules:
✗ .k-button[disabled] → aria-disabled=true
  Reason: No template with disabled state
  Fix: Add disabled prop to ButtonSolid template

✗ .k-button-group .k-button → aria-pressed=true/false
  Reason: No toggle button in group scenario
  Fix: Create new template: button-group-toggle.tsx
```

### Workflow 4: Bulk ARIA Application (Updated)
**Use when**: Applying ARIA to all components systematically with 100% coverage

```bash
# Initialize tracking
npm run aria:init

# Check progress
npm run aria:status

# See next component
npm run aria:next

# Apply ARIA using agent (Workflow 2)
@accessibility-specialist apply ARIA to [component] with full coverage

# Verify coverage (Workflow 3)
@accessibility-specialist verify ARIA coverage for [component]

# If <100%, iterate with templates/scenarios

# Mark complete when 100%
node scripts/aria-bulk-apply.mjs complete [component]
```

**Dependency-Ordered Rollout**:
Components are grouped by dependency level (base → simple → complex):
- **Level 1: base** (icon, badge, skeleton, avatar)
- **Level 2: simple** (button, checkbox, chip, rating)
- **Level 3: inputs** (textbox, numerictextbox, textarea)
- **Level 4: pickers** (datepicker, colorpicker, timepicker)
- **Level 5: lists** (listbox, dropdownlist, combobox)
- **Level 6: button-groups** (buttongroup, splitbutton)
- **Level 7: navigation** (menu, breadcrumb, toolbar)
- **Level 8: containers** (card, window, dialog, splitter)
- **Level 9: calendars** (calendar, multiviewcalendar)
- **Level 10: data** (grid, treelist, pager, pivotgrid)
- **Level 11: complex** (scheduler, gantt, editor, spreadsheet)
- **Level 12: charts** (chart, sankey, treemap)

### Workflow 5: End-to-End (Create Spec + Apply + Verify)
**Use when**: Starting from scratch with new component

```bash
@accessibility-specialist create spec, apply, and verify ARIA for [component]
```

Combines Workflows 1, 2, and 3 with review gates between stages.

## 🧪 Testing Examples

```bash
# Test specific components
npm run test:aria button card grid
npm run test:wcag dialog --level=aaa

# View detailed output
npm run test:aria -- --verbose
npm run test:wcag -- --summary

# All accessibility tests
npm run test:a11y
```

## 📈 Sample Output

### ARIA Validation
```
✓ Button component validated
  Tests: tests/button/button.html
  Spec: aria/button_aria.md
  Result: 0 violations, 1 requirement met
```

### WCAG Compliance
```
Component: button
Score: 95.2%
Violations:
  • Critical: 0
  • Serious: 1
  • Moderate: 2
WCAG Criteria: 23/25 passed
```

## 🎯 Requirements Coverage

| Requirement | Status | Notes |
|-------------|--------|-------|
| Merge A11y & Rendering Specs | ✅ Complete | ARIA specs in `aria/` folder |
| Single Source of Truth | ✅ Complete | Markdown specs drive validation |
| Comprehensive A11y Markups | ✅ Framework ready | Can modify root + templates |
| Enhanced Testing | ✅ Complete | ARIA + WCAG validation |
| Compliance Evaluation | ✅ Complete | Scoring + reporting |
| Engineer-Friendly Workflows | ✅ Complete | 5 complete workflows |
| WCAG Standards Awareness | ✅ Complete | Level AA/AAA support |
| **100% Rule Coverage** | ✅ **New Goal** | Verify all rules applied |
| **Template Modification** | ✅ **Enabled** | Can update templates folder |
| **Visual Regression Safety** | ✅ **Active** | No new snapshots allowed |
| Full Component Coverage | 🔄 In Progress | 72% complete, pushing to 100% |
| CI/CD Integration | ⏳ Next phase | After 100% coverage |
| VPAT Generation | ⏳ Future work | Post-completion |

## 🚀 Updated Project Goals

### Primary Goals (Current Sprint)

1. **✅ 100% Rule Coverage for All Components**
   - Every rule in `aria/[component]_aria.md` must be applied
   - Create new test scenarios in `templates/` as needed
   - Track coverage metrics per component

2. **✅ Template Folder Modification Enabled**
   - Can now update files in `src/[component]/templates/`
   - Apply ARIA attributes without changing markup structure
   - No element addition, removal, or reordering

3. **✅ Visual Regression Safety**
   - All changes must be visually identical
   - No new screenshot diffs from develop branch
   - Attribute-only modifications

4. **🔄 Revisit All Previously Completed Components**
   - Re-validate 78 completed components
   - Ensure 100% rule coverage (previously targeted ~95%)
   - Update templates where coverage gaps exist

5. **🔄 Complete Remaining 31 Components**
   - Apply new workflows to pending components
   - Achieve 100% coverage from the start
   - Priority: complex > charts

### Success Criteria

✅ **For Each Component**:
- [ ] 100% of ARIA spec rules applied (X/X rules)
- [ ] 95%+ WCAG compliance score
- [ ] 0 critical/serious accessibility violations
- [ ] All templates updated where needed
- [ ] Visual regression tests pass (no new diffs)
- [ ] Component marked complete in tracking

## 🔄 Next Steps

### Phase 1: Update and Validate (Current Sprint)

1. **✅ Update Documentation & Tooling**
   - [x] Update README with new requirements
   - [x] Update agent instructions
   - [ ] Merge latest develop branch
   - [ ] Resolve conflicts (keep ARIA attributes)

2. **🔄 Revisit Completed Components (78 components)**
   - [ ] Run coverage verification on all completed components
   - [ ] Identify components with <100% coverage
   - [ ] Update templates to achieve 100% coverage
   - [ ] Re-validate WCAG compliance
   - [ ] Confirm no visual regressions

3. **🔄 Complete Remaining Components (31 components)**
   - [ ] Apply updated Workflow 2 to each component
   - [ ] Ensure 100% rule coverage from start
   - [ ] Priority order: complex → charts
   - [ ] Track progress in `aria-application-progress.json`

### Phase 2: Finalization (Next Sprint)

1. **CI/CD Integration**
   - [ ] Add ARIA validation to GitHub Actions
   - [ ] Add WCAG compliance checks
   - [ ] Block PRs with <100% coverage
   - [ ] Generate coverage reports automatically

2. **Documentation Updates**
   - [ ] Update component docs with ARIA patterns
   - [ ] Create "ARIA Best Practices" guide
   - [ ] Document common patterns and solutions
   - [ ] Add troubleshooting guide

3. **Dashboard & Reporting**
   - [ ] Create visual compliance dashboard
   - [ ] Track metrics over time
   - [ ] Generate VPAT documentation
   - [ ] Export compliance reports

### Phase 3: Maintenance (Ongoing)

1. **Continuous Monitoring**
   - [ ] Run a11y tests on every PR
   - [ ] Alert on coverage regressions
   - [ ] Track new WCAG violations
   - [ ] Update specs as components evolve

2. **Cross-Framework Validation**
   - [ ] Validate Angular components
   - [ ] Validate Vue components
   - [ ] Validate Blazor components
   - [ ] Ensure consistency across stacks

## 💡 Usage Tips

### For Creating ARIA Specs
1. **Start with APG**: Check [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) for patterns
2. **Analyze HTML first**: Understand the component structure before defining ARIA
3. **Document states**: List all possible states (open, disabled, selected, etc.)
4. **Use alternatives**: Provide options (aria-label OR aria-labelledby)
5. **Test early**: Validate spec against existing HTML

### For Applying ARIA
1. **Read the spec**: Always start with `aria/[component]_aria.md`
2. **Use the agent**: Invoke `@accessibility-specialist` for guidance
3. **Follow placement**: Add attributes after `className` prop
4. **Handle state**: Use component props for dynamic attributes
5. **Modify templates**: Update files in `templates/` folder as needed
6. **Validate immediately**: Run tests after each component
7. **Check coverage**: Ensure 100% of rules are applied
8. **Verify visuals**: Confirm no unintended visual changes

### For Achieving 100% Coverage
1. **Parse the spec**: Count total rules to apply
2. **Apply to root files**: Update `.spec.tsx` files first
3. **Check initial coverage**: Run `npm run test:aria [component] -- --verbose`
4. **Identify gaps**: Note which rules are missing
5. **Analyze templates**: Determine which scenarios need updating
6. **Update templates**: Add props/attributes to existing templates
7. **Create new scenarios**: Add templates for missing state combinations
8. **Re-validate**: Confirm 100% coverage achieved
9. **Visual check**: Ensure no screenshot diffs

### For Template Modifications
1. **Attributes only**: Add/update ARIA attributes only
2. **No structure changes**: Don't add/remove/reorder elements
3. **Preserve props**: Maintain existing component props
4. **Test locally**: Build and render before committing
5. **Check visuals**: Run visual regression tests

### For Bulk Application
1. **Work by level**: Complete all components in one priority level before moving on
2. **Track progress**: Use `npm run aria:status` frequently
3. **Fix violations**: Address critical/serious issues before marking complete
4. **Commit often**: Commit after each successful component
5. **Document issues**: Note blockers or spec gaps in progress tracker

### For Testing
1. **Test component-specific**: Use component name filter for faster feedback
2. **Check reports**: Review JSON output for detailed information
3. **Fix critical first**: Prioritize violations by severity (critical → serious → moderate)
4. **Verify HTML output**: Check rendered HTML in `tests/` directory
5. **Run full suite**: Test all components before release

## 🤝 Contributing

### When Creating New ARIA Specs

1. **Invoke the agent**: `@accessibility-specialist create ARIA spec for [component]`
2. **Review generated spec**: Check `aria/[component]_aria.md`
3. **Verify against APG**: Ensure alignment with ARIA patterns
4. **Test spec validity**: Try applying it to existing HTML
5. **Commit spec file**: Add to version control

### When Adding ARIA Attributes

1. **Read the component's ARIA spec**: `cat aria/[component]_aria.md`
2. **Count total rules**: Know your target (e.g., "20 rules to apply")
3. **Use `@accessibility-specialist`**: Invoke agent with Workflow 2
4. **Apply to root files**: Edit `.spec.tsx` in `packages/html/src/[component]/`
5. **Check coverage**: `npm run test:aria [component] -- --verbose`
6. **Update templates**: Edit files in `templates/` folder for missing rules
7. **Create scenarios**: Add new template files if needed for state coverage
8. **Build test pages**: `npm run build:tests && npm run test:render-test-pages [component]`
9. **Validate ARIA**: `npm run test:aria [component]` → should show X/X rules (100%)
10. **Test WCAG**: `npm run test:wcag [component]` → target 95%+
11. **Visual check**: Ensure no screenshot diffs from develop
12. **Fix violations**: Address any critical/serious issues
13. **Update progress**: `node scripts/aria-bulk-apply.mjs complete [component]`
14. **Commit changes**: Include coverage metrics in commit message

**Commit Message Example**:
```
feat(a11y): apply ARIA attributes to button with 100% coverage

- Applied 20/20 ARIA spec rules
- Updated ButtonSolid template with aria-pressed
- Created button-group-toggle.tsx for toggle button states
- WCAG compliance: 96.2%
- Violations: 0 critical, 0 serious
- Visual regression: passed (no diffs)
```

### For Bulk Application

```bash
# 1. Initialize tracking
npm run aria:init

# 2. Get next component
npm run aria:next

# 3. Apply ARIA using agent
@accessibility-specialist apply ARIA to [component]

# 4. Test
npm run test:aria [component]
npm run test:wcag [component]

# 5. Mark complete
node scripts/aria-bulk-apply.mjs complete [component]

# 6. Repeat
npm run aria:next
```

### Commit Message Format

When applying ARIA:
```
feat(a11y): apply ARIA attributes to [component]

- Added role, aria-label, aria-expanded attributes
- Compliance score: 95.2%
- Violations: 0 critical, 1 serious (addressed)
- Tested with test:aria and test:wcag
```

## 📚 Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI-ARIA Specification](https://www.w3.org/TR/wai-aria-1.2/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

## ❓ Questions?

- **Usage**: See `.github/docs/accessibility-workflows.md`
- **Architecture**: See `.github/docs/accessibility-integration-plan.md`
- **Troubleshooting**: Check workflows guide troubleshooting section
- **Agent**: Invoke `@accessibility-specialist` in Copilot

---

**Ready to use!** Start with `npm run test:a11y` to see current compliance status.
