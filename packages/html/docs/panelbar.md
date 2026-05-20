# Panelbar Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Panelbar component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-panelbar` | `role=tree` | The root element of the PanelBar has role tree. |
| `.k-panelbar` | `aria-activedescendant (when present)` | Points to the currently focused item in the PanelBar. |
| `.k-panelbar-group` | `role=group` | The ul element that wraps child nodes. |
| `.k-panelbar-item:not(.k-expanded) > .k-panelbar-group` | `aria-hidden=true` | Hides the group element from assistive technologies when its parent is not expanded. |
| `.k-panelbar-item` | `role=treeitem` | The li element rendered for a PanelBar item. |
| `.k-panelbar-item` | `aria-expanded=true/false` | Announces the expanded state of the item (if expandable). |
| `.k-panelbar-item` | `aria-selected=true/false` | Announces the selected state of the item. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Panelbar component:

| Shortcut | Behavior |
| --- | --- |
| `Arrow Up` | Focuses the previous PanelBar item. If no previous item is available, focuses the last item. |
| `Arrow Down` | Focuses the next PanelBar item. If no next item is available, focuses the first item. |
| `Arrow Left` | Collapses an expanded item. If the item is collapsed, focuses its parent. |
| `Arrow Right` | Expands a collapsed item. If the item is expanded, focuses its first child node. |
| `Home` | Moves focus to the first item in the PanelBar without expanding or collapsing an item. |
| `End` | Moves focus to the last item in the PanelBar that is focusable without expanding an item. |
| `Enter` | Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url). |
| `Space` | Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url). |
