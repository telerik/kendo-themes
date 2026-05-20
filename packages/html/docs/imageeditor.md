# Imageeditor Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Imageeditor component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-imageeditor-canvas>canvas` | `role=img` | Indicates the canvas role as an image. Applicable when an image is loaded. |
| `.k-imageeditor-canvas>canvas` | `aria-label or aria-labelledby` | Provides an accessible name for the canvas by describing the image content. Applicable when an image is loaded. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Imageeditor component:

| Shortcut | Behavior |
| --- | --- |
| `Tab` | Focuses next focusable element (the ToolBar or an input/button on the Edit pane). |
| `Shift + Tab` | Focuses previous focusable element. |
| `Ctrl + Z` | Undo the last modification performed on the image. |
| `Ctrl + Y` | Redo a modification performed on the image. |
