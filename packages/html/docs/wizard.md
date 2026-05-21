# Wizard Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Wizard component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-step-list` | `role=tablist` | Indicates the role of the tablist container element. |
| `.k-step` | `role=none` | The implicit semantics of the li element must be removed. |
| `.k-step-link` | `role=tab` | Specifies the role for the step links. |
| `.k-step-link` | `aria-controls=.k-wizard-step id (when present)` | Refers to the tabpanel element associated with the tab. |
| `.k-step.k-disabled>.k-step-link` | `aria-disabled=true` | A disabled (inactive) tab. |
| `.k-step-current .k-step-link` | `aria-selected=true` | Indicates the tab control is activated. |
| `.k-step-current .k-step-link` | `aria-current=true` | Indicates the current active step. |
| `.k-step-current .k-step-link` | `tabindex=0` | Current step is in the page tab sequence. |
| `.k-step:not(.k-step-current) .k-step-link` | `tabindex=-1` | Non-current steps are removed from tab sequence. |
| `.k-wizard-step` | `role=tabpanel` | Specifies the role of the element. |
| `.k-wizard-step` | `aria-label` | Specifies a label for the panel (e.g., "Step 2 of 4"). |
| `.k-wizard-step` | `tabindex=0` | Keeps the tabpanel in the page tab sequence. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Wizard component:

| Shortcut | Behavior |
| --- | --- |
| `LeftArrow / UpArrow` | Selects previous tab. |
| `RightArrow / DownArrow` | Selects next tab. |
| `Home` | Selects first tab. |
| `End` | Selects last tab. |
| `Tab` | Focuses next element in the page Tab sequence. That could be the currently visible `tabpanel`, an element on it, or an element outside the Wizard. |
| `Shift + Tab` | Focuses previous element in the page Tab sequence. |
