# Scrollview Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Scrollview provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Scrollview is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-scrollview` | `role` = `application` | Specifies the role of the Carousel element. |
| `.k-scrollview` | `aria-roledescription` = `carousel` | Clarifies the role of the Carousel element. |
| `.k-scrollview` | `tabindex` = `0` | Carousel element must be focusable. |
| `.k-scrollview-wrap` | `role` = `list` | Clarifies the scrollview wrap as a list of items (images). |
| `.k-scrollview-wrap>*` | `role` = `listitem` | Specifies the role of each Carousel item. |
| `.k-scrollview-wrap>*` | `aria-roledescription` = `slide` | Clarifies the role of the Carousel item. |
| `.k-scrollview-prev,.k-scrollview-next` | `role` = `button` | Specifies the role of the Previous/Next button. |
| `.k-scrollview-prev,.k-scrollview-next` | `aria-label` | Specifies label for the Previous/Next button. |
| `.k-scrollview-prev,.k-scrollview-next` | `aria-controls` | Points to the id of the items container element. |
| `.k-scrollview>.k-sr-only` | `aria-live` = `polite` | Identifies a hidden element as a live region in the polite state. |

### Testing

The Scrollview has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Scrollview has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA Practices: Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [ARIA Practices: Carousel Example with Buttons](https://www.w3.org/WAI/ARIA/apg/example-index/carousel/carousel-1-prev-next.html)
