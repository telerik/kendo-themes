# Radio Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Radio provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Radio is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### RadioButton

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `type="radio"` | Announces the radio type of the input. |
| `aria-label|aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `checked` | Boolean attribute that announces the checked state of the radio button. |
| `aria-describedby` | Points to the hint or error message for the radio. |
| `aria-disabled="true"` | Rendered only when the radio input is disabled. |
| `aria-invalid="true"` | Rendered only when the radio button is in a form and announces the invalid state. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp or ArrowLeft` | Moves focus to the previous button and selects it. If the first button is focused, moves focus to the last. |
| `ArrowDown or ArrowRight` | Moves the focus to the next button and selects it. If the last button is focused, moves the focus to the first one. |

### RadioGroup

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-invalid="true"` | Rendered only when the radio button is in a form and announces the invalid state. |

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
- [WCAG 4.1.2 Name, Role, Value — radio must have accessible name](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [WCAG 1.3.1 Info and Relationships — label must be programmatically associated](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
