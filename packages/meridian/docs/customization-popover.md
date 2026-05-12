---
title: Customizing Popover
description: "Refer to the list of the Kendo UI Meridian theme variables available for customization."
slug: variables_kendothememeridian_popover
position: 9
---

# Customizing Popover

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
    <td>$kendo-popover-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-radius</td>
    <td>String</td>
    <td><code>$kendo-card-border-radius</code></td>
    <td><code>var(--kendo-border-radius-xxl)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-family</td>
    <td>String</td>
    <td><code>$kendo-card-font-family</code></td>
    <td><code>var(--kendo-font-family)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-size</td>
    <td>String</td>
    <td><code>$kendo-card-font-size</code></td>
    <td><code>var(--kendo-font-size)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-line-height</td>
    <td>String</td>
    <td><code>$kendo-card-line-height</code></td>
    <td><code>var(--kendo-line-height)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-bg</td>
    <td>String</td>
    <td><code>k-translucency-bg(k-elevation-bg(2, k-color(surface-alt)))</code></td>
    <td><code>oklch(from oklch(from var(--kendo-color-surface-alt) calc(l + 2 * 0.015 * clamp(0, (0.5 - l) * 99999, 1)) calc(c + 2 * 0.001 * clamp(0, (0.5 - l) * 99999, 1)) h) l c h / calc(100% - calc(var(--kendo-translucency-base, 0%))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-shadow</td>
    <td>String</td>
    <td><code>$kendo-popup-shadow</code></td>
    <td><code>var(--kendo-elevation-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-y</td>
    <td>List</td>
    <td><code>k-spacing(4) k-spacing(2)</code></td>
    <td><code>(var(--kendo-spacing-4) var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-style</td>
    <td>String</td>
    <td><code>$kendo-popover-border-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-text</td>
    <td>String</td>
    <td><code>$kendo-card-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-bg</td>
    <td>Null</td>
    <td><code>$kendo-card-header-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border</td>
    <td>Null</td>
    <td><code>$kendo-card-header-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-x</td>
    <td>String</td>
    <td><code>$kendo-card-body-padding-x</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-padding-y</td>
    <td>List</td>
    <td><code>k-spacing(2) k-spacing(4)</code></td>
    <td><code>(var(--kendo-spacing-2) var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-width</td>
    <td>Number</td>
    <td><code>$kendo-card-callout-width</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-height</td>
    <td>Number</td>
    <td><code>$kendo-card-callout-height</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popover-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-style</td>
    <td>String</td>
    <td><code>$kendo-popover-border-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border</td>
    <td>String</td>
    <td><code>$kendo-popover-border</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover callout.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

