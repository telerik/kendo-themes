## WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Prompt Box Component

The Prompt Box is an input component designed for AI-assisted interactions. It supports single-line and multi-line text input modes, and integrates with the Speech-to-Text Button component.

### Input Field

#### Single-line Input

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box-singleline .k-prompt-box-input` | `nodeName=input` | Ensures the input field has the proper textbox role. |
| | `aria-label` or `aria-labelledby` | Provides an accessible label for the input. Use `aria-label` or associate with a visible label via `aria-labelledby`. |

#### Multi-line Textarea

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box-multiline .k-prompt-box-textarea` | `nodeName=textarea` | Ensures the textarea has the proper textbox role. |
| | `aria-label` or `aria-labelledby` | Provides an accessible label for the textarea. Use `aria-label` or associate with a visible label via `aria-labelledby`. |
| | `aria-multiline=true` | Indicates the textarea supports multiple lines of text. |

### Prompt Box Affixes

The Prompt Box can have prefix and suffix elements containing buttons and icons.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box-affix .k-button` | `role=button` or `nodeName=button` | Buttons in affixes must have appropriate role. |
| | `aria-label` | Affix buttons must be properly labelled to describe their function. |

### Send/Submit Button

The primary action button for submitting the prompt or stopping generation.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box-affix .k-button:has([class*="i-arrow-up-outline"]), .k-prompt-box-affix .k-button:has([class*="i-stop-sm"])` | `aria-live=polite` | The send button renders the aria-live attribute to announce the change in status. |
| | `aria-label` | The send button is labelled to indicate its current action (e.g., 'Send prompt' or 'Stop generating'). |

### Speech-to-Text Button

The Speech-to-Text Button follows the [Speech-to-Text Button accessibility specification](speech-to-text-button_aria.md).

### File Attachments

When file attachments are present, the file attachment section follows the [FileBox accessibility specification](file-box_aria.md).

### References

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/)
