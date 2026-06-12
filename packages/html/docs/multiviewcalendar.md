# Multiviewcalendar Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Multiviewcalendar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Multiviewcalendar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-calendar-range .k-calendar-view` | `role` = `grid` | Specifies the role of the multi-view calendar wrapper. |
| `.k-calendar-range .k-calendar-view` | `aria-labelledby` | Pointing to the k-calendar-title element. |
| `.k-calendar-range .k-calendar-view` | `tabindex` = `0` | Makes the grid focusable. |
| `.k-calendar-range .k-calendar-table` | `role` = `none` | Inner tables have role removed — content belongs to single grid. |
| `.k-calendar-thead` | `role` = `rowgroup` | Explicit rowgroup role. |
| `.k-calendar-tbody` | `role` = `rowgroup` | Explicit rowgroup role. |
| `.k-calendar-tr` | `role` = `row` | Explicit row role. |
| `.k-calendar-thead .k-calendar-th` | `role` = `columnheader` | Column header for day names. |
| `.k-calendar-thead .k-calendar-th` | `scope` = `col` | Specifies the header applies to a column. |
| `.k-calendar-thead .k-calendar-th` | `aria-label` | Full name of the day of the week. |
| `.k-calendar-td:not(.k-alt):not(.k-empty)` | `role` = `gridcell` | Date cells in the calendar body. |
| `.k-calendar-td.k-selected` | `aria-selected` = `true` | Indicates the selected date. |
| `.k-calendar-td.k-disabled` | `aria-disabled` = `true` | Indicates a disabled date. |
| `.k-calendar-nav-prev,.k-calendar-nav-next` | `tabindex` = `-1` | Navigation buttons are not focusable. |
| `.k-calendar-title` | `tabindex` = `-1` | Title button is not focusable. |
| `.k-calendar-nav-today` | `tabindex` = `-1` | Today link is not focusable. |

### Testing

The Multiviewcalendar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Multiviewcalendar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html)
