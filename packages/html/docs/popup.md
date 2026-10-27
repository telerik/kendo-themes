# Popup Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Popup provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Popup is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Popup

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="region"` | Required when popup container is appended to document body |
| `aria-label` | Required when container has role="region" |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Anchor alignment | Positions itself relative to an anchor element. |
| Collision detection | Automatically flips or shifts to remain within the viewport. |
| Dismiss | Closes when the user clicks outside or the owning component loses focus. |

### Testing

The Popup has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Popup has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/popup/`](https://github.com/telerik/kendo-themes/tree/develop/tests/popup/).
