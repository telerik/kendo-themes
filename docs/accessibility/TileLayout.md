---
title: Tile Layout
category: components
slug: tile-layout
position: 44
---
# TileLayout Keyboard Support

## Managing Focus

The navigation will be enabled by a `Navigable` parameter, like the Grid.
When `Navigable` is true, all tiles will have a tabindex of `0`, and can be accessed through the reglar `Tab` key navigation.

## Keyboard Shortcuts

| Shortcut | Behavior |
|----------|----------|
|`Tab` | Move focus to the next tile. If focus is on the last tile, focus the next focusable element on the page. |
|`Shift + Tab` | Move focus to the previous tile. If focus is on the first tile, focus the previous focusable element before the TileLayout. |
|`Shift + Right` | Reorder with next tile. |
|`Shift + Left` | Reorder with previous tile. |
|`Ctrl + Right` | Increment width with one column. |
|`Ctrl + Left` | Decrement width with one column. |
|`Ctrl + Down` | Increment height with one row. |
|`Ctrl + Up` | Decrement height with one row. |

## Resources
