---
title: Date Time Picker
category: components
slug: date-time-picker
position: 15
---
# DateTimePicker Keyboard Support

## Managing Focus

The initial focus is on the selected date.

Focus is trapped in the picker's popup. Meaning that once the popup is opened, Tab key will go only through its content.

## Keyboard Shortcuts

**Actions applied to the DateInput:**

| Shortcut| Behavior |
|---------------------|---------------------|
|`Esc`| Discards the selection and closes the popup. |
|`Enter`| Enters in time edit if calendar is the target. Otherwise, accepts the selected time and closes the popup. |
|`Alt + Down`| Opens the dropdown and moves the focus to the displayed calendar.|
|`Alt + Up`| Closes the dropdown and moves the focus to the input element.|
|`Left`| Executes Calendar Navigation or focuses previous carousel in time view.|
|`Right`| Executes Calendar Navigation or focuses next carousel in time view.|

**Actions applied to the calendar part:**

Ones the popup is open, navigation is handled through the calendar


**Actions applied to the time part:**
| Shortcut| Behavior |
|---------------------|---------------------|
|`Esc`| Closes the popup|
|`Shift + Tab` or `Left`| Focuses previous carousel.|
|`Tab` or `Right`| Focuses next carousel.|
|`Down`| Selects next in the timepart.|
|`Up`| Selects previous in the timepart.|

## Resources

https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html
