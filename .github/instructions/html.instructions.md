---
applyTo: "packages/html/**"
---

# HTML Package

React component specifications and HTML templates for visual testing and documentation.

## Package Purpose

- **Component Specs** - Define structure, variants, and states for 80+ UI components
- **Templates** - Reusable React components for rendering
- **Tests** - Entry points for visual regression testing
- **Type Safety** - Full TypeScript support

**Tech Stack:** TypeScript, React, TSX, ESBuild, Jest

## Package Structure

```
packages/html/
├── src/
│   ├── index.ts                        # Main entry point
│   ├── utils/                          # Helper functions
│   └── [component]/                    # Component files
│       ├── [component].spec.tsx        # Component specification
│       ├── index.ts                    # Component exports
│       ├── templates/                  # Reusable templates
│       │   └── [template].tsx          # Template implementations
│       └── tests/                      # Visual test scenarios
│           └── [test-case].tsx         # Individual tests
├── dist/                               # Compiled output (ESM, CJS, types)
├── scripts/                            # Build utilities
└── assets/                             # Static assets
```

## Component File Pattern

### 1. Specification (`.spec.tsx`)

**Purpose**: Define all possible variants, states, and configurations for a component

**Key Responsibilities**:
- Define TypeScript interfaces for component props
- List all component variants and their options
- Specify default values and required properties
- Document expected HTML structure and class names

**Example Structure**:
```typescript
export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    themeColor?: 'base' | 'primary' | 'secondary';
    fillMode?: 'solid' | 'outline' | 'flat';
    size?: 'small' | 'medium' | 'large';
    rounded?: 'small' | 'medium' | 'large' | 'full';
    disabled?: boolean;
    children?: React.ReactNode;
}
```

### 2. Templates (`templates/` directory)

**Purpose**: Reusable React components representing common UI patterns

**Key Responsibilities**:
- Implement actual component rendering logic
- Accept props from specification interfaces
- Generate correct HTML structure with proper class names
- Follow BEM-like naming with `k-` prefix

**Naming Convention**:
- Use descriptive file names: `card-normal.tsx`, `card-horizontal.tsx`
- Prefer `[component]-normal.tsx` when the template represents the default rendering of a component; otherwise use a descriptive template name (e.g., `text-button.tsx`, `icon-button.tsx`)
- Add exports to component's `index.ts` for external package consumers (but don't import FROM index.ts within the package)

**Example**:
```typescript
import { Button } from "../button.spec";

export const IconButton = (props) => <Button icon="folder" {...props} children={undefined} />;

```

### 3. Tests (`tests/` directory)

**Purpose**: Visual test scenarios for component variations

**Key Responsibilities**:
- Create comprehensive test cases covering all component states
- Include edge cases and different configurations
- Generate HTML output for screenshot testing
- Test theme compatibility

**Naming Convention**: `[component]-[scenario].tsx`
- Examples: `button-solid.tsx`, `button-with-icon.tsx`

**Example**:
```typescript
import { Button } from '../../button.spec';

export default () => (
    <div id="test-area">
        <Button themeColor="primary" fillMode="solid">Primary</Button>
        <Button themeColor="primary" disabled>Disabled</Button>
    </div>
);
```

### 4. Index Files (`index.ts`)

**Purpose**: Central export point for component files

**Key Responsibilities**:
- Export component specifications
- Export all templates
- Export test utilities
- Maintain clean import paths
- **NOT for internal imports** - tests, demos, and templates should use direct file imports

**Internal Usage Rule**: Files within `packages/html/src/` should import directly from specific files, not from index files. Index files exist only to define the public API for external consumers.

## Coding Standards

### TypeScript
- Use explicit types, avoid `any`
- Export all interfaces
- Follow tsconfig strict mode

### React
- Functional components only
- Destructure props
- Use `{...other}` for HTML attributes

### Naming
- Components: PascalCase (`ButtonGroup`)
- Tests: kebab-case (`button-solid.tsx`)
- Specs: kebab-case (` button.spec.tsx`)
- CSS classes: BEM with `k-` prefix (`k-button`, `k-button-solid`)

## Development Workflow

The HTML package follows a modular architecture where components are built from discrete files:

1. **Spec files** (`.spec.tsx`) - Define component interfaces and props
2. **Template files** (`templates/*.tsx`) - Implement reusable UI patterns
3. **Test files** (`tests/*.tsx`) - Create visual test scenarios
4. **Index files** (`index.ts`) - Export public API for external consumers

**Internal Import Pattern**: Within the package, files import directly from specific files to avoid bundling unnecessary code. For example, a test file imports `from '../button.spec'` rather than `from '..'` to ensure only the needed code is included.

**External Import Pattern**: External consumers use the package via `import { Button } from '@progress/kendo-theme-html'`, which uses the index files.

This separation keeps bundle sizes minimal and enables tree-shaking for downstream consumers.

## Important Guidelines

⚠️ **Bundle Size Optimization**: Always import from specific component files, NOT from index files.

## Code Review Guidelines

When reviewing code changes in the HTML package, **always check imports** and report violations:

### Import Violations to Flag:
- ❌ `from '../../button'` or `from "../../button"` - missing file name (uses index)
- ❌ `from '../../button/'` or `from "../../button/"` - trailing slash (uses index)
- ❌ `from '../../button/index'` or `from "../../button/index"` - explicit index import
- ❌ `from '..'` or `from ".."` - parent directory (uses index)
- ❌ `from '../'` or `from "../"` - parent directory with trailing slash (uses index)
- ❌ `from '.'` or `from "."` - current directory (uses index)
- ❌ `from './'` or `from "./"` - current directory with trailing slash (uses index)
- ✅ `from '../../button/button.spec'` or `from "../../button/button.spec"` - correct specific file import
- ✅ `from '../wizard-steps'` or `from "../wizard-steps"` - correct direct file import (not a directory)

**Required Check**: For every import from `../../[component-name]` without a file path, verify that the imported path is:
1. A **specific file** (e.g., `button.spec`, `toolbar-popup.spec`)
2. NOT a **directory** that contains an index file

Report any violations with: "Bundle size issue: Import uses barrel file. Change `from '../../X'` to `from '../../X/X.spec'` or specific file."

## Build Commands

```bash
npm run build           # Build library (ESM + CJS)
npm run build:tests     # Build test HTML outputs
npm run typegen         # Generate TypeScript declarations
npm run typecheck       # Type check without emitting
npm test                # Run Jest tests
npm start               # Start dev server
```

## Related Documentation

- Root instructions: `../../.github/copilot-instructions.md`
- Package README: `../README.md`

