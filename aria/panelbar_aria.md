## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-panelbar` | `role=tree` | The root element of the PanelBar has role `tree`. |
|  | `aria-activedescendant=.k-item id` | Points to the currently focused item in the PanelBar. |
| `.k-panelbar-group` | `role=group` | The `ul` element that wraps child nodes. |
| `[aria-expanded='false']>.k-panelbar-group` | `aria-hidden=true` | Hides the `group` element from assistive technologies when its parent is not expanded. |
| `.k-item` | `role=treeitem` | The `li` element rendered for a PanelBar item. |
|  | `aria-expanded=true/false` | Announces the expanded state of the item (if expandable). It is `true` when expanded, and `false` when collapsed. |
|  | `aria-selected=true/false` | Announces the selected state of the item. |

