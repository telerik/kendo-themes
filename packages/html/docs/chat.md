# Chat Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Chat provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Chat is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-message-list` | `role` = `log` | The role of the Chat message list must imply that there is a log (list) of messages. |
| `.k-message-list` | `aria-label` | Announces the purpose of the Chat message list. |
| `.k-message-list` | `aria-live` = `polite` | Announces new messages in the Chat message list. |
| `.k-bubble` | `tabindex` = `0` | The Chat bubble must be focusable. |
| `.k-bubble .k-typing-indicator` | `tabindex` = `-1` | The Chat bubble typing indicator should not be focusable. |
| `.k-bubble-expandable-indicator` | `role` = `button` | The expandable indicator must have an appropriate role. |
| `.k-bubble-expandable-indicator` | `aria-label` / `title` | The expandable indicator must be properly labelled. |
| `.k-bubble-expandable-indicator` | `tabindex` = `0` | The expandable indicator must be part of the page tabsequence. |
| `.k-message-reference>.k-button` | `aria-label` / `title` | The reference close button must be properly labelled. |
| `.k-message-reference>.k-button` | `role` = `button` | The reference close button must have an appropriate role. |
| `.k-prompt-box-affix>.k-button` | `role` = `button` | The buttons must have appropriate role. |
| `.k-prompt-box-affix>.k-button` | `aria-label` / `title` | The buttons must be properly labelled. |
| `.k-prompt-box-affix>.k-button.k-disabled` | `disabled` | Announces the send action as disabled when necessary. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Chat component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Selects and focuses the previous Chat bubble |
| `ArrowDown` | Selects and focuses the next Chat bubble |
| `Home` | Selects and focuses the first Chat bubble |
| `End` | Selects and focuses the last Chat bubble |
| `Enter or Space` | Triggers a click action on the element. |
| `Enter` | Sends the message. |
| `Shift + Enter` | Start a new line in the textarea message box. |

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
