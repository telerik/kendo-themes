# BottomNav Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI BottomNav provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The BottomNav is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-bottom-nav` | `role` = `navigation` | The landmark role navigation must be assigned to the bottom navigation. |
| `.k-bottom-nav-item` | `role` = `link` | Associate the link purpose of the bottom navigation items. |
| `.k-bottom-nav-item.k-selected` | `aria-current` = `true` | Indicates the selected navigation item. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the BottomNav component:

| Trigger | Behavior |
| --- | --- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Space or Enter` | Activates the currently focused link. |

### Testing

The BottomNav has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The BottomNav has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Navigation](https://www.w3.org/TR/wai-aria-1.2/#navigation)
