# Editor Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Editor provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Editor is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Editor

#### Component States

| State | CSS Class |
| --- | --- |
| `readonly` | `k-readonly` |
| `disabled` | `k-disabled` |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-editor` element.

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Control/Cmd(Mac) + B` | Executes bold command. |
| `Control/Cmd(Mac) + I` | Executes italic command. |
| `Control/Cmd(Mac) + U` | Executes underline command. |
| `Control/Cmd(Mac) + Z` | Executes undo command. |
| `Control/Cmd(Mac) + Y` | Executes redo command. |
| `Shift + Enter` | Adds ` ` to content. |
| `Enter` | Adds `` to content. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Toolbar | A formatting toolbar provides commands for styling content. |
| Rich content | Supports formatted text, hyperlinks, images, and tables. |
| Paste cleanup | Automatically cleans up formatting when pasting from external sources. |
| Source view | A toggle button switches between rich-text and raw HTML views. |
| Disabled state | When disabled, the content area is read-only. |

### EditorContent

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-readonly` | =true when the editor is readonly |

### Testing

The Editor has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Editor has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for textbox](https://www.w3.org/TR/wai-aria-1.2/#textbox)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/editor/`](https://github.com/telerik/kendo-themes/tree/develop/tests/editor/).
