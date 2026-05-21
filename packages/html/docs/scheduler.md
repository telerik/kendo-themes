# Scheduler Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Scheduler component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-scheduler` | `role=application` | Specifies the role of the component. |
| `.k-scheduler-toolbar` | `role=toolbar` | Follows Toolbar spec: sets the component role. |
| `.k-scheduler-toolbar` | `aria-label or title` | Follows Toolbar spec: each toolbar must have a label specifying its purpose. |
| `.k-scheduler-navigation .k-button:has([class*="i-chevron-left"])` | `aria-label` | Required as the previous navigation button contains only an icon (no text). |
| `.k-scheduler-navigation .k-button:has([class*="i-chevron-right"])` | `aria-label` | Required as the next navigation button contains only an icon (no text). |
| `.k-nav-current` | `aria-live=polite` | The new date of the Scheduler view will be announced upon navigation to a new time span or view type. |
| `.k-views-dropdown` | `aria-label` | The <select> element visible on the toolbar on small screens must have its aria-label set. |
| `.k-scheduler-views` | `role=group` | Follows SegmentedControl spec: sets the proper role for the group of view buttons. |
| `.k-scheduler-views .k-segmented-control-button` | `aria-pressed (when selected)` | Follows SegmentedControl spec: specifies the current state of the view SegmentedControl. Only the selected button within the group will have this attribute set to true. |
| `.k-scheduler-agendaview` | `role=grid` | The main table of the Agenda view must indicate it is a Data Grid. |
| `.k-scheduler-agendaview>tbody` | `role=none/presentation` | The <tbody> element must have its semantics removed. |
| `.k-scheduler-agendaview .k-scheduler-table` | `role=none/presentation` | Inner <table> elements within the Agenda Scheduler must have their semantic role removed. |
| `.k-scheduler-agendaview .k-scheduler-table>tbody` | `role=rowgroup` | Must have role explicitly set as it has been removed by the <table> role set (none/presentation). |
| `.k-scheduler-agendaview .k-scheduler-table>tbody>tr` | `role=row` | Must have role explicitly set as it has been removed by the <table> role set (none/presentation). |
| `.k-scheduler-agendaview .k-scheduler-table>tbody>tr>th` | `role=columnheader` | Must have role explicitly set as it has been removed by the <table> role set (none/presentation). |
| `.k-scheduler-agendaview .k-scheduler-content tr .k-selected` | `aria-selected` | Used to signify the currently selected row in Agenda view. |
| `.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-groupcolumn,.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-datecolumn` | `role=rowheader` | Must have role explicitly set as it has been removed by the <table> role set (none/presentation). |
| `.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-timecolumn,.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-timecolumn+td` | `role=gridcell` | Must have role explicitly set as it has been removed by the <table> role set (none/presentation). |
| `.k-scheduler-dayview,.k-scheduler-weekview,.k-scheduler-monthview,.k-scheduler-timelineview` | `role=none/presentation` | All <table> elements within the Scheduler must have their semantic role removed. |
| `.k-scheduler-times .k-scheduler-table` | `role=none/presentation` | Times sidebar tables must have their semantics removed. The role propagates to child th/tr elements, resolving empty-table-header violations. |
| `.k-event` | `role=button` | Indicating that the event element is interactive. |
| `.k-event` | `aria-label` | Label containing the title, start, and end date of the appointment. |
| `.k-scheduler-layout:not(.k-scheduler-agendaview) .k-scheduler-content` | `tabindex=0` | Scrollable elements need to be focusable to ensure scrolling with arrow keys is available (does not apply to agenda view). |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Scheduler component:

| Shortcut | Behavior |
| --- | --- |
| `t` | navigates to today's time period |
| `c` | opens the popup for creation of new appointment |
| `b` | toggles view between business hours and full day (where available) |
| `Shift+ Left Arrow` | navigates to the previous time period |
| `Shift+ Right Arrow` | navigates to the next time period |
| `Alt/Opt(Mac) + 1,2,3,...` | navigates to the view with the respective number |
| `F10` | Focuses the ToolBar. |
| `Arrow Keys` | move focus through appointments and the `more events` button, then continue to the next appointment in sequence |
| `Enter` | opens the Edit Popup to modify the appointment |
| `Delete/Backspace` | opens the Delete confirmation popup to modify the appointment |
| `Enter` | If date is focused, opens its Tooltip. |
| `Enter` | If Tooltip is focused, navigates to Day view displaying the Tooltip date. |
| `Delete/Backspace` | If a Tooltip is focused, closes that and returns focus to its target date. |
| `Left/Right ArrowKeys` | move focus through tools |
| `Down ArrowKeys` | moves focus to the selected (if present), or the first event (if any) in the view |
