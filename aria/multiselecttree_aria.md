## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### MultiSelectTree Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-multiselecttree .k-input-inner` | `role=combobox` | Announces the presence of a combobox as inner element of the multiselect used for filtering. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-haspopup=tree` | Indicates the presence of a tree popup. |
|  | `aria-expanded=true/false` | Announces the state of the visibility of the popup. |
| `.k-multiselecttree .k-input-inner[aria-expanded="true"]` | `aria-controls=.k-treeview id` | Points to the treeview element when the popup is open and the element exists. Signifies that the `combobox` element controls the `treeview`. |
|  | `aria-autocomplete=list` | Attribute is rendered and value is set to list when **filtering** feature is enabled. |
|  | `aria-describedby=.k-chip-list id` | Points to the taglist element that contains the selected items. |
|  | `aria-readonly=true` | Attribute is rendered only when the multiselect is readonly. |
|  | `aria-invalid=true` | Attribute is rendered only when the multiselect is in form and announces the invalid state of the component. |
|  | `aria-busy=true` | Attribute is rendered only when the multiselect is loading data. |
|  | `tabindex=0` | The element should be focusable. |
| `.k-multiselecttree.k-disabled .k-input-inner` | `aria-disabled=true` | Attribute is rendered only when the multiselect is disabled. |
| `.k-input-button` | `role=button` | The element should either be a `<button>` element or should have `role="button"` assigned. |
|  | `aria-label` | The button needs an accessible name to be assigned to it. |
|  | `tabindex=-1` | Button element should not be focusable. |

### TagList


The taglist element displays the selected items as chips. The following table summarizes the selectors and attributes supported by the taglist:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-multiselecttree .k-chip-list` | `role=listbox` | The taglist has listbox role to contain the selected items as options. |
|  | `aria-label` or `aria-labelledby` | The taglist needs an accessible name. When a `<label>` element is associated with the MultiSelectTree, `aria-labelledby` should reference the label's `id`. |
|  | `aria-orientation=horizontal` | Specifies the horizontal orientation of the taglist. |
|  | `aria-multiselectable=true` | Announces multiple selection capability when applicable. |
| `.k-multiselecttree .k-chip-list .k-chip` | `role=option` | Each tag chip is an option within the taglist listbox. |
|  | `aria-selected=true` | Tags represent selected items and must have `aria-selected="true"`. |

### Popup

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-multiselecttree-popup-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it needs a landmark role to be assigned to it. Otherwise, it should be appended to an element with an appropriate landmark role. |
|  | `aria-label` or `aria-labelledby` | Provides a label when the container has a `region` role assigned. |

### TreeView


The Tree placed in the Popup element of the component should implement the specification for a **TreeView** component.

[TreeView accessibility specification](treeview_aria.md)

