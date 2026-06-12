# Tooltip Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Tooltip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Tooltip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-tooltip` | `role` = `tooltip` | Specifies the tooltip role of the tooltip container. |
| `.k-tooltip` | `id` | The element needs an id to be associated with the aria-describedby attribute of the trigger element. |
| `.k-tooltip .k-tooltip-button` | `role` = `button` | The close button needs an explicit button role. |
| `.k-tooltip .k-tooltip-button` | `aria-label` | The close button needs an accessible name. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Tooltip component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | Dismisses the Tooltip. |

### Testing

The Tooltip has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Tooltip has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [MDN description for tooltip role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
