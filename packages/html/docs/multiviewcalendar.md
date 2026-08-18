# Multiviewcalendar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Multiviewcalendar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Multiviewcalendar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### MultiViewCalendar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="grid"` | Specifies the role of the multi-view calendar wrapper. |
| `aria-labelledby` | Pointing to the k-calendar-title element. |
| `tabindex="0"` | Makes the grid focusable. |
| `role="none"` | Inner tables have role removed — content belongs to single grid. |
| `role="rowgroup"` | Explicit rowgroup role. |
| `role="row"` | Explicit row role. |
| `role="columnheader"` | Column header for day names. |
| `scope="col"` | Specifies the header applies to a column. |
| `aria-label` | Full name of the day of the week. |
| `role="gridcell"` | Date cells in the calendar body. |
| `aria-selected="true"` | Indicates the selected date. |
| `aria-disabled="true"` | Indicates a disabled date. |
| `tabindex="-1"` | Navigation buttons are not focusable. |
| `tabindex="-1"` | Title button is not focusable. |
| `tabindex="-1"` | Today link is not focusable. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Multiple months | Displays two or more months simultaneously for range selection. |
| Range highlighting | Visually connects and highlights the selected date range across all views. |
| Synchronized navigation | Clicking the previous or next arrow advances all calendar views together. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/multiviewcalendar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/multiviewcalendar/).
