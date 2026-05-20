# Splitter Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Splitter component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pane` | `role=group` | Sets the proper role for the Splitter pane. |
| `.k-splitbar` | `role=separator` | Sets the proper role for the Splitter split-bar element. |
| `.k-splitbar` | `aria-label` | An accessible name for the separator. |
| `.k-splitbar-horizontal` | `aria-orientation=vertical` | When a splitbar separates two panes horizontally, its aria-orientation must be explicitly set to vertical. |
| `.k-splitbar` | `aria-keyshortcuts` | Announces available keyboard shortcuts. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Splitter component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow` | Moves up the split-bar in a vertical Splitter. |
| `Down Arrow` | Moves down a split-bar in a vertical Splitter. |
| `Left Arrow` | Moves left a split-bar in a horizontal Splitter. |
| `Right Arrow` | Moves right a split-bar in a horizontal Splitter. |
| `Ctrl/Cmd(Mac) + Up Arrow` | Moves the splitbar up to collapse/expand the adjacent panes in the up direction. |
| `Ctrl/Cmd(Mac) + Down Arrow` | Moves the splitbar down to collapse/expand the adjacent panes in the down direction. |
| `Ctrl/Cmd(Mac) + Left Arrow` | Moves the splitbar left to collapse/expand the adjacent panes in the left direction. |
| `Ctrl/Cmd(Mac) + Right Arrow` | Moves the splitbar right to collapse/expand the adjacent panes in the right direction. |
| `Enter` | Toggles the collapsed state of the nearest collapsible pane. |
| `Tab` | The key that allows focusing a splitter bar. Thus, all splitbars have `tabindex` and are included in the tab sequence. |
