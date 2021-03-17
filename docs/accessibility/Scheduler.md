---
title: Scheduler
category: components
slug: scheduler
position: 36
---
# Scheduler Keyboard Support

## Managing Focus

The navigation will be always on, and won't need a `Navigable` parameter like the Grid. Focusing the Component will have the following effect, depending on whether appointments are loaded, or the component is empty:
- empty scheduler - the focus is on the scheduler component itself.
- non-empty - the first appointment is focused.

Roving tab index is used to track the currently focused appointment.

Any navigation or CRUD operation will reset focus to the first appointment, as this is the only consistent way of tracking focus (we can't always return focus on the same appointment for edit for instance, since editing it can move it outside of the current view).

## Keyboard Shortcuts

**Actions applied to the content (empty scheduler):**

| Shortcut | Behavior |
|----------|----------|
| `t`| navigates to today's time period |
|`c` | opens the popup for creation of new appointment |
|`Shift+ Left Arrow` | navigates to the previous time period |
|`Shift+ Right Arrow` | navigates to the next time period |
|`Alt + 1,2,3` | navigates to the view with the respective number |

**Actions applied to the appointments**

All of the content keyboard shortcuts work when focus is on the appointment. In addition to that we also have:

| Shortcut | Behavior |
|----------|----------|
|`Arrow Keys` | move focus through appointments |
|`Enter` | opens the Edit Popup to modify the appointment |
|`Delete/Backspace` | opens the Delete confirmation popup to modify the appointment |

**Actions applied to the Scheduler Popups**

Using the default Window component shortcuts

## Resources
