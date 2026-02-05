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

## Accessibility Requirements

All components must be WCAG 2.2 Level AA compliant. ARIA attributes are integral to component specs.

### ARIA Integration

- **Spec files**: Check `aria/[component]_aria.md` for component-specific accessibility requirements
- **Apply attributes**: Add ARIA attributes directly in `.spec.tsx` and `templates/*.tsx` files
- **Validation**: Run both ARIA and WCAG tests to verify compliance
- **Prompt reference**: See `${accessibility.prompt.md}` for detailed patterns

### Two-Level Validation

| Test | Command | Purpose |
|------|---------|--------|
| **ARIA** | `npm run test:aria [component]` | Validates against custom rules in `aria/*.md` specs |
| **WCAG** | `npm run test:wcag [component]` | Validates against WAI-ARIA standards using axe-core |

### Key Rules

1. **Attribute placement**: Always place ARIA attributes after `className`
2. **Semantic HTML**: Prefer native elements (`<button>`) over roles (`role="button"`)
3. **Dynamic IDs**: Use template strings for related IDs (`${id}-popup`, `${id}-listbox`)
4. **State attributes**: Use conditional rendering for state-dependent attributes
5. **Icon buttons**: Always provide `aria-label` for icon-only buttons
6. **Full coverage**: Every ARIA spec rule must match rendered HTML

### Known Exceptions

Some WCAG violations are beyond the scope of theme/HTML changes and should be noted but accepted:

- **Target Size (2.5.8)**: Touch target size requirements are controlled by product implementations, not theme styles
- **Page-level violations**: Document structure issues (e.g., missing `<title>`, language) are test harness artifacts

These violations should be documented in commit messages but do not block component completion.

### Rule Coverage

If an ARIA spec rule doesn't match any rendered HTML:

1. **Check if spec is outdated** — update selector to match current rendering
2. **Add missing template** — create template for the scenario (disabled, expanded, etc.)
3. **Export from index.ts** — so consuming products can import the scenario

### Example Pattern

```tsx
// Component with accessibility attributes
<div
    className="k-dialog"
    role="dialog"
    aria-modal={modal ? 'true' : undefined}
    aria-labelledby={`${id}-title`}
>
    <div id={`${id}-title`} className="k-dialog-title">{title}</div>
</div>
```

### Accessibility Workflow

When applying ARIA attributes to a component:

1. **Edit source files**: Modify `.spec.tsx` and `templates/*.tsx` files
2. **Regenerate test HTML**: `node scripts/render-test-pages.mjs [component]` (faster than full rebuild)
3. **Validate ARIA**: `npm run test:aria [component]`
4. **Validate WCAG**: `npm run test:wcag [component]`
5. **Type check**: `cd packages/html && npm run typecheck`
6. **Commit**: Include source changes + generated test HTML files

### Accessibility Commands

```bash
# Fast test regeneration for specific component (recommended)
node scripts/render-test-pages.mjs [component]

# Validation commands
npm run test:aria [component]   # Validate against aria/*.md spec rules
npm run test:wcag [component]   # Validate against WAI-ARIA via axe-core
npm run test:a11y               # Run both ARIA + WCAG + contrast tests

# Full rebuild (slower, use only when needed)
npm run build:tests             # Rebuild all component tests
```

## Related Documentation

- Root instructions: `../../.github/copilot-instructions.md`
- Package README: `../README.md`
- Accessibility prompt: `../../.github/prompts/accessibility.prompt.md`

