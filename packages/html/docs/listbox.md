# Listbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Listbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-listbox .k-list-ul` | `role=listbox` | Specifies the role of the ListBox list element. |
| `.k-listbox .k-list-ul` | `aria-label or aria-labelledby` | Adds a label to the list element of the ListBox. |
| `.k-listbox .k-list-item` | `role=option` | Specifies the role of the ListBox item element. |
| `.k-listbox .k-list-item` | `aria-selected=true/false` | Set to true if the item is selected. |
| `.k-listbox .k-list-item` | `tabindex` | The focused listbox item should have tabindex 0, all others -1. |
| `.k-listbox-actions` | `role=toolbar` | The toolbar is a collection of command buttons. |
| `.k-listbox-actions` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-listbox-actions` | `aria-controls (when present)` | Points to the id of the listbox element being controlled. |
| `.k-listbox-actions .k-button` | `aria-label or title` | All buttons in the toolbar must have labels. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Listbox component:

| Shortcut | Behavior |
| --- | --- |
| `F10` | Focuses the ListBox toolbar (the last focused or the first button in it). |
| `Space` | Selects the focused ListBox Item |
| `Up Arrow` | Selects the previous item. |
| `Down Arrow` | Selects the next item. |
| `Ctrl (or Control on Mac) + Space` | Selects or deselects an item. |
| `Shift + Up Arrow` | Adds the previous item to the selected items. |
| `Shift + Down Arrow` | Adds the next item to the selected items. |
| `Ctrl (or Cmd on Mac) + Up Arrow` | Moves the focus to the previous item. |
| `Ctrl (or Cmd on Mac) + Down Arrow` | Moves the focus to the next item. |
| `Del` | Deletes the selected items. |
| `Ctrl (or Cmd on Mac) + Right Arrow` | Adds the selected items to the connected ListBox. |
| `Ctrl (or Cmd on Mac) + Left Arrow` | Adds the selected items from the connected ListBox to the current one. |
| `Ctrl (or Cmd on Mac) + Shift + Up Arrow` | Shifts the selected items upwards. |
| `Ctrl (or Cmd on Mac) + Shift + Down Arrow` | Shifts the selected items downwards. |
| `Ctrl (or Cmd on Mac) + Shift + Right Arrow` | Transfers all items to the connected ListBox. |
| `Ctrl (or Cmd on Mac) + Shift + Left Arrow` | Transfers all items from the connected ListBox. |
| `Right Arrow or Down Arrow` | Focuses the next button in the toolbar. |
| `Left Arrow or Up Arrow` | Focuses the previous button in the toolbar. |
| `Enter` | Executes the currenly focused button command if enabled. |
