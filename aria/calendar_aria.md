## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Calendar Grid Element


The Calendar Grid should follow the requirements for the `grid` role (https://www.w3.org/TR/wai-aria-1.2/#grid). It is a single-tab-stop component. All the button actions available for mouse users are also available via keyboard shortcuts.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-table` | `role=grid` | Specifies the role of the Calendar dates table. |
|  | `aria-labelledby=.k-nav-fast id` | Pointing to the current view label (e.g. `March 2022` or `2020-2029`). |
|  | `aria-activedescendant=.k-calendar-td.k-focus id` | Pointing to the currently active (focused) date/month/year/decade in the table. |
|  | `tabindex=0` | Makes the grid focusable. |
| `.k-calendar-thead` | `role=rowgroup` | There must be `<thead>` element or an element with `role="rowgroup"`. That group of rows must contain the header row of cells. |
| `.k-calendar-tbody` | `role=rowgroup` | There must be `<tbody>` element or an element with `role="rowgroup"`. That group of rows must contain the rows with date/month/tear/decade cells. |
| `.k-calendar-tr` | `role=row` | The `thead` and the `tbody` elements must contain `<tr>` elements or elements with `role="row"`. |
| `.k-content:nth-child(1) .k-calendar-th` | `scope=col` | Specifies that the header is applied to a column. |
|  | `aria-label` | Specifies the full name of the day of the week (the column header). |
|  | `role=columnheader` or `nodeName=th` | The row in the `<thead>` must contain `<th>` elements or elements with `role="columnheader"`. |
| `.k-calendar-td` | `role=gridcell` | The rows in the `<tbody>` must contain `<td>` elements or elements with `role="gridcell"`. |
| `.k-calendar-td.k-selected` | `aria-selected=true` | Specifies whether the date is selected or not. |
| `.k-calendar-td.k-disabled` | `aria-disabled=true` | When a date is not available for selection, its gridcell element must have the attribute set to `true`. |
| `.k-year .k-calendar-td` | `aria-label` | Applicable in year view - for better context contains the full name of the month. May also be applied in month view to specify the full text for a date. |

### Calendar Links and Buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-nav-next,.k-nav-prev` | `role=button` or `nodeName=button` | Previous / Next buttons must either be `<button>` elements or have the appropriate role. |
|  | `aria-label` or `title` | Previous and Next buttons must have descriptive text set as they contain only an icon (no text). |
|  | `tabindex=-1` | The buttons must not be focusable. |
| `.k-nav-next.k-disabled,.k-nav-prev.k-disabled` | `aria-disabled=true` | When navigation is not allowed outside the current month/year/decade the Previous and Next buttons should have this attribute set to `true`. |
| `.k-nav-fast` | `role=button` or `nodeName=button` | Go to parent view button must either be a `<button>` element or must have the appropriate role. |
|  | `aria-label` or `title` | Go to parent view button must have descriptive text set explaining its purpose. |
|  | `tabindex=-1` | The buttons must not be focusable. |
| `.k-nav-fast.k-disabled` | `aria-disabled` | When navigation is not allowed outside the current view the button should have this attribute set to `true`. |
| `.k-nav-today` | `role=link` or `nodeName=a` | Today link must either be `<a>` element or must have the appropriate role. |
|  | `tabindex=-1` | The link must not be focusable. |

