## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### FileBoxWrapper

The FileBoxWrapper component is a list container for file attachments.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-file-box-wrapper` | `role=list` | Explicitly sets the UL role to list. |
|  | `aria-label` | Provides an accessible name for the list (e.g. "Attached files"). |

### FileBox

The FileBox component represents a single file attachment in a list.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-file-box` | `role=listitem` | Explicitly sets the LI role to listitem. |
|  | `tabindex` | Makes the file box focusable. Uses roving tabindex: `0` for the focused item, `-1` for the rest. |
|  | `aria-label` | Provides an accessible name describing the file. Should include the file name and size (e.g. "FileName.pdf 2MB"). |

### Icon and Buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-file-box .k-icon` | `aria-hidden=true` | File type icon is decorative, hidden from screen readers. |
| `.k-file-box span.k-button` | `aria-hidden=true` | The remove button is rendered as a decorative `<span>` (not a `<button>`) and hidden from screen readers. File removal is handled by keyboard interaction on the listitem itself. |

### References

- [Button accessibility specification](button_aria.md)
- [Menu Button accessibility specification](menu-button_aria.md)
