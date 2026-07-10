# FileBox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI FileBox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The FileBox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### FileBox

#### Component States

| State | CSS Class |
| --- | --- |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-file-box` element.

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Focuses the next file in the list. If the focus is on the last file, the focus does not move. |
| `ArrowLeft` | Focuses the previous file in the list. If the focus is on the first file, the focus does not move. |
| `Home` | Focuses the first file in the list. |
| `End` | Focuses the last file in the list. |
| `Delete or Backspace` | Removes the currently focused file. After removal, the focus moves to the next file in the list if available, or to the previous file if the last file was removed. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| File list | Displays each selected file with its name, size, and status. |
| Remove | Each file item has a remove button to discard it from the list. |
| Upload status | Visual indicators show whether each file is pending, uploading, or done. |

### Testing

The FileBox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The FileBox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification: List](https://www.w3.org/TR/wai-aria-1.2/#list)
- [WAI-ARIA Specification: Listitem](https://www.w3.org/TR/wai-aria-1.2/#listitem)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/file-box/`](https://github.com/telerik/kendo-themes/tree/develop/tests/file-box/).
