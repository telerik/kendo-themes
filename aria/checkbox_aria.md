## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-checkbox` | `role=checkbox` or `type=checkbox` | Announces the `checkbox` role of the element. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
|  | `aria-required=true` | The attribute is rendered only when the CheckBox is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the checkbox, or if the value of the checkbox is invalid, to the error message. This attribute should only be present when a hint is set or when the checkbox value is invalid. |
|  | `aria-checked=true/false/mixed` or native checked state | For native `<input type="checkbox">` elements, the checked state is handled by the browser's built-in `.checked` property. The `aria-checked` attribute is only present when using custom checkbox implementations (non-native elements). |
|  | `disabled` or `aria-disabled=true` | For native `<input type="checkbox">` elements, use the HTML `disabled` attribute. The `aria-disabled` attribute is only present when using custom checkbox implementations. |
| `.k-invalid,.ng-invalid` | `aria-invalid=true` | The attribute is rendered only when the CheckBox is in a `form` HTML element and announces the invalid state of the component. |

## Notes

- **Native vs Custom Checkboxes**: When using native `<input type="checkbox">` elements, the browser automatically manages the checked/disabled states and ARIA semantics. Additional ARIA attributes are not required and may be redundant.
- **Form Context**: Attributes like `aria-required`, `aria-invalid`, and `aria-describedby` are contextual and should only be present when the checkbox is part of a form with validation/hints.
- **Labeling**: Native inputs wrapped in `<label>` elements or with a `<label for="id">` association satisfy the accessible name requirement without needing `aria-label`.
