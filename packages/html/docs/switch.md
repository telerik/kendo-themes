# Switch Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Switch component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-switch` | `role` = `switch` | Announces the switch role of the element. |
| `.k-switch` | `aria-label` / `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `.k-switch` | `aria-required` = `true` | Rendered only when the Switch is in a form. Required because <span role="switch"> does not support the native required attribute. |
| `.k-switch` | `aria-checked` | Announces the checked state of the Switch. |
| `.k-switch` | `aria-describedby` | Points to the hint or error message for the switch. |
| `.k-switch` | `aria-invalid` = `true` | Rendered only when the Switch is in a form and announces the invalid state. |
| `.k-switch:not(.k-disabled)` | `tabindex` = `0` | The element must be focusable. Disabled switches are removed from tab order. |
| `.k-switch.k-disabled` | `aria-disabled` = `true` | Rendered only when the Switch is disabled. |
| `.k-switch.k-readonly` | `aria-readonly` = `true` | Rendered only when the Switch is readonly. Readonly switches remain focusable but their value cannot be changed. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Switch component:

| Trigger | Behavior |
| --- | --- |
| `Space` | Toggles the checked state of the Switch. Works analogically to the checkbox. |
