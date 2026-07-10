# Drawer Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Drawer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Drawer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Drawer

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `position` | `start`, `end` | `start` |
| `mode` | `overlay`, `push` | `push` |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="menubar"` | Indicates that the list of drawer items is a menubar. |
| `aria-orientation="vertical"` | Indicates that the orientation of the drawer is vertical. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter` | Execute the item action |
| `ArrowUp` | Goes to the previous item. Focus is moved to the prev item and its tabindex is set to 0. |
| `ArrowDown` | Goes to the next item. Focus is moved to the next item and its tabindex is set to 0. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Overlay mode | The drawer slides in over the page content. |
| Push mode | The drawer pushes the main content aside when open. |
| Mini mode | Collapses to a narrow icon strip when closed. |
| Position | Can be anchored to the left or right edge of the container. |
| Backdrop | An optional semi-transparent overlay prevents interaction with the page while the drawer is open. |

### DrawerItem

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-drawer-item` element.

#### UX Behavior

| Feature | Description |
| --- | --- |
| Selection | Clicking the item navigates or selects it, giving it the active state. |
| Icon and label | Shows an icon beside a text label in expanded mode; icon-only in mini mode. |
| Disabled state | When disabled, the item is non-interactive. |

### Testing

The Drawer has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Drawer has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/drawer/`](https://github.com/telerik/kendo-themes/tree/develop/tests/drawer/).
