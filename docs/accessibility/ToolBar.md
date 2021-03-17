---
title: Tool Bar
category: components
slug: tool-bar
position: 47
---
# ToolBar Keyboard Support

## Managing focus

Single tab stop in the toolbar component, and implemented roving tabindex mechanism for the inner components.

## Keyboard Shortcuts

| Key         | Behavior                                                    |
|-------------|-------------------------------------------------------------|
| `Right Arrow`  | Move focus to the next focusable element in the toolbar. Focuses first element if the end of the toolbar is reached. |
| `Left Arrow`  | Move focus to the previous focusable element in the toolbar. Focuses last element if the begining of the toolbar is reached. |
| `Home`  | Move focus to the first focusable element. |
| `End`  | Move focus to the last focusable element. |

## Resources

https://www.w3.org/TR/wai-aria-practices-1.1/examples/toolbar/toolbar.html

