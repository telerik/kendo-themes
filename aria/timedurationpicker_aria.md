## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### TimeDurationPicker Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-input-inner` | `role=combobox` | The input element must follow the `combobox` specification. |
|  | `label for` or `aria-label` or `aria-labelledby` | An accessible name must be assigned to the input. |
|  | `aria-expanded=true/false` | Announces whether the Popup is visible or not. |
|  | `aria-haspopup=dialog` | Indicates the component has a Dialog Popup |
|  | `aria-controls=.k-popup id` | Points to the popup element. Signifies that the `combobox` element controls the `dialog` popup. |
|  | `readonly` or `aria-readonly` | The attribute is rendered only when the DatePicker is readonly. |
| `.k-invalid .k-input-inner,.ng-invalid .k-input-inner` | `aria-invalid=true` | An attribute is rendered only when the picker is in form and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | An attribute is rendered only when the DatePicker is disabled. |
| `.k-input-button` | `aria-hidden=true` | The button element must be hidden from the assistive technologies. |
|  | `tabindex=-1` | The button element must not be focusable. |
| `k-timedurationpicker.k-disabled .k-button` | `disabled` or `aria-disabled=true` | An attribute is rendered only when the picker is disabled. |

### List Elements in the Popup

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-time-list` | `role=listbox` | The timelist elements must have a `listbox` role assigned. |
|  | `aria-label` or `aria-labelledby` | An accessible name must be assigned to the listbox. |
| `.k-time-list .k-reset` | `role=none/presentation` | The `k-rest` `<ul>` element's semantic meaning must be removed from the accessibility tree. |
| `.k-time-list .k-item` | `role=option` | The available options in the listbox must be marked as such. |
|  | `aria-selected=true/false` | The selected option must have its `aria-selected` attribute set to `true`. |

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

