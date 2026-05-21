# Treeview Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Treeview component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-treeview-lines` | `role=tree` | The root list element of the treeview. |
| `.k-treeview-group:not(.k-treeview-lines)` | `role=group` | The ul element that wraps child nodes. |
| `.k-treeview-item` | `role=treeitem` | The li element rendered for a tree node. |
| `.k-treeview-item` | `aria-expanded=true/false (when present)` | Announces the expanded state of the node. |
| `.k-treeview-item` | `aria-checked=true/false (when present)` | Announces the checked state of the node when checkboxes are enabled. |
| `.k-treeview-item` | `aria-selected=true (when present)` | Announces the selected state of the node when selection is enabled. |
| `.k-treeview-item .k-checkbox` | `aria-label` | The checkbox input must have an accessible name matching the treeview item text. |
| `.k-treeview-item .k-checkbox` | `tabindex=-1` | The checkbox input must not be in the tab order. Keyboard interaction is handled by the treeitem. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Treeview component:

| Shortcut | Behavior |
| --- | --- |
| `Enter` | Selects the focused tree view item when the selection mode is single or multiple. When the selection mode is multiple and there are other selected items, they get deselected. |
| `Space` | Checks the checkbox of the TreeView node. |
| `Up Arrow` | Goes to the previous tree node. The focus is moved to the previous node and its tabindex is set to `0`. |
| `Down Arrow` | Goes to the next tree node. The focus is moved to the next node and its tabindex is set to `0`. |
| `Left Arrow` | If the node is expanded, collapses it and the focus remains on the item. If the node is collapsed, the focus is moved to its parent. |
| `Right Arrow` | If the node is collapsed, expands it and the focus remains on the item. If the node is expanded, the focus is moved to the first child node. |
| `Home` | Moves the focus to the first node in the tree without opening or closing a node. |
| `End` | Moves the focus to the last node in the tree that is focusable without opening a node. |
| `Ctrl (or Cmd on Mac) + Enter` | Selects the focused item. When the item is already selected, it gets deselected. |
| `Printable Characters` | Typing `M` or any other printable character focuses the next or the first item in the list. |
