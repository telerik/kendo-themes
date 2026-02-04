## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### FileBoxWrapper

The FileBoxWrapper component is a list container for file attachments.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-file-box-wrapper` | `role=list` | Indicates the container is a list. |
|  | `aria-label` | Provides an accessible name for the list (default: "Attached files"). |

### FileBox

The FileBox component represents a single file attachment in a list.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-file-box` | `role=listitem` | Indicates this is an item in the file list. |
|  | `aria-label` | Provides accessible name describing the file (name, size, status). |

### Icon and Buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-file-box .k-icon` | `aria-hidden=true` | File type icon is decorative, hidden from screen readers. |
| `.k-file-box .k-button` | `aria-label` | Action buttons must have accessible labels. |

### References

- [Button accessibility specification](button_aria.md)
- [Menu Button accessibility specification](menu-button_aria.md)
