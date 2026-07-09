# Gantt Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Gantt provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Gantt is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Gantt

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="application"` | The Gantt uses role=application to indicate a complex interactive widget. |
| `aria-roledescription` | Provides a human-readable description of the component role. |
| `role="toolbar"` | The toolbar is a collection of command buttons and inputs. |
| `aria-label` | Clarifies the purpose of the toolbar. |
| `aria-label` | Icon-only toggle button must have accessible text. |
| `role="tree"` | The timeline content area is a tree structure. |
| `role="treeitem"` | Each task in the timeline is a tree item. |
| `aria-level` | Specifies the nesting level of the task. |
| `aria-describedby` | References the tooltip providing task details (when visible). |
| `aria-hidden="true"` | The progress indicator is decorative. |
| `aria-hidden="true"` | Task action buttons are hidden from the accessibility tree. |
| `aria-hidden="true"` | Dependency lines are decorative. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + 1,2,3,...` | navigates to the view with the respective number |
| `F10` | Focuses the ToolBar. |
| `Tab` | Moves focus to the corresponding task in the TimeLine. |
| `Shift + Tab` | If focus has been previously on the same line in the treelist, moves focus to last focused cell. Otherwise, focus the last cell on the same line. |
| `Home` | Moves focus to first task. |
| `End` | Moves focus to the last task. |
| `ArrowUp` | Moves focus to previous task. |
| `ArrowDown` | Moves focus to the next task. |
| `ArrowLeft` | Scrolls the view to the left. |
| `ArrowRight` | Scrolls the view to the right. |
| `Enter` | Gantt Popup Form is opened to provide editing of the task. The dependencies and field edit is made. On close focus is returned on the task. |
| `Delete` | The task gets deleted. The focus is moved to the previous task. |
| `Alt/Opt(Mac) + ArrowRight` | The task is expanded, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it. |
| `Alt/Opt(Mac) + ArrowLeft` | The task is collapsed, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it. |

### GanttColumnsTable

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | The view selector dropdown must have an accessible name. |
| `role="presentation"` | The columns grid is presentational. |
| `aria-hidden="true"` | The current time marker is decorative. |
| `aria-hidden="true"` | Resize handles are decorative. |
| `aria-label` | Drag cells must have an accessible name. |

### GanttLine

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | Dependency connector lines are decorative. |

### GanttRowsTable

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="presentation"` | The rows grid is presentational. |

### GanttTask

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | The progress drag handle is decorative. |

### GanttTaskDot

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | Task connection dots are decorative. |

### GanttTasksTable

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="presentation"` | The tasks table is presentational. |

### Testing

The Gantt has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Gantt has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
