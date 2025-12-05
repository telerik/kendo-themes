## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Sankey Chart is an interactive Graphics Document (https://www.w3.org/TR/graphics-aria-1.0/#graphics-document). All actions available for mouse users are also available via keyboard shortcuts.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-sankey` | `role=graphics-document` | Indicates that the Sankey element is a Graphics Document. |
|  | `aria-roledescription` | User-set value that clarifies the type of Chart to screen reader users. |
|  | `aria-label` | Announces the user-set title of the Sankey Chart. |
| `.k-sankey-node` | `role=graphics-symbol` | Specifies the role of the Sankey node elements. |
|  | `aria-roledescription=Node` | Describes the role of the Sankey node elements. |
| `.k-sankey-legend-item` | `role=checkbox` | Specifies the role of the legend item element. |
|  | `aria-label` | Specifies the name of the node associated with this legend item. |
|  | `aria-roledescription=Legend item` | Specifies the name of the node associated with this legend item. |

