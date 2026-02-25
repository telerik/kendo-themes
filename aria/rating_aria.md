## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-rating` | `role=slider` | Announces the `slider` role of the Rating element. |
|  | `aria-label` or `aria-labelledby` or `title` | The Rating needs an accessible name to be assigned to it. |
|  | `aria-valuenow` | Specifies the currently selected value in the Rating. |
|  | `aria-valuemin` | Specifies the minimum available value in the Rating. |
|  | `aria-valuemax` | Specifies the maximum available value in the Rating. |
| `.k-rating:not(.k-disabled)` | `tabindex=0` | The element must be focusable. Disabled ratings are removed from tab order. |
| `.k-rating.k-disabled` | `aria-disabled=true` | The attribute is rendered only when the Rating is disabled. |
| `.k-rating.k-readonly` | `aria-readonly=true` | The attribute is rendered only when the Rating is readonly. Readonly ratings remain focusable but their value cannot be changed. |
