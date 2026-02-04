<!--
================================================================================
SYNC IMPACT REPORT - Constitution v1.0.0
================================================================================

VERSION CHANGE: Initial constitution → v1.0.0 (MAJOR)

RATIONALE: First formal constitution for Kendo Themes accessibility integration project.
This is a MAJOR version because it establishes foundational governance principles that will
guide a significant three-phase transformation of how accessibility is managed in the project.

PRINCIPLES ESTABLISHED:
- Single Source of Truth (Component specs as authoritative reference)
- WCAG Compliance as Non-Negotiable (AA/AAA standards enforcement)
- Accessibility-First Workflow (Spec → Apply → Validate → Migrate)
- Systematic Component Coverage (110+ components across all themes)
- Knowledge Self-Containment (Migrate from external aria/ to embedded patterns)

SECTIONS ADDED:
- Core Principles (5 principles defining project governance)
- Technical Standards (technology stack and quality requirements)
- Development Workflow (systematic process for accessibility work)
- Governance (amendment process and compliance expectations)

TEMPLATES REQUIRING UPDATES:
✅ plan-template.md - Updated constitution check section to reference 5 core principles
✅ spec-template.md - Updated to require WCAG compliance in acceptance scenarios
✅ tasks-template.md - Updated to include accessibility validation tasks as standard phase
✅ .github/prompts/speckit.*.prompt.md - Reviewed: No agent-specific (CLAUDE) references found

FOLLOW-UP TODOS:
- None - all placeholders filled with concrete values

DEFERRED ITEMS:
- None - ratification date set to 2026-02-04 (today)

================================================================================
-->

# Kendo UI Themes - Accessibility Integration Constitution

## Core Principles

### I. Single Source of Truth
Component specifications in the HTML package (`packages/html/`) MUST serve as the authoritative reference for both rendering structure AND accessibility requirements.

**Requirements:**
- Component specs define markup structure, CSS class names, variants, and states
- Accessibility attributes are applied directly to component markup
- No parallel or duplicate accessibility specifications exist outside component specs
- All accessibility knowledge is embedded within component implementations

**Rationale:** Eliminates synchronization issues between separate rendering and accessibility specs. Ensures developers, AI agents, and documentation always reference the same source of truth. Enables pattern-based learning from actual implementations rather than abstract specifications.

---

### II. WCAG Compliance as Non-Negotiable
All components MUST meet WCAG 2.2 Level AA standards as a minimum requirement. Level AAA compliance is pursued where achievable without compromising usability.

**Requirements:**
- Every component implements appropriate WAI-ARIA roles, properties, and states
- Color contrast ratios meet AA standards (4.5:1 for normal text, 3:1 for large text)
- Keyboard navigation is fully functional for all interactive elements
- Screen reader compatibility is validated using automated tools (axe-core)
- Focus management follows logical tab order and visible focus indicators

**Validation:**
- Automated testing via `npm run test:aria [component]` validates ARIA attribute presence
- Automated testing via `npm run test:wcag [component]` validates WAI-ARIA standards
- Automated testing via `npm run test:contrast` validates color contrast ratios
- All tests MUST pass before component work is considered complete

**Rationale:** Accessibility is not optional. WCAG compliance ensures the component library is usable by all users, including those with disabilities, and meets legal requirements in many jurisdictions.

---

### III. Accessibility-First Workflow
Accessibility specifications MUST be created, applied, and validated BEFORE component implementations are considered complete. The workflow is: Spec → Apply → Validate → Migrate.

**Phase 1 - Apply (Current Focus):**
- Read accessibility specifications from `aria/[component]_aria.md`
- Apply ARIA attributes to component specs in `packages/html/src/[component]/`
- Target only root specs (`.spec.tsx`) and reusable templates (`templates/*.tsx`)
- Never modify test files in `tests/` folders
- Validate using `npm run test:aria [component]` and `npm run test:wcag [component]`

**Phase 2 - Migrate (Future Goal):**
- Transform `aria/*.md` specifications into embedded knowledge within HTML package
- Preserve selector information, attribute requirements, and rationale
- Enable pattern-based learning for AI agents from component implementations
- Format options: TSDoc-style documentation, structured data objects, or hybrid approach
- Goal: Eliminate `aria/` folder while retaining all accessibility knowledge

**Phase 3 - Self-Sustaining (Ultimate Goal):**
- AI agents learn accessibility patterns from existing component implementations
- Instructions in `.github/prompts/accessibility.prompt.md` provide context and rules
- New components automatically receive appropriate ARIA attributes
- Workflow requires no external reference materials beyond HTML package + instructions

**Rationale:** Embedding accessibility from the start prevents retrofitting issues, reduces technical debt, and ensures compliance is achieved systematically across all 110+ components.

---

### IV. Systematic Component Coverage
Accessibility work MUST be approached systematically, tracking coverage across all 110+ components in the monorepo. No component is exempt from accessibility requirements.

**Coverage Tracking:**
- Components organized alphabetically from action-sheet through wizard
- Each component has corresponding `aria/[component]_aria.md` specification (Phase 1)
- Progress tracked by number of components with applied and validated ARIA attributes
- Validation ensures every selector in spec has corresponding markup implementation

**Prioritization:**
- High-use components (button, input, grid, etc.) prioritized for early implementation
- Components with complex interaction patterns receive additional validation
- Framework-agnostic specifications enable consistent implementation across Angular, React, Blazor

**Quality Gates:**
- Rule coverage verification: All rules in `aria/*.md` MUST have matching implementation
- Attribute validation: All required ARIA attributes present in rendered HTML
- Semantic HTML preferred over ARIA roles where applicable (`<button>` vs `<div role="button">`)

**Rationale:** Systematic coverage prevents gaps and ensures consistent user experience across the entire component library. Tracking enables progress measurement and identifies coverage gaps.

---

### V. Knowledge Self-Containment
All accessibility knowledge MUST ultimately reside within the HTML package and instruction files, eliminating dependency on external reference materials.

**Current State (Phase 1):**
- Rendering specs in `packages/html/` (structure without ARIA attributes)
- Accessibility specs in `aria/` folder (separate specifications)
- Two sources must be kept synchronized manually

**Target State (Phase 3):**
- HTML package contains both structure AND accessibility implementation
- Embedded documentation explains rationale for ARIA patterns
- AI agents learn from examples within HTML package
- `aria/` folder eliminated - knowledge migrated into component implementations
- `.github/prompts/accessibility.prompt.md` provides rules and context

**Benefits of Self-Containment:**
- Single source of truth eliminates synchronization errors
- Pattern-based learning enables AI to generate correct ARIA implementations
- Developers reference actual implementations instead of abstract specs
- Knowledge remains accessible even if external docs become outdated
- New components inherit patterns from existing implementations

**Migration Strategy:**
- Phase 1: Apply existing `aria/*.md` specs to component markup
- Phase 2: Transform `aria/*.md` knowledge into embedded format within HTML package
- Phase 3: Verify AI agents can generate new specs from patterns alone
- Validation: Delete `aria/` folder and confirm workflow still functions

**Rationale:** Self-contained knowledge is more maintainable, discoverable, and resilient. AI agents can learn from real examples more effectively than from abstract specifications. Eliminates external dependencies that may become outdated or inaccessible.

---

## Technical Standards

### Technology Stack
- **Languages:** TypeScript (component specs), SCSS (themes), JavaScript/ESM (build scripts)
- **Frameworks:** React (component specs), Node.js v20+ (build tooling)
- **Build Tools:** ESBuild (bundling), Gulp (SCSS compilation), PostCSS + Autoprefixer (browser compatibility)
- **Testing:** Jest (unit tests), @progress/kendo-e2e (visual/accessibility tests), axe-core (WCAG validation)
- **Monorepo:** Lerna (release management), Nx (task orchestration)
- **AI Tooling:** GitHub Copilot (primary AI assistant), Spec Kit CLI (spec-driven development)

### Code Quality Requirements
- **Linting:** ESLint (JavaScript/TypeScript), Stylelint (SCSS) - enforced via Husky git hooks
- **Type Safety:** TypeScript strict mode for all `.tsx` component files
- **Documentation:** SassDoc for SCSS variables, TSDoc-style comments for accessibility rationale
- **Testing Coverage:** All accessibility implementations require passing `test:aria` and `test:wcag` validations

### Accessibility Testing Stack
- **ARIA Validation:** Custom script (`scripts/test-aria-attributes.mjs`) validates attributes against markdown specs
- **WCAG Compliance:** AxeCore via `scripts/test-wcag-compliance.mjs` tests AA/AAA compliance
- **Contrast Testing:** Automated color contrast validation via `npm run test:contrast`
- **Browser Automation:** @progress/kendo-e2e (Playwright-based) for rendering and validation

### File Naming and Organization
- **ARIA Specs:** `aria/[component]_aria.md` (lowercase with underscores)
- **Component Specs:** `packages/html/src/[component]/[component].spec.tsx` (lowercase, kebab-case folders)
- **Templates:** `packages/html/src/[component]/templates/[template].tsx` (descriptive names)
- **Tests:** `packages/html/src/[component]/tests/[test-case].tsx` (descriptive scenario names)

---

## Development Workflow

### Accessibility Integration Process

**Prerequisites:**
1. Review component rendering spec structure in `packages/html/src/[component]/`
2. Read ARIA specifications in `aria/[component]_aria.md`
3. Understand component variants, states, and interaction patterns
4. Reference `.github/prompts/accessibility.prompt.md` for application rules

**Systematic Application Steps:**

1. **Analyze Spec**
   - Parse `aria/[component]_aria.md` to extract selectors, attributes, and usage guidance
   - Map CSS selectors to specific elements in component markup
   - Identify which files need updates: `.spec.tsx`, `templates/*.tsx`
   - Never modify files in `tests/` folders - these are test entry points

2. **Apply ARIA Attributes**
   - Add attributes after `className` prop in TSX elements
   - Use semantic HTML elements where possible (`<button>` preferred over `<div role="button">`)
   - Use template strings for related IDs: `${id}-popup`, `${id}-label`
   - Add conditional attributes for state: `aria-pressed={selected ? 'true' : 'false'}`
   - Icon-only elements require `aria-label` for screen reader context

3. **Validate Implementation**
   - Run `npm run test:aria [component]` to validate against `aria/*.md` spec
   - Run `npm run test:wcag [component]` to validate WAI-ARIA standards
   - Run `npm run typecheck --prefix packages/html` to verify TypeScript correctness
   - All tests MUST pass before work is considered complete

4. **Verify Coverage**
   - Ensure every rule in `aria/[component]_aria.md` has corresponding implementation
   - Check that all required attributes are present (not just optional ones)
   - Verify alternative attributes (e.g., native `<button>` OR `role="button"`) are handled
   - Confirm no structural changes were made - only attributes added

5. **Document Rationale (Phase 2+)**
   - Add TSDoc comments explaining why specific ARIA patterns are used
   - Reference WCAG success criteria where applicable
   - Provide examples of correct and incorrect usage
   - Enable future AI agents to understand reasoning behind patterns

**Git Hooks:**
- **Pre-commit:** Runs `node scripts/a11y-pre-commit.mjs --info-only` (non-blocking info)
- **Pre-push:** Runs `node scripts/a11y-pre-commit.mjs --prompt` (optional blocking validation)

**Commit Message Format:**
Follow Conventional Commits specification:
```
feat(a11y): apply ARIA attributes to button component

- Add role="button" to .k-button elements
- Add aria-pressed for toggle button states
- Add aria-label for icon-only buttons

Validates against aria/button_aria.md
Closes #123
```

---

## Governance

This constitution serves as the authoritative governance document for accessibility integration work in the Kendo UI Themes repository. All development practices, tool usage, and quality standards MUST align with these principles.

### Amendment Process
- **MAJOR version increment** (e.g., 1.0.0 → 2.0.0): Backward-incompatible changes to core principles, removal of principles, or fundamental redefinition of governance
- **MINOR version increment** (e.g., 1.0.0 → 1.1.0): Addition of new principles, material expansion of existing principles, or new mandatory sections
- **PATCH version increment** (e.g., 1.0.0 → 1.0.1): Clarifications, wording improvements, typo fixes, non-semantic refinements

Amendments require:
1. Documented rationale for the change
2. Impact analysis on existing work and templates
3. Approval from project maintainers
4. Migration plan for affected components/workflows
5. Update to Sync Impact Report at top of constitution file

### Compliance Verification
- All pull requests MUST demonstrate adherence to core principles
- Accessibility work MUST include passing `test:aria` and `test:wcag` validations
- Code reviews verify WCAG 2.2 Level AA compliance
- Complexity introduced beyond these principles MUST be explicitly justified

### Runtime Development Guidance
For detailed execution instructions and command workflows, refer to:
- `.github/copilot-instructions.md` - Overall repository guidance and conventions
- `.github/instructions/html.instructions.md` - HTML package specific guidance
- `.github/prompts/accessibility.prompt.md` - Accessibility application rules and patterns
- `.github/agents/accessibility.agent.md` - Accessibility specialist agent workflows

### Living Document
This constitution evolves as the project progresses through its three phases:
- **Phase 1 (Current):** Focus on systematic ARIA attribute application using external `aria/*.md` specs
- **Phase 2 (Future):** Knowledge migration format recommendations and implementation
- **Phase 3 (Ultimate):** Self-sustaining AI workflow validation and continuous improvement

---

**Version**: 1.0.0 | **Ratified**: 2026-02-04 | **Last Amended**: 2026-02-04
