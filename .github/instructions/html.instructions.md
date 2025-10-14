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
- Export from component's `index.ts`

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

