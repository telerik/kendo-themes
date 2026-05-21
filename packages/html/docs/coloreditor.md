# Coloreditor Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Coloreditor component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-flatcolorpicker` | `role=textbox` | The focusable wrapper should be considered a textbox with a submittable value. |
| `.k-flatcolorpicker` | `aria-label or aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `.k-flatcolorpicker` | `tabindex=0` | The element must be focusable. |
| `.k-flatcolorpicker.k-disabled` | `aria-disabled=true` | Rendered only when the FlatColorPicker is disabled. |
| `.k-colorgradient` | `role=none` | The inner ColorGradient must have its role removed. |
| `.k-colorgradient` | `tabindex=-1` | The inner ColorGradient must be removed from the page tab sequence. |
