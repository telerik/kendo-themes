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
    <td><ul><li>app-surface: #ffffff</li><li>on-app-surface: #3d3d3d</li><li>subtle: #666666</li><li>surface: #fafafa</li><li>surface-alt: #ffffff</li><li>border: rgba(0, 0, 0, 0.08)</li><li>border-alt: rgba(0, 0, 0, 0.16)</li><li>base-subtle: #ebebeb</li><li>base-subtle-hover: #e0e0e0</li><li>base-subtle-active: #d6d6d6</li><li>base: #f5f5f5</li><li>base-hover: #ebebeb</li><li>base-active: #d6d6d6</li><li>base-emphasis: #c2c2c2</li><li>base-on-subtle: #3d3d3d</li><li>on-base: #3d3d3d</li><li>base-on-surface: #3d3d3d</li><li>primary-subtle: #ffeceb</li><li>primary-subtle-hover: #ffdedb</li><li>primary-subtle-active: #ffc8c4</li><li>primary: #ff6358</li><li>primary-hover: #ea5a51</li><li>primary-active: #d45349</li><li>primary-emphasis: #ff9d97</li><li>primary-on-subtle: #5c201c</li><li>on-primary: #ffffff</li><li>primary-on-surface: #ff6358</li><li>secondary-subtle: #fafafa</li><li>secondary-subtle-hover: #f5f5f5</li><li>secondary-subtle-active: #ebebeb</li><li>secondary: #666666</li><li>secondary-hover: #525252</li><li>secondary-active: #3d3d3d</li><li>secondary-emphasis: #e0e0e0</li><li>secondary-on-subtle: #141414</li><li>on-secondary: #ffffff</li><li>secondary-on-surface: #292929</li><li>tertiary-subtle: #d8f1fd</li><li>tertiary-subtle-hover: #c5eafc</li><li>tertiary-subtle-active: #a3dffb</li><li>tertiary: #03a9f4</li><li>tertiary-hover: #039ae0</li><li>tertiary-active: #028ccb</li><li>tertiary-emphasis: #61c9f9</li><li>tertiary-on-subtle: #023f5c</li><li>on-tertiary: #ffffff</li><li>tertiary-on-surface: #028ccb</li><li>info-subtle: #d2e2fb</li><li>info-subtle-hover: #bdd4f8</li><li>info-subtle-active: #80acf4</li><li>info: #0058e9</li><li>info-hover: #0052d6</li><li>info-active: #004ac2</li><li>info-emphasis: #6098f2</li><li>info-on-subtle: #002259</li><li>on-info: #ffffff</li><li>info-on-surface: #004ac2</li><li>success-subtle: #dcf0d3</li><li>success-subtle-hover: #cbe9bf</li><li>success-subtle-active: #b7e1a5</li><li>success: #37b400</li><li>success-hover: #32a500</li><li>success-active: #2d9600</li><li>success-emphasis: #81d15f</li><li>success-on-subtle: #1c5a00</li><li>on-success: #ffffff</li><li>success-on-surface: #2d9600</li><li>warning-subtle: #fff4d3</li><li>warning-subtle-hover: #ffeebd</li><li>warning-subtle-active: #ffe79e</li><li>warning: #ffc000</li><li>warning-hover: #eaaf00</li><li>warning-active: #d49f00</li><li>warning-emphasis: #ffd760</li><li>warning-on-subtle: #5e4700</li><li>on-warning: #3d3d3d</li><li>warning-on-surface: #ffc000</li><li>error-subtle: #fcddda</li><li>error-subtle-hover: #fbc8c3</li><li>error-subtle-active: #f98b80</li><li>error: #f31700</li><li>error-hover: #df1600</li><li>error-active: #ca1400</li><li>error-emphasis: #f76f60</li><li>error-on-subtle: #7a0c00</li><li>on-error: #ffffff</li><li>error-on-surface: #ca1400</li><li>light-subtle: #fafafa</li><li>light-subtle-hover: #f5f5f5</li><li>light-subtle-active: #ebebeb</li><li>light: #ebebeb</li><li>light-hover: #e0e0e0</li><li>light-active: #d6d6d6</li><li>light-emphasis: #d6d6d6</li><li>light-on-subtle: #141414</li><li>on-light: #000000</li><li>light-on-surface: #e0e0e0</li><li>dark-subtle: #c2c2c2</li><li>dark-subtle-hover: #adadad</li><li>dark-subtle-active: #999999</li><li>dark: #3d3d3d</li><li>dark-hover: #292929</li><li>dark-active: #1f1f1f</li><li>dark-emphasis: #666666</li><li>dark-on-subtle: #1f1f1f</li><li>on-dark: #ffffff</li><li>dark-on-surface: #141414</li><li>inverse-subtle: #c2c2c2</li><li>inverse-subtle-hover: #adadad</li><li>inverse-subtle-active: #999999</li><li>inverse: #3d3d3d</li><li>inverse-hover: #292929</li><li>inverse-active: #1f1f1f</li><li>inverse-emphasis: #666666</li><li>inverse-on-subtle: #1f1f1f</li><li>on-inverse: #ffffff</li><li>inverse-on-surface: #141414</li><li>series-a: #ff6358</li><li>series-a-bold: #bf4a42</li><li>series-a-bolder: #80322c</li><li>series-a-subtle: #ffb1ac</li><li>series-a-subtler: #ff8a82</li><li>series-b: #ffe162</li><li>series-b-bold: #bfa94a</li><li>series-b-bolder: #807131</li><li>series-b-subtle: #fff0b1</li><li>series-b-subtler: #ffe989</li><li>series-c: #4cd180</li><li>series-c-bold: #399d60</li><li>series-c-bolder: #266940</li><li>series-c-subtle: #a6e8c0</li><li>series-c-subtler: #79dda0</li><li>series-d: #4b5ffa</li><li>series-d-bold: #3847bc</li><li>series-d-bolder: #26307d</li><li>series-d-subtle: #a5affd</li><li>series-d-subtler: #7887fb</li><li>series-e: #ac58ff</li><li>series-e-bold: #8142bf</li><li>series-e-bolder: #562c80</li><li>series-e-subtle: #d6acff</li><li>series-e-subtler: #c182ff</li><li>series-f: #ff5892</li><li>series-f-bold: #bf426e</li><li>series-f-bolder: #802c49</li><li>series-f-subtle: #ffacc9</li><li>series-f-subtler: #ff82ae</li></ul></td>
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

