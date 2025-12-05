# Accessibility Integration POC

This PR implements a comprehensive accessibility validation and compliance framework for Kendo Themes.

## 🎯 What's Included

### 1. Testing Tools
- **ARIA Attribute Validator** (`test:aria`) - Validates ARIA attributes against specs
- **WCAG Compliance Tester** (`test:wcag`) - Comprehensive WCAG 2.2 testing with axe-core
- **Unified Test Suite** (`test:a11y`) - Runs all accessibility tests
- **Bulk Application Helper** (`aria:*`) - Manages systematic ARIA application

### 2. Enhanced Agent
- **`@accessibility-specialist`** - GitHub Copilot agent with comprehensive a11y workflows
- **4 Complete Workflows**:
  1. Creating ARIA spec from existing HTML
  2. Applying ARIA to single component
  3. Bulk ARIA application (all components)
  4. End-to-end spec creation + application
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

✅ **ARIA Validation**
- Parses ARIA specs from markdown
- Validates HTML output
- Supports alternative attributes
- Component-level filtering

✅ **WCAG Testing**
- 90+ accessibility rules
- Level A/AA/AAA support
- Compliance scoring
- WCAG criteria mapping

✅ **Engineer-Friendly**
- Simple npm commands
- Clear reports
- Agent guidance
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

The `@accessibility-specialist` agent includes 4 comprehensive workflows:

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

### Workflow 2: Apply ARIA to Single Component
**Use when**: You have an ARIA spec and need to apply it

```bash
@accessibility-specialist apply ARIA to [component]
```

Steps:
1. Create todo list from spec
2. Analyze component structure
3. Apply ARIA attributes to TSX
4. Build & validate
5. Test compliance
6. Generate report

### Workflow 3: Bulk ARIA Application
**Use when**: Applying ARIA to all components systematically

```bash
# Initialize tracking
npm run aria:init

# Check progress
npm run aria:status

# See next component
npm run aria:next

# Apply ARIA (use agent)
@accessibility-specialist apply ARIA to [component]

# Mark complete
node scripts/aria-bulk-apply.mjs complete [component]
```

Components are grouped by dependency level (base → simple → complex):
- Level 1: Base (icon, badge, skeleton)
- Level 2: Simple (button, checkbox, chip)
- Level 3: Inputs (textbox, numerictextbox)
- Level 4: Pickers (datepicker, colorpicker)
- Level 5: Lists (listbox, dropdownlist)
- ...through Level 12: Charts

### Workflow 4: End-to-End (Create Spec + Apply)
**Use when**: Starting from scratch with new component

```bash
@accessibility-specialist create spec and apply ARIA to [component]
```

Combines Workflow 1 and 2 with review gate between them.

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

| Requirement | Status |
|-------------|--------|
| Merge A11y & Rendering Specs | ✅ Complete |
| Single Source of Truth | ✅ Complete |
| Comprehensive A11y Markups | ✅ Framework ready |
| Enhanced Testing | ✅ Complete |
| Compliance Evaluation | ✅ Complete |
| Engineer-Friendly Workflows | ✅ Complete |
| WCAG Standards Awareness | ✅ Complete |
| Full Component Coverage | ⏳ Next phase |
| CI/CD Integration | ⏳ Next phase |
| VPAT Generation | ⏳ Future work |

## 🔄 Next Steps

### Immediate (This Sprint)
1. **Initialize bulk tracking**: `npm run aria:init`
2. **Review the plan**: `npm run aria:plan`
3. **Start with base components**: Apply ARIA to icon, badge, skeleton
4. **Document patterns**: Create examples for common ARIA patterns

### Short-term (Next Sprint)
1. **Complete Level 1-3**: Base, simple, and input components
2. **Integrate into CI**: Add ARIA tests to GitHub Actions
3. **Create dashboard**: Visualize compliance scores
4. **Train team**: Onboard engineers on workflows

### Medium-term (Next Quarter)
1. **Complete all components**: Apply ARIA to all 100+ components
2. **Implement VPAT**: Auto-generate VPAT documentation
3. **Add keyboard tests**: Simulate keyboard navigation
4. **State variations**: Test all component states

### Long-term (Next 6 Months)
1. **Real-time monitoring**: Continuous compliance tracking
2. **Documentation sync**: Link ARIA to component docs
3. **Auto-updates**: Update ARIA when specs change
4. **Cross-framework**: Validate other tech stacks

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
5. **Validate immediately**: Run tests after each component

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
2. **Use `@accessibility-specialist`**: Invoke agent for guidance
3. **Apply attributes to TSX**: Edit files in `packages/html/src/[component]/`
4. **Build test pages**: `npm run build:tests && npm run test:render-test-pages [component]`
5. **Validate ARIA**: `npm run test:aria [component]`
6. **Test WCAG**: `npm run test:wcag [component]`
7. **Fix violations**: Address any critical/serious issues
8. **Update progress**: `node scripts/aria-bulk-apply.mjs complete [component]`
9. **Commit changes**: Include test results in commit message

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
