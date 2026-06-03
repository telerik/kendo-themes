# Listbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Listbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-listbox .k-list-ul` | `role` = `listbox` | Specifies the role of the ListBox list element. |
| `.k-listbox .k-list-ul` | `aria-label` / `aria-labelledby` | Adds a label to the list element of the ListBox. |
| `.k-listbox .k-list-item` | `role` = `option` | Specifies the role of the ListBox item element. |
| `.k-listbox .k-list-item` | `aria-selected` = `true` / `false` | Set to true if the item is selected. |
| `.k-listbox .k-list-item` | `tabindex` | The focused listbox item should have tabindex 0, all others -1. |
| `.k-listbox-actions` | `role` = `toolbar` | The toolbar is a collection of command buttons. |
| `.k-listbox-actions` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-listbox-actions` | `aria-controls` | Points to the id of the listbox element being controlled. |
| `.k-listbox-actions .k-button` | `aria-label` / `title` | All buttons in the toolbar must have labels. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Listbox component:

| Trigger | Behavior |
| --- | --- |
| `F10` | Focuses the ListBox toolbar (the last focused or the first button in it). |
| `Space` | Selects the focused ListBox Item |
| `ArrowUp` | Selects the previous item. |
| `ArrowDown` | Selects the next item. |
| `Control/Cmd(Mac) + Space` | Selects or deselects an item. |
| `Shift + ArrowUp` | Adds the previous item to the selected items. |
| `Shift + ArrowDown` | Adds the next item to the selected items. |
| `Control/Cmd(Mac) + ArrowUp` | Moves the focus to the previous item. |
| `Control/Cmd(Mac) + ArrowDown` | Moves the focus to the next item. |
| `Delete` | Deletes the selected items. |
| `Control/Cmd(Mac) + ArrowRight` | Adds the selected items to the connected ListBox. |
| `Control/Cmd(Mac) + ArrowLeft` | Adds the selected items from the connected ListBox to the current one. |
| `Control/Cmd(Mac) + Shift + ArrowUp` | Shifts the selected items upwards. |
| `Control/Cmd(Mac) + Shift + ArrowDown` | Shifts the selected items downwards. |
| `Control/Cmd(Mac) + Shift + ArrowRight` | Transfers all items to the connected ListBox. |
| `Control/Cmd(Mac) + Shift + ArrowLeft` | Transfers all items from the connected ListBox. |
| `ArrowRight or ArrowDown` | Focuses the next button in the toolbar. |
| `ArrowLeft or ArrowUp` | Focuses the previous button in the toolbar. |
| `Enter` | Executes the currenly focused button command if enabled. |
