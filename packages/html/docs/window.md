# Window Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Window provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Window is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Window

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="dialog"` | Announces the dialog role of the component. |
| `aria-labelledby` | Associate the title of the dialog. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + ArrowDown` | Minimizes or restores the state, if the focused element is the window |
| `Alt/Opt(Mac) + ArrowUp` | Maximizes or restores the state, if the focused element is the window |
| `Arrow Keys` | Move the window to the respective direction (UP |
| `Control/Cmd(Mac) + ArrowUp` | Decreases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Control/Cmd(Mac) + ArrowDown` | Increases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Control/Cmd(Mac) + ArrowLeft` | Decreases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Control/Cmd(Mac) + ArrowRight` | Increases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Escape` | Closes the window. When the window is modal, the focus should be returned to the element that triggered the open. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Draggable | The window is repositioned by dragging its title bar. |
| Resizable | The window is resized by dragging its edges or corners. |
| Minimize / Maximize | The window can be collapsed to only the title bar or expanded to fill the viewport. |
| Close | The × button removes the window from the DOM. |
| Stacking | Multiple open windows maintain correct z-index layering. |

### Testing

The Window has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Window has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/window/`](https://github.com/telerik/kendo-themes/tree/develop/tests/window/).
