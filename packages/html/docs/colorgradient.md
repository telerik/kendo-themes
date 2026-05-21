# Colorgradient Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Colorgradient component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-colorgradient` | `role=textbox` | The focusable wrapper should be considered a textbox with a value that could be submitted. |
| `.k-colorgradient` | `aria-label or aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `.k-colorgradient` | `tabindex=0` | The element must be focusable. |
| `.k-colorgradient.k-disabled` | `aria-disabled=true` | Rendered only when the ColorGradient is disabled. |
| `.k-hsv-draghandle` | `role=slider` | The 2D draghandle must have slider role for ARIA-allowed attributes. |
| `.k-hsv-draghandle` | `aria-orientation=undefined` | The implicit orientation for the slider must be removed for the 2D handle. |
| `.k-hsv-draghandle` | `aria-label` | Must provide information about the purpose of the slider and the currently selected color. |
| `.k-hsv-draghandle` | `aria-valuetext` | Must specify the values on both X and Y axis. |
| `.k-hsv-draghandle` | `aria-valuenow` | Required by the slider role. |
| `.k-hsv-draghandle` | `aria-valuemin` | Required by the slider role. |
| `.k-hsv-draghandle` | `aria-valuemax` | Required by the slider role. |
| `.k-numerictextbox>.k-input-inner` | `aria-label` | Must provide the name of the channel (red, green, blue, or alpha). |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Colorgradient component:

| Shortcut | Behavior |
| --- | --- |
| `Enter` | Activates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift + Tab` | Navigates to the previous focusable element on the page. |
| `Esc` | Moves focus back to wrapper element. Deactivates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element in the ColorGradient. If current focus is on the last element, moves focus to the first focusable item in the component. |
| `Shift + Tab` | Navigates to the previous focusable element in the ColorGradient. If current focus is on the first element, moves focus to the last focusable item in the component. |
| `Enter` | For button items, ColorGradient executes the currently focused button action. |
| `Arrow Up` | Moves slider up by large step. |
| `Arrow Down` | Moves slider down by large step. |
| `Arrow Left` | Moves slider left by large step. |
| `Arrow Right` | Moves slider right by large step. |
| `Shift + Arrow Up` | Moves slider up by small step. |
| `Shift + Arrow Down` | Moves slider down by small step. |
| `Shift + Arrow Left` | Moves slider left by small step. |
| `Shift + Arrow Right` | Moves slider right by small step. |
