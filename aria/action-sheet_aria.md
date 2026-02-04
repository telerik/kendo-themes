## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ActionSheet component

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-actionsheet` | `role=dialog` | Announces the dialog role of the component. |
|  | `aria-labelledby=.k-actionsheet-title id` | Associates the title of the action sheet. |
|  | `aria-hidden=true/false` | Announces the hidden state of the ActionSheet container. |
|  | `aria-modal=true` | Announces that the action sheet is modal. |
| `.k-actionsheet .k-actionsheet-title` | `id` | Used to associate the title with the action sheet wrapper element. |
| `.k-list-ul` | `role=group` | Sets the role attribute of the action sheet items wrapper to group. |
| `.k-actionsheet-item` | `tabindex=0` | Makes items focusable and includes them in the natural tab sequence. |
|  | `role=button` | Sets action sheet items role to button. |
| `.k-actionsheet-item.k-disabled` | `aria-disabled=true` | Announces action items as disabled as necessary. |

