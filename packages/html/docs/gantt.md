# Gantt Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Gantt component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-gantt` | `role=application` | The Gantt uses role=application to indicate a complex interactive widget. |
| `.k-gantt` | `aria-roledescription` | Provides a human-readable description of the component role. |
| `.k-gantt-toolbar` | `role=toolbar` | The toolbar is a collection of command buttons and inputs. |
| `.k-gantt-toolbar` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-gantt-toggle` | `aria-label` | Icon-only toggle button must have accessible text. |
| `select.k-views-dropdown` | `aria-label` | The view selector dropdown must have an accessible name. |
| `.k-gantt-timeline .k-grid-content` | `role=tree` | The timeline content area is a tree structure. |
| `.k-gantt-timeline .k-gantt-rows` | `role=presentation` | The rows grid is presentational. |
| `.k-gantt-timeline .k-gantt-columns` | `role=presentation` | The columns grid is presentational. |
| `.k-gantt-timeline .k-gantt-tasks` | `role=presentation` | The tasks table is presentational. |
| `.k-gantt-timeline .k-task` | `role=treeitem` | Each task in the timeline is a tree item. |
| `.k-gantt-timeline .k-task` | `aria-level (when present)` | Specifies the nesting level of the task. |
| `.k-gantt-timeline .k-task` | `aria-describedby (when present)` | References the tooltip providing task details (when visible). |
| `.k-gantt-timeline .k-task .k-task-complete` | `aria-hidden=true` | The progress indicator is decorative. |
| `.k-gantt-timeline .k-task .k-task-actions` | `aria-hidden=true` | Task action buttons are hidden from the accessibility tree. |
| `.k-gantt-dependencies` | `aria-hidden=true` | Dependency lines are decorative. |
| `.k-current-time` | `aria-hidden=true` | The current time marker is decorative. |
| `.k-task-dot` | `aria-hidden=true` | Task connection dots are decorative. |
| `.k-gantt-line` | `aria-hidden=true` | Dependency connector lines are decorative. |
| `.k-task-draghandle` | `aria-hidden=true` | The progress drag handle is decorative. |
| `.k-resize-handle` | `aria-hidden=true` | Resize handles are decorative. |
| `.k-drag-cell` | `aria-label` | Drag cells must have an accessible name. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Gantt component:

| Shortcut | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + 1,2,3,...` | navigates to the view with the respective number |
| `F10` | Focuses the ToolBar. |
| `Tab` | Moves focus to the corresponding task in the TimeLine. |
| `Shift + Tab` | If focus has been previously on the same line in the treelist, moves focus to last focused cell. Otherwise, focus the last cell on the same line. |
| `Home` | Moves focus to first task. |
| `End` | Moves focus to the last task. |
| `Up Arrow` | Moves focus to previous task. |
| `Down Arrow` | Moves focus to the next task. |
| `Left Arrow` | Scrolls the view to the left. |
| `Right Arrow` | Scrolls the view to the right. |
| `Enter` | Gantt Popup Form is opened to provide editing of the task. The dependencies and field edit is made. On close focus is returned on the task. |
| `Delete` | The task gets deleted. The focus is moved to the previous task. |
| `Alt/Opt(Mac) + Right Arrow` | The task is expanded, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it. |
| `Alt/Opt(Mac) + Left Arrow` | The task is collapsed, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it. |
