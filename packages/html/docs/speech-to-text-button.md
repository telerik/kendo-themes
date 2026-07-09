# SpeechToTextButton Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI SpeechToTextButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SpeechToTextButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### SpeechToTextButton

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
| `role="button"` | If the used element is not `<button>`, explicitly set its role to button. |
| `aria-pressed` | Announces the toggle behaviour of the button. |
| `aria-label` | Accessible name for the speech-to-text button. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers a click action on the Button. Toggles the active listening state of the Button. |

### Testing

The SpeechToTextButton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The SpeechToTextButton has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
