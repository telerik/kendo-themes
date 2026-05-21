# Menu Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Menu component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-menu:not(.k-context-menu)` | `role=menubar` | Announces the Menu menubar role. |
| `.k-menu.k-menu-vertical` | `aria-orientation=vertical` | Announces the Menu orientation when vertical. |
| `.k-menu-item` | `role=menuitem` | Announces the Menu item role. |
| `.k-menu-item` | `aria-haspopup=menu (when present)` | Indicates a popup menu is associated with the item. |
| `.k-menu-item` | `aria-expanded=true/false (when present)` | Indicates whether the submenu is expanded. |
| `.k-menu-item.k-disabled` | `aria-disabled=true` | Informs assistive technologies that a Menu item is disabled. |
| `.k-menu-expand-arrow` | `aria-hidden=true` | Expand arrow elements are hidden from assistive technologies. |
| `.k-menu-popup .k-menu-group` | `role=menu` | The role of the nested menu displayed in a popup. |
| `.k-menu-scroll-button` | `tabindex=-1` | Scroll buttons are removed from the tab sequence. |
| `.k-menu-scroll-button` | `aria-label` | Scroll buttons have an accessible label. |
| `.k-menu-item.k-focus` | `tabindex=0` | The focused item has tabindex 0. |
| `.k-menu-item` | `aria-controls=ul.k-menu-group id (when present)` | Points to the ID of the submenu. Only present when the item controls a submenu element. |
| `.k-menu-popup .k-menu-group` | `id` | Each nested menu has a deterministic id linked to the parent aria-controls. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Menu component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow` | (For root items) Opens the item and focuses the last child.; (For child items) Focuses the previous item. |
| `Down Arrow` | (For root items) Opens the item and focuses the first child.; (For child items) Focuses the next item. |
| `Left Arrow` | (For root items) Focuses the previous item.; (For child items) For direct children of a root item, focuses and opens the previous root item. Otherwise, closes and focuses the parent. |
| `Right Arrow` | (For root items) Focuses the next item.; (For child items) If the item has children, opens the item and focuses the first child. Otherwise, focuses and opens the next root item. |
| `Home` | Focuses the first item. |
| `End` | Focuses the last item. |
| `Enter` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Space` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Escape` | (For child items) Closes and focuses the parent. |
| `Alphanumeric character` | Focuses the next item with text starting with the character. |
| `Up Arrow` | Focuses the previous item. |
| `Down Arrow` | Focuses the next item. |
| `Left Arrow` | (For root items) opens the item and focuses the last child.; (For child items) closes and focuses the parent. |
| `Right Arrow` | If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item. |
