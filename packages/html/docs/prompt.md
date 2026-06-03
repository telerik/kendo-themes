# Prompt Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Prompt component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-input-prefix > .k-button` | `role` = `button` | The buttons must have appropriate role. |
| `.k-input-prefix > .k-button` | `aria-label` / `title` | The buttons must be properly labelled. |
| `.k-input-suffix > .k-button` | `role` = `button` | The buttons must have appropriate role. |
| `.k-input-suffix > .k-button` | `aria-label` / `title` | The buttons must be properly labelled. |
| `.k-input-suffix > .k-prompt-send.k-disabled` | `disabled` | Announces send action as disabled if necessary. |
| `.k-prompt-expander .k-button` | `aria-controls` | Points to the controlled element based on the given id. |
| `.k-prompt-expander .k-button` | `aria-expanded` | Indicates the expanded state of the prompt expander content. |
| `.k-prompt-expander .k-suggestion-group` | `role` = `group` | Indicates that the suggestion container element is a group. |
| `.k-prompt-expander .k-suggestion` | `role` = `button` | Indicates that the suggestion element is a button. |
| `.k-prompt-expander .k-suggestion` | `aria-label` / `title` | The suggestion elements must be properly labelled. |
| `.k-prompt-expander .k-suggestion` | `tabindex` = `0` | The suggestion element should be focusable. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Prompt component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | If generating, stops the generation process. |
| `Enter or Space` | Triggers a click action on the suggestion element. |
| `Escape` | If generating, stops the generation process. If not, closes the Inline AI Prompt popup. |
| `Enter` | Sends the message. |
| `Shift + Enter` | Starts a new line in the textarea message box. |
