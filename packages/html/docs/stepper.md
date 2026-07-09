# Stepper Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Stepper provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Stepper is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Stepper

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="navigation"` | The landmark role navigation must be assigned to the component. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Home` | Focuses first link. |
| `End` | Focuses last link. |
| `Space or Enter` | Activates the currently focused link. |

### Step

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"|"tab"` | When true, renders with wizard tab pattern: role=none on li, role=tab on link. |
| `aria-controls` | for the step link, pointing to the associated tabpanel id |

### Testing

The Stepper has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Stepper has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for navigation](https://www.w3.org/TR/wai-aria-1.2/#navigation)
