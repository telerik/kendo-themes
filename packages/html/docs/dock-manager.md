# DockManager Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI DockManager provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The DockManager is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DockManager

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="application"` | Indicates that the DockManager has its own keyboard navigation implemented. |
| `aria-live="polite"` | Defines dynamic content changes within the DockManager container. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + ArrowUp` | Maximizes the active pane. |
| `Alt/Opt(Mac) + ArrowDown` | Minimizes the active pane. |
| `Escape` | Closes the active pane. |
| `Alt/Opt(Mac) + ArrowLeft` | Unpins the active pane. |
| `Alt/Opt(Mac) + ArrowRight` | Pins the active pane. |
| `Control/Cmd(Mac) + ArrowRight` | Focuses the next content pane. |
| `Control/Cmd(Mac) + ArrowLeft` | Focuses the previous content pane. |
| `Control/Cmd(Mac) + Shift + ArrowUp` | Docks the active pane to the global top. |
| `Control/Cmd(Mac) + Shift + ArrowDown` | Docks the active pane to the global bottom. |
| `Control/Cmd(Mac) + Shift + ArrowLeft` | Docks the active pane to the global left. |
| `Control/Cmd(Mac) + Shift + ArrowRight` | Docks the active pane to the global right. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Panels | Contains independent panels that can be docked to fixed positions or floated. |
| Drag and drop | Panels are repositioned by dragging their tab headers. |
| Tab groups | Multiple panels docked to the same position form a tabbed group. |
| Floating panels | Panels can be detached and float freely above the layout. |
| Resize | Panel sizes are adjusted by dragging the splitter between dock zones. |

### Testing

The DockManager has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The DockManager has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/dock-manager/`](https://github.com/telerik/kendo-themes/tree/develop/tests/dock-manager/).
