# SmartBox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the SmartBox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-smart-box .k-input-inner` | `role=combobox` | Announces the combobox role for the SmartBox input. |
| `.k-smart-box .k-input-inner` | `aria-label or aria-labelledby` | Provides an accessible label for the SmartBox (e.g., "AI-powered search"). |
| `.k-smart-box .k-input-inner` | `aria-expanded` | Indicates whether the suggestion popup is currently visible. |
| `.k-smart-box .k-input-inner` | `aria-haspopup=listbox` | Indicates that the SmartBox has a popup listbox with suggestions. |
| `.k-smart-box .k-input-inner` | `aria-controls (when present)` | References the ID of the popup listbox element when the popup is open. |
| `.k-smart-box .k-input-inner` | `aria-autocomplete (when present)` | Indicates the autocomplete behavior of the input field. |
| `.k-smart-box .k-input-inner` | `aria-activedescendant (when present)` | When the popup is open and keyboard navigation is active, references the ID of the currently focused list item. |
| `.k-smart-box .k-input-prefix .k-icon` | `aria-hidden=true` | Decorative icons in the prefix area are hidden from screen readers. |
| `.k-smart-box .k-input-suffix .k-button` | `aria-label` | Suffix buttons must have accessible labels describing their function (e.g., "Start voice input", "Send prompt"). |
| `.k-smart-box .k-smart-box-send` | `aria-label` | The send button must be labelled to indicate its current action (e.g., "Send" or "Stop processing"). |
| `.k-smart-box .k-smart-box-send.k-disabled` | `disabled or aria-disabled=true` | Indicates the button is disabled when there is no input or processing is not active. |
| `.k-smart-box .k-smart-box-send.k-processing` | `aria-pressed=true` | Indicates that processing is in progress. The button changes function to stop processing. |
| `[data-suggestions-status]` | `aria-live=polite` | Use a visually hidden live region to announce status changes. |
| `[data-suggestions-status]` | `aria-atomic=true` | Determines whether the entire region is announced on updates. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SmartBox component:

| Shortcut | Behavior |
| --- | --- |
| `Down Arrow` | Opens the suggestion popup if closed, or moves focus to the next suggestion in the list. |
| `Up Arrow` | Opens the suggestion popup if closed, or moves focus to the previous suggestion in the list. |
| `Enter / Return` | Selects the currently highlighted suggestion (if any) and submits the input. |
| `Escape` | Closes the suggestion popup if open, or clears the input field. |
| `Home` | When the popup is open, moves focus to the first suggestion in the list. |
| `End` | When the popup is open, moves focus to the last suggestion in the list. |
| `Alt + Down Arrow` | Opens the suggestion popup (alternative method). |
| `Alt + Up Arrow` | Closes the suggestion popup (alternative method). |
| `Enter / Space` | Triggers a click action on the button (e.g., start voice input, send input, stop processing). |
| `Down Arrow` | Moves focus to the next suggestion in the list. |
| `Up Arrow` | Moves focus to the previous suggestion in the list. |
| `Home` | Moves focus to the first suggestion in the list. |
| `End` | Moves focus to the last suggestion in the list. |
| `Enter` | Selects the focused suggestion and closes the popup. |
| `Escape` | Closes the popup and returns focus to the input field. |
