# DockManager Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the DockManager component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dock-manager` | `role=application` | Indicates that the DockManager has its own keyboard navigation implemented. |
| `.k-dock-manager` | `aria-live=polite` | Defines dynamic content changes within the DockManager container. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the DockManager component:

| Shortcut | Behavior |
| --- | --- |
| `Alt/Option(Mac) + Arrow Up` | Maximizes the active pane. |
| `Alt/Option(Mac) + Arrow Down` | Minimizes the active pane. |
| `Esc` | Closes the active pane. |
| `Alt/Option(Mac) + Arrow Left` | Unpins the active pane. |
| `Alt/Option(Mac) + Arrow Right` | Pins the active pane. |
| `Ctrl/Cmd(Mac) + Arrow Right` | Focuses the next content pane. |
| `Ctrl/Cmd(Mac) + Arrow Left` | Focuses the previous content pane. |
| `Ctrl/Cmd(Mac) + Shift + Arrow Up` | Docks the active pane to the global top. |
| `Ctrl/Cmd(Mac) + Shift + Arrow Down` | Docks the active pane to the global bottom. |
| `Ctrl/Cmd(Mac) + Shift + Arrow Left` | Docks the active pane to the global left. |
| `Ctrl/Cmd(Mac) + Shift + Arrow Right` | Docks the active pane to the global right. |
