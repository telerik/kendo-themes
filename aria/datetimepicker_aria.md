## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Input element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-input-inner` | `role=combobox` | The input element should follow the `combobox` specification. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-required=true` | The attribute is rendered only when the DateTimePicker is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the input, or if the input is invalid, to the error message. This attribute should only be present when a hint is set or when the input is invalid. |
|  | `aria-haspopup=dialog` | Indicates the component has a Dialog Popup. |
|  | `aria-expanded=true/false` | Announces whether the Popup is visible or not. |
|  | `aria-controls=.k-calendar-container id` | Points to the popup element. Signifies that the `combobox` element controls the Calendar `grid`. |
|  | `aria-activedescendant=.k-calendar-td.k-focus id` | Points to the focused item (date/month/year/hour/minute) in the Calendar Popup or the Time Popup. Should only be present when the Popup is open. |
|  | `readonly=readonly` or `aria-readonly=true` | Attribute is rendered only when the DateTimePicker is readonly. |
|  | `aria-invalid=true` | Attribute is rendered only when the DateTimePicker is in form and announces the valid state of the component. |
|  | `tabindex=0` | The element should be focusable. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | Attribute is rendered only when the DateTimePicker is disabled. |
| `.k-input-button` | `role=button` or `nodeName=button` | The element should either be a `<button>` element or should have `role="button"` assigned. |
|  | `aria-label` | The button needs an accessible name to be assigned to it. |
|  | `tabindex=-1` | Button element should not be focusable. |
| `.k-datetimepicker.k-disabled .k-button` | `disabled` or `aria-disabled` | Attribute is rendered only when the picker is disabled. |

### Calendar Popup


The Calendar in the Popup element of the component should implement the specification for the **Calendar** component.

[Calendar accessibility specification](calendar_aria.md)

### Popup Date/Time View Chooser


The Date/Time view chooser in the Popup element of the component should implement the specification for the **ButtonGroup** component.

[ButtonGroup accessibility specification](buttongroup_aria.md)

### TimePicker Popup


Time Popup implementation should follow the specification for the TimePicker component.

[TimePicker accessibility specification](timepicker_aria.md)

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

