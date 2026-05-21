# Checkbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Checkbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-checkbox` | `role=checkbox or type=checkbox` | Announces the checkbox role of the element. |
| `.k-checkbox` | `label for or aria-label or aria-labelledby (when has accessible name)` | The input requires an accessible name to which it will be assigned. |
| `.k-checkbox` | `aria-checked=true/false/mixed or checked` | For native checkboxes the checked state is handled by the browser. aria-checked is used for custom implementations. |
| `.k-checkbox` | `aria-describedby (when has hint or error)` | Points to the hint or error message for the checkbox. |
| `.k-checkbox` | `disabled or aria-disabled=true (when disabled)` | For native checkboxes use the HTML disabled attribute. aria-disabled for custom implementations. |
| `.k-invalid, .ng-invalid` | `aria-invalid=true (when invalid)` | Rendered only when the CheckBox is in a form and announces the invalid state. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Checkbox component:

| Shortcut | Behavior |
| --- | --- |
| `Space` | Toggles the checked state. Regardless of the indeterminate state, the key always considers the `Value` of the CheckBox. |
