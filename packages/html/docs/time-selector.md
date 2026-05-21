# TimeSelector Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the TimeSelector component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timeselector` | `role=group` | Groups the time selection columns. |
| `.k-timeselector` | `aria-label` | Describes the time selector purpose. |
| `.k-time-list` | `role=listbox` | Each time column list acts as a listbox. |
| `.k-time-list` | `aria-label` | Describes which time unit the column selects. |
| `.k-time-list-wrapper .k-reset` | `role=none` | Removes semantic meaning from the ul element. |
| `.k-time-list-wrapper .k-item` | `role=option` | Each item in the time list is an option. |
