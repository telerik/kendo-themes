## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-input-inner` | `role=spinbutton` | Announces the spin button capabilities of the NumericTextBox. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-required=true` | The attribute is rendered only when the NumericTextBox is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the input, or if the input is invalid, to the error message. This attribute should only be present when a hint is set or when the input is invalid. |
|  | `aria-valuemnow` | Announces the value for the component. |
|  | `aria-valuemin` | Announces the minimum value allowed for the component. |
|  | `aria-valuemax` | Announces the maximum value allowed for the component. |
|  | `aria-invalid=true` | The attribute is rendered only when the NumericTextBox is in a form and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the NumericTextBox is disabled. |
| `.k-spin-button>.k-button` | `role=button` or `nodeName=button` | Announces the spin button capabilities of the NumericTextBox. |
|  | `aria-label` | The button element must have discernible text. |
| `.k-numerictextbox.k-disabled .k-spin-button>.k-button` | `disabled` or `aria-disabled` | Attribute is rendered only when the picker is disabled. |

