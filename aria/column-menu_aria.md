## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### The ColumnMenu Button/Header

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-grid-column-menu` | `role=button` | Specifies that column menu element has role button. |
|  | `aria-haspopup=dialog` | Specifies that the button opens a dialog. |
|  | `aria-expanded=true/false` | Announces the current state of the popup. |
|  | `aria-controls=.k-popup.k-grid-columnmenu-popup id` | Points to the popup that the button toggles. |
| `.k-header:has(.k-grid-column-menu)` | `aria-haspopup=dialog` | Specifies that the header cell opens a dialog. |
|  | `aria-expanded=true/false` | Announces the current state of the popup. |
|  | `aria-controls=.k-popup.k-grid-columnmenu-popup id` | Points to the popup that the button toggles. |
|  | `aria-keyshortcuts=Alt + ArrowDown` | Announces the available column-menu shortcut. |

### The ColumnMenu Popup

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-popup.k-grid-columnmenu-popup` | `id` | Unique and deterministic id linked to the button or header cell "aria-controls" attribute. |
|  | `role=dialog` | Sets the dialog role of the popup. |
|  | `aria-label` | Contains descriptive information about the column menu purpose - e.g. "Column Title Column Menu" |

### ColumnMenu Popup ExpandableContent

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-columnmenu-item` | `role=button` | Sets column menu item role to button |
|  | `tabindex=0` | Sets column menu item tabindex |
| `.k-expander .k-columnmenu-item` | `aria-expanded=true/false` | Sets the expanded state of an expandable item |
|  | `aria-controls` | Points to id attribute of the content whose visibility the expandable item controls. |
| `.k-expander .k-columnmenu-item-content` | `id` | Unique and deterministic id linked to the "aria-controls" attribute of the corresponding expandable item. |
| `.k-column-list` | `role=listbox` | Sets the listbox role of the list of columns wrapper. |
|  | `aria-multiselectable=true` | Specifies that the list is multiselectable. |
| `.k-column-list .k-column-list-item` | `role=option` | Sets the option role of the list item. |
|  | `aria-checked=true/false` | Sets the checked state of list item. |
|  | `tabindex=0/-1` | Sets the tabindex depending on the item's focused state. |
| `.k-column-list-item .k-checkbox` | `tabindex=-1` | Removes the default focus behavior of the checkbox. |
|  | `aria-hidden=true` | Hides the checkbox from the assistive technologies, as its accessibility is implemented by the item wrapper. |

### Other ColumnMenu Popup Content


All internal elements and components follow their respective specification rules, and additionally have suitable "aria-label" attributes, describing what menu they are part of.

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

