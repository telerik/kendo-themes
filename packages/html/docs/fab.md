# Fab Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Fab provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Fab is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### FloatingActionButton

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Omitted if the `<button>` DOM element is used. |
| `aria-label|title` | The attribute must be present when no text is initially visible in the button. |
| `aria-disabled="true"` | Rendered only when the button is disabled. |

### Testing

The Fab has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Fab has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Navigation Menu Button Example](https://www.w3.org/WAI/ARIA/apg/example-index/menu-button/menu-button-links.html)
