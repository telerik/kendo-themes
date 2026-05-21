# Taskboard Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Taskboard component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-taskboard` | `role=application` | The TaskBoard has role=application as its inner navigation requires the use of arrows. |
| `.k-taskboard-column-cards-container` | `role=list` | The TaskBoard Column cards container is a collection of list items. |
| `.k-taskboard-column-cards-container` | `tabindex=0` | The TaskBoard Column cards container must be focusable. |
| `.k-taskboard-column-cards-container` | `aria-labelledby` | The TaskBoard Column cards container must be labelled by its column header. |
| `.k-taskboard-column-header-actions > .k-button` | `role=button or nodeName=button` | The TaskBoard Column actions are buttons. |
| `.k-taskboard-column-header-actions > .k-button` | `aria-label or title` | Each action must have an accessible name as they are represented by icons. |
| `.k-taskboard-column-cards` | `role=presentation` | The cards inner container must not break the list-listitem relationship. |
| `.k-taskboard-card` | `role=listitem` | The TaskBoard Tasks (cards) are list items. |
| `.k-taskboard-card` | `tabindex=0` | The TaskBoard Card must be focusable. |
| `.k-taskboard-card-menu-button` | `role=button or nodeName=button` | The TaskBoard card menu element must be a button. |
| `.k-taskboard-card-menu-button` | `aria-label or title` | The menu button must have an accessible name as it is represented by an icon. |
| `.k-taskboard-pane-header-actions > .k-button` | `role=button or nodeName=button` | The TaskBoard edit form close element must be a button. |
| `.k-taskboard-pane-header-actions > .k-button` | `aria-label or title` | The edit form close button must have an accessible name. |
| `.k-taskboard-edit-pane .k-form` | `role=form` | The edit Form needs the appropriate role. |
| `.k-taskboard-edit-pane .k-form` | `aria-labelledby` | The TaskBoard edit form must be labeled by the header text of the pane. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Taskboard component:

| Shortcut | Behavior |
| --- | --- |
| `Tab` | Navigates through the TaskBoard tab stops - the ToolBar, each Column, column action buttons, each Card, popup items, and pane fields/buttons. |
| `Left Arrow` | Focuses the previous column or a card in the previous column. |
| `Right Arrow` | Focuses the next column or a card in the next column. |
| `Up Arrow` | Focuses the previous card. |
| `Down Arrow` | Focuses the next card. |
| `Enter` | Selects the focused card. |
| `Delete` | Deletes the currently focused item. When focus is on a card, deletes the card. When focus is on a column, deletes the column. If delete confirmation is enabled, opens a confirmation dialog instead of deleting immediately. |
| `Ctrl + E` | Puts the focused card or column in edit mode. |
| `Ctrl + A` | Creates a new card or column. Creating a card is blocked when the target column has reached its WIP limit. |
| `Enter or Space` | Activates the focused popup action. |
| `Up Arrow` | Moves focus to the previous popup item. |
| `Down Arrow` | Moves focus to the next popup item. |
| `Esc` | Closes the popup and returns focus to the actions button. |
| `Enter` | When focus is in the title field, saves the current changes. |
| `Ctrl + Enter` | When focus is in the description field, saves the current changes. |
| `Esc` | Closes the pane and returns focus to the element that opened it. |
| `Tab` | Moves focus to the next field or action in the pane. |
| `Shift + Tab` | Moves focus to the previous field or action in the pane. |
