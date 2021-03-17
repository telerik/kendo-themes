---
title: Menu
category: components
slug: menu
position: 27
---
# Menu Keyboard Support

## Managing Focus

Roving tab index components strategy implemented. Meaning that only one node has tabindex in the menu.
Interaction on a `menuitem` should focus it.

## Keyboard Shortcuts

**Actions applied to the Horizontal Menu:**

| Shortcut | Behavior |
|----------|----------|
| `Enter` | - When the focus is on a menuitem that has a submenu, opens the submenu and places focus on its first item. <br/>	- Otherwise, activates the item and closes the menu. |
| `Space` | - When the focus is on a menuitem that has a submenu, opens the submenu and places focus on its first item. <br/> - Otherwise, activates the item and closes the menu. |
| `Home` | Moves focus to the first item in the `menuitem` in the current menu/submenu. |
| `End` |Moves focus to the last item in the `menuitem` in the current menu/submenu.  |
| `Arrow Down` | - When the focus is on a menuitem in a menubar, opens its submenu and places focus on the first item in the submenu. <br/> - When the focus is in a menu, moves focus to the next item, optionally wrapping from the last to the first. |
| `Arrow Up` | - When the focus is in a menu, moves focus to the previous item, optionally wrapping from the first to the last. <br/> - When the focus is on a menuitem in a menubar, opens its submenu and places focus on the last item in the submenu. |
| `Arrow Left` | - When the focus is in a menubar, moves focus to the previous item, optionally wrapping from the first to the last. <br/> - When the focus is in a submenu of an item in a menu, closes the submenu and returns focus to the parent menuitem. <br/> - When focus is in a submenu of an item in a menubar, performs the following 3 actions: <br/> 1. Closes the submenu. <br/> 2. Moves focus to the previous menuitem in the menubar. <br/> 3. Opens the submenu of that menuitem without moving focus into the submenu.|
| `Arrow Right` | - When the focus is in a menubar, moves focus to the next item, optionally wrapping from the last to the first. <br/> - When the focus is in a menu and on a menuitem that has a submenu, opens the submenu and places focus on its first item. <br/> - When the focus is in a menu and on an item that does not have a submenu, performs the following 3 actions: <br/> 1. Closes the submenu and any parent menus. <br/> 2. Moves focus to the next menuitem in the menubar. <br/> 3. Opens the submenu of that menuitem without moving focus into the submenu <br/> - Note that if the menubar was not present, e.g., the menus were opened from a menubutton, Right Arrow would not do anything when the focus is on an item that does not have a submenu. |

**Actions applied to the Verical Menu:**

| Shortcut | Behavior |
|----------|----------|
| `Enter` | Same as horizontal |
| `Space` | Same as horizontal |
| `Home` | Same as horizontal |
| `End` | Same as horizontal|
| `Arrow Down` |- When the focus is on a menuitem in a menubar or menu, moves focus to the next item, wrapping from the last to the first only on the root menuitems. <br/> - When the focus is on the last menuitem in the menu performs the following: <br/> 1.Closes the menu. <br/> 2.Focus next root item. <br/> 3.Open the submenu of the menuitem without focus it if it has any.|
| `Arrow Up` | - When the focus is on a menuitem in a menubar or menu, moves focus to the previous item, optionally wrapping from the first to the last. |
| `Arrow Left` | - When focus is on a menuitem in a menubar or in a submenu of an item in a menubar, opens its submenu and places focus on the last item in the submenu <br/> - When focus is in a submenu of an item in a menu, closes the submenu and returns focus to the parent menuitem. |
| `Arrow Right` | - When the focus is on a menuitem in a menubar on a menuitem that has a submenu, opens the submenu and places focus on its first item. <br/> - When the focus is in a menu and on an item that does not have a submenu, doesn't perform anything.|


## Resources

https://www.w3.org/TR/wai-aria-practices/#menu
https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-12
https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html#kbd_label
