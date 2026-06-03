# Tilelayout Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Tilelayout component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-tilelayout` | `role` = `list` | Sets list role to the TileLayout wrapper. |
| `.k-tilelayout-item` | `role` = `listitem` | Sets listitem role to the TileLayout items. |
| `.k-tilelayout-item` | `aria-labelledby` | Associates the focusable item wrapper with the respective header text element. |
| `.k-tilelayout-item` | `tabindex` = `0` | Makes the item wrapper element focusable. |
| `.k-tilelayout-item` | `aria-keyshortcuts` = `Enter` | Announces Enter as an available key shortcut when the item is focused. |
| `.k-tilelayout-item-header .k-card-title` | `id` | Unique identifier to link the header text element to the focusable wrapper. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Tilelayout component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Move focus to the next tile. If focus is on the last tile, focus the next focusable element on the page. |
| `Shift + Tab` | Move focus to the previous tile. If focus is on the first tile, focus the previous focusable element before the TileLayout. |
| `Enter` | Focuses the first focusable element within the tile. Focus is trapped and wrapped within the tile content and follows its natural Tab sequence. |
| `Escape` | Moves focus back to the TileLayout item wrapper when it is on a focusable element within the tile content. |
| `Shift + ArrowRight` | Reorders the focused tile with the next one (if such exists). |
| `Shift + ArrowLeft` | Reorders the focused tile with the previous one (if such exists). |
| `Control/Cmd(Mac) + ArrowRight` | Increments the focused tile width with one column (to a maximum of the preset columns count). |
| `Control/Cmd(Mac) + ArrowLeft` | Decrements the focused tile width with one column (to a minimum of 1). |
| `Control/Cmd(Mac) + ArrowDown` | Increments the focused item height with one row (to a maximum of the preset rows count if such option exists). |
| `Control/Cmd(Mac) + ArrowUp` | Decrements the focused item height with one row (to a minimum of 1). |
