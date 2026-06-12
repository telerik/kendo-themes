# Drawer Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Drawer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Drawer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-drawer ul` | `role` = `menubar` | Indicates that the list of drawer items is a menubar. |
| `.k-drawer ul` | `aria-orientation` = `vertical` | Indicates that the orientation of the drawer is vertical. |
| `.k-drawer-item:not(.k-drawer-separator)` | `role` = `menuitem` | Indicates that the item of a drawer serves as a menuitem. |
| `.k-drawer-item.k-drawer-separator` | `role` = `separator` | Indicates that the item of a drawer serves as a separator. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Drawer component:

| Trigger | Behavior |
| --- | --- |
| `Enter` | Execute the item action |
| `ArrowUp` | Goes to the previous item. Focus is moved to the prev item and its tabindex is set to 0. |
| `ArrowDown` | Goes to the next item. Focus is moved to the next item and its tabindex is set to 0. |

### Testing

The Drawer has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Drawer has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
