## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

[Slider accessibility specification](slider_aria.md)


The two focusable elements of the RangeSlider must implement the specification for the **Slider** component. Here is just one clarification for the use of `aria-valuetext` attribute:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-draghandle` | `aria-valuetext` | Specifies the text that would be announced based on the currently selected values in both handle elements (e.g. `aria-valuetext="10 - 50"`). |

