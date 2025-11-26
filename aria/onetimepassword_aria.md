## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


No role attribute is implemented as the `html input type="text"` element is sufficient for defining the purpose of the component.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-otp` | `role=group` | Sets the proper role for the OTP. |
| `.k-otp>input` | `type=hidden` | The hidden input holding the OTP inputs value. |
|  | `aria-hidden=true` | Hides the hidden input from assistive technologies. |
| `.k-otp-input .k-input-inner` | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-required=true` | The attribute is rendered only when the OTP is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the input, or if the input is invalid, to the error message. This attribute should only be present when a hint is set or when the input is invalid. |
|  | `autocomplete=off` | Sets the default autocomplete for the input. |
| `.k-invalid .k-input-inner,.ng-invalid .k-input-inner` | `aria-invalid=true` | The attribute is rendered only when the OTP is in a form and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the OTP is disabled. |

