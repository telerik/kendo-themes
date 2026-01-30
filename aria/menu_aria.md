## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-menu:not(.k-context-menu)` | `role=menubar` | Announces the Menu menubar role |
| `.k-menu.k-menu-vertical` | `aria-orientation=vertical` | Announces the Menu orientation when vertical. |
| `.k-menu-item` | `role=menuitem` | Announces the Menu item role. |
| `.k-menu-item.k-focus` | `tabindex=0` | The focused item has tabindex '0' |
| `.k-menu-item[aria-haspopup]` | `aria-haspopup=menu` | Indicates that there is a popup menu associated with the item. Applicable to expandable items only. |
| `.k-menu-item[aria-haspopup][aria-controls]` | `aria-controls=ul.k-menu-group id` | Points to the ID of the submenu. Only present when the item actually controls a submenu element. |
| `.k-menu-item[aria-haspopup]` | `aria-expanded=true/false` | Indicates whether the submenu is expanded. |
| `.k-menu-item.k-disabled` | `aria-disabled=true` | Informs assistive technologies that a Menu item is disabled. |
| `.k-menu-expand-arrow` | `aria-hidden=true` | The Menu item expand arrow elements are hidden from the assistive technologies. |
| `.k-menu-popup .k-menu-group` | `role=menu` | The role of the nested (not root-level) menu displayed in a popup. |
|  | `id` | Each nested menu has a deterministic id attribute that is linked to the aria-controls attribute ot its parent. |

