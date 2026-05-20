# Multiviewcalendar Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Multiviewcalendar component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-calendar-range .k-calendar-view` | `role=grid` | Specifies the role of the multi-view calendar wrapper. |
| `.k-calendar-range .k-calendar-view` | `aria-labelledby` | Pointing to the k-calendar-title element. |
| `.k-calendar-range .k-calendar-view` | `tabindex=0` | Makes the grid focusable. |
| `.k-calendar-range .k-calendar-table` | `role=none` | Inner tables have role removed — content belongs to single grid. |
| `.k-calendar-thead` | `role=rowgroup` | Explicit rowgroup role. |
| `.k-calendar-tbody` | `role=rowgroup` | Explicit rowgroup role. |
| `.k-calendar-tr` | `role=row` | Explicit row role. |
| `.k-calendar-thead .k-calendar-th` | `role=columnheader` | Column header for day names. |
| `.k-calendar-thead .k-calendar-th` | `scope=col` | Specifies the header applies to a column. |
| `.k-calendar-thead .k-calendar-th` | `aria-label` | Full name of the day of the week. |
| `.k-calendar-td:not(.k-alt):not(.k-empty)` | `role=gridcell` | Date cells in the calendar body. |
| `.k-calendar-td.k-selected` | `aria-selected=true` | Indicates the selected date. |
| `.k-calendar-td.k-disabled` | `aria-disabled=true` | Indicates a disabled date. |
| `.k-calendar-nav-prev,.k-calendar-nav-next` | `tabindex=-1` | Navigation buttons are not focusable. |
| `.k-calendar-title` | `tabindex=-1` | Title button is not focusable. |
| `.k-calendar-nav-today` | `tabindex=-1` | Today link is not focusable. |
