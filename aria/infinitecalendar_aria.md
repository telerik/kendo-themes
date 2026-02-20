## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Calendar Table element


The wrapper of the infinite calender should follow the requirements for the `grid` role (https://www.w3.org/TR/wai-aria-1.2/#grid).

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-calendar-infinite` | `role=grid` | Specifies the role of the Calendar wrapper element. |
|  | `aria-label` or `aria-labelledby` | Pointing to the current view `k-calendar-title` element (e.g. `March 2022` or `2020-2029`). |
|  | `aria-activedescendant=.k-calendar-td.k-focus id` | Pointing to the currently active (focused) date/month/year/decade cell in the tables. |
|  | `tabindex=0` | Makes the grid focusable. |
| `.k-calendar-infinite .k-calendar-table` | `role=none` | All `k-calendar-table` elements must have their role set to `none`. That is because their content must be made belonging to a single `grid` component. |
| `.k-calendar-infinite .k-calendar-thead` | `role=rowgroup` | The `k-calendar-thead` must explicitly have its role set to `rowgroup` as its semantics have been removed while setting its `<table>` role to `none`. |
| `.k-calendar-infinite .k-calendar-tbody` | `role=rowgroup` | The `k-calendar-tbody` elements must explicitly have their roles set to `rowgroup` as their semantics have been removed while setting their `<table>` elements role to `none`. |
| `.k-calendar-infinite .k-calendar-tr` | `role=row` | The `k-calendar-tr` elements must explicitly have their roles set to `row` as their semantics have been removed while setting their `<table>` elements role to `none`. |
| `.k-calendar-infinite .k-calendar-th` | `role=columnheader` | The `k-calendar-th` elements must explicitly have their roles set to `columnheader` as their semantics have been removed while setting their `<table>` elements role to `none`. |
|  | `scope=col` | Specifies that the header is applied to a column. |
|  | `aria-label` | Specifies the full name of the day of the week (the column header). |
| `.k-calendar-caption` | `role=columnheader` | The `k-calendar-caption` elements must explicitly have their roles set to `columnheader` as their semantics have been removed while setting their `<table>` elements role to `none`. |
|  | `scope=col` | Specifies that the header is applied to a column. |
| `.k-calendar-infinite .k-calendar-td` | `role=gridcell` | The cells must explicitly have their roles set to `gridcell` as their semantics have been removed while setting their `<table>` elements role to `none`. |
|  | `aria-label ` or `title` | Applicable in year view - for better context contains the full name of the month. May also be applied in month view to specify the full text for a date. |
| `.k-calendar-td.k-selected` | `aria-selected` | Specifies whether the date is selected or not. |
| `.k-calendar-td.k-disabled` | `aria-disabled` | When a date is not available for selection, its gridcell element must have the attribute set to `true`. |

### Button and Link elements

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prev-view,.k-next-view` | `tabindex=-1` | The buttons must not be focusable. |
| `.k-calendar-title` | `tabindex=-1` | The button must not be focusable. |
| `.k-nav-today` | `tabindex=-1` | The link must not be focusable. |

