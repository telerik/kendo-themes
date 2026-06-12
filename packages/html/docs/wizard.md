# Wizard Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Wizard provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Wizard is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-step-list` | `role` = `tablist` | Indicates the role of the tablist container element. |
| `.k-step` | `role` = `none` | The implicit semantics of the li element must be removed. |
| `.k-step-link` | `role` = `tab` | Specifies the role for the step links. |
| `.k-step-link` | `aria-controls` = `.k-wizard-step id` | Refers to the tabpanel element associated with the tab. |
| `.k-step.k-disabled>.k-step-link` | `aria-disabled` = `true` | A disabled (inactive) tab. |
| `.k-step-current .k-step-link` | `aria-selected` = `true` | Indicates the tab control is activated. |
| `.k-step-current .k-step-link` | `aria-current` = `true` | Indicates the current active step. |
| `.k-step-current .k-step-link` | `tabindex` = `0` | Current step is in the page tab sequence. |
| `.k-step:not(.k-step-current) .k-step-link` | `tabindex` = `-1` | Non-current steps are removed from tab sequence. |
| `.k-wizard-step` | `role` = `tabpanel` | Specifies the role of the element. |
| `.k-wizard-step` | `aria-label` | Specifies a label for the panel (e.g., "Step 2 of 4"). |
| `.k-wizard-step` | `tabindex` = `0` | Keeps the tabpanel in the page tab sequence. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Wizard component:

| Trigger | Behavior |
| --- | --- |
| `ArrowLeft or ArrowUp` | Selects previous tab. |
| `ArrowRight or ArrowDown` | Selects next tab. |
| `Home` | Selects first tab. |
| `End` | Selects last tab. |
| `Tab` | Focuses next element in the page Tab sequence. That could be the currently visible `tabpanel`, an element on it, or an element outside the Wizard. |
| `Shift + Tab` | Focuses previous element in the page Tab sequence. |

### Testing

The Wizard has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Wizard has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tablist](https://www.w3.org/TR/wai-aria-1.2/#tablist)
