## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ListBox List

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-list-ul` | `role=listbox` | Specifies the role of the ListBox `ul` element. |
|  | `aria-label` or `aria-labelledby` | Adds a label to the `ul` element of the ListBox. |
|  | `aria-multiselectable=true` | Signifies that the ListBox allows multiple selection. Present only when the multiple selection of the component is enabled. |
| `.k-list-item` | `role=option` | Specifies the role of the ListBox `item` element. |
|  | `aria-selected=true/false` | Set to `true` if the item is selected. |
|  | `tabindex=0` | The focused listbox item should have tabindex 0, while all others -1. |

### ListBox Toolbar


The ListBox toolbar follows the specification of the ToolBar component.

[ToolBar accessibility specification](toolbar_aria.md)

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-listbox-actions` | `role=toolbar` | The toolbar is a collection of command buttons. |
|  | `aria-label` | Clarifies the purpose of the toolbar. |
|  | `aria-controls=.k-list-ul id` | Points to the ids of the `role=listbox` elements that are being controlled by the ToolBar. |
| `.k-listbox-actions .k-button` | `aria-label` or `title` | All buttons in the ToolBar must have lables, so that their purpose is clear. |

