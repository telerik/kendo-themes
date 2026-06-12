# Prompt Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Prompt provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Prompt is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

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

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Prompt component:

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
