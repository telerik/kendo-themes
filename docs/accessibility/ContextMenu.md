---
title: Context Menu
category: components
slug: context-menu
position: 11
---
# ContextMenu Keyboard Support

## Managing Focus

When the context menu is opened, the focus will go to the first item of the context menu.
Only one node will have tabindex in the menu.Interaction on a `menuitem` should focus it.

## Keyboard Shortcuts
| Shortcut | Behavior |
|----------|----------|
| `Shift + F10` | Activates the context menu from the context of the current focused element |
| `Esc` | Close the popup of the context menu when the focus is in the main context menu |
| `Enter` | Activates the item and closes the context menu. If the current menu item has a submenu (child items), opens the submenu and places the focus on its first item. |
| `Space` | Same as Enter |
| `Home` | Moves focus to the first item in the current menu or sub-menu. |
| `End` | Moves focus to the last item in the current menu or sub-menu. |
| `Arrow Down` |- When the focus is on a menuitem in a menubar or menu, moves focus to the next item, wrapping from the last to the first only on the root menuitems. <br/> - When the focus is on the last menuitem in the menu performs the following: <br/> 1.Closes the menu. <br/> 2.Focus next root item. <br/> 3.Open the submenu of the menuitem without focus it if it has any.|
| `Arrow Up` | - When the focus is on a menuitem in a menubar or menu, moves focus to the previous item, optionally wrapping from the first to the last. |
| `Arrow Left` | - When focus is on a menuitem in a menubar or in a submenu of an item in a menubar, opens its submenu and places focus on the last item in the submenu <br/> - When focus is in a submenu of an item in a menu, closes the submenu and returns focus to the parent menuitem. |
| `Arrow Right` | - When the focus is on a menuitem in a menubar on a menuitem that has a submenu, opens the submenu and places focus on its first item. <br/> - When the focus is in a menu and on an item that does not have a submenu, doesn't perform anything.|


## Resources

https://www.w3.org/TR/wai-aria-practices/#menu
https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-12
https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html#kbd_label
