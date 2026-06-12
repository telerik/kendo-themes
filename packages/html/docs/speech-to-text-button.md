# SpeechToTextButton Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI SpeechToTextButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SpeechToTextButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-button.k-speech-to-text-button` | `role` = `button` | If the used element is not <button>, explicitly set its role to button. |
| `.k-button.k-speech-to-text-button` | `aria-pressed` | Announces the toggle behaviour of the button. |
| `.k-button.k-speech-to-text-button` | `aria-label` | Accessible name for the speech-to-text button. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SpeechToTextButton component:

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
