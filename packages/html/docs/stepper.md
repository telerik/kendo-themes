# Stepper Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Stepper component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-stepper` | `role=navigation or nodeName=nav` | The landmark role navigation must be assigned to the component. |
| `.k-step.k-disabled>.k-step-link` | `aria-disabled=true` | A disabled (inactive) link. |
| `.k-step-current>.k-step-link` | `aria-current=step` | The currently selected link. |
| `.k-step.k-focus .k-step-link` | `tabindex=0` | Focused step link is in the tab order. |
| `.k-step:not(.k-focus) .k-step-link` | `tabindex=-1` | Non-focused step links are removed from tab order. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Stepper component:

| Shortcut | Behavior |
| --- | --- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Home` | Focuses first link. |
| `End` | Focuses last link. |
| `Space / Enter` | Activates the currently focused link. |
