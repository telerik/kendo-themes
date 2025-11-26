## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The TaskBoard component is a composite component that contains:


 - `ToolBar` - on top of the component
 - `Columns` - it represents a list of tasks


Each Column contains:


 - `Buttons` - action buttons present on the top of each column
 - `Tasks` - a collection of tasks (cards/list items)

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-taskboard` | `role=application` | The TaskBoard has `role=application` as its inner navigation requires the use of arrows. |
| `.k-taskboard-column` | `role=list` | The TaskBoard Column is a collection of list items. |
|  | `tabindex=0` | The TaskBoard Column must be focusable. |
|  | `aria-labelledby=.k-taskboard-column-header id` | The TaskBoard Column must be labelled by its header. |
| `.k-taskboard-column-action-button` | `role=button` or `nodeName=button` | The TaskBoard Column actions are buttons. |
|  | `aria-label` or `title` | Each action must have an accessible name as they are represented by icons and no text is available in their contents. |
| `.k-taskboard-card` | `role=listitem` | The TaskBoard Tasks (cards) are list items. |
|  | `tabindex=0` | The TaskBoard Card must be focusable. |
| `.k-taskboard-card-menu-button` | `role=button` or `nodeName=button` | The TaskBoard card menu element must be a button. |
|  | `aria-label` or `title` | The menu button must have an accessible name as it is represented by an icon and no text is available in its contents. |
| `.k-taskboard-pane-header-actions>.k-button` | `role=button` or `nodeName=button` | The TaskBoard edit form close element must be a button. |
|  | `aria-label` or `title` | The edit form close button must have an accessible name as it is represented by an icon and no text is available in its contents. |
| `.k-taskboard-edit-pane .k-form` | `role=form` | The edit Form needs the appropriate role to be assigned to it. |
|  | `aria-labelledby=.k-taskboard-pane-header-text id` | The TaskBoard edit form must be labeled by the header text of the pane it is located at. |

