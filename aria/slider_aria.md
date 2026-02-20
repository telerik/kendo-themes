## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Slider Drag Handle

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-draghandle` | `role=slider` | Sets the proper role for Slider. |
|  | `aria-label` or `aria-labelledby` or `title` | The Slider needs an accessible name to be assigned to it. |
|  | `aria-invalid=true` | Attribute is rendered only when the Slider is in form and announces the valid state of the component. |
| `.k-draghandle:not(.k-hsv-draghandle)` | `aria-valuenow` | Specifies the currently selected value in the Slider. |
|  | `aria-valuemin` | Specifies the minimum available value in the Slider. |
|  | `aria-valuemax` | Specifies the maximum available value in the Slider. |
|  | `aria-valuetext` | Optional. Specifies a human-readable text alternative to the numeric value. Provided by consuming applications based on context. |
| `.k-slider:not(.k-disabled) .k-draghandle` | `tabindex=0` | The element must be focusable. Disabled sliders are removed from tab order. |
| `.k-slider-vertical .k-draghandle` | `aria-orientation=vertical` | Present only when slider is vertical. |
| `.k-disabled .k-draghandle` | `aria-disabled=true` | Attribute is rendered only when the Slider is disabled. |
| `.k-readonly .k-draghandle` | `aria-readonly=true` | Attribute is rendered only when the Slider is readonly. Readonly sliders remain focusable but their value cannot be changed. |

> Note that using an `<a>` element for `role="slider"` is not allowed.

### Slider Buttons

The increase/decrease buttons are auxiliary controls that duplicate keyboard functionality available on the drag handle itself (arrow keys). They are excluded from the tab sequence but remain clickable.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-slider .k-button-decrease, .k-slider .k-button-increase` | `tabindex=-1` | Excludes the buttons from the natural tab order. Keyboard users navigate to the drag handle and use arrow keys. |
|  | `title` | Provides a tooltip describing the button action (e.g., "Decrease" or "Increase"). Required for mouse/touch user discoverability. |

> **Note:** These buttons remain semantic `<button>` elements with their implicit role. They are interactive (clickable) but not in the keyboard navigation sequence. Do NOT use `aria-hidden="true"` on these buttons - they are programmatically focusable via `tabindex="-1"`.
