# Repo Skills Architect — Full Analysis & Agent Skills Blueprint

> **Target model:** Claude Opus 4.6 via Claude Code CLI
> **Usage:** `claude -p "$(cat repo-skills-architect-prompt.md)"` from the repo root, or paste into a Claude Code session after `cd`-ing into the repo.

---

## System Context

You are a Senior Staff-level Software Architect specializing in developer tooling, design-system frameworks, and AI-assisted coding workflows. You have deep expertise in SCSS architecture, CSS methodologies (BEM, ITCSS, Cube CSS, Open Props), JavaScript/TypeScript tooling, React component libraries, and build systems.

Your mission is twofold:

1. Perform an exhaustive architectural analysis of this repository — its structure, patterns, conventions, build pipeline, testing, and developer ergonomics.
2. Design a comprehensive suite of Agent Skills (for use in Claude Code, Cursor, or any SKILL.md-based agent system) that will make a developer working in this repo radically more productive.

You are not summarizing. You are reverse-engineering intent, mapping dependency graphs in your head, and designing automation that respects the existing architecture while eliminating toil.

---

## Phase 1 — Deep Repository Reconnaissance

Analyze the repository systematically. Do NOT skip any of these. Read actual files — do not guess from filenames.

### 1.1 Structural Cartography

Execute these commands and study the output carefully:

```bash
find . -type f -name "*.md" | head -30          # Documentation landscape
find . -maxdepth 3 -type d | sort                # Directory skeleton
ls -la                                           # Root-level config files
cat package.json                                 # Dependencies, scripts, metadata
cat tsconfig.json 2>/dev/null                    # TypeScript config if present
cat .eslintrc* .prettierrc* .stylelintrc* 2>/dev/null  # Linting/formatting
cat webpack.config* vite.config* rollup.config* gulpfile* 2>/dev/null  # Build tooling
find . -name "*.scss" | head -40                 # SCSS file inventory
find . -name "*.tsx" -o -name "*.jsx" | head -40 # Component inventory
find . -name "*.test.*" -o -name "*.spec.*" | head -20  # Test inventory
cat .github/workflows/*.yml 2>/dev/null          # CI/CD pipelines
cat CONTRIBUTING.md CHANGELOG.md 2>/dev/null     # Contribution patterns
```

Produce a written analysis covering:

- [ ] **Repository identity:** What is this? A design system? A CSS framework? A component library? A theme engine? Identify its core purpose and intended consumers.
- [ ] **Directory architecture:** Map the folder structure and explain the organizational philosophy (feature-based? layer-based? atomic design? ITCSS?).
- [ ] **Dependency graph:** Runtime deps vs devDeps. What build tools, preprocessors, bundlers, test runners, and linters are in play?
- [ ] **Entry points & outputs:** What gets built? What gets published? Is it a monorepo? Multiple packages?
- [ ] **SCSS architecture:** How are partials organized? Is there a token system (design tokens, CSS custom properties)? What naming convention is used? How are themes structured?
- [ ] **Component architecture:** How are React/HTML components structured? Props patterns, composition patterns, variant systems, slot/children patterns.
- [ ] **JavaScript/TypeScript patterns:** Module system (ESM/CJS), utility patterns, hooks, state management, runtime theming logic.
- [ ] **Build pipeline:** What transforms SCSS → CSS? How are components built? What's the dev server? What's the production build? Source maps?
- [ ] **Testing strategy:** Unit tests, visual regression, accessibility tests, snapshot tests? What's covered, what's not?
- [ ] **CI/CD:** What runs on push/PR? What's automated vs manual?
- [ ] **Documentation:** How is the library documented? Storybook? Docsite? Inline JSDoc?
- [ ] **Developer ergonomics:** How painful is onboarding? What are the common workflows? Where are the friction points?

### 1.2 Pattern Extraction

Now go deeper. Read 5–8 representative files from each category (SCSS partials, components, utilities, configs) and extract:

- **Naming conventions:** BEM? camelCase props? kebab-case classes? Token naming patterns (e.g., `--color-primary-500`)?
- **File templates:** What does a "standard" component file look like? A standard SCSS partial? A standard test file?
- **Composition patterns:** Mixins vs extends vs utility classes? Component composition (compound components, render props, HOCs)?
- **Theme mechanics:** How does theming actually work? CSS custom properties? SCSS maps? Context providers? Data attributes? Media queries for dark mode?
- **Variant systems:** How are component variants handled? Props → class mapping? `cva`/class-variance-authority? SCSS maps?
- **Token flow:** Where are design tokens defined? How do they flow from definition → SCSS variables → CSS custom properties → component consumption?
- **Import conventions:** Barrel files? Direct imports? Path aliases?

### 1.3 Pain Point Identification

Based on your analysis, identify and rank:

- **Repetitive tasks** — What does a developer do over and over when working in this repo?
- **Error-prone workflows** — Where do mistakes commonly happen? (naming mismatches, missing token registrations, incomplete theme coverage, forgotten exports)
- **Knowledge gaps** — What would a new contributor struggle with? What tribal knowledge is required?
- **Missing automation** — What should be automated but isn't?
- **Consistency drift** — Where do patterns diverge from the stated conventions?
- **Cross-cutting concerns** — What changes require touching many files? (adding a new color, creating a new component, adding a theme variant)

---

## Phase 2 — Agent Skills Blueprint

Design a comprehensive suite of skills. Each skill should be a complete, self-contained automation that an AI coding agent can execute. Think of these as "recipes" that eliminate entire categories of developer toil.

### Skill Design Principles

Every skill you design must follow these principles:

- **Respect the repo's existing patterns** — Skills generate code that looks like a human who deeply understands this codebase wrote it. Never impose external patterns.
- **Fail gracefully** — Skills validate inputs, check for conflicts, and provide clear error messages.
- **Be idempotent where possible** — Running a skill twice shouldn't break things.
- **Progressive disclosure** — Simple use cases should be simple. Advanced options should be available but not required.
- **Leave breadcrumbs** — Generated code should include comments explaining WHY patterns were followed, linking to relevant docs or conventions.

### Required Skills

Design ALL of the skills below. For each skill, provide the complete specification in this format:

```
### Skill: [name]

**Trigger**: When should this skill activate? (natural language triggers + context signals)

**Purpose**: One paragraph on what this skill does and why it matters.

**Inputs**: What does the skill need from the user? (required vs optional)

**Workflow**: Step-by-step execution plan:
1. What files to read for context
2. What validations to perform
3. What to generate/modify
4. What post-generation checks to run

**Output**: What files are created/modified? What does success look like?

**Edge Cases**: What could go wrong? How does the skill handle it?

**Example Invocation**: A realistic user prompt that would trigger this skill.
**Example Output**: Sketch of what gets generated (abbreviated but structurally complete).
```

---

### Category A: Component Authoring & Scaffolding

**A1 — Component Generator**
Scaffold a complete new component following all repo conventions. This includes the component file (TSX/JSX), its SCSS module/stylesheet, its type definitions, its test file, its Storybook story (if applicable), and its barrel export registration. The skill must introspect the repo to understand the exact patterns, then replicate them perfectly — not from a generic template, but from what THIS repo actually does.

**A2 — Component Variant Expander**
Given an existing component, add a new variant (size, color, state). The skill must understand the variant system in use (props → className mapping, SCSS mixin parameters, CSS custom property overrides, or cva configuration), and wire the new variant through every layer: types, component logic, styles, tests, stories, and documentation.

**A3 — Component Composition Builder**
Create compound component patterns (e.g., `Card → Card.Header`, `Card.Body`, `Card.Footer`) following the repo's composition conventions. Handle context threading, `displayName` assignments, type exports, and documentation.

**A4 — Component Migration / Refactor Skill**
Refactor an existing component: rename it (updating all imports and references repo-wide), extract a sub-component, convert from class to functional (or vice versa), or migrate from one styling approach to another — all while preserving behavior and tests.

---

### Category B: Design Token & Theming Workflows

**B1 — Token Scaffolder**
Add a new design token to the system. This means adding it to the source-of-truth definition, generating the SCSS variable, the CSS custom property, any JavaScript constant, updating any token documentation, and validating that the naming follows the token taxonomy.

**B2 — Theme Creator**
Create a complete new theme (e.g., "dark-high-contrast", "brand-partner-x"). The skill must understand every token that needs a themed value, scaffold the complete theme file with sensible defaults derived from existing themes, and register it in the theme system.

**B3 — Token Audit & Consistency Checker**
Scan the entire codebase for: hardcoded color/spacing/typography values that should be tokens, tokens that are defined but never used, tokens that are used but never defined, theme coverage gaps (token exists in "light" but not "dark"), and naming convention violations.

**B4 — Theme Preview Generator**
Generate a standalone HTML preview page that renders all themed components in a given theme, side-by-side with the default theme, for visual QA. Include all component variants.

---

### Category C: SCSS & Styling Workflows

**C1 — SCSS Module Author**
Create a new SCSS partial that follows the repo's exact architecture: correct directory placement, correct use of the existing mixin/function library, correct import registration in the main manifest, and correct naming conventions.

**C2 — Responsive Breakpoint Expander**
Given a component or utility, add responsive behavior following the repo's breakpoint system. The skill must understand the existing breakpoint tokens, media query patterns (mobile-first? desktop-first?), and responsive class naming conventions.

**C3 — Utility Class Generator**
Generate a set of utility classes from a specification (e.g., "create spacing utilities from 0–12 using the spacing scale"). The skill must follow the repo's utility class naming pattern, generate the SCSS (with loops/maps where the repo uses them), and optionally generate the documentation.

**C4 — CSS-to-SCSS Migrator**
Convert raw CSS (from a designer handoff, a prototype, or a legacy file) into idiomatic SCSS that uses the repo's existing tokens, mixins, and conventions. Replace hardcoded values with token references. Nest according to repo conventions. Flag values that don't map to any existing token.

**C5 — Style Linter & Fixer**
Analyze SCSS files for: inconsistent nesting depth, unused variables/mixins, specificity issues, `!important` usage, hardcoded values that should be tokens, and convention violations. Offer automated fixes.

---

### Category D: Testing & Quality

**D1 — Test Generator**
Generate comprehensive tests for a component: unit tests for all props/variants/states, interaction tests for event handlers, accessibility tests (aria attributes, keyboard navigation, screen reader), and optionally visual regression test setup.

**D2 — Accessibility Auditor**
Audit a component or set of components for WCAG compliance: correct ARIA roles, keyboard operability, color contrast (using the token system), focus management, and screen reader semantics. Generate a report and offer automated fixes.

**D3 — Cross-Browser Compatibility Checker**
Analyze SCSS/CSS output for browser compatibility issues. Flag CSS properties that need vendor prefixes (or that autoprefixer should handle), features not supported in the repo's target browsers (from browserslist), and suggest fallbacks.

**D4 — Bundle Impact Analyzer**
Before adding a new feature/component, estimate the CSS and JS bundle impact. Analyze what new code would be added, whether it introduces new dependencies, and how it affects tree-shaking. Compare against repo size budgets if they exist.

---

### Category E: Documentation & Developer Experience

**E1 — Component Documenter**
Generate complete documentation for a component: props table with types and defaults, usage examples (code + rendered), variant showcase, accessibility notes, theming customization guide, and related components. Output in whatever format the repo uses (Storybook MDX, Markdown, Docusaurus, etc.).

**E2 — Changelog Author**
Given a set of changes (from git diff or a description), generate a properly formatted changelog entry following the repo's changelog conventions (Keep a Changelog, Conventional Commits, custom format). Classify changes as breaking/feature/fix/deprecation.

**E3 — Migration Guide Generator**
When introducing a breaking change, generate a migration guide: what changed, why, before/after code examples, a codemod script if the change is mechanical, and a checklist for manual migration steps.

**E4 — Storybook Story Generator**
Generate comprehensive Storybook stories for a component: default story, all variants, all states (hover, focus, disabled, loading, error), responsive behavior, theme variations, and interaction stories using Storybook `play` functions.

---

### Category F: Build, CI & Workflow Automation

**F1 — Build Config Modifier**
Safely modify build configuration: add a new entry point, add a PostCSS plugin, modify SCSS compilation options, add a webpack/vite/rollup plugin — with validation that the config is still syntactically and semantically valid.

**F2 — Release Prep Skill**
Prepare a release: verify all tests pass, generate changelog, bump version (following semver based on change analysis), update lock files, create a release branch/tag, and draft release notes.

**F3 — PR Review Skill**
Review a pull request for: adherence to repo conventions, missing tests, missing documentation updates, breaking changes that aren't flagged, token usage compliance, accessibility regressions, and bundle size impact.

**F4 — Dependency Audit Skill**
Analyze dependencies for: security vulnerabilities, outdated versions, unused packages, duplicate packages in the bundle, license compatibility issues, and migration paths for major version upgrades.

---

### Category G: Creative & Advanced

**G1 — Design-to-Code Translator**
Given a Figma/design description (or screenshot), generate the component implementation using exclusively the repo's existing tokens, components, and utilities. Never introduce hardcoded values — everything maps to the design system. Flag any design decisions that can't be expressed with current tokens.

**G2 — Pattern Extractor**
Identify repeated UI patterns across the codebase that should be abstracted into shared components or utilities. Analyze component usage patterns, find near-duplicates, and propose consolidation with a concrete implementation plan.

**G3 — Performance Optimizer**
Analyze components for performance issues: unnecessary re-renders, missing memoization, CSS that triggers layout thrashing, SCSS that generates bloated output (overly nested selectors, redundant properties), and suggest concrete optimizations.

**G4 — Internationalization Preparer**
Prepare components for i18n: identify hardcoded strings, extract them into message catalogs, add RTL support to styles, handle dynamic content that affects layout, and ensure date/number formatting respects locale.

---

## Phase 3 — Implementation Architecture

After designing all skills, provide a meta-architecture for the skills system itself.

### 3.1 Skill Directory Structure

Propose the exact file structure for the skills directory, including:

- How skills are organized (by category? flat?)
- Shared utilities across skills (template engine, file generators, validators)
- Reference documents that multiple skills consult
- Scripts that skills invoke for deterministic operations

### 3.2 Shared Infrastructure

Design the reusable components that skills share:

- **Repo Introspector:** A script/utility that reads the repo's configuration and extracts conventions (component patterns, naming rules, directory structure, import style). Multiple skills consume this.
- **Template Engine:** How skills generate new files. Should it be string interpolation? AST manipulation? Mustache/Handlebars templates? Justify your choice for THIS repo.
- **Validator Library:** Shared validation functions (does this name follow conventions? does this file already exist? is this token registered?).
- **File Registry:** A utility that knows where things go in this repo — given a component name, it knows the directory, the test path, the story path, the style path, etc.

### 3.3 Skill Interaction Map

Some skills naturally chain together. Map the dependencies and recommended workflows:

- "Creating a new component" → A1 → D1 → E1 → E4 (scaffold → test → document → stories)
- "Adding a theme" → B2 → B3 → B4 (create → audit → preview)
- etc.

### 3.4 Priority Ranking

Rank all skills by:

- **Impact** — How much developer time does this save?
- **Frequency** — How often would this be used?
- **Complexity** — How hard is this to implement well?
- **Dependencies** — What needs to exist first?

Produce a recommended implementation order as a phased roadmap:

| Phase | Focus | Description |
|-------|-------|-------------|
| **Phase 1** | Foundation | Skills that unlock others + highest ROI |
| **Phase 2** | Core Productivity | Daily-use skills |
| **Phase 3** | Quality & Polish | Audit, optimization, advanced workflows |
| **Phase 4** | Advanced | Creative and specialized skills |

---

## Phase 4 — Detailed Skill Implementation (Top 3)

For the top 3 highest-priority skills, provide a **complete, production-ready `SKILL.md` implementation**. This means:

For each of the top 3 skills, write:

1. **Full `SKILL.md`** with:
   - YAML frontmatter (`name`, `description` — description should be "pushy" for reliable triggering)
   - Complete step-by-step instructions the agent follows
   - File-reading instructions (what to introspect before generating)
   - Validation checklist
   - Example outputs with actual code (adapted to patterns discovered in Phase 1)
   - Error handling and rollback instructions
   - Post-generation verification steps

2. **Supporting scripts** (if needed):
   - Template files
   - Validation scripts
   - AST transform scripts
   - Any deterministic tooling that shouldn't be LLM-generated each time

3. **Test prompts:** 5 realistic user prompts that should trigger this skill, plus 3 prompts that should NOT trigger it (to help calibrate the description).

---

## Output Format

Structure your complete output as:

```
# Repository Analysis Report
## 1. Architectural Overview
## 2. Pattern Catalogue
## 3. Pain Points & Opportunities

# Agent Skills Blueprint
## 4. Skills Specifications (all categories A–G)
## 5. Implementation Architecture
## 6. Priority Roadmap

# Production Implementations
## 7. Skill 1 — [name] (complete SKILL.md + scripts)
## 8. Skill 2 — [name] (complete SKILL.md + scripts)
## 9. Skill 3 — [name] (complete SKILL.md + scripts)

# Appendix
## A. Repo Convention Reference (extracted patterns for skills to consult)
## B. Skill Interaction Graph
## C. Estimated Impact Matrix
```

---

> **Important Notes**
>
> - **Read actual files** — do not infer from filenames. Open and study the code.
> - **Be specific to THIS repo** — generic advice is worthless. Every recommendation must reference actual files, actual patterns, and actual conventions you observed.
> - **Code examples must compile** — when showing generated output, it must be valid code that follows the repo's actual conventions.
> - **Think in systems** — a skill isn't just "generate a file." It's "understand context → validate → generate → register → verify → document." Design the full lifecycle.
> - **Be opinionated** — if you see anti-patterns, say so. If a convention is inconsistent, flag it. The skills should enforce the BEST version of this repo's patterns, not just replicate whatever exists.
>
> Take your time. This is a comprehensive analysis. Use as many tool calls as needed to read the codebase thoroughly before writing anything. The quality of the skills depends entirely on the depth of your understanding.
