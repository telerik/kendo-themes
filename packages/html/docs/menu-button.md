# MenuButton Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI MenuButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The MenuButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-menu-button` | `role` = `button` | Omitted if the button DOM element is used. |
| `.k-menu-button` | `aria-label` | Required when no text is visible in the button. |
| `.k-menu-button` | `aria-expanded` = `true` / `false` | Announces the state of the popup visibility. |
| `.k-menu-button` | `aria-controls` = `.k-menu-group id` | Points to the popup element. Builds a relationship between the button and the popup. |
| `.k-menu-button.k-disabled` | `aria-disabled` = `true` | Rendered only when the button is disabled. |
| `.k-menu-group` | `role` = `list` | Announces the list role of the popup. |
| `.k-menu-item` | `role` = `listitem` | Announces the listitem role of the popup items. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the MenuButton component:

| Trigger | Behavior |
| --- | --- |
| `Alt + ArrowDown` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |
| `Enter or Space` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |
| `Alt + ArrowUp` | Closes the popup and moves the focus back to the main `button` element. |
| `Escape` | Closes the popup and moves the focus back to the main button element. |
| `ArrowDown` | Moves the focus to the next `menuitem` element. If the focus is on the last menu item, moves the focus to the first menu item. |
| `ArrowUp` | Moves the focus to the previous `menuitem` element. If the focus is on the first menu item, moves the focus to the last menu item. |
| `Home` | Moves the focus to the first `menuitem` element. |
| `End` | Moves the focus to the last `menuitem` element. |
| `Enter or Space` | Clicks (activates) the currently active `menuitem` element and closes the popup. |

### Testing

The MenuButton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The MenuButton has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Menu Button Pattern.](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
