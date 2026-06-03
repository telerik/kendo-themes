# Window Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Window component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-window:not(.k-dialog)` | `role` = `dialog` | Announces the dialog role of the component. |
| `.k-window:not(.k-dialog)` | `aria-labelledby` | Associate the title of the dialog. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Window component:

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + ArrowDown` | Minimizes or restores the state, if the focused element is the window |
| `Alt/Opt(Mac) + ArrowUp` | Maximizes or restores the state, if the focused element is the window |
| `Arrow Keys` | Move the window to the respective direction (UP |
| `Control/Cmd(Mac) + ArrowUp` | Decreases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Control/Cmd(Mac) + ArrowDown` | Increases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Control/Cmd(Mac) + ArrowLeft` | Decreases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Control/Cmd(Mac) + ArrowRight` | Increases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Escape` | Closes the window. When the window is modal, the focus should be returned to the element that triggered the open. |
