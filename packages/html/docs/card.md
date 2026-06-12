# Card Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Card provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Card is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-card-list` | `role` = `list` | The card list container announces its list role. |
| `.k-card-list .k-card` | `role` = `listitem` | Each card in the list has the listitem role. |
| `.k-card-list .k-card` | `tabindex` = `0` | The card is focusable when navigatable. |
| `.k-card-list .k-card` | `aria-describedby` = `.k-card-title id` | Associate the card to its title element. |
| `.k-card-list .k-card` | `aria-keyshortcuts` = `Enter` | Announces the Enter key for navigation inside the card. |

### Testing

The Card has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Card has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
