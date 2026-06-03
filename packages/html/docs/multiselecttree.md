# Multiselecttree Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Multiselecttree component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-multiselecttree .k-input-inner` | `role` = `combobox` | Announces the multiselect tree input. |
| `.k-multiselecttree .k-input-inner` | `aria-haspopup` = `tree` | Indicates the presence of a tree popup. |
| `.k-multiselecttree .k-input-inner` | `aria-expanded` | Announces the popup visibility. |
| `.k-multiselecttree .k-input-inner` | `aria-label` | Accessible name for the multiselect tree. |
| `.k-multiselecttree .k-input-inner` | `aria-autocomplete` = `list` | Indicates list filtering capability when filtering is enabled. |
| `.k-multiselecttree .k-input-inner` | `aria-describedby` | Points to the taglist element that contains the selected items. |
| `.k-multiselecttree .k-input-inner` | `tabindex` = `0` | The element must be focusable. |
| `.k-multiselecttree.k-disabled .k-input-inner` | `aria-disabled` = `true` | Rendered when the multiselect tree is disabled. |
| `.k-multiselecttree .k-chip-list` | `role` = `listbox` | The taglist has listbox role for selected items. |
| `.k-multiselecttree .k-chip-list` | `aria-label` / `aria-labelledby` | The taglist needs an accessible name. |
| `.k-multiselecttree .k-chip-list` | `aria-orientation` = `horizontal` | Specifies horizontal orientation of the taglist. |
| `.k-multiselecttree .k-chip-list .k-chip` | `role` = `option` | Each tag chip is an option within the taglist listbox. |
| `.k-multiselecttree .k-chip-list .k-chip` | `aria-selected` = `true` | Tags represent selected items and must have aria-selected=true. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Multiselecttree component:

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Selects the next available item. |
| `ArrowUp` | Selects the previous available item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens pop up |
| `Alt/Opt(Mac) + ArrowUp or Escape` | `Closes popup |
| `Enter` | Selects the focused item. |
| `Space` | Selects the focused item. |
| `Printable Characters` | Typing "M" or any other printable character should select the next or first item in the list |
| `Escape` | Clears the value when the popup is not open. |
