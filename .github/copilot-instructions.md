# Kendo Themes Monorepo

This monorepo contains SCSS themes for all Kendo UI products, providing consistent visual styling and customization options for 80+ UI components.

## Monorepo Overview

**Architecture:** Multi-package monorepo with core design system, theme implementations, utilities, and testing infrastructure.

### Package Ecosystem

| Package | Purpose | Path-Specific Instructions |
|---------|---------|---------------------------|
| **core** | Design system foundation with null variables and component skeletons | `.github/instructions/core.instructions.md` |
| **default** | Default Kendo theme implementation | `.github/instructions/themes.instructions.md` |
| **bootstrap** | Bootstrap-styled theme | `.github/instructions/themes.instructions.md` |
| **material** | Material Design theme | `.github/instructions/themes.instructions.md` |
| **classic** | Classic Kendo theme | `.github/instructions/themes.instructions.md` |
| **fluent** | Microsoft Fluent theme | `.github/instructions/themes.instructions.md` |
| **utils** | Utility-first CSS classes (standalone) | `.github/instructions/utils.instructions.md` |
| **html** | React component specs for visual testing | `.github/instructions/html.instructions.md` |


## Tech Stack

_For specific version numbers, refer to package.json files in the root and individual packages._

### Core Technologies

- **SCSS/Sass** - Theme compilation with dart-sass
- **Node.js** - Required runtime
- **Lerna** - Release management
- **Nx** - Monorepo management and task running
- **PostCSS + Autoprefixer** - CSS post-processing for browser compatibility

### Development & Build Tools

- **ESBuild** - Fast JavaScript/TypeScript bundling
- **HTTP Server** - Local development server
- **Gulp** - SCSS build pipeline
- **TypeScript** - Type checking and compilation

### Quality Assurance

- **ESLint** - JavaScript/TypeScript linting
- **Stylelint** - SCSS linting and formatting
- **Husky + lint-staged** - Git hook management

### Documentation

- **SassDoc** - SCSS documentation generation

### Testing Infrastructure

- **@progress/kendo-e2e** - Visual regression testing
- **AxeCore** - Accessibility testing
- **Jest** - Unit testing framework

## Repo Structure

```
packages/
├── core/              # Design system foundation (null variables, mixins, functions)
├── default/           # Default theme implementation
├── bootstrap/         # Bootstrap theme
├── material/          # Material Design theme
├── classic/           # Classic theme
├── fluent/            # Fluent theme
├── utils/             # Utility CSS classes (standalone)
└── html/              # React component specs & tests
scripts/               # Build utilities and automation
tests/                 # Visual test outputs
build/                 # CI/CD scripts
units/                 # Jest unit tests
integrations/          # Bundler integration tests
```


## Repo Commands and Scripts

**Setup:**
```bash
npm ci                          # Install all dependencies
```

**Development Cycle:**
```bash
npm run sass                    # Compile all themes → packages/*/dist/all.css
npm start                       # Start dev server on localhost:3000
npm run docs                    # Generate SassDoc documentation
npm run lint                    # Run all linters (scripts + styles)
npm run lint:scripts            # ESLint for JS/TS files
npm run lint:styles             # Stylelint for SCSS files
```

**Testing:**
```bash
npm run test:units              # Run Jest unit tests (requires docs first)
npm run test:units:watch        # Run Jest in watch mode
npm run test:integrations       # Test bundler compatibility
npm run test:create-screenshots # Generate visual regression tests
npm run test:contrast           # Run accessibility contrast tests
```

**Advanced Builds:**
```bash
npm run sass:dist               # Compile all swatches → {swatch}.css/scss
npm run docs:check              # Verify documentation consistency
npm run build                   # Build HTML components
npm run build:tests             # Build HTML test components
```

**Cleanup:**
```bash
npm run clean:dist              # Remove all dist folders
npm run clean:tests             # Clean test result files
npm run clean                   # Full cleanup (includes node_modules)
```

### Command Dependencies
- Unit tests require `npm run docs` to work with latest metadata
- Git hooks automatically run linting on changed files

## Coding Guidelines

### Commit message rules (Conventional Commits)

- Use the Conventional Commits spec: `type(scope): summary`
- Allowed `type`: feat, fix, chore, docs, refactor, test, perf, ci, build, revert.
- Use a meaningful `scope` (e.g., component, package or folder).
- Subject in imperative mood, max ~80 chars.
- Include `BREAKING CHANGE:` in body when applicable.

#### Special rules for Copilot coding agent
- For planning or scaffolding commits, use: `chore(plan): initial plan for #{issue-number}` (no “Initial Plan”).
- For dependency updates triggered by the agent: `chore(deps): …`
- For lint/format-only changes: `chore(format): …`

### Variable Creation

- Refer to ${variable-create.prompt.md} for SCSS variable creation guidelines

### Variable Documentation

- Refer to ${variable-docs.prompt.md} for SassDoc documentation standards

### SCSS Standards

- Use **dart-sass syntax** - avoid deprecated node-sass features
- Follow **BEM-like naming** with `k-` prefix for component classes
- Use **`!default`** for all customizable variables
- Import component dependencies explicitly in `_index.scss` files
- Use `@include import-once()` to prevent duplicate CSS output

### HTML Package Standards

- Use **TypeScript** for all component files with proper type definitions
- Follow **React functional component** patterns with hooks
- Use **TSX** syntax consistently
- Export components and types from `index.ts` files
- Organize files by component with clear separation of concerns

### Testing Requirements

- **Unit tests** - Required for variable customization validation
- **HTML tests** - Add test cases for new component features in `packages/html/src/[component]/tests/`
- **Visual tests** - Automatically generated from HTML tests
- **Integration tests** - Validate SCSS compilation with major bundlers
- **Linting** - Enforced on all commits via Husky + lint-staged
- **Accessibility tests** - Run automatically on default-ocean-blue-a11y swatch

## Common Issues

- **Unit tests failing**: Run `npm run docs` first to generate metadata
