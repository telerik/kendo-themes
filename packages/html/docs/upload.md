# Upload Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Upload provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Upload is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Upload

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-upload` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-disabled` | Announces the disabled state of the upload button. |
| `aria-controls` | Creates the relationship between the button and the list of selected files when the list is present. |
| `tabindex="-1"` | Assures that the input element inside the upload is not focusable. |
| `aria-hidden="true"` | The input needs to be hidden from screen readers. |
| `role="list"` | Explicitly sets the UL role to list. |
| `id` | Unique and deterministic id linked to the button aria-controls attribute. |
| `role="listitem"` | Explicitly sets the LI role to listitem. |
| `aria-live="polite"` | Announces the change in the upload status of the file. |
| `aria-label` | Provides accessible names for the file action buttons. |
| `tabindex="-1"` | The list file action buttons are not focusable elements. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Switches focus between the Select File Button, the list of selected files, and the action buttons (Cancel, Upload) after the file list. |
| `Space or Enter` | Opens the Select file dialog if the Select files button is focused. |
| `ArrowDown` | Highlights the next file in the file list (if such exists) when a file list item is focused. |
| `ArrowUp` | Highlights the previous file in the file list (if such exists) when a file list item is focused. |
| `Enter` | Retries the upload of the failed file when the focus is on a file list item or starts the file upload for a valid file. |
| `Escape` | Cancels the upload of the highlighted file when the focus is on a file list item |
| `Space` | When Chunk upload is enabled Start or Pause the highlighted file upload |
| `Delete` | Removes the highlighted file when the focus is on a file list item. Focus is moved to the next file (if present), previous file (if there is no next and there is previous), or is returned to the Select Files button if the last file from the list is deleted. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Drop zone | Files can be dragged and dropped onto the component to start the upload. |
| Browse | A button opens the system file dialog to select files. |
| Progress | Per-file progress bars show upload completion. |
| Cancel | Individual file uploads can be cancelled while in progress. |
| Validation | File type and size restrictions are enforced and violation messages are shown. |

### Testing

The Upload has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Upload has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/upload/`](https://github.com/telerik/kendo-themes/tree/develop/tests/upload/).
