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
    <td>$kendo-color-white</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-black</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
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
<tr>
    <td>$kendo-color-rgba-transparent</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, 0)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-black</td>
    <td>Gradient</td>
    <td><code>rgba(black, 0), black</code></td>
    <td><code>rgba(0, 0, 0, 0), black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-white</td>
    <td>Gradient</td>
    <td><code>rgba(white, 0), white</code></td>
    <td><code>rgba(255, 255, 255, 0), white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-black-to-transparent</td>
    <td>Gradient</td>
    <td><code>black, rgba(black, 0)</code></td>
    <td><code>black, rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from black to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-white-to-transparent</td>
    <td>Gradient</td>
    <td><code>white, rgba(white, 0)</code></td>
    <td><code>white, rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from white to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-rainbow</td>
    <td>Gradient</td>
    <td><span class="color-preview" style="background-color: #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000"></span><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
    <td><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that cycles through the colors of the rainbow.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><ul><li>app-surface: null</li><li>on-app-surface: null</li><li>subtle: null</li><li>surface: null</li><li>surface-alt: null</li><li>border: null</li><li>border-alt: null</li><li>base-subtle: null</li><li>base-subtle-hover: null</li><li>base-subtle-active: null</li><li>base: null</li><li>base-hover: null</li><li>base-active: null</li><li>base-emphasis: null</li><li>base-on-subtle: null</li><li>on-base: null</li><li>base-on-surface: null</li><li>primary-subtle: null</li><li>primary-subtle-hover: null</li><li>primary-subtle-active: null</li><li>primary: null</li><li>primary-hover: null</li><li>primary-active: null</li><li>primary-emphasis: null</li><li>primary-on-subtle: null</li><li>on-primary: null</li><li>primary-on-surface: null</li><li>secondary-subtle: null</li><li>secondary-subtle-hover: null</li><li>secondary-subtle-active: null</li><li>secondary: null</li><li>secondary-hover: null</li><li>secondary-active: null</li><li>secondary-emphasis: null</li><li>secondary-on-subtle: null</li><li>on-secondary: null</li><li>secondary-on-surface: null</li><li>tertiary-subtle: null</li><li>tertiary-subtle-hover: null</li><li>tertiary-subtle-active: null</li><li>tertiary: null</li><li>tertiary-hover: null</li><li>tertiary-active: null</li><li>tertiary-emphasis: null</li><li>tertiary-on-subtle: null</li><li>on-tertiary: null</li><li>tertiary-on-surface: null</li><li>info-subtle: null</li><li>info-subtle-hover: null</li><li>info-subtle-active: null</li><li>info: null</li><li>info-hover: null</li><li>info-active: null</li><li>info-emphasis: null</li><li>info-on-subtle: null</li><li>on-info: null</li><li>info-on-surface: null</li><li>success-subtle: null</li><li>success-subtle-hover: null</li><li>success-subtle-active: null</li><li>success: null</li><li>success-hover: null</li><li>success-active: null</li><li>success-emphasis: null</li><li>success-on-subtle: null</li><li>on-success: null</li><li>success-on-surface: null</li><li>warning-subtle: null</li><li>warning-subtle-hover: null</li><li>warning-subtle-active: null</li><li>warning: null</li><li>warning-hover: null</li><li>warning-active: null</li><li>warning-emphasis: null</li><li>warning-on-subtle: null</li><li>on-warning: null</li><li>warning-on-surface: null</li><li>error-subtle: null</li><li>error-subtle-hover: null</li><li>error-subtle-active: null</li><li>error: null</li><li>error-hover: null</li><li>error-active: null</li><li>error-emphasis: null</li><li>error-on-subtle: null</li><li>on-error: null</li><li>error-on-surface: null</li><li>light-subtle: null</li><li>light-subtle-hover: null</li><li>light-subtle-active: null</li><li>light: null</li><li>light-hover: null</li><li>light-active: null</li><li>light-emphasis: null</li><li>light-on-subtle: null</li><li>on-light: null</li><li>light-on-surface: null</li><li>dark-subtle: null</li><li>dark-subtle-hover: null</li><li>dark-subtle-active: null</li><li>dark: null</li><li>dark-hover: null</li><li>dark-active: null</li><li>dark-emphasis: null</li><li>dark-on-subtle: null</li><li>on-dark: null</li><li>dark-on-surface: null</li><li>inverse-subtle: null</li><li>inverse-subtle-hover: null</li><li>inverse-subtle-active: null</li><li>inverse: null</li><li>inverse-hover: null</li><li>inverse-active: null</li><li>inverse-emphasis: null</li><li>inverse-on-subtle: null</li><li>on-inverse: null</li><li>inverse-on-surface: null</li><li>series-a: null</li><li>series-a-bold: null</li><li>series-a-bolder: null</li><li>series-a-subtle: null</li><li>series-a-subtler: null</li><li>series-b: null</li><li>series-b-bold: null</li><li>series-b-bolder: null</li><li>series-b-subtle: null</li><li>series-b-subtler: null</li><li>series-c: null</li><li>series-c-bold: null</li><li>series-c-bolder: null</li><li>series-c-subtle: null</li><li>series-c-subtler: null</li><li>series-d: null</li><li>series-d-bold: null</li><li>series-d-bolder: null</li><li>series-d-subtle: null</li><li>series-d-subtler: null</li><li>series-e: null</li><li>series-e-bold: null</li><li>series-e-bolder: null</li><li>series-e-subtle: null</li><li>series-e-subtler: null</li><li>series-f: null</li><li>series-f-bold: null</li><li>series-f-bolder: null</li><li>series-f-subtle: null</li><li>series-f-subtler: null</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

