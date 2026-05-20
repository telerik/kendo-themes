# Autocomplete Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Autocomplete component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-autocomplete .k-input-inner` | `role=combobox` | Announces the autocomplete input. |
| `.k-autocomplete .k-input-inner` | `aria-haspopup=listbox` | Indicates the component has a listbox popup. |
| `.k-autocomplete .k-input-inner` | `aria-expanded` | Announces the popup visibility. |
| `.k-autocomplete .k-input-inner` | `aria-label` | Accessible name for the autocomplete. |
| `.k-autocomplete.k-disabled .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the autocomplete is disabled. |
| `.k-autocomplete-popup .k-list-content, .k-autocomplete-popup .k-list-ul` | `role=listbox` | Popup list has listbox role. |
| `.k-autocomplete-popup .k-list-ul[role="listbox"], .k-autocomplete-popup .k-list-content[role="listbox"]` | `aria-label or aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-autocomplete-popup .k-list-item` | `role=option` | Each list item is an option. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Autocomplete component:

| Shortcut | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `Alt (or Opt on Mac) + Down Arrow` | Opens the popup. |
| `Alt (or Opt on Mac) + Up Arrow or Esc` | Closes the popup. |
| `Esc` | Resets the value in the input when the popup is closed. |
| `Enter` | Triggers the `change` event. |
