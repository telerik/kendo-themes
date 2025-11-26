## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


No role attribute is implemented as the  `html input type="text"` element is sufficient for definining purpose of the component.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-captcha-image>img` | `alt` | The Captcha image must have an `alt` tag, so that the. |
| `.k-captcha-image-controls>.k-button` | `role=button` or `nodeName=button` | The image control buttons must have an appropriate role. |
|  | `aria-label` or `title` | Each button must have an accessible name as they are all represented by icons and no text is available in their contents. |
| `.k-captcha-input .k-input-inner` | `role=textbox` or `nodeName=input` | Describes the role of the component. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-invalid=true` | Attribute is rendered only when the captcha is in form and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | Attribute is rendered only when the textbox is disabled. |
| `.k-captcha-input>input` | `type=hidden` | The hidden input holding the Captcha ID value so that the remote could validate the user input. |

