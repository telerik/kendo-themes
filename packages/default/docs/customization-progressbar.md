---
title: Customizing Progressbar
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_progressbar
position: 9
---

# Customizing Progressbar

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
    <td>$kendo-progressbar-height</td>
    <td>Number</td>
    <td><code>22px</code></td>
    <td><code>22px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-horizontal-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal width of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-animation-timing</td>
    <td>List</td>
    <td><code>1s linear infinite</code></td>
    <td><code>1s linear infinite</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The animation timing of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), k-try-shade( $kendo-component-bg, 1 ))</code></td>
    <td><code>var(--kendo-color-base-subtle, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress background color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-progressbar-value-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress text color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-progressbar-value-bg ))</code></td>
    <td><code>var(--kendo-color-primary-active, #d45349)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress border color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress background gradient of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-bg</td>
    <td>String</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><code>var(--kendo-color-base-subtle, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-text</td>
    <td>String</td>
    <td><code>$kendo-progressbar-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-border</td>
    <td>String</td>
    <td><code>$kendo-progressbar-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-chunk-border</td>
    <td>String</td>
    <td><code>$kendo-body-bg</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chunk ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-arc-stroke</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The arc stroke color of the circular ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-scale-stroke</td>
    <td>String</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><code>var(--kendo-color-base-subtle, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The scale stroke background color of the circular ProgressBar.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

