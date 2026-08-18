# Splitter Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Splitter provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Splitter is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Splitter

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Moves up the split-bar in a vertical Splitter. |
| `ArrowDown` | Moves down a split-bar in a vertical Splitter. |
| `ArrowLeft` | Moves left a split-bar in a horizontal Splitter. |
| `ArrowRight` | Moves right a split-bar in a horizontal Splitter. |
| `Control/Cmd(Mac) + ArrowUp` | Moves the splitbar up to collapse/expand the adjacent panes in the up direction. |
| `Control/Cmd(Mac) + ArrowDown` | Moves the splitbar down to collapse/expand the adjacent panes in the down direction. |
| `Control/Cmd(Mac) + ArrowLeft` | Moves the splitbar left to collapse/expand the adjacent panes in the left direction. |
| `Control/Cmd(Mac) + ArrowRight` | Moves the splitbar right to collapse/expand the adjacent panes in the right direction. |
| `Enter` | Toggles the collapsed state of the nearest collapsible pane. |
| `Tab` | The key that allows focusing a splitter bar. Thus, all splitbars have `tabindex` and are included in the tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Resizable panes | The separator between panes can be dragged to resize them. |
| Collapse / Expand | Individual panes can be collapsed and expanded using toggle arrows. |
| Orientation | Can be laid out horizontally (side-by-side) or vertically (stacked). |

### Testing

The Splitter has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Splitter has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for separator](https://www.w3.org/TR/wai-aria-1.2/#separator)
- [MDN reference for the separator role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/splitter/`](https://github.com/telerik/kendo-themes/tree/develop/tests/splitter/).
