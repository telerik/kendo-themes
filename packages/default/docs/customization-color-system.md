---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_color-system
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
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><code>(app-surface: #ffffff, on-app-surface: #3d3d3d, subtle: #666666, surface: #fafafa, surface-alt: #ffffff, border: rgba(0, 0, 0, 0.08), border-alt: rgba(0, 0, 0, 0.16), base-subtle: #ebebeb, base-subtle-hover: #e0e0e0, base-subtle-active: #d6d6d6, base: #f5f5f5, base-hover: #ebebeb, base-active: #d6d6d6, base-emphasis: #c2c2c2, base-on-subtle: #3d3d3d, on-base: #3d3d3d, base-on-surface: #3d3d3d, primary-subtle: #ffeceb, primary-subtle-hover: #ffdedb, primary-subtle-active: #ffc8c4, primary: #ff6358, primary-hover: #ea5a51, primary-active: #d45349, primary-emphasis: #ff9d97, primary-on-subtle: #5c201c, on-primary: #ffffff, primary-on-surface: #ff6358, secondary-subtle: #fafafa, secondary-subtle-hover: #f5f5f5, secondary-subtle-active: #ebebeb, secondary: #666666, secondary-hover: #525252, secondary-active: #3d3d3d, secondary-emphasis: #e0e0e0, secondary-on-subtle: #141414, on-secondary: #ffffff, secondary-on-surface: #292929, tertiary-subtle: #d8f1fd, tertiary-subtle-hover: #c5eafc, tertiary-subtle-active: #a3dffb, tertiary: #03a9f4, tertiary-hover: #039ae0, tertiary-active: #028ccb, tertiary-emphasis: #61c9f9, tertiary-on-subtle: #023f5c, on-tertiary: #ffffff, tertiary-on-surface: #028ccb, info-subtle: #d2e2fb, info-subtle-hover: #bdd4f8, info-subtle-active: #80acf4, info: #0058e9, info-hover: #0052d6, info-active: #004ac2, info-emphasis: #6098f2, info-on-subtle: #002259, on-info: #ffffff, info-on-surface: #004ac2, success-subtle: #dcf0d3, success-subtle-hover: #cbe9bf, success-subtle-active: #b7e1a5, success: #37b400, success-hover: #32a500, success-active: #2d9600, success-emphasis: #81d15f, success-on-subtle: #1c5a00, on-success: #ffffff, success-on-surface: #2d9600, warning-subtle: #fff4d3, warning-subtle-hover: #ffeebd, warning-subtle-active: #ffe79e, warning: #ffc000, warning-hover: #eaaf00, warning-active: #d49f00, warning-emphasis: #ffd760, warning-on-subtle: #5e4700, on-warning: #3d3d3d, warning-on-surface: #ffc000, error-subtle: #fcddda, error-subtle-hover: #fbc8c3, error-subtle-active: #f98b80, error: #f31700, error-hover: #df1600, error-active: #ca1400, error-emphasis: #f76f60, error-on-subtle: #7a0c00, on-error: #ffffff, error-on-surface: #ca1400, light-subtle: #fafafa, light-subtle-hover: #f5f5f5, light-subtle-active: #ebebeb, light: #ebebeb, light-hover: #e0e0e0, light-active: #d6d6d6, light-emphasis: #d6d6d6, light-on-subtle: #141414, on-light: #000000, light-on-surface: #e0e0e0, dark-subtle: #c2c2c2, dark-subtle-hover: #adadad, dark-subtle-active: #999999, dark: #3d3d3d, dark-hover: #292929, dark-active: #1f1f1f, dark-emphasis: #666666, dark-on-subtle: #1f1f1f, on-dark: #ffffff, dark-on-surface: #141414, inverse-subtle: #c2c2c2, inverse-subtle-hover: #adadad, inverse-subtle-active: #999999, inverse: #3d3d3d, inverse-hover: #292929, inverse-active: #1f1f1f, inverse-emphasis: #666666, inverse-on-subtle: #1f1f1f, on-inverse: #ffffff, inverse-on-surface: #141414, series-a: #ff6358, series-a-bold: #bf4a42, series-a-bolder: #80322c, series-a-subtle: #ffb1ac, series-a-subtler: #ff8a82, series-b: #ffe162, series-b-bold: #bfa94a, series-b-bolder: #807131, series-b-subtle: #fff0b1, series-b-subtler: #ffe989, series-c: #4cd180, series-c-bold: #399d60, series-c-bolder: #266940, series-c-subtle: #a6e8c0, series-c-subtler: #79dda0, series-d: #4b5ffa, series-d-bold: #3847bc, series-d-bolder: #26307d, series-d-subtle: #a5affd, series-d-subtler: #7887fb, series-e: #ac58ff, series-e-bold: #8142bf, series-e-bolder: #562c80, series-e-subtle: #d6acff, series-e-subtler: #c182ff, series-f: #ff5892, series-f-bold: #bf426e, series-f-bolder: #802c49, series-f-subtle: #ffacc9, series-f-subtler: #ff82ae)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-primary, #ff6358)"></span><code>var(--kendo-color-primary, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy($kendo-color-primary)</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-on-primary, #ffffff)"></span><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-secondary, #666666)"></span><code>var(--kendo-color-secondary, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy($kendo-color-secondary)</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $kendo-color-secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #03a9f4"></span><code>#03a9f4</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-tertiary, #03a9f4)"></span><code>var(--kendo-color-tertiary, #03a9f4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy($kendo-color-tertiary)</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $kendo-color-tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #0058e9"></span><code>#0058e9</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-info, #0058e9)"></span><code>var(--kendo-color-info, #0058e9)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-success, #37b400)"></span><code>var(--kendo-color-success, #37b400)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffc000"></span><code>#ffc000</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-warning, #ffc000)"></span><code>var(--kendo-color-warning, #ffc000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-error, #f31700)"></span><code>var(--kendo-color-error, #f31700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-dark, #3d3d3d)"></span><code>var(--kendo-color-dark, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-light, #ebebeb)"></span><code>var(--kendo-color-light, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>String</td>
    <td><code>if($kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark)</code></td>
    <td><code>var(--kendo-color-dark, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
    </td>
</tr>
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
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

