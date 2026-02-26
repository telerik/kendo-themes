## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The component is a single tab stop, so the arrows must be used for internal navigation. Notable exception is that scrollable containers in non-agenda views should be focusable too.

### Scheduler Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-scheduler` | `role=application` | Specifies the role of the component. |
|  | `aria-activedescendant=.k-event.k-selected id` | Points to the currently active appointment in the Scheduler. |

### Scheduler Toolbar


The Scheduler toolbar must implement the specification for a ToolBar component.

[ToolBar accessibility specification](toolbar_aria.md)


Below are listed the requirements for those components part of the ToolBar.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-nav-prev,.k-nav-next` | `aria-label` | Required as those buttons contain only icon (no text). |
| `.k-nav-current` | `aria-live=polite` | The new date of the Scheduler view will be announced upon navigation to new time span / view type. |
| `.k-views-dropdown` | `aria-label` | Specifies the purpose of the element. The `<select>` element visible on the toolbar on small screens must have its "aria-label" set. |


Depending on the current view, The Scheduler component implements different roles. Below are described the three possible approaches:

### Scheduler in Agenda view


In case of an Agenda view, the role assigned to the Scheduler layout table (`k-scheduler-layout` element) must be `grid`.

#### Table element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-scheduler-agendaview` | `role=grid` | The main table of the Agenda view must indicate it is a Data Grid. |
| `.k-scheduler-agendaview>tbody` | `role=none/presentation` | The `<tbody>` element must have its semantics removed. |
| `.k-scheduler-agendaview .k-scheduler-table` | `role=none/presentation` | Those `<table>` elements within the Scheduler must have their semantic role removed. |
| `.k-scheduler-agendaview .k-scheduler-table>tbody` | `role=rowgroup` | Those elements must have their role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `.k-scheduler-agendaview .k-scheduler-table>tbody>tr` | `role=row` | Those elements must have their role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `.k-scheduler-agendaview .k-scheduler-table>tbody>tr>th` | `role=columnheader` | Those elements must have their role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `.k-scheduler-agendaview .k-scheduler-content tr .k-selected` | `aria-selected` | `aria-selected` attribute must be used to signify the currently selected row. As in Agenda view the selection follows focus, that would be the current `active descendant` row. |

#### Content table td.k-scheduler-groupcolumn and td.k-scheduler-datecolumn elements

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-groupcolumn,.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-datecolumn` | `role=rowheader` | Those elements must have their role explicitly set as it has been removed by the `<table>` role set (none/presentation). |
| `.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-timecolumn,.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-timecolumn+td` | `role=gridcell` | Those elements must have their role explicitly set as it has been removed by the `<table>` role set (none/presentation). |

### Scheduler in Year view


Scheduler in Year view implements the ARIA specification of the **MultiViewCalendar**.

### Scheduler in all other views


For the rest of the views the `role="none/presentation"` must be used on all inner `<table>` elements in the widget. This way we could freely implement managed focused inside the component based on the arrow keys.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-scheduler-dayview,.k-scheduler-monthview,.k-scheduler-timelineview` | `role=none/presentation` | All `<table>` elements within the Scheduler must have their semantic role removed. |
| `.k-event` | `role=button` | Indicating that the events element is interactive. |
|  | `aria-label` | Label containing the title, start, and end date of the appointment, so that all of them are announced upon navigation to an appointment. |
| `.k-scheduler-layout:not(.k-scheduler-agendaview) .k-scheduler-content` | `tabindex=0` | Scrollable elements need to be focusable (does not apply to agenda view) to ensure scrolling with the arrow keys is available. |

