---
title: Tree View
category: components
slug: tree-view
position: 50
---
# TreeView Keyboard Support

## Managing Focus

- Roving tab index components strategy implemented. Meaning that only one node has tabindex in the tree.
Interaction on a node should focus it.

## Keyboard Shortcuts

| Shortcut | Behavior |
|----------|----------|
| `Enter` | Selects focused tree view item when the selection mode is Single or Multiple. When the selection mode is Multiple and there are other selected items, they get deselected. |
| `Space` | Checks the checkbox of the treeview node. |
| `Arrow Up` | Goes to the previous tree node. Focus is moved to the prev node and its tabindex is set to 0. |
| `Arrow Down` | Goes to the next tree node. Focus is moved to the next node and its tabindex is set to 0. |
| `Arrow Left` | If the node is expanded - should collapse it. If the node is collapsed, focus is moved to its parent. |
| `Arrow Right` | If the node is collapsed - should expand it. If the node is expanded, focus is moved to the first child node. |
| `Home` | Moves focus to the first node in the tree without opening or closing a node. |
| `End` | Moves focus to the last node in the tree that is focusable without opening a node. |
| `Ctrl + Enter` | Selects focused item. When the item is already selected, it gets deselected. |
| `Shift + Enter` | When Multiple selection is enabled, perform range selection from previous selected item to the current selected item. Equivalent to Shift+Click. |

## Resources
- https://www.w3.org/TR/wai-aria-practices/#TreeView
- https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-22
- https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-1/treeview-1a.html
