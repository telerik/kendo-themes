---
title: Time Picker
category: components
slug: time-picker
position: 45
---
# TimePicker Keyboard Support

## Managing Focus

Initial focus is on the selected time.

The time dropdown tab sequence is:  **hours** part, **minutes** part, **seconds** part, **Cancel** button, **Set** button, **Now** button (activated on Enter). The tab key is trapped in the popup.

Enhanced Mouse UX - when mouse is over a timelist - it gets the focus.

## Keyboard Shortcuts

**Actions applied to the DateInput:**

| Shortcut| Behavior |
|---------------------|---------------------|
|`Esc`| Closes the popup|
|`Alt + Down`| Opens the popup|
|`Alt + Up`| Closes the popup|
| `Up` | Increases the value of the date segment that is highlighted. |
| `Down` | Decreases the value of the date segment that is highlighted. |
| `Left` | Moves to previous date segment in the input. |
| `Right` | Moves to next date segment in the input. |
| `Backspace` | Deletes value of the date segment. |

**Actions applied to the popup**

| Shortcut| Behavior |
|---------------------|---------------------|
|`Esc`| Closes the popup|
|`Shift + Tab` or `Left`| Focuses previous carousel.|
|`Tab` or `Right`| Focuses next carousel.|
|`Down`| Selects next in the timepart.|
|`Up`| Selects previous in the timepart.|

## Resources
