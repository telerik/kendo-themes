# CSS Specificity Agent

This folder contains the CSS Specificity Analysis Agent for Kendo UI theme system.

## Files

### Core Agent Files
- **`component-registry-builder.ts`** - TypeScript script to build the component registry from HTML package specs
- **`component-registry.json`** - Generated registry of all Kendo UI components and their class classifications
- **`proposed-components.json`** - Components that need to be added to the registry (append-only)
- **`tsconfig.json`** - TypeScript configuration for the registry builder

### Documentation
- **`CSS_SPECIFICITY_TODO.md`** - Comprehensive TODO list for all components across all themes

## Usage

### Build Component Registry
```bash
cd agents/css-specificity
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts
```

### View TODO List
```bash
# Open the TODO list to see all components that need analysis
open CSS_SPECIFICITY_TODO.md
```

## Agent Rules

The agent rules are located in `.cursor/rules/`:
- **`css-specificity-agent.mdc`** - Main agent instructions
- **`scss-specificity-fixes.mdc`** - SCSS-specific fixes and examples
- **`component-spec-updates.mdc`** - Component specification update patterns

## Workflow

1. **Check TODO list** - See which components need analysis
2. **Build registry** - Update component registry if needed
3. **Run tests** - Test specific components for specificity violations
4. **Apply fixes** - Use Cursor AI to fix violations
5. **Update progress** - Mark completed items in TODO list

## File Structure

```
agents/css-specificity/
├── component-registry-builder.ts    # Registry builder script
├── component-registry.json          # Generated component registry
├── proposed-components.json         # Components to add to registry
├── tsconfig.json                    # TypeScript config
├── CSS_SPECIFICITY_TODO.md          # Complete TODO list
└── README.md                        # This file
```

## Integration

This agent works with:
- **Cursor AI** - For intelligent analysis and fixes
- **Jest tests** - For specificity validation
- **SCSS files** - For applying `:where()` fixes
- **Component specs** - For updating variants and states
