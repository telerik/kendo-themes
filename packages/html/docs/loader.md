# Loader Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Loader provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Loader is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Loader

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="status"` | Live region that announces the loading state to assistive technologies. |
| `aria-label` | Accessible name for the loader (default: "Loading"). |
| `aria-live="polite"` | Polite announcements of loading state changes. |

### LoaderContainer

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="status"` | Live region for loading state. |
| `aria-live="polite"` | Polite announcements of loading state changes. |
| `aria-label` | Accessible name for the loader container. |

### Testing

The Loader has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Loader has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WCAG 4.1.3 Status Messages — loading states announced via live region](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [WCAG 4.1.3 Status Messages — loading states announced via live region](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
