---
title: Customizing Notification
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_notification
position: 9
---

# Customizing Notification

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
    <td>$kendo-notification-group-gap</td>
    <td>String</td>
    <td><code>var( --kendo-notification-group-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-notification-group-gap, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row-gap between the elements in the Notification group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-notification-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-notification-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-notification-padding-y, calc(#{k-spacing(2)} + 1px) )</code></td>
    <td><code>var(--kendo-notification-padding-y, calc(var(--kendo-spacing-2, 0.5rem) + 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-notification-border-width, 1px )</code></td>
    <td><code>var(--kendo-notification-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-notification-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-notification-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-notification-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-notification-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-notification-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-notification-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-notification-line-height, var( --kendo-line-height-lg, normal ) )</code></td>
    <td><code>var(--kendo-notification-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-actions-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-notification-actions-padding-x, null )</code></td>
    <td><code>var(--kendo-notification-actions-padding-x, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-actions-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-notification-actions-padding-y, #{$kendo-notification-actions-padding-x} )</code></td>
    <td><code>var(--kendo-notification-actions-padding-y, var(--kendo-notification-actions-padding-x, ))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Notification actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-bg</td>
    <td>String</td>
    <td><code>var( --kendo-notification-bg, #{k-color(base-subtle)} )</code></td>
    <td><code>var(--kendo-notification-bg, var(--kendo-color-base-subtle, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td>String</td>
    <td><code>var( --kendo-notification-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-notification-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td>String</td>
    <td><code>var( --kendo-notification-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-notification-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-notification-icon-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-notification-icon-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary-subtle),
    "secondary": k-color(secondary-subtle),
    "tertiary": k-color(tertiary-subtle),
    "info": k-color(info-subtle),
    "success": k-color(success-subtle),
    "warning": k-color(warning-subtle),
    "error": k-color(error-subtle),
    "dark": k-color(dark-subtle),
    "light": k-color(light-subtle),
    "inverse": if($kendo-is-dark-theme, k-color(light-subtle), k-color(dark-subtle))
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary-subtle, #ebf3fc)</li><li>secondary: var(--kendo-color-secondary-subtle, #f0f0f0)</li><li>tertiary: var(--kendo-color-tertiary-subtle, #fdf5fc)</li><li>info: var(--kendo-color-info-subtle, #f6fafe)</li><li>success: var(--kendo-color-success-subtle, #f1faf1)</li><li>warning: var(--kendo-color-warning-subtle, #fff9f5)</li><li>error: var(--kendo-color-error-subtle, #fdf3f4)</li><li>dark: var(--kendo-color-dark-subtle, #000000)</li><li>light: var(--kendo-color-light-subtle, #ffffff)</li><li>inverse: var(--kendo-color-dark-subtle, #000000)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Notification variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme</td>
    <td>Map</td>
    <td><code>notification-theme( $kendo-notification-theme-colors )</code></td>
    <td><ul><li>inverse: "color":"var(--kendo-color-inverse-on-subtle, #ffffff)","background-color":"var(--kendo-color-dark-subtle, #000000)","border":"var(--kendo-color-inverse-emphasis, #707070)"</li><li>light: "color":"var(--kendo-color-light-on-subtle, #616161)","background-color":"var(--kendo-color-light-subtle, #ffffff)","border":"var(--kendo-color-light-emphasis, #e0e0e0)"</li><li>dark: "color":"var(--kendo-color-dark-on-subtle, #ffffff)","background-color":"var(--kendo-color-dark-subtle, #000000)","border":"var(--kendo-color-dark-emphasis, #616161)"</li><li>error: "color":"var(--kendo-color-error-on-subtle, #b10e1c)","background-color":"var(--kendo-color-error-subtle, #fdf3f4)","border":"var(--kendo-color-error-emphasis, #eeacb2)"</li><li>warning: "color":"var(--kendo-color-warning-on-subtle, #8a3707)","background-color":"var(--kendo-color-warning-subtle, #fff9f5)","border":"var(--kendo-color-warning-emphasis, #fdcfb4)"</li><li>success: "color":"var(--kendo-color-success-on-subtle, #0e700e)","background-color":"var(--kendo-color-success-subtle, #f1faf1)","border":"var(--kendo-color-success-emphasis, #9fd89f)"</li><li>info: "color":"var(--kendo-color-info-on-subtle, #20547c)","background-color":"var(--kendo-color-info-subtle, #f6fafe)","border":"var(--kendo-color-info-emphasis, #bfddf5)"</li><li>tertiary: "color":"var(--kendo-color-tertiary-on-subtle, #af33a1)","background-color":"var(--kendo-color-tertiary-subtle, #fdf5fc)","border":"var(--kendo-color-tertiary-emphasis, #edbbe7)"</li><li>secondary: "color":"var(--kendo-color-secondary-on-subtle, #616161)","background-color":"var(--kendo-color-secondary-subtle, #f0f0f0)","border":"var(--kendo-color-secondary-emphasis, #e0e0e0)"</li><li>primary: "color":"var(--kendo-color-primary-on-subtle, #0a2e4a)","background-color":"var(--kendo-color-primary-subtle, #ebf3fc)","border":"var(--kendo-color-primary-emphasis, #abd1f8)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Notification.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

