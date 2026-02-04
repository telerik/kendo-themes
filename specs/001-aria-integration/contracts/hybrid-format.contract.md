# Hybrid Documentation Format Contract

**Feature**: 001-aria-integration  
**Phase**: Phase 2  
**Contract Type**: Documentation Standard  
**Applies To**: Component specs and templates in packages/html

## Contract Overview

This contract defines the hybrid documentation format (TSDoc prose + structured JSDoc tags) for embedding accessibility knowledge within component implementations.

---

## Format Specification

### Structure

```typescript
/**
 * [Human-readable prose explaining accessibility pattern, rationale, and WCAG context]
 * 
 * @aria {selector} {attribute}={value} [{additional attributes}]
 * @wcag {criteria} {level} {description}
 * @selector {css-selector} [{usage-context}]
 * 
 * @example
 * {code-example}
 * 
 * @see {related-documentation-url}
 */
```

### Tag Definitions

| Tag | Required | Format | Purpose |
|-----|----------|--------|---------|
| `@aria` | Yes | `{selector} {attr}={value}` | Specifies ARIA attributes for selector |
| `@wcag` | Yes | `{criteria} {level} {desc}` | WCAG success criteria reference |
| `@selector` | Yes | `{css-selector}` | CSS selector for element |
| `@example` | Recommended | TypeScript/TSX code | Usage example |
| `@see` | Optional | URL or file reference | Additional documentation |

---

## Tag Syntax

### @aria Tag

**Syntax**: `@aria {selector} {attribute}={value} [{attribute2}={value2}...]`

**Examples**:
```typescript
/**
 * @aria .k-button role="button"
 * @aria .k-button[disabled] aria-disabled="true"
 * @aria .k-button.k-pressed aria-pressed="true|false"
 */
```

**For conditional attributes**:
```typescript
/**
 * @aria .k-dropdown-popup aria-expanded="true" (when open)
 * @aria .k-dropdown-popup aria-expanded="false" (when closed)
 */
```

**For alternatives** (native element OR ARIA role):
```typescript
/**
 * @aria .k-button role="button" | nodeName="button"
 */
```

---

### @wcag Tag

**Syntax**: `@wcag {criteria} {level} {description}`

**Format**:
- `{criteria}`: WCAG success criteria number (e.g., "4.1.2", "1.3.1")
- `{level}`: Compliance level ("A", "AA", "AAA")
- `{description}`: Brief description or success criteria name

**Examples**:
```typescript
/**
 * @wcag 4.1.2 A Name, Role, Value
 * @wcag 1.3.1 AA Info and Relationships
 * @wcag 2.4.7 AA Focus Visible
 */
```

---

### @selector Tag

**Syntax**: `@selector {css-selector} [{usage-context}]`

**Examples**:
```typescript
/**
 * @selector .k-button Base button element
 * @selector .k-button.k-pressed Toggle button in pressed state
 * @selector .k-button .k-icon Icon within button
 */
```

---

### @example Tag

**Syntax**: `@example` followed by code block

**Examples**:
```typescript
/**
 * @example
 * <button className="k-button" aria-pressed={pressed}>
 *   Toggle
 * </button>
 */

/**
 * @example
 * <button className="k-button k-icon-only" aria-label="Close">
 *   <span className="k-icon k-i-close"></span>
 * </button>
 */
```

---

## Complete Examples

### Simple Component (Button)

```typescript
import * as React from 'react';

/**
 * Accessible button component following WCAG 2.2 Level AA standards.
 * 
 * Buttons use native <button> elements which provide built-in keyboard
 * accessibility and screen reader support. For icon-only buttons, an
 * aria-label is required to provide accessible text for screen readers.
 * Toggle buttons use aria-pressed to indicate their state.
 * 
 * @aria .k-button role="button" | nodeName="button"
 * @aria .k-button.k-pressed aria-pressed="true|false"
 * @aria .k-button.k-icon-only aria-label="[descriptive text]"
 * @wcag 4.1.2 A Name, Role, Value
 * @wcag 2.1.1 A Keyboard
 * @selector .k-button Base button element
 * 
 * @example
 * // Standard button
 * <button className="k-button">
 *   Click Me
 * </button>
 * 
 * @example
 * // Toggle button with state
 * <button className="k-button k-pressed" aria-pressed="true">
 *   Active
 * </button>
 * 
 * @example
 * // Icon-only button requiring label
 * <button className="k-button k-icon-only" aria-label="Close">
 *   <span className="k-icon k-i-close"></span>
 * </button>
 * 
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
export const Button: React.FC<ButtonProps> = (props) => {
  // Implementation...
};
```

### Complex Component (Dropdown)

```typescript
/**
 * Accessible dropdown component with proper ARIA state management.
 * 
 * Dropdowns require careful state management to communicate their expanded/
 * collapsed state to assistive technologies. The aria-expanded attribute
 * indicates whether the popup is visible. aria-controls links the trigger
 * button to the popup element. aria-haspopup indicates the button triggers
 * a popup menu.
 * 
 * The popup itself requires role="listbox" and child options require
 * role="option" with aria-selected indicating the current selection.
 * 
 * @aria .k-dropdown-button role="combobox"
 * @aria .k-dropdown-button aria-expanded="true|false"
 * @aria .k-dropdown-button aria-controls="{id}-popup"
 * @aria .k-dropdown-button aria-haspopup="listbox"
 * @aria .k-dropdown-popup role="listbox"
 * @aria .k-dropdown-popup[id] id="{id}-popup"
 * @aria .k-list-item role="option"
 * @aria .k-list-item.k-selected aria-selected="true"
 * @wcag 4.1.2 A Name, Role, Value
 * @wcag 1.3.1 A Info and Relationships
 * @wcag 2.1.1 A Keyboard
 * @selector .k-dropdown-button Dropdown trigger button
 * @selector .k-dropdown-popup Dropdown popup container
 * @selector .k-list-item Option within dropdown
 * 
 * @example
 * // Collapsed dropdown
 * <div className="k-dropdown">
 *   <button
 *     className="k-dropdown-button"
 *     role="combobox"
 *     aria-expanded="false"
 *     aria-controls="dropdown-1-popup"
 *     aria-haspopup="listbox"
 *   >
 *     Select...
 *   </button>
 * </div>
 * 
 * @example
 * // Expanded dropdown with selected option
 * <div className="k-dropdown">
 *   <button
 *     className="k-dropdown-button"
 *     role="combobox"
 *     aria-expanded="true"
 *     aria-controls="dropdown-1-popup"
 *     aria-haspopup="listbox"
 *   >
 *     Option 1
 *   </button>
 *   <div
 *     id="dropdown-1-popup"
 *     className="k-dropdown-popup"
 *     role="listbox"
 *   >
 *     <div className="k-list-item k-selected" role="option" aria-selected="true">
 *       Option 1
 *     </div>
 *     <div className="k-list-item" role="option" aria-selected="false">
 *       Option 2
 *     </div>
 *   </div>
 * </div>
 * 
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 */
export const DropDownList: React.FC<DropDownListProps> = (props) => {
  // Implementation...
};
```

---

## AI Parsing Requirements

### Structured Tag Extraction

AI agents must be able to:

1. **Extract @aria tags**: Parse selector and attribute key-value pairs
2. **Extract @wcag tags**: Parse criteria, level, and description
3. **Extract @selector tags**: Parse CSS selector and context
4. **Recognize alternatives**: Parse "|" as OR condition
5. **Handle conditional attributes**: Parse "(when condition)" context

### Example Parsing Output

```typescript
// From button component documentation above
{
  component: "button",
  ariaTags: [
    {
      selector: ".k-button",
      attributes: [{ name: "role", value: "button" }],
      alternatives: [{ type: "nodeName", value: "button" }]
    },
    {
      selector: ".k-button.k-pressed",
      attributes: [{ name: "aria-pressed", value: "true|false" }],
      alternatives: []
    },
    {
      selector: ".k-button.k-icon-only",
      attributes: [{ name: "aria-label", value: "[descriptive text]" }],
      alternatives: []
    }
  ],
  wcagTags: [
    { criteria: "4.1.2", level: "A", description: "Name, Role, Value" },
    { criteria: "2.1.1", level: "A", description: "Keyboard" }
  ],
  selectorTags: [
    { selector: ".k-button", context: "Base button element" }
  ]
}
```

---

## Human Readability Requirements

### Prose Style Guidelines

1. **First paragraph**: High-level component accessibility summary
2. **Second+ paragraphs**: Detailed explanation of specific patterns and rationale
3. **Reference WCAG criteria** by name where helpful
4. **Explain "why"** not just "what" for each pattern
5. **Use active voice**: "Buttons use..." not "The button element uses..."

### Example Prose Structure

```typescript
/**
 * [SUMMARY: What component does and accessibility approach]
 * 
 * [DETAIL: Specific ARIA patterns and why they're needed]
 * 
 * [CONTEXT: When/where patterns apply, edge cases, special considerations]
 * 
 * @aria ...
 * @wcag ...
 */
```

---

## Migration Validation

### Completeness Check

For each rule in original `aria/*.md` file, verify:

1. ✓ Selector documented in @selector or @aria tag
2. ✓ Required attributes documented in @aria tag
3. ✓ Rationale explained in prose or @wcag description
4. ✓ WCAG criteria referenced if applicable

### Information Preservation

| Original aria/*.md | Hybrid Format Location |
|--------------------|------------------------|
| Selector column | @selector or @aria tag |
| Attribute column | @aria tag |
| Usage column | Prose paragraph + @wcag tag |
| Implicit WCAG criteria | @wcag tag (explicit) |

---

## Tooling Requirements

### TypeScript/ESLint Integration

- TSDoc comments recognized by TypeScript language service
- JSDoc tags parsed for IntelliSense suggestions
- No custom plugins required (standard JSDoc syntax)

### Documentation Generation

- SassDoc-style extraction for documentation sites
- JSON export for programmatic access
- Markdown rendering for component docs

---

**Format Version**: 1.0  
**Phase**: Phase 2 - Knowledge Migration  
**Status**: ✅ Specification Complete - Ready for Implementation