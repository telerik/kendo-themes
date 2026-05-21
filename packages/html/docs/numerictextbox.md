# Numerictextbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Numerictextbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-numerictextbox > .k-input-inner` | `role=spinbutton` | Announces the spin button capabilities of the NumericTextBox. |
| `.k-numerictextbox > .k-input-inner` | `label for or aria-label or aria-labelledby (when has accessible name)` | The input requires an accessible name (provided by consuming app). |
| `.k-numerictextbox > .k-input-inner` | `aria-valuenow (when has value)` | Announces the current value of the component. |
| `.k-numerictextbox > .k-input-inner` | `aria-valuemin (when has min)` | Announces the minimum allowed value. |
| `.k-numerictextbox > .k-input-inner` | `aria-valuemax (when has max)` | Announces the maximum allowed value. |
| `.k-numerictextbox > .k-input-inner` | `aria-invalid=true (when invalid)` | Rendered when the NumericTextBox is in an invalid state. |
| `.k-numerictextbox > .k-input-inner` | `aria-describedby (when has hint or error)` | Points to the hint or error message. |
| `.k-numerictextbox.k-disabled > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the NumericTextBox is disabled. |
| `.k-numerictextbox .k-spin-button > .k-button` | `role=button or nodeName=button` | Describes the role of the spin buttons. |
| `.k-numerictextbox .k-spin-button > .k-button` | `aria-label` | The button element requires discernible text. |
| `.k-numerictextbox.k-disabled .k-spin-button > .k-button` | `disabled=disabled or aria-disabled=true` | Rendered when the NumericTextBox is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Numerictextbox component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow` | Increases the value of the focused NumericTextBox with the step. |
| `Down Arrow` | Decreases the value of the focused NumericTextBox with the step. |
