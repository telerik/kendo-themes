# Icon Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Icon provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Icon is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Icon

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `xsmall`, `small`, `medium`, `large`, `xlarge`, `xxlarge`, `xxxlarge` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info` | — |
| `variant` | `outline`, `solid`, `duotone` | `outline` |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | Hides the icon element and all its children from assistive technologies. |

### Testing

The Icon has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Icon has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [MDN aria-hidden on icon example](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden#example)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/icon/`](https://github.com/telerik/kendo-themes/tree/develop/tests/icon/).
