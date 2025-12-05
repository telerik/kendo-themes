## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-radio-list` | `role=radiogroup` | Announces the `radiogroup` role of the element. |
| `.k-radio-item` | `role=none` | Due to issues with nested items, forces a no-role state. |
| `.k-radio` | `readonly` or `aria-readonly` | The attribute is rendered only when the radio button is read-only. |
|  | `aria-invalid=true` | The attribute is rendered only when the radio button is in a `form` HTML element and announces the invalid state of the component. |
| `.k-disabled > .k-radio` | `disabled` or `aria-disabled` | The attribute is rendered only when the radio button is disabled. |

