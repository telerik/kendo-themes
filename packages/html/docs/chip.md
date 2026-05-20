# Chip Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Chip component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-chip-list` | `role=listbox` | Announces the list role of the chip list. |
| `.k-chip-list` | `aria-label or aria-labelledby` | Adds label to the ChipList element. ListBox element requires an accessible name. |
| `.k-chip-list` | `aria-orientation=horizontal` | Specifies the horizontal orientation of the chiplist. |
| `.k-chip-list` | `aria-multiselectable=true (when multiple selection)` | Announces the multiple selection ability of the chiplist. |
| `.k-chip-list .k-chip` | `role=option` | Announces the chip is an option inner component of the chip list. |
| `.k-chip-list .k-chip.k-selected` | `aria-selected=true` | Announces the chip is selected. |
| `.k-chip-list .k-chip:not(.k-selected)` | `aria-selected=false` | Announces the chip is not selected. |
| `.k-chip-list .k-chip:has(.k-i-x-circle), .k-chip-list .k-chip:has(.k-svg-i-x-circle)` | `aria-keyshortcuts=Enter Delete` | Announces the Delete action along with the default Enter key. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Chip component:

| Shortcut | Behavior |
| --- | --- |
| `Enter or Space` | Triggers a click action on the Chip. |
| `Delete or Backspace` | Removes the Chip when a delete action is configured. |
