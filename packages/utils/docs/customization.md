---
title: Customization
description: "Refer to the list of the Kendo UI Theme Utils theme variables available for customization."
slug: variables_kendothemeutils
position: 9
---

# Customization










## Classnames



### `.k-align-content-normal`

This is equivalent to `align-content: normal;`. The items are packed in their default position as if no align-content value was set.




### `.k-align-content-stretch`

This is equivalent to `align-content: stretch;`. If the combined size of the items along the cross axis is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container along the cross axis.




### `.k-align-content-center`

This is equivalent to `align-content: center;`. The items are packed flush to each other in the center of the alignment container along the cross axis.




### `.k-align-content-start`

This is equivalent to `align-content: start;`. The items are packed flush to each other against the start edge of the alignment container in the cross axis.




### `.k-align-content-end`

This is equivalent to `align-content: end;`. The items are packed flush to each other against the end edge of the alignment container in the cross axis.




### `.k-align-content-flex-start`

This is equivalent to `align-content: flex-start;`. The items are packed flush to each other against the edge of the alignment container depending on the flex container's cross-start side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like start.




### `.k-align-content-flex-end`

This is equivalent to `align-content: flex-end;`. The items are packed flush to each other against the edge of the alignment container depending on the flex container's cross-end side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like end.




### `.k-align-content-baseline`

This is equivalent to `align-content: baseline;`. Aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-align-content-first-baseline`

This is equivalent to `align-content: first baseline;`. Aligns the alignment baseline of the box's first baseline.




### `.k-align-content-last-baseline`

This is equivalent to `align-content: last baseline;`. Aligns the alignment baseline of the box's last baseline.




### `.k-align-content-between`

This is equivalent to `align-content: space-between;`. The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The first item is flush with the start edge of the alignment container in the cross axis, and the last item is flush with the end edge of the alignment container in the cross axis.




### `.k-align-content-around`

This is equivalent to `align-content: space-around;`. The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.




### `.k-align-content-evenly`

This is equivalent to `align-content: space-evenly;`. The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items, the start edge and the first item, and the end edge and the last item, are all exactly the same.




### `.k-align-items-normal`

This is equivalent to `align-items: normal;`. The effect of this keyword is dependent of the layout mode we are in: 1) In absolutely-positioned layouts, the keyword behaves like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes. 2) In static position of absolutely-positioned layouts, the keyword behaves as stretch. 3) For flex items, the keyword behaves as stretch. 4) For grid items, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start. 5) The property doesn't apply to block-level boxes, and to table cells.




### `.k-align-items-stretch`

This is equivalent to `align-items: stretch;`. Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.




### `.k-align-items-stretch`

This is equivalent to `align-items: center;`. The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.




### `.k-align-items-start`

This is equivalent to `align-items: start;`. The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis..




### `.k-align-items-end`

This is equivalent to `align-items: end;`. The items are packed flush to each other toward the end edge of the alignment container in the appropriate axis.




### `.k-align-items-flex-start`

This is equivalent to `align-items: flex-start;`. The items are packed flush to the edge of the alignment container's start side of the item, in the appropriate axis.




### `.k-align-items-flex-end`

This is equivalent to `align-items: flex-end;`. The items are packed flush to the edge of the alignment container's end side of the item, in the appropriate axis.




### `.k-align-items-baseline`

This is equivalent to `align-items: baseline;`. Aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-align-items-first-baseline`

This is equivalent to `align-items: first baseline;`. Aligns the alignment baseline of the box's first baseline.




### `.k-align-items-last-baseline`

This is equivalent to `align-items: last baseline;`. Aligns the alignment baseline of the box's last baseline.




### `.k-align-items-self-start`

This is equivalent to `align-items: self-start;`. The items are packed flush to the edge of the alignment container's start side of the item, in the appropriate axis.




### `.k-align-items-self-end`

This is equivalent to `align-items: self-end;`. The items are packed flush to the edge of the alignment container's end side of the item, in the appropriate axis.




### `.k-align-self-auto`

This is equivalent to `align-self: auto;`. Computes to the parent's align-items value.




### `.k-align-self-normal`

This is equivalent to `align-self: normal;`. The effect of this keyword is dependent of the layout mode we are in: 1) In absolutely-positioned layouts, the keyword behaves like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes. 2) In static position of absolutely-positioned layouts, the keyword behaves as stretch. 3) For flex items, the keyword behaves as stretch. 4) For grid items, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start. 5) The property doesn't apply to block-level boxes, and to table cells.




### `.k-align-self-stretch`

This is equivalent to `align-self: stretch;`. If the combined size of the items along the cross axis is less than the size of the alignment container and the item is auto-sized, its size is increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size of all auto-sized items exactly fills the alignment container along the cross axis.




### `.k-align-self-center`

This is equivalent to `align-self: center;`. The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.




### `.k-align-self-start`

This is equivalent to `align-self: start;`. The cross-start margin edge of the item is flushed with the cross-start edge of the line.




### `.k-align-self-end`

This is equivalent to `align-self: end;`. The cross-end margin edge of the item is flushed with the cross-end edge of the line.




### `.k-align-self-flex-start`

This is equivalent to `align-self: flex-start;`. The cross-start margin edge of the item is flushed with the cross-start edge of the line.




### `.k-align-self-flex-end`

This is equivalent to `align-self: flex-end;`. The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.




### `.k-align-self-baseline`

This is equivalent to `align-self: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.




### `.k-align-self-first-baseline`

This is equivalent to `align-self: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.




### `.k-align-self-last-baseline`

This is equivalent to `align-self: last baseline;`. Specifies participation in last baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.




### `.k-align-self-self-start`

This is equivalent to `align-self: self-start;`. Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis.




### `.k-align-self-self-end`

This is equivalent to `align-self: self-end;`. Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis.




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




### `.k-backdrop-blur`

This is equivalent to `backdrop-filter: blur(8px);`. Apply blurring effect 8px to the area behind an element.




### `.k-backdrop-blur-none`

This is equivalent to `backdrop-filter: blur(0);`. Apply blurring effect 0 to the area behind an element.




### `.k-backdrop-blur-sm`

This is equivalent to `backdrop-filter: blur(4px);`. Apply blurring effect 4px to the area behind an element.




### `.k-backdrop-blur-md`

This is equivalent to `backdrop-filter: blur(6px);`. Apply blurring effect 6px to the area behind an element.




### `.k-backdrop-blur-lg`

This is equivalent to `backdrop-filter: blur(12px);`. Apply blurring effect 12px to the area behind an element.




### `.k-bg-clip-border`

This is equivalent to `background-clip: border-box;`. The background extends to the outside edge of the border (but underneath the border in z-ordering).




### `.k-bg-clip-padding`

This is equivalent to `background-clip: padding-box;`. The background extends to the outside edge of the border (but underneath the border in z-ordering).




### `.k-bg-clip-content`

This is equivalent to `background-clip: content-box;`. The background extends to the outside edge of the border (but underneath the border in z-ordering).




### `.k-bg-clip-text`

This is equivalent to `background-clip: text;`. The background extends to the outside edge of the border (but underneath the border in z-ordering).




### `.k-bg-inherit`

This is equivalent to `background-color: inherit;`. Sets the inherited background color.




### `.k-bg-transparent`

This is equivalent to `background-color: transparent;`. Sets transparent background color.




### `.k-bg-black`

This is equivalent to `background-color: black;`. Sets the black background color.




### `.k-bg-white`

This is equivalent to `background-color: white;`. Sets the white background color.




### `.k-border-collapse`

This is equivalent to `border-collapse: collapse;`. Adjacent cells have shared borders (the collapsed-border table rendering model).




### `.k-border-separate`

This is equivalent to `border-collapse: separate;`. Adjacent cells have distinct borders (the separated-border table rendering model).




### `.k-border-white`

This is equivalent to `border-color: white;`. Define white border color




### `.k-border-inherit`

This is equivalent to `border-color: inherit;`. Define the inherited border color




### `.k-border-currentColor`

This is equivalent to `border-color: currentColor;`. Define inherited border color




### `.k-border-transparent`

This is equivalent to `border-color: transparent;`. Define transparent border color




### `.k-border-black`

This is equivalent to `border-color: black;`. Define black border color




### `.k-rounded`

This is equivalent to `border-radius: 0.25rem;`. Rounds all corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-0`

This is equivalent to `border-radius: 0;`. Do not rounds all corners of an element's outer border edge.




### `.k-rounded-sm`

This is equivalent to `border-radius: 0.125rem;`. Rounds all corners of an element's outer border edge with 0.125rem radius.




### `.k-rounded-md`

This is equivalent to `border-radius: 0.25rem;`. Rounds all corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-lg`

This is equivalent to `border-radius: 0.5rem;`. Rounds all corners of an element's outer border edge with 0.5rem radius.




### `.k-rounded-full`

This is equivalent to `border-radius: 9999px;`. Rounds all corners of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side, so square element is displayed as circle.




### `.k-rounded-tl`

This is equivalent to `border-top-left-radius: 0.25rem;`. Rounds top left corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-tl-0`

This is equivalent to `border-top-left-radius: 0;`. Do not rounds top left corner of an element's outer border edge.




### `.k-rounded-tl-sm`

This is equivalent to `border-top-left-radius: 0.125rem;`. Rounds top left corner of an element's outer border edge with 0.125rem radius.




### `.k-rounded-tl-md`

This is equivalent to `border-top-left-radius: 0.25rem;`. Rounds top left corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-tl-lg`

This is equivalent to `border-top-left-radius: 0.5rem;`. Rounds top left corner of an element's outer border edge with 0.5rem radius.




### `.k-rounded-tl-full`

This is equivalent to `border-top-left-radius: 9999px;`. Rounds top left corner of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-tr`

This is equivalent to `border-top-right-radius: 0.25rem;`. Rounds top right corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-tr-0`

This is equivalent to `border-top-right-radius: 0;`. Do not rounds top right corner of an element's outer border edge.




### `.k-rounded-tr-sm`

This is equivalent to `border-top-right-radius: 0.125rem;`. Rounds top right corner of an element's outer border edge with 0.125rem radius.




### `.k-rounded-tr-md`

This is equivalent to `border-top-right-radius: 0.25rem;`. Rounds top right corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-tr-lg`

This is equivalent to `border-top-right-radius: 0.5rem;`. Rounds top right corner of an element's outer border edge with 0.5rem radius.




### `.k-rounded-tr-full`

This is equivalent to `border-top-right-radius: 9999px;`. Rounds top right corner of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-br`

This is equivalent to `border-bottom-right-radius: 0.25rem;`. Rounds bottom right corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-br-0`

This is equivalent to `border-bottom-right-radius: 0;`. Do not rounds bottom right corner of an element's outer border edge.




### `.k-rounded-br-sm`

This is equivalent to `border-bottom-right-radius: 0.125rem;`. Rounds bottom right corner of an element's outer border edge with 0.125rem radius.




### `.k-rounded-br-md`

This is equivalent to `border-bottom-right-radius: 0.25rem;`. Rounds bottom right corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-br-lg`

This is equivalent to `border-bottom-right-radius: 0.5rem;`. Rounds bottom right corner of an element's outer border edge with 0.5rem radius.




### `.k-rounded-br-full`

This is equivalent to `border-bottom-right-radius: 9999px;`. Rounds bottom right corner of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-bl`

This is equivalent to `border-bottom-left-radius: 0.25rem;`. Rounds bottom left corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-bl-0`

This is equivalent to `border-bottom-left-radius: 0;`. Do not rounds bottom left corner of an element's outer border edge.




### `.k-rounded-bl-sm`

This is equivalent to `border-bottom-left-radius: 0.125rem;`. Rounds bottom left corner of an element's outer border edge with 0.125rem radius.




### `.k-rounded-bl-md`

This is equivalent to `border-bottom-left-radius: 0.25rem;`. Rounds bottom left corner of an element's outer border edge with 0.25rem radius.




### `.k-rounded-bl-lg`

This is equivalent to `border-bottom-left-radius: 0.5rem;`. Rounds bottom left corner of an element's outer border edge with 0.5rem radius.




### `.k-rounded-bl-full`

This is equivalent to `border-bottom-right-radius: 9999px;`. Rounds bottom left corner of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-t`

This is equivalent to `border-top-radius: 0.25rem;`. Rounds top corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-t-0`

This is equivalent to `border-top-radius: 0;`. Do not rounds top corners of an element's outer border edge.




### `.k-rounded-t-sm`

This is equivalent to `border-top-radius: 0.125rem;`. Rounds top corners of an element's outer border edge with 0.125rem radius.




### `.k-rounded-t-md`

This is equivalent to `border-top-radius: 0.25rem;`. Rounds top corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-t-lg`

This is equivalent to `border-top-radius: 0.5rem;`. Rounds top corners of an element's outer border edge with 0.5rem radius.




### `.k-rounded-t-full`

This is equivalent to `border-top-radius: 9999px;`. Rounds top corners of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-r`

This is equivalent to `border-right-radius: 0.25rem;`. Rounds right corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-r-0`

This is equivalent to `border-right-radius: 0;`. Do not rounds right corners of an element's outer border edge.




### `.k-rounded-r-sm`

This is equivalent to `border-right-radius: 0.125rem;`. Rounds right corners of an element's outer border edge with 0.125rem radius.




### `.k-rounded-r-md`

This is equivalent to `border-right-radius: 0.25rem;`. Rounds right corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-r-lg`

This is equivalent to `border-right-radius: 0.5rem;`. Rounds right corners of an element's outer border edge with 0.5rem radius.




### `.k-rounded-r-full`

This is equivalent to `border-right-radius: 9999px;`. Rounds right corners of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-b`

This is equivalent to `border-bottom-radius: 0.25rem;`. Rounds bottom corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-b-0`

This is equivalent to `border-bottom-radius: 0;`. Do not rounds bottom corners of an element's outer border edge.




### `.k-rounded-b-sm`

This is equivalent to `border-bottom-radius: 0.125rem;`. Rounds bottom corners of an element's outer border edge with 0.125rem radius.




### `.k-rounded-b-md`

This is equivalent to `border-bottom-radius: 0.25rem;`. Rounds bottom corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-b-lg`

This is equivalent to `border-bottom-radius: 0.5rem;`. Rounds bottom corners of an element's outer border edge with 0.5rem radius.




### `.k-rounded-b-full`

This is equivalent to `border-bottom-radius: 9999px;`. Rounds bottom corners of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-rounded-l`

This is equivalent to `border-left-radius: 0.25rem;`. Rounds left corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-l-0`

This is equivalent to `border-left-radius: 0;`. Do not rounds left corners of an element's outer border edge.




### `.k-rounded-l-sm`

This is equivalent to `border-left-radius: 0.125rem;`. Rounds left corners of an element's outer border edge with 0.125rem radius.




### `.k-rounded-l-md`

This is equivalent to `border-left-radius: 0.25rem;`. Rounds left corners of an element's outer border edge with 0.25rem radius.




### `.k-rounded-l-lg`

This is equivalent to `border-left-radius: 0.5rem;`. Rounds left corners of an element's outer border edge with 0.5rem radius.




### `.k-rounded-l-full`

This is equivalent to `border-left-radius: 9999px;`. Rounds left corners of an element's outer border edge with 9999px radius. Resolved border radius is equal to half of the shortest adjacent side.




### `.k-border-y-none`

This is equivalent to `border-block-style: none;`. Displays no block border. In the case of table cell and border collapsing, the none value has the lowest priority: if any other conflicting border is set, it will be displayed.




### `.k-border-solid`

This is equivalent to `border-style: solid;`. Displays all borders of the elements as single, straight, solid line.




### `.k-border-dashed`

This is equivalent to `border-style: dashed;`. Displays all borders of the elements as a series of short square-ended dashes or line segments.




### `.k-border-dotted`

This is equivalent to `border-style: dotted;`. Displays all borders of the elements as a series of rounded dots.




### `.k-border-double`

This is equivalent to `border-style: double;`. Displays all borders of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-hidden`

This is equivalent to `border-style: hidden;`. Displays no border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-none`

This is equivalent to `border-style: none;`. Displays no border. In the case of table cell and border collapsing, the none value has the lowest priority: if any other conflicting border is set, it will be displayed.




### `.k-border-t-solid`

This is equivalent to `border-top-style: solid;`. Displays top border of the elements as single, straight, solid line.




### `.k-border-t-dashed`

This is equivalent to `border-top-style: dashed;`. Displays top border of the elements as a series of short square-ended dashes or line segments.




### `.k-border-t-dotted`

This is equivalent to `border-top-style: dotted;`. Displays top border of the elements as a series of rounded dots.




### `.k-border-t-double`

This is equivalent to `border-top-style: double;`. Displays top border of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-t-hidden`

This is equivalent to `border-top-style: hidden;`. Displays no top border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-t-none`

This is equivalent to `border-top-style: none;`. Displays no top border. In the case of table cell and border collapsing, the none value has the lowest priority: if any other conflicting border is set, it will be displayed.




### `.k-border-r-solid`

This is equivalent to `border-right-style: solid;`. Displays right border of the elements as single, straight, solid line.




### `.k-border-r-dashed`

This is equivalent to `border-right-style: dashed;`. Displays right border of the elements as a series of short square-ended dashes or line segments.




### `.k-border-r-dotted`

This is equivalent to `border-right-style: dotted;`. Displays right border of the elements as a series of rounded dots.




### `.k-border-r-double`

This is equivalent to `border-right-style: double;`. Displays right border of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-r-hidden`

This is equivalent to `border-right-style: hidden;`. Displays no right border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-r-none`

This is equivalent to `border-right-style: none;`. Displays no right border. In the case of table cell and border collapsing, the none value has the lowest priority: if any other conflicting border is set, it will be displayed.




### `.k-border-b-solid`

This is equivalent to `border-bottom-style: solid;`. Displays bottom border of the elements as single, straight, solid line.




### `.k-border-b-dashed`

This is equivalent to `border-bottom-style: dashed;`. Displays bottom border of the elements as a series of short square-ended dashes or line segments.




### `.k-border-b-dotted`

This is equivalent to `border-bottom-style: dotted;`. Displays bottom border of the elements as a series of rounded dots.




### `.k-border-b-double`

This is equivalent to `border-bottom-style: double;`. Displays bottom border of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-b-hidden`

This is equivalent to `border-bottom-style: hidden;`. Displays no bottom border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-b-none`

This is equivalent to `border-bottom-style: none;`. Displays no bottom border. In the case of table cell and border collapsing, the none value has the lowest priority: if any other conflicting border is set, it will be displayed.




### `.k-border-l-solid`

This is equivalent to `border-left-style: solid;`. Displays left border of the elements as single, straight, solid line.




### `.k-border-l-dashed`

This is equivalent to `border-left-style: dashed;`. Displays left border of the elements as a series of short square-ended dashes or line segments.




### `.k-border-l-dotted`

This is equivalent to `border-left-style: dotted;`. Displays left border of the elements as a series of rounded dots.




### `.k-border-l-double`

This is equivalent to `border-left-style: double;`. Displays left border of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-l-hidden`

This is equivalent to `border-left-style: hidden;`. Displays no left border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-x-solid`

This is equivalent to `border-inline-style: solid;`. Displays inline border of the elements as single, straight, solid line. Border-inline corresponds to the border-top and border-bottom or border-right, and border-left properties, depending on the values defined for writing-mode, direction, and text-orientation.




### `.k-border-x-dashed`

This is equivalent to `border-inline-style: dashed;`. Displays inline border of the elements as a series of short square-ended dashes or line segments.




### `.k-border-x-dotted`

This is equivalent to `border-inline-style: dotted;`. Displays inline border of the elements as a series of rounded dots.




### `.k-border-x-double`

This is equivalent to `border-inline-style: double;`. Displays inline border of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-x-hidden`

This is equivalent to `border-inline-style: hidden;`. Displays no inline border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-x-none`

This is equivalent to `border-inline-style: none;`. Displays no inline border. In the case of table cell and border collapsing, the none value has the lowest priority: if any other conflicting border is set, it will be displayed.




### `.k-border-y-solid`

This is equivalent to `border-block-style: solid;`. Displays block border of the elements as single, straight, solid line. Border-block corresponds to the border-top and border-bottom or border-right, and border-left properties, depending on the values defined for writing-mode, direction, and text-orientation.




### `.k-border-y-dashed`

This is equivalent to `border-block-style: dashed;`. Displays block border of the elements as a series of short square-ended dashes or line segments.




### `.k-border-y-dotted`

This is equivalent to `border-block-style: dotted;`. Displays block border of the elements as a series of rounded dots.




### `.k-border-y-double`

This is equivalent to `border-block-style: double;`. Displays block border of the elements as two straight lines that add up to the pixel size defined by border-style.




### `.k-border-y-hidden`

This is equivalent to `border-block-style: hidden;`. Displays no block border. In the case of table cell and border collapsing, the hidden value has the highest priority: if any other conflicting border is set, it won't be displayed.




### `.k-border-y-8`

This is equivalent to `border-block-width: 8px;`. Sets 8px width of an block element's border.




### `.k-border`

This is equivalent to `border-width: 1px;`. Sets 1px width of an element's border.




### `.k-border-0`

This is equivalent to `border-width: 0;`. Sets 0px width of an element's border.




### `.k-border-2`

This is equivalent to `border-width: 2px;`. Sets 2px width of an element's border.




### `.k-border-4`

This is equivalent to `border-width: 4px;`. Sets 4px width of an element's border.




### `.k-border-8`

This is equivalent to `border-width: 8px;`. Sets 8px width of an element's border.




### `.k-border-t`

This is equivalent to `border-top-width: 1px;`. Sets 1px width of an top element's border.




### `.k-border-t-0`

This is equivalent to `border-top-width: 0px;`. Sets 0px width of an top element's border.




### `.k-border-t-2`

This is equivalent to `border-top-width: 2px;`. Sets 2px width of an top element's border.




### `.k-border-t-4`

This is equivalent to `border-top-width: 4px;`. Sets 4px width of an top element's border.




### `.k-border-t-8`

This is equivalent to `border-top-width: 8px;`. Sets 8px width of an top element's border.




### `.k-border-r`

This is equivalent to `border-right-width: 1px;`. Sets 1px width of an right element's border.




### `.k-border-r-0`

This is equivalent to `border-right-width: 0px;`. Sets 0px width of an right element's border.




### `.k-border-r-2`

This is equivalent to `border-right-width: 2px;`. Sets 2px width of an right element's border.




### `.k-border-r-4`

This is equivalent to `border-right-width: 4px;`. Sets 4px width of an right element's border.




### `.k-border-r-8`

This is equivalent to `border-right-width: 8px;`. Sets 8px width of an right element's border.




### `.k-border-b`

This is equivalent to `border-bottom-width: 1px;`. Sets 1px width of an bottom element's border.




### `.k-border-b-0`

This is equivalent to `border-bottom-width: 0px;`. Sets 0px width of an bottom element's border.




### `.k-border-b-2`

This is equivalent to `border-bottom-width: 2px;`. Sets 2px width of an bottom element's border.




### `.k-border-b-4`

This is equivalent to `border-bottom-width: 4px;`. Sets 4px width of an bottom element's border.




### `.k-border-b-8`

This is equivalent to `border-bottom-width: 8px;`. Sets 8px width of an bottom element's border.




### `.k-border-l`

This is equivalent to `border-left-width: 1px;`. Sets 1px width of an left element's border.




### `.k-border-l-0`

This is equivalent to `border-left-width: 0px;`. Sets 0px width of an left element's border.




### `.k-border-l-2`

This is equivalent to `border-left-width: 2px;`. Sets 2px width of an left element's border.




### `.k-border-l-4`

This is equivalent to `border-left-width: 4px;`. Sets 4px width of an left element's border.




### `.k-border-l-8`

This is equivalent to `border-left-width: 8px;`. Sets 8px width of an left element's border.




### `.k-border-x`

This is equivalent to `border-inline-width: 1px;`. Sets 1px width of an inline element's border.




### `.k-border-x-0`

This is equivalent to `border-inline-width: 0px;`. Sets 0px width of an inline element's border.




### `.k-border-x-2`

This is equivalent to `border-inline-width: 2px;`. Sets 2px width of an inline element's border.




### `.k-border-x-4`

This is equivalent to `border-inline-width: 4px;`. Sets 4px width of an inline element's border.




### `.k-border-x-8`

This is equivalent to `border-inline-width: 8px;`. Sets 8px width of an inline element's border.




### `.k-border-y`

This is equivalent to `border-block-width: 1px;`. Sets 1px width of an block element's border.




### `.k-border-y-0`

This is equivalent to `border-block-width: 0px;`. Sets 0px width of an block element's border.




### `.k-border-y-2`

This is equivalent to `border-block-width: 2px;`. Sets 2px width of an block element's border.




### `.k-border-y-4`

This is equivalent to `border-block-width: 4px;`. Sets 4px width of an block element's border.




### `.k-box-sizing-border`

This is equivalent to `box-sizing: border-box;`. The width and height properties include the content, padding, and border, but do not include the margin.




### `.k-box-sizing-content`

This is equivalent to `box-sizing: content-box;`. This is the initial and default value as specified by the CSS standard. The width and height properties include the content, but does not include the padding, border, or margin.




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




### `.k-cursor-none`

This is equivalent to `cursor: none;`. No cursor is rendered.




### `.k-cursor-auto`

This is equivalent to `cursor: auto;`. The UA will determine the cursor to display based on the current context. E.g., equivalent to text when hovering text.




### `.k-cursor-default`

This is equivalent to `cursor: default;`. Displays he platform-dependent default cursor. Typically an arrow.




### `.k-cursor-pointer`

This is equivalent to `cursor: pointer;`. The cursor is a pointer that indicates a link. Typically an image of a pointing hand.




### `.k-d-none`

This is equivalent to `display: none;`. Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off.




### `.k-d-contents`

This is equivalent to `display: contents;`. These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes.




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




### `.k-d-table-row`

This is equivalent to `display: table-row;`. These elements behave like <tr> HTML elements.




### `.k-d-table-cell`

This is equivalent to `display: table-cell;`. These elements behave like <td> HTML elements.




### `.k-fill-none`

This is equivalent to `fill: none;`. SVG shape filling color will not be overriden.




### `.k-fill-inherit`

This is equivalent to `fill: inherit;`. Sets inherited filling color of a SVG shape.




### `.k-fill-currentColor`

This is equivalent to `fill: currentColor;`. Sets element's color as filling color of a SVG shape.




### `.k-fill-transparent`

This is equivalent to `fill: transparent;`. Sets transparent filling color of a SVG shape.




### `.k-fill-black`

This is equivalent to `fill: black;`. Sets black filling color of a SVG shape.




### `.k-fill-white`

This is equivalent to `fill: white;`. Sets white filling color of a SVG shape.




### `.k-flex-1`

This is equivalent to `flex: 1 1 0%;`. It sizes the item not based on its `width`/`height` properties, but based on the available space. This is similar to `flex: 1 1 auto` except it is allowed to shrink beyond its initial size.




### `.k-flex-auto`

This is equivalent to `flex: 1 1 auto;`. Beware, this is not the default value. It sizes the item based on its `width`/`height` properties, but makes it fully flexible so that they absorb any extra space along the main axis. If all items are either `flex: auto`, `flex: initial`, or `flex: none`, any remaining space after the items have been sized will be distributed evenly to the items with `flex: auto`.




### `.k-flex-initial`

This is the same as `flex: initial;` and the shorthand for the default value: `flex: 0 1 auto`. It sizes the item based on its `width`/`height` properties (or its content if not set). It makes the flex item inflexible when there is some free space left, but allows it to shrink to its minimum when there is not enough space. The alignment abilities or `auto` margins can be used to align flex items along the main axis.




### `.k-flex-none`

This is equivalent to `flex: 0 0 auto;`. It sizes the item according to its `width`/`height` properties, but makes it fully inflexible. This is similar to `flex: initial` except it is not allowed to shrink, even in an overflow situation.




### `.k-flex-basis-auto`

This is equivalent to `flex-basis: auto;`. It specifies the initial size of the flex item, before any available space is distributed according to the flex factors. It sizes the element according to its size property.




### `.k-flex-basis-0`

This is equivalent to `flex-basis: 0;`. It specifies the initial size of the flex item, before any available space is distributed according to the flex factors. It disregards the element' size property.




### `.k-flex-row`

This is equivalent to `flex-direction: row;`. This establishes the main-axis to be horizontal, thus defining the direction flex items are placed in the flex container: left to right in `ltr`; right to left in `rtl`.




### `.k-flex-row-reverse`

This is equivalent to `flex-direction: row-reverse;`. This establishes the main-axis to be horizontal, thus defining the direction flex items are placed in the flex container: right to left in `ltr`; left to right in `rtl`.




### `.k-flex-col`

This is equivalent to `flex-direction: column;`. This establishes the main-axis to be vertical, thus defining the direction flex items are placed in the flex container: top to bottom.




### `.k-flex-col-reverse`

This is equivalent to `flex-direction: column-reverse;`. This establishes the main-axis to be vertical, thus defining the direction flex items are placed in the flex container: bottom to top.




### `.k-flex-grow`

This is equivalent to `flex-grow: 1;`. It defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.




### `.k-flex-grow-0`

This is equivalent to `flex-grow: 0;`. The item will not grow.




### `.k-flex-shrink`

This is equivalent to `flex-shrink: 1;`. It determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn't enough space on the row.




### `.k-flex-shrink-0`

This is equivalent to `flex-shrink: 0;`. The item will not shrink.




### `.k-flex-wrap`

This is equivalent to `flex-wrap: wrap;`. It allows flex items to wrap as needed onto multiple lines, from top to bottom.




### `.k-flex-nowrap`

This is equivalent to `flex-wrap: nowrap;`. All flex items will be on one line.




### `.k-flex-wrap-reverse`

This is equivalent to `flex-wrap: wrap-reverse;`. It allows flex items to wrap as needed onto multiple lines, from bottom to top.




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




### `.k-font-xs`

This is equivalent to `font-size: 10px;`. Sets 10px font size to the element.




### `.k-font-sm`

This is equivalent to `font-size: 12px;`. Sets 12px font size to the element.




### `.k-font-md`

This is equivalent to `font-size: 14px;`. Sets 14px font size to the element.




### `.k-font-lg`

This is equivalent to `font-size: 16px;`. Sets 16px font size to the element.




### `.k-font-xl`

This is equivalent to `font-size: 20px;`. Sets 20px font size to the element..




### `.k-font-italic`

This is equivalent to `font-style: italic;`. Sets italic font style to the element.




### `.k-font-non-italic`

This is equivalent to `font-style: normal;`. Sets normal font style to the element.




### `.k-font-thin`

This is equivalent to `font-weight: 100;`. Sets 100 font weight to the element.




### `.k-font-extralight`

This is equivalent to `font-weight: 200;`. Sets 200 font weight to the element.




### `.k-font-normal`

This is equivalent to `font-weight: 300;`. Sets 300 font weight to the element.




### `.k-font-light`

This is equivalent to `font-weight: 400;`. Sets 400 font weight to the element.




### `.k-font-medium`

This is equivalent to `font-weight: 500;`. Sets 500 font weight to the element.




### `.k-font-semibold`

This is equivalent to `font-weight: 600;`. Sets 600 font weight to the element.




### `.k-font-bold`

This is equivalent to `font-weight: 700;`. Sets 700 font weight to the element.




### `.k-font-extrabold`

This is equivalent to `font-weight: 800;`. Sets 800 font weight to the element.




### `.k-font-black`

This is equivalent to `font-weight: 900;`. Sets 900 font weight to the element.




### `.k-gap-0`

This is equivalent to `gap: 0;`. Sets zero width of gaps (gutters) between rows and columns.




### `.k-gap-1px`

This is equivalent to `gap: 1px;`. Sets 1px width of gaps (gutters) between rows and columns.




### `.k-gap-1`

This is equivalent to `gap: 0.25rem;`. Sets 0.25rem width of gaps (gutters) between rows and columns.




### `.k-gap-xs`

This is equivalent to `gap: 0.25rem;`. Sets 0.25rem width of gaps (gutters) between rows and columns.




### `.k-gap-sm`

This is equivalent to `gap: 0.5rem;`. Sets 0.5rem width of gaps (gutters) between rows and columns.




### `.k-gap-md`

This is equivalent to `gap: 0.75rem;`. Sets 0.75rem width of gaps (gutters) between rows and columns.




### `.k-gap-lg`

This is equivalent to `gap: 1rem;`. Sets 1rem width of gaps (gutters) between rows and columns.




### `.k-gap-xl`

This is equivalent to `gap: 1.5rem;`. Sets 1.5rem width of gaps (gutters) between rows and columns.




### `.k-gap-thin`

This is equivalent to `gap: 0.125rem;`. Sets 0.125rem width of gaps (gutters) between rows and columns.




### `.k-gap-hair`

This is equivalent to `gap: 1px;`. Sets zero 1px of gaps (gutters) between rows and columns.




### `.k-gap-x-0`

This is equivalent to `column-gap: 0;`. Sets zero width of gaps (gutters) between columns.




### `.k-gap-x-1px`

This is equivalent to `column-gap: 1px;`. Sets 1px width of gaps (gutters) between columns.




### `.k-gap-x-1`

This is equivalent to `column-gap: 0.25rem;`. Sets 0.25rem width of gaps (gutters) between columns.




### `.k-gap-x-xs`

This is equivalent to `column-gap: 0.25rem;`. Sets 0.25rem width of gaps (gutters) between columns.




### `.k-gap-x-sm`

This is equivalent to `column-gap: 0.5rem;`. Sets 0.5rem width of gaps (gutters) between columns.




### `.k-gap-x-md`

This is equivalent to `column-gap: 0.75rem;`. Sets 0.75rem width of gaps (gutters) between columns.




### `.k-gap-x-lg`

This is equivalent to `column-gap: 1rem;`. Sets 1rem width of gaps (gutters) between columns.




### `.k-gap-x-xl`

This is equivalent to `column-gap: 1.5rem;`. Sets 1.5rem width of gaps (gutters) between columns.




### `.k-gap-x-thin`

This is equivalent to `column-gap: 0.125rem;`. Sets 0.125rem width of gaps (gutters) between columns.




### `.k-gap-x-hair`

This is equivalent to `column-gap: 1px;`. Sets zero 1px of gaps (gutters) between columns.




### `.k-gap-y-0`

This is equivalent to `row-gap: 0;`. Sets zero width of gaps (gutters) between rows.




### `.k-gap-y-1px`

This is equivalent to `row-gap: 1px;`. Sets 1px width of gaps (gutters) between rows.




### `.k-gap-y-1`

This is equivalent to `row-gap: 0.25rem;`. Sets 0.25rem width of gaps (gutters) between rows.




### `.k-gap-y-xs`

This is equivalent to `row-gap: 0.25rem;`. Sets 0.25rem width of gaps (gutters) between rows.




### `.k-gap-y-sm`

This is equivalent to `row-gap: 0.5rem;`. Sets 0.5rem width of gaps (gutters) between rows.




### `.k-gap-y-md`

This is equivalent to `row-gap: 0.75rem;`. Sets 0.75rem width of gaps (gutters) between rows.




### `.k-gap-y-lg`

This is equivalent to `row-gap: 1rem;`. Sets 1rem width of gaps (gutters) between rows.




### `.k-gap-y-xl`

This is equivalent to `row-gap: 1.5rem;`. Sets 1.5rem width of gaps (gutters) between rows.




### `.k-gap-y-thin`

This is equivalent to `row-gap: 0.125rem;`. Sets 0.125rem width of gaps (gutters) between rows.




### `.k-gap-y-hair`

This is equivalent to `row-gap: 1px;`. Sets zero 1px of gaps (gutters) between rows.




### `.k-grid-auto-cols-auto`

This is equivalent to `grid-auto-columns: auto;`. Specifies auto size of an implicitly-created grid column track or pattern of tracks. It is identical to maximal content if it's a maximum. As a minimum it represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track.




### `.k-grid-auto-cols-min`

This is equivalent to `grid-auto-columns: min-content;`. Specifies minimal size of an implicitly-created grid column track or pattern of tracks. It represent the largest minimal content contribution of the grid items occupying the grid track.




### `.k-grid-auto-cols-max`

This is equivalent to `grid-auto-columns: max-content;`. Specifies maximal size of an implicitly-created grid column track or pattern of tracks. It represent the largest maximal content contribution of the grid items occupying the grid track.




### `.k-grid-auto-cols-fr`

This is equivalent to `grid-auto-columns: minmax( 0, 1fr );`. Specifies minimal and maximal size of an implicitly-created grid column track or pattern of tracks. It defines a size range greater than or equal to min and less than or equal to max.




### `.k-grid-auto-flow-row`

This is equivalent to `grid-auto-flow: row;`. Items are placed by filling each row in turn, adding new rows as necessary. If neither row nor column is provided, row is assumed.




### `.k-grid-auto-flow-column`

This is equivalent to `grid-auto-flow: column;`. Items are placed by filling each column in turn, adding new columns as necessary.




### `.k-grid-auto-flow-dense`

This is equivalent to `grid-auto-flow: dense;`. Items are placed by a packing algorithm that attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items. If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.




### `.k-grid-auto-flow-row-dense`

This is equivalent to `grid-auto-flow: row dense;`. Items are placed by a packing algorithm that attempts to fill in holes earlier in the grid in the row direction, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items. If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.




### `.k-grid-auto-flow-col-dense`

This is equivalent to `grid-auto-flow: col dense;`. Items are placed by a packing algorithm that attempts to fill in holes earlier in the grid in the column direction, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items. If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.




### `.k-grid-auto-flow-unset`

This is equivalent to `grid-auto-flow: unset;`.




### `.k-grid-auto-rows-auto`

This is equivalent to `grid-auto-rows: auto;`. Specifies auto size of an implicitly-created grid row track or pattern of tracks. It is identical to maximal content if it's a maximum. As a minimum it represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track.




### `.k-grid-auto-rows-min`

This is equivalent to `grid-auto-rows: min-content;`. Specifies minimal size of an implicitly-created grid row track or pattern of tracks. It represent the largest minimal content contribution of the grid items occupying the grid track.




### `.k-grid-auto-rows-max`

This is equivalent to `grid-auto-rows: max-content;`. Specifies maximal size of an implicitly-created grid row track or pattern of tracks. It represent the largest maximal content contribution of the grid items occupying the grid track.




### `.k-grid-auto-rows-fr`

This is equivalent to `grid-auto-rows: minmax( 0, 1fr );`. Specifies minimal and maximal size of an implicitly-created grid row track or pattern of tracks. It defines a size range greater than or equal to min and less than or equal to max.




### `.k-col-start-1`

This is equivalent to `grid-column-start: 1;`. This specifies a grid item's start position on the first grid line within the grid column. This start position defines the block-start edge of the grid area.




### `.k-col-start--1`

This is equivalent to `grid-column-start: -1;`. This specifies a grid item's start position on the first grid line within the grid column. This start position defines the block-start edge of the grid area counting backwards.




### `.k-col-start-auto`

This is equivalent to `grid-column-start: auto;`. This property contributes nothing to the grid item's placement, indicating auto-placement, an automatic span, or a default span of 1.




### `.k-row-start-1`

This is equivalent to `grid-row-start: 1;`. This specifies a grid item's start position on the first grid line within the grid row. This start position defines the block-start edge of the grid area.




### `.k-row-start--1`

This is equivalent to `grid-row-start: -1;`. This specifies a grid item's start position on the first grid line within the grid row. This start position defines the block-start edge of the grid area counting backwards.




### `.k-row-start-auto`

This is equivalent to `grid-row-start: auto;`. This property contributes nothing to the grid item's placement, indicating auto-placement, an automatic span, or a default span of 1.




### `.k-grid-cols-1`

This is equivalent to `grid-template-columns: repeat(1, minmax(0, 1fr));`. Sets one column expanded maximum to the entire width.




### `.k-grid-cols-2`

This is equivalent to `grid-template-columns: repeat(2, minmax(0, 1fr));`. Sets two equal columns expanded maximum to the entire width.




### `.k-grid-cols-none`

This is equivalent to `grid-template-columns: none;`. ndicates that there is no explicit grid. Any columns will be implicitly generated and their size will be determined by the grid-auto-columns property.




### `.k-grid-rows-1`

This is equivalent to `grid-template-rows: repeat(1, minmax(0, 1fr));`. Sets one column expanded maximum to the entire width.




### `.k-grid-rows-2`

This is equivalent to `grid-template-rows: repeat(2, minmax(0, 1fr));`. Sets two equal rows expanded maximum to the entire width.




### `.k-grid-rows-none`

This is equivalent to `grid-template-rows: none;`. ndicates that there is no explicit grid. Any rows will be implicitly generated and their size will be determined by the grid-auto-rows property.




### `.k-h-0`

This is equivalent to `height: 0;`. Specifies 0px height of an element.




### `.k-h-1px`

This is equivalent to `height: 1px;`. Specifies 1px height of an element.




### `.k-h-1`

This is equivalent to `height: 0.25rem;`. Specifies 0.25rem height of an element.




### `.k-h-full`

This is equivalent to `min-height: 100%;`. Specifies element's height as 100% of the containing block's height.




### `.k-h-screen`

This is equivalent to `height: 100vh;`. Specifies element's height the same as the viewport height.




### `.k-h-screen`

This is equivalent to `height: 100vh;`. Specifies  element's height to be the same as the viewport height.




### `.k-h-min`

This is equivalent to `height: min-content;`. Specifies the intrinsic minimum height of the element.




### `.k-h-max`

This is equivalent to `height: max-content;`. Specifies the intrinsic preferred height of the element.




### `.k-h-fit`

This is equivalent to `height: fit-content;`. Height of the element will use the available space, but never more than max-content




### `.k-min-h-0`

This is equivalent to `min-height: 0;`. Specifies 0px minimum height of an element.




### `.k-min-h-1px`

This is equivalent to `min-height: 1px;`. Specifies 1px minimum height of an element.




### `.k-min-h-1`

This is equivalent to `min-height: 0.25rem;`. Specifies 0.25rem minimum height of an element.




### `.k-min-h-full`

This is equivalent to `min-height: 100%;`. Specifies minimum element's height as 100% of the containing block's height.




### `.k-min-h-screen`

This is equivalent to `min-height: 100vh;`. Specifies minimum element's height to be as the viewport height.




### `.k-min-h-min`

This is equivalent to `min-height: min-content;`. Specifies minimum element's height to be as the intrinsic height of the element.




### `.k-min-h-max`

This is equivalent to `min-height: max-content;`. Specifies minimum element's height to be as the preferred height of the element.




### `.k-min-h-fit`

This is equivalent to `min-height: fit-content;`. Minimum height of the element will use the available space, but never more than max-content




### `.k-max-h-0`

This is equivalent to `max-height: 0;`. Specifies 0px maximum height of an element.




### `.k-max-h-1px`

This is equivalent to `max-height: 1px;`. Specifies 1px maximum height of an element.




### `.k-max-h-1`

This is equivalent to `max-height: 0.25rem;`. Specifies 0.25rem maximum height of an element.




### `.k-max-h-full`

This is equivalent to `max-height: 100%;`. Specifies maximum element's height as 100% of the containing block's height.




### `.k-max-h-screen`

This is equivalent to `max-height: 100vh;`. Specifies maximum element's height to be as the viewport height.




### `.k-max-h-min`

This is equivalent to `max-height: min-content;`. Specifies maximum element's height to be as the intrinsic height of the element.




### `.k-max-h-max`

This is equivalent to `max-height: max-content;`. Specifies maximum element's height to be as the preferred height of the element.




### `.k-max-h-fit`

This is equivalent to `max-height: fit-content;`. Maximum height of the element will use the available space, but never more than max-content




### `.k-justify-content-normal`

This is equivalent to `justify-content: normal;`. The items are packed in their default position as if no justify-content value was set. This value behaves as stretch in grid and flex containers.




### `.k-justify-content-stretch`

This is equivalent to `justify-content: stretch;`. If the combined size of the items along the main axis is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.




### `/// This is equivalent to `justify-content: start;`. The items are packed flush to each other toward the start edge of the alignment container in the main axis.
/// @example justify-content: start;
/// @name .k-justify-content-start
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: end;`. The items are packed flush to each other toward the end edge of the alignment container in the main axis.
/// @example justify-content: end;
/// @name .k-justify-content-end
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: flex-start;`. The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like start.
/// @example justify-content: flex-start;
/// @name .k-justify-content-selft-start
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: flex-end;`. The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like end.
/// @example justify-content: flex-end;
/// @name .k-justify-content-self-end
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.
/// @example justify-content: baseline;
/// @name .k-justify-content-baseline
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first  baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group.
/// @example justify-content: first baseline;
/// @name .k-justify-content-first-baseline
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: last baseline;`. Specifies participation in last-baseline alignment: aligns the alignment baseline of the box's last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group.
/// @example justify-content: last baseline;
/// @name .k-justify-content-last-baseline
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: space-between;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
/// @example justify-content: space-between;
/// @name .k-justify-content-between
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: space-around;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
/// @example justify-content: space-around;
/// @name .k-justify-content-around
/// @group justify-content
/// @contextType css

/// This is equivalent to `justify-content: space-evenly;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
/// @example justify-content: space-evenly;
/// @name .k-justify-content-evenly
/// @group justify-content
/// @contextType css

@mixin kendo-utils--flex-grid--justify-content()`

This is equivalent to `justify-content: center;`. The items are packed flush to each other toward the center of the alignment container along the main axis.




### `.k-justify-content-start`

This is equivalent to `justify-content: start;`. The items are packed flush to each other toward the start edge of the alignment container in the main axis.




### `.k-justify-content-end`

This is equivalent to `justify-content: end;`. The items are packed flush to each other toward the end edge of the alignment container in the main axis.




### `.k-justify-content-selft-start`

This is equivalent to `justify-content: flex-start;`. The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like start.




### `.k-justify-content-self-end`

This is equivalent to `justify-content: flex-end;`. The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like end.




### `.k-justify-content-baseline`

This is equivalent to `justify-content: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-content-first-baseline`

This is equivalent to `justify-content: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first  baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-content-last-baseline`

This is equivalent to `justify-content: last baseline;`. Specifies participation in last-baseline alignment: aligns the alignment baseline of the box's last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-content-between`

This is equivalent to `justify-content: space-between;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.




### `.k-justify-content-around`

This is equivalent to `justify-content: space-around;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.




### `.k-justify-content-evenly`

This is equivalent to `justify-content: space-evenly;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.




### `.k-justify-items-normal`

This is equivalent to `justify-items: normal;`. Defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis. The effect of this keyword is dependent of the layout mode we are in: 1) In block-level layouts, the keyword is a synonym of start. 2) In absolutely-positioned layouts, the keyword behaved like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes. 3) In table cell layouts, this keyword has no meaning as this property is ignored. 4) In flexbox layouts, this keyword has no meaning as this property is ignored. 5) In grid layouts, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start.




### `.k-justify-items-stretch`

This is equivalent to `justify-items: stretch;`. If the combined size of the items is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container.




### `/// This is equivalent to `justify-items: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
/// @example justify-items: start;
/// @name .k-justify-items-start
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
/// @example justify-items: end;
/// @name .k-justify-items-end
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: flex-start;`. For items that are not children of a flex container, this value is treated like start.
/// @example justify-items: flex-start;
/// @name .k-justify-items-selft-start
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: flex-end;`. For items that are not children of a flex container, this value is treated like end.
/// @example justify-items: flex-end;
/// @name .k-justify-items-self-end
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
/// @example justify-items: self-start;
/// @name .k-justify-items-selft-start
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
/// @example justify-items: self-end;
/// @name .k-justify-items-self-end
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: left;`. The items are packed flush to each other toward the left edge of the alignment container. If the property's axis is not parallel with the inline axis, this value behaves like start.
/// @example justify-items: left;
/// @name .k-justify-items-left
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: right;`. The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property's axis is not parallel with the inline axis, this value behaves like start.
/// @example justify-items: right;
/// @name .k-justify-items-right
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.
/// @example justify-items: baseline;
/// @name .k-justify-items-baseline
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group.
/// @example justify-items: first baseline;
/// @name .k-justify-items-first-baseline
/// @group justify-items
/// @contextType css

/// This is equivalent to `justify-items: last baseline;`. Specifies participation in last baseline alignment: aligns the alignment baseline of the box's last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.
/// @example justify-items: last baseline;
/// @name .k-justify-items-last-baseline
/// @group justify-items
/// @contextType css

@mixin kendo-utils--flex-grid--justify-items()`

This is equivalent to `justify-items: center;`. The items are packed flush to each other toward the center of the alignment container.




### `.k-justify-items-start`

This is equivalent to `justify-items: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.




### `.k-justify-items-end`

This is equivalent to `justify-items: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.




### `.k-justify-items-selft-start`

This is equivalent to `justify-items: flex-start;`. For items that are not children of a flex container, this value is treated like start.




### `.k-justify-items-self-end`

This is equivalent to `justify-items: flex-end;`. For items that are not children of a flex container, this value is treated like end.




### `.k-justify-items-selft-start`

This is equivalent to `justify-items: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.




### `.k-justify-items-self-end`

This is equivalent to `justify-items: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.




### `.k-justify-items-left`

This is equivalent to `justify-items: left;`. The items are packed flush to each other toward the left edge of the alignment container. If the property's axis is not parallel with the inline axis, this value behaves like start.




### `.k-justify-items-right`

This is equivalent to `justify-items: right;`. The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property's axis is not parallel with the inline axis, this value behaves like start.




### `.k-justify-items-baseline`

This is equivalent to `justify-items: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-items-first-baseline`

This is equivalent to `justify-items: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-items-last-baseline`

This is equivalent to `justify-items: last baseline;`. Specifies participation in last baseline alignment: aligns the alignment baseline of the box's last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.




### `.k-justify-self-auto`

This is equivalent to `justify-self: auto;`. This property sets the way a box is justified inside its alignment container along the appropriate axis. The value used is the value of the justify-items property of the parents box, unless the box has no parent, or is absolutely positioned, in these cases, auto represents normal.




### `.k-justify-self-normal`

This is equivalent to `justify-self: normal;`. This property sets the way a box is justified inside its alignment container along the appropriate axis. This property can take one of three different forms: 1) Basic keywords: one of the keyword values normal, auto, or stretch. 2) Baseline alignment: the baseline keyword, plus optionally one of first or last. 3) Positional alignment: a) one of: center, start, end, flex-start, flex-end, self-start, self-end, left, or right. b) Plus optionally safe or unsafe.




### `.k-justify-self-stretch`

This is equivalent to `justify-self: stretch;`. If the combined size of the items is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container.




### `/// This is equivalent to `justify-self: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
/// @example justify-self: start;
/// @name .k-justify-self-start
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
/// @example justify-self: end;
/// @name .k-justify-self-end
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: flex-start;`. For items that are not children of a flex container, this value is treated like start.
/// @example justify-self: flex-start;
/// @name .k-justify-self-selft-start
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: flex-end;`. For items that are not children of a flex container, this value is treated like end.
/// @example justify-self: flex-end;
/// @name .k-justify-self-self-end
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
/// @example justify-self: self-start;
/// @name .k-justify-self-selft-start
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
/// @example justify-self: self-end;
/// @name .k-justify-self-self-end
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.
/// @example justify-self: baseline;
/// @name .k-justify-self-baseline
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group.
/// @example justify-self: first baseline;
/// @name .k-justify-self-first-baseline
/// @group justify-self
/// @contextType css

/// This is equivalent to `justify-self: last baseline;`. Specifies participation in last baseline alignment: aligns the alignment baseline of the box's last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.
/// @example justify-self: last baseline;
/// @name .k-justify-self-last-baseline
/// @group justify-self
/// @contextType css

@mixin kendo-utils--flex-grid--justify-self()`

This is equivalent to `justify-self: center;`. The items are packed flush to each other toward the center of the alignment container.




### `.k-justify-self-start`

This is equivalent to `justify-self: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.




### `.k-justify-self-end`

This is equivalent to `justify-self: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.




### `.k-justify-self-selft-start`

This is equivalent to `justify-self: flex-start;`. For items that are not children of a flex container, this value is treated like start.




### `.k-justify-self-self-end`

This is equivalent to `justify-self: flex-end;`. For items that are not children of a flex container, this value is treated like end.




### `.k-justify-self-selft-start`

This is equivalent to `justify-self: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.




### `.k-justify-self-self-end`

This is equivalent to `justify-self: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.




### `.k-justify-self-baseline`

This is equivalent to `justify-self: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-self-first-baseline`

This is equivalent to `justify-self: first baseline;`. Specifies participation in first baseline alignment: aligns the alignment baseline of the box's first baseline set with the corresponding baseline in the shared first baseline set of all the boxes in its baseline-sharing group.




### `.k-justify-self-last-baseline`

This is equivalent to `justify-self: last baseline;`. Specifies participation in last baseline alignment: aligns the alignment baseline of the box's last baseline set with the corresponding baseline in the shared last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for first baseline is start, the one for last baseline is end.




### `.k-list-none`

This is equivalent to `list-style-typ: none;`. No list style is used.




### `.k-list-disc`

This is equivalent to `list-style-typ: disc;`. The marker of list items is a filled circle.




### `.k-list-decimal`

This is equivalent to `list-style-typ: decimal;`.The marker of list items is a number.




### `.k-m-0`

This is equivalent to `margin: 0;`. Specifies 0px margin on all four sides of an element.




### `.k-m-1px`

This is equivalent to `margin: 1px;`. Specifies 1px margin on all four sides of an element.




### `.k-m-1`

This is equivalent to `margin: 0.25rem;`. Specifies 0.25rem margin on all four sides of an element.




### `.k-m--1px`

This is equivalent to `margin: -1px;`. Specifies 1px margin on all four sides of an element.




### `.k-m--1`

This is equivalent to `margin: -0.25rem;`. Specifies 0.25rem margin on all four sides of an element.




### `.k-m-xs`

This is equivalent to `margin: 0.25rem;`. Specifies 0.25rem margin on all four sides of an element.




### `.k-m-sm`

This is equivalent to `margin: 0.5rem;`. Specifies 0.5rem margin on all four sides of an element.




### `.k-m-md`

This is equivalent to `margin: 0.75rem;`. Specifies 0.75rem margin on all four sides of an element.




### `.k-m-lg`

This is equivalent to `margin: 1rem;`. Specifies 1rem margin on all four sides of an element.




### `.k-m-xl`

This is equivalent to `margin: 1.5rem;`. Specifies 1.5rem margin on all four sides of an element.




### `.k-m-thin`

This is equivalent to `margin: 0.125rem;`. Specifies 0.125rem margin on all four sides of an element.




### `.k-m-hair`

This is equivalent to `margin: 1px;`. Specifies 1px margin on all four sides of an element.




### `.k-m-auto`

This is equivalent to `margin: auto;`. The browser selects a suitable margin to use on all four sides of an element.




### `.k-mt-0`

This is equivalent to `margin-top: 0;`. Specifies 0px top margin of an element.




### `.k-mt-1px`

This is equivalent to `margin-top: 1px;`. Specifies 1px top margin of an element.




### `.k-mt-1`

This is equivalent to `margin-top: 0.25rem;`. Specifies 0.25rem top margin of an element.




### `.k-mt--1px`

This is equivalent to `margin-top: -1px;`. Specifies 1px top margin of an element.




### `.k-mt--1`

This is equivalent to `margin-top: -0.25rem;`. Specifies 0.25rem top margin of an element.




### `.k-mt-xs`

This is equivalent to `margin-top: 0.25rem;`. Specifies 0.25rem top margin of an element.




### `.k-mt-sm`

This is equivalent to `margin-top: 0.5rem;`. Specifies 0.5rem top margin of an element.




### `.k-mt-md`

This is equivalent to `margin-top: 0.75rem;`. Specifies 0.75rem top margin of an element.




### `.k-mt-lg`

This is equivalent to `margin-top: 1rem;`. Specifies 1rem top margin of an element.




### `.k-mt-xl`

This is equivalent to `margin-top: 1.5rem;`. Specifies 1.5rem top margin of an element.




### `.k-mt-thin`

This is equivalent to `margin-top: 0.125rem;`. Specifies 0.125rem top margin of an element.




### `.k-mt-hair`

This is equivalent to `margin-top: 1px;`. Specifies 1px top margin of an element.




### `.k-mt-auto`

This is equivalent to `margin-top: auto;`. The browser selects a suitable margin to the top side of an element.




### `.k-mr-0`

This is equivalent to `margin-right: 0;`. Specifies 0px right margin of an element.




### `.k-mr-1px`

This is equivalent to `margin-right: 1px;`. Specifies 1px right margin of an element.




### `.k-mr-1`

This is equivalent to `margin-right: 0.25rem;`. Specifies 0.25rem right margin of an element.




### `.k-mr--1px`

This is equivalent to `margin-right: -1px;`. Specifies 1px right margin of an element.




### `.k-mr--1`

This is equivalent to `margin-right: -0.25rem;`. Specifies 0.25rem right margin of an element.




### `.k-mr-xs`

This is equivalent to `margin-right: 0.25rem;`. Specifies 0.25rem right margin of an element.




### `.k-mr-sm`

This is equivalent to `margin-right: 0.5rem;`. Specifies 0.5rem right margin of an element.




### `.k-mr-md`

This is equivalent to `margin-right: 0.75rem;`. Specifies 0.75rem right margin of an element.




### `.k-mr-lg`

This is equivalent to `margin-right: 1rem;`. Specifies 1rem right margin of an element.




### `.k-mr-xl`

This is equivalent to `margin-right: 1.5rem;`. Specifies 1.5rem right margin of an element.




### `.k-mr-thin`

This is equivalent to `margin-right: 0.125rem;`. Specifies 0.125rem right margin of an element.




### `.k-mr-hair`

This is equivalent to `margin-right: 1px;`. Specifies 1px right margin of an element.




### `.k-mr-auto`

This is equivalent to `margin-right: auto;`. The browser selects a suitable margin to the right side of an element.




### `.k-mb-0`

This is equivalent to `margin-bottom: 0;`. Specifies 0px bottom margin of an element.




### `.k-mb-1px`

This is equivalent to `margin-bottom: 1px;`. Specifies 1px bottom margin of an element.




### `.k-mb-1`

This is equivalent to `margin-bottom: 0.25rem;`. Specifies 0.25rem bottom margin of an element.




### `.k-mb--1px`

This is equivalent to `margin-bottom: -1px;`. Specifies 1px bottom margin of an element.




### `.k-mb--1`

This is equivalent to `margin-bottom: -0.25rem;`. Specifies 0.25rem bottom margin of an element.




### `.k-mb-xs`

This is equivalent to `margin-bottom: 0.25rem;`. Specifies 0.25rem bottom margin of an element.




### `.k-mb-sm`

This is equivalent to `margin-bottom: 0.5rem;`. Specifies 0.5rem bottom margin of an element.




### `.k-mb-md`

This is equivalent to `margin-bottom: 0.75rem;`. Specifies 0.75rem bottom margin of an element.




### `.k-mb-lg`

This is equivalent to `margin-bottom: 1rem;`. Specifies 1rem bottom margin of an element.




### `.k-mb-xl`

This is equivalent to `margin-bottom: 1.5rem;`. Specifies 1.5rem bottom margin of an element.




### `.k-mb-thin`

This is equivalent to `margin-bottom: 0.125rem;`. Specifies 0.125rem bottom margin of an element.




### `.k-mb-hair`

This is equivalent to `margin-bottom: 1px;`. Specifies 1px bottom margin of an element.




### `.k-mb-auto`

This is equivalent to `margin-bottom: auto;`. The browser selects a suitable margin to the bottom side of an element.




### `.k-ml-0`

This is equivalent to `margin-left: 0;`. Specifies 0px left margin of an element.




### `.k-ml-1px`

This is equivalent to `margin-left: 1px;`. Specifies 1px left margin of an element.




### `.k-ml-1`

This is equivalent to `margin-left: 0.25rem;`. Specifies 0.25rem left margin of an element.




### `.k-ml--1px`

This is equivalent to `margin-left: -1px;`. Specifies 1px left margin of an element.




### `.k-ml--1`

This is equivalent to `margin-left: -0.25rem;`. Specifies 0.25rem left margin of an element.




### `.k-ml-xs`

This is equivalent to `margin-left: 0.25rem;`. Specifies 0.25rem left margin of an element.




### `.k-ml-sm`

This is equivalent to `margin-left: 0.5rem;`. Specifies 0.5rem left margin of an element.




### `.k-ml-md`

This is equivalent to `margin-left: 0.75rem;`. Specifies 0.75rem left margin of an element.




### `.k-ml-lg`

This is equivalent to `margin-left: 1rem;`. Specifies 1rem left margin of an element.




### `.k-ml-xl`

This is equivalent to `margin-left: 1.5rem;`. Specifies 1.5rem left margin of an element.




### `.k-ml-thin`

This is equivalent to `margin-left: 0.125rem;`. Specifies 0.125rem left margin of an element.




### `.k-ml-hair`

This is equivalent to `margin-left: 1px;`. Specifies 1px left margin of an element.




### `.k-ml-auto`

This is equivalent to `margin-left: auto;`. The browser selects a suitable margin to the left side of an element.




### `.k-mx-0`

This is equivalent to `margin-inline: 0;`. Specifies 0px inline margin of an element.




### `.k-mx-1px`

This is equivalent to `margin-inline: 1px;`. Specifies 1px inline margin of an element.




### `.k-mx-1`

This is equivalent to `margin-inline: 0.25rem;`. Specifies 0.25rem inline margin of an element.




### `.k-mx--1px`

This is equivalent to `margin-inline: -1px;`. Specifies 1px inline margin of an element.




### `.k-mx--1`

This is equivalent to `margin-inline: -0.25rem;`. Specifies 0.25rem inline margin of an element.




### `.k-mx-xs`

This is equivalent to `margin-inline: 0.25rem;`. Specifies 0.25rem inline margin of an element.




### `.k-mx-sm`

This is equivalent to `margin-inline: 0.5rem;`. Specifies 0.5rem inline margin of an element.




### `.k-mx-md`

This is equivalent to `margin-inline: 0.75rem;`. Specifies 0.75rem inline margin of an element.




### `.k-mx-lg`

This is equivalent to `margin-inline: 1rem;`. Specifies 1rem inline margin of an element.




### `.k-mx-xl`

This is equivalent to `margin-inline: 1.5rem;`. Specifies 1.5rem inline margin of an element.




### `.k-mx-thin`

This is equivalent to `margin-inline: 0.125rem;`. Specifies 0.125rem inline margin of an element.




### `.k-mx-hair`

This is equivalent to `margin-inline: 1px;`. Specifies 1px inline margin of an element.




### `.k-mx-auto`

This is equivalent to `margin-inline: auto;`. The browser selects a suitable margin to the left and right sides of an element.




### `.k-my-0`

This is equivalent to `margin-block: 0;`. Specifies 0px block margin of an element.




### `.k-my-1px`

This is equivalent to `margin-block: 1px;`. Specifies 1px block margin of an element.




### `.k-my-1`

This is equivalent to `margin-block: 0.25rem;`. Specifies 0.25rem block margin of an element.




### `.k-my--1px`

This is equivalent to `margin-block: -1px;`. Specifies 1px block margin of an element.




### `.k-my--1`

This is equivalent to `margin-block: -0.25rem;`. Specifies 0.25rem block margin of an element.




### `.k-my-xs`

This is equivalent to `margin-block: 0.25rem;`. Specifies 0.25rem block margin of an element.




### `.k-my-sm`

This is equivalent to `margin-block: 0.5rem;`. Specifies 0.5rem block margin of an element.




### `.k-my-md`

This is equivalent to `margin-block: 0.75rem;`. Specifies 0.75rem block margin of an element.




### `.k-my-lg`

This is equivalent to `margin-block: 1rem;`. Specifies 1rem block margin of an element.




### `.k-my-xl`

This is equivalent to `margin-block: 1.5rem;`. Specifies 1.5rem block margin of an element.




### `.k-my-thin`

This is equivalent to `margin-block: 0.125rem;`. Specifies 0.125rem block margin of an element.




### `.k-my-hair`

This is equivalent to `margin-block: 1px;`. Specifies 1px block margin of an element.




### `.k-my-auto`

This is equivalent to `margin-block: auto;`. The browser selects a suitable margin to the top and bottom sides of an element.




### `.k-object-fit-contain`

This is equivalent to `object-fit: contain;`. The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box. The entire object is made to fill the box, while preserving its aspect ratio, so the object will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box.




### `.k-object-fit-cover`

This is equivalent to `object-fit: cover;`. The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.




### `.k-object-fit-fill`

This is equivalent to `object-fit: fill;`. The replaced content is sized to fill the element's content box. The entire object will completely fill the box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be stretched to fit.




### `/// This is equivalent to `object-fit: initial;`. Apply the initial value which is the same as the fill value.
/// @example object-fit: initial;
/// @name .k-object-fit-initial
/// @group object-fit
/// @contextType css

/// This is equivalent to `object-fit: none;`. The replaced content is not resized.
/// @example object-fit: none;
/// @name .k-object-fit-none
/// @group object-fit
/// @contextType css

@mixin kendo-utils--layout--object-fit()`

This is equivalent to `object-fit: scale-down;`. The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.




### `.k-object-fit-initial`

This is equivalent to `object-fit: initial;`. Apply the initial value which is the same as the fill value.




### `.k-object-fit-none`

This is equivalent to `object-fit: none;`. The replaced content is not resized.




### `.k-object-position-center`

This is equivalent to `object-position: center;`. This specifies centered alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-top`

This is equivalent to `object-position: top;`. This specifies top alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-right`

This is equivalent to `object-position: right;`. This specifies right alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-bottom`

This is equivalent to `object-position: bottom;`. This specifies bottom alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-left`

This is equivalent to `object-position: left;`. This specifies left alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-top-left`

This is equivalent to `object-position: top left;`. This specifies top left alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-top-right`

This is equivalent to `object-position: top right;`. This specifies top right alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-bottom-left`

This is equivalent to `object-position: bottom left;`. This specifies bottom left alignment of the selected replaced element's contents within the element's box.




### `.k-object-position-bottom-right`

This is equivalent to `object-position: bottom right;`. This specifies bottom right alignment of the selected replaced element's contents within the element's box.




### `.k-opacity-0`

This is equivalent to `opacity: 0;`. Sets zero degree of the opacity of the object. The object is transparent.




### `.k-opacity-1`

This is equivalent to `opacity: 1;`. Sets one degree of the opacity of the object. This is the max value of the opacity and the object is non-transparent.




### `.k-order-first`

This is equivalent to `order: 1;`. An item is in the first ordinal group in a flex or grid container.




### `.k-order-first`

This is equivalent to `order: -9999;`. An item is in the very first ordinal group in a flex or grid container.




### `.k-order-last`

This is equivalent to `order: 9999;`. An item is in the very last ordinal group in a flex or grid container.




### `.k-order-none`

This is equivalent to `order: 0;`.




### `.k-outline-inherit`

This is equivalent to `outline-color: inherit;`. Define the inherited outline color




### `.k-outline-currentColor`

This is equivalent to `outline-color: currentColor;`. Define inherited outline color




### `.k-outline-transparent`

This is equivalent to `outline-color: transparent;`. Define transparent outline color




### `.k-outline-black`

This is equivalent to `outline-color: black;`. Define black outline color




### `.k-outline-white`

This is equivalent to `outline-color: white;`. Define white outline color




### `.k-outline`

This is equivalent to `outline-offset: 1px;`. Sets 1px space between an outline and the edge or border of an element.




### `.k-outline-0`

This is equivalent to `outline-offset: 0;`. Sets 0px space between an outline and the edge or border of an element.




### `.k-outline-2`

This is equivalent to `outline-offset: 2px;`. Sets 2px space between an outline and the edge or border of an element.




### `.k-outline-4`

This is equivalent to `outline-offset: 4px;`. Sets 4px space between an outline and the edge or border of an element.




### `.k-outline-8`

This is equivalent to `outline-offset: 8px;`. Sets 8px space between an outline and the edge or border of an element.




### `.k-outline-solid`

This is equivalent to `outline-style: solid;`. Displays outlines of the elements as single, straight, solid line.




### `.k-outline-dashed`

This is equivalent to `outline-style: dashed;`. Displays outlines of the elements as a series of short square-ended dashes or line segments.




### `.k-outline-dotted`

This is equivalent to `outline-style: dotted;`. Displays outlines of the elements as a series of rounded dots.




### `.k-outline-double`

This is equivalent to `outline-style: double;`. Displays outlines of the elements as two straight lines that add up to the pixel size defined by outline-style.




### `.k-outline-hidden`

This is equivalent to `outline-style: hidden;`. Displays no outline. In the case of table cell and outline collapsing, the hidden value has the highest priority: if any other conflicting outline is set, it won't be displayed.




### `.k-outline-none`

This is equivalent to `outline-style: none;`. Displays no outline. In the case of table cell and outline collapsing, the none value has the lowest priority: if any other conflicting outline is set, it will be displayed.




### `.k-outline`

This is equivalent to `outline-width: 1px;`. Sets 1px width of an element's outline.




### `.k-outline-0`

This is equivalent to `outline-width: 0;`. Sets 0px width of an element's outline.




### `.k-outline-2`

This is equivalent to `outline-width: 2px;`. Sets 2px width of an element's outline.




### `.k-outline-4`

This is equivalent to `outline-width: 4px;`. Sets 4px width of an element's outline.




### `.k-outline-8`

This is equivalent to `outline-width: 8px;`. Sets 8px width of an element's outline.




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




### `.k-p-0`

This is equivalent to `padding: 0;`. Specifies 0px padding on all four sides of an element.




### `.k-p-1px`

This is equivalent to `padding: 1px;`. Specifies 1px padding on all four sides of an element.




### `.k-p-1`

This is equivalent to `padding: 0.25rem;`. Specifies 0.25rem padding on all four sides of an element.




### `.k-p--1px`

This is equivalent to `padding: -1px;`. Specifies 1px padding on all four sides of an element.




### `.k-p--1`

This is equivalent to `padding: -0.25rem;`. Specifies 0.25rem padding on all four sides of an element.




### `.k-p-xs`

This is equivalent to `padding: 0.25rem;`. Specifies 0.25rem padding on all four sides of an element.




### `.k-p-sm`

This is equivalent to `padding: 0.5rem;`. Specifies 0.5rem padding on all four sides of an element.




### `.k-p-pd`

This is equivalent to `padding: 0.75rem;`. Specifies 0.75rem padding on all four sides of an element.




### `.k-p-lg`

This is equivalent to `padding: 1rem;`. Specifies 1rem padding on all four sides of an element.




### `.k-p-xl`

This is equivalent to `padding: 1.5rem;`. Specifies 1.5rem padding on all four sides of an element.




### `.k-p-thin`

This is equivalent to `padding: 0.125rem;`. Specifies 0.125rem padding on all four sides of an element.




### `.k-p-hair`

This is equivalent to `padding: 1px;`. Specifies 1px padding on all four sides of an element.




### `.k-p-auto`

This is equivalent to `padding: auto;`. The browser selects a suitable padding to use on all four sides of an element.




### `.k-pt-0`

This is equivalent to `padding-top: 0;`. Specifies 0px top padding of an element.




### `.k-pt-1px`

This is equivalent to `padding-top: 1px;`. Specifies 1px top padding of an element.




### `.k-pt-1`

This is equivalent to `padding-top: 0.25rem;`. Specifies 0.25rem top padding of an element.




### `.k-pt--1px`

This is equivalent to `padding-top: -1px;`. Specifies 1px top padding of an element.




### `.k-pt--1`

This is equivalent to `padding-top: -0.25rem;`. Specifies 0.25rem top padding of an element.




### `.k-pt-xs`

This is equivalent to `padding-top: 0.25rem;`. Specifies 0.25rem top padding of an element.




### `.k-pt-sm`

This is equivalent to `padding-top: 0.5rem;`. Specifies 0.5rem top padding of an element.




### `.k-pt-md`

This is equivalent to `padding-top: 0.75rem;`. Specifies 0.75rem top padding of an element.




### `.k-pt-lg`

This is equivalent to `padding-top: 1rem;`. Specifies 1rem top padding of an element.




### `.k-pt-xl`

This is equivalent to `padding-top: 1.5rem;`. Specifies 1.5rem top padding of an element.




### `.k-pt-thin`

This is equivalent to `padding-top: 0.125rem;`. Specifies 0.125rem top padding of an element.




### `.k-pt-hair`

This is equivalent to `padding-top: 1px;`. Specifies 1px top padding of an element.




### `.k-pt-auto`

This is equivalent to `padding-top: auto;`. The browser selects a suitable padding to the top side of an element.




### `.k-pr-0`

This is equivalent to `padding-right: 0;`. Specifies 0px right padding of an element.




### `.k-pr-1px`

This is equivalent to `padding-right: 1px;`. Specifies 1px right padding of an element.




### `.k-pr-1`

This is equivalent to `padding-right: 0.25rem;`. Specifies 0.25rem right padding of an element.




### `.k-pr--1px`

This is equivalent to `padding-right: -1px;`. Specifies 1px right padding of an element.




### `.k-pr--1`

This is equivalent to `padding-right: -0.25rem;`. Specifies 0.25rem right padding of an element.




### `.k-pr-xs`

This is equivalent to `padding-right: 0.25rem;`. Specifies 0.25rem right padding of an element.




### `.k-pr-sm`

This is equivalent to `padding-right: 0.5rem;`. Specifies 0.5rem right padding of an element.




### `.k-pr-md`

This is equivalent to `padding-right: 0.75rem;`. Specifies 0.75rem right padding of an element.




### `.k-pr-lg`

This is equivalent to `padding-right: 1rem;`. Specifies 1rem right padding of an element.




### `.k-pr-xl`

This is equivalent to `padding-right: 1.5rem;`. Specifies 1.5rem right padding of an element.




### `.k-pr-thin`

This is equivalent to `padding-right: 0.125rem;`. Specifies 0.125rem right padding of an element.




### `.k-pr-hair`

This is equivalent to `padding-right: 1px;`. Specifies 1px right padding of an element.




### `.k-pr-auto`

This is equivalent to `padding-right: auto;`. The browser selects a suitable padding to the right side of an element.




### `.k-pb-0`

This is equivalent to `padding-bottom: 0;`. Specifies 0px bottom padding of an element.




### `.k-pb-1px`

This is equivalent to `padding-bottom: 1px;`. Specifies 1px bottom padding of an element.




### `.k-pb-1`

This is equivalent to `padding-bottom: 0.25rem;`. Specifies 0.25rem bottom padding of an element.




### `.k-pb--1px`

This is equivalent to `padding-bottom: -1px;`. Specifies 1px bottom padding of an element.




### `.k-pb--1`

This is equivalent to `padding-bottom: -0.25rem;`. Specifies 0.25rem bottom padding of an element.




### `.k-pb-xs`

This is equivalent to `padding-bottom: 0.25rem;`. Specifies 0.25rem bottom padding of an element.




### `.k-pb-sm`

This is equivalent to `padding-bottom: 0.5rem;`. Specifies 0.5rem bottom padding of an element.




### `.k-pb-md`

This is equivalent to `padding-bottom: 0.75rem;`. Specifies 0.75rem bottom padding of an element.




### `.k-pb-lg`

This is equivalent to `padding-bottom: 1rem;`. Specifies 1rem bottom padding of an element.




### `.k-pb-xl`

This is equivalent to `padding-bottom: 1.5rem;`. Specifies 1.5rem bottom padding of an element.




### `.k-pb-thin`

This is equivalent to `padding-bottom: 0.125rem;`. Specifies 0.125rem bottom padding of an element.




### `.k-pb-hair`

This is equivalent to `padding-bottom: 1px;`. Specifies 1px bottom padding of an element.




### `.k-pb-auto`

This is equivalent to `padding-bottom: auto;`. The browser selects a suitable padding to the bottom side of an element.




### `.k-pl-0`

This is equivalent to `padding-left: 0;`. Specifies 0px left padding of an element.




### `.k-pl-1px`

This is equivalent to `padding-left: 1px;`. Specifies 1px left padding of an element.




### `.k-pl-1`

This is equivalent to `padding-left: 0.25rem;`. Specifies 0.25rem left padding of an element.




### `.k-pl--1px`

This is equivalent to `padding-left: -1px;`. Specifies 1px left padding of an element.




### `.k-pl--1`

This is equivalent to `padding-left: -0.25rem;`. Specifies 0.25rem left padding of an element.




### `.k-pl-xs`

This is equivalent to `padding-left: 0.25rem;`. Specifies 0.25rem left padding of an element.




### `.k-pl-sm`

This is equivalent to `padding-left: 0.5rem;`. Specifies 0.5rem left padding of an element.




### `.k-pl-md`

This is equivalent to `padding-left: 0.75rem;`. Specifies 0.75rem left padding of an element.




### `.k-pl-lg`

This is equivalent to `padding-left: 1rem;`. Specifies 1rem left padding of an element.




### `.k-pl-xl`

This is equivalent to `padding-left: 1.5rem;`. Specifies 1.5rem left padding of an element.




### `.k-pl-thin`

This is equivalent to `padding-left: 0.125rem;`. Specifies 0.125rem left padding of an element.




### `.k-pl-hair`

This is equivalent to `padding-left: 1px;`. Specifies 1px left padding of an element.




### `.k-pl-auto`

This is equivalent to `padding-left: auto;`. The browser selects a suitable padding to the left side of an element.




### `.k-px-0`

This is equivalent to `padding-inline: 0;`. Specifies 0px inline padding of an element.




### `.k-px-1px`

This is equivalent to `padding-inline: 1px;`. Specifies 1px inline padding of an element.




### `.k-px-1`

This is equivalent to `padding-inline: 0.25rem;`. Specifies 0.25rem inline padding of an element.




### `.k-px--1px`

This is equivalent to `padding-inline: -1px;`. Specifies 1px inline padding of an element.




### `.k-px--1`

This is equivalent to `padding-inline: -0.25rem;`. Specifies 0.25rem inline padding of an element.




### `.k-px-xs`

This is equivalent to `padding-inline: 0.25rem;`. Specifies 0.25rem inline padding of an element.




### `.k-px-sm`

This is equivalent to `padding-inline: 0.5rem;`. Specifies 0.5rem inline padding of an element.




### `.k-px-md`

This is equivalent to `padding-inline: 0.75rem;`. Specifies 0.75rem inline padding of an element.




### `.k-px-lg`

This is equivalent to `padding-inline: 1rem;`. Specifies 1rem inline padding of an element.




### `.k-px-xl`

This is equivalent to `padding-inline: 1.5rem;`. Specifies 1.5rem inline padding of an element.




### `.k-px-thin`

This is equivalent to `padding-inline: 0.125rem;`. Specifies 0.125rem inline padding of an element.




### `.k-px-hair`

This is equivalent to `padding-inline: 1px;`. Specifies 1px inline padding of an element.




### `.k-px-auto`

This is equivalent to `padding-inline: auto;`. The browser selects a suitable padding to the left and right sides of an element.




### `.k-py-0`

This is equivalent to `padding-block: 0;`. Specifies 0px block padding of an element.




### `.k-py-1px`

This is equivalent to `padding-block: 1px;`. Specifies 1px block padding of an element.




### `.k-py-1`

This is equivalent to `padding-block: 0.25rem;`. Specifies 0.25rem block padding of an element.




### `.k-py--1px`

This is equivalent to `padding-block: -1px;`. Specifies 1px block padding of an element.




### `.k-py--1`

This is equivalent to `padding-block: -0.25rem;`. Specifies 0.25rem block padding of an element.




### `.k-py-xs`

This is equivalent to `padding-block: 0.25rem;`. Specifies 0.25rem block padding of an element.




### `.k-py-sm`

This is equivalent to `padding-block: 0.5rem;`. Specifies 0.5rem block padding of an element.




### `.k-py-md`

This is equivalent to `padding-block: 0.75rem;`. Specifies 0.75rem block padding of an element.




### `.k-py-lg`

This is equivalent to `padding-block: 1rem;`. Specifies 1rem block padding of an element.




### `.k-py-xl`

This is equivalent to `padding-block: 1.5rem;`. Specifies 1.5rem block padding of an element.




### `.k-py-thin`

This is equivalent to `padding-block: 0.125rem;`. Specifies 0.125rem block padding of an element.




### `.k-py-hair`

This is equivalent to `padding-block: 1px;`. Specifies 1px block padding of an element.




### `.k-py-auto`

This is equivalent to `padding-block: auto;`. The browser selects a suitable padding to the top and bottom sides of an element.




### `.k-place-content-normal`

This is equivalent to `place-content: normal;`. Defines the default placing for all items of the box, giving them all a default way of justifying each box along the appropriate axis. The effect of this keyword is dependent of the layout mode we are in: 1) In block-level layouts, the keyword is a synonym of start. 2) In absolutely-positioned layouts, the keyword behaved like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes. 3) In table cell layouts, this keyword has no meaning as this property is ignored. 4) In flexbox layouts, this keyword has no meaning as this property is ignored. 5) In grid layouts, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start.




### `.k-place-content-stretch`

This is equivalent to `place-content: stretch;`. If the combined size of the items is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container.




### `/// This is equivalent to `place-content: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
/// @example place-content: start;
/// @name .k-place-content-start
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
/// @example place-content: end;
/// @name .k-place-content-end
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: flex-start;`. For items that are not children of a flex container, this value is treated like start.
/// @example place-content: flex-start;
/// @name .k-place-content-selft-start
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: flex-end;`. For items that are not children of a flex container, this value is treated like end.
/// @example place-content: flex-end;
/// @name .k-place-content-self-end
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
/// @example place-content: self-start;
/// @name .k-place-content-selft-start
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
/// @example place-content: self-end;
/// @name .k-place-content-self-end
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.
/// @example place-content: baseline;
/// @name .k-place-content-baseline
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: space-between;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
/// @example place-content: space-between;
/// @name .k-place-content-between
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: space-around;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
/// @example place-content: space-around;
/// @name .k-place-content-around
/// @group place-content
/// @contextType css

/// This is equivalent to `place-content: space-evenly;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
/// @example place-content: space-evenly;
/// @name .k-place-content-evenly
/// @group place-content
/// @contextType css

@mixin kendo-utils--flex-grid--place-content()`

This is equivalent to `place-content: center;`. The items are packed flush to each other toward the center of the alignment container.




### `.k-place-content-start`

This is equivalent to `place-content: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.




### `.k-place-content-end`

This is equivalent to `place-content: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.




### `.k-place-content-selft-start`

This is equivalent to `place-content: flex-start;`. For items that are not children of a flex container, this value is treated like start.




### `.k-place-content-self-end`

This is equivalent to `place-content: flex-end;`. For items that are not children of a flex container, this value is treated like end.




### `.k-place-content-selft-start`

This is equivalent to `place-content: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.




### `.k-place-content-self-end`

This is equivalent to `place-content: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.




### `.k-place-content-baseline`

This is equivalent to `place-content: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-place-content-between`

This is equivalent to `place-content: space-between;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.




### `.k-place-content-around`

This is equivalent to `place-content: space-around;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.




### `.k-place-content-evenly`

This is equivalent to `place-content: space-evenly;`. The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.




### `.k-place-items-normal`

This is equivalent to `place-items: normal;`. Defines the default placing for all items of the box, giving them all a default way of justifying each box along the appropriate axis. The effect of this keyword is dependent of the layout mode we are in: 1) In block-level layouts, the keyword is a synonym of start. 2) In absolutely-positioned layouts, the keyword behaved like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes. 3) In table cell layouts, this keyword has no meaning as this property is ignored. 4) In flexbox layouts, this keyword has no meaning as this property is ignored. 5) In grid layouts, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start.




### `.k-place-items-stretch`

This is equivalent to `place-items: stretch;`. If the combined size of the items is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container.




### `/// This is equivalent to `place-items: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
/// @example place-items: start;
/// @name .k-place-items-start
/// @group place-items
/// @contextType css

/// This is equivalent to `place-items: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
/// @example place-items: end;
/// @name .k-place-items-end
/// @group place-items
/// @contextType css

/// This is equivalent to `place-items: flex-start;`. For items that are not children of a flex container, this value is treated like start.
/// @example place-items: flex-start;
/// @name .k-place-items-flex-start
/// @group place-items
/// @contextType css

/// This is equivalent to `place-items: flex-end;`. For items that are not children of a flex container, this value is treated like end.
/// @example place-items: flex-end;
/// @name .k-place-items-flex-end
/// @group place-items
/// @contextType css

/// This is equivalent to `place-items: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
/// @example place-items: self-start;
/// @name .k-place-items-self-start
/// @group place-items
/// @contextType css

/// This is equivalent to `place-items: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
/// @example place-items: self-end;
/// @name .k-place-items-self-end
/// @group place-items
/// @contextType css

/// This is equivalent to `place-items: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.
/// @example place-items: baseline;
/// @name .k-place-items-baseline
/// @group place-items
/// @contextType css

@mixin kendo-utils--flex-grid--place-items()`

This is equivalent to `place-items: center;`. The items are packed flush to each other toward the center of the alignment container.




### `.k-place-items-start`

This is equivalent to `place-items: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.




### `.k-place-items-end`

This is equivalent to `place-items: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.




### `.k-place-items-flex-start`

This is equivalent to `place-items: flex-start;`. For items that are not children of a flex container, this value is treated like start.




### `.k-place-items-flex-end`

This is equivalent to `place-items: flex-end;`. For items that are not children of a flex container, this value is treated like end.




### `.k-place-items-self-start`

This is equivalent to `place-items: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.




### `.k-place-items-self-end`

This is equivalent to `place-items: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.




### `.k-place-items-baseline`

This is equivalent to `place-items: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-place-self-auto`

This is equivalent to `place-self: auto;`. This property sets the way a box is justified inside its alignment container along the appropriate axis. The value used is the value of the justify-items property of the parents box, unless the box has no parent, or is absolutely positioned, in these cases, auto represents normal.




### `.k-place-self-normal`

This is equivalent to `place-self: normal;`. This property sets the way a box is justified inside its alignment container along the appropriate axis. This property can take one of three different forms: 1) Basic keywords: one of the keyword values normal, auto, or stretch. 2) Baseline alignment: the baseline keyword, plus optionally one of first or last. 3) Positional alignment: a) one of: center, start, end, flex-start, flex-end, self-start, self-end, left, or right. b) Plus optionally safe or unsafe.




### `.k-place-self-stretch`

This is equivalent to `place-self: stretch;`. If the combined size of the items is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container.




### `/// This is equivalent to `place-self: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
/// @example place-self: start;
/// @name .k-place-self-start
/// @group place-self
/// @contextType css

/// This is equivalent to `place-self: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
/// @example place-self: end;
/// @name .k-place-self-end
/// @group place-self
/// @contextType css

/// This is equivalent to `place-self: flex-start;`. For items that are not children of a flex container, this value is treated like start.
/// @example place-self: flex-start;
/// @name .k-place-self-flex-start
/// @group place-self
/// @contextType css

/// This is equivalent to `place-self: flex-end;`. For items that are not children of a flex container, this value is treated like end.
/// @example place-self: flex-end;
/// @name .k-place-self-flex-end
/// @group place-self
/// @contextType css

/// This is equivalent to `place-self: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
/// @example place-self: self-start;
/// @name .k-place-self-self-start
/// @group place-self
/// @contextType css

/// This is equivalent to `place-self: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
/// @example place-self: self-end;
/// @name .k-place-self-self-end
/// @group place-self
/// @contextType css

/// This is equivalent to `place-self: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.
/// @example place-self: baseline;
/// @name .k-place-self-baseline
/// @group place-self
/// @contextType css

@mixin kendo-utils--flex-grid--place-self()`

This is equivalent to `place-self: center;`. The items are packed flush to each other toward the center of the alignment container.




### `.k-place-self-start`

This is equivalent to `place-self: start;`. The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.




### `.k-place-self-end`

This is equivalent to `place-self: end;`. The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.




### `.k-place-self-flex-start`

This is equivalent to `place-self: flex-start;`. For items that are not children of a flex container, this value is treated like start.




### `.k-place-self-flex-end`

This is equivalent to `place-self: flex-end;`. For items that are not children of a flex container, this value is treated like end.




### `.k-place-self-self-start`

This is equivalent to `place-self: self-start;`. The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.




### `.k-place-self-self-end`

This is equivalent to `place-self: self-end;`. The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.




### `.k-place-self-baseline`

This is equivalent to `place-self: baseline;`. Specifies participation in baseline alignment: aligns the alignment baseline of the box's baseline set with the corresponding baseline in the shared baseline set of all the boxes in its baseline-sharing group.




### `.k-pointer-events-none`

This is equivalent to `pointer-events: none;`. The element is never the target of pointer events; however, pointer events may target its descendant elements if those descendants have pointer-events set to some other value. In these circumstances, pointer events will trigger event listeners on this parent element as appropriate on their way to/from the descendant during the event capture/bubble phases.




### `.k-pointer-events-auto`

This is equivalent to `pointer-events: auto;`. The element behaves as it would if the pointer-events property were not specified. In SVG content, this value and the value visiblePainted have the same effect.




### `.k-top-0`

This is equivalent to `top: 0;`.




### `.k-right-0`

This is equivalent to `right: 0;`.




### `.k-bottom-0`

This is equivalent to `bottom: 0;`.




### `.k-left-0`

This is equivalent to `left: 0;`.




### `.k-pos-top-0`

This is equivalent to `top: 0;`.




### `.k-pos-right-0`

This is equivalent to `right: 0;`.




### `.k-pos-bottom-0`

This is equivalent to `bottom: 0;`.




### `.k-pos-left-0`

This is equivalent to `left: 0;`.




### `.k-top-left-0`

This is equivalent to `top: 0; left: 0;`.




### `.k-top-left-0`

This is equivalent to `top: 0; right: 0;`.




### `.k-top-left-0`

This is equivalent to `bottom: 0; left: 0;`.




### `.k-top-left-0`

This is equivalent to `bottom: 0; right: 0;`.




### `.k-inset-0`

This is equivalent to `inset: 0;`.This is a shorthand that corresponds to the top: 0; right: 0; bottom: 0; and/or left: 0 properties. It has the same multi-value syntax of the margin shorthand.




### `.k-inset-x-0`

This is equivalent to `inset-inline: 0;`. This defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the "right: 0; left: 0", or "top: 0; bottom: 0" properties depending on the values defined for writing-mode, direction, and text-orientation.




### `.k-inset-x-0`

This is equivalent to `inset-inline: 0;`. The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the "top: 0; bottom: 0", or "right: 0; left: 0" properties depending on the values defined for writing-mode, direction, and text-orientation.




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




### `.k-scroll-y-1`

This is equivalent to `scroll-padding-block: 0.25rem;`. Sets block scroll padding outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-auto`

This is equivalent to `scroll-behavior: auto;`. The scrolling box scrolls instantly.




### `.k-scroll-smooth`

This is equivalent to `scroll-behavior: smooth;`. The scrolling box scrolls in a smooth fashion using a user-agent-defined timing function over a user-agent-defined period of time. User agents should follow platform conventions, if any.




### `.k-scroll-snap-snap-x`

This is equivalent to `scroll-snap-type: x var(--k-scroll-snap-strictness);`. The scroll container snaps to snap positions in its horizontal axis only. Value of the --k-scroll-snap-strictness custom property is set by .k-scroll-snap-mandatory and .k-scroll-snap-proximity classes.




### `.k-scroll-snap-snap-y`

This is equivalent to `scroll-snap-type: y var(--k-scroll-snap-strictness);`. The scroll container snaps to snap positions in its vertical axis only. Value of the --k-scroll-snap-strictness custom property is set by .k-scroll-snap-mandatory and .k-scroll-snap-proximity classes.




### `.k-scroll-snap-mandatory`

This is equivalent to `--k-scroll-snap-strictness: mandatory;`. This set strictness of the snap point when scroll snap type is set. The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.




### `.k-scroll-snap-proximity`

This is equivalent to `--k-scroll-snap-strictness: proximity;`. This set strictness of the snap point when scroll snap type is set. The visual viewport of this scroll container may come to rest on a snap point if it isn't currently scrolled considering the user agent's scroll parameters. If content is added, moved, deleted or resized the scroll offset may be adjusted to maintain the resting on that snap point.




### `.k-scroll-snap-stop-normal`

This is equivalent to `scroll-snap-stop: normal;`. When the visual viewport of this element's scroll container is scrolled, it may "pass over" possible snap positions. The effect of this property can be noticed on devices with a touchpad.




### `.k-scroll-snap-stop-always`

This is equivalent to `scroll-snap-stop: always;`. The scroll container must not "pass over" a possible snap position; and must snap to the first of this elements' snap positions. The effect of this property can be noticed on devices with a touchpad.




### `.k-scroll-snap-align-start`

This is equivalent to `scroll-snap-align: start;`. The start alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.




### `.k-scroll-snap-align-end`

This is equivalent to `scroll-snap-align: end;`. The end alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.




### `.k-scroll-snap-align-center`

This is equivalent to `scroll-snap-align: center;`. The center alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.




### `.k-scroll-snap-align-none`

This is equivalent to `scroll-snap-align: none;`. The box does not define a snap position in that axis.




### `.k-scroll-m-0`

This is equivalent to `scroll-margin: 0;`. Sets 0px margin outset from the corresponding edge of the scroll container.




### `.k-scroll-m-1px`

This is equivalent to `scroll-margin: 1px;`. Sets 1px margin outset from the corresponding edge of the scroll container.




### `.k-scroll-m-1`

This is equivalent to `scroll-margin: 0.25rem;`. Sets 0.25rem margin outset from the corresponding edge of the scroll container.




### `.k-scroll-m-0`

This is equivalent to `scroll-margin-top: 0;`. Sets all of the scroll margin outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-m-1px`

This is equivalent to `scroll-margin-top: 1px;`. Sets all of the scroll margin outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-m-1`

This is equivalent to `scroll-margin-top: 0.25rem;`. Sets all of the scroll margin outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-mr-0`

This is equivalent to `scroll-margin-right: 0;`. Sets the right scroll margin outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-mr-1px`

This is equivalent to `scroll-margin-right: 1px;`. Sets the right scroll margin outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-mr-1`

This is equivalent to `scroll-margin-right: 0.25rem;`. Sets the right scroll margin outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-mb-0`

This is equivalent to `scroll-margin-bottom: 0;`. Sets the bottom scroll margin outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-mb-1px`

This is equivalent to `scroll-margin-bottom: 1px;`. Sets the bottom scroll margin outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-mb-1`

This is equivalent to `scroll-margin-bottom: 0.25rem;`. Sets the bottom scroll margin outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-ml-0`

This is equivalent to `scroll-margin-left: 0;`. Sets the left scroll margin outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-ml-1px`

This is equivalent to `scroll-margin-left: 1px;`. Set the left scroll margin outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-ml-1`

This is equivalent to `scroll-margin-left: 0.25rem;`. Sets the left scroll margin outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-x-0`

This is equivalent to `scroll-margin-inline: 0;`. Sets inline margin outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-x-1px`

This is equivalent to `scroll-margin-inline: 1px;`. Sets inline scroll margin outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-x-1`

This is equivalent to `scroll-margin-inline: 0.25rem;`. Sets inline scroll margin outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-y-0`

This is equivalent to `scroll-margin-block: 0;`. Sets block margin outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-y-1px`

This is equivalent to `scroll-margin-block: 1px;`. Sets block scroll margin outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-y-1`

This is equivalent to `scroll-margin-block: 0.25rem;`. Sets block scroll margin outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-p-0`

This is equivalent to `scroll-padding: 0;`. Sets 0px padding outset from the corresponding edge of the scroll container.




### `.k-scroll-p-1px`

This is equivalent to `scroll-padding: 1px;`. Sets 1px padding outset from the corresponding edge of the scroll container.




### `.k-scroll-p-1`

This is equivalent to `scroll-padding: 0.25rem;`. Sets 0.25rem padding outset from the corresponding edge of the scroll container.




### `.k-scroll-p-0`

This is equivalent to `scroll-padding-top: 0;`. Sets all of the scroll padding outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-p-1px`

This is equivalent to `scroll-padding-top: 1px;`. Sets all of the scroll padding outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-p-1`

This is equivalent to `scroll-padding-top: 0.25rem;`. Sets all of the scroll padding outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-pr-0`

This is equivalent to `scroll-padding-right: 0;`. Sets the right scroll padding outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-pr-1px`

This is equivalent to `scroll-padding-right: 1px;`. Sets the right scroll padding outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-pr-1`

This is equivalent to `scroll-padding-right: 0.25rem;`. Sets the right scroll padding outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-pb-0`

This is equivalent to `scroll-padding-bottom: 0;`. Sets the bottom scroll padding outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-pb-1px`

This is equivalent to `scroll-padding-bottom: 1px;`. Sets the bottom scroll padding outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-pb-1`

This is equivalent to `scroll-padding-bottom: 0.25rem;`. Sets the bottom scroll padding outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-pl-0`

This is equivalent to `scroll-padding-left: 0;`. Sets the left scroll padding outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-pl-1px`

This is equivalent to `scroll-padding-left: 1px;`. Set the left scroll padding outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-pl-1`

This is equivalent to `scroll-padding-left: 0.25rem;`. Sets the left scroll padding outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-x-0`

This is equivalent to `scroll-padding-inline: 0;`. Sets inline padding outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-x-1px`

This is equivalent to `scroll-padding-inline: 1px;`. Sets inline scroll padding outset from the corresponding edge of the scroll container to 1px.




### `.k-scroll-x-1`

This is equivalent to `scroll-padding-inline: 0.25rem;`. Sets inline scroll padding outset from the corresponding edge of the scroll container to 0.25rem.




### `.k-scroll-y-0`

This is equivalent to `scroll-padding-block: 0;`. Sets block padding outset from the corresponding edge of the scroll container to zero.




### `.k-scroll-y-1px`

This is equivalent to `scroll-padding-block: 1px;`. Sets block scroll padding outset from the corresponding edge of the scroll container to 1px.




### `.k-skew-x-0`

This is equivalent to `transform: skewX(0deg);`. Defines 0deg transformation in the x-axis direction that skews an element on the 2D plane.




### `.k-skew-x-1`

This is equivalent to `transform: skewX(1deg);`. Defines 1deg transformation in the x-axis direction that skews an element on the 2D plane.




### `.k-skew-y-1`

This is equivalent to `transform: skewY(1deg);`. Defines 1deg transformation in the y-axis direction that skews an element on the 2D plane.




### `.k-stroke-none`

This is equivalent to `stroke: none;`. SVG shape stroke color will not be overriden.




### `.k-stroke-inherit`

This is equivalent to `stroke: inherit;`. Sets inherited stroke color of a SVG shape.




### `.k-stroke-currentColor`

This is equivalent to `stroke: currentColor;`. Sets element's color as stroke color of a SVG shape.




### `.k-stroke-transparent`

This is equivalent to `stroke: transparent;`. Sets transparent stroke color of a SVG shape.




### `.k-stroke-black`

This is equivalent to `stroke: black;`. Sets black stroke color of a SVG shape.




### `.k-stroke-white`

This is equivalent to `stroke: white;`. Sets white stroke color of a SVG shape.




### `.k-table-auto`

This is equivalent to `table-layout: auto;`. By default, most browsers use an automatic table layout algorithm. The widths of the table and its cells are adjusted to fit the content.




### `.k-table-fixed`

This is equivalent to `table-layout: fixed;`. Table and column widths are set by the widths of table and col elements or by the width of the first row of cells. Cells in subsequent rows do not affect column widths.




### `.k-text-left`

This is equivalent to `text-align: left;`. The inline contents are aligned to the left edge of the line box.




### `.k-text-right`

This is equivalent to `text-align: right;`. The inline contents are aligned to the right edge of the line box.




### `.k-text-center`

This is equivalent to `text-align: center;`. The inline contents are centered within the line box.




### `.k-text-justify`

This is equivalent to `text-align: justify;`. The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.




### `.k-left`

This is equivalent to `text-align: left;`. The inline contents are aligned to the left edge of the line box.




### `.k-right`

This is equivalent to `text-align: right;`. The inline contents are aligned to the right edge of the line box.




### `.k-center`

This is equivalent to `text-align: center;`. The inline contents are centered within the line box.




### `.k-justify`

This is equivalent to `text-align: justify;`. The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.




### `.k-start`

This is equivalent to `text-align: start;`. The same as left if direction is left-to-right and right if direction is right-to-left.




### `.k-end`

This is equivalent to `text-align: end;`. The same as right if direction is left-to-right and left if direction is right-to-left.




### `.k-underline`

This is equivalent to `text-decoration: underline;`. Text of the content is underlined.




### `.k-overline`

This is equivalent to `text-decoration: overline;`. Text of the content is overlined.




### `.k-line-through`

This is equivalent to `text-decoration: line-through;`. Text of the content is strikeout.




### `.k-none-decoration`

This is equivalent to `text-decoration: none-decoration;`. Text of the content is not decorated.




### `.k-text-clip`

This is equivalent to `text-overflow: clip;`. This keyword value will truncate the text at the limit of the content area, therefore the truncation can happen in the middle of a character. To clip at the transition between characters you can specify text-overflow as an empty string, if that is supported in your target browsers: text-overflow: '';.




### `.k-text-ellipsis`

This is equivalent to `text-overflow: ellipsis; white-space: nowrap; overflow: hidden;`. This keyword value will display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) to represent clipped text. The ellipsis is displayed inside the content area, decreasing the amount of text displayed. If there is not enough space to display the ellipsis, it is clipped.




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




### `.k-touch-action-pan-x`

This is equivalent to `touch-action: pan-x;`. Enable single-finger horizontal panning gestures. May be combined with pan-y, pan-up, pan-down and/or pinch-zoom.




### `.k-touch-action-pan-y`

This is equivalent to `touch-action: pan-y;`. Enable single-finger vertical panning gestures. May be combined with pan-x, pan-left, pan-right and/or pinch-zoom.




### `.k-touch-action-pan-left`

This is equivalent to `touch-action: pan-left;`. Enable single-finger gestures that begin by scrolling in the left direction(s).




### `.k-touch-action-pan-right`

This is equivalent to `touch-action: pan-right;`. Enable single-finger gestures that begin by scrolling in the right direction(s).




### `.k-touch-action-pan-up`

This is equivalent to `touch-action: pan-up;`. Enable single-finger gestures that begin by scrolling in the up direction(s).




### `.k-touch-action-pan-down`

This is equivalent to `touch-action: pan-down;`. Enable single-finger gestures that begin by scrolling in the down direction(s).




### `.k-touch-action-pinch-zoom`

This is equivalent to `touch-action: pinch-zoom;`. Enable multi-finger panning and zooming of the page. This may be combined with any of the pan- values.




### `.k-touch-action-manipulation`

This is equivalent to `touch-action: manipulation;`. Enable panning and pinch zoom gestures, but disable additional non-standard gestures such as double-tap to zoom. Disabling double-tap to zoom removes the need for browsers to delay the generation of click events when the user taps the screen. This is an alias for "pan-x pan-y pinch-zoom" (which, for compatibility, is itself still valid).




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




### `.origin-center`

This is equivalent to `transform-origin: center;`. Sets the origin for an element's transformations to be in the center.




### `.origin-top`

This is equivalent to `transform-origin: top;`. Sets the origin for an element's transformations to be in the top.




### `.origin-right`

This is equivalent to `transform-origin: right;`. Sets the origin for an element's transformations to be in the right.




### `.origin-bottom`

This is equivalent to `transform-origin: bottom;`. Sets the origin for an element's transformations to be in the bottom.




### `.origin-left`

This is equivalent to `transform-origin: left;`. Sets the origin for an element's transformations to be in the left.




### `.origin-top-left`

This is equivalent to `transform-origin: top-left;`. Sets the origin for an element's transformations to be in the top-left.




### `.origin-top-right`

This is equivalent to `transform-origin: top-right;`. Sets the origin for an element's transformations to be in the top-right.




### `.origin-bottom-left`

This is equivalent to `transform-origin: bottom-left;`. Sets the origin for an element's transformations to be in the bottom-left.




### `.origin-bottom-right`

This is equivalent to `transform-origin: bottom-right;`. Sets the origin for an element's transformations to be in the bottom-right.




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




### `.k-visible`

This is equivalent to `visibility: visble;`. The element box is visible.




### `.k-invisible`

This is equivalent to `visibility: hidden;`. The element box is invisible (not drawn), but still affects layout as normal. Descendants of the element will be visible if they have visibility set to visible.




### `.k-collapse`

This is equivalent to `visibility: collapse;`. The collapse keyword has different effects for different elements: For <table> rows, columns, column groups, and row groups, the row(s) or column(s) are hidden and the space they would have occupied is removed (as if display: none were applied to the column/row of the table). However, the size of other rows and columns is still calculated as though the cells in the collapsed row(s) or column(s) are present. This value allows for the fast removal of a row or column from a table without forcing the recalculation of widths and heights for the entire table. Collapsed flex items and ruby annotations are hidden, and the space they would have occupied is removed. For other elements, collapse is treated the same as hidden.




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




### `.k-w-0`

This is equivalent to `width: 0;`. Specifies 0px width of an element.




### `.k-w-1px`

This is equivalent to `width: 1px;`. Specifies 1px width of an element.




### `.k-w-1`

This is equivalent to `width: 0.25rem;`. Specifies 0.25rem width of an element.




### `.k-w-full`

This is equivalent to `min-width: 100%;`. Specifies element's width as 100% of the containing block's width.




### `.k-w-screen`

This is equivalent to `width: 100vh;`. Specifies 0.25rem width of an element.




### `.k-w-screen`

This is equivalent to `width: 100vh;`. Specifies  element's width to be the same as the viewport width.




### `.k-w-min`

This is equivalent to `width: min-content;`. Specifies the intrinsic minimum width of the element.




### `.k-w-max`

This is equivalent to `width: max-content;`. Specifies the intrinsic preferred width of the element.




### `.k-w-fit`

This is equivalent to `width: fit-content;`. width of the element will use the available space, but never more than max-content




### `.k-min-w-0`

This is equivalent to `min-width: 0;`. Specifies 0px minimum width of an element.




### `.k-min-w-1px`

This is equivalent to `min-width: 1px;`. Specifies 1px minimum width of an element.




### `.k-min-w-1`

This is equivalent to `min-width: 0.25rem;`. Specifies 0.25rem minimum width of an element.




### `.k-min-w-full`

This is equivalent to `min-width: 100%;`. Specifies minimum element's width as 100% of the containing block's width.




### `.k-min-w-screen`

This is equivalent to `min-width: 100vh;`. Specifies minimum element's width to be as the viewport width.




### `.k-min-w-min`

This is equivalent to `min-width: min-content;`. Specifies minimum element's width to be as the intrinsic width of the element.




### `.k-min-w-max`

This is equivalent to `min-width: max-content;`. Specifies minimum element's width to be as the preferred width of the element.




### `.k-min-w-fit`

This is equivalent to `min-width: fit-content;`. Minimum width of the element will use the available space, but never more than max-content




### `.k-max-w-0`

This is equivalent to `max-width: 0;`. Specifies 0px maximum width of an element.




### `.k-max-w-1px`

This is equivalent to `max-width: 1px;`. Specifies 1px maximum width of an element.




### `.k-max-w-1`

This is equivalent to `max-width: 0.25rem;`. Specifies 0.25rem maximum width of an element.




### `.k-max-w-full`

This is equivalent to `max-width: 100%;`. Specifies maximum element's width as 100% of the containing block's width.




### `.k-max-w-screen`

This is equivalent to `max-width: 100vh;`. Specifies maximum element's width to be as the viewport width.




### `.k-max-w-min`

This is equivalent to `max-width: min-content;`. Specifies maximum element's width to be as the intrinsic width of the element.




### `.k-max-w-max`

This is equivalent to `max-width: max-content;`. Specifies maximum element's width to be as the preferred width of the element.




### `.k-max-w-fit`

This is equivalent to `max-width: fit-content;`. Maximum width of the element will use the available space, but never more than max-content




### `.k-zindex-0`

This is equivalent to `z-index: 0;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-0`

This is equivalent to `z-index: 0;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-10`

This is equivalent to `z-index: 10;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-20`

This is equivalent to `z-index: 20;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-30`

This is equivalent to `z-index: 30;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-40`

This is equivalent to `z-index: 40;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-50`

This is equivalent to `z-index: 50;`. This is the 0 stack level of the generated box in the current stacking context.




### `.k-zindex-auto`

This is equivalent to `z-index: auto;`. The box does not establish a new local stacking context. The stack level of the generated box in the current stacking context is 0.




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
