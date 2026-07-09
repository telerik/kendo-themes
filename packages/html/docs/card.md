# Card Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Card provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Card is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### CardList

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="list"` | The card list container announces its list role. |
| `role="listitem"` | Each card in the list has the listitem role. |
| `tabindex="0"` | The card is focusable when navigatable. |
| `aria-describedby=".k-card-title id"` | Associate the card to its title element. |
| `aria-keyshortcuts="Enter"` | Announces the Enter key for navigation inside the card. |

### Testing

The Card has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Card has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
