# Accessibility Integration into TSX Specs

This document proposes a strategy for integrating accessibility requirements directly into TSX component specs, eliminating the need for separate `aria/*.md` files.

## Current State

- ARIA specs exist as separate markdown files in `aria/[component]_aria.md`
- TSX specs in `packages/html/src/[component]/` define component structure
- Manual process to apply ARIA attributes from specs to TSX files
- Two sources of truth that can diverge

## Proposed Integration Strategy

### Phase 1: TSDoc Documentation (Immediate)

Add TSDoc comments to document accessibility requirements directly in TSX props interfaces.

#### Example: Before

```tsx
export type KendoComboboxProps = KendoComboboxOptions & {
    id?: string;
    placeholder?: string;
    opened?: boolean;
};
```

#### Example: After

```tsx
export type KendoComboboxProps = KendoComboboxOptions & {
    /**
     * Unique identifier for the component. Used to generate related ARIA IDs.
     * @a11y Generates `${id}-listbox`, `${id}-popup` for aria-controls references
     */
    id?: string;

    /**
     * Placeholder text displayed when no value is selected.
     * @a11y Used in aria-label: "Combobox, {placeholder}"
     */
    placeholder?: string;

    /**
     * Whether the dropdown popup is open.
     * @a11y Controls aria-expanded="true/false" on input element
     */
    opened?: boolean;
};
```

### Phase 2: Accessibility Interface Types

Create shared interfaces for common accessibility patterns.

#### File: `packages/html/src/_types/accessibility.ts`

```tsx
/**
 * Base accessibility props for all interactive components.
 */
export interface AriaInteractiveProps {
    /** Accessible label for screen readers */
    'aria-label'?: string;
    /** ID of element that labels this component */
    'aria-labelledby'?: string;
    /** ID of element that describes this component */
    'aria-describedby'?: string;
}

/**
 * Accessibility props for expandable components (dropdowns, popups).
 */
export interface AriaExpandableProps extends AriaInteractiveProps {
    /** Whether the component's popup is expanded */
    'aria-expanded'?: 'true' | 'false';
    /** ID of the controlled popup element */
    'aria-controls'?: string;
    /** Type of popup (listbox, dialog, menu, etc.) */
    'aria-haspopup'?: 'listbox' | 'dialog' | 'menu' | 'tree' | 'grid' | 'true' | 'false';
}

/**
 * Accessibility props for form input components.
 */
export interface AriaInputProps extends AriaInteractiveProps {
    /** Whether the input value is invalid */
    'aria-invalid'?: 'true' | 'false' | 'grammar' | 'spelling';
    /** Whether the input is required */
    'aria-required'?: 'true' | 'false';
    /** Whether the input is read-only */
    'aria-readonly'?: 'true' | 'false';
    /** Whether the input is disabled */
    'aria-disabled'?: 'true' | 'false';
}

/**
 * Accessibility props for list-based selection components.
 */
export interface AriaListboxProps extends AriaInteractiveProps {
    /** ID of the currently focused/active option */
    'aria-activedescendant'?: string;
    /** Autocomplete behavior */
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    /** Whether multiple items can be selected */
    'aria-multiselectable'?: 'true' | 'false';
}

/**
 * Accessibility props for dialog components.
 */
export interface AriaDialogProps extends AriaInteractiveProps {
    /** Role of the dialog (dialog or alertdialog) */
    role?: 'dialog' | 'alertdialog';
    /** Whether the dialog is modal */
    'aria-modal'?: 'true' | 'false';
}
```

### Phase 3: Component Spec Integration

Update component specs to extend accessibility interfaces.

#### Example: Combobox

```tsx
import { AriaExpandableProps, AriaInputProps, AriaListboxProps } from '../_types/accessibility';

export type KendoComboboxProps = KendoComboboxOptions &
    AriaExpandableProps &
    AriaInputProps &
    AriaListboxProps & {
        id?: string;
        // ... other props
    };
```

### Phase 4: Validation Helpers

Create utilities to validate accessibility compliance at build time.

#### File: `packages/html/src/utils/a11y-validation.ts`

```tsx
/**
 * Validates that required ARIA attributes are present based on component state.
 */
export function validateAriaAttributes(
    element: string,
    props: Record<string, unknown>,
    rules: AriaValidationRule[]
): AriaValidationResult {
    // Implementation validates props against rules
}

/**
 * Rule definitions extracted from ARIA specs
 */
export const comboboxRules: AriaValidationRule[] = [
    { selector: '.k-input-inner', required: ['role=combobox', 'aria-haspopup=listbox'] },
    { selector: '.k-input-inner[opened]', required: ['aria-expanded=true', 'aria-controls'] },
    // ...
];
```

## Migration Path

### Step 1: Add TSDoc Comments (Now)
- Document existing ARIA requirements in TSDoc format
- Keep `aria/*.md` files as reference during migration
- No code changes required, just documentation

### Step 2: Create Accessibility Interfaces (Short-term)
- Define shared interfaces in `_types/accessibility.ts`
- Gradually update component specs to extend interfaces
- Interfaces become the source of truth

### Step 3: Automate Validation (Medium-term)
- Build-time validation of accessibility props
- Generate documentation from interfaces
- CI integration for compliance checks

### Step 4: Deprecate MD Files (Long-term)
- Once all specs use interfaces, remove `aria/*.md`
- Use TypeScript interfaces as single source of truth
- Copilot can infer patterns from existing components

## Benefits

1. **Single Source of Truth**: Accessibility requirements live with component code
2. **Type Safety**: TypeScript enforces correct attribute types
3. **IDE Support**: Autocomplete and inline docs for a11y props
4. **Copilot Integration**: LLM can learn patterns from existing code
5. **Validation**: Build-time checks prevent regressions
6. **Documentation**: TSDoc generates API docs automatically

## Copilot Prompt Patterns

After integration, developers can use prompts like:

```
"Add accessibility support to the new Rating component following the pattern in ComboBox"

"Ensure the TreeView component has proper ARIA for expandable items like PanelBar"

"Update the Dialog to support alertdialog role for confirmation dialogs"
```

Copilot can infer patterns from:
- Existing accessibility interfaces
- TSDoc comments on similar components
- Actual implementation in spec files
