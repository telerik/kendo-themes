## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Slider Drag Handle

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-draghandle` | `role=slider` | Sets the proper role for Slider. |
|  | `aria-label` or `aria-labelledby` or `title` | The Slider needs an accessible name to be assigned to it. |
|  | `aria-valuetext` | Specifies the text that would be announced based on the currently selected value in the Slider. |
|  | `aria-readonly=true` | Attribute is rendered only when the Slider is readonly. |
|  | `aria-invalid=true` | Attribute is rendered only when the Slider is in form and announces the valid state of the component. |
|  | `tabindex=0` | The element must be focusable. |
| `.k-draghandle:not(.k-hsv-draghandle)` | `aria-valuenow` | Specifies the currently selected value in the Slider. |
|  | `aria-valuemin` | Specifies the minimum available value in the Slider. |
|  | `aria-valuemax` | Specifies the maximum available value in the Slider. |
| `.k-slider-vertical .k-draghandle` | `aria-orientation=vertical` | Present only when slider is vertical. |
| `.k-disabled .k-draghandle` | `aria-disabled=true` | Attribute is rendered only when the Slider is disabled. |

> Note that using an `<a>` element for `role="slider"` is not allowed.

### Slider Buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-slider .k-button-decrease, .k-slider .k-button-increase` | `aria-hidden=true` | Hides the decrease/increase button elements and all their children from assistive technologies. |
|  | `tabindex=-1` | Excludes the decorative decrease/increase buttons from the natural tab order of the page. |

