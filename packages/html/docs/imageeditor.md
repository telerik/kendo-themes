# Imageeditor Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Imageeditor provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Imageeditor is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ImageEditor

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="img"` | Indicates the canvas role as an image. Applicable when an image is loaded. |
| `aria-label|aria-labelledby` | Provides an accessible name for the canvas by describing the image content. Applicable when an image is loaded. |
| `role="status"` | Announces the busy overlay shown while `exporting` is true. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + Number` | Focuses the component. |
| `Tab` | Focuses the next focusable item. |
| `Shift + Tab` | Focuses the previous focusable item. |
| `Enter` | Presses the focused button. |
| `Space` | Presses the focused button. |
| `Control/Cmd(Mac) + Z` | Undo the operation. |
| `Control/Cmd(Mac) + Y` | Redo the operation. |
| `Escape` | Deselect / Cancel operation. |
| `Delete` | Delete selected element. |
| `Control/Cmd(Mac) + Plus` | Zooms in on the image. Conflicts with the browser zoom in all browsers; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + Minus` | Zooms out from the image. Conflicts with the browser zoom out in all browsers; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + O` | Opens the image browser to import a new image. Conflicts with the Open File dialog in all browsers; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + D` | Duplicates the selected element. Conflicts with Bookmark Page in all browsers; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + Shift + S` | Exports the image. Conflicts with the Firefox Screenshot tool; requires `preventDefault` when the component is focused. |
| `Shift + 1` | Fit to screen. |
| `Shift + 0` | Zoom to 100%. |
| `Control/Cmd(Mac) + F3` | Moves keyboard focus directly to the Side Panel. |
| `R` | Inserts a rectangle shape and selects it. The Floating Toolbar appears, but the side panel remains closed. |
| `O` | Inserts an oval shape and selects it. The Floating Toolbar appears, but the side panel remains closed. |
| `L` | Inserts a line shape and selects it. The Floating Toolbar appears, but the side panel remains closed. |
| `T` | Inserts a text box with a typing cursor and selects it. The Floating Toolbar appears, but the side panel remains closed. |
| `ArrowLeft` | Moves the selected object left. |
| `ArrowRight` | Moves the selected object right. |
| `ArrowUp` | Moves the selected object up. |
| `ArrowDown` | Moves the selected object down. |
| `Control/Cmd(Mac) + B` | Bolds the text. Conflicts with the Firefox Bookmarks Sidebar; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + I` | Italicizes the text. Conflicts with Firefox Page Info; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + U` | Underlines the text. Conflicts with View Source in Chrome, Firefox, and Edge; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + Shift + L` | Left-aligns the text. |
| `Control/Cmd(Mac) + Shift + E` | Center-aligns the text. Conflicts with Firefox Search in Tabs; requires `preventDefault` when the component is focused. |
| `Control/Cmd(Mac) + Shift + R` | Right-aligns the text. Conflicts with Hard Refresh in all browsers; requires `preventDefault` when the component is focused. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Canvas | Renders the image on an editable canvas. |
| Crop | A crop tool lets the user select and apply a cropping region. |
| Pan and zoom | The canvas can be panned by dragging and zoomed with the mouse wheel. |
| Undo / Redo | All edit operations can be undone and redone. |
| Export | The edited image can be saved or downloaded. |
| Exporting | While `exporting` is true, a busy overlay covers the editor and interaction is blocked. |

### Testing

The Imageeditor has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Imageeditor has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [HTML Canvas Accessibility](https://pauljadam.com/demos/canvas.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/imageeditor/`](https://github.com/telerik/kendo-themes/tree/develop/tests/imageeditor/).
