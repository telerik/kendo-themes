# ActionSheet Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the ActionSheet component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-actionsheet` | `role=dialog` | Announces the dialog role of the component. |
| `.k-actionsheet` | `aria-labelledby (when has title)` | Associates the title of the action sheet. |
| `.k-actionsheet` | `aria-hidden=true/false (when hidden)` | Announces the hidden state of the ActionSheet container. |
| `.k-actionsheet` | `aria-modal=true (when modal)` | Announces that the action sheet is modal. |
| `.k-actionsheet .k-actionsheet-title` | `id` | Used to associate the title with the action sheet wrapper element. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ActionSheet component:

| Shortcut | Behavior |
| --- | --- |
| `Escape` | Dismisses the ActionSheet. |
| `Tab` | Moves focus to the next focusable item. |
| `Shift+Tab` | Moves focus to the previous focusable item. |
| `Enter` | Triggers the action associated with the currently focused item. |
