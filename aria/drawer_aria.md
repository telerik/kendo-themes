## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Drawer component allows rendering a whole template inside of it. Thus, the accessibility roles are applied only when the built-in data-binding is used.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-drawer ul` | `role=menubar` | Indicates that the list of drawer items is a menubar. |
|  | `aria-orientation=vertical` | Indicates that the orientation of the drawer is vertical. |
| `.k-drawer-item:not(.k-drawer-separator)` | `role=menuitem` | Indicates that the item of a drawer serves as a menuitem. |
|  | `aria-label` | The drawer item requires an "aria-label" attribute when in mini mode and no content is rendered in the item. The "aria-label" points to the text field value of the item. |
| `.k-drawer-item.k-drawer-separator` | `role=separator` | Indicates that the item of a drawer serves as a separator. |

