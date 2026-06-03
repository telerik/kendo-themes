# Slider Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Slider component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `role` = `slider` | Sets the proper role for Slider. |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `aria-label` / `aria-labelledby` / `title` | The Slider needs an accessible name to be assigned to it. |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `aria-invalid` = `true` | Rendered only when the Slider is in a form and announces the invalid state. |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `aria-valuenow` | Specifies the currently selected value in the Slider. |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `aria-valuemin` | Specifies the minimum available value in the Slider. |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `aria-valuemax` | Specifies the maximum available value in the Slider. |
| `.k-slider .k-draghandle:not(.k-hsv-draghandle)` | `aria-valuetext` | Specifies a human-readable text alternative to the numeric value. Provided by consuming applications. |
| `.k-slider:not(.k-disabled) .k-draghandle:not(.k-hsv-draghandle)` | `tabindex` = `0` | The element must be focusable. Disabled sliders are removed from tab order. |
| `.k-slider-vertical .k-draghandle` | `aria-orientation` = `vertical` | Present only when slider is vertical. |
| `.k-slider.k-disabled .k-draghandle:not(.k-hsv-draghandle)` | `aria-disabled` = `true` | Rendered only when the Slider is disabled. |
| `.k-slider.k-readonly .k-draghandle` | `aria-readonly` = `true` | Rendered only when the Slider is readonly. Readonly sliders remain focusable but their value cannot be changed. |
| `.k-slider .k-button` | `tabindex` = `-1` | Excludes the buttons from the natural tab order. Keyboard users use arrow keys on the drag handle. |
| `.k-slider .k-button` | `title` | Provides a tooltip describing the button action (e.g., "Decrease" or "Increase"). |
| `.k-slider .k-slider-items` | `aria-hidden` = `true` | Hides the tick list from assistive technologies. Tick values are redundant with the drag handle value attributes. |
| `.k-slider .k-tick` | `role` = `presentation` | Removes semantic meaning from individual tick elements. Ticks are visual-only markers. |
| `.k-slider .k-tick` | `title` | Represents the value associated with the respective tick. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Slider component:

| Trigger | Behavior |
| --- | --- |
| `ArrowDown or ArrowLeft` | Decreases value by small step. |
| `ArrowUp or ArrowRight` | Increases value by small step. |
| `Home` | Sets value to the Min value. |
| `End` | Sets value to the Max value. |
| `PageUp` | Increases value by large step. |
| `PageDown` | Decreases value by large step. |
