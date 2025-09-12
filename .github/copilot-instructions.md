# Kendo Themes

This monorepo contains SCSS themes for all Kendo UI products. The themes provide consistent visual styling and customization options for 80+ UI components.

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

## Project Structure

### Root Structure

```
packages/
├── core/              # Core foundation for all themes.
├── utils/             # Utility CSS classes package
├── default/           # Default Kendo theme
├── bootstrap/         # Bootstrap-styled theme
├── material/          # Material Design theme
├── classic/           # Classic Kendo theme
├── fluent/            # Microsoft Fluent theme
└── html/              # React components for visual testing
scripts/               # Build utilities and automation
tests/                 # Generated visual test outputs
build/                 # CI/CD bash scripts
units/                 # Jest unit tests
integrations/          # Webpack/Vite/ESBuild/Parcel/Gulp scss compilation tests
```

### Package Structure each theme (default, bootstrap, material, classic, fluent) package.

```
packages/[theme]/
├── dist/                       # Compiled CSS output
│   ├── meta/                   # Generated variables metadata from npm run docs
│   ├── {swatch}.css            # Compiled swatch CSS files
│   ├── {swatch}.scss           # Compiled swatch SCSS files
│   ├── all.css                 # Main compiled CSS
│   └── all.scss                # Main compiled SCSS
├── docs/                       # Generated documentation from npm run docs
├── lib/swatches/               # JSON format schema used to generate swatches with npm run sass:dist
├── scss/                       # Source SCSS files
│   ├── all.scss                # Main entry point
│   ├── _variables.scss         # Theme variables
│   └── [component]/            # Component-specific styles
│       ├── _index.scss         # Component entry point with mixin and dependencies
│       ├── _variables.scss     # Component variables with SassDoc documentation
│       ├── _layout.scss        # Structural styles (padding, margins, sizing)
│       └── _theme.scss         # Visual styles (colors, backgrounds, borders)
└── package.json                # Package-specific scripts
```

**Theme Package Purpose:**

- Consume and extend core package foundation with theme-specific values
- Provide concrete implementations of design tokens and component styles
- Variables in `_variables.scss` override core null values with actual theme values
- Layout and theme files extend core patterns with theme-specific customizations
- Generate multiple swatches (color variants) for the same theme through JSON configurations

### Package Structure for (core) package.

```
packages/core/
├── dist/                               # Compiled CSS output
│   ├── meta/                           # Generated variables metadata from npm run docs
│   ├── all.css                         # Main compiled CSS
│   └── all.scss                        # Main compiled SCSS
├── docs/                               # Generated documentation from npm run docs
├── scss/                               # Source SCSS files
│   ├── border-radii/                   # Border radius system definition
│   ├── color-system/                   # Color system definition
│   ├── elevation/                      # Elevation system definition
│   ├── functions/                      # SCSS utility functions
│   ├── mixins/                         # Reusable SCSS mixins
│   ├── motion/                         # Motion system definition
│   ├── spacing/                        # Spacing system definition
│   ├── styles/                         # Base styles
│   ├── typography/                     # Typography system definition
│   └── components/                     # Component definitions consumed by themes
│       └── [component]/                # Individual component directories
│           ├── _index.scss             # Component entry point with mixin and dependencies
│           ├── _variables.scss         # Component variables set to null (themes provide values)
│           ├── _layout.scss            # Structural styles without values (skeleton definitions)
│           └── _theme.scss             # Visual style patterns without values (theme templates)
│   ├── all.scss                        # Main entry point
│   ├── _variables.scss                 # Design system foundation variables
└── package.json                        # Package-specific scripts
```

**Core Package Purpose:**

- Contains design system modules that all themes consume and override
- Defines component structure and patterns without specific values
- Variables in `_variables.scss` are set to `null` - themes provide actual values
- Layout and theme files contain style definitions without values (templates for themes)

### Package Structure for (utils) package.

```
packages/utils/
├── dist/                               # Compiled CSS output
│   ├── meta/                           # Generated variables metadata from npm run docs
│   ├── all.css                         # Main compiled CSS
│   └── all.scss                        # Main compiled SCSS
├── docs/                               # Generated documentation from npm run docs
├── scss/                               # Source SCSS files
│   ├── all.scss                        # Main entry point
│   ├── _variables.scss                 # Theme variables
│   └── [utility]/                      # Utility folder (e.g. background)
│       ├── _index.import.scss          # Utility entry point with mixins
│       ├── [utility-variants].scss     # Utility variants (e.g. background-color, background-position)
└── package.json                        # Package-specific scripts
```

**Utils Package Purpose:**

- Generates utility classes for layout and page development without writing custom CSS
- Provides atomic CSS classes with consistent naming convention (`k-`)
- Enables rapid prototyping and layout construction using predefined utility classes
- Covers spacing, display, positioning, sizing, colors, and other common CSS properties
- Follows utility-first approach: `k-d-grid`, `k-rounded-md`, `k-grid-cols-3`, etc.
- Distributed as standalone package separate from theme packages

### Package Structure for (html) package.

```
packages/html/
├── dist/                           # Compiled spec/tests/templates output
│   └── meta/                       # Generated variables metadata from npm run docs
├── src/                            # Source TypeScript/React files
│   ├── index.ts                    # Main entry point
│   ├── utils/                      # Utility functions and helpers
│   └── [component]/                # Component specifications and tests
│       ├── [component].spec.tsx    # Component specification defining structure
│       ├── index.ts                # Component entry point
│       ├── templates/              # Reusable component templates
│       │   └── [template].tsx      # Template implementations
│       └── tests/                  # Test cases for visual regression
│           └── [test-case].tsx     # Individual test scenarios
├── scripts/                        # Build and utility scripts
├── shared/                         # Shared assets and configurations
├── misc/                           # Miscellaneous build configurations
└── package.json                    # Package-specific scripts
```

**Html Package Purpose:**

- Contains React component specifications for all 80+ UI components used to create templates and tests
- Templates serve as reusable blocks for component rendering
- Tests provide entry points for visual regression testing and screenshot generation
- Specifications define the structure variants, options and states of each component
- Enables consistent components and testing across all themes


## Commands and Scripts

```bash
# Setup
npm ci

# Core development cycle
npm run sass           # Compile themes → packages/*/dist/all.css
npm start              # Dev server on localhost:3000
npm run docs           # Generate SassDoc documentation
npm run lint           # Run all linters (scripts + styles)

# Individual linting
npm run lint:scripts   # ESLint for JavaScript/TypeScript files
npm run lint:styles    # Stylelint for SCSS files

# Testing
npm run test:units     # Run Jest tests (requires docs)
npm run test:units:watch  # Run Jest tests in watch mode
npm run test:integrations  # Test bundler compatibility
npm run test:create-screenshots  # Generate visual regression tests
npm run test:contrast  # Run accessibility contrast tests

# Advanced builds
npm run sass:dist      # Compile all swatches → packages/*/dist/{swatch}.css/scss
npm run docs:check     # Check documentation consistency

# Build system
npm run build          # Build HTML components
npm run build:tests    # Build HTML test components

# Cleanup
npm run clean:dist     # Remove all dist folders
npm run clean:tests    # Clean up test result files
npm run clean          # Full cleanup (includes node_modules)
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

**Component Specifications:**

- Define component variants, options, and states in `.spec.tsx` files
- Use descriptive naming for component variations
- Add component props and expected structure
- Include all possible component states and configurations

**Templates:**

- Create reusable component templates in `templates/` directory
- Use semantic naming that reflects the template purpose
- Keep templates focused on specific use cases
- Export templates from component index files

**Tests:**

- Create individual test scenarios in `tests/` directory
- Name test files descriptively to reflect what they test
- Include edge cases and different component states
- Focus on visual variations that need regression testing

### Component Development Pattern

**Core Package Components:**

1. **Design system foundation** - Define base patterns and structure in `packages/core/scss/`
2. **Null variables** - Component variables set to `null` in `_variables.scss`
3. **Template definitions** - Layout and theme files contain style patterns without specific values
4. **Component skeleton** - Provides the structure that themes will flesh out

**Theme Package Components:**

1. **Variables first** - Define all customizable properties in `_variables.scss` (override core nulls)
2. **Layout separation** - Structure-only styles in `_layout.scss` (extend core patterns)
3. **Theme separation** - Color/visual styles in `_theme.scss` (apply theme-specific values)
4. **Dependencies** - Import all required components in `_index.scss`
5. **Mixins** - Use component mixins for organization and conditional output

**HTML Package Components:**

1. **Component specifications** - Define component structure, variants, and states in `.spec.tsx` files
2. **Reusable templates** - Create building blocks in `templates/` for common component patterns
3. **Test scenarios** - Build comprehensive test cases in `tests/` for visual regression testing
4. **TypeScript/React** - Use functional components with proper type definitions
5. **Export organization** - Structure exports through `index.ts` files for clean imports

**Inheritance Flow:** Core defines structure → Themes provide values and customizations → HTML specs enable testing and documentation

### Testing Requirements

- **Unit tests** - Required for variable customization validation
- **HTML tests** - Add test cases for new component features in `packages/html/src/[component]/tests/`
- **Visual tests** - Automatically generated from HTML tests
- **Integration tests** - Validate SCSS compilation with major bundlers
- **Linting** - Enforced on all commits via Husky + lint-staged
- **Accessibility tests** - Run automatically on default-ocean-blue-a11y swatch

## Common Issues

- **Unit tests failing**: Run `npm run docs` first to generate metadata
