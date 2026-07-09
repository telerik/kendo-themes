# Mediaplayer Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Mediaplayer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Mediaplayer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### MediaPlayer

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | Specifies label for the play/pause button. |
| `aria-pressed` | Specifies whether play is active or not. |
| `aria-label` | Specifies label for the mute button. |
| `aria-pressed` | Specifies whether mute is active or not. |
| `aria-label` | Specifies label for the full screen button. |
| `aria-pressed` | Specifies whether full screen is active or not. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Seek forward. |
| `ArrowLeft` | Seek backward. |
| `ArrowUp` | Increase the volume. |
| `ArrowDown` | Decrease the volume. |
| `Control + 1` | Decrease the video quality. |
| `Control + 2` | Increase the video quality. |
| `F` | Open and close the full screen. |
| `M` | Mute and Unmute the sound. |
| `Space` | Play and Pause the video. |
| `Escape` | Close the full screen. |

### Testing

The Mediaplayer has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Mediaplayer has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
