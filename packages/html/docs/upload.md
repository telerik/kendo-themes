# Upload Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Upload component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-upload .k-upload-button` | `aria-disabled` | Announces the disabled state of the upload button. |
| `.k-upload .k-upload-button` | `aria-controls (when present)` | Creates the relationship between the button and the list of selected files when the list is present. |
| `.k-upload input` | `tabindex=-1` | Assures that the input element inside the upload is not focusable. |
| `.k-upload input` | `aria-hidden=true` | The input needs to be hidden from screen readers. |
| `.k-upload-files` | `role=list` | Explicitly sets the UL role to list. |
| `.k-upload-files` | `id` | Unique and deterministic id linked to the button aria-controls attribute. |
| `.k-upload-files .k-file` | `role=listitem` | Explicitly sets the LI role to listitem. |
| `.k-upload .k-file .k-file-validation-message` | `aria-live=polite` | Announces the change in the upload status of the file. |
| `.k-upload .k-upload-actions .k-upload-action` | `aria-label` | Provides accessible names for the file action buttons. |
| `.k-upload .k-upload-actions .k-upload-action` | `tabindex=-1` | The list file action buttons are not focusable elements. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Upload component:

| Shortcut | Behavior |
| --- | --- |
| `Tab` | Switches focus between the Select File Button, the list of selected files, and the action buttons (Cancel, Upload) after the file list. |
| `Space/Enter` | Opens the Select file dialog if the Select files button is focused. |
| `DownArrow` | Highlights the next file in the file list (if such exists) when a file list item is focused. |
| `UpArrow` | Highlights the previous file in the file list (if such exists) when a file list item is focused. |
| `Enter` | Retries the upload of the failed file when the focus is on a file list item or starts the file upload for a valid file. |
| `Escape` | Cancels the upload of the highlighted file when the focus is on a file list item |
| `Space` | When Chunk upload is enabled Start or Pause the highlighted file upload |
| `Delete` | Removes the highlighted file when the focus is on a file list item. Focus is moved to the next file (if present), previous file (if there is no next and there is previous), or is returned to the Select Files button if the last file from the list is deleted. |
