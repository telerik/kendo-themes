# Combobox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Combobox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-combobox > .k-input-inner` | `role=combobox` | Identifies the input as a combobox. |
| `.k-combobox > .k-input-inner` | `aria-haspopup=listbox` | Indicates the combobox has a listbox popup. |
| `.k-combobox > .k-input-inner` | `aria-expanded` | Indicates whether the popup is open. |
| `.k-combobox > .k-input-inner` | `aria-controls=${id}-listbox (when open)` | Points to the listbox element when popup is open. |
| `.k-combobox > .k-input-inner` | `aria-activedescendant (when open)` | Points to the focused item in the listbox. |
| `.k-combobox > .k-input-inner` | `aria-autocomplete=list|both|inline (when has autocomplete)` | Indicates the autocomplete behavior. |
| `.k-combobox > .k-input-inner` | `aria-invalid=true (when invalid)` | Rendered when the combobox is in an invalid state. |
| `.k-combobox > .k-input-inner` | `aria-busy=true (when loading)` | Rendered when the combobox is loading data. |
| `.k-combobox > .k-input-inner` | `label for or aria-label or aria-labelledby (when has accessible name)` | Accessible name provided by consuming app. |
| `.k-combobox.k-disabled > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the combobox is disabled. |
| `.k-combobox .k-input-button` | `role=button or nodeName=button` | The dropdown toggle button. |
| `.k-combobox .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-combobox .k-input-button` | `tabindex=-1` | Dropdown button is not in the tab order. |
| `.k-combobox-popup .k-list-content, .k-combobox-popup .k-list-ul` | `role=listbox` | The popup list container has the listbox role. |
| `.k-combobox-popup .k-list-ul[role="listbox"], .k-combobox-popup .k-list-content[role="listbox"]` | `aria-label or aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-combobox-popup .k-list-item` | `role=option` | Each list item is an option. |
| `.k-combobox-popup .k-list-item` | `aria-selected (when selectable)` | Indicates the selected state. |
| `.k-combobox-popup .k-no-data` | `aria-live=polite` | Announces no-data state to screen readers. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Combobox component:

| Shortcut | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `Down Arrow` | Highlights the next available item. |
| `Up Arrow` | Highlights the previous available item. |
| `Enter` | Selects the focused item. |
| `Alt (or Opt on Mac) + Down` | Opens the popup. |
| `Alt (or Opt on Mac) + Up or Esc` | Closes the popup. |
| `Esc` | If the popup is not visible, clears the value. |
