# Editor Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Editor component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-editor-content[contenteditable]` | `role` = `textbox` | Specifies the role of the component as text input. |
| `.k-editor-content[contenteditable]` | `aria-label` | The component focusable element needs an accessible name. |
| `.k-editor.k-readonly .k-editor-content[contenteditable="false"]` | `aria-readonly` = `true` | Rendered only when the Editor is readonly. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Editor component:

| Trigger | Behavior |
| --- | --- |
| `Control/Cmd(Mac) + B` | Executes bold command. |
| `Control/Cmd(Mac) + I` | Executes italic command. |
| `Control/Cmd(Mac) + U` | Executes underline command. |
| `Control/Cmd(Mac) + Z` | Executes undo command. |
| `Control/Cmd(Mac) + Y` | Executes redo command. |
| `Shift + Enter` | Adds ` ` to content. |
| `Enter` | Adds `` to content. |
