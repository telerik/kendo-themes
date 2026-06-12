# Chip Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Chip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Chip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-chip-list` | `role` = `listbox` | Announces the list role of the chip list. |
| `.k-chip-list` | `aria-label` / `aria-labelledby` | Adds label to the ChipList element. ListBox element requires an accessible name. |
| `.k-chip-list` | `aria-orientation` = `horizontal` | Specifies the horizontal orientation of the chiplist. |
| `.k-chip-list` | `aria-multiselectable` = `true` | Announces the multiple selection ability of the chiplist. |
| `.k-chip-list .k-chip` | `role` = `option` | Announces the chip is an option inner component of the chip list. |
| `.k-chip-list .k-chip.k-selected` | `aria-selected` = `true` | Announces the chip is selected. |
| `.k-chip-list .k-chip:not(.k-selected)` | `aria-selected` = `false` | Announces the chip is not selected. |
| `.k-chip-list .k-chip:has(.k-i-x-circle), .k-chip-list .k-chip:has(.k-svg-i-x-circle)` | `aria-keyshortcuts` = `Enter Delete` | Announces the Delete action along with the default Enter key. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Chip component:

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Focuses the next chip in the chiplist. |
| `ArrowLeft` | Focuses the previous chip in the group. |
| `Enter or Space` | Triggers a click action on the Chip. |
| `Delete or Backspace` | Removes the Chip when a delete action is configured. |

### Testing

The Chip has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Chip has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
