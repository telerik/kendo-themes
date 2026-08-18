# AgentResponse Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI AgentResponse provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The AgentResponse is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ChainOfThought

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-chain-of-thought` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | The role is implicit from the native `<button>` element used for the step's head. |
| `aria-expanded="true"|"false"` | Rendered on the head only when the step is expandable, indicating whether its body is currently shown. |
| `aria-label|aria-labelledby` | Required on the head when it has no visible label/secondaryLabel text. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers the focused head, toggling the expanded state when expandable. |
| `Tab` | Moves focus to the next ChainOfThought head; each instance is its own stop in the tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Expand / Collapse | Clicking or activating the head toggles the nested Thought steps open and closed. |
| Completed state | When completed, the label stops shimmering and the icon/label/expand icon dim to a subtle color. |
| Focus feedback | Keyboard focus on the head renders a focus indicator — an inset ring in most themes and an inset outline in Meridian. |

### Reasoning

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-reasoning` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | The role is implicit from the native `<button>` element used for the step's head. |
| `aria-expanded="true"|"false"` | Rendered on the head only when the step is expandable, indicating whether its body is currently shown. |
| `aria-label|aria-labelledby` | Required on the head when it has no visible label/secondaryLabel text. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers the focused head, toggling the expanded state when expandable. |
| `Tab` | Moves focus to the next Reasoning head; each instance is its own stop in the tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Expand / Collapse | Clicking or activating the head toggles the reasoning body open and closed. |
| Completed state | When completed, the label stops shimmering and the icon/label/expand icon dim to a subtle color. |
| Focus feedback | Keyboard focus on the head renders a focus indicator — an inset ring in most themes and an inset outline in Meridian. |

### ToolCall

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-tool-call` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | The role is implicit from the native `<button>` element used for the step's head. |
| `aria-expanded="true"|"false"` | Rendered on the head only when the step is expandable, indicating whether its body is currently shown. |
| `aria-label|aria-labelledby` | Required on the head when it has no visible label/secondaryLabel text. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers the focused head, toggling the expanded state when expandable. |
| `Tab` | Moves focus to the next ToolCall head; each instance is its own stop in the tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Expand / Collapse | Clicking or activating the head toggles the tool call body (parameters, results, approval actions) open and closed. |
| Status | The optional status Badge reflects the call's outcome (e.g. "Completed", "Awaiting Approval", "Error"). |
| Completed state | When completed, the label stops shimmering and the icon/label/expand icon dim to a subtle color. |
| Focus feedback | Keyboard focus on the head renders a focus indicator — an inset ring in most themes and an inset outline in Meridian. |

### Testing

The AgentResponse has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The AgentResponse has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Disclosure (Show/Hide) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [WAI-ARIA Authoring Practices: Disclosure (Show/Hide) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [WAI-ARIA Authoring Practices: Disclosure (Show/Hide) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/agent-response/`](https://github.com/telerik/kendo-themes/tree/develop/tests/agent-response/).
