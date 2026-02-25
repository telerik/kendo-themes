## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


If the tree supports the load-more functionality, the **Load More** button is rendered as the `li.k-treeview-item` element and has `role="button"`. The list item does not implement any of the following attributes.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-treeview-lines` | `role=tree` | The root `div` element of the treeview. |
| `.k-treeview-group:not(.k-treeview-lines)` | `role=group` | The `ul` element that wraps child nodes. |
| `.k-input-inner` | `aria-label` | Specifies the announced name for the filter input. |
|  | `role=searchbox` | Specifies the role of the filter input. |
|  | `aria-controls=.k-treeview-lines id` | Points to the main ul element .k-treeview-lines. |
| `.k-treeview-item` | `role=treeitem` | The `li` element rendered for a tree node. |
|  | `aria-level` | Announces the level of the tree node item. The value of the level is number-based (>=1). Must be added when only a subsection of the TreeView is rendered in the DOM. |
|  | `aria-setsize` | Announces the total count of the items at this level. Enables the user to understand the position of the navigation, for example, item 3 of 14. Must be added only when the load-more functionality of the tree is enabled and there are still nodes belonging to the group that are not loaded (rendered) yet. |
|  | `aria-expanded=true/false` | Announces the expanded state of the node. The value is `true` when expanded, and `false` when collapsed. |
|  | `aria-checked=true/false` | Rendered only when checkboxes are enabled. Announces the checked state of the node. If the checkbox is indeterminate, the value is `mixed`. |
| `.k-treeview-item:has(> span > .k-selected, > div > .k-selected) ` | `aria-selected=true` | Rendered only when selection is enabled. Announces the selected state of the node. |
| `.k-checkbox` | `role=none/presentation` | Added to the wrapper element of the checkbox to prevent duplicated information announced to the user. The checked state is controlled by `aria-checked`. |

