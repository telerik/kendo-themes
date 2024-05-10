---
title: Customizing Mediaplayer
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_mediaplayer
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-bg</td>
    <td>String</td>
    <td><code>var( --kendo-component-bg, inherit )</code></td>
    <td><code>var(--kendo-component-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-text</td>
    <td>String</td>
    <td><code>var( --kendo-component-text, inherit )</code></td>
    <td><code>var(--kendo-component-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-border</td>
    <td>String</td>
    <td><code>var( --kendo-component-border, inherit )</code></td>
    <td><code>var(--kendo-component-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-overlay-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-emphasis ), k-get-theme-color-var( neutral-130 ))</code></td>
    <td><code>var(--kendo-color-base-emphasis, #605e5c)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer overlay background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-quality-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-get-theme-color-var( neutral-110 ))</code></td>
    <td><code>var(--kendo-color-border, #8a8886)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer quality button border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xl, inherit )</code></td>
    <td><code>var(--kendo-font-size-xl, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Media player title font size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 40%, transparent), rgba( $kendo-color-black, .4 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 40%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-media-player-titlebar-text</td>
    <td>String</td>
    <td><code>$kendo-media-player-bg</code></td>
    <td><code>var(--kendo-component-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar text color.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

