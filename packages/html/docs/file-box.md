# FileBox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the FileBox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-file-box-wrapper` | `role=list` | Explicitly sets the UL role to list. |
| `.k-file-box-wrapper` | `aria-label` | Provides an accessible name for the file list (e.g. "Attached files"). |
| `.k-file-box-wrapper .k-files-scroll` | `role=presentation` | The scrollable container between the list and its items is presentational, ensuring the list→listitem relationship is preserved in the accessibility tree. |
| `.k-file-box-wrapper .k-file-box` | `role=listitem` | Explicitly sets the LI role to listitem. |
| `.k-file-box-wrapper .k-file-box` | `tabindex` | Makes the file box focusable. Uses roving tabindex: 0 for the focused item, -1 for the rest. |
| `.k-file-box-wrapper .k-file-box` | `aria-label` | Provides an accessible name describing the file. Can include the file name and size (e.g. "FileName.pdf 2MB"). |
| `.k-file-box-wrapper .k-file-box .k-icon` | `aria-hidden=true` | The file type icon is decorative and hidden from screen readers. |
| `.k-file-box-wrapper .k-file-box span.k-button` | `aria-hidden=true` | The remove button is rendered as a decorative span and hidden from screen readers. File removal is handled by keyboard interaction on the listitem itself. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the FileBox component:

| Shortcut | Behavior |
| --- | --- |
| `Right Arrow` | Focuses the next file in the list. If the focus is on the last file, the focus does not move. |
| `Left Arrow` | Focuses the previous file in the list. If the focus is on the first file, the focus does not move. |
| `Home` | Focuses the first file in the list. |
| `End` | Focuses the last file in the list. |
| `Delete or Backspace` | Removes the currently focused file. After removal, the focus moves to the next file in the list if available, or to the previous file if the last file was removed. |
