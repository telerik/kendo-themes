---
title: Customizing Mediaplayer
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_mediaplayer
position: 9
---

# Customizing Mediaplayer

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
    <td>$kendo-media-player-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, rgba(29, 27, 32, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the MediaPlayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the MediaPlayer title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the MediaPlayer title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the MediaPlayer title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-text</td>
    <td>String</td>
    <td><code>$kendo-media-player-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the MediaPlayer title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the MediaPlayer title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-gradient</td>
    <td>List</td>
    <td><code>if($kendo-enable-color-system, ( color-mix(in srgb, k-color( on-app-surface ) 70%, transparent), color-mix(in srgb, k-color( on-app-surface ) 0%, transparent) ), ( rgba( $kendo-media-player-text, .7 ), rgba( $kendo-media-player-text, 0 ) ))</code></td>
    <td><code>(color-mix(in srgb, var(--kendo-color-on-app-surface, #1D1B20) 70%, transparent), color-mix(in srgb, var(--kendo-color-on-app-surface, #1D1B20) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the MediaPlayer title.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

