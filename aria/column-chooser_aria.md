## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### The ColumnChooser Button

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-grid-column-chooser .k-button` | `has-popup=dialog` | Specifies that the button opens a dialog. |
|  | `aria-expanded=true/false` | Announces the current open state of the popup. |
|  | `aria-controls=.k-animation-container id` | Points to the popup that the button toggles. |

### The ColumnChooser Columns List

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-column-list` | `role=listbox` | Sets the listbox role of the list of columns wrapper. |
|  | `aria-multiselectable=true` | Specifies that the list is multiselectable. |
| `.k-column-list .k-column-list-item` | `role=option` | Sets the option role of the list item. |
|  | `aria-checked=true/false` | Sets the checked state of list item. |
|  | `tabindex=0/-1` | Sets the tabindex depending on the item's focused state. |
| `.k-column-list-item .k-checkbox` | `tabindex=-1` | Removes the default focus behavior of the checkbox. |
|  | `aria-hidden=true` | Hides the checkbox from the assistive technologies, as its accessibility is implemented by the item wrapper. |


Disregard the AXE nested interactive rule as it lacks precise definition and does not account for specific use-cases individually. The current ColumnChooser specification does not violate any explicit WCAG success criteria, allowing us to safely ignore the newly introduced AXE interpretation.

