# ariaSpec Reference

Complete reference for building `ariaSpec` rules on HTML spec components. The agent should read this file during Step 2 of the accessibility procedure.

## ariaSpec structure

```tsx
Component.ariaSpec = {
    selector: '.k-component',    // Root CSS selector for the component
    rules: [                      // Array of ARIA attribute rules
        {
            selector: string,     // CSS selector targeting the element
            attribute: string,    // ARIA attribute(s) and expected value(s)
            usage: string,        // Human-readable explanation
        },
    ]
};
```

## Rule format patterns

### Simple required attribute

```tsx
{ selector: '.k-button', attribute: 'role=button or nodeName=button', usage: 'The button role is implicit from the native <button> element.' }
```

### Conditional attribute (state-dependent)

Use parenthetical conditions to indicate when the attribute applies:

```tsx
{ selector: '.k-button', attribute: 'aria-pressed (when togglable)', usage: 'Indicates the pressed state of a toggle button.' }
{ selector: '.k-button', attribute: 'disabled (when disabled)', usage: 'Rendered when the button is disabled.' }
{ selector: '.k-combobox > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered when the combobox is in an invalid state.' }
```

### Alternative attributes (OR)

When multiple attributes satisfy the same requirement:

```tsx
{ selector: '.k-checkbox', attribute: 'role=checkbox or type=checkbox', usage: 'Announces the checkbox role.' }
{ selector: '.k-checkbox', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'Accessible name requirement.' }
{ selector: '.k-checkbox', attribute: 'disabled or aria-disabled=true (when disabled)', usage: 'For native use disabled, for custom use aria-disabled.' }
```

### ID-reference attributes

For attributes that reference another element's ID:

```tsx
{ selector: '.k-combobox > .k-input-inner', attribute: 'aria-controls=${id}-listbox (when open)', usage: 'Points to the listbox element when popup is open.' }
{ selector: '.k-tabstrip-content[aria-labelledby]', attribute: 'aria-labelledby', usage: 'Refers to the tab element that controls the panel.' }
```

### State-scoped selectors

When a rule only applies to elements in a specific state:

```tsx
{ selector: '.k-combobox.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'When combobox is disabled.' }
{ selector: '.k-tabstrip .k-tabstrip-item.k-active', attribute: 'aria-selected=true', usage: 'Announces selected tab.' }
{ selector: '.k-tabstrip .k-tabstrip-item.k-active[aria-controls]', attribute: 'aria-controls', usage: 'Only when tab controls a panel.' }
```

### Composite component selectors

For components embedded inside a parent:

```tsx
{ selector: '.k-combobox-popup .k-list-content, .k-combobox-popup .k-list-ul', attribute: 'role=listbox', usage: 'Popup list container.' }
{ selector: '.k-combobox-popup .k-list-item', attribute: 'role=option', usage: 'Each list item is an option.' }
```

## Complete examples

### Simple component — Button

```tsx
Button.ariaSpec = {
    selector: '.k-button',
    rules: [
        { selector: '.k-button', attribute: 'role=button or nodeName=button', usage: 'The button role is implicit from the native <button> element.' },
        { selector: '.k-button', attribute: 'aria-label (when icon-only)', usage: 'Required for icon-only buttons that have no visible text.' },
        { selector: '.k-button', attribute: 'aria-pressed (when togglable)', usage: 'Indicates the pressed state of a toggle button.' },
        { selector: '.k-button', attribute: 'disabled (when disabled)', usage: 'Rendered when the button is disabled.' },
    ]
};
```

### Form component — Checkbox

```tsx
Checkbox.ariaSpec = {
    selector: '.k-checkbox',
    rules: [
        { selector: '.k-checkbox', attribute: 'role=checkbox or type=checkbox', usage: 'Announces the checkbox role of the element.' },
        { selector: '.k-checkbox', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name.' },
        { selector: '.k-checkbox', attribute: 'aria-checked=true/false/mixed or checked', usage: 'For native checkboxes the browser handles state. aria-checked for custom implementations.' },
        { selector: '.k-checkbox', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message.' },
        { selector: '.k-checkbox', attribute: 'disabled or aria-disabled=true (when disabled)', usage: 'For native use disabled, for custom use aria-disabled.' },
        { selector: '.k-invalid, .ng-invalid', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered in a form when validation fails.' },
    ]
};
```

### Composite component — TabStrip

```tsx
TabStrip.ariaSpec = {
    selector: '.k-tabstrip',
    rules: [
        { selector: '.k-tabstrip-items', attribute: 'role=tablist', usage: 'Indicates the tablist role.' },
        { selector: '.k-tabstrip.k-tabstrip-left .k-tabstrip-items,.k-tabstrip.k-tabstrip-right .k-tabstrip-items', attribute: 'aria-orientation=vertical', usage: 'Vertical orientation.' },
        { selector: '.k-tabstrip-item', attribute: 'role=tab', usage: 'The tab li element.' },
        { selector: '.k-tabstrip .k-tabstrip-item.k-active', attribute: 'aria-selected=true', usage: 'The selected tab.' },
        { selector: '.k-tabstrip-content', attribute: 'role=tabpanel', usage: 'The content area.' },
        { selector: '.k-tabstrip .k-tabstrip-item.k-active[aria-controls]', attribute: 'aria-controls', usage: 'Relation between tab and panel.' },
        { selector: '.k-tabstrip-content[aria-labelledby]', attribute: 'aria-labelledby', usage: 'Refers to the controlling tab.' },
        { selector: '.k-tabstrip-scrollable .k-button', attribute: 'aria-hidden=true', usage: 'Scroll buttons hidden from AT.' },
    ]
};
```

### Rich composite — Combobox

```tsx
Combobox.ariaSpec = {
    selector: '.k-combobox',
    rules: [
        { selector: '.k-combobox > .k-input-inner', attribute: 'role=combobox', usage: 'Identifies the input as a combobox.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-haspopup=listbox', usage: 'Has a listbox popup.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-expanded', usage: 'Whether the popup is open.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-controls=${id}-listbox (when open)', usage: 'Points to the listbox.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-activedescendant (when open)', usage: 'Points to focused listbox item.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-autocomplete=list|both|inline (when has autocomplete)', usage: 'Autocomplete behavior.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Invalid state.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-busy=true (when loading)', usage: 'Loading state.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'Accessible name.' },
        { selector: '.k-combobox.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Disabled state.' },
        { selector: '.k-combobox .k-input-button', attribute: 'role=button or nodeName=button', usage: 'Dropdown toggle.' },
        { selector: '.k-combobox .k-input-button', attribute: 'aria-label', usage: 'Accessible name for toggle.' },
        { selector: '.k-combobox .k-input-button', attribute: 'tabindex=-1', usage: 'Not in tab order.' },
        { selector: '.k-combobox-popup .k-list-content, .k-combobox-popup .k-list-ul', attribute: 'role=listbox', usage: 'Popup list container.' },
        { selector: '.k-combobox-popup .k-list-item', attribute: 'role=option', usage: 'Each item is an option.' },
        { selector: '.k-combobox-popup .k-list-item', attribute: 'aria-selected (when selectable)', usage: 'Selected state.' },
        { selector: '.k-combobox-popup .k-no-data', attribute: 'aria-live=polite', usage: 'Announces no-data.' },
    ]
};
```

## TSX attribute patterns

### Import `nextId` for dynamic IDs

```tsx
import { nextId } from '../../misc';
```

### Cross-referenced IDs (must use shared variable)

```tsx
// ✅ GOOD — same variable ensures IDs match
const panelId = nextId('tabpanel');
const tabId = nextId('tab');
<li role="tab" id={tabId} aria-controls={panelId}>Tab</li>
<div role="tabpanel" id={panelId} aria-labelledby={tabId}>Content</div>
```

### Conditional attributes

```tsx
// Boolean toggle
aria-expanded={opened ? 'true' : 'false'}

// Present only when truthy (omit when false)
aria-disabled={disabled ? 'true' : undefined}

// Spread for complex conditions
{...(loading && { 'aria-busy': 'true' })}

// Controls reference only when open
aria-controls={opened ? `${id}-listbox` : undefined}
```

### Icon-only accessible name

```tsx
<Button icon="close" aria-label="Close dialog" />
```

## Template coverage checklist

Ensure templates exist for these states (create new templates if missing):

| State | Template purpose | Typical rules covered |
|-------|-----------------|----------------------|
| Default | Base rendering | `role`, `aria-label`, structural attributes |
| Disabled | `disabled`/`aria-disabled` | `disabled`, `aria-disabled=true` |
| Selected | `aria-selected`, `aria-pressed` | Selection-related rules |
| Expanded/Open | `aria-expanded`, `aria-controls` | Popup/dropdown rules |
| Focused | `tabindex`, `aria-activedescendant` | Focus management rules |
| Invalid | `aria-invalid` | Validation rules |
| Loading | `aria-busy` | Loading state rules |
| Icon-only | `aria-label` | Accessible name for icon-only variants |
