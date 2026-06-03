# Checkbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Checkbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-checkbox` | `role` = `checkbox` | Announces the checkbox role of the element. For native checkboxes, type="checkbox" is used instead. |
| `.k-checkbox` | `aria-label` / `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `.k-checkbox` | `aria-checked` (or `checked` natively) = `true` / `false` / `mixed` | For native checkboxes the checked state is handled by the browser. aria-checked is used for custom implementations. |
| `.k-checkbox` | `aria-describedby` | Points to the hint or error message for the checkbox. |
| `.k-checkbox` | `aria-disabled` (or `disabled` natively) = `true` | For native checkboxes use the HTML disabled attribute. aria-disabled for custom implementations. |
| `.k-invalid, .ng-invalid` | `aria-invalid` = `true` | Rendered only when the CheckBox is in a form and announces the invalid state. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Checkbox component:

| Trigger | Behavior |
| --- | --- |
| `Space` | Toggles the checked state. Regardless of the indeterminate state, the key always considers the `Value` of the CheckBox. |
| `Shift + Tab` | Moves focus to the previous checkbox. |
| `ArrowDown or ArrowRight` | Moves focus to the next checkbox. |
