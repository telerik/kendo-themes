## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-switch` | `role=switch` | Announces the switch role of the element. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-required=true` | The attribute is rendered only when the Switch is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the input, or if the input is invalid, to the error message. This attribute should only be present when a hint is set or when the input is invalid. |
|  | `aria-checked` | Announces the checked state of the Switch. |
|  | `tabindex=0` | The element must be focusable. |
|  | `aria-invalid=true` | The attribute is rendered only when the Switch is in a form and announces the valid state of the component. |
| `.k-switch.k-disabled` | `aria-disabled=true` | The attribute is rendered only when the Switch is disabled. |

