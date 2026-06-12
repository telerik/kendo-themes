# Splitter Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Splitter provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Splitter is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pane` | `role` = `group` | Sets the proper role for the Splitter pane. |
| `.k-splitbar` | `role` = `separator` | Sets the proper role for the Splitter split-bar element. |
| `.k-splitbar` | `aria-label` | An accessible name for the separator. |
| `.k-splitbar-horizontal` | `aria-orientation` = `vertical` | When a splitbar separates two panes horizontally, its aria-orientation must be explicitly set to vertical. |
| `.k-splitbar` | `aria-keyshortcuts` | Announces available keyboard shortcuts. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Splitter component:

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
