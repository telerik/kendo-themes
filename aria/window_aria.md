## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-window:not(.k-dialog)` | `role=dialog` | Announces the dialog role of the component. |
|  | `aria-labelledby=.k-window-title id` | Associate the title of the dialog. |
| `.k-overlay + .k-window` | `aria-modal=true` | Announces that the dialog is modal. Attribute is added only when the dialog is modal. |


Action buttons follow the **Button** specification.

[Button accessibility specification](button_aria.md)

