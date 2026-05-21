# BottomNav Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the BottomNav component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-bottom-nav` | `role=navigation or nodeName=nav` | The landmark role navigation must be assigned to the bottom navigation. |
| `.k-bottom-nav-item` | `role=link or nodeName=a` | Associate the link purpose of the bottom navigation items. |
| `.k-bottom-nav-item.k-selected` | `aria-current=true` | Indicates the selected navigation item. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the BottomNav component:

| Shortcut | Behavior |
| --- | --- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Space / Enter` | Activates the currently focused link. |
