# Pager Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Pager provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Pager is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Pager

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="application"` | Indicates that the pager has its own keyboard navigation implemented. |
| `aria-roledescription="pager"` | Clarifies the role of the Pager. |
| `aria-keyshortcuts="Enter ArrowRight ArrowLeft"` | Announces the available keyboard shortcuts. |
| `aria-label` | Announces the currently selected page and the number of available pages. |
| `role="button"` | Specifies the role of the navigation element. |
| `aria-disabled="true"` | Present when the navigation button is non-interactive. |
| `title` | Specifies the purpose of each navigation button. |
| `aria-label|title` | Specifies the purpose of each page link, e.g., Page 6. |
| `aria-current="page"` | Present on the currently selected page element. |
| `aria-label|aria-labelledby` | The DropDownList requires a label to specify its purpose. |
| `aria-label` | The input requires a label to specify its purpose. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Home` | Loads the first page of data if the current page is not the first one. |
| `End` | Loads the last page of data if the current page is not the last one. |
| `Enter` | Activates the inner Pager navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift + Tab` | Navigates to the previous focusable element on the page. |
| `ArrowLeft` | Loads the previous page of data, if any. |
| `ArrowRight` | Loads the next page of data, if any. |
| `PageUp` | Loads the previous page of data, if any. |
| `PageDown` | Loads the next page of data, if any. |
| `Escape` | Moves the focus back to the wrapper element. Deactivates the inner Pager navigation. |
| `Tab` | Navigates to the next focusable element in the Pager. If the current focus is on the last element, moves the focus to the first focusable item in the component. |
| `Shift + Tab` | Navigates to the previous focusable element in the Pager. If the current focus is on the first element, moves the focus to the last focusable item in the component. |
| `Enter` | For button items, and Pager input executes the currently focused action (page change). |

### Testing

The Pager has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Pager has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for Navigation](https://www.w3.org/TR/wai-aria-1.2/#navigation)
- [Accessibility Style Guide: Pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
