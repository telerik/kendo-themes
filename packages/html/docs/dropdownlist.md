# Dropdownlist Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Dropdownlist component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dropdownlist:not(.k-views-dropdown)` | `role=combobox` | Announces the dropdown element. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `aria-haspopup=listbox` | Indicates the presence of a listbox popup. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `aria-expanded` | Announces the visibility state of the popup. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `aria-label` | Accessible name for the dropdown. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `tabindex=0` | The element must be focusable. |
| `.k-dropdownlist.k-disabled` | `aria-disabled=true` | Rendered when the dropdown is disabled. |
| `.k-dropdownlist .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-dropdownlist .k-input-button` | `tabindex=-1` | The button must not be focusable. |
| `.k-dropdownlist-popup .k-list-content, .k-dropdownlist-popup .k-list-ul` | `role=listbox` | Popup list has listbox role. |
| `.k-dropdownlist-popup .k-list-ul[role="listbox"]` | `aria-label or aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-dropdownlist-popup .k-list-item` | `role=option` | Each list item is an option. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dropdownlist component:

| Shortcut | Behavior |
| --- | --- |
| `Down Arrow` | Selects the next available item. |
| `Up Arrow` | Selects the previous available item. |
| `Home` | Selects the first available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position. |
| `End` | Selects the last available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position. |
| `Enter` | Opens popup |
| `Space` | Opens popup |
| `Alt/Opt(Mac) Down` | Opens popup |
| `Alt/Opt(Mac) Up or Esc` | `Closes popup |
| `printable characters` | Typing "M" or any other printable character should select the next or first item in the list. Swiftly typing should capture multiple printable characters after the first one. |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |
