# Drawer Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Drawer component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-drawer ul` | `role` = `menubar` | Indicates that the list of drawer items is a menubar. |
| `.k-drawer ul` | `aria-orientation` = `vertical` | Indicates that the orientation of the drawer is vertical. |
| `.k-drawer-item:not(.k-drawer-separator)` | `role` = `menuitem` | Indicates that the item of a drawer serves as a menuitem. |
| `.k-drawer-item.k-drawer-separator` | `role` = `separator` | Indicates that the item of a drawer serves as a separator. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Drawer component:

| Trigger | Behavior |
| --- | --- |
| `Enter` | Execute the item action |
| `ArrowUp` | Goes to the previous item. Focus is moved to the prev item and its tabindex is set to 0. |
| `ArrowDown` | Goes to the next item. Focus is moved to the next item and its tabindex is set to 0. |
