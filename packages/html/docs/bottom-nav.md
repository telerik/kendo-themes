# BottomNav Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI BottomNav provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The BottomNav is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### BottomNav

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `fillMode` | `solid`, `flat` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `inverse` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="navigation"` | The landmark role navigation must be assigned to the bottom navigation. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Space or Enter` | Activates the currently focused link. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Fixed position | Rendered at the bottom of the viewport and stays visible while the user scrolls. |
| Sticky position | Sticks to the bottom edge of its scroll container when the user scrolls past it. |
| Absolute position | Positioned at the bottom of its nearest positioned ancestor, scrolls with the page. |
| Item selection | The active item receives the `k-selected` class. Clicking another item transfers selection to it. |
| Disabled state | When disabled, the component and all its items are non-interactive and visually dimmed. |
| Border | An optional top border separates the navigation from the page content above it. |

### BottomNavItem

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="link"` | Associate the link purpose of the bottom navigation items. |
| `aria-current="true"` | Indicates the selected navigation item. |

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
