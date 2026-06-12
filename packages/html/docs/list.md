# List Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI List provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The List is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-list-item` | `role` = `option` | Each list item is an option in the listbox. |
| `.k-list-item` | `id` | ID for aria-activedescendant reference. |
| `.k-list-item` | `aria-selected` | Indicates the selected state of the option. |
| `.k-list-group-item` | `role` = `presentation` | Group headers are presentational, not selectable options. |
| `.k-list-item-icon` | `aria-hidden` = `true` | Decorative icons are hidden from assistive technology. |

### Testing

The List has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The List has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
