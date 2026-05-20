# ContextMenu Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the ContextMenu component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-context-menu` | `role=menu` | The context menu implements the menu role. |
| `.k-menu-item` | `role=menuitem` | Announces the Menu item role. |
| `.k-menu-item` | `aria-haspopup=menu (when present)` | Indicates a popup menu is associated with the item. |
| `.k-menu-item` | `aria-expanded=true/false (when present)` | Indicates whether the submenu is expanded. |
| `.k-menu-item.k-disabled` | `aria-disabled=true` | Informs assistive technologies that a Menu item is disabled. |
| `.k-menu-expand-arrow` | `aria-hidden=true` | Expand arrow elements are hidden from assistive technologies. |
| `.k-menu-item.k-focus` | `tabindex=0` | The focused item has tabindex 0. |
| `.k-menu-item` | `aria-controls=ul.k-menu-group id (when present)` | Points to the ID of the submenu. |
| `.k-menu-popup .k-menu-group` | `id` | Each nested menu has an id linked to parent aria-controls. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ContextMenu component:

| Shortcut | Behavior |
| --- | --- |
| `Shift+F10` | When applied to a target, the command opens the ContextMenu. |
| `Up Arrow` | Focuses the previous item. |
| `Down Arrow` | Focuses the next item. |
| `Left Arrow` | (For root items) opens the item and focuses the last child.; (For child items) closes and focuses the parent. |
| `Right Arrow` | If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item. |
| `Escape` | Closes the ContextMenu and returns the focus to the target. |
| `Home` | Focuses the first item. |
| `End` | Focuses the last item. |
| `Enter` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Space` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Alphanumeric character` | Focuses the next item with text starting with the character. |
