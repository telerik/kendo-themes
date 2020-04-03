---
title: Customizing Buttons
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_buttons
position: 9
---

# Customizing Buttons

The following table lists the available variables for customization.

<style>
    .theme-variables th,
    .theme-variables td {
        vertical-align: top;
    }

    .color-preview {
        margin-right: .5em;
        border-radius: 50%;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        display: inline-block;
        border: 1px solid rgba(0,0,0,.08);
    }

    .theme-variables-description-container > div {
        margin: 0 0 .5em 2em;
    }

    .theme-variables-description {
        display: block;
        margin-left: 1em;
    }
</style>


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
    <td>$button-bg</td>
    <td></td>
    <td>$base-bg</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-text</td>
    <td></td>
    <td>$base-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-border</td>
    <td></td>
    <td>$button-bg</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-bg</td>
    <td></td>
    <td>true-mix( $button-text, $button-bg, 12%)</td>
    <td>true-mix( $button-text, $button-bg, 12%)</td>
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
    <td>$button-hovered-bg</td>
    <td>true-mix( $button-text, $button-bg, 12%)</td>
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
    <td>$button-pressed-bg</td>
    <td></td>
    <td>true-mix( $button-text, $button-bg, 12%)</td>
    <td>true-mix( $button-text, $button-bg, 12%)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-pressed-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-pressed-border</td>
    <td></td>
    <td>$button-pressed-bg</td>
    <td>true-mix( $button-text, $button-bg, 12%)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-pressed-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-focused-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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

