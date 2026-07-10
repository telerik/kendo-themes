# ContextMenu Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI ContextMenu provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ContextMenu is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ContextMenu

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="menu"` | The context menu implements the menu role. |
| `role="menuitem"` | Announces the Menu item role. |
| `aria-haspopup="menu"` | Indicates a popup menu is associated with the item. |
| `aria-expanded="true"|\"false"` | Indicates whether the submenu is expanded. |
| `aria-disabled="true"` | Informs assistive technologies that a Menu item is disabled. |
| `aria-hidden="true"` | Expand arrow elements are hidden from assistive technologies. |
| `tabindex="0"` | The focused item has tabindex 0. |
| `aria-controls="ul.k-menu-group id"` | Points to the ID of the submenu. |
| `id` | Each nested menu has an id linked to parent aria-controls. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Shift + F10` | When applied to a target, the command opens the ContextMenu. |
| `ArrowUp` | Focuses the previous item. |
| `ArrowDown` | Focuses the next item. |
| `ArrowLeft` | (For root items) opens the item and focuses the last child.; (For child items) closes and focuses the parent. |
| `ArrowRight` | If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item. |
| `Escape` | Closes the ContextMenu and returns the focus to the target. |
| `Home` | Focuses the first item. |
| `End` | Focuses the last item. |
| `Enter` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Space` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Alphanumeric character` | Focuses the next item with text starting with the character. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Right-click trigger | Opens when the user right-clicks (or long-presses on touch) the target element. |
| Submenus | Menu items can have submenus that open on hover. |
| Dismiss | Closes when clicking outside the menu or pressing Escape. |

### Testing

The ContextMenu has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ContextMenu has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA patterns Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/context-menu/`](https://github.com/telerik/kendo-themes/tree/develop/tests/context-menu/).
