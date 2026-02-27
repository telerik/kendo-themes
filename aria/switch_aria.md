## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-switch` | `role=switch` | Announces the switch role of the element. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-required=true` | The attribute is rendered only when the Switch is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the input, or if the input is invalid, to the error message. This attribute should only be present when a hint is set or when the input is invalid. |
|  | `aria-checked` | Announces the checked state of the Switch. |
|  | `aria-invalid=true` | The attribute is rendered only when the Switch is in a form and announces the invalid state of the component. |
| `.k-switch:not(.k-disabled)` | `tabindex=0` | The element must be focusable. Disabled switches are removed from tab order. |
| `.k-switch.k-disabled` | `aria-disabled=true` | The attribute is rendered only when the Switch is disabled. |
| `.k-switch.k-readonly` | `aria-readonly=true` | The attribute is rendered only when the Switch is readonly. Readonly switches remain focusable but their value cannot be changed. |

