# FloatingLabel Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI FloatingLabel provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The FloatingLabel is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### FloatingLabel

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `valid` | `k-valid` |
| `invalid` | `k-invalid` |
| `empty` | `k-empty` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-floating-label-container` element.

#### UX Behavior

| Feature | Description |
| --- | --- |
| Animated label | The label starts inside the input field and floats above it when the field is focused or has a value. |
| Placeholder replacement | Acts as both the visible placeholder and the label before the field is filled. |

### Testing

The FloatingLabel has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The FloatingLabel has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/floating-label/`](https://github.com/telerik/kendo-themes/tree/develop/tests/floating-label/).
