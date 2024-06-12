---
title: Customizing Avatar
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_avatar
position: 9
---

# Customizing Avatar

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
    <td>$kendo-avatar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, inherit )</code></td>
    <td><code>var(--kendo-line-height, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-spacing(4),
    md: k-spacing(8),
    lg: k-spacing(16)
)</code></td>
    <td><ul><li>sm: var(--kendo-spacing-4, 1rem)</li><li>md: var(--kendo-spacing-8, 2rem)</li><li>lg: var(--kendo-spacing-16, 4rem)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-brand-colors</td>
    <td>Map</td>
    <td><code>(
    primary: primary,
    error: error,
    success: success,
    info: info,
    secondary: if($kendo-enable-color-system, secondary, neutral),
    tertiary: tertiary,
 )</code></td>
    <td><ul><li>primary: primary</li><li>error: error</li><li>success: success</li><li>info: info</li><li>secondary: secondary</li><li>tertiary: tertiary</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme variations for the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td>Map</td>
    <td><code>()</code></td>
    <td><ul><li>solid: "primary":{"bg":"var(--kendo-color-primary, #0078d4)","text":"var(--kendo-color-on-primary, #ffffff)","border":"var(--kendo-color-primary, #0078d4)"},"error":{"bg":"var(--kendo-color-error, #c2666b)","text":"var(--kendo-color-on-error, #ffffff)","border":"var(--kendo-color-error, #c2666b)"},"success":{"bg":"var(--kendo-color-success, #55a554)","text":"var(--kendo-color-on-success, #ffffff)","border":"var(--kendo-color-success, #55a554)"},"info":{"bg":"var(--kendo-color-info, #0a7eff)","text":"var(--kendo-color-on-info, #ffffff)","border":"var(--kendo-color-info, #0a7eff)"},"secondary":{"bg":"var(--kendo-color-secondary, #979593)","text":"var(--kendo-color-on-secondary, #ffffff)","border":"var(--kendo-color-secondary, #979593)"},"tertiary":{"bg":"var(--kendo-color-tertiary, #2b88d8)","text":"var(--kendo-color-on-tertiary, #ffffff)","border":"var(--kendo-color-tertiary, #2b88d8)"},"warning":{"bg":"var(--kendo-color-warning, #ffc80a)","text":"var(--kendo-color-on-warning, #323130)","border":"var(--kendo-color-warning, #ffc80a)"},"dark":{"bg":"var(--kendo-color-dark, #323130)","text":"var(--kendo-color-on-dark, #ffffff)","border":"var(--kendo-color-dark, #323130)"},"light":{"bg":"var(--kendo-color-light, #d2d0ce)","text":"var(--kendo-color-on-light, #323130)","border":"var(--kendo-color-light, #d2d0ce)"}</li><li>outline: "primary":{"bg":"var(--kendo-color-on-primary, #ffffff)","text":"var(--kendo-color-primary, #0078d4)","border":"var(--kendo-color-primary, #0078d4)"},"error":{"bg":"var(--kendo-color-on-error, #ffffff)","text":"var(--kendo-color-error, #c2666b)","border":"var(--kendo-color-error, #c2666b)"},"success":{"bg":"var(--kendo-color-on-success, #ffffff)","text":"var(--kendo-color-success, #55a554)","border":"var(--kendo-color-success, #55a554)"},"info":{"bg":"var(--kendo-color-on-info, #ffffff)","text":"var(--kendo-color-info, #0a7eff)","border":"var(--kendo-color-info, #0a7eff)"},"secondary":{"bg":"var(--kendo-color-on-secondary, #ffffff)","text":"var(--kendo-color-secondary, #979593)","border":"var(--kendo-color-secondary, #979593)"},"tertiary":{"bg":"var(--kendo-color-on-tertiary, #ffffff)","text":"var(--kendo-color-tertiary, #2b88d8)","border":"var(--kendo-color-tertiary, #2b88d8)"},"warning":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-warning, #ffc80a)","border":"var(--kendo-color-warning, #ffc80a)"},"dark":{"bg":"var(--kendo-color-on-dark, #ffffff)","text":"var(--kendo-color-dark, #323130)","border":"var(--kendo-color-dark, #323130)"},"light":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-light, #d2d0ce)","border":"var(--kendo-color-light, #d2d0ce)"}</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Avatar variations.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

