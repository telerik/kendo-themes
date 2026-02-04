## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-mediaplayer-seekbar span` | `role=slider` | Announces the `slider` role of the seekbar element. |
|  | `aria-label` | Specifies label for the seekbar slider. |
|  | `aria-valuenow` | Specifies the currently selected value in the seekbar slider. |
|  | `aria-valuemin` | Specifies the minimum available value in the seekbar slider. |
|  | `aria-valuemax` | Specifies the maximum available value in the seekbar slider. |
| `.k-play-button` | `aria-selected=true` | Specifies whether the play is selected or not. |
|  | `aria-label` | Specifies label for the play/pause button. |
| `.k-volume-button` | `aria-selected=true` | Specifies whether the mute is selected or not. |
|  | `aria-label` | Specifies label for the mute button. |
| `.k-mediaplayer-volume span` | `role=slider` | Announces the `slider` role of the volume element. |
|  | `aria-label` | Specifies label for the volume slider. |
|  | `aria-valuenow` | Specifies the currently selected value in the volume slider. |
|  | `aria-valuemin` | Specifies the minimum available value in the volume slider. |
|  | `aria-valuemax` | Specifies the maximum available value in the volume slider. |
| `.k-mediaplayer-quality-wrap` | `role=listbox` | The quality element must be exposed as listbox. |
|  | `aria-label` | Specifies label for the quality button. |
| `.k-fullscreen-button` | `aria-selected=true` | Specifies whether the full screen is selected or not. |
|  | `aria-label` | Specifies label for full screen button. |

