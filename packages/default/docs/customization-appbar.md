---
title: Customizing Appbar
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_appbar
position: 9
---

# Customizing Appbar

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
    <td>$kendo-appbar-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-zindex</td>
    <td>Number</td>
    <td><code>1000</code></td>
    <td><code>1000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The z-index of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the AppBar sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-light-bg</td>
    <td>String</td>
    <td><code>$kendo-color-light</code></td>
    <td><code>var(--kendo-color-light, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar based on light theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-light-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-light ), k-contrast-legacy( $kendo-color-light ))</code></td>
    <td><code>var(--kendo-color-on-light, #000000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar based on light theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-dark-bg</td>
    <td>String</td>
    <td><code>$kendo-color-dark</code></td>
    <td><code>var(--kendo-color-dark, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar based on dark theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-dark-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-dark ), k-contrast-legacy( $kendo-color-dark ))</code></td>
    <td><code>var(--kendo-color-on-dark, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar based on dark theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-box-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-bottom-box-shadow</td>
    <td>String</td>
    <td><code>$kendo-appbar-box-shadow</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the AppBar with bottom position.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

