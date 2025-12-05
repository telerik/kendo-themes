## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### AI Prompt


The AI Prompt component is a composite one and integrates the accessibility of the Toolbar, TextArea, Card, Chip and FloatingActionButton.

### TextArea Component

[TextArea accessibility specification](textarea_aria.md)

### TextArea Adornments

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-textarea-prefix>.k-button` | `role=button` or `nodeName=button` | The buttons must have appropriate role. |
|  | `aria-label` or `title` | The buttons must be properly labelled. |
| `.k-textarea-suffix>.k-button` | `role=button` or `nodeName=button` | The buttons must have appropriate role. |
|  | `aria-label` or `title` | The buttons must be properly labelled. |
| `.k-textarea-suffix>.k-prompt-send.k-disabled` | `aria-disabled=true` | Announces send action as disabled if necessary. |

### Suggestion Component


The Suggestion list implements roving tabindex navigation. Meaning that only one suggestion has tabindex=0. The display of the suggestion list is controlled by the expand button.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-prompt-expander .k-button` | `aria-controls=.k-prompt-expander-content id` | Points to the controlled element based on the given `id`. |
|  | `aria-expanded=true/false` | Indicates the expanded state of the prompt expander content. |
| `.k-prompt-expander .k-suggestion-group` | `role=group` | Indicates that the suggestion container element is a group. |
| `.k-prompt-expander .k-suggestion` | `role=button` | Indicates that the suggestion element is a button. |
|  | `aria-label` or `title` | The suggestion elements must be properly labelled. |
|  | `tabindex=0` | The suggestion element should be focusable. |

### Button Component

[Button accessibility specification](button_aria.md)

### Adaptive Mode


When the AI Prompt component is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

### Toolbar Component

[ToolBar accessibility specification](toolbar_aria.md)

### Card List Container

[CardList accessibility specification](cardlist_aria.md)

### Card Component

[Card accessibility specification](card_aria.md)

### Chip Component

[Chip accessibility specification](chip_aria.md)

### ChipList Component

[ChipList accessibility specification](chiplist_aria.md)

### ContextMenu Component

[ContextMenu accessibility specification](contextmenu_aria.md)

### FloatingActionButton Component

[FloatingActionButton accessibility specification](floatingactionbutton_aria.md)

### SpeechToTextButton Component

[SpeechToTextButton accessibility specification](speechtotextbutton_aria.md)

### More Actions View - PanelBar Component

[PanelBar accessibility specification](panelbar_aria.md)

