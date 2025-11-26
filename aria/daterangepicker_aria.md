## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Input elements

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-input-inner` | `role=combobox` | The input element should follow the `combobox` specification. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-required=true` | The attribute is rendered only when the DateRangePicker is in a `form` HTML element and announces the required state of the component. |
|  | `aria-describedby=.k-form-hint id/.k-form-error id` | Points to the hint for the input, or if the input is invalid, to the error message. This attribute should only be present when a hint is set or when the input is invalid. |
|  | `aria-haspopup=grid` | Indicates the component has a Calendar Popup that implements `role="grid"`. |
|  | `aria-expanded=true/false` | Announces whether the Popup is visible or not. |
|  | `aria-controls=.k-calendar-container id` | Points to the popup element. Signifies that the `combobox` element controls the Calendar `grid`. |
| `.k-input-inner.k-focus` | `aria-activedescendant=.k-calendar-td.k-focus id` | Points to the focused item (date/month/year) in the Calendar Popup. Should only be present when the Popup is open. |
|  | `readonly=readonly` or `aria-readonly=true` | Attribute is rendered only when the DateRangePicker is readonly. |
|  | `tabindex=0` | The element should be focusable. |
| `.k-invalid .k-input-inner,.ng-invalid .k-input-inner` | `aria-invalid=true` | Attribute is rendered only when the combobox is in form and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | Attribute is rendered only when the DateRangePicker is disabled. |

### Calendars Popup


The Calendars in the Popup element of the component should implement the specification for the **MultiViewCalendar** component.

[Calendar accessibility specification](calendar_aria.md)

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

