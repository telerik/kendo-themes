# Chat Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Chat component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-message-list` | `role=log` | The role of the Chat message list must imply that there is a log (list) of messages. |
| `.k-message-list` | `aria-label` | Announces the purpose of the Chat message list. |
| `.k-message-list` | `aria-live=polite` | Announces new messages in the Chat message list. |
| `.k-bubble` | `tabindex=0` | The Chat bubble must be focusable. |
| `.k-bubble .k-typing-indicator` | `tabindex=-1` | The Chat bubble typing indicator should not be focusable. |
| `.k-bubble-expandable-indicator` | `role=button` | The expandable indicator must have an appropriate role. |
| `.k-bubble-expandable-indicator` | `aria-label or title` | The expandable indicator must be properly labelled. |
| `.k-bubble-expandable-indicator` | `tabindex=0` | The expandable indicator must be part of the page tabsequence. |
| `.k-message-reference>.k-button` | `aria-label or title` | The reference close button must be properly labelled. |
| `.k-message-reference>.k-button` | `role=button or nodeName=button` | The reference close button must have an appropriate role. |
| `.k-prompt-box-affix>.k-button` | `role=button or nodeName=button` | The buttons must have appropriate role. |
| `.k-prompt-box-affix>.k-button` | `aria-label or title` | The buttons must be properly labelled. |
| `.k-prompt-box-affix>.k-button.k-disabled` | `disabled` | Announces the send action as disabled when necessary. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Chat component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow` | Selects and focuses the previous Chat bubble |
| `Down Arrow` | Selects and focuses the next Chat bubble |
| `Home` | Selects and focuses the first Chat bubble |
| `End` | Selects and focuses the last Chat bubble |
| `Enter/Space` | Triggers a click action on the element. |
| `Enter` | Sends the message. |
| `Shift + Enter` | Start a new line in the textarea message box. |
