---
title: Customizing DockManager
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_dock-manager
position: 9
---

# Customizing DockManager

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
    <td>$kendo-dock-manager-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-border-width, 1px )</code></td>
    <td><code>var(--kendo-dock-manager-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The width of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-border-style, solid )</code></td>
    <td><code>var(--kendo-dock-manager-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-border</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-dock-manager-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-header-padding-y, k-spacing(1) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-header-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-header-padding-x, k-spacing(6) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-header-padding-x, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-header-border-width, $kendo-dock-manager-border-width )</code></td>
    <td><code>var(--kendo-dock-manager-pane-header-border-width, var(--kendo-dock-manager-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-header-border-style, solid )</code></td>
    <td><code>var(--kendo-dock-manager-pane-header-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The style of the border around the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-header-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-header-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-header-text, k-color(primary) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-header-text, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-title-padding-y, null )</code></td>
    <td><code>var(--kendo-dock-manager-pane-title-padding-y, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-title-padding-x, null )</code></td>
    <td><code>var(--kendo-dock-manager-pane-title-padding-x, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-title-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-title-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-title-font-size, var( --kendo-font-size-lg, inherit ) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-title-font-size, var(--kendo-font-size-lg, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-title-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-title-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-title-font-weight, var( --kendo-font-weight, normal ) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-title-font-weight, var(--kendo-font-weight, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-content-padding-x, k-spacing(3) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-content-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane content in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-pane-content-padding-y, k-spacing(3) )</code></td>
    <td><code>var(--kendo-dock-manager-pane-content-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane content in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-tabbed-pane-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-tabbed-pane-padding-y, null )</code></td>
    <td><code>var(--kendo-dock-manager-tabbed-pane-padding-y, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabbed pane in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-tabbed-pane-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-tabbed-pane-padding-x, null )</code></td>
    <td><code>var(--kendo-dock-manager-tabbed-pane-padding-x, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabbed pane in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-width</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-unpinned-container-width, 300px )</code></td>
    <td><code>var(--kendo-dock-manager-unpinned-container-width, 300px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-bg</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-unpinned-container-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-dock-manager-unpinned-container-bg, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background-color of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-unpinned-container-shadow, 25.6px 0px 57.6px 0px rgba(0, 0, 0, 0.22), 4.8px 0px 14.4px 0px rgba(0, 0, 0, 0.18) )</code></td>
    <td><code>var(--kendo-dock-manager-unpinned-container-shadow, 25.6px 0px 57.6px 0px rgba(0, 0, 0, 0.22), 4.8px 0px 14.4px 0px rgba(0, 0, 0, 0.18))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-padding</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-padding, k-spacing(1.5) )</code></td>
    <td><code>var(--kendo-dock-indicator-padding, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-bg</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-dock-indicator-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-text</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-text, k-color(primary) )</code></td>
    <td><code>var(--kendo-dock-indicator-text, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-outline-width, 1px )</code></td>
    <td><code>var(--kendo-dock-indicator-outline-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-outline-style, solid )</code></td>
    <td><code>var(--kendo-dock-indicator-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-outline, $kendo-dock-indicator-text )</code></td>
    <td><code>var(--kendo-dock-indicator-outline, var(--kendo-dock-indicator-text, var(--kendo-color-primary, #0078d4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-shadow, 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.20) )</code></td>
    <td><code>var(--kendo-dock-indicator-shadow, 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-hover-bg, k-color(primary-hover) )</code></td>
    <td><code>var(--kendo-dock-indicator-hover-bg, var(--kendo-color-primary-hover, #106ebe))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The background color of the hovered dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-dock-indicator-hover-text, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-dock-indicator-hover-text, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-dock-preview-border-width, 1px )</code></td>
    <td><code>var(--kendo-dock-manager-dock-preview-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-dock-preview-border-style, dashed )</code></td>
    <td><code>var(--kendo-dock-manager-dock-preview-border-style, dashed)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-dock-preview-border-radius, var( --kendo-border-radius-md, 0) )</code></td>
    <td><code>var(--kendo-dock-manager-dock-preview-border-radius, var(--kendo-border-radius-md, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-bg</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-dock-preview-bg, color-mix(in srgb, k-color(primary) 20%, transparent) )</code></td>
    <td><code>var(--kendo-dock-manager-dock-preview-bg, color-mix(in srgb, var(--kendo-color-primary, #0078d4) 20%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border</td>
    <td>String</td>
    <td><code>var( --kendo-dock-manager-dock-preview-border, k-color(primary) )</code></td>
    <td><code>var(--kendo-dock-manager-dock-preview-border, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

