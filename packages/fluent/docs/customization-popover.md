---
title: Customizing Popover
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_popover
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
    <td>String</td>
    <td><code>var( --kendo-popover-border-width, #{$kendo-dialog-border-width} )</code></td>
    <td><code>var(--kendo-popover-border-width, var(--kendo-dialog-border-width, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-popover-border-style, solid )</code></td>
    <td><code>var(--kendo-popover-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-popover-border-radius, #{$kendo-window-border-radius} )</code></td>
    <td><code>var(--kendo-popover-border-radius, var(--kendo-window-border-radius, var(--kendo-border-radius-md, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-popover-font-family, #{$kendo-window-font-family} )</code></td>
    <td><code>var(--kendo-popover-font-family, var(--kendo-window-font-family, var(--kendo-font-family, inherit)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-popover-font-size, #{$kendo-window-font-size} )</code></td>
    <td><code>var(--kendo-popover-font-size, var(--kendo-window-font-size, var(--kendo-font-size, inherit)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-popover-line-height, #{$kendo-window-line-height} )</code></td>
    <td><code>var(--kendo-popover-line-height, var(--kendo-window-line-height, var(--kendo-line-height, normal)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-text</td>
    <td>String</td>
    <td><code>var( --kendo-popover-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-popover-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-popover-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-popover-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border</td>
    <td>String</td>
    <td><code>var( --kendo-popover-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-popover-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-popover-shadow, var( --kendo-box-shadow-depth-6, none ) )</code></td>
    <td><code>var(--kendo-popover-shadow, var(--kendo-box-shadow-depth-6, none))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-padding-x, #{$kendo-dialog-titlebar-padding-x} )</code></td>
    <td><code>var(--kendo-popover-header-padding-x, var(--kendo-dialog-titlebar-padding-x, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-padding-y, #{$kendo-dialog-titlebar-padding-y} )</code></td>
    <td><code>var(--kendo-popover-header-padding-y, var(--kendo-dialog-titlebar-padding-y, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-border-width, #{$kendo-dialog-titlebar-border-width} )</code></td>
    <td><code>var(--kendo-popover-header-border-width, var(--kendo-dialog-titlebar-border-width, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-border-style, #{$kendo-popover-border-style} )</code></td>
    <td><code>var(--kendo-popover-header-border-style, var(--kendo-popover-border-style, solid))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-text, #{$kendo-dialog-titlebar-text} )</code></td>
    <td><code>var(--kendo-popover-header-text, var(--kendo-dialog-titlebar-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-bg, #{$kendo-dialog-titlebar-bg} )</code></td>
    <td><code>var(--kendo-popover-header-bg, var(--kendo-dialog-titlebar-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-popover-header-border, #{$kendo-dialog-titlebar-border} )</code></td>
    <td><code>var(--kendo-popover-header-border, var(--kendo-dialog-titlebar-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-popover-body-padding-x, #{$kendo-window-inner-padding-x} )</code></td>
    <td><code>var(--kendo-popover-body-padding-x, var(--kendo-window-inner-padding-x, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-popover-body-padding-y, #{$kendo-window-inner-padding-y} )</code></td>
    <td><code>var(--kendo-popover-body-padding-y, var(--kendo-window-inner-padding-y, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-popover-actions-border-width, 0 )</code></td>
    <td><code>var(--kendo-popover-actions-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-popover-actions-padding-x, #{$kendo-popover-body-padding-x} )</code></td>
    <td><code>var(--kendo-popover-actions-padding-x, var(--kendo-popover-body-padding-x, var(--kendo-window-inner-padding-x, var(--kendo-spacing-6, 1.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-popover-actions-padding-y, #{$kendo-popover-body-padding-y} )</code></td>
    <td><code>var(--kendo-popover-actions-padding-y, var(--kendo-popover-body-padding-y, var(--kendo-window-inner-padding-y, var(--kendo-spacing-3, 0.75rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-gap</td>
    <td>String</td>
    <td><code>var( --kendo-popover-actions-gap, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-popover-actions-gap, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-width</td>
    <td>String</td>
    <td><code>var( --kendo-popover-callout-width, #{k-spacing(5)} )</code></td>
    <td><code>var(--kendo-popover-callout-width, var(--kendo-spacing-5, 1.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-height</td>
    <td>String</td>
    <td><code>var( --kendo-popover-callout-height, #{$kendo-popover-callout-width} )</code></td>
    <td><code>var(--kendo-popover-callout-height, var(--kendo-popover-callout-width, var(--kendo-spacing-5, 1.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-popover-callout-border-width, #{$kendo-popover-border-width} )</code></td>
    <td><code>var(--kendo-popover-callout-border-width, var(--kendo-popover-border-width, var(--kendo-dialog-border-width, 0)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-popover-callout-border-style, #{$kendo-popover-border-style} )</code></td>
    <td><code>var(--kendo-popover-callout-border-style, var(--kendo-popover-border-style, solid))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover callout.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

