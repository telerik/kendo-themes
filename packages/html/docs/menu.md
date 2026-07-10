# Menu Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Menu provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Menu is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Menu

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-orientation="vertical"` | Announces the Menu orientation when vertical. |
| `aria-hidden="true"` | Expand arrow elements are hidden from assistive technologies. |
| `tabindex="-1"` | Scroll buttons are removed from the tab sequence. |
| `aria-label` | Scroll buttons have an accessible label. |
| `role="menu"|"menubar"` | When true, renders as context menu (role="menu"); otherwise role="menubar". |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | (For root items) Opens the item and focuses the last child.; (For child items) Focuses the previous item. |
| `ArrowDown` | (For root items) Opens the item and focuses the first child.; (For child items) Focuses the next item. |
| `ArrowLeft` | (For root items) Focuses the previous item.; (For child items) For direct children of a root item, focuses and opens the previous root item. Otherwise, closes and focuses the parent. |
| `ArrowRight` | (For root items) Focuses the next item.; (For child items) If the item has children, opens the item and focuses the first child. Otherwise, focuses and opens the next root item. |
| `Home` | Focuses the first item. |
| `End` | Focuses the last item. |
| `Enter` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Space` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Escape` | (For child items) Closes and focuses the parent. |
| `Alphanumeric character` | Focuses the next item with text starting with the character. |
| `ArrowUp` | Focuses the previous item. |
| `ArrowDown` | Focuses the next item. |
| `ArrowLeft` | (For root items) opens the item and focuses the last child.; (For child items) closes and focuses the parent. |
| `ArrowRight` | If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Horizontal / Vertical | Can be rendered as a horizontal menu bar or a vertical sidebar. |
| Submenus | Items with children open a flyout submenu on hover or click. |
| Popup positioning | Submenus automatically flip when they would overflow the viewport. |
| Disabled items | Individual items can be disabled and are skipped during keyboard navigation. |

### MenuItem

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-menu-item` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="menuitem"` | Announces the Menu item role. |
| `aria-haspopup="menu"` | Indicates a popup menu is associated with the item. |
| `aria-disabled="true"` | Informs assistive technologies that a Menu item is disabled. |
| `tabindex="0"` | The focused item has tabindex 0. |
| `aria-controls="ul.k-menu-group id"` | Points to the ID of the submenu. Only present when the item controls a submenu element. |
| `aria-expanded` | state for expandable items |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Action trigger | Clicking the item executes its associated action or navigates to its link. |
| Submenu indicator | Displays an arrow when the item has a nested submenu. |
| Disabled state | When disabled, the item is non-interactive. |
| Separator | A horizontal line variant visually divides groups of items. |

### MenuList

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="menu"` | The role of the nested menu displayed in a popup. |
| `id` | Each nested menu has a deterministic id linked to the parent aria-controls. |

### MenuListItem

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-menu-item` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-expanded` | state for expandable items |

### Testing

The Menu has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Menu has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA patterns Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/menu/`](https://github.com/telerik/kendo-themes/tree/develop/tests/menu/).
