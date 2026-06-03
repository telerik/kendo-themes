# Toolbar Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Toolbar component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-toolbar` | `role` = `toolbar` | The component role. |
| `.k-toolbar` | `aria-label` / `aria-labelledby` | Must be supplied when multiple toolbars exist. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-vertical"])` | `aria-haspopup` = `menu` | The overflow button opens a menu popup. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-vertical"])` | `aria-expanded` = `true` / `false` | Announces popup visibility state. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-vertical"])` | `aria-controls` = `.k-toolbar-popup .k-menu-group id` | Indicates the connection between the toggle button and the menu popup. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-vertical"])` | `aria-label` / `title` | Icon-only button must have accessible text. |
| `.k-toolbar-popup .k-menu-group` | `role` = `menu` | The role of the tools wrapper in the overflow section. |
| `.k-toolbar-popup .k-menu-group` | `aria-labelledby` = `.k-toolbar-overflow-button id` | Associates the title of the menu toggle button. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-horizontal"])` | `aria-expanded` = `true` / `false` | Announces section popup visibility state. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-horizontal"])` | `aria-label` / `title` | Icon-only button must have accessible text. |
| `.k-toolbar .k-toolbar-overflow-button:has([class*="i-more-horizontal"])` | `aria-controls` = `.k-toolbar-popup .k-toolbar-items-list id` | Indicates the connection between the toggle button and the section popup. |
| `.k-toolbar-popup .k-toolbar-items-list` | `role` = `toolbar` | The role of the tools wrapper in the overflow section. |
| `.k-toolbar-popup .k-toolbar-items-list` | `aria-labelledby` = `.k-toolbar-overflow-button id` | Associates the title of the section toggle button. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Toolbar component:

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
