# Scheduler Accessibility

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
| `role="group"` | Follows SegmentedControl spec: sets the proper role for the group of view buttons. |
| `aria-pressed` | Follows SegmentedControl spec: specifies the current state of the view SegmentedControl. Only the selected button within the group will have this attribute set to true. |
| `role="grid"` | The main table of the Agenda view must indicate it is a Data Grid. |
| `role="none"|\"presentation"` | The `<tbody>` element must have its semantics removed. |
| `role="none"|\"presentation"` | All `<table>` elements within the Scheduler must have their semantic role removed. |

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

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Indicating that the event element is interactive. |
| `aria-label` | Label containing the title, start, and end date of the appointment. |

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
