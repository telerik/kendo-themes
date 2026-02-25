## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-chip-list` | `role=listbox` | Announces the list role of the chip list. |
|  | `aria-label` or `aria-labelledby` | Adds label to the ChipList element. ListBox element requires an accessible name attached to it. |
|  | `aria-orientation=horizontal` | Specifies the horizontal orientation of the chiplist that gives context about the navigation shortcuts. |
|  | `aria-multiselectable=true` | Announces the multiple selection ability of the chiplist. Only when the selection mode is set to multiple. |
| `.k-chip` | `role=option` | Announces the chip is an option inner component of the chip list. |
| `.k-chip.k-selected` | `aria-selected=true` | Announces the chip is selected. |
| `.k-chip:not(.k-selected)` | `aria-selected=false` | Announces the chip is not selected. |
| `.k-chip:has(.k-i-x-circle),.k-chip:has(.k-svg-i-x-circle)` | `aria-keyshortcuts=Enter Delete` | Announces the Delete action along with the default Enter key used for selection/click action. |


When selection is disabled in the ChipList, it should not have its role set to `listbox`. Instead, the attribute should either be omitted, or its value should be set to `none`. In that case the `role` of the Chip elements should remain `button` as per the Chip component specification.

