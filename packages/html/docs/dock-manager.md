# DockManager Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the DockManager component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dock-manager` | `role` = `application` | Indicates that the DockManager has its own keyboard navigation implemented. |
| `.k-dock-manager` | `aria-live` = `polite` | Defines dynamic content changes within the DockManager container. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the DockManager component:

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + ArrowUp` | Maximizes the active pane. |
| `Alt/Opt(Mac) + ArrowDown` | Minimizes the active pane. |
| `Escape` | Closes the active pane. |
| `Alt/Opt(Mac) + ArrowLeft` | Unpins the active pane. |
| `Alt/Opt(Mac) + ArrowRight` | Pins the active pane. |
| `Control/Cmd(Mac) + ArrowRight` | Focuses the next content pane. |
| `Control/Cmd(Mac) + ArrowLeft` | Focuses the previous content pane. |
| `Control/Cmd(Mac) + Shift + ArrowUp` | Docks the active pane to the global top. |
| `Control/Cmd(Mac) + Shift + ArrowDown` | Docks the active pane to the global bottom. |
| `Control/Cmd(Mac) + Shift + ArrowLeft` | Docks the active pane to the global left. |
| `Control/Cmd(Mac) + Shift + ArrowRight` | Docks the active pane to the global right. |
