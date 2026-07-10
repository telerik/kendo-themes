# Toolbar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Toolbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Toolbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### FloatingToolbar

#### UX Behavior

| Feature | Description |
| --- | --- |
| Contextual display | Appears near selected content (e.g., selected text in an editor). |
| Floating position | Rendered as a floating layer above the page, not in the document flow. |
| Action buttons | Contains formatting or context-specific action buttons. |

### Toolbar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `fillMode` | `solid`, `outline`, `flat` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-toolbar` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="toolbar"` | The component role. |
| `aria-label|aria-labelledby` | Must be supplied when multiple toolbars exist. |
| `aria-haspopup="menu"` | The overflow button opens a menu popup. |
| `aria-expanded="true"|\"false"` | Announces popup visibility state. |
| `aria-controls=".k-toolbar-popup .k-menu-group id"` | Indicates the connection between the toggle button and the menu popup. |
| `aria-label|title` | Icon-only button must have accessible text. |
| `aria-expanded="true"|\"false"` | Announces section popup visibility state. |
| `aria-controls=".k-toolbar-popup .k-toolbar-items-list id"` | Indicates the connection between the toggle button and the section popup. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Moves the focus to and from the ToolBar. |
| `ArrowRight` | Moves the focus to the next focusable element in the ToolBar. Focuses the first element if the end of the ToolBar is reached. |
| `ArrowLeft` | Moves the focus to the previous focusable element in the ToolBar. Focuses the last element if the beginning of the ToolBar is reached. |
| `Home` | Moves the focus to the first focusable element. |
| `End` | Moves the focus to the last focusable element. |
| `Enter` | Clicks the currently active button or changes the state of the currently active toggleable button. If the active tool is represented by an `` element, enters the inner navigation mode of the tool. |
| `Escape` | If the active tool is represented by an `` element and its inner navigation is active, deactivates the tool navigation and returns the focus to the ToolBar. |
| `Alt + ArrowDown` | Opens the currently active SplitButton, DropDownButton, or CommandOverflow. |
| `Alt + ArrowUp` | Closes the currently active SplitButton, DropDownButton, or CommandOverflow. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Actions | Contains buttons, inputs, and other interactive controls. |
| Overflow menu | Controls that do not fit in the available space are moved to an overflow popup. |
| Separator | Visual separators group related controls. |
| Responsive | Automatically adapts visible controls based on available width. |

### ToolbarItem

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-toolbar-item` element.

#### UX Behavior

| Feature | Description |
| --- | --- |
| Overflow handling | Moves to the overflow popup when the toolbar runs out of space. |
| Template | Renders a button, separator, or any custom control based on its type. |

### ToolbarPopup

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `fillMode` | `solid`, `outline`, `flat` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="menu"` | The role of the tools wrapper in the overflow section. |
| `aria-labelledby=".k-toolbar-overflow-button id"` | Associates the title of the menu toggle button. |
| `role="toolbar"` | The role of the tools wrapper in the overflow section. |
| `aria-labelledby=".k-toolbar-overflow-button id"` | Associates the title of the section toggle button. |

### Testing

The Toolbar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Toolbar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for the ToolBar](https://www.w3.org/TR/wai-aria-1.2/#toolbar)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/toolbar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/toolbar/).
