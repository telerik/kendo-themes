# SegmentedControl Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI SegmentedControl provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SegmentedControl is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-segmented-control` | `role` = `group` | Sets the proper role for the group of buttons. |
| `.k-segmented-control-button` | `role` = `button` | Each button must have the appropriate button role. |
| `.k-segmented-control-button.k-selected` | `aria-pressed` = `true` | Only the selected button within the group will have this attribute set to true. |
| `.k-segmented-control-button.k-disabled` | `aria-disabled` = `true` | Indicates that the button is disabled and cannot be interacted with. |
| `.k-segmented-control-thumb` | `aria-hidden` = `true` | The thumb is purely decorative and should be hidden from screen readers. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SegmentedControl component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focuses the next button in the control. If the focus is on the last button, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous button in the control. If the focus is on the first button, focuses the previous focusable element before the Segmented Control. |
| `Enter or Space` | Activates the focused button and selects it. |

### Testing

The SegmentedControl has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The SegmentedControl has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA `button` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#button)
- [WAI-ARIA `group` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#group)
