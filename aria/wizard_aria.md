## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Wizard component represents a [`tablist`](https://www.w3.org/TR/wai-aria-1.2/#tablist) containing [`tabs`](https://www.w3.org/TR/wai-aria-1.2/#tab) with related [`tabpanels`](https://www.w3.org/TR/wai-aria-1.2/#tabpanel).

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-step-list` | `role=tablist` | Indicates the role of the tablist container element. |
| `.k-step` | `role=none` | The implicit semantics of the `li` element must be removed. |
| `.k-step-link` | `role=tab` | Specifies the role for the step links. |
|  | `aria-controls=.k-wizard-step id` | Refers to the tabpanel element associated with the tab. |
| `.k-step-disabled>.k-step-link` | `aria-disabled=true` | A disabled (inactive) tab. |
| `.k-step-current .k-step-link` | `aria-selected` | Indicates whether the tab control is activated and its associated panel is displayed, or not. |
|  | `aria-current=true` | Indicates whether the tab control is activated and its associated panel is displayed, or not. |
|  | `tabindex=0` | Removes the element from the page Tab sequence. Set when a tab is not selected so that only the selected tab is in the page Tab sequence. |
| `.k-step:not(.k-step-current) .k-step-link` | `tabindex=-1` | Removes the element from the page Tab sequence. Set when a tab is not selected so that only the selected tab is in the page Tab sequence. |
| `.k-wizard-step` | `role=tabpanel` | Specifies the role of the element. |
|  | `aria-label` | Specifies a label tor the panel. As the Wizard represents a step-by-step process, that is usually the pager text (e.g. "Step 2 of 4") |
|  | `tabindex=0` | Keeps the tabpanel in the page tab sequence. |


No aria attributes should be applied to the ProgressBar element as it serves a purely aesthetic purpose.

