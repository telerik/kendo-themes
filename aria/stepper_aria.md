## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Stepper component is a landmark `<nav>` element or an element with `role="navigation"`(https://www.w3.org/TR/wai-aria-1.2/#navigation). It contains an ordered list of navigation items. Each navigation item contains a link.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-stepper` | `role=navigation` or `nodeName=nav` | The landmark role `navigation` must be assigned to the component. |
| `.k-step-disabled>.k-step-link` | `aria-disabled=true` | A disabled (inactive) link. |
| `.k-step-current>.k-step-link` | `aria-current=step` | The currently selected link. |
| `.k-step.k-focus .k-step-link` | `tabindex=0` | Adds an element to the page's tab order. Set based on the roving tabindex navigation when the tab is focused. |
| `.k-step:not(.k-focus) .k-step-link` | `tabindex=-1` | Removes the element from the page's tab order. Set based on the roving tabindex navigation when a tab is not focused. |


No aria attributes should be applied to the Stepper as the ProgressBar serves a purely aesthetic purpose.

