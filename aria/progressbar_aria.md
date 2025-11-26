## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-progressbar` | `role=progressbar` | Sets the proper role for ProgressBar. |
|  | `aria-label` or `aria-labelledby` | The Progressbar needs an accessible name to be assigned to it. |
|  | `aria-valuenow` | Only present and required if the value is not indeterminate. Set to a decimal value between 0, or "aria-valuemin" if present, and "aria-valuemax" indicating the current value of the progress bar. |
|  | `aria-valuemin` | Set to a decimal value representing the minimum value, and less than "aria-valuemax". If not present, the default value is 0. |
|  | `aria-valuemax` | Set to a decimal value representing the maximum value, and greater than "aria-valuemin". If not present, the default value is 100. |

