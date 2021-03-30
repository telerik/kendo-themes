---
title: Customizing Buttons
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_buttons
position: 9
---

# Customizing Buttons

The following table lists the available variables for customization.

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody>
        <tr>
    <td>$button-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-border-radius</td>
    <td></td>
    <td>$border-radius</td>
    <td>map-get( $spacing, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-padding-x</td>
    <td></td>
    <td>$padding-x</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-padding-y</td>
    <td></td>
    <td>$padding-y</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-bg</td>
    <td></td>
    <td>$base-bg</td>
    <td>$secondary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-text</td>
    <td></td>
    <td>$base-text</td>
    <td>$body-text</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-border</td>
    <td></td>
    <td>try-shade( $button-bg, 2 )</td>
    <td>try-shade( $button-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-gradient</td>
    <td></td>
    <td>$base-gradient</td>
    <td>rgba( white, .2 ), rgba( white, 0 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-bg</td>
    <td></td>
    <td>try-shade( $button-bg, 1 )</td>
    <td>try-shade( $button-bg, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-border</td>
    <td></td>
    <td>try-shade( $button-hovered-bg, 2 )</td>
    <td>try-shade( $button-hovered-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-bg</td>
    <td></td>
    <td>try-shade( $button-bg, 2 )</td>
    <td>try-shade( $button-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-border</td>
    <td></td>
    <td>try-shade( $button-active-bg, 2 )</td>
    <td>try-shade( $button-active-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-bg</td>
    <td></td>
    <td>$button-active-bg</td>
    <td>try-shade( $button-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-text</td>
    <td></td>
    <td>$button-active-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-border</td>
    <td></td>
    <td>$button-active-border</td>
    <td>try-shade( $button-active-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-focused-shadow</td>
    <td></td>
    <td>0 0 4px 0 rgba( $button-border, .75 )</td>
    <td>0 0 4px 0 rgba( $button-border, .75 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused buttons.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

