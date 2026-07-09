# Tilelayout Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Tilelayout provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Tilelayout is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### TileLayout

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="list"` | Sets list role to the TileLayout wrapper. |

#### Keyboard Navigation

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

### TileLayoutItem

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="listitem"` | Sets listitem role to the TileLayout items. |
| `aria-labelledby` | Associates the focusable item wrapper with the respective header text element. |
| `tabindex="0"` | Makes the item wrapper element focusable. |
| `aria-keyshortcuts="Enter"` | Announces Enter as an available key shortcut when the item is focused. |
| `id` | Unique identifier to link the header text element to the focusable wrapper. |

### Testing

The Tilelayout has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Tilelayout has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
