# Textbox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Textbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Textbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Textbox

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

These CSS classes are applied to the `k-textbox` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="textbox"` | Describes the role of the component. |
| `aria-label|aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `aria-invalid="true"` | Rendered when the TextBox is in an invalid state. |
| `aria-describedby` | Points to the hint or error message for the input. |
| `aria-disabled="true"` | Rendered when the TextBox is disabled. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Prefix / Suffix | Can embed icons, labels, or action buttons at either end of the input. |
| Clear button | An optional × button clears the current value. |
| Placeholder | Displays hint text when the field is empty. |
| Disabled state | When disabled, the input is non-interactive. |

### Testing

The Textbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Textbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for the TextBox](https://www.w3.org/TR/wai-aria-1.2/#textbox)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/textbox/`](https://github.com/telerik/kendo-themes/tree/develop/tests/textbox/).
