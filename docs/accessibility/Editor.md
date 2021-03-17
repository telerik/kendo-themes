---
title: Editor
category: components
slug: editor
position: 18
---
# Editor Keyboard Support

## Managing focus

The editor integrates the toolbar and inherits all shortcuts from it. So, the component has two tab stops - one the toolbar and one the content area.

**Actions applied to the toolbar:**

| Key         | Behavior                                                    |
|-------------|-------------------------------------------------------------|
| `Right Arrow`  | Move focus to the next focusable element in the toolbar. Focuses first element if the end of the toolbar is reached. |
| `Left Arrow`  | Move focus to the previous focusable element in the toolbar. Focuses last element if the begining of the toolbar is reached. |
| `Home`  | Move focus to the first focusable element. |
| `End`  | Move focus to the last focusable element. |

**Actions applied to the content:**


| Key         | Behavior                                                    |
|-------------|-------------------------------------------------------------|
| `Ctrl+B`  | Executes bold command. |
| `Ctrl+I`  | Executes italic command. |
| `Ctrl+U`  | Executes underline command. |
| `Ctrl+Z`  | Executes undo command. |
| `Ctrl+Y`  | Executes redo command. |
| `Shift+Enter`  | Adds `<br/>` to content. |
| `Enter`  | Adds `<p>` to content. |

## Resources

https://www.w3.org/TR/wai-aria-practices-1.1/examples/toolbar/toolbar.html

