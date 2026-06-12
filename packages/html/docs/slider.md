# Slider Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Slider provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Slider is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

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

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Slider component:

| Trigger | Behavior |
| --- | --- |
| `ArrowDown or ArrowLeft` | Decreases value by small step. |
| `ArrowUp or ArrowRight` | Increases value by small step. |
| `Home` | Sets value to the Min value. |
| `End` | Sets value to the Max value. |
| `PageUp` | Increases value by large step. |
| `PageDown` | Decreases value by large step. |

### Testing

The Slider has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Slider has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for slider](https://www.w3.org/TR/wai-aria-1.2/#slider)
