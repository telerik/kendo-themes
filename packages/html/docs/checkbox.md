# Checkbox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Checkbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Checkbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-checkbox` | `role` = `checkbox` | Announces the checkbox role of the element. For native checkboxes, type="checkbox" is used instead. |
| `.k-checkbox` | `aria-label` / `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `.k-checkbox` | `aria-checked` (or `checked` natively) = `true` / `false` / `mixed` | For native checkboxes the checked state is handled by the browser. aria-checked is used for custom implementations. |
| `.k-checkbox` | `aria-describedby` | Points to the hint or error message for the checkbox. |
| `.k-checkbox` | `aria-disabled` (or `disabled` natively) = `true` | For native checkboxes use the HTML disabled attribute. aria-disabled for custom implementations. |
| `.k-invalid, .ng-invalid` | `aria-invalid` = `true` | Rendered only when the CheckBox is in a form and announces the invalid state. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Checkbox component:

| Trigger | Behavior |
| --- | --- |
| `Space` | Toggles the checked state. Regardless of the indeterminate state, the key always considers the `Value` of the CheckBox. |
| `Shift + Tab` | Moves focus to the previous checkbox. |
| `ArrowDown or ArrowRight` | Moves focus to the next checkbox. |

### Testing

The Checkbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Checkbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: CheckBox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
