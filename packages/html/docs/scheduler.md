# Scheduler Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Scheduler provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Scheduler is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Scheduler

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="application"` | Specifies the role of the component. |
| `aria-label` | Required as the previous navigation button contains only an icon (no text). |
| `aria-label` | Required as the next navigation button contains only an icon (no text). |
| `aria-label` | Required for the "New Event" button. When collapsed to icon-only at narrow widths, this is the only accessible name. |
| `aria-label` | Required as the Open calendar button contains only an icon (no text). |
| `aria-label` | Required as the Create event button contains only an icon (no text). |
| `aria-live="polite"` | The new date of the Scheduler view will be announced upon navigation to a new time span or view type. |
| `role="group"` | Follows SegmentedControl spec: sets the proper role for the group of view buttons. |
| `aria-pressed` | Follows SegmentedControl spec: specifies the current state of the view SegmentedControl. Only the selected button within the group will have this attribute set to true. |
| `role="grid"` | The main table of the Agenda view must indicate it is a Data Grid. |
| `role="none"|"presentation"` | The `<tbody>` element must have its semantics removed. |
| `role="none"|"presentation"` | All `<table>` elements within the Scheduler must have their semantic role removed. |
| `role="button"` | Indicating that the event element is interactive. |
| `aria-label` | Label containing the title, start, and end date of the appointment. |
| `aria-disabled="true"` | Read-only events cannot be edited or dragged; aria-disabled signals this to assistive technologies. |
| `aria-label` | When the date cell shows a short day abbreviation and a date number separately, aria-label should combine both so the link has a descriptive accessible name. |
| `aria-label` | The "N more" button text is ambiguous; aria-label should read "N more events" to clarify what the button reveals. |
| `role="list"` | The tooltip events container acts as a list of event summaries. |
| `role="listitem"` | Each tooltip event is a non-interactive list item. |
| `role="group"` | Groups the day-of-week toggle buttons into a logical set. |
| `aria-label` | Labels the weekday picker group (e.g. "Repeat on days"). |
| `aria-label` | Full day name for each abbreviated day button in the weekday picker (e.g. "Monday"). |
| `aria-pressed` | Indicates whether the day is currently selected in the weekday picker. |
| `tabindex` | Roving tabindex: only one weekday picker button has tabindex="0", the rest have tabindex="-1". |
| `tabindex="0"` | Scrollable non-agenda content must be focusable to ensure keyboard scrolling is available. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `t` | navigates to today's time period |
| `c` | opens the popup for creation of new appointment |
| `b` | toggles view between business hours and full day (where available) |
| `Shift + ArrowLeft` | navigates to the previous time period |
| `Shift + ArrowRight` | navigates to the next time period |
| `Alt/Opt(Mac) + 1,2,3,...` | navigates to the view with the respective number |
| `F10` | Focuses the ToolBar. |
| `Arrow Keys` | move focus through appointments and the `more events` button, then continue to the next appointment in sequence |
| `Enter` | opens the Edit Popup to modify the appointment |
| `Delete or Backspace` | opens the Delete confirmation popup to modify the appointment |
| `Enter` | If date is focused, opens its Tooltip. |
| `Enter` | If Tooltip is focused, navigates to Day view displaying the Tooltip date. |
| `Delete or Backspace` | If a Tooltip is focused, closes that and returns focus to its target date. |
| `ArrowLeft or ArrowRight` | move focus through tools |
| `ArrowDown` | moves focus to the selected (if present), or the first event (if any) in the view |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Multiple views | Switches between day, week, month, agenda, and timeline views. |
| View switcher | Views are accessible via a ButtonGroup or a DropDown in the toolbar. |
| Navigation | Previous and next buttons move to the adjacent time period. |
| Today button | A button jumps the view back to the current date instantly. |
| Calendar navigation | A calendar button opens a date picker for jumping to any date. |
| Business hours | A toggle switches the view between business hours and full day. |
| Resource grouping | Events can be grouped by resource (e.g., room or person) across applicable views. |
| Event creation | Clicking an empty time slot opens a dialog to create a new event. |
| Event editing | Clicking an existing event opens an edit form. |
| Drag and drop | Events can be dragged to a different time slot. |
| Resize | Dragging an event's edge adjusts its duration. |

### SchedulerBody

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-live="polite"` | The new date of the Scheduler view will be announced upon navigation to a new time span or view type. |
| `aria-label` | The `<select>` element visible on the toolbar on small screens must have its aria-label set. |

### SchedulerContent

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-selected` | Used to signify the currently selected row in Agenda view. |
| `role="rowheader"` | Must have role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `role="gridcell"` | Must have role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `tabindex="0"` | Scrollable elements need to be focusable to ensure scrolling with arrow keys is available (does not apply to agenda view). |

### SchedulerEvent

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-event` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Indicating that the event element is interactive. |
| `aria-label` | Label containing the title, start, and end date of the appointment. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Drag and drop | The event can be dragged to a different time slot or resource. |
| Resize | Dragging the event's edge changes its start or end time. |
| Edit on click | Clicking the event opens an edit form. |
| Overflow indicator | A count badge shows when multiple events overlap in the same slot. |

### SchedulerTable

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"|\"presentation"` | Inner `<table>` elements within the Agenda Scheduler must have their semantic role removed. |
| `role="rowgroup"` | Must have role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `role="row"` | Must have role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `role="columnheader"` | Must have role explicitly set as it has been removed by the `<table>` role set (none/presentation). |

### SchedulerTimes

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"|\"presentation"` | Times sidebar tables must have their semantics removed. The role propagates to child th/tr elements, resolving empty-table-header violations. |

### SchedulerToolbar

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="toolbar"` | Follows Toolbar spec: sets the component role. |
| `aria-label|title` | Follows Toolbar spec: each toolbar must have a label specifying its purpose. |

### Testing

The Scheduler has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Scheduler has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for grid](https://www.w3.org/TR/wai-aria-1.2/#grid)
- [WAI-ARIA specification for application](https://www.w3.org/TR/wai-aria-1.2/#application)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/scheduler/`](https://github.com/telerik/kendo-themes/tree/develop/tests/scheduler/).
