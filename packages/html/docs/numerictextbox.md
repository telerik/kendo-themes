# Numerictextbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Numerictextbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-numerictextbox > .k-input-inner` | `role` = `spinbutton` | Announces the spin button capabilities of the NumericTextBox. |
| `.k-numerictextbox > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-numerictextbox > .k-input-inner` | `aria-valuenow` | Announces the current value of the component. |
| `.k-numerictextbox > .k-input-inner` | `aria-valuemin` | Announces the minimum allowed value. |
| `.k-numerictextbox > .k-input-inner` | `aria-valuemax` | Announces the maximum allowed value. |
| `.k-numerictextbox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the NumericTextBox is in an invalid state. |
| `.k-numerictextbox > .k-input-inner` | `aria-describedby` | Points to the hint or error message. |
| `.k-numerictextbox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the NumericTextBox is disabled. |
| `.k-numerictextbox .k-spin-button > .k-button` | `role` = `button` | Describes the role of the spin buttons. |
| `.k-numerictextbox .k-spin-button > .k-button` | `aria-label` | The button element requires discernible text. |
| `.k-numerictextbox.k-disabled .k-spin-button > .k-button` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the NumericTextBox is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Numerictextbox component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Increases the value of the focused NumericTextBox with the step. |
| `ArrowDown` | Decreases the value of the focused NumericTextBox with the step. |
