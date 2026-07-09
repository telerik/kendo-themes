# Signature Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Signature provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Signature is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Signature

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="img"` | Sets canvas role to img. |
| `aria-label` | Announces the purpose of the Signature. |
| `nodeName="button"` | Renders action as a button element. |
| `aria-label` | Announces the purpose of the action button. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Closes the dialog if open. |

### Testing

The Signature has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Signature has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
