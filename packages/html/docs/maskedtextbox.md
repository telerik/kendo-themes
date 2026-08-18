# Maskedtextbox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Maskedtextbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Maskedtextbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### MaskedTextbox

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `valid` | `k-valid` |
| `invalid` | `k-invalid` |
| `required` | `k-required` |
| `disabled` | `k-disabled` |
| `loading` | `k-loading` |
| `readonly` | `k-readonly` |

These CSS classes are applied to the `k-maskedtextbox` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="textbox"` | Describes the role of the component. |
| `aria-label|aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `aria-placeholder` | Announces the mask or placeholder for the component. |
| `aria-invalid="true"` | Rendered when the MaskedTextBox is in an invalid state. |
| `aria-describedby` | Points to the hint or error message. |
| `aria-disabled="true"` | Rendered when the MaskedTextBox is disabled. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Mask pattern | Formats input according to a configurable pattern (e.g., phone numbers, dates). |
| Prompt character | Unfilled mask positions are shown with a placeholder character (default: underscore). |
| Auto-advance | Focus moves to the next mask segment as each one is filled. |
| Disabled state | When disabled, the input is non-interactive. |

### Testing

The Maskedtextbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Maskedtextbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/maskedtextbox/`](https://github.com/telerik/kendo-themes/tree/develop/tests/maskedtextbox/).
