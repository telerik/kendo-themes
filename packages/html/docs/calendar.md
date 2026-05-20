# Calendar Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Calendar component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-view` | `role=grid` | Specifies the role of the Calendar view container. |
| `.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-view` | `aria-labelledby` | Pointing to the current view label (e.g. March 2022 or 2020-2029). |
| `.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-view` | `tabindex=0` | Makes the grid focusable. |
| `.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-table` | `role=none` | Inner table has role removed — content belongs to the grid on the view. |
| `.k-calendar-thead` | `role=rowgroup` | Groups header rows. |
| `.k-calendar-tbody` | `role=rowgroup` | Groups body rows. |
| `.k-calendar-tr` | `role=row` | Each row in the calendar table. |
| `.k-calendar-thead .k-calendar-th` | `role=columnheader` | Column header for day names. |
| `.k-calendar-thead .k-calendar-th` | `scope=col` | Specifies the header applies to a column. |
| `.k-calendar-thead .k-calendar-th` | `aria-label` | Full name of the day of the week. |
| `.k-calendar-td:not(.k-alt):not(.k-empty)` | `role=gridcell` | Date cells in the calendar body. |
| `.k-calendar-td.k-selected` | `aria-selected=true` | Indicates the selected date. |
| `.k-calendar-td.k-disabled` | `aria-disabled=true` | Indicates a disabled date. |
| `.k-calendar-nav-next,.k-calendar-nav-prev` | `tabindex=-1` | Navigation buttons are not focusable. |
| `.k-calendar-nav-next,.k-calendar-nav-prev` | `aria-label` | Describes the navigation button purpose. |
| `.k-calendar-title` | `tabindex=-1` | Title button is not focusable. |
| `.k-calendar-title` | `aria-label` | Describes the title button purpose. |
| `.k-calendar-nav-today` | `tabindex=-1` | Today link/button is not focusable. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Calendar component:

| Shortcut | Behavior |
| --- | --- |
| `Ctrl/Cmd(Mac) + Right Arrow` | Navigates to the next period. |
| `Ctrl/Cmd(Mac) + Left Arrow` | Navigates to the previous period. |
