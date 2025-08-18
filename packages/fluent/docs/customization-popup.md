---
title: Customizing Popup
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_popup
position: 9
---

# Customizing Popup

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
    <td>$kendo-popup-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-popup-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-popup-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-popup-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-popup-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-popup-border-width, 0 )</code></td>
    <td><code>var(--kendo-popup-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-popup-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-popup-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-popup-font-size, var( --kendo-font-size, inherit) )</code></td>
    <td><code>var(--kendo-popup-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-popup-line-height, var( --kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-popup-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-popup-content-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-popup-content-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the content inside the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-popup-content-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-popup-content-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the content inside the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-bg</td>
    <td>String</td>
    <td><code>var( --kendo-popup-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-popup-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-text</td>
    <td>String</td>
    <td><code>var( --kendo-popup-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-popup-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border</td>
    <td>String</td>
    <td><code>var( --kendo-popup-border, transparent )</code></td>
    <td><code>var(--kendo-popup-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-popup-shadow, var( --kendo-box-shadow-depth-5, none ) )</code></td>
    <td><code>var(--kendo-popup-shadow, var(--kendo-box-shadow-depth-5, none))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow around the popup.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

