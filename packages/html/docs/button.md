# Button Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Button provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Button is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Button

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `xsmall`, `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline`, `clear`, `link` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info`, `inverse` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | The button role is implicit from the native `<button>` element. |
| `aria-label` | Required for icon-only buttons that have no visible text. |
| `disabled` | Rendered when the button is disabled. |
| `aria-pressed="true"|"false"` | Indicates the pressed state; "true" when selected, "false" otherwise. |
| `aria-disabled="true"` | Announces as disabled to AT while keeping it in the tab sequence. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers a click action on the Button. |

### Testing

The Button has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Button has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
