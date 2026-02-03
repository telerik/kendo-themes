## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### PromptBox

The PromptBox component is a composite input widget for AI prompt entry. It contains an input or textarea, optional buttons for actions (speech-to-text, send), and supports disabled state.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box` | `role=group` | Groups the prompt input and action buttons together. |
| `.k-prompt-box.k-disabled` | `aria-disabled=true` | Attribute is rendered only when the component is disabled. |

### Input Elements

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box input` | `aria-label` or `aria-labelledby` | Input needs accessible name (if not associated with visible label). |
| `.k-prompt-box textarea` | `aria-label` or `aria-labelledby` | Textarea needs accessible name (if not associated with visible label). |
|  | `aria-multiline=true` | Announces the multi-line behavior of the textarea. |

### Buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-box .k-button:has(.k-icon)` | `aria-label` or `title` | Icon-only buttons must have accessible text. |
| `.k-prompt-box .k-button.k-disabled` | `disabled` or `aria-disabled=true` | The disabled state must be communicated. Native `disabled` removes from focus order; `aria-disabled=true` keeps in focus order. |

### References

This component uses the following child components that have their own accessibility specs:

- [button](button_aria.md)
- [speech-to-text-button](speech-to-text-button_aria.md)

