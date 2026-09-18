---
title: Customizing ImageEditor
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_image-editor
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
    <td>$kendo-image-editor-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-font-size)</code></td>
    <td><code>var(--kendo-font-size)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-line-height</td>
    <td>String</td>
    <td><code>var(--kendo-line-height)</code></td>
    <td><code>var(--kendo-line-height)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-family</td>
    <td>String</td>
    <td><code>var(--kendo-font-family)</code></td>
    <td><code>var(--kendo-font-family)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(8)</code></td>
    <td><code>var(--kendo-spacing-8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-width</td>
    <td>Calculation</td>
    <td><code>if( $kendo-image-editor-content-border-width == null, 320px, calc(320px + #{$kendo-image-editor-content-border-width}) )</code></td>
    <td><code>calc(320px + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the title and the actions of the ImageEditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-top</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-bottom</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-gap</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the fields of the ImageEditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-footer-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor pane footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-footer-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor pane footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-list-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the ImageEditor option list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-list-scroll-gradient</td>
    <td>List</td>
    <td><code>rgba(255, 255, 255, 0) 0%, k-color(surface-alt) 100%</code></td>
    <td><code>(rgba(255, 255, 255, 0) 0%, var(--kendo-color-surface-alt) 100%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The scroll-fade gradient stops of the ImageEditor option list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-width</td>
    <td>Number</td>
    <td><code>88px</code></td>
    <td><code>88px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-margin-x</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-margin-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-size</td>
    <td>Number</td>
    <td><code>24px</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-thickness</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(full)</code></td>
    <td><code>var(--kendo-border-radius-full)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-scale-handle-size</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ImageEditor scale handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-bg</td>
    <td>String</td>
    <td><code>k-color(surface)</code></td>
    <td><code>var(--kendo-color-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-title-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor pane title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of an ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 8%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of a hovered ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a hovered ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px k-color(base-emphasis), inset 0 0 0 4px k-color(app-surface)</code></td>
    <td><code>(inset 0 0 0 2px var(--kendo-color-base-emphasis), inset 0 0 0 4px var(--kendo-color-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of a focused ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-border</td>
    <td>String</td>
    <td><code>k-color(secondary-emphasis)</code></td>
    <td><code>var(--kendo-color-secondary-emphasis)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-text</td>
    <td>String</td>
    <td><code>k-color(secondary-on-surface)</code></td>
    <td><code>var(--kendo-color-secondary-on-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-font-weight</td>
    <td>String</td>
    <td><code>var(--kendo-font-weight-semibold)</code></td>
    <td><code>var(--kendo-font-weight-semibold)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of a selected ImageEditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor overlay frame.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-overlay-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(inverse) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-inverse) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor crop overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-grid-line-color</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the ImageEditor rule-of-thirds grid lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-bg</td>
    <td>String</td>
    <td><code>k-color(primary-subtle)</code></td>
    <td><code>var(--kendo-color-primary-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor handle.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

