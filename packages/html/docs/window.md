# Window Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Window component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-window:not(.k-dialog)` | `role=dialog` | Announces the dialog role of the component. |
| `.k-window:not(.k-dialog)` | `aria-labelledby` | Associate the title of the dialog. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Window component:

| Shortcut | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + DownArrow` | Minimizes or restores the state, if the focused element is the window |
| `Alt/Opt(Mac) + UpArrow` | Maximizes or restores the state, if the focused element is the window |
| `Arrow Keys` | Move the window to the respective direction (UP |
| `Ctrl/Cmd(Mac) + UpArrow` | Decreases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Ctrl/Cmd(Mac) + DownArrow` | Increases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Ctrl/Cmd(Mac) + LeftArrow` | Decreases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Ctrl/Cmd(Mac) + RightArrow` | Increases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Escape` | Closes the window. When the window is modal, the focus should be returned to the element that triggered the open. |
