# Filter Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Filter provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Filter is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-filter-container` | `role` = `tree` | Describes the hierarchical structure of the Filter component. |
| `.k-filter-container` | `aria-label` | Specifies a label for the Filter component. |
| `.k-filter-group-main,.k-filter-item` | `role` = `treeitem` | Each FilterGroup and FilterExpression represent a separate treeitem in the Filter component structure. |
| `.k-filter-lines` | `role` = `group` | Represents a group of items in the Filter component. |
| `.k-toolbar` | `role` = `toolbar` | The role represents a collection of tools. |
| `.k-toolbar` | `aria-label` | Specifies a label for the toolbar. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Filter component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Focuses the previous item (FilterGroup or FilterExpression) in the `tree`. |
| `ArrowDown` | Focuses the next item (FilterGroup or FilterExpression) in the `tree`. |

### Testing

The Filter has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Filter has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for toolbar](https://www.w3.org/TR/wai-aria-1.2/#toolbar)
