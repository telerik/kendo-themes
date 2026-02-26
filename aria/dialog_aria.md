## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Dialog component

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-dialog` | `role=dialog` | Announces the dialog role of the component. |
|  | `aria-labelledby=.k-dialog-titlebar id` | Associate the title of the dialog. |
|  | `aria-describedby=.k-dialog-content id` | Associate the dialog content to the wrap element. |
| `.k-overlay + .k-dialog` | `aria-modal=true` | Announces that the dialog is modal. Attribute is added only when the dialog is modal. |

### Predefined dialogs

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-dialog.k-prompt,.k-dialog.k-alert,.k-dialog.k-confirm` | `role=alertdialog` | Announces the dialog role of the component. |

