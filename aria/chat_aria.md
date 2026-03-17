## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Chat component


The Chat component is a composite one and integrates the accessibility of the ToolBar, PromptBox, FileBox, Dialog, DropDownButton, SpeechToTextButton and ContextMenu components.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-message-list` | `role=log` | The role of the Chat message list must imply that there is a log (list) of messages. |
|  | `aria-label` | Announces the purpose of the Chat message list (for ex. 'Message list'). |
|  | `aria-live=polite` | Announces new messages in the Chat message list. |
| `.k-bubble` | `tabindex=0` | The Chat bubble must be focusable. |
| `.k-bubble .k-typing-indicator` | `tabindex=-1` | The Chat bubble typing indicator should not be focusable. |
| `.k-bubble-expandable-indicator` | `role=button` | The expandable indicator must have an appropriate role. |
|  | `aria-label` or `title` | The expandable indicator must be properly labelled. |
|  | `tabindex=0` | The expandable indicator must be part of the page tabsequence. |
| `.k-suggestion-group` | `role=group` | Indicates that the suggestion container element is a group. |
| `.k-suggestion` | `role=button` | The suggestion elements must be exposed as buttons. |
|  | `tabindex=0` | The suggestion elements must be part of the page tabsequence. |
| `.k-message-reference>.k-button` | `aria-label` or `title` | The reference close button must be properly labelled. |
|  | `role=button` or `nodeName=button` | The reference close button must have an appropriate role. |
| `.k-resend-button` | `aria-label` or `title` | The resend button must be properly labelled (for ex. 'Resend'). |
|  | `role=button` or `nodeName=button` | The resend button must have an appropriate role. |
| `.k-chat-message-toolbar>.k-button` | `aria-label` or `title` | The message toolbar action buttons (copy, retry, download, etc.) must be properly labelled. |
|  | `role=button` or `nodeName=button` | The message toolbar action buttons must have an appropriate role. |
| `.k-prompt-box-affix>.k-button` | `role=button` or `nodeName=button` | The prompt box suffix buttons must have appropriate role. |
|  | `aria-label` or `title` | The prompt box suffix buttons must be properly labelled (for ex. 'Attach file', 'Send prompt'). |
| `.k-prompt-box-affix>.k-button.k-disabled` | `disabled` | Announces send action as disabled when necessary. |
| `.k-message-group-content>.k-chat-download-button` | `aria-label` or `title` | The download button must be properly labelled. |
|  | `role=button` or `nodeName=button` | The download button must have an appropriate role. |

### ToolBar Component


Chat Message ToolBar follows the specification for the the ToolBar component.

[ToolBar accessibility specification](toolbar_aria.md)

### PromptBox Component

Chat message input follows the specification for the PromptBox component.

[PromptBox accessibility specification](prompt-box_aria.md)

### FileBox Component

Chat file attachments follow the specification for the FileBox component.

[FileBox accessibility specification](file-box_aria.md)

### Textarea Component

[Textarea accessibility specification](textarea_aria.md)

### DropDownButton Component

[DropDownButton accessibility specification](dropdownbutton_aria.md)

### SpeechToTextButton Component

[SpeechToTextButton accessibility specification](speechtotextbutton_aria.md)

### ContextMenu Component

[ContextMenu accessibility specification](contextmenu_aria.md)

