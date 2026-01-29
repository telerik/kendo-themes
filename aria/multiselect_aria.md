## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### MultiSelect Wrapping Element


The following table summarizes the selectors and attributes supported by the MultiSelect wrapper element:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-multiselect .k-input-inner` | `role=combobox` | Announces the presence of a combobox as the inner element of the MultiSelect used for filtering. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name that will be assigned to it. |
|  | `aria-haspopup=listbox` | Indicates the presence of a listbox popup. |
|  | `aria-expanded=true/false` | Announces the state of the popup visibility. |
| `.k-multiselect .k-input-inner[aria-expanded="true"]` | `aria-controls=.k-list-ul id` | Points to the listbox element when the popup is open and the element exists. Signifies that the `combobox` element controls the `listbox` one. |
|  | `aria-autocomplete=list` | When the filtering feature is enabled, the attribute is rendered and the value is set to the list. |
|  | `aria-describedby=.k-chip-list id` | Points to the `taglist` element that contains the selected items. |
| `.k-multiselect .k-input-inner[aria-expanded="true"][aria-activedescendant]` | `aria-activedescendant=.k-list-item.k-focus id` | Points to the focused item,which is either an item from the popup or a tag item from the selected items. The focused item is changed through keyboard navigation. If the focus is not currently on a tag item and the popup is not visible, the attribute must not point to any element or must be removed. |
|  | `aria-readonly=true` | The attribute is rendered only when the MultiSelect is read-only. |
|  | `aria-invalid=true` | The attribute is rendered only when the MultiSelect is in a form and announces the valid state of the component. |
|  | `aria-busy=true` | The attribute is rendered only when the MultiSelect is loading data. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-multiselect.k-disabled .k-input-inner` | `aria-disabled=true` | The attribute is rendered only when the MultiSelect is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element must either be a `<button>` element or have the `role="button"` assigned. |
|  | `aria-label` | The button needs an accessible name that will be assigned to it. |
|  | `tabindex=-1` | The button element must not be focusable. |

### Popup Listbox


The popup element of the MultiSelect must implement the WAI-ARIA specification for a Popup List component. The following table summarizes the selectors and attributes supported by the listbox popup of the MultiSelect:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-multiselect-popup-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it requires you to assing a `landmark` role to it. Otherwise, append it to an element with an appropriate `landmark` role. |
|  | `aria-label` or `aria-labelledby` | When the container has a `region` role assigned, povides a label. |
| `.k-list .k-no-data` | `aria-live=polite` | Identifies the element as a live region in the `polite` state, meaning assistive technology users are informed about changes to the region at the next available opportunity. |
| `.k-list-content[role="listbox"]` | `role=listbox` | For grouped lists, the wrapper must have `role=listbox`. For ungrouped lists, the UL element has this role instead. |
|  | `aria-label` or `aria-labelledby` | Provides a label for grouped listboxes. |
|  | `aria-multiselectable=true` | Announces multiselection capability of the listbox popup. |
| `.k-list-ul[role="listbox"]` | `role=listbox` | For ungrouped lists, the `ul` element has `role=listbox` with appropriate aria-label/labelledby. |
|  | `aria-multiselectable=true` | Announces multiselection capability of the listbox popup. |
| `.k-list-ul[role="group"]` | `role=group` | For grouped lists, each `ul` element has `role=group` and `aria-labelledby` referencing the group header id. |
| `.k-list-item` | `role=option` | Identifies the `li` element as a listbox option. |
|  | `id` | List items should have an `id` attribute for `aria-activedescendant` navigation. |
| `.k-list-item:not(.k-focus)` | `tabindex=-1` | Only the focused option should have `tabindex=0`, all others should be `-1`. |
| `.k-list-item.k-selected` | `aria-selected=true` | Indicates the selected state of the item. |
| `.k-list-header` | `role=presentation` | For grouped lists, the group header element should have `role=presentation`. |
|  | `id` | The group header must have an id that the corresponding `ul` element references via `aria-labelledby`. |

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

