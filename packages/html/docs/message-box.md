# MessageBox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI MessageBox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The MessageBox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### MessageBox

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info`, `inverse` | — |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Status variants | Available in info, success, warning, and error styles with matching colors and icons. |
| Dismissible | An optional close button lets the user dismiss the message. |
| Icon | Displays an icon matching the severity of the message. |

### Testing

The MessageBox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The MessageBox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/message-box/`](https://github.com/telerik/kendo-themes/tree/develop/tests/message-box/).
