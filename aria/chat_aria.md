## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Chat component


The Chat component is a composite one and integrates the accessibility of the ToolBar, Dialog, DropDownButton and ContextMenu components.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-message-list` | `role=log` | The role of the Chat message list must imply that there is a log (list) of messages. |
|  | `aria-label` | Announces the purpose of the Chat message list (for ex. 'Message list'). |
|  | `aria-live=polite` | Announces new messages in the Chat message list. |
| `.k-bubble` | `tabindex=0` | The Chat bubble must be focusable. |
| `.k-bubble .k-typing-indicator` | `tabindex=-1` | The Chat bubble typing indicator should not be focusable. |
| `.k-suggestion-group` | `role=group` | Indicates that the suggestion container element is a group. |
| `.k-suggestion` | `role=button` | The suggestion elements must be exposed as buttons. |
|  | `tabindex=0` | The suggestion elements must be part of the page tabsequence. |
| `.k-input-suffix>.k-button` | `role=button` or `nodeName=button` | The buttons must have appropriate role. |
|  | `aria-label` or `title` | The buttons must be properly labelled. |
| `.k-input-suffix>.k-chat-send.k-disabled` | `aria-disabled=true` | Announces send action as disabled if necessary. |
| `.k-message-group-content>.k-chat-download-button` | `aria-label` or `title` | The download button must be properly labelled. |
|  | `role=button` or `nodeName=button` | The download button must have an appropriate role. |
| `.k-message-reference>.k-button` | `aria-label` or `title` | The reference close button must be properly labelled. |
|  | `role=button` or `nodeName=button` | The reference close button must have an appropriate role. |
| `.k-bubble-expandable-indicator` | `role=button` | The expandable indicator must have an appropriate role. |
|  | `aria-label` or `title` | The expandable indicator must be properly labelled. |
|  | `tabindex=0` | The expandable indicator must be part of the page tabsequence. |

### ToolBar Component


Chat Message ToolBar follows the specification for the the ToolBar component.

[ToolBar accessibility specification](toolbar_aria.md)

### Textarea Component

[Textarea accessibility specification](textarea_aria.md)

### DropDownButton Component

[DropDownButton accessibility specification](dropdownbutton_aria.md)

### SpeechToTextButton Component

[SpeechToTextButton accessibility specification](speechtotextbutton_aria.md)

### ContextMenu Component

[ContextMenu accessibility specification](contextmenu_aria.md)

