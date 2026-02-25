## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `*:not(.k-chip-list) > .k-chip` | `role=button` | Announces that a chip is an optional inner component within the Chip list. |
| `*:not(.k-chip-list) > .k-chip.k-selected` | `aria-pressed=true` | Announces that the Chip has been selected. |
| `*:not(.k-chip-list) > .k-chip:not(.k-selected)` | `aria-pressed=false` | Announces that the Chip has not benn selected. |

