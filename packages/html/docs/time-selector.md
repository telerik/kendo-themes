# TimeSelector Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI TimeSelector provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The TimeSelector is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timeselector` | `role` = `group` | Groups the time selection columns. |
| `.k-timeselector` | `aria-label` | Describes the time selector purpose. |
| `.k-time-list` | `role` = `listbox` | Each time column list acts as a listbox. |
| `.k-time-list` | `aria-label` | Describes which time unit the column selects. |
| `.k-time-list-wrapper .k-reset` | `role` = `none` | Removes semantic meaning from the ul element. |
| `.k-time-list-wrapper .k-item` | `role` = `option` | Each item in the time list is an option. |

### Testing

The TimeSelector has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The TimeSelector has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
