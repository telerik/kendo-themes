# List Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the List component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-list-item` | `role=option` | Each list item is an option in the listbox. |
| `.k-list-item` | `id` | ID for aria-activedescendant reference. |
| `.k-list-item` | `aria-selected (when selectable)` | Indicates the selected state of the option. |
| `.k-list-group-item` | `role=presentation` | Group headers are presentational, not selectable options. |
| `.k-list-item-icon` | `aria-hidden=true` | Decorative icons are hidden from assistive technology. |
