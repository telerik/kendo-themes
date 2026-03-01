## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Smart Box Component

The Smart Box is an AI-enhanced input component that provides intelligent suggestions and autocomplete functionality. It extends the standard input component with a popup suggestion list and optional prefix/suffix elements.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-smart-box .k-input-inner` | `role=combobox` | Announces the combobox role for the smart box input. |
|  | `aria-label or aria-labelledby` | Provides an accessible label for the smart box (e.g. "AI-powered search"). |
|  | `aria-expanded` | Indicates whether the suggestion popup is currently visible. |
|  | `aria-haspopup=listbox` | Indicates that the smart box has a popup listbox with suggestions. |
|  | `aria-controls` | References the ID of the popup listbox element when the popup is open. |
|  | `aria-autocomplete` | Indicates the autocomplete behavior of the input field. |
|  | `aria-activedescendant` | When the popup is open and keyboard navigation is active, references the ID of the currently focused list item. |

### Prefix and Suffix Elements

The Smart Box supports prefix and suffix areas for icons and buttons (e.g., AI sparkles icon, microphone button, send button).

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-smart-box .k-input-prefix .k-icon` | `aria-hidden=true` | Decorative icons in the prefix area are hidden from screen readers. |
| `.k-smart-box .k-input-suffix .k-button` | `aria-label` | Suffix buttons must have accessible labels describing their function (e.g. "Start voice input", "Send prompt"). |

### Send Button

The primary action button for submitting the input or stopping processing.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-smart-box-send` | `aria-label` | The send button must be labelled to indicate its current action (e.g. "Send" or "Stop processing"). |
| `.k-smart-box-send.k-disabled` | `disabled or aria-disabled=true` | Indicates the button is disabled when there is no input or processing is not active. |
| `.k-smart-box-send.k-processing` | `aria-pressed=true` | Indicates that processing is in progress. The button changes function to stop processing. |

### Popup List

The suggestion popup follows the [List accessibility specification](list_aria.md). When open, the popup renders a listbox with option items.

### Segmented Control

When present in the popup, the segmented control follows the [Segmented Control accessibility specification](segmented-control_aria.md).

### Speech-to-Text Button

When present, the speech-to-text button follows the [Speech-to-Text Button accessibility specification](speech-to-text-button_aria.md).

### References

- [WAI-ARIA Authoring Practices: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Button accessibility specification](button_aria.md)
- [List accessibility specification](list_aria.md)
- [Popup accessibility specification](popup_aria.md)
