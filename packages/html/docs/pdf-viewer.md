# PdfViewer Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the PdfViewer component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pdf-viewer .k-canvas` | `tabindex=0` | Defines the focusable page container element. |
| `.k-pdf-viewer .k-canvas` | `aria-label` | Describes the purpose of the focusable container. |
| `.k-pdf-viewer .k-canvas` | `role=document` | Defines that content should be evaluated in reader mode by assistive technologies. |
| `.k-pdf-viewer .k-toolbar .k-button:has([class*="i-search"])` | `aria-haspopup=dialog` | Describes that the Search tool button opens a dialog element. |
| `.k-pdf-viewer .k-canvas .k-search-panel` | `role=dialog` | Describes the role of the Search panel. |
| `.k-pdf-viewer .k-canvas .k-search-panel` | `aria-label` | Label for the Search panel, same label as the Search tool. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the PdfViewer component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow` | Scrolls up the container. |
| `Down Arrow` | Scrolls down the container. |
| `PageUp` | Scrolls up the container. |
| `PageDown` | Scrolls down the container. |
| `Shift + Tab` | Returns focus to the toolbar. |
