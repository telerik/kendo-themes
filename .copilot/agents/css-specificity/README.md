# CSS Specificity Agent

An intelligent CSS Specificity Analysis Agent for the Kendo UI theme system. This agent analyzes CSS specificity violations and creates smart fixes using `:where()` wrapping.

## Files

- `instructions.md` - Complete agent instructions and decision-making framework
- `config.json` - Agent configuration and capabilities
- `component-registry-builder.ts` - Tool to build the component registry from HTML package specs
- `component-registry.json` - Generated registry of official Kendo components (auto-updated)
- `README.md` - This documentation

## Purpose

Automatically analyze and fix CSS specificity violations in Kendo UI themes by:
- Identifying components with specificity issues
- Classifying CSS classes as official framework classes vs utility classes
- Applying intelligent `:where()` wrapping to reduce specificity
- Updating component specifications when needed

## Usage

### GitHub Copilot
```
@workspace /fix-specificity button default
```

### Direct Execution
```bash
# 1. First, build/update the component registry (if specs changed)
cd agents/css-specificity
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts

# 2. Run component tests to identify violations
npx jest --config ../../units/jest.config.cjs ../../units/default/button.test.ts --verbose=false
```

## Tools Included

### Component Registry Builder
The agent includes a built-in component registry builder that:
- Analyzes HTML package exports to discover official components
- Extracts className properties from component specs
- Generates a classification registry for CSS class analysis
- Updates automatically when component specs change

**Usage**: The agent will automatically rebuild the registry when needed, or you can manually run:
```bash
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts
```

## Dependencies

- **Jest**: For running CSS specificity tests
- **TypeScript**: For component spec analysis
- **Node.js**: For running the component registry builder

## Key Features

- **Intelligent Classification**: Uses AI reasoning to distinguish framework classes from utilities
- **Strategic Fixes**: Applies fixes at optimal SCSS nesting levels
- **Spec Updates**: Automatically updates component specifications for missing states/variants
- **Backward Compatibility**: Preserves existing functionality while reducing specificity

## Output

- Modified SCSS files with `:where()` wrapping applied to utility classes
- Updated component specifications with missing states/variants
- Detailed analysis reports and fix recommendations
