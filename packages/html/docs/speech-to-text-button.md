# SpeechToTextButton Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the SpeechToTextButton component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-button.k-speech-to-text-button` | `role=button or nodeName=button` | If the used element is not <button>, explicitly set its role to button. |
| `.k-button.k-speech-to-text-button` | `aria-pressed` | Announces the toggle behaviour of the button. |
| `.k-button.k-speech-to-text-button` | `aria-label` | Accessible name for the speech-to-text button. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SpeechToTextButton component:

| Shortcut | Behavior |
| --- | --- |
| `Enter or Space` | Triggers a click action on the Button. Toggles the active listening state of the Button. |
