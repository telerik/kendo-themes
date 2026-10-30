---
title: Customizing ImageEditor
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_image-editor
position: 9
---

# Customizing ImageEditor

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
    <td>$kendo-image-editor-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-image-editor-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-image-editor-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-border, color-mix(in srgb, #{k-color(border)} 16%, transparent) )</code></td>
    <td><code>var(--kendo-image-editor-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-margin-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-margin-y, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-margin-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-margin-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-padding-y, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-padding-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-border-width, 1px )</code></td>
    <td><code>var(--kendo-image-editor-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-border-radius, null )</code></td>
    <td><code>var(--kendo-image-editor-border-radius, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-font-size, var(--kendo-font-size) )</code></td>
    <td><code>var(--kendo-image-editor-font-size, var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-line-height, var(--kendo-line-height) )</code></td>
    <td><code>var(--kendo-image-editor-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-font-family, var(--kendo-font-family) )</code></td>
    <td><code>var(--kendo-image-editor-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-content-bg, #{k-color(base-subtle)} )</code></td>
    <td><code>var(--kendo-image-editor-content-bg, var(--kendo-color-base-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-content-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-content-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-content-border, inherit )</code></td>
    <td><code>var(--kendo-image-editor-content-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-border, inherit )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-padding-y, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-padding-x, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-width, calc( 320px + #{$kendo-image-editor-content-border-width}) )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-width, calc(320px + 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-title-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-pane-title-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor pane title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-bg, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-bg, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-border, color-mix(in srgb, #{k-color(border)} 16%, transparent) )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-hover-bg, color-mix(in srgb, #{k-color(on-app-surface)} 5%, transparent) )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-hover-bg, color-mix(in srgb, var(--kendo-color-on-app-surface) 5%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of a hovered ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-hover-text, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-hover-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a hovered ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-focus-shadow, inset 0 0 0 2px #{k-color(border-alt)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of a focused ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-shadow, inset 0 0 0 2px #{k-color(primary)}, inset 0 0 0 4px #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-shadow, inset 0 0 0 2px var(--kendo-color-primary), inset 0 0 0 4px var(--kendo-color-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-border, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-border, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-text, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-font-weight, var(--kendo-font-weight-semibold) )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-font-weight, var(--kendo-font-weight-semibold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-header-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-header-padding-y, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-header-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-header-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-header-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-header-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the title and the actions of the ImageEditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-top</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-padding-top, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-padding-top, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-bottom</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-padding-bottom, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-padding-bottom, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-gap, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-gap, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the fields of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-adjustment-row-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-adjustment-row-gap, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-adjustment-row-gap, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the slider and the numeric input of an ImageEditor adjustment row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-footer-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-footer-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-footer-padding-y, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor pane footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-footer-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-footer-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-footer-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor pane footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-list-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-list-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-option-list-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the ImageEditor option list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-list-scroll-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-list-scroll-gradient, rgba(255, 255, 255, 0) 0%, #{k-color(surface-alt)} 100% )</code></td>
    <td><code>var(--kendo-image-editor-option-list-scroll-gradient, rgba(255, 255, 255, 0) 0%, var(--kendo-color-surface-alt) 100%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The scroll-fade gradient stops of the ImageEditor option list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-padding-y, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-padding-y, var(--kendo-spacing-1\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-padding-x, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-padding-x, var(--kendo-spacing-1\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-border-radius, #{k-border-radius(sm)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-border-radius, var(--kendo-border-radius-sm))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-width, 88px )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-width, 88px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-label-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-imageeditor-option-label-font-size, var(--kendo-font-size-sm) )</code></td>
    <td><code>var(--kendo-imageeditor-option-label-font-size, var(--kendo-font-size-sm))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ImageEditor option label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-bg, inherit )</code></td>
    <td><code>var(--kendo-image-editor-frame-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-frame-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-border, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-image-editor-frame-border, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-overlay-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-crop-overlay-bg, rgba( $kendo-color-black, .2 ) )</code></td>
    <td><code>var(--kendo-image-editor-crop-overlay-bg, rgba(0, 0, 0, 0.2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor crop overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-overlay-accent-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-crop-overlay-accent-bg, #{color-mix(in srgb, k-color(primary) 8%, transparent)} )</code></td>
    <td><code>var(--kendo-image-editor-crop-overlay-accent-bg, color-mix(in srgb, var(--kendo-color-primary) 8%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The accent-tinted overlay color of the ImageEditor crop overlay, layered above the background.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-grid-line-color</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-grid-line-color, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-image-editor-grid-line-color, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the ImageEditor rule-of-thirds grid lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-bg, #{k-color(primary-subtle)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-bg, var(--kendo-color-primary-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-border, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-border, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-border-width, 2px )</code></td>
    <td><code>var(--kendo-image-editor-frame-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-border-style, solid )</code></td>
    <td><code>var(--kendo-image-editor-frame-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-margin-x, 0 )</code></td>
    <td><code>var(--kendo-image-editor-handle-margin-x, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-margin-y, 0 )</code></td>
    <td><code>var(--kendo-image-editor-handle-margin-y, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-border-width, 2px )</code></td>
    <td><code>var(--kendo-image-editor-handle-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-size</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-size, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-size, var(--kendo-spacing-6))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-thickness</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-thickness, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-thickness, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-border-radius, #{k-border-radius(full)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-border-radius, var(--kendo-border-radius-full))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-scale-handle-size</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-scale-handle-size, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-scale-handle-size, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ImageEditor scale handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-rotate-handle-offset</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-rotate-handle-offset, 24px )</code></td>
    <td><code>var(--kendo-image-editor-rotate-handle-offset, 24px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The distance between the bottom edge of the selection frame and the ImageEditor rotate handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-rotate-handle-padding</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-rotate-handle-padding, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-image-editor-rotate-handle-padding, var(--kendo-spacing-0\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the ImageEditor rotate handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-top-offset</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-resize-top-offset, calc( #{$kendo-image-editor-handle-size} / 2 ) )</code></td>
    <td><code>var(--kendo-image-editor-resize-top-offset, calc(var(--kendo-image-editor-handle-size, var(--kendo-spacing-6)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle top offset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-left-offset</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-resize-left-offset, calc( #{$kendo-image-editor-handle-size} / 2 ) )</code></td>
    <td><code>var(--kendo-image-editor-resize-left-offset, calc(var(--kendo-image-editor-handle-size, var(--kendo-spacing-6)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle left offset.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

