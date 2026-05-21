# Multiselect Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Multiselect component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-multiselect .k-input-inner` | `role=combobox` | Announces the multiselect input. |
| `.k-multiselect .k-input-inner` | `aria-haspopup=listbox` | Indicates the component has a listbox popup. |
| `.k-multiselect .k-input-inner` | `aria-expanded` | Announces the popup visibility. |
| `.k-multiselect .k-input-inner` | `aria-label` | Accessible name for the multiselect. |
| `.k-multiselect .k-input-inner` | `aria-autocomplete=list` | Indicates list filtering capability. |
| `.k-multiselect .k-input-inner` | `aria-describedby` | Points to the taglist element that contains the selected items. |
| `.k-multiselect.k-disabled .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the multiselect is disabled. |
| `.k-multiselect .k-chip-list` | `role=listbox` | The taglist has listbox role for selected items. |
| `.k-multiselect .k-chip-list` | `aria-label or aria-labelledby` | The taglist needs an accessible name. |
| `.k-multiselect .k-chip-list` | `aria-orientation=horizontal` | Specifies horizontal orientation of the taglist. |
| `.k-multiselect .k-chip-list .k-chip` | `role=option` | Each tag chip is an option within the taglist listbox. |
| `.k-multiselect .k-chip-list .k-chip` | `aria-selected=true` | Tags represent selected items and must have aria-selected=true. |
| `.k-multiselect-popup .k-list-content, .k-multiselect-popup .k-list-ul` | `role=listbox` | Popup list has listbox role. |
| `.k-multiselect-popup .k-list-ul[role="listbox"], .k-multiselect-popup .k-list-content[role="listbox"]` | `aria-label or aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-multiselect-popup .k-list-item` | `role=option` | Each list item is an option. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Multiselect component:

| Shortcut | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `Alt (or Opt on Mac) + Down` | Opens the popup. |
| `Alt (or Opt on Mac) + Up or Esc` | Closes the popup. |
| `Left Arrow` | Focuses the previous tag item in the selected list. |
| `Right Arrow` | Focuses the next tag item in the selected list. |
| `Delete or Backspace` | When the focused item is a tag list, removes the item from the selection. |
| `Esc` | Clears the value when the popup is not open. |
| `Shift + Up Arrow` | Creates a range selection between the last selected or deselected item and the item that is immediately before the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the previous one. At the end of the operation, the focus moves to the the item that is immediately before the currently focused one. |
| `Shift + Down Arrow` | Creates a range selection between the last selected or deselected item and the item that is immediately after the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the next one. At the end of the operation, the focus moves to the the item that is immediately after the currently focused one. |
| `Ctrl (or Cmd on Mac) + Shift + Home` | Creates a range selection from the currently focused item up to the beginning of the list. All items outside that range are deselected. |
| `Ctrl (or Cmd on Mac) + Shift + End` | Creates a range selection from the currently focused item down to the end of the list. All items outside that range are deselected. |
| `Ctrl (or Cmd on Mac) + A` | Selects all items present in the list. If all items are already selected, deselects them. |
