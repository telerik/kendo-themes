# Chat Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Chat provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Chat is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Chat

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Selects and focuses the previous Chat bubble |
| `ArrowDown` | Selects and focuses the next Chat bubble |
| `Home` | Selects and focuses the first Chat bubble |
| `End` | Selects and focuses the last Chat bubble |
| `Enter or Space` | Triggers a click action on the element. |
| `Enter` | Sends the message. |
| `Shift + Enter` | Start a new line in the textarea message box. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Message list | Displays a scrollable list of messages from the user and the agent. |
| Input | A text input at the bottom lets the user compose and send messages. |
| Toolbar | An optional toolbar above the input provides additional actions. |
| Typing indicator | Shows an animated indicator while the other party is responding. |
| Suggestions | Displays quick-reply suggestion chips above the input. |

### Testing

The Chat has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Chat has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for log](https://www.w3.org/TR/wai-aria-1.2/#log)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/chat/`](https://github.com/telerik/kendo-themes/tree/develop/tests/chat/).
