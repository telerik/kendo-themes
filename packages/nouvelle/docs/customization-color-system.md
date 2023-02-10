---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Nouvelle theme variables available for customization."
slug: variables_kendothemenouvelle_color-system
position: 9
---

# Customizing Color System

## Variables

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
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #622331"></span><code>#622331</code></td>
    <td><span class="color-preview" style="background-color: #622331"></span><code>#622331</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-primary )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #0969da"></span><code>#0969da</code></td>
    <td><span class="color-preview" style="background-color: #0969da"></span><code>#0969da</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #1a7f37"></span><code>#1a7f37</code></td>
    <td><span class="color-preview" style="background-color: #1a7f37"></span><code>#1a7f37</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #bc4c00"></span><code>#bc4c00</code></td>
    <td><span class="color-preview" style="background-color: #bc4c00"></span><code>#bc4c00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #cf222e"></span><code>#cf222e</code></td>
    <td><span class="color-preview" style="background-color: #cf222e"></span><code>#cf222e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>Color</td>
    <td><code>if( $kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark )</code></td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

