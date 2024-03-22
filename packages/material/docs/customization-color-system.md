---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_color-system
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
    <td><code>(app-surface: #ffffff, on-app-surface: #212121, subtle: #757575, surface: #f5f5f5, surface-alt: #ffffff, border: rgba(0, 0, 0, 0.12), border-alt: rgba(0, 0, 0, 0.15), base-subtle: #ebebeb, base-subtle-hover: #d6d6d6, base-subtle-active: #c2c2c2, base: #ffffff, base-hover: #ebebeb, base-active: #d6d6d6, base-emphasis: #adadad, base-on-subtle: #212121, on-base: #212121, base-on-surface: #212121, primary-subtle: #d1d5ee, primary-subtle-hover: #c5cae8, primary-subtle-active: #b5bde3, primary: #3f51b5, primary-hover: #3a4ba7, primary-active: #354498, primary-emphasis: #97a0d7, primary-on-subtle: #161c3f, on-primary: #ffffff, primary-on-surface: #3f51b5, secondary-subtle: #fbcdd9, secondary-subtle-hover: #f9afc3, secondary-subtle-active: #f79bb3, secondary: #e51a5f, secondary-hover: #d31857, secondary-active: #c01650, secondary-emphasis: #f58da9, secondary-on-subtle: #500c22, on-secondary: #ffffff, secondary-on-surface: #ae1549, tertiary-subtle: #c9dbd8, tertiary-subtle-hover: #a9c6c1, tertiary-subtle-active: #92b8b1, tertiary: #00695c, tertiary-hover: #006155, tertiary-active: #00584d, tertiary-emphasis: #84aea7, tertiary-on-subtle: #002520, on-tertiary: #ffffff, tertiary-on-surface: #054f46, info-subtle: #c8d7fb, info-subtle-hover: #a7c0f7, info-subtle-active: #8fb0f6, info: #0058e9, info-hover: #0251d6, info-active: #034ac3, info-emphasis: #80a5f4, info-on-subtle: #071f51, on-info: #ffffff, info-on-surface: #0443b0, success-subtle: #d7f0cc, success-subtle-hover: #bae2ad, success-subtle-active: #a7db97, success: #37b400, success-hover: #33a600, success-active: #2e9704, success-emphasis: #93d775, success-on-subtle: #163f09, on-success: #ffffff, success-on-surface: #2b8906, warning-subtle: #fff0ce, warning-subtle-hover: #ffe7b0, warning-subtle-active: #ffe19c, warning: #ffc000, warning-hover: #ebb201, warning-active: #d6a202, warning-emphasis: #ffdd8f, warning-on-subtle: #59430a, on-warning: #000000, warning-on-surface: #ffc000, error-subtle: #fcc7c2, error-subtle-hover: #feafa8, error-subtle-active: #fe9a91, error: #f31700, error-hover: #e01701, error-active: #cc1505, error-emphasis: #fc8d83, error-on-subtle: #550c07, on-error: #ffffff, error-on-surface: #b91406, light-subtle: #fafafa, light-subtle-hover: #f5f5f5, light-subtle-active: #eeeeee, light: #f5f5f5, light-hover: #ebebeb, light-active: #d6d6d6, light-emphasis: #e0e0e0, light-on-subtle: #212121, on-light: #000000, light-on-surface: #616161, dark-subtle: #c7c7c7, dark-subtle-hover: #c2c2c2, dark-subtle-active: #bdbdbd, dark: #424242, dark-hover: #212121, dark-active: #000000, dark-emphasis: #9e9e9e, dark-on-subtle: #212121, on-dark: #ffffff, dark-on-surface: #616161, inverse-subtle: #c7c7c7, inverse-subtle-hover: #c2c2c2, inverse-subtle-active: #bdbdbd, inverse: #424242, inverse-hover: #212121, inverse-active: #000000, inverse-emphasis: #9e9e9e, inverse-on-subtle: #212121, on-inverse: #ffffff, inverse-on-surface: #616161, series-a: #9c27b0, series-a-bold: #751d84, series-a-bolder: #4e1458, series-a-subtle: #b55dc4, series-a-subtler: #cd93d7, series-b: #2196f3, series-b-bold: #1971b6, series-b-bolder: #114b7a, series-b-subtle: #59b0f6, series-b-subtler: #90cbf9, series-c: #009688, series-c-bold: #007166, series-c-bolder: #004b44, series-c-subtle: #40b0a6, series-c-subtler: #80cbc4, series-d: #ffeb3b, series-d-bold: #bfb02c, series-d-bolder: #80761e, series-d-subtle: #fff06c, series-d-subtler: #fff59d, series-e: #f44336, series-e-bold: #b73229, series-e-bolder: #7a221b, series-e-subtle: #f77268, series-e-subtler: #faa19b, series-f: #4caf50, series-f-bold: #39833c, series-f-bolder: #265828, series-f-subtle: #79c37c, series-f-subtler: #a6d7a8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><code>material-color( $primary-palette, main )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-primary, #3f51b5)"></span><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>material-color( $primary-palette, main-contrast )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-on-primary, #ffffff)"></span><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><code>material-color( $secondary-palette, main )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-secondary, #e51a5f)"></span><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>material-color( $secondary-palette, main-contrast )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-on-secondary, #ffffff)"></span><code>var(--kendo-color-on-secondary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $kendo-color-secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary</td>
    <td>Color</td>
    <td><code>material-color($tertiary-palette, main)</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-tertiary, #00695c)"></span><code>var(--kendo-color-tertiary, #00695c)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Color</td>
    <td><code>material-color($tertiary-palette, main-contrast)</code></td>
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
    <td><code>get-base-hue( gray, 800 )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-dark, #424242)"></span><code>var(--kendo-color-dark, #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><code>get-base-hue( gray, 100 )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-light, #f5f5f5)"></span><code>var(--kendo-color-light, #f5f5f5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>String</td>
    <td><code>if( $kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark )</code></td>
    <td><code>var(--kendo-color-dark, #424242)</code></td>
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

