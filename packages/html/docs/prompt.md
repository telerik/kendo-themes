# Prompt Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Prompt provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Prompt is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Prompt

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-controls` | Points to the controlled element based on the given id. |
| `aria-expanded` | Indicates the expanded state of the prompt expander content. |
| `role="group"` | Indicates that the suggestion container element is a group. |
| `role="button"` | Indicates that the suggestion element is a button. |
| `aria-label|title` | The suggestion elements must be properly labelled. |
| `tabindex="0"` | The suggestion element should be focusable. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | If generating, stops the generation process. |
| `Enter or Space` | Triggers a click action on the suggestion element. |
| `Escape` | If generating, stops the generation process. If not, closes the Inline AI Prompt popup. |
| `Enter` | Sends the message. |
| `Shift + Enter` | Starts a new line in the textarea message box. |

### Testing

The Prompt has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Prompt has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
