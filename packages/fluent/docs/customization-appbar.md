---
title: Customizing Appbar
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_appbar
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
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-margin-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
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
    <td>$kendo-appbar-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the AppBar sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-bg</td>
    <td>String</td>
    <td><code>k-color(surface)</code></td>
    <td><code>var(--kendo-color-surface, #faf9f8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-brand-colors</td>
    <td>Map</td>
    <td><code>(
    primary: primary,
    error: error,
    success: success,
    info: info,
    secondary: secondary,
    tertiary: tertiary,
 )</code></td>
    <td><ul><li>primary: primary</li><li>error: error</li><li>success: success</li><li>info: info</li><li>secondary: secondary</li><li>tertiary: tertiary</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme variations for the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-theme-colors</td>
    <td>Map</td>
    <td><code>()</code></td>
    <td><ul><li>primary: "bg":"var(--kendo-color-primary, #0078d4)","text":"var(--kendo-color-on-primary, #ffffff)","border":"var(--kendo-color-primary, #0078d4)"</li><li>error: "bg":"var(--kendo-color-error, #c2666b)","text":"var(--kendo-color-on-error, #ffffff)","border":"var(--kendo-color-error, #c2666b)"</li><li>success: "bg":"var(--kendo-color-success, #55a554)","text":"var(--kendo-color-on-success, #ffffff)","border":"var(--kendo-color-success, #55a554)"</li><li>info: "bg":"var(--kendo-color-info, #0a7eff)","text":"var(--kendo-color-on-info, #ffffff)","border":"var(--kendo-color-info, #0a7eff)"</li><li>secondary: "bg":"var(--kendo-color-secondary, #979593)","text":"var(--kendo-color-on-secondary, #ffffff)","border":"var(--kendo-color-secondary, #979593)"</li><li>tertiary: "bg":"var(--kendo-color-tertiary, #2b88d8)","text":"var(--kendo-color-on-tertiary, #ffffff)","border":"var(--kendo-color-tertiary, #2b88d8)"</li><li>warning: "bg":"var(--kendo-color-warning, #ffc80a)","text":"var(--kendo-color-on-warning, #323130)","border":"var(--kendo-color-warning, #ffc80a)"</li><li>dark: "bg":"var(--kendo-color-dark, #323130)","text":"var(--kendo-color-on-dark, #ffffff)","border":"var(--kendo-color-dark, #323130)"</li><li>light: "bg":"var(--kendo-color-light, #d2d0ce)","text":"var(--kendo-color-on-light, #323130)","border":"var(--kendo-color-light, #d2d0ce)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the AppBar variations.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

