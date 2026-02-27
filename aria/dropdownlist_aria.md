## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### DropDownList Wrapping Element


The following table summarizes the selectors and attributes supported by the DropDownList wrapper element:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-dropdownlist:not(.k-views-dropdown)` | `role=combobox` | Announces the button drop-down element. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-haspopup=listbox` | Indicates the presence of a listbox popup. |
|  | `aria-expanded=true/false` | Announces the visibility state of the popup. |
| `.k-dropdownlist:not(.k-views-dropdown)[aria-expanded="true"]` | `aria-controls=.k-list-ul id` | Points to the listbox element when the popup is open and the element exists. Signifies that the `combobox` controls the `listbox` element. |
|  | `aria-describedby=.k-input-inner id` | Announces the selected value of the drop-down. |
| `.k-dropdownlist:not(.k-views-dropdown)[aria-expanded="true"][aria-activedescendant]` | `aria-activedescendant=.k-list-item.k-focus id` | Points to the focused item in the popup. The focused item is changed through keyboard navigation. If the popup is not visible or no item is focused, the attribute must be removed. |
|  | `aria-readonly=true` | The attribute is rendered only when the DropDownList is read-only. |
|  | `aria-busy=true` | The attribute is rendered only when the DropDownList is loading data. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-dropdownlist.k-invalid .k-input-inner,.k-dropdownlist.ng-invalid .k-input-inner` | `aria-invalid=true` | The attribute is rendered only when the DropDownList is in a form, and announces the invalid state of the component. |
| `.k-dropdownlist.k-disabled` | `aria-disabled=true` | The attribute is rendered only when the DropDownList is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element must either be a `<button>` element or must have the `role="button"` assigned. |
|  | `aria-label` | The button requires an accessible name that will be assigned to it. |
|  | `tabindex=-1` | The button element must not be focusable. |

### Popup


The following table summarizes the selectors and attributes supported by the DropDownList popup:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-list-filter>.k-searchbox>.k-input-inner` | `role=searchbox` | Announces the search box capability of the input. |
|  | `aria-label` | Points to the search label. |
|  | `aria-activedescendant=.k-list-item.k-focus id` | Points to the focused item or to an item from the popup. |
|  | `aria-autocomplete=list` | Indicates the list-filtering capabilities of the selected items. |
|  | `aria-controls=.k-list-ul id` | Points to the popup element. Builds the relationship between the input and the popup. |
|  | `aria-haspopup=listbox` | Indicates the presence of a listbox popup. |
| `.k-list-ul[role="listbox"]` | `aria-live=polite/off` | Assures the live updates on the selected value of the popup. |

### Popup Listbox


The listbox placed in the popup element of the DropDownList has to implement the WAI-ARIA specification for a Popup List component. The following table summarizes the selectors and attributes supported by the listbox popup of the DropDownList:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-dropdownlist-popup-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it requires you to assing a `landmark` role to it. Otherwise, append it to an element with an appropriate `landmark` role. |
|  | `aria-label` or `aria-labelledby` | When the container has a `region` role assigned, povides a label. |
| `.k-list .k-no-data` | `aria-live=polite` | Identifies the element as a live region in the `polite` state, meaning assistive technology users are informed about changes to the region at the next available opportunity. |
| `.k-list-item-icon` | `aria-hidden=true` | Ensures that the icon itself is hidden from assistive technologies since it is decorative. |
| `.k-list-content[role="listbox"]` | `role=listbox` | For grouped lists, the wrapper must have `role=listbox`. For ungrouped lists, the UL element has this role instead. |
|  | `aria-label` or `aria-labelledby` | Provides a label for grouped listboxes. |
| `.k-list-ul[role="listbox"]` | `role=listbox` | For ungrouped lists, the `ul` element has `role=listbox` with appropriate aria-label/labelledby. |
| `.k-list-ul[role="group"]` | `role=group` | For grouped lists, each `ul` element has `role=group` and `aria-labelledby` referencing the group header id. |
| `.k-list-item` | `role=option` | Identifies the `li` element as a listbox option. |
|  | `id` | List items should have an `id` attribute for `aria-activedescendant` navigation. |
| `.k-list-item:not(.k-focus)` | `tabindex=-1` | Only the focused option should have `tabindex=0`, all others should be `-1`. |
| `.k-list-item.k-selected` | `aria-selected=true` | Indicates the selected state of the item. |
| `.k-list-group-item` | `role=presentation` | For grouped lists, the group header element should have `role=presentation`. |
|  | `id` | The group header must have an id that the corresponding `ul` element references via `aria-labelledby`. |

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

