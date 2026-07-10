# Card Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Card provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Card is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Card

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-card` element.

#### UX Behavior

| Feature | Description |
| --- | --- |
| Content container | Groups related content in a visually elevated surface. |
| Header and footer | Optional header and footer sections hold titles and actions. |
| Media | Supports an image or other media element at the top of the card. |
| Actions | Optional action buttons are placed in the card body or footer. |

### CardList

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="list"` | The card list container announces its list role. |
| `role="listitem"` | Each card in the list has the listitem role. |
| `tabindex="0"` | The card is focusable when navigatable. |
| `aria-describedby=".k-card-title id"` | Associate the card to its title element. |
| `aria-keyshortcuts="Enter"` | Announces the Enter key for navigation inside the card. |

### CardWrap

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-card-wrap` element.

### Testing

The Card has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Card has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/card/`](https://github.com/telerik/kendo-themes/tree/develop/tests/card/).
