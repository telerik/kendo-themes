# Wizard Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Wizard provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Wizard is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Wizard

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-wizard` element.

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowLeft or ArrowUp` | Selects previous tab. |
| `ArrowRight or ArrowDown` | Selects next tab. |
| `Home` | Selects first tab. |
| `End` | Selects last tab. |
| `Tab` | Focuses next element in the page Tab sequence. That could be the currently visible `tabpanel`, an element on it, or an element outside the Wizard. |
| `Shift + Tab` | Focuses previous element in the page Tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Multi-step | Guides the user through a complex task split into discrete steps. |
| Progress indicator | A stepper at the top shows completed, current, and upcoming steps. |
| Navigation buttons | Back and Next buttons move between steps. |
| Per-step validation | Each step can validate its inputs before the Next button is enabled. |
| Step click | Previously completed steps can be revisited by clicking the step indicator. |

### WizardStep

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | for the tabpanel, e.g. "Step 2 of 3" |

### Testing

The Wizard has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Wizard has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tablist](https://www.w3.org/TR/wai-aria-1.2/#tablist)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/wizard/`](https://github.com/telerik/kendo-themes/tree/develop/tests/wizard/).
