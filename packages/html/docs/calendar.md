# Calendar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Calendar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Calendar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Calendar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="gridcell"` | Date cells in the calendar body. |
| `aria-selected="true"` | Indicates the selected date. |
| `aria-disabled="true"` | Indicates a disabled date. |
| `tabindex="-1"` | Navigation buttons are not focusable. |
| `aria-label` | Describes the navigation button purpose. |
| `tabindex="-1"` | Title button is not focusable. |
| `aria-label` | Describes the title button purpose. |
| `tabindex="-1"` | Today link/button is not focusable. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Moves focus one row down, navigating the view when focus is in the last row. |
| `ArrowUp` | Moves focus one row up, navigating the view when focus is in the first row. |
| `ArrowLeft` | Moves focus to the previous date, month, year, or decade. |
| `ArrowRight` | Moves focus to the next date, month, year, or decade. |
| `Enter` | Selects the focused date. |
| `Control/Cmd(Mac) + ArrowUp` | Navigates to the upper view. |
| `Control/Cmd(Mac) + ArrowDown` | Navigates to the lower view. |
| `Control/Cmd(Mac) + ArrowRight` | Navigates to the next period. |
| `Control/Cmd(Mac) + ArrowLeft` | Navigates to the previous period. |
| `Home` | Focuses the first day of the month. |
| `End` | Focuses the last day of the month. |
| `PageUp` | Focuses the same date in the previous month. |
| `PageDown` | Focuses the same date in the next month. |
| `t` | Navigates to today's month view and focuses today. |
| `Control/Cmd(Mac) + Enter` | Adds or removes the focused date from the selection in multiple-selection mode. |
| `Shift + ArrowLeft` | Adds the previous date to the selection in multiple-selection mode. |
| `Shift + ArrowRight` | Adds the next date to the selection in multiple-selection mode. |
| `Shift + ArrowUp` | Extends selection up one row in month view. |
| `Shift + ArrowDown` | Extends selection down one row in month view. |
| `Shift + Enter` | Selects the range between the last selected date and the focused date. |
| `Shift + Space` | Selects the range between the last selected date and the focused date. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Month view | Displays a grid of days for the current month. |
| Navigation | Arrow buttons navigate to the previous and next time period. |
| View switching | Clicking the title switches between day, month, and year views. |
| Date selection | Clicking a date cell selects it. |
| Range selection | In range mode, the first and second click define start and end dates. |
| Disabled dates | Individual dates can be disabled and are skipped during keyboard navigation. |

### CalendarInfinite

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="grid"` | Specifies the role of the Calendar view container. |
| `aria-labelledby` | Pointing to the current view label (e.g. March 2022 or 2020-2029). |
| `tabindex="0"` | Makes the grid focusable. |
| `role="none"` | Inner table has role removed — content belongs to the grid on the view. |

### CalendarInfiniteView

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-labelledby` | for the content grid table |

### CalendarTableRow

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="row"` | Each row in the calendar table. |

### CalendarTbody

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="rowgroup"` | Groups body rows. |

### Testing

The Calendar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Calendar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/calendar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/calendar/).
