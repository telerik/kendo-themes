# Captcha Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Captcha provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Captcha is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Captcha component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Navigates to the next Captcha element. |
| `Shift + Tab` | Navigates to the previous Captcha Element. |
| `Enter` | Presses the focused Captcha button. |
| `Space` | Presses the focused Captcha button. |
| `ArrowUp` | Increases the Audio control volume. |
| `ArrowDown` | Decreases the Audio control volume. |

### Testing

The Captcha has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Captcha has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for textbox](https://www.w3.org/TR/wai-aria-1.2/#textbox)
