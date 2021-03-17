---
title: Calendar
category: components
slug: calendar
position: 5
---
# Calendar Keyboard Support

## Managing Focus

- Tab Sequence follows the dom elements order.
- Header Button that navigates to a view => focuses the table, so that the user can proceed with the navigation
- Today Button that navigates to current date => focuses the table

## Keyboard Shortcuts

| Shortcut | Behavior |
|----------|----------|
| `Down Arrow`| Moves focus to down cell, or navigates the view if currently focused date is in the last row of the current view period. |
| `Up Arrow`| Moves focus to upper cell, or navigates the view if currently focused date is at the top row of the current view period. |
| `Left Arrow`| Moves focus to previous cell |
| `Right Arrow`| Moves focus to next cell |
| `Enter` | Selects single date, range of dates (`Shift` pressed), or toggle selection (`Ctrl` pressed), respecting the selection mode. |
| `Ctrl + Up Arrow` | Navigates to the upper view (e.g., from current month days, to the year). |
| `Ctrl + Down Arrow` | Navigates to the lower view (e.g., from the months in the year to the days of the month). |
| `Ctrl + Right Arrow` | Navigates to the next period. |
| `Ctrl + Left Arrow` | Navigates to the previous period. |
| `Tab` | Moves focus between the different navigation elements - view selection, previous/next buttons, today button, and the grid with dates/months/years. |
| `Shift + Tab` | Moves backwards through these focusable elements. |

## Resources
https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html#kbd_label_5
