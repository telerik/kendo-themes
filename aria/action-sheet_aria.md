## WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component.

### ActionSheet Dialog Wrapper

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-actionsheet` | `role=dialog` | Announces the dialog role of the component. |
|  | `aria-labelledby=.k-actionsheet-title id` | Associates the title of the action sheet. |
|  | `aria-hidden=true/false` | Announces the hidden state of the ActionSheet container. |
|  | `aria-modal=true` | Announces that the action sheet is modal. |
| `.k-actionsheet .k-actionsheet-title` | `id` | Used to associate the title with the action sheet wrapper element. |

### Embedded Content

ActionSheet is a container component with arbitrary content. When components use ActionSheet in adaptive mode (e.g., dropdowns rendering lists), those components are responsible for ensuring their internal content has proper ARIA attributes.

