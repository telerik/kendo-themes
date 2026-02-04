## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Gantt component is a composite component that is used to represent project planning.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-gantt` | `role=application` | Indicates the Gantt's role as an application. |


The Gantt component integrates the toolbar component and follows its wai-aria support.

[ToolBar accessibility specification](toolbar_aria.md)


The main inner component in the Gantt is the TreeList.

[TreeList accessibility specification](treelist_aria.md)


Another part of the component is the Splitter component and Wai-Aria support.

[Splitter accessibility specification](splitter_aria.md)


The following Wai-Aria support is implemented in the TimeLine of the Gantt.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-gantt-timeline .k-grid-content` | `role=tree` | Associates the role of the timeline as a tree. |
| `.k-gantt-timeline .k-gantt-rows` | `role=presentation` | Used to build the accessibility tree. |
| `.k-gantt-timeline .k-gantt-columns` | `role=presentation` | Used to build the accessibility tree. |
| `.k-gantt-timeline .k-gantt-tasks` | `role=presentation` | Used to build the accessibility tasks. |
| `.k-gantt-timeline .k-task` | `role=treeitem` | Associates the role of the timeline task as a tree item. |
|  | `aria-level` | Specifies the level of the task. |
|  | `aria-describedby=.k-tooltip id` | Gives more details for the task through its tooltip. |
| `.k-gantt-timeline .k-task .k-task-complete` | `aria-hidden=true` | Hides the status element from the task. |
| `.k-gantt-timeline .k-task .k-task-actions` | `aria-hidden=true` | Hides the actions element from the task. |

