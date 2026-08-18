# ColumnMenu Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI ColumnMenu provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ColumnMenu is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ColumnList

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="listbox"` | Sets the listbox role of the list of columns wrapper. |
| `aria-multiselectable="true"` | Specifies that the list is multiselectable. |
| `aria-label` | Accessible name for the column list. |

### ColumnMenu

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift + Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For column menu items, executes the currently focused item action. If item is expandable, expands or collapses the item. |
| `Escape` | When focus is inside a focusable element in the item content, returns focus to the parent menu item. When focus is on a menu item, closes the ColumnMenu Popup and returns focus to the element from which the menu was opened. |
| `ArrowDown or ArrowUp` | Moves the focus to the next/previous item when focus is in the ColumnChooser list of options. |
| `Space` | Toggles the checked state of the focused ColumnChooser option. |
| `Escape` | When focus is inside a sub-view, returns to the main view and focuses the item that opened the sub-view. When focus is on the main view, closes the ActionSheet and returns focus to the element from which the menu was opened. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Filter | Provides a filter form to narrow column data. |
| Sort | Offers ascending and descending sort actions for the column. |
| Column chooser | Allows hiding or showing individual columns. |
| Lock / Unlock | Allows pinning a column to the left or right side of the grid. |

### ColumnMenuItem

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-columnmenu-item` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Sets column menu item role to button. |
| `tabindex="0"` | Sets column menu item tabindex. |
| `aria-expanded="true"|\"false"` | Sets the expanded state of an expandable item. |
| `aria-controls` | Points to id attribute of the content whose visibility the expandable item controls. |
| `id` | Unique and deterministic id linked to the aria-controls attribute of the corresponding expandable item. |

### GroupMenu

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

### GroupMenuItem

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-group-menu-item` element.

### Testing

The ColumnMenu has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ColumnMenu has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [MDN reference for the dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/column-menu/`](https://github.com/telerik/kendo-themes/tree/develop/tests/column-menu/).
