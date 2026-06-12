# Radio Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Radio provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Radio is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-radio` | `type` = `radio` | Announces the radio type of the input. |
| `.k-radio` | `aria-label` / `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `.k-radio` | `checked` | Boolean attribute that announces the checked state of the radio button. |
| `.k-radio` | `aria-describedby` | Points to the hint or error message for the radio. |
| `.k-radio` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the radio input is disabled. |
| `.k-invalid, .ng-invalid` | `aria-invalid` = `true` | Rendered only when the radio button is in a form and announces the invalid state. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Radio component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp or ArrowLeft` | Moves focus to the previous button and selects it. If the first button is focused, moves focus to the last. |
| `ArrowDown or ArrowRight` | Moves the focus to the next button and selects it. If the last button is focused, moves the focus to the first one. |

### Testing

The Radio has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Radio has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
