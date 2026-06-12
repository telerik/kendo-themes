# Stepper Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Stepper provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Stepper is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-stepper` | `role` = `navigation` | The landmark role navigation must be assigned to the component. |
| `.k-step.k-disabled>.k-step-link` | `aria-disabled` = `true` | A disabled (inactive) link. |
| `.k-step-current>.k-step-link` | `aria-current` = `step` | The currently selected link. |
| `.k-step.k-focus .k-step-link` | `tabindex` = `0` | Focused step link is in the tab order. |
| `.k-step:not(.k-focus) .k-step-link` | `tabindex` = `-1` | Non-focused step links are removed from tab order. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Stepper component:

| Trigger | Behavior |
| --- | --- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Home` | Focuses first link. |
| `End` | Focuses last link. |
| `Space or Enter` | Activates the currently focused link. |

### Testing

The Stepper has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Stepper has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for navigation](https://www.w3.org/TR/wai-aria-1.2/#navigation)
