---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_color-system
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
    <td><code>(app-surface: #ffffff, on-app-surface: #212529, subtle: #606970, surface: #f8f9fa, surface-alt: #ffffff, border: #dee2e6, border-alt: #ced4da, base-subtle: #e9ecef, base-subtle-hover: #dee2e6, base-subtle-active: #ced4da, base: #dee2e6, base-hover: #ced4da, base-active: #bdc4cb, base-emphasis: #adb5bd, base-on-subtle: #212529, on-base: #212529, base-on-surface: #212529, primary-subtle: #cfe2ff, primary-subtle-hover: #b6d4fe, primary-subtle-active: #9ec5fe, primary: #0d6efd, primary-hover: #0b5ed7, primary-active: #0a58ca, primary-emphasis: #6ea8fe, primary-on-subtle: #052c65, on-primary: #ffffff, primary-on-surface: #0d6efd, secondary-subtle: #dee2e6, secondary-subtle-hover: #ced4da, secondary-subtle-active: #bdc4cb, secondary: #6c757d, secondary-hover: #606970, secondary-active: #555c64, secondary-emphasis: #8d959d, secondary-on-subtle: #212529, on-secondary: #ffffff, secondary-on-surface: #212529, tertiary-subtle: #e2d9f3, tertiary-subtle-hover: #d3c5ec, tertiary-subtle-active: #c5b3e6, tertiary: #6f42c1, tertiary-hover: #59359a, tertiary-active: #4e2f89, tertiary-emphasis: #a98eda, tertiary-on-subtle: #21143b, on-tertiary: #ffffff, tertiary-on-surface: #6f42c1, info-subtle: #cff4fc, info-subtle-hover: #aaecfa, info-subtle-active: #86e5f8, info: #0dcaf0, info-hover: #0aa2c0, info-active: #098da8, info-emphasis: #3dd5f3, info-on-subtle: #04414d, on-info: #ffffff, info-on-surface: #0dcaf0, success-subtle: #d1e7dd, success-subtle-hover: #badbcc, success-subtle-active: #8cc3aa, success: #146c43, success-hover: #125f3b, success-active: #0f5132, success-emphasis: #479f76, success-on-subtle: #08291a, on-success: #ffffff, success-on-surface: #0f5132, warning-subtle: #ffecb5, warning-subtle-hover: #ffe69c, warning-subtle-active: #ffe083, warning: #ffc107, warning-hover: #cc9a06, warning-active: #b38705, warning-emphasis: #ffcd39, warning-on-subtle: #523e02, on-warning: #000000, warning-on-surface: #ffc107, error-subtle: #f8d7da, error-subtle-hover: #f5c2c7, error-subtle-active: #f1aeb5, error: #dc3545, error-hover: #b02a37, error-active: #9a2530, error-emphasis: #e35d6a, error-on-subtle: #421015, on-error: #ffffff, error-on-surface: #dc3545, light-subtle: #f8f9fa, light-subtle-hover: #e9ecef, light-subtle-active: #dee2e6, light: #f8f9fa, light-hover: #e9ecef, light-active: #dee2e6, light-emphasis: #bdc4cb, light-on-subtle: #343a40, on-light: #000000, light-on-surface: #ced4da, dark-subtle: #6c757d, dark-subtle-hover: #606970, dark-subtle-active: #555c64, dark: #212529, dark-hover: #2c3035, dark-active: #343a40, dark-emphasis: #343a40, dark-on-subtle: #ffffff, on-dark: #ffffff, dark-on-surface: #121417, inverse-subtle: #6c757d, inverse-subtle-hover: #606970, inverse-subtle-active: #555c64, inverse: #212529, inverse-hover: #2c3035, inverse-active: #343a40, inverse-emphasis: #343a40, inverse-on-subtle: #ffffff, on-inverse: #ffffff, inverse-on-surface: #121417, series-a: #0d6efd, series-a-bold: #0a53be, series-a-bolder: #052c65, series-a-subtle: #86b6fe, series-a-subtler: #4992fd, series-b: #6f42c1, series-b-bold: #4e2f89, series-b-bolder: #36215f, series-b-subtle: #b9a3e1, series-b-subtler: #8c68cd, series-c: #20c997, series-c-bold: #178c69, series-c-bolder: #10654c, series-c-subtle: #a6e9d5, series-c-subtler: #4dd4ac, series-d: #198754, series-d-bold: #125f3b, series-d-bolder: #0d442a, series-d-subtle: #8cc3aa, series-d-subtler: #479f76, series-e: #dc3545, series-e-bold: #9a2530, series-e-bolder: #6e1b23, series-e-subtle: #f1aeb5, series-e-subtler: #e35d6a, series-f: #ffc107, series-f-bold: #b38705, series-f-bolder: #806104, series-f-subtle: #ffe083, series-f-subtler: #ffcd39)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><code>$primary</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-primary, #0d6efd)"></span><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-primary )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-on-primary, #ffffff)"></span><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><code>$secondary</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-secondary, #6c757d)"></span><code>var(--kendo-color-secondary, #6c757d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-secondary )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $kendo-color-secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary</td>
    <td>Color</td>
    <td><code>$purple</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-tertiary, #6f42c1)"></span><code>var(--kendo-color-tertiary, #6f42c1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-tertiary )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $kendo-color-tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><code>$info</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-info, #0dcaf0)"></span><code>var(--kendo-color-info, #0dcaf0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><code>$success</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-success, #146c43)"></span><code>var(--kendo-color-success, #146c43)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><code>$warning</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-warning, #ffc107)"></span><code>var(--kendo-color-warning, #ffc107)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><code>$danger</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-error, #dc3545)"></span><code>var(--kendo-color-error, #dc3545)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><code>$dark</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-dark, #212529)"></span><code>var(--kendo-color-dark, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><code>$light</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-light, #f8f9fa)"></span><code>var(--kendo-color-light, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>String</td>
    <td><code>if( $kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark )</code></td>
    <td><code>var(--kendo-color-dark, #212529)</code></td>
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

