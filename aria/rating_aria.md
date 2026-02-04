## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-rating` | `role=slider` | Announces the `slider` role of the Rating element. |
|  | `aria-label` or `aria-labelledby` or `title` | The Rating needs an accessible name to be assigned to it. |
|  | `tabindex=0` | The element must be focusable. |
|  | `aria-valuenow` | Specifies the currently selected value in the Rating. |
|  | `aria-valuemin` | Specifies the minimum available value in the Rating. |
|  | `aria-valuemax` | Specifies the maximum available value in the Rating. |

