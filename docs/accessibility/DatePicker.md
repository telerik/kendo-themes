---
title: Date Picker
category: components
slug: date-picker
position: 13
---
# DatePicker Keyboard Support

## Managing Focus

Initial focus is on the selected date.

Focus is trapped in the picker's popup. Meaning that once the popup is opened, Tab key will go only through its content.

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

**Actions applied to the Calendar:**
Ones the popup is open, navigation is handled through the calendar

## Resources

https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html
