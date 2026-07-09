# PromptBox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI PromptBox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The PromptBox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### PromptBox

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `nodeName="input"` | Ensures the input field has the proper textbox role. |
| `aria-label` | Provides an accessible label for the single-line input. |
| `nodeName="textarea"` | Ensures the textarea has the proper textbox role. |
| `aria-label` | Provides an accessible label for the textarea. |
| `aria-multiline="true"` | Indicates the textarea supports multiple lines of text. |
| `nodeName="textarea"` | Ensures the auto-mode textarea has the proper textbox role. |
| `aria-label` | Provides an accessible label for the auto-mode textarea. |
| `aria-multiline="true"` | Indicates the auto-mode textarea supports multiple lines of text. |
| `aria-label` | The send/stop button is labelled to indicate its current action. |
| `aria-live="polite"` | Announces the change in status of the send/stop button. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter` | Submits the prompt. |
| `Shift + Enter` | Inserts a new line in multi-line and auto modes |
| `Tab` | Moves focus to the next focusable element |
| `Shift + Tab` | Moves focus to the previous focusable element |

### Testing

The PromptBox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The PromptBox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/)
