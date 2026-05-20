# Dialog Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Dialog component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dialog` | `role=dialog or role=alertdialog` | Announces the dialog or alertdialog role of the component. |
| `.k-dialog` | `aria-labelledby` | Associate the title of the dialog. |
| `.k-dialog` | `aria-describedby` | Associate the dialog content to the wrap element. |
| `.k-overlay + .k-dialog` | `aria-modal=true` | Announces that the dialog is modal. Attribute is added only when the dialog is modal. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dialog component:

| Shortcut | Behavior |
| --- | --- |
| `Tab` | Focus is moved between the elements in the dialog and is trapped into the component. |
| `Escape` | Closes the dialog. When the dialog is modal, the focus should be returned to the element that triggered the open. |
