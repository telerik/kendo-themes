# Appbar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Appbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Appbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Appbar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `inverse` | — |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Application header | Renders as the primary header bar of the application. |
| Sticky positioning | Stays fixed at the top of the viewport as the user scrolls. |
| Sections | Divided into start, center, and end sections for flexible content placement. |

### Testing

The Appbar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Appbar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/appbar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/appbar/).
