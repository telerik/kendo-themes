# Form Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Form provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Form is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Form

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Shift + Tab` | Moves focus to the previous focusable element. |
| `Tab` | Moves focus to the next focusable element. |
| `Space` | Triggers the default action of the focused element for the Space key. |
| `Enter` | Triggers the default action of the focused element for the Enter key. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Validation | Validates field values on change or submit and shows inline error messages. |
| Labels | Each field has an associated label that describes its purpose. |
| Hint | Optional hint text below a field provides additional guidance. |
| Required indicator | Required fields are visually marked with an asterisk. |
| Layout | Supports horizontal (label beside field) and vertical (label above field) layouts. |

### Testing

The Form has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Form has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/form/`](https://github.com/telerik/kendo-themes/tree/develop/tests/form/).
