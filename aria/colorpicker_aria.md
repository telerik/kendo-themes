## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The ColorPicker popup contains in itself ColorGradient, ColorPalette, a UI to switch between them, and a button to reset its value. All the containing elements must implement their own specification apart from the ColorGradient element where some changes are required.

### ColorPicker Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-colorpicker` | `role=combobox` | The focusable element of the component should have role `combobox` (an input with popup). |
|  | `aria-label` or `aria-labelledby` | The component needs an accessible name to be assigned to it. Must also include the currently selected value in the component. |
|  | `aria-haspopup=dialog` | Indicates the component has a Dialog Popup. |
|  | `aria-expanded` | Announces the state of the visibility of the popup. |
|  | `aria-controls=.k-colorpicker-popup id` | Points to the popup element. Signifies that the `combobox` element controls the `dialog`. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-invalid,.ng-invalid` | `aria-invalid=true` | Attribute is rendered only when the picker is in form and announces the valid state of the component. |
| `.k-colorpicker.k-disabled` | `aria-disabled=true` | Attribute is rendered only when the picker is disabled. |
| `.k-colorpicker.k-disabled .k-button` | `disabled` or `aria-disabled=true` | Attribute is rendered only when the picker is disabled. |

### ColorGradient in the Popup

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-colorgradient` | `role=none/undefined` | The ColorGradient element must have its role removed. |
|  | `aria-label=undefined` | The ColorGradient element must have its `aria-label` attribute removed. |
|  | `tabindex=-1/undefined` | The ColorGradient must be removed from the page tab sequence. |

### Adaptive Mode


When the component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-colorgradient` | `role=none/undefined` | The ColorGradient element must have its role removed. |
|  | `aria-label=undefined` | The ColorGradient element must have its "aria-label" attribute removed. |

