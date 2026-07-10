# List Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI List provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The List is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### List

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="presentation"` | Group headers are presentational, not selectable options. |

### ListItem

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-list-item` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="option"` | Each list item is an option in the listbox. |
| `aria-selected` | Indicates the selected state of the option. |
| `aria-hidden="true"` | Decorative icons are hidden from assistive technology. |
| `id` | Used by aria-activedescendant on the combobox/listbox |

### Testing

The List has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The List has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/list/`](https://github.com/telerik/kendo-themes/tree/develop/tests/list/).
