## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `div[contenteditable='true']` | `role=textbox` | Specifies the role of the component as text input. |
|  | `label for` or `aria-label` or `aria-labelledby` | The component focusable element needs an accessible name to be assigned to it. |
| `.k-editor.k-readonly div[contenteditable=false]` | `aria-readonly=true` | Attribute is rendered only when the Editor is readonly. |

