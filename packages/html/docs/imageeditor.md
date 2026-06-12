# Imageeditor Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Imageeditor provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Imageeditor is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-imageeditor-canvas>canvas` | `role` = `img` | Indicates the canvas role as an image. Applicable when an image is loaded. |
| `.k-imageeditor-canvas>canvas` | `aria-label` / `aria-labelledby` | Provides an accessible name for the canvas by describing the image content. Applicable when an image is loaded. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Imageeditor component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focuses next focusable element (the ToolBar or an input/button on the Edit pane). |
| `Shift + Tab` | Focuses previous focusable element. |
| `Control + Z` | Undo the last modification performed on the image. |
| `Control + Y` | Redo a modification performed on the image. |

### Testing

The Imageeditor has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Imageeditor has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [HTML Canvas Accessibility](https://pauljadam.com/demos/canvas.html)
