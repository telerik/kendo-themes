## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ComboBox Wrapping Element


The following table summarizes the selectors and attributes supported by the ComboBox wrapper element:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-combobox .k-input-inner` | `role=combobox` | Announces the presence of a combobox as an inner element of the combobox used for filtering. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-haspopup=listbox` | Indicates that the component has a listbox popup. |
|  | `aria-expanded=true/false` | Announces the visibility state of the popup. |
| `.k-combobox .k-input-inner[aria-expanded="true"]` | `aria-controls=.k-list-ul id` | Points to the listbox element when the popup is open and the element exists. Signifies that the `combobox` controls the `listbox` element. |
| `.k-combobox .k-input-inner[aria-expanded="true"][aria-activedescendant]` | `aria-activedescendant=.k-list-item.k-focus id` | Points to the focused item in the popup. The focused item is changed through keyboard navigation. If the popup is not visible or no item is focused, the attribute must be removed. |
|  | `aria-autocomplete=list` or `aria-autocomplete=both` or `aria-autocomplete=inline` | The attribute value depends on enabled features: `list` for filtering, `both` for filtering + suggest, `inline` for suggest only. |
|  | `readonly=readonly` or `aria-readonly=true` | The attribute is rendered only when the ComboBox is read-only. |
|  | `aria-busy=true` | The attribute is rendered only when the ComboBox is loading data. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-combobox.k-invalid .k-input-inner,.k-combobox.ng-invalid .k-input-inner` | `aria-invalid=true` | The attribute is rendered only when the ComboBox is in a form, and announces the invalid state of the component. |
| `.k-combobox.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the ComboBox is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element must either be a `<button>` element or must have the `role="button"` assigned. |
|  | `aria-label` | The button element must have discernible text. |
|  | `tabindex=-1` | The button element must not be focusable. |
| `.k-combobox.k-disabled .k-button` | `disabled` or `aria-disabled=true` | Attribute is rendered only when the picker is disabled. |

### Popup Listbox


The popup element of the ComboBox has to implement the WAI-ARIA specification for a Popup List component. The following table summarizes the selectors and attributes supported by the listbox popup of the ComboBox:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-combobox-popup-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it requires you to assing a `landmark` role to it. Otherwise, append it to an element with an appropriate `landmark` role. |
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

