# Coloreditor Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Coloreditor provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Coloreditor is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-flatcolorpicker` | `role` = `textbox` | The focusable wrapper should be considered a textbox with a submittable value. |
| `.k-flatcolorpicker` | `aria-label` / `aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `.k-flatcolorpicker` | `tabindex` = `0` | The element must be focusable. |
| `.k-flatcolorpicker.k-disabled` | `aria-disabled` = `true` | Rendered only when the FlatColorPicker is disabled. |
| `.k-colorgradient` | `role` = `none` | The inner ColorGradient must have its role removed. |
| `.k-colorgradient` | `tabindex` = `-1` | The inner ColorGradient must be removed from the page tab sequence. |

### Testing

The Coloreditor has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Coloreditor has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
