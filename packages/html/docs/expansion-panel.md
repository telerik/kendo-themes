# ExpansionPanel Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI ExpansionPanel provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ExpansionPanel is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-expander-header` | `role` = `button` | Sets the proper role for the ExpansionPanel header. |
| `.k-expander-header` | `aria-controls` | Points to the controlled content wrapper element. |
| `.k-expander-header` | `aria-expanded` = `true` / `false` | Indicates the expanded state of the ExpansionPanel. |
| `.k-expander-header` | `tabindex` = `0` | The element should be focusable. |
| `.k-disabled .k-expander-header` | `aria-disabled` = `true` | Rendered only when the ExpansionPanel is disabled. |
| `.k-expander-content-wrapper` | `id` | Content wrapper has an id referenced by aria-controls. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ExpansionPanel component:

| Trigger | Behavior |
| --- | --- |
| `Enter` | Expands and collapses the focused ExpansionPanel. |
| `Space` | Expands and collapses the focused ExpansionPanel. |

### Testing

The ExpansionPanel has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ExpansionPanel has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA Practices: Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
