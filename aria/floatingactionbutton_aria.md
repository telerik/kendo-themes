## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The FloatingActionButton features two distinct modes of operation: button-only and button-with-menu.

### Button-Only Mode

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-fab` | `role=button` or `nodeName=button` | Omitted if the `<button>` DOM element is used. |
|  | `aria-label` or `title` | The attribute must be present when no text is initially visible in the button. |
| `.k-fab.k-disabled` | `aria-disabled=true` | Rendered only when the button is disabled and the `disabled` attribute cannot be used. Applicable for the `<button>` or `<input type="button">` elements. |

### Button-with-Menu Mode


In the button-with-menu mode, the FloatingActionButton must implement the specification for the DropDownButton component.

[DropDownButton accessibility specification](dropdownbutton_aria.md)

