# PromptBox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the PromptBox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-prompt-box-singleline .k-prompt-box-input` | `nodeName=input` | Ensures the input field has the proper textbox role. |
| `.k-prompt-box-singleline .k-prompt-box-input` | `aria-label` | Provides an accessible label for the single-line input. |
| `.k-prompt-box-multiline .k-prompt-box-textarea` | `nodeName=textarea` | Ensures the textarea has the proper textbox role. |
| `.k-prompt-box-multiline .k-prompt-box-textarea` | `aria-label` | Provides an accessible label for the textarea. |
| `.k-prompt-box-multiline .k-prompt-box-textarea` | `aria-multiline=true` | Indicates the textarea supports multiple lines of text. |
| `.k-prompt-box:not(.k-prompt-box-singleline):not(.k-prompt-box-multiline) .k-prompt-box-textarea` | `nodeName=textarea` | Ensures the auto-mode textarea has the proper textbox role. |
| `.k-prompt-box:not(.k-prompt-box-singleline):not(.k-prompt-box-multiline) .k-prompt-box-textarea` | `aria-label` | Provides an accessible label for the auto-mode textarea. |
| `.k-prompt-box:not(.k-prompt-box-singleline):not(.k-prompt-box-multiline) .k-prompt-box-textarea` | `aria-multiline=true` | Indicates the auto-mode textarea supports multiple lines of text. |
| `.k-prompt-box-affix .k-button:not(.k-speech-to-text-button)` | `aria-label` | The send/stop button is labelled to indicate its current action. |
| `.k-prompt-box-affix .k-button:not(.k-speech-to-text-button)` | `aria-live=polite` | Announces the change in status of the send/stop button. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the PromptBox component:

| Shortcut | Behavior |
| --- | --- |
| `Enter / Return` | Submits the prompt. |
| `Shift + Enter / Return` | Inserts a new line in multi-line and auto modes |
| `Tab` | Moves focus to the next focusable element |
| `Shift + Tab` | Moves focus to the previous focusable element |
