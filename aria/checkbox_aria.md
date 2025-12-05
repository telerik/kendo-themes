## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-checkbox` | `role=checkbox` or `type=checkbox` | Announces the `checkbox` role of the element. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
|  | `aria-required=true` | The attribute is rendered only when the CheckBox is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the checkbox, or if the value of the checkbox is invalid, to the error message. This attribute should only be present when a hint is set or when the checkbox value is invalid. |
|  | `aria-checked=true` or `checked=checked` | Announces the checked state of the CheckBox. |
|  | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the CheckBox is disabled. |
| `.k-invalid,.ng-invalid` | `aria-invalid=true` | The attribute is rendered only when the CheckBox is in a `form` HTML element and announces the invalid state of the component. |

