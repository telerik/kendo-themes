# FloatingToolbar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI FloatingToolbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The FloatingToolbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### FloatingToolbar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `fillMode` | `solid`, `outline`, `flat` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | The drag handle is a non-semantic element exposed as a button; it is a Tab stop independent of the Toolbar's own roving-tabindex group. |
| `aria-label="Drag to reposition"` | The drag handle requires an accessible name; override via `dragHandleAriaLabel`. |
| `aria-pressed="true"|"false"` | Implementations must toggle this to reflect whether Move mode is currently engaged. |
| `aria-live="polite"` | Implementations must announce each Move-mode position change (e.g. "Moved right") via a live region, since dragging has no other feedback for screen-reader users. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `—(inherited)` | The Toolbar's own keyboard map applies in full to its actions (roving tabindex, arrow-key navigation, Home/End, Enter, Alt+ArrowDown/Up). The drag handle is a separate Tab stop before/after the Toolbar and is not part of that roving-tabindex group. |
| `M` | When draggable, activates the keyboard-driven "Move" mode on the drag handle (accessible equivalent to pointer drag). |
| `ArrowLeft` | While Move mode is active, moves the toolbar left. |
| `ArrowRight` | While Move mode is active, moves the toolbar right. |
| `ArrowUp` | While Move mode is active, moves the toolbar up. |
| `ArrowDown` | While Move mode is active, moves the toolbar down. |
| `Enter` | While Move mode is active, locks the toolbar in its new position and exits Move mode. |
| `Escape` | While Move mode is active, cancels the move, restores the original position, and exits Move mode. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Contextual display | Appears near selected content (e.g., selected text in an editor). |
| Floating position | Rendered as a floating layer above the page, not in the document flow. |
| Action buttons | Contains formatting or context-specific action buttons. |
| Drag handle | When draggable, a persistent handle sits outside the scrollable Toolbar so it's never hidden behind the overflow menu. |
| Non-drag alternative | Per WCAG 2.5.7, implementations must also offer a way to reposition without a sustained drag gesture (e.g. tap handle, then tap/click the destination); the keyboard Move mode alone does not satisfy this for touch/mouse users. Not addressed by this spec — flagged as an open requirement for consuming implementations. |

### Testing

The FloatingToolbar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The FloatingToolbar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/floating-toolbar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/floating-toolbar/).
