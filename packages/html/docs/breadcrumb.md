# Breadcrumb Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Breadcrumb provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Breadcrumb is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Breadcrumb

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label="Breadcrumb"` | Indicates the type of navigation provided by the nav element. |
| `role="link"` | The breadcrumb item should render an `<a>` element or have role="link". |
| `aria-current="page"` | The last breadcrumb item points to the active page. |
| `aria-disabled="true"` | The last breadcrumb item is disabled. |
| `aria-hidden="true"` | Delimiter icon should not be accessed through assistive technology. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab or Shift + Tab` | Focuses next and previous breadcrumb items. The focusable element is the element with either `a` tag, or `role=\"link\"` |
| `Enter` | Selects the Bredcrumb item, and navigates to it (if navigatable). |

### Testing

The Breadcrumb has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Breadcrumb has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices: BreadCrumb Example](https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html)
