---
title: Customizing Notification
description: "Refer to the list of the Kendo UI Meridian theme variables available for customization."
slug: variables_kendothememeridian_notification
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
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row-gap between the elements in the Notification group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-actions-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-actions-padding-y</td>
    <td>Null</td>
    <td><code>$kendo-notification-actions-padding-x</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Notification actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-bg</td>
    <td>String</td>
    <td><code>k-elevation-bg(2, k-color(surface-alt))</code></td>
    <td><code>oklch(from var(--kendo-color-surface-alt) calc(l + 2 * 0.015 * clamp(0, (0.5 - l) * 99999, 1)) calc(c + 2 * 0.001 * clamp(0, (0.5 - l) * 99999, 1)) h)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td>String</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>var(--kendo-spacing-1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>List</td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverse")</code></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverse")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme</td>
    <td>Map</td>
    <td><code>notification-theme( $kendo-notification-theme-colors )</code></td>
    <td><ul><li>inverse: "color":"var(--kendo-color-on-inverse)","background-color":"var(--kendo-color-inverse)","border":"var(--kendo-color-inverse)"</li><li>error: "color":"var(--kendo-color-on-error)","background-color":"var(--kendo-color-error)","border":"var(--kendo-color-error)"</li><li>warning: "color":"var(--kendo-color-on-warning)","background-color":"var(--kendo-color-warning)","border":"var(--kendo-color-warning)"</li><li>success: "color":"var(--kendo-color-on-success)","background-color":"var(--kendo-color-success)","border":"var(--kendo-color-success)"</li><li>info: "color":"var(--kendo-color-on-info)","background-color":"var(--kendo-color-info)","border":"var(--kendo-color-info)"</li><li>tertiary: "color":"var(--kendo-color-on-tertiary)","background-color":"var(--kendo-color-tertiary)","border":"var(--kendo-color-tertiary)"</li><li>secondary: "color":"var(--kendo-color-on-secondary)","background-color":"var(--kendo-color-secondary)","border":"var(--kendo-color-secondary)"</li><li>primary: "color":"var(--kendo-color-on-primary)","background-color":"var(--kendo-color-primary)","border":"var(--kendo-color-primary)"</li><li>base: "color":"var(--kendo-color-on-base)","background-color":"var(--kendo-color-base)","border":"var(--kendo-color-base)"</li></ul></td>
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

