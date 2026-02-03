# Accessibility Automation Tools

This document describes the automation scripts and workflows available for ARIA specification management and accessibility compliance testing.

## Available Commands

### ARIA Spec Generation

**Generate ARIA spec from component TSX analysis:**
```bash
npm run aria:generate [component]
npm run aria:generate [component] -- --force      # Overwrite existing spec
npm run aria:generate [component] -- --dry-run    # Preview without writing
```

**What it does:**
- Analyzes component TSX files for classes, elements, and patterns
- Matches component to WAI-ARIA patterns (button, dialog, listbox, etc.)
- Generates markdown spec with recommended ARIA attributes
- Detects child component imports and adds references

**Output:** Creates/updates `aria/[component]_aria.md`

### Full Accessibility Sync

**Comprehensive workflow: analyze, spec, validate, test:**
```bash
npm run aria:sync [component]              # Sync single component
npm run aria:sync [component] --verbose    # Detailed output
npm run aria:sync --changed                # All changed components (git diff)
npm run aria:sync --all                    # All components with specs
npm run aria:sync --check                  # CI mode (exit non-zero on failure)
npm run aria:sync [component] -i           # Interactive mode (retry loop)
```

**What it does:**
1. Checks component exists in packages/html/src/
2. Builds test HTML if needed (npm run build:tests)
3. Creates ARIA spec if missing (calls aria:generate)
4. Validates spec selectors against rendered HTML
5. Runs ARIA attribute validation (npm run test:aria)
6. Runs WCAG compliance tests (npm run test:wcag)
7. Reports results with actionable suggestions

**Use cases:**
- Development: `npm run aria:sync button -i` (iterative fix-test loop)
- Pre-push: `npm run aria:sync --changed` (validate your changes)
- CI: `npm run aria:sync --check --changed` (gate merges)

### Individual Test Commands

**ARIA attribute validation:**
```bash
npm run test:aria [component]              # Validate against spec
npm run test:aria [component] -- --verbose # Show detailed violations
```

**WCAG compliance testing:**
```bash
npm run test:wcag [component]              # Run axe-core tests
npm run test:wcag [component] -- --verbose # Detailed violation reports
npm run test:wcag [component] -- --level=aaa # Test AAA level
```

**Color contrast testing:**
```bash
npm run test:contrast                      # Check all theme swatches
```

**Render test pages:**
```bash
npm run test:render-test-pages [component] # Generate HTML from TSX tests
npm run build:tests                        # Build all test components
```

### Git Hook Integration

**Pre-commit (info-only):**
- Shows which a11y files changed
- Non-blocking, informational only
- Automatically runs via Husky

**Pre-push (with prompt):**
- Prompts to run accessibility tests
- Can skip (tests run in CI anyway)
- Blocks push if tests fail
- Uses `/dev/tty` for proper TTY handling

**Manual run:**
```bash
node scripts/a11y-pre-commit.mjs              # Interactive mode
node scripts/a11y-pre-commit.mjs --info-only  # Show changes only
node scripts/a11y-pre-commit.mjs --prompt     # Ask before testing
node scripts/a11y-pre-commit.mjs --check-only # Block on failures
```

## Workflow Mappings

### Workflow 1: Create ARIA Spec from HTML

**Manual approach (for learning/review):**
1. Read component TSX files in `packages/html/src/[component]/`
2. Research ARIA patterns at https://www.w3.org/WAI/ARIA/apg/
3. Create `aria/[component]_aria.md` following template
4. Document all selectors, attributes, and states

**Automated approach:**
```bash
npm run aria:generate [component]
# Review and edit generated spec as needed
```

### Workflow 2: Apply ARIA to Component

**Standard workflow:**
1. Read ARIA spec from `aria/[component]_aria.md`
2. Apply attributes to TSX components (root level or templates/ only)
3. Build tests: `npm run build:tests`
4. Render pages: `npm run test:render-test-pages [component]`
5. Validate: `npm run test:aria [component]`
6. Check WCAG: `npm run test:wcag [component]`
7. Fix violations and repeat

**Quick check workflow:**
```bash
npm run aria:sync [component]
# Shows status, suggests fixes
```

**Iterative workflow:**
```bash
npm run aria:sync [component] -i
# Prompts to retry after each fix
```

### Workflow 4: End-to-End (Spec + Apply)

**Full automation:**
```bash
npm run aria:sync [component]
```

This single command:
- ✓ Creates spec if missing (via aria:generate)
- ✓ Validates spec against HTML
- ✓ Runs ARIA tests
- ✓ Runs WCAG tests
- ✓ Reports results with fix suggestions

**For new components:**
```bash
# Generate initial spec
npm run aria:generate [component]

# Review and customize the spec
# Edit aria/[component]_aria.md as needed

# Apply ARIA to TSX components
# Edit packages/html/src/[component]/**/*.tsx

# Validate everything
npm run aria:sync [component]
```

## Script Architecture

### generate-aria-spec.mjs
- **Purpose:** Analyze TSX and generate ARIA spec markdown
- **Exports:** Shared constants (ARIA_PATTERNS, STATE_TO_ARIA, etc.) and functions (analyzeComponent, readExistingSpec) for reuse
- **Used by:** aria-sync.mjs imports shared utilities

### aria-sync.mjs
- **Purpose:** Comprehensive sync workflow (spec + validate + test)
- **Imports from:** generate-aria-spec.mjs (shared utilities)
- **Key difference:** Analyzes rendered HTML (tests/*.html) not TSX source

### a11y-pre-commit.mjs
- **Purpose:** Git hook integration for a11y validation
- **Modes:** info-only, prompt, check-only
- **TTY handling:** Uses /dev/tty for prompts in git hooks

## Best Practices

### During Development
- Use `npm run aria:sync [component] -i` for iterative work
- Run `npm run test:aria [component] -- --verbose` to see details
- Check `npm run test:wcag [component] -- --verbose` for violations

### Before Committing
- Pre-commit hook shows changed a11y files (automatic)
- Run `npm run aria:sync --changed` to validate locally

### Before Pushing
- Pre-push hook prompts to run tests (automatic)
- Can skip if CI will catch issues
- Or use `git push --no-verify` to bypass

### In CI/CD
- Use `npm run aria:sync --check --changed` as gate
- Exits non-zero on failures (blocks merge)
- Runs on changed components only (fast)

## Common Issues

### "No test HTML files found"
```bash
npm run build:tests
npm run test:render-test-pages [component]
```

### "Missing ARIA spec"
```bash
npm run aria:generate [component]
# Review and edit aria/[component]_aria.md
```

### "Spec selectors don't match HTML"
- Component markup may have changed
- Regenerate spec: `npm run aria:generate [component] -- --force`
- Or manually update `aria/[component]_aria.md`

### ARIA validation failures
```bash
npm run test:aria [component] -- --verbose
# Shows specific violations with selectors
# Apply missing attributes to TSX
```

### WCAG failures (non-label violations)
```bash
npm run test:wcag [component] -- --verbose
# Fix reported issues (missing roles, labels, etc.)
# Note: Label-related violations ignored (handled separately)
```

## References

- **ARIA Specs:** `aria/*.md` files
- **WAI-ARIA APG:** https://www.w3.org/WAI/ARIA/apg/
- **WCAG 2.2:** https://www.w3.org/TR/WCAG22/
- **Test Output:** `tests/_output/` directory
