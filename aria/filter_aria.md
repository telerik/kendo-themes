## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Filter component represents visually the structure of a filter object. As the filter object can contain nested objects, that hierarchical structure must be represented in the accessibility tree by the `role=tree` assigned to the component.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-filter-container` | `role=tree` | Describes the hierarchical structure of the Filter component. |
|  | `aria-label` | Specifies a label for the Filter component. |
| `.k-filter-group-main,.k-filter-item` | `role=treeitem` | Each FilterGroup and FilterExpression represent a separate `treeitem` in the Filter component structure. |
| `.k-filter-lines` | `role=group` | Represents a group if items in the Filter component. |
| `.k-toolbar` | `role=toolbar` | The role represents a collection of tools. |
|  | `aria-label` | Specifies a label for the toolbar. |


Each toolbar in the Filter should follow the specification for a ToolBar component. The elements inside the FilterGroup follow the ARIA specification applicable to their specific roles.

