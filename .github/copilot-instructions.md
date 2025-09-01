# Kendo UI Themes - Copilot Instructions

## Repository Overview

This is a Lerna-managed monorepo containing Kendo UI themes for all Telerik UI products. The themes are built with SCSS and designed for compatibility with Kendo UI for Angular, React, jQuery, ASP.NET MVC/Core, and Blazor components.

**Project Type**: Monorepo with 7 theme packages  
**Languages**: SCSS/Sass, JavaScript, TypeScript  
**Build System**: Lerna + Nx for monorepo management  
**Target Runtime**: Browser CSS themes  
**Repository Size**: ~1,800 files across packages  

## Essential Build & Validation Commands

**CRITICAL**: Always run commands in this exact order to avoid failures:

### 1. Initial Setup
```bash
# Required Node.js version: 22.x (engine requirement)
npm ci --no-audit --no-fund
```

### 2. Build Themes (REQUIRED before testing)
```bash
# Compile all themes (takes ~30 seconds)
npm run sass

# Generate documentation metadata (REQUIRED for unit tests)
npm run docs

# Build theme swatches for distribution
npm run sass:dist
```

### 3. Development Server
```bash
# Start dev server on http://localhost:3000
npm start
```

### 4. Linting & Validation
```bash
# Lint JavaScript/TypeScript files
npm run lint:scripts

# Lint SCSS files  
npm run lint:styles

# Run both linters
npm run lint
```

### 5. Testing
```bash
# Unit tests (requires themes + docs to be built first)
npm run test:units

# Integration tests (requires sass:dist to be built first)
npm run test:integrations

# Check documentation consistency
npm run docs:check
```

**Test Dependencies**: 
- Unit tests will FAIL if documentation hasn't been generated. Always run `npm run docs` before `npm run test:units`.
- Integration tests will FAIL if distribution builds don't exist. Always run `npm run sass:dist` before `npm run test:integrations`.

### 6. Git Hooks (Pre-commit Validation)
- **Pre-commit**: Runs `lint:staged` (lints changed files)
- **Pre-push**: Runs `npm run sass && npm run docs:check`

## Project Architecture & Layout

### Core Structure
```
/packages/              # Theme packages (7 total)
├── core/              # Base theme foundation
├── utils/             # Utility functions and mixins  
├── default/           # Default Kendo theme
├── bootstrap/         # Bootstrap-styled theme
├── material/          # Material Design theme
├── classic/           # Classic Kendo theme
├── fluent/            # Microsoft Fluent theme
└── html/              # Test components & visual tests

/tests/                # Generated visual test outputs (DO NOT COMMIT)
/scripts/              # Build and utility scripts
/build/                # Bash scripts for CI
/units/                # Jest unit tests
/integrations/         # Integration tests (webpack, vite, etc.)
```

### Package Structure (each theme)
```
packages/[theme]/
├── scss/              # Source SCSS files
│   ├── all.scss      # Main entry point
│   ├── _variables.scss # Theme variables
│   └── [component]/   # Component-specific styles
├── dist/              # Compiled CSS output
├── docs/              # Generated documentation
├── lib/swatches/      # Theme variant configurations
└── package.json       # Package-specific scripts
```

## Key Facts for Code Changes

### Theme Inheritance
- All themes extend `@progress/kendo-theme-core`
- Components inherit base styles and override theme-specific variables
- Use `@import-once` mixin to prevent duplicate CSS output

### Variable Documentation
- Document SCSS variables with triple-slash comments: `/// Variable description`
- Group variables with `@group directive`: `/// @group button`
- Variables generate `docs/customization.md` automatically

### Component Architecture
Each component has:
- `_index.scss` - Main component file
- `_layout.scss` - Structural/metric styles  
- `_theme.scss` - Appearance/color styles
- `_variables.scss` - Component-specific variables

### SCSS Compilation Process
1. Sass compiles `scss/all.scss` to `dist/all.css`
2. PostCSS autoprefixer adds browser prefixes
3. Compressed versions created for distribution
4. Swatches generate theme variants from JSON configs

## CI/CD & Status Checks

The repository runs comprehensive checks on all PRs:

1. **Lint scripts** - ESLint validation
2. **Lint styles** - Stylelint validation  
3. **Visual** - Screenshot regression testing
4. **A11y** - Accessibility contrast testing
5. **Integration** - Bundler compatibility tests
6. **Unit** - Jest unit tests
7. **Docs** - Documentation consistency
8. **HTML spec** - Component specification validation

### Visual Testing
- Generates HTML pages and screenshots automatically
- Uses `packages/html/` components for test rendering
- Screenshots saved to `tests/_output/` (DO NOT COMMIT)
- Run locally: `npm run test:create-screenshots <theme>`

## Common Issues & Solutions

### Build Failures
- **Node version mismatch**: Requires Node 22.x exactly
- **Tests fail**: Ensure `npm run docs` was run first
- **SASS compilation errors**: Check `_variables.scss` syntax
- **Missing dependencies**: Run `npm ci` to reinstall

### Development Workflow
1. Make SCSS changes in `packages/[theme]/scss/`
2. Run `npm run sass` to compile
3. Test with `npm start` (dev server)
4. Update docs with `npm run docs` if variables changed
5. Run tests with `npm run test:units`

### Performance Notes
- Sass compilation: ~30 seconds for all themes
- Documentation generation: ~15 seconds per theme
- Unit tests: ~5-10 minutes (535 test suites)
- Use Nx caching: builds cache automatically

## File Exclusions

DO NOT commit these files/folders:
- `packages/*/dist/` (build artifacts)
- `tests/_output/` (generated screenshots)
- `node_modules/` (dependencies)
- `.tmp/` (temporary files)

## Validation Commands Summary

**Trust these instructions**. Only search for additional information if commands fail or if specific integration details are needed beyond what's documented here.

**Quick validation sequence**:
```bash
npm ci && npm run sass && npm run docs && npm run lint && npm run test:units
```

**For integration testing**:
```bash
npm run sass:dist && npm run test:integrations
```