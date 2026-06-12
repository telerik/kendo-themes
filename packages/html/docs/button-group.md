# ButtonGroup Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI ButtonGroup provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ButtonGroup is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-button-group:not(.k-split-button)` | `role` = `group` | Sets the proper role for the group of buttons. |
| `.k-button-group.k-disabled` | `aria-disabled` = `true` | The attribute is rendered only when the entire button group is disabled. |
| `.k-button-group:not(.k-split-button):not(.k-scheduler-navigation):not(.k-zoom-control) .k-button` | `aria-pressed` | Specifies the current state of the ButtonGroup. Only the selected button within the group will have this attribute set to true. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ButtonGroup component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focuses the next button in the group. If the focus is on the last button, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous button in the group. If the focus is on the first button, focuses the previous focusable element before the ButtonGorup. |
| `Enter or Space` | Triggers a click action on the button. |

### Testing

The ButtonGroup has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ButtonGroup has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA `button` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#button)
- [WAI-ARIA `group` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#group)
