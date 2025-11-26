## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The `OrgChart` component represents a tree structure and allows editing of its items.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-orgchart-level-1` | `role=tree` | The root `div` element of the OrgChart. Contains all its top level items. |
|  | `aria-orientation=horizontal` | Specifies the orientation of the OrgChart tree. |
| `.k-orgchart-group:not(.k-orgchart-level-1)` | `role=group` | The element that wraps child nodes. |
| `.k-orgchart-card` | `role=treeitem` | The card (node) representing the treeitem in the hierarchical structure. |
|  | `aria-level` | Announces the level of the tree node item. The value of level is number-based(>=1). |
|  | `aria-keyshortcuts=Enter` | Announces the that the edit menu of the OrgChart can be activated via the Enter key. |
| `.k-orgchart-card[aria-owns]` | `aria-expanded=true/false` | Present when a node has subitems. Announces the expanded state of the node. It is true when expanded, and false when collapsed. |
| `.k-orgchart-card[aria-expanded]` | `aria-owns` | Present when a node has subitems. The value of the attribute is the id of the group element containing the current node children |
| `.k-orgchart-card.k-focus` | `aria-selected=true` | Announces the selected (focused) item in the OrgChart. |
| `.k-orgchart-card:not(.k-focus)` | `aria-selected=false` | Announces the not selected (focused) items in the OrgChart. |
| `.k-avatar-image img` | `alt` | Describes the avatar image of an item. Normally contains the name of the person/function represented by the item. |
| `.k-orgchart-card-menu` | `role=button` | Specifies the menu icon of the item is a button. |
|  | `aria-label=Edit menu` | Provides an accessible name for the edit button, as it does not contain text. |
|  | `tabindex=-1` | The Edit menu button must not be part of the page tab sequence. |
| `.k-orgchart-button` | `role=button` or `nodeName=button` | Specifies the expand/collapse element of the OrgChart as a button. |
|  | `aria-label` | Provides an accessible name for the expand/collapse button, as it does not contain text. |
|  | `tabindex=-1` | The expand/collapse button must not be part of the page tab sequence. |


The edit popup of the OrgChart should implement the specification of the Window component with a Form component in it.

[Window accessibility specification](window_aria.md)

[Form accessibility specification](form_aria.md)

