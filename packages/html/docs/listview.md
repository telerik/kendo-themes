# Listview Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Listview provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Listview is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ListView

#### Component States

| State | CSS Class |
| --- | --- |
| `loading` | `k-loading` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-listview` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="listbox"` | Content element role when selectable; items receive role="option". |
| `aria-label` | Accessible name for the content element; required when role="listbox". |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Moves the focus to the next rendered item. If the focus is on the last item, the focus does not move. |
| `ArrowDown` | Moves the focus to the next rendered item. If the focus is on the last item, the focus does not move. |
| `ArrowLeft` | Moves the focus to the previous rendered item. If the focus is on the first item, the focus does not move. |
| `ArrowUp` | Moves the focus to the previous rendered item. If the focus is on the first item, the focus does not move. |
| `Home` | Moves the focus to the first rendered item. |
| `End` | Moves the focus to the last rendered item. |
| `Enter` | When there are focusable items within a ListView item - the focus moves to the first focusable item inside. |
| `Escape` | If the focus is on an element inside a ListView item - returns the focus back to the ListView item. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Item template | Each item is rendered with a custom template. |
| Selection | Items can be selected by clicking. |
| Paging | Content is paginated with a pager component. |
| Inline editing | Items can be edited in-place via an edit template. |

### ListViewItem

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-listview-item` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role` | "listitem" for non-selectable, "option" for selectable ListView |
| `aria-setsize` | Total number of items in the ListView |
| `aria-posinset` | Position of this item (1-based) |
| `tabindex` | =0 for first/focused item |

### Testing

The Listview has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Listview has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification: List](https://www.w3.org/TR/wai-aria-1.2/#list)
- [WAI-ARIA Specification: Listitem](https://www.w3.org/TR/wai-aria-1.2/#listitem)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/listview/`](https://github.com/telerik/kendo-themes/tree/develop/tests/listview/).
