## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ComboBox Wrapping Element


The following table summarizes the selectors and attributes supported by the ComboBox wrapper element:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-input-inner` | `role=combobox` | Announces the presence of a combobox as an inner element of the combobox used for filtering. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-haspopup=listbox` | Indicates that the component has a listbox popup. |
|  | `aria-expanded=true/false` | Announces the visibility state of the popup. |
|  | `aria-controls=.k-list-ul id` | Points to the listbox element. Signifies that the `combobox` controls the `listbox` element. |
|  | `aria-activedescendant=.k-list-item.k-focus id` | Points to the focused item in the popup. The focused item is changed through keyboard navigation. If the popup is not visible, the attribute must not point to any element or must be removed. |
|  | `aria-autocomplete=list` | When filtering is enabled, the attribute is rendered and the value is set to `list`. |
|  | `aria-autocomplete=both` | When both the filtering and the suggest featutres are enabled, the attribute is rendered and the value is set to `both`. |
|  | `aria-autocomplete=inline` | When the suggest feature is enabled, the attribute is rendered and the value is set to `inline`. |
|  | `readonly=readonly` or `aria-readonly=true` | The attribute is rendered only when the ComboBox is read-only. |
|  | `aria-busy=true` | The attribute is rendered only when the ComboBox is loading data. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-invalid .k-input-inner,.ng-invalid .k-input-inner` | `aria-invalid=true` | The attribute is rendered only when the ComboBox is in a form, and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the ComboBox is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element must either be a `<button>` element or must have the `role="button"` assigned. |
|  | `aria-label` | The button element must have discernible text. |
|  | `tabindex=-1` | The button element must not be focusable. |
| `.k-combobox.k-disabled .k-button` | `disabled` or `aria-disabled=true` | Attribute is rendered only when the picker is disabled. |

### Popup Listbox


The popup element of the ComboBox has to implement the WAI-ARIA specification for a Popup List component. The following table summarizes the selectors and attributes supported by the listbox popup of the ComboBox:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-animation-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it requires you to assing a `landmark` role to it. Otherwise, append it to an element with an appropriate `landmark` role. |
|  | `aria-label` or `aria-labelledby` | When the container has a `region` role assigned, povides a label. |
| `.k-list .k-no-data` | `aria-live=polite` | Identifies the element as a live region in the `polite` state, meaning assistive technology users are informed about changes to the region at the next available opportunity. |
| `.k-list-ul` | `role=listbox` | Identifies the `ul` element as a listbox. |
|  | `aria-label` or `aria-labelledby` | Provides a label for the listbox of the ComboBox. |
| `.k-list-item` | `role=option` | Identifies the `li` element as a listbox option. |
|  | `id` | When grouped, the list items must have an `id` attribute specified, so that the "aria-owns" attribute of their group header elements (with `role=group`) point to that ids. |
|  | `aria-describedby` | When grouped, the list items must have an "aria-describedby" attribute pointing to the id of the `k-list-item-text` element in their `k-list-group-item`. |
| `.k-list-item.k-selected` | `aria-selected=true` | Indicates the selected state of the item. |
| `.k-list-group-item` | `role=group` | The group elements in the popup list must be have `role=group`. |
|  | `aria-owns` | The group elements in the popup list must own the list items belonging to their group. |
| `.k-list-group-item>.k-list-item-text` | `id` | The `k-list-item-text` elements of the `k-list-group-item` must have an id specified. The `aria-labelledby` attribute of the list items in the group must point to that id. |

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

