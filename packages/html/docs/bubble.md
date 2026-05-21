# Bubble Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Bubble component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-bubble` | `tabindex=0` | The Chat bubble must be focusable. |
| `.k-bubble-expandable-indicator` | `role=button` | The expandable indicator must have an appropriate role. |
| `.k-bubble-expandable-indicator` | `aria-label or title` | The expandable indicator must be properly labelled. |
| `.k-bubble-expandable-indicator` | `tabindex=0` | The expandable indicator must be part of the page tabsequence. |
