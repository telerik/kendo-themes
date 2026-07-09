# Notification Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Notification provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Notification is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Notification

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info`, `inverse` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="status"` | Notification element should be marked as a status. Uses status instead of alert to avoid interrupting screen reader workflow. |
| `aria-live="polite"` | The aria-live value must be polite so it will not obscure other essential information. |
| `aria-describedby=".k-notification-content id"` | Used so that the content of the Notification will be announced by assistive technologies. |
| `aria-hidden="true"` | The close button icon should not be present in the accessibility tree. |

### Testing

The Notification has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Notification has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA spec: Role Alert](https://www.w3.org/TR/wai-aria-1.2/#alert)
- [ARIA Practices: Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
