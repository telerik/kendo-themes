# Accessibility Annotation Reference

Reference for the JSDoc accessibility annotation system used in HTML package spec files.

## Overview

Accessibility documentation is embedded directly in component spec files as structured JSDoc tags. No separate data files, no static properties on components — the spec rendering IS the accessibility specification.

```
packages/html/src/[component]/[component].spec.tsx
```

## The two JSDoc blocks

Every component has (or should have) two JSDoc blocks related to accessibility:

### 1. Component block (before `export const X: KendoComponent`)

Contains `@aria` and `@ux` tags:

```tsx
/**
 * @aria {role="combobox"} Announces the input as a combobox widget.
 * @aria {aria-haspopup="listbox"} Indicates a listbox popup is available.
 * @aria {aria-expanded="true"|"false"} Announces popup visibility state.
 * @aria {aria-label|aria-labelledby} Required accessible name.
 * @aria {aria-disabled="true"} Rendered only when the component is disabled.
 * @ux {Popup} Opens on focus or when the user types.
 */
export const Autocomplete: KendoComponent<...>
```

### 2. Bottom block (before `export default`)

Contains `@keyboard` and `@see` tags:

```tsx
/**
 * @keyboard {Alt + ArrowDown} Opens the suggestion popup.
 * @keyboard {Escape} Closes the popup.
 * @keyboard {Enter} Selects the focused suggestion.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ WAI-ARIA Combobox Pattern
 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — combobox must have accessible name
 */

export default Autocomplete;
```

---

## Tag format

All tags use `{label} description` — curly braces contain the machine-readable value, space-separated description follows:

```
@aria {aria-pressed="true"|"false"} Indicates the pressed state of a toggle button.
@keyboard {Shift + Tab} Moves focus to the previous element.
@ux {Fixed position} Stays visible while the user scrolls.
@see https://url Display text for the link
```

---

## `@aria` patterns

### Always-present attribute
```tsx
@aria {role="listbox"} Specifies the role of the popup list.
@aria {tabindex="0"} The element must be focusable.
```

### Alternative attributes (use `|`)
```tsx
@aria {aria-label|aria-labelledby} Required accessible name.
@aria {aria-label|aria-labelledby|title} Accessible name for the Rating element.
```

### State-dependent (include value context)
```tsx
@aria {aria-expanded="true"|"false"} Announces popup visibility to assistive technologies.
@aria {aria-disabled="true"} Rendered only when the component is disabled.
@aria {aria-selected="true"} Set on the currently selected item(s).
@aria {aria-checked="true"|"false"|"mixed"} Announces the checked state.
```

### Implicit from native element
```tsx
@aria {role="button"} Implicit from the native <button> element; no explicit role needed.
@aria {role="navigation"} Implicit from the native <nav> element.
```

### ID references
```tsx
@aria {aria-controls} Points to the listbox id when popup is open.
@aria {aria-activedescendant} Points to the focused item when popup is open.
@aria {aria-describedby} Points to the hint or error message element.
@aria {id} Referenced by aria-controls on the input.
```

### Decorative elements
```tsx
@aria {aria-hidden="true"} The icon is decorative; hidden from assistive technologies.
@aria {focusable="false"} Prevents the SVG from receiving focus in IE/Edge.
```

---

## `@keyboard` trigger format

Uses `KeyboardEvent.key` names:

| Pattern | Example |
|---------|---------|
| Single key | `{Enter}`, `{Space}`, `{Escape}`, `{Tab}` |
| Arrow key | `{ArrowDown}`, `{ArrowUp}`, `{ArrowLeft}`, `{ArrowRight}` |
| Combination | `{Shift + Tab}`, `{Alt + ArrowDown}`, `{Control + Space}` |
| Alternatives | `{Enter or Space}`, `{ArrowUp or ArrowLeft}` |
| Platform variants | `{Control/Cmd(Mac) + Home}`, `{Alt/Opt(Mac) + ArrowDown}` |
| Typing | `{Typing in the input}` |

---

## `@see` WCAG Understanding URLs

```
https://www.w3.org/WAI/WCAG22/Understanding/{slug}.html
```

| Criterion | Slug | Common use |
|-----------|------|-----------|
| 1.1.1 Non-text Content | `non-text-content` | Images, icons |
| 1.3.1 Info and Relationships | `info-and-relationships` | Form labels |
| 1.4.3 Contrast (Minimum) | `contrast-minimum` | Color |
| 2.1.1 Keyboard | `keyboard` | Keyboard access |
| 2.4.3 Focus Order | `focus-order` | Tab sequence |
| 4.1.2 Name, Role, Value | `name-role-value` | Interactive elements |
| 4.1.3 Status Messages | `status-messages` | Live regions |

Format: `@see https://www.w3.org/WAI/WCAG22/Understanding/{slug}.html WCAG {N.N.N} {Name} — {component context}`

---

## Sub-component annotations

Complex components split across multiple spec files. Each spec gets its own `@aria` block covering only what it renders.

**Example: TabStrip**

`tabstrip.spec.tsx`:
```tsx
/**
 * @aria {role="tablist"} Container for tab elements.
 * @aria {aria-orientation="vertical"} Set on the tablist when the tabstrip is vertical.
 */
export const TabStrip: KendoComponent<...>
```

`tabstrip-item.spec.tsx`:
```tsx
/**
 * @aria {role="tab"} Specifies the role for each tab item.
 * @aria {aria-selected="true"|"false"} Indicates the active tab.
 * @aria {aria-controls} Points to the tabpanel id for this tab.
 */
export const TabStripItem: KendoComponent<...>
```

`tabstrip-content.spec.tsx`:
```tsx
/**
 * @aria {role="tabpanel"} Container for the content of each tab.
 * @aria {aria-labelledby} Points to the tab that controls this panel.
 * @aria {tabindex="0"} Keeps the tabpanel in the page tab sequence.
 */
export const TabStripContent: KendoComponent<...>
```

---

## Full example: Button

```tsx
/**
 * @aria {role="button"} Implicit from the native <button> element; no explicit role needed.
 * @aria {aria-label} Required on icon-only buttons; pass via HTML attributes.
 * @aria {disabled} Native boolean attribute; removes from tab sequence and marks unavailable.
 * @aria {aria-pressed="true"|"false"} Indicates the pressed state of a toggle button.
 * @aria {aria-disabled="true"} Announces as disabled while keeping the button focusable.
 */
export const Button: KendoComponent<...>

Button.states = states;
Button.options = options;
Button.folderName = BUTTON_FOLDER_NAME;

/**
 * @keyboard {Enter or Space} Triggers a click action on the Button.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/button/ WAI-ARIA Authoring Practices: Button Pattern
 */

export default Button;
```
