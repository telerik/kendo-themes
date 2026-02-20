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
| `.k-combobox .k-input-inner[aria-expanded="true"]` | `aria-controls=.k-table-list id` | Points to the listbox element when the popup is open and the element exists. Signifies that the `combobox` controls the `listbox` element. |
| `.k-combobox .k-input-inner[aria-expanded="true"][aria-activedescendant]` | `aria-activedescendant=.k-list-item.k-focus id` | Points to the focused item in the popup. The focused item is changed through keyboard navigation. If the popup is not visible or no item is focused, the attribute must be removed. |
|  | `aria-autocomplete=list` or `aria-autocomplete=both` or `aria-autocomplete=inline` | The attribute value depends on enabled features: `list` for filtering, `both` for filtering + suggest, `inline` for suggest only. |
|  | `readonly=readonly` or `aria-readonly=true` | The attribute is rendered only when the ComboBox is read-only. |
|  | `aria-busy=true` | The attribute is rendered only when the ComboBox is loading data. |
| `.k-combobox.k-invalid .k-input-inner,.k-combobox.ng-invalid .k-input-inner` | `aria-invalid=true` | The attribute is rendered only when the ComboBox is in a form, and announces the valid state of the component. |
| `.k-combobox.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the ComboBox is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element must either be a `<button>` element or must have the `role="button"` assigned. |
|  | `aria-label` | The button element must have discernible text. |
|  | `tabindex=-1` | The button element must not be focusable. |
| `.k-combobox.k-disabled .k-button` | `disabled` or `aria-disabled=true` | Attribute is rendered only when the picker is disabled. |

### DropdownGrid Table-Based Popup

The DropdownGrid uses a table-based list structure in its popup. The following table summarizes the selectors and attributes for the table-based listbox:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-table-list` | `role=listbox` | The `ul` element that contains the options must have `role=listbox`. |
| `.k-table-list > .k-table-row` | `role=option` | Identifies the `li` element as a listbox option. |
|  | `id` | List items should have an `id` attribute for `aria-activedescendant` navigation. |
| `.k-table-list > .k-table-row:not(.k-focus)` | `tabindex=-1` | Only the focused option should have `tabindex=0`, all others should be `-1`. |
| `.k-table-list > .k-table-row.k-selected` | `aria-selected=true` | Indicates the selected state of the item. |
| `.k-table-list > .k-table-group-row` | `role=presentation` | Group header rows should have `role=presentation`. |

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

