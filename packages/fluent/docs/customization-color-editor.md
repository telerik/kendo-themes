---
title: Customizing ColorEditor
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_color-editor
position: 9
---

# Customizing ColorEditor

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
    <td>$kendo-color-editor-spacer</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-spacer, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-spacer, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-min-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-min-width, 260px)</code></td>
    <td><code>var(--kendo-color-editor-min-width, 260px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-min-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-min-width, 236px)</code></td>
    <td><code>var(--kendo-color-editor-sm-min-width, 236px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-min-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-min-width, $kendo-color-editor-min-width)</code></td>
    <td><code>var(--kendo-color-editor-md-min-width, var(--kendo-color-editor-min-width, 260px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-min-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-min-width, 362px)</code></td>
    <td><code>var(--kendo-color-editor-lg-min-width, 362px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-border-width, 1px)</code></td>
    <td><code>var(--kendo-color-editor-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-radius</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-border-radius, k-border-radius(md))</code></td>
    <td><code>var(--kendo-color-editor-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-text</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-text, k-color(on-app-surface))</code></td>
    <td><code>var(--kendo-color-editor-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-bg</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-bg, k-color(surface-alt))</code></td>
    <td><code>var(--kendo-color-editor-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-border, color-mix(in srgb, k-color(border) 16%, transparent))</code></td>
    <td><code>var(--kendo-color-editor-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td><code>var(--kendo-box-shadow-depth-2, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-focus-border, color-mix(in srgb, k-color(border) 10%, transparent))</code></td>
    <td><code>var(--kendo-color-editor-focus-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-box-shadow-depth-3, none )</code></td>
    <td><code>var(--kendo-box-shadow-depth-3, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-actions-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-header-actions-spacing, calc( #{k-spacing(2)} / 2 ))</code></td>
    <td><code>var(--kendo-color-editor-header-actions-spacing, calc(var(--kendo-spacing-2, 0.5rem) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorEditor header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-header-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-header-padding-y, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-sm-header-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-header-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-header-padding-x, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-sm-header-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-header-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-header-padding-y, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-md-header-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-header-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-header-padding-x, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-md-header-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-header-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-header-padding-y, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-editor-lg-header-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-header-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-header-padding-x, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-editor-lg-header-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-color-preview-width, 34px)</code></td>
    <td><code>var(--kendo-color-editor-color-preview-width, 34px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-color-preview-height, 14px)</code></td>
    <td><code>var(--kendo-color-editor-color-preview-height, 14px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-preview-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-preview-spacing, k-spacing(1))</code></td>
    <td><code>var(--kendo-color-editor-preview-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-preview-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-preview-spacing, k-spacing(1))</code></td>
    <td><code>var(--kendo-color-editor-sm-preview-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the small ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-preview-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-preview-spacing, $kendo-color-editor-preview-spacing)</code></td>
    <td><code>var(--kendo-color-editor-md-preview-spacing, var(--kendo-color-editor-preview-spacing, var(--kendo-spacing-1, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the medium ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-preview-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-preview-spacing, k-spacing(1))</code></td>
    <td><code>var(--kendo-color-editor-lg-preview-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the large ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-color-preview-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-color-preview-width, 34px)</code></td>
    <td><code>var(--kendo-color-editor-sm-color-preview-width, 34px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-color-preview-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-color-preview-height, 12px)</code></td>
    <td><code>var(--kendo-color-editor-sm-color-preview-height, 12px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-color-preview-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-color-preview-width, $kendo-color-editor-color-preview-width)</code></td>
    <td><code>var(--kendo-color-editor-md-color-preview-width, var(--kendo-color-editor-color-preview-width, 34px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-color-preview-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-color-preview-height, $kendo-color-editor-color-preview-height)</code></td>
    <td><code>var(--kendo-color-editor-md-color-preview-height, var(--kendo-color-editor-color-preview-height, 14px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-color-preview-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-color-preview-width, 34px)</code></td>
    <td><code>var(--kendo-color-editor-lg-color-preview-width, 34px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-color-preview-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-color-preview-height, 16px)</code></td>
    <td><code>var(--kendo-color-editor-lg-color-preview-height, 16px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-views-spacing, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-views-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-views-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-views-padding-y, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-sm-views-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sm-views-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-sm-views-padding-x, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-sm-views-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-views-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-views-padding-y, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-md-views-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-md-views-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-md-views-padding-x, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-md-views-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-views-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-views-padding-y, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-editor-lg-views-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-lg-views-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-lg-views-padding-x, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-editor-lg-views-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-footer-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-footer-padding-y, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-editor-footer-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-color</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-color-gradient-focus-outline-color, rgba(0, 0, 0, 0.3))</code></td>
    <td><code>var(--kendo-color-editor-color-gradient-focus-outline-color, rgba(0, 0, 0, 0.3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-color-gradient-focus-outline, 2px)</code></td>
    <td><code>var(--kendo-color-editor-color-gradient-focus-outline, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-offset</td>
    <td>String</td>
    <td><code>var(--kendo-color-editor-color-gradient-focus-outline-offset, 2px)</code></td>
    <td><code>var(--kendo-color-editor-color-gradient-focus-outline-offset, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline offset of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        min-width: $kendo-color-editor-sm-min-width,
        header-padding-x: $kendo-color-editor-sm-header-padding-x,
        header-padding-y: $kendo-color-editor-sm-header-padding-y,
        views-padding-x: $kendo-color-editor-sm-views-padding-x,
        views-padding-y: $kendo-color-editor-sm-views-padding-y,
        preview-gap: $kendo-color-editor-sm-preview-spacing,
        preview-width: $kendo-color-editor-sm-color-preview-width,
        preview-height: $kendo-color-editor-sm-color-preview-height,

    ),
    md: (
        min-width: $kendo-color-editor-md-min-width,
        header-padding-x: $kendo-color-editor-md-header-padding-x,
        header-padding-y: $kendo-color-editor-md-header-padding-y,
        views-padding-x: $kendo-color-editor-md-views-padding-x,
        views-padding-y: $kendo-color-editor-md-views-padding-y,
        preview-gap: $kendo-color-editor-md-preview-spacing,
        preview-width: $kendo-color-editor-md-color-preview-width,
        preview-height: $kendo-color-editor-md-color-preview-height,
    ),
    lg: (
        min-width: $kendo-color-editor-lg-min-width,
        header-padding-x: $kendo-color-editor-lg-header-padding-x,
        header-padding-y: $kendo-color-editor-lg-header-padding-y,
        views-padding-x: $kendo-color-editor-lg-views-padding-x,
        views-padding-y: $kendo-color-editor-lg-views-padding-y,
        preview-gap: $kendo-color-editor-lg-preview-spacing,
        preview-width: $kendo-color-editor-lg-color-preview-width,
        preview-height: $kendo-color-editor-lg-color-preview-height,
    )
)</code></td>
    <td><ul><li>sm: "min-width":"var(--kendo-color-editor-sm-min-width, 236px)","header-padding-x":"var(--kendo-color-editor-sm-header-padding-x, var(--kendo-spacing-2, 0.5rem))","header-padding-y":"var(--kendo-color-editor-sm-header-padding-y, var(--kendo-spacing-2, 0.5rem))","views-padding-x":"var(--kendo-color-editor-sm-views-padding-x, var(--kendo-spacing-2, 0.5rem))","views-padding-y":"var(--kendo-color-editor-sm-views-padding-y, var(--kendo-spacing-2, 0.5rem))","preview-gap":"var(--kendo-color-editor-sm-preview-spacing, var(--kendo-spacing-1, 0.25rem))","preview-width":"var(--kendo-color-editor-sm-color-preview-width, 34px)","preview-height":"var(--kendo-color-editor-sm-color-preview-height, 12px)"</li><li>md: "min-width":"var(--kendo-color-editor-md-min-width, var(--kendo-color-editor-min-width, 260px))","header-padding-x":"var(--kendo-color-editor-md-header-padding-x, var(--kendo-spacing-2, 0.5rem))","header-padding-y":"var(--kendo-color-editor-md-header-padding-y, var(--kendo-spacing-2, 0.5rem))","views-padding-x":"var(--kendo-color-editor-md-views-padding-x, var(--kendo-spacing-2, 0.5rem))","views-padding-y":"var(--kendo-color-editor-md-views-padding-y, var(--kendo-spacing-2, 0.5rem))","preview-gap":"var(--kendo-color-editor-md-preview-spacing, var(--kendo-color-editor-preview-spacing, var(--kendo-spacing-1, 0.25rem)))","preview-width":"var(--kendo-color-editor-md-color-preview-width, var(--kendo-color-editor-color-preview-width, 34px))","preview-height":"var(--kendo-color-editor-md-color-preview-height, var(--kendo-color-editor-color-preview-height, 14px))"</li><li>lg: "min-width":"var(--kendo-color-editor-lg-min-width, 362px)","header-padding-x":"var(--kendo-color-editor-lg-header-padding-x, var(--kendo-spacing-4, 1rem))","header-padding-y":"var(--kendo-color-editor-lg-header-padding-y, var(--kendo-spacing-4, 1rem))","views-padding-x":"var(--kendo-color-editor-lg-views-padding-x, var(--kendo-spacing-4, 1rem))","views-padding-y":"var(--kendo-color-editor-lg-views-padding-y, var(--kendo-spacing-4, 1rem))","preview-gap":"var(--kendo-color-editor-lg-preview-spacing, var(--kendo-spacing-1, 0.25rem))","preview-width":"var(--kendo-color-editor-lg-color-preview-width, 34px)","preview-height":"var(--kendo-color-editor-lg-color-preview-height, 16px)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map of the ColorEditor preview.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

