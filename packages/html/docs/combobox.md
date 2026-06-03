# Combobox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Combobox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-combobox > .k-input-inner` | `role` = `combobox` | Identifies the input as a combobox. |
| `.k-combobox > .k-input-inner` | `aria-haspopup` = `listbox` | Indicates the combobox has a listbox popup. |
| `.k-combobox > .k-input-inner` | `aria-expanded` | Indicates whether the popup is open. |
| `.k-combobox > .k-input-inner` | `aria-controls` = `${id}-listbox` | Points to the listbox element when popup is open. |
| `.k-combobox > .k-input-inner` | `aria-activedescendant` | Points to the focused item in the listbox. |
| `.k-combobox > .k-input-inner` | `aria-autocomplete` = `list` / `both` / `inline` | Indicates the autocomplete behavior. |
| `.k-combobox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the combobox is in an invalid state. |
| `.k-combobox > .k-input-inner` | `aria-busy` = `true` | Rendered when the combobox is loading data. |
| `.k-combobox > .k-input-inner` | `aria-label` / `aria-labelledby` | Accessible name provided by consuming app. |
| `.k-combobox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the combobox is disabled. |
| `.k-combobox .k-input-button` | `role` = `button` | The dropdown toggle button. |
| `.k-combobox .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-combobox .k-input-button` | `tabindex` = `-1` | Dropdown button is not in the tab order. |
| `.k-combobox-popup .k-list-content, .k-combobox-popup .k-list-ul` | `role` = `listbox` | The popup list container has the listbox role. |
| `.k-combobox-popup .k-list-ul[role="listbox"], .k-combobox-popup .k-list-content[role="listbox"]` | `aria-label` / `aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-combobox-popup .k-list-item` | `role` = `option` | Each list item is an option. |
| `.k-combobox-popup .k-list-item` | `aria-selected` | Indicates the selected state. |
| `.k-combobox-popup .k-no-data` | `aria-live` = `polite` | Announces no-data state to screen readers. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Combobox component:

| Trigger | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `ArrowDown` | Highlights the next available item. |
| `ArrowUp` | Highlights the previous available item. |
| `Enter` | Selects the focused item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup. |
| `Alt/Opt(Mac) + ArrowUp or Escape` | Closes the popup. |
| `Escape` | If the popup is not visible, clears the value. |
