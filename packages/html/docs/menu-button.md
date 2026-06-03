# MenuButton Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the MenuButton component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-menu-button` | `role` = `button` | Omitted if the button DOM element is used. |
| `.k-menu-button` | `aria-label` | Required when no text is visible in the button. |
| `.k-menu-button` | `aria-expanded` = `true` / `false` | Announces the state of the popup visibility. |
| `.k-menu-button` | `aria-controls` = `.k-menu-group id` | Points to the popup element. Builds a relationship between the button and the popup. |
| `.k-menu-button.k-disabled` | `aria-disabled` = `true` | Rendered only when the button is disabled. |
| `.k-menu-group` | `role` = `list` | Announces the list role of the popup. |
| `.k-menu-item` | `role` = `listitem` | Announces the listitem role of the popup items. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the MenuButton component:

| Trigger | Behavior |
| --- | --- |
| `Alt + ArrowDown` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |
| `Enter or Space` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |
| `Alt + ArrowUp` | Closes the popup and moves the focus back to the main `button` element. |
| `Escape` | Closes the popup and moves the focus back to the main button element. |
| `ArrowDown` | Moves the focus to the next `menuitem` element. If the focus is on the last menu item, moves the focus to the first menu item. |
| `ArrowUp` | Moves the focus to the previous `menuitem` element. If the focus is on the first menu item, moves the focus to the last menu item. |
| `Home` | Moves the focus to the first `menuitem` element. |
| `End` | Moves the focus to the last `menuitem` element. |
| `Enter or Space` | Clicks (activates) the currently active `menuitem` element and closes the popup. |
