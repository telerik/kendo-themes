# Tabstrip Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Tabstrip component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-tabstrip-items` | `role=tablist` | Indicates the tablist role for the ul element of the TabStrip. |
| `.k-tabstrip.k-tabstrip-left .k-tabstrip-items,.k-tabstrip.k-tabstrip-right .k-tabstrip-items` | `aria-orientation=vertical` | Indicates the orientation of the tablist container element. Rendered only when vertical, as tablist defaults to horizontal. |
| `.k-tabstrip-item` | `role=tab` | The tab li element. |
| `.k-tabstrip .k-tabstrip-item.k-active` | `aria-selected=true` | Announces the selected state of the tab. |
| `.k-tabstrip .k-tabstrip-item.k-active` | `aria-controls (when present)` | Announces the relation between the panel and active tab. |
| `.k-tabstrip-content` | `role=tabpanel` | The content div of the tab. |
| `.k-tabstrip-content` | `aria-hidden=true (when not active)` | Only if the component implements a feature to control whether the content should be persisted. |
| `.k-tabstrip-content` | `aria-labelledby (when present)` | Refers to the tab element that controls the panel. |
| `.k-tabstrip-scrollable .k-button` | `aria-hidden=true` | Scroll buttons are hidden from assistive technologies. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Tabstrip component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow / Down Arrow` | Activates the previous/next tab (vertical orientation). Navigation wraps — when end is reached the first tab is focused, when start is reached the last tab is focused. |
| `Left Arrow / Right Arrow` | Activates the previous/next tab (horizontal orientation). Navigation wraps — when end is reached the first tab is focused, when start is reached the last tab is focused. |
| `Tab` | Moves focus to the content of the active tab. Roving tabindex — only the active tab has tabindex=0, remaining tabs have tabindex=-1. |
| `Shift + Tab` | Moves focus back to the active tab from the panel. |
| `Enter` | Activates the focused tab (when automatic selection is disabled). |
| `Home` | Moves focus to and activates the first tab. |
| `End` | Moves focus to and activates the last tab. |
| `Delete / Backspace` | Removes the focused tab from the tab list. |
