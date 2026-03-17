## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


### Segmented Control Component

The Segmented Control is a selection component that allows users to choose between mutually exclusive options. It functions as a group of toggle buttons, with a visual indicator (thumb) that slides to highlight the selected option.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-segmented-control` | `role=group` | Sets the proper role for the group of buttons. |

### Segmented Control Buttons

Each button within the segmented control represents a selectable option.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-segmented-control-button` | `role=button` or `nodeName=button` | Each button must have the appropriate button role. |
|  | `aria-label` | Each button should be properly labelled. Use `aria-label` if the button contains only an icon without text. |
| `.k-segmented-control-button.k-selected` | `aria-pressed` | Specifies the current state of the button. Only the selected button within the group will have this attribute set to `true`. |
| `.k-segmented-control-button.k-disabled` | `aria-disabled=true` | Indicates that the button is disabled and cannot be interacted with. |

### Visual Selection Indicator (Thumb)

The thumb is a visual element that slides to indicate the selected button. It should be hidden from assistive technologies.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-segmented-control-thumb` | `aria-hidden=true` | The thumb is purely decorative and should be hidden from screen readers. |

### Button Component

[Button accessibility specification](button_aria.md)
