# Dialog Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dialog provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dialog is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dialog` | `role` = `dialog` / `alertdialog` | Announces the dialog or alertdialog role of the component. |
| `.k-dialog` | `aria-labelledby` | Associate the title of the dialog. |
| `.k-dialog` | `aria-describedby` | Associate the dialog content to the wrap element. |
| `.k-overlay + .k-dialog` | `aria-modal` = `true` | Announces that the dialog is modal. Attribute is added only when the dialog is modal. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dialog component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focus is moved between the elements in the dialog and is trapped into the component. |
| `Escape` | Closes the dialog. When the dialog is modal, the focus should be returned to the element that triggered the open. |

### Testing

The Dialog has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Dialog has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)
