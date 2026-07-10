# MenuButton Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI MenuButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The MenuButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### MenuButton

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `xsmall`, `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline`, `clear`, `link` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info`, `inverse` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-menu-button` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Omitted if the button DOM element is used. |
| `aria-label` | Required when no text is visible in the button. |
| `aria-controls=".k-menu-group id"` | Points to the popup element. Builds a relationship between the button and the popup. |
| `aria-disabled="true"` | Rendered only when the button is disabled. |
| `role="list"` | Announces the list role of the popup. |
| `role="listitem"` | Announces the listitem role of the popup items. |
| `aria-expanded` | state for the popup |

#### Keyboard Navigation

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

#### UX Behavior

| Feature | Description |
| --- | --- |
| Primary action | The main button area triggers the default action. |
| Dropdown | The arrow button opens a menu popup with additional actions. |
| Item selection | Clicking a menu item triggers its action and closes the popup. |
| Disabled state | When disabled, both the button and dropdown are non-interactive. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/menu-button/`](https://github.com/telerik/kendo-themes/tree/develop/tests/menu-button/).
