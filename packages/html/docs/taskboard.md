# Taskboard Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Taskboard provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Taskboard is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### TaskBoard

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-taskboard` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="application"` | The TaskBoard has role=application as its inner navigation requires the use of arrows. |
| `role="form"` | The edit Form needs the appropriate role. |
| `aria-labelledby` | The TaskBoard edit form must be labeled by the header text of the pane. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Navigates through the TaskBoard tab stops - the ToolBar, each Column, column action buttons, each Card, popup items, and pane fields/buttons. |
| `ArrowLeft` | Focuses the previous column or a card in the previous column. |
| `ArrowRight` | Focuses the next column or a card in the next column. |
| `ArrowUp` | Focuses the previous card. |
| `ArrowDown` | Focuses the next card. |
| `Enter` | Selects the focused card. |
| `Delete` | Deletes the currently focused item. When focus is on a card, deletes the card. When focus is on a column, deletes the column. If delete confirmation is enabled, opens a confirmation dialog instead of deleting immediately. |
| `Control + E` | Puts the focused card or column in edit mode. |
| `Control + A` | Creates a new card or column. Creating a card is blocked when the target column has reached its WIP limit. |
| `Enter or Space` | Activates the focused popup action. |
| `ArrowUp` | Moves focus to the previous popup item. |
| `ArrowDown` | Moves focus to the next popup item. |
| `Escape` | Closes the popup and returns focus to the actions button. |
| `Enter` | When focus is in the title field, saves the current changes. |
| `Control + Enter` | When focus is in the description field, saves the current changes. |
| `Escape` | Closes the pane and returns focus to the element that opened it. |
| `Tab` | Moves focus to the next field or action in the pane. |
| `Shift + Tab` | Moves focus to the previous field or action in the pane. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Columns | Tasks are grouped into columns that represent workflow stages. |
| Cards | Each task is displayed as a card with a title and optional metadata. |
| Drag and drop | Cards are dragged between columns to update their status. |
| Add card | Each column has an add button to create a new task. |
| Edit card | Clicking a card opens an edit form for the task details. |

### Testing

The Taskboard has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Taskboard has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA spec: Role List](https://www.w3.org/TR/wai-aria-1.2/#listt)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/taskboard/`](https://github.com/telerik/kendo-themes/tree/develop/tests/taskboard/).
