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

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focuses next focusable element (the ToolBar or an input/button on the Edit pane). |
| `Shift + Tab` | Focuses previous focusable element. |
| `Control + Z` | Undo the last modification performed on the image. |
| `Control + Y` | Redo a modification performed on the image. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Canvas | Renders the image on an editable canvas. |
| Crop | A crop tool lets the user select and apply a cropping region. |
| Pan and zoom | The canvas can be panned by dragging and zoomed with the mouse wheel. |
| Undo / Redo | All edit operations can be undone and redone. |
| Export | The edited image can be saved or downloaded. |

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
