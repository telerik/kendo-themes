---
title: Customization
description: "Refer to the list of the Kendo UI Theme Utils theme variables available for customization."
slug: variables_kendothemeutils
position: 9
---

# Customization










## Classnames



### `.k-appearance-none`

This is equivalent to `appearance: none;`. Resets any browser specific styling on an element.




### `.k-appearance-auto`

This is equivalent to `appearance: auto;`. The user agent selects the appropriate special styling based on the element. Acts as `none` on elements with no special styling.




### `.k-aspect-ratio-auto`

This is equivalent to `aspect-ratio: auto;`. Replaced elements with an intrinsic aspect ratio use that aspect ratio, otherwise the box has no preferred aspect ratio. Size calculations involving intrinsic aspect ratio always work with the content box dimensions.




### `.k-aspect-ratio-1`

This is equivalent to `aspect-ratio: 1;`. The box's preferred aspect ratio is the specified ratio of 1. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by box-sizing.




### `.k-aspect-ratio-square`

This is equivalent to `aspect-ratio: 1 / 1;`. The box's preferred aspect ratio is the specified ratio of 1. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by box-sizing.




### `.k-aspect-ratio-video`

This is equivalent to `aspect-ratio: 16 / 9;`. The box's preferred aspect ratio is the specified ratio of 16 : 9. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by box-sizing.




### `.k-columns-1`

This is equivalent to `columns: 1;`. Element's content is displayed into 1 column.




### `.k-columns-2`

This is equivalent to `columns: 2;`. Element's content is broken into 2 columns.




### `.k-columns-3`

This is equivalent to `columns: 3;`. Element's content is broken into 3 columns.




### `.k-columns-4`

This is equivalent to `columns: 4;`. Element's content is broken into 4 columns.




### `.k-columns-5`

This is equivalent to `columns: 5;`. Element's content is broken into 5 columns.




### `.k-columns-6`

This is equivalent to `columns: 6;`. Element's content is broken into 6 columns.




### `.k-columns-7`

This is equivalent to `columns: 7;`. Element's content is broken into 7 columns.




### `.k-columns-8`

This is equivalent to `columns: 8;`. Element's content is broken into 8 columns.




### `.k-columns-9`

This is equivalent to `columns: 9;`. Element's content is broken into 9 columns.




### `.k-columns-10`

This is equivalent to `columns: 10;`. Element's content is broken into 10 columns.




### `.k-columns-11`

This is equivalent to `columns: 11;`. Element's content is broken into 11 columns.




### `.k-columns-12`

This is equivalent to `columns: 12;`. Element's content is broken into 12 columns.




### `.k-columns-auto`

This is equivalent to `columns: auto;`.The number of columns is determined by other CSS properties, such as column-width.




### `.k-d-none`

This is equivalent to `display: none;`. Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off.




### `.k-d-block`

This is equivalent to `display: block;`. The element generates a block element box, generating line breaks both before and after the element when in the normal flow.




### `.k-d-inline`

This is equivalent to `display: inline;`. The element generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space.




### `.k-d-inline-block`

This is equivalent to `display: inline-block;`. The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).




### `.k-d-flex`

This is equivalent to `display: flex;`. The element behaves like a block element and lays out its content according to the flexbox model.




### `.k-d-inline-flex`

This is equivalent to `display: inline-flex;`. The element behaves like an inline element and lays out its content according to the flexbox model.




### `.k-d-grid`

This is equivalent to `display: grid`. It defines the element as a grid container and establishes a new grid formatting context for its contents.




### `.k-d-inline-grid`

This is equivalent to `display: inline-grid`. It defines the element as a grid container and establishes a new grid formatting context for its contents.




### `.k-d-table`

This is equivalent to `display: table;`. These elements behave like HTML `<table>` elements. It defines a block-level box.




### `.k-d-inline-table`

This is equivalent to `display: inline-table;`. The inline-table value does not have a direct mapping in HTML. It behaves like an HTML `<table>` element, but as an inline box, rather than a block-level box. Inside the table box is a block-level context.




### `.k-d-list-item`

This is equivalent to `display: list-item;`. These elements behave like HTML `<LI>` elements. It defines a block-level box.




### `.k-flex-1`

This is equivalent to `flex: 1 1 0%`. It sizes the item not based on its `width`/`height` properties, but based on the available space. This is similar to `flex: 1 1 auto` except it is allowed to shrink beyond its initial size.




### `.k-flex-auto`

This is equivalent to `flex: 1 1 auto`. Beware, this is not the default value. It sizes the item based on its `width`/`height` properties, but makes it fully flexible so that they absorb any extra space along the main axis. If all items are either `flex: auto`, `flex: initial`, or `flex: none`, any remaining space after the items have been sized will be distributed evenly to the items with `flex: auto`.




### `.k-flex-initial`

This is the same as `flex: initial;` and the shorthand for the default value: `flex: 0 1 auto`. It sizes the item based on its `width`/`height` properties (or its content if not set). It makes the flex item inflexible when there is some free space left, but allows it to shrink to its minimum when there is not enough space. The alignment abilities or `auto` margins can be used to align flex items along the main axis.




### `.k-flex-none`

This is equivalent to `flex: 0 0 auto`. It sizes the item according to its `width`/`height` properties, but makes it fully inflexible. This is similar to `flex: initial` except it is not allowed to shrink, even in an overflow situation.




### `.k-flex-basis-auto`

This is equivalent to `flex-basis: auto`. It specifies the initial size of the flex item, before any available space is distributed according to the flex factors. It sizes the element according to its size property.




### `.k-flex-basis-0`

This is equivalent to `flex-basis: 0`. It specifies the initial size of the flex item, before any available space is distributed according to the flex factors. It disregards the element' size property.




### `.k-flex-row`

This is equivalent to `flex-direction: row`. This establishes the main-axis to be horizontal, thus defining the direction flex items are placed in the flex container: left to right in `ltr`; right to left in `rtl`.




### `.k-flex-row-reverse`

This is equivalent to `flex-direction: row-reverse`. This establishes the main-axis to be horizontal, thus defining the direction flex items are placed in the flex container: right to left in `ltr`; left to right in `rtl`.




### `.k-flex-col`

This is equivalent to `flex-direction: column`. This establishes the main-axis to be vertical, thus defining the direction flex items are placed in the flex container: top to bottom.




### `.k-flex-col-reverse`

This is equivalent to `flex-direction: column-reverse`. This establishes the main-axis to be vertical, thus defining the direction flex items are placed in the flex container: bottom to top.




### `.k-flex-grow`

This is equivalent to `flex-grow: 1`. It defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.




### `.k-flex-grow-0`

This is equivalent to `flex-grow: 0`. The item will not grow.




### `.k-flex-shrink`

This is equivalent to `flex-shrink: 1`. It determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn't enough space on the row.




### `.k-flex-shrink-0`

This is equivalent to `flex-shrink: 0`. The item will not shrink.




### `.k-flex-wrap`

This is equivalent to `flex-wrap: wrap`. It allows flex items to wrap as needed onto multiple lines, from top to bottom.




### `.k-flex-nowrap`

This is equivalent to `flex-wrap: nowrap`. All flex items will be on one line.




### `.k-flex-wrap-reverse`

This is equivalent to `flex-wrap: wrap-reverse`. It allows flex items to wrap as needed onto multiple lines, from bottom to top.




### `.k-clear-left`

This is equivalent to `clear: left;`. Is a keyword indicating that the element is moved down to clear past left floats.




### `.k-clear-right`

This is equivalent to `clear: right;`. Is a keyword indicating that the element is moved down to clear past right floats.




### `.k-clear-both`

This is equivalent to `clear: both;`. Is a keyword indicating that the element is moved down to clear past both left and right floats.




### `.k-clear-none`

This is equivalent to `clear: none;`. Is a keyword indicating that the element is not moved down to clear past floating elements.




### `.k-float-left`

This is equivalent to `float: left;`. The element must float on the left side of its containing block.




### `.k-float-right`

This is equivalent to `float: right;`. The element must float on the right side of its containing block.




### `.k-float-none`

This is equivalent to `float: none;`. The element must not float.




### `.k-order-first`

This is equivalent to `order: -9999;`.




### `.k-order-last`

This is equivalent to `order: 9999;`.




### `.k-order-none`

This is equivalent to `order: 0;`.




### `.k-overflow-auto`

This is equivalent to `overflow: auto;`. Depends on the user agent. If content fits inside the padding box, it looks the same as visible, but still establishes a new block formatting context. Desktop browsers provide scrollbar if content overflows.




### `.k-overflow-hidden`

This is equivalent to `overflow: hidden;`. Content is clipped if necessary to fit the padding box. No scrollbar is provided, and no support for allowing the user to scroll (such as by dragging or using a scroll wheel) is allowed. The content can be scrolled programmatically (for example, by setting the value of a property such as offsetLeft), so the element is still a scroll container.




### `.k-overflow-visible`

This is equivalent to `overflow: visible;`. Content is not clipped and may be rendered outside the padding box.




### `.k-overflow-scroll`

This is equivalent to `overflow: scroll;`. Content is clipped if necessary to fit the padding box. Browsers always display scrollbar whether or not any content is actually clipped, preventing scrollbar from appearing or disappearing as content changes. Printers may still print overflowing content.




### `.k-overflow-clip`

This is equivalent to `overflow: clip;`. Like for hidden, the content is clipped to the element's padding box. The difference between clip and hidden is that the clip keyword also forbids all scrolling, including programmatic scrolling.




### `.k-overflow-x-auto`

This is equivalent to `overflow-x: auto;`.




### `.k-overflow-x-hidden`

This is equivalent to `overflow-x: hidden;`.




### `.k-overflow-x-visible`

This is equivalent to `overflow-x: visible;`.




### `.k-overflow-x-scroll`

This is equivalent to `overflow-x: scroll;`.




### `.k-overflow-x-clip`

This is equivalent to `overflow-x: clip;`.




### `.k-overflow-y-auto`

This is equivalent to `overflow-y: auto;`.




### `.k-overflow-y-hidden`

This is equivalent to `overflow-y: hidden;`.




### `.k-overflow-y-visible`

This is equivalent to `overflow-y: visible;`.




### `.k-overflow-y-scroll`

This is equivalent to `overflow-y: scroll;`.




### `.k-overflow-y-clip`

This is equivalent to `overflow-y: clip;`.




### `.k-pointer-events-none`

This is equivalent to `pointer-events: none;`. The element is never the target of pointer events; however, pointer events may target its descendant elements if those descendants have pointer-events set to some other value. In these circumstances, pointer events will trigger event listeners on this parent element as appropriate on their way to/from the descendant during the event capture/bubble phases.




### `.k-pointer-events-auto`

This is equivalent to `pointer-events: auto;`. The element behaves as it would if the pointer-events property were not specified. In SVG content, this value and the value visiblePainted have the same effect.




### `.k-pos-top`

This is equivalent to `top: 0;`.




### `.k-pos-right`

This is equivalent to `right: 0;`.




### `.k-pos-bottom`

This is equivalent to `bottom: 0;`.




### `.k-pos-left`

This is equivalent to `left: 0;`.




### `.k-pos-static`

This is equivalent to `position: static;`. The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.




### `.k-pos-relative`

This is equivalent to `position: relative;`. The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.




### `.k-pos-absolute`

This is equivalent to `position: absolute;`. The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.




### `.k-pos-fixed`

This is equivalent to `position: fixed;`. The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none (see the CSS Transforms Spec), in which case that ancestor behaves as the containing block. (Note that there are browser inconsistencies with perspective and filter contributing to containing block formation.) Its final position is determined by the values of top, right, bottom, and left.




### `.k-pos-sticky`

This is equivalent to `position: sticky;`. The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.




### `.k-resize`

This is equivalent to `resize: both;`. The element displays a mechanism for allowing the user to resize it, which may be resized both horizontally and vertically.




### `.k-resize-none`

This is equivalent to `resize: none;`. The element offers no user-controllable method for resizing it.




### `.k-resize-x`

This is equivalent to `resize: horizontal;`. The element displays a mechanism for allowing the user to resize it in the horizontal direction.




### `.k-resize-y`

This is equivalent to `resize: vertical;`. The element displays a mechanism for allowing the user to resize it in the vertical direction.




### `.k-table-layout-auto`

This is equivalent to `table-layout: auto;`. By default, most browsers use an automatic table layout algorithm. The widths of the table and its cells are adjusted to fit the content.




### `.k-table-layout-fixed`

This is equivalent to `table-layout: fixed;`. Table and column widths are set by the widths of table and col elements or by the width of the first row of cells. Cells in subsequent rows do not affect column widths.




### `.k-text-left`

This is equivalent to `text-align: left;`. The inline contents are aligned to the left edge of the line box.




### `.k-text-right`

This is equivalent to `text-align: right;`. The inline contents are aligned to the right edge of the line box.




### `.k-text-center`

This is equivalent to `text-align: center;`. The inline contents are centered within the line box.




### `.k-text-justify`

This is equivalent to `text-align: justify;`. The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.




### `k-text-lowercase`

This is equivalent to `text-transform: lowercase;`. Is a keyword that converts all characters to lowercase.




### `k-text-uppercase`

This is equivalent to `text-transform: uppercase;`. Is a keyword that converts all characters to uppercase.




### `k-text-capitalize`

This is equivalent to `text-transform: capitalize;`. Is a keyword that converts the first letter of each word to uppercase. Other characters remain unchanged (they retain their original case as written in the element's text).




### `.k-touch-action-none`

This is equivalent to `touch-action: none;`. Disable browser handling of all panning and zooming gestures.




### `.k-touch-action-auto`

This is equivalent to `touch-action: auto;`. Enable browser handling of all panning and zooming gestures.




### `.k-flip-h`

This is equivalent to `transform: scaleX( -1 );`. Flips the element horizontally.




### `.k-flip-v`

This is equivalent to `transform: scaleY( -1 );`. Flips the element vertically.




### `.k-rotate-0`

This is equivalent to `transform: rotate( 0 );`. Does not rotate the element.




### `.k-rotate-45`

This is equivalent to `transform: rotate( 45deg );`. Rotates the element by 45 degrees.




### `.k-rotate-90`

This is equivalent to `transform: rotate( 90deg );`. Rotates the element by 90 degrees.




### `.k-rotate-135`

This is equivalent to `transform: rotate( 135deg );`. Rotates the element by 135 degrees.




### `.k-rotate-180`

This is equivalent to `transform: rotate( 180deg );`. Rotates the element by 180 degrees.




### `.k-rotate-225`

This is equivalent to `transform: rotate( 225deg );`. Rotates the element by 225 degrees.




### `.k-rotate-270`

This is equivalent to `transform: rotate( 270deg );`. Rotates the element by 270 degrees.




### `.k-rotate-315`

This is equivalent to `transform: rotate( 315deg );`. Rotates the element by 315 degrees.




### `.k-scale-0`

This is equivalent to `transform: scale( 0, 0 );`. The element is shrunk and no longer visible.




### `.k-scale-1`

This is equivalent to `transform: scale( 1, 1 );`. The element has its default scale.




### `.k-scale-2`

This is equivalent to `transform: scale( 2, 2 );`. The element is scaling two times in both directions.




### `.k-translate-0`

This is equivalent to `transform: translate( 0, 0 );`. The element does not move.




### `.k-translate-0-50`

This is equivalent to `transform: translate( 0, 50% );`. The element moves vertically by 50% of its height.




### `.k-translate-0-100`

This is equivalent to `transform: translate( 0, 100% );`. The element moves vertically by 100% of its height.




### `.k-translate-50-0`

This is equivalent to `transform: translate( 50%, 0 );`. The element moves horizontally by 50% of its width.




### `.k-translate-50-50`

This is equivalent to `transform: translate( 50%, 50% );`. The element moves horizontally by 50% of its width and vertically by 50% of its height.




### `.k-translate-50-100`

This is equivalent to `transform: translate( 50%, 100% );`. The element moves horizontally by 50% of its width and vertically by 100% of its height.




### `.k-translate-100-0`

This is equivalent to `transform: translate( 100%, 0 );`. The element moves horizontally by 100% of its width.




### `.k-translate-100-50`

This is equivalent to `transform: translate( 100%, 50% );`. The element moves horizontally by 100% of its width and vertically by 50% of its height.




### `.k-translate-100-100`

This is equivalent to `transform: translate( 100%, 100% );`. The element moves horizontally by 100% of its width and vertically by 100% of its height.




### `.#{$kendo-prefix}sr-only`

This class could be assigned to elements which should be visually hidden, but remain accessible for screen readers.
        @name .k-sr-only
        @group accessibility




### `.k-user-select-none`

This is equivalent to `user-select: none;`. The text of the element and its sub-elements is not selectable. Note that the Selection object can contain these elements.




### `.k-user-select-auto`

This is equivalent to `user-select: auto;`. This is the default value of the `user-select` property.




### `.k-user-select-text`

This is equivalent to `user-select: text;`. The text can be selected by the user.




### `.k-user-select-all`

This is equivalent to `user-select: all;`. The content of the element shall be selected atomically: If a selection would contain part of the element, then the selection must contain the entire element including all its descendants.  If a double-click or context-click occurred in sub-elements, the highest ancestor with this value will be selected.




### `.k-user-select-contain`

This is equivalent to `user-select: contain;`. Enables selection to start within the element; however, the selection will be contained by the bounds of that element.




### `.k-white-space-normal`

This is equivalent to `white-space: normal;`. Sequences of white space are collapsed. Newline characters in the source are handled the same as other white space. Lines are broken as necessary to fill line boxes.




### `.k-white-space-nowrap`

This is equivalent to `white-space: nowrap;`. Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.




### `.k-white-space-pre`

This is equivalent to `white-space: pre;`. Sequences of white space are preserved. Lines are only broken at newline characters in the source and at <br> elements.




### `.k-white-space-pre-wrap`

This is equivalent to `white-space: pre-wrap;`. Sequences of white space are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.




### `.k-white-space-pre-line`

This is equivalent to `white-space: pre-line;`. Sequences of white space are collapsed. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.




### `.k-white-space-break-spaces`

This is equivalent to `white-space: break-spaces;`. Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
