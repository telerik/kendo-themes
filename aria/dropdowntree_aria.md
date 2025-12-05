## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### DropDownTree Wrapping Element


The following table summarizes the selectors and attributes supported by the DropDownTree wrapper element:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-dropdowntree` | `role=combobox` | Announces the drop-down element of the button. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-haspopup=tree` | Indicates the presence of a popup with a tree navigation. |
|  | `aria-expanded=true/false` | Announces the state of the popup visibility. |
|  | `aria-controls=.k-treeview id` | Points to the `treeview` element. Signifies that the `combobox` element controls the `treeview` one. |
|  | `aria-describedby=.k-input-inner id` | Announces the selected value of the drop-down. |
|  | `aria-readonly=true` | The attribute is rendered only when the drop-down is read-only. |
|  | `aria-autocomplete=list` | The attribute is rendered and the value is set to `list` when the filtering feature is enabled. |
|  | `aria-invalid=true` | The attribute is rendered only when the drop-down is in a form and announces the valid state of the component. |
|  | `aria-busy=true` | The attribute is rendered only when the drop-down is loading data. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-dropdowntree.k-disabled` | `aria-disabled=true` | The attribute is rendered only when the drop-down is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element must either be a `<button>` element or must have `role="button"` assigned. |
|  | `aria-label` | The button requires an accessible name that will be assigned to it. |
|  | `tabindex=-1` | The `button` element must not be focusable. |

### Popup Listbox


The popup element of the DropDownTree has to implement the WAI-ARIA specification for a Popup List component. The following table summarizes the selectors and attributes supported by the listbox popup of the DropDownTree:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-animation-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it requires you to assign a `landmark` role to it. Otherwise, it must be appended to an element with an appropriate `landmark` role. |
|  | `aria-label` or `aria-labelledby` | Provides a label when the container has a `region` role assigned. |

### TreeView


The tree that is placed in the `popup` element of the component must implement the specification for a TreeView component.

[TreeView accessibility specification](treeview_aria.md)

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

