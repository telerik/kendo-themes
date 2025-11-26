## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The FlatColorPicker contains in itself ColorGradient, ColorPalette, a UI to switch between them, Cancel, Apply, and a button to reset its value. All the containing elements must implement their own specification apart from the ColorGradient element where some changes are required.

### FlatColorPicker Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-flatcolorpicker` | `role=textbox` | The focusable wrapper of the component should be considered a `textbox`. That signifies it has a value that could be submitted. |
|  | `aria-label` or `aria-labelledby` | The component needs an accessible name to be assigned to it. Must also include the currently selected value in the component. |
|  | `aria-invalid=true` | Attribute is rendered only when the selected value in the component is not valid against the current validation rules. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-flatcolorpicker.k-disabled` | `aria-disabled=true` | Attribute is rendered only when the ColorPalette is disabled. |

### ColorGradient

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-colorgradient` | `role=none/` | The ColorGradient element must have its role removed. |
|  | `aria-label` | The ColorGradient element must have its "aria-label" attribute removed. |
|  | `tabindex=-1/` | The ColorGradient must be removed from the page tab sequence. |

