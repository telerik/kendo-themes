# Numerictextbox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Numerictextbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Numerictextbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### NumericTextbox

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
| `loading` | `k-loading` |
| `required` | `k-required` |
| `disabled` | `k-disabled` |
| `readonly` | `k-readonly` |

These CSS classes are applied to the `k-numerictextbox` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="spinbutton"` | Announces the spin button capabilities of the NumericTextBox. |
| `aria-label|aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `aria-valuenow` | Announces the current value of the component. |
| `aria-valuemin` | Announces the minimum allowed value. |
| `aria-valuemax` | Announces the maximum allowed value. |
| `aria-invalid="true"` | Rendered when the NumericTextBox is in an invalid state. |
| `aria-describedby` | Points to the hint or error message. |
| `aria-disabled="true"` | Rendered when the NumericTextBox is disabled. |
| `role="button"` | Describes the role of the spin buttons. |
| `aria-label` | The button element requires discernible text. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Increases the value of the focused NumericTextBox with the step. |
| `ArrowDown` | Decreases the value of the focused NumericTextBox with the step. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Spin buttons | Up and down arrow buttons increment and decrement the value. |
| Min / Max | Enforces a configurable minimum and maximum value. |
| Step | The increment step size is configurable. |
| Format | The value is displayed using the configured number format. |
| Disabled state | When disabled, the input and spin buttons are non-interactive. |

### Testing

The Numerictextbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Numerictextbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Spinbutton Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/numerictextbox/`](https://github.com/telerik/kendo-themes/tree/develop/tests/numerictextbox/).
