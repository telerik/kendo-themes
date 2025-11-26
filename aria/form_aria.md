## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Form Component


The Form component provides a structured way to collect user inputs. It is designed to ensure accessibility and usability for all users, including those with disabilities.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-form` | `role=form` or `nodeName=form` | Omitted if the `<form>` DOM element is used. |

### Input elements


The Form field input element of the component should indicate if it is required and announce any hints or error messages.

