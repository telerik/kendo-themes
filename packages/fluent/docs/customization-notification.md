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
    <td>$kendo-notification-default-theme-color</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default theme color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-group-gap</td>
    <td>String</td>
    <td><code>var( --kendo-notification-group-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-notification-group-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row-gap between the elements in the Notification group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-notification-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-notification-padding-x, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-notification-padding-y, calc(#{k-spacing(2)} + 1px) )</code></td>
    <td><code>var(--kendo-notification-padding-y, calc(var(--kendo-spacing-2) + 1px))</code></td>
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
    <td><code>var(--kendo-notification-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-notification-font-family, var(--kendo-font-family) )</code></td>
    <td><code>var(--kendo-notification-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-notification-font-size, var(--kendo-font-size-sm) )</code></td>
    <td><code>var(--kendo-notification-font-size, var(--kendo-font-size-sm))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-notification-line-height, var(--kendo-line-height-lg) )</code></td>
    <td><code>var(--kendo-notification-line-height, var(--kendo-line-height-lg))</code></td>
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
    <td><code>var(--kendo-notification-bg, var(--kendo-color-base-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td>String</td>
    <td><code>var( --kendo-notification-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-notification-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td>String</td>
    <td><code>var( --kendo-notification-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-notification-border, color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-notification-icon-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-notification-icon-spacing, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>Null</td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme</td>
    <td>Map</td>
    <td><code>notification-theme( $kendo-notification-theme-colors )</code></td>
    <td><ul><li>inverse: "color":"var(--kendo-color-inverse-on-subtle)","background-color":"var(--kendo-color-inverse-subtle)","border":"var(--kendo-color-inverse-emphasis)"</li><li>light: "color":"var(--kendo-color-light-on-subtle)","background-color":"var(--kendo-color-light-subtle)","border":"var(--kendo-color-light-emphasis)"</li><li>dark: "color":"var(--kendo-color-dark-on-subtle)","background-color":"var(--kendo-color-dark-subtle)","border":"var(--kendo-color-dark-emphasis)"</li><li>error: "color":"var(--kendo-color-error-on-subtle)","background-color":"var(--kendo-color-error-subtle)","border":"var(--kendo-color-error-emphasis)"</li><li>warning: "color":"var(--kendo-color-warning-on-subtle)","background-color":"var(--kendo-color-warning-subtle)","border":"var(--kendo-color-warning-emphasis)"</li><li>success: "color":"var(--kendo-color-success-on-subtle)","background-color":"var(--kendo-color-success-subtle)","border":"var(--kendo-color-success-emphasis)"</li><li>info: "color":"var(--kendo-color-info-on-subtle)","background-color":"var(--kendo-color-info-subtle)","border":"var(--kendo-color-info-emphasis)"</li><li>tertiary: "color":"var(--kendo-color-tertiary-on-subtle)","background-color":"var(--kendo-color-tertiary-subtle)","border":"var(--kendo-color-tertiary-emphasis)"</li><li>secondary: "color":"var(--kendo-color-secondary-on-subtle)","background-color":"var(--kendo-color-secondary-subtle)","border":"var(--kendo-color-secondary-emphasis)"</li><li>primary: "color":"var(--kendo-color-primary-on-subtle)","background-color":"var(--kendo-color-primary-subtle)","border":"var(--kendo-color-primary-emphasis)"</li><li>base: "color":"var(--kendo-color-base-on-subtle)","background-color":"var(--kendo-color-base-subtle)","border":"var(--kendo-color-base-emphasis)"</li></ul></td>
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

