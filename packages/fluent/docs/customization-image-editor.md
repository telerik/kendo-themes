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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-image-editor-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-border, color-mix(in srgb, #{k-color(border)} 16%, transparent) )</code></td>
    <td><code>var(--kendo-image-editor-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-margin-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-margin-y, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-margin-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-margin-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-padding-y, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-image-editor-padding-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-border-width, 1px )</code></td>
    <td><code>var(--kendo-image-editor-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the imageeditor.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-line-height, var(--kendo-line-height) )</code></td>
    <td><code>var(--kendo-image-editor-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-font-family, var(--kendo-font-family) )</code></td>
    <td><code>var(--kendo-image-editor-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-content-bg, #{k-color(base-subtle)} )</code></td>
    <td><code>var(--kendo-image-editor-content-bg, var(--kendo-color-base-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-content-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-content-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-content-border, inherit )</code></td>
    <td><code>var(--kendo-image-editor-content-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-border, inherit )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-padding-y, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-padding-x, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-action-pane-width, calc( 320px + #{$kendo-image-editor-content-border-width}) )</code></td>
    <td><code>var(--kendo-image-editor-action-pane-width, calc(320px + 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-title-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-pane-title-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane title text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-bg, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-bg, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-border, color-mix(in srgb, #{k-color(border)} 16%, transparent) )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-hover-bg, color-mix(in srgb, #{k-color(on-app-surface)} 5%, transparent) )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-hover-bg, color-mix(in srgb, var(--kendo-color-on-app-surface) 5%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview hover background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-hover-text, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-hover-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview hover text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-focus-shadow, inset 0 0 0 2px #{k-color(border-alt)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview focus box shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-shadow, inset 0 0 0 2px #{k-color(primary)}, inset 0 0 0 4px #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-shadow, inset 0 0 0 2px var(--kendo-color-primary), inset 0 0 0 4px var(--kendo-color-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview selected box shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-border, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-border, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview selected border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-text, null )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview selected text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-selected-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-selected-font-weight, var(--kendo-font-weight-semibold) )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-selected-font-weight, var(--kendo-font-weight-semibold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor option preview selected font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-header-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-header-padding-y, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane header vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-header-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-header-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane header horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-header-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-header-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-header-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap between the title and the actions of the imageeditor pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-top</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-padding-top, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-padding-top, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane content top padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-bottom</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-padding-bottom, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-padding-bottom, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane content bottom padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane content horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-content-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-content-gap, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-content-gap, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap between the fields of the imageeditor pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-adjustment-row-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-adjustment-row-gap, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-adjustment-row-gap, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap between the slider and the numeric input of an imageeditor adjustment row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-footer-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-footer-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-footer-padding-y, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane footer vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-pane-footer-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-pane-footer-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-image-editor-pane-footer-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor pane footer horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-list-gap</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-list-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-option-list-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap between the imageeditor option list items.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of an imageeditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-padding-x, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of an imageeditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of an imageeditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-option-preview-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-option-preview-width, 88px )</code></td>
    <td><code>var(--kendo-image-editor-option-preview-width, 88px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of an imageeditor option preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-bg, inherit )</code></td>
    <td><code>var(--kendo-image-editor-frame-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-text</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-text, inherit )</code></td>
    <td><code>var(--kendo-image-editor-frame-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop text color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-border, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-image-editor-frame-border, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop border color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-overlay-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-crop-overlay-bg, rgba( $kendo-color-black, .2 ) )</code></td>
    <td><code>var(--kendo-image-editor-crop-overlay-bg, rgba(0, 0, 0, 0.2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop overlay background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-overlay-accent-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-crop-overlay-accent-bg, #{color-mix(in srgb, k-color(primary) 8%, transparent)} )</code></td>
    <td><code>var(--kendo-image-editor-crop-overlay-accent-bg, color-mix(in srgb, var(--kendo-color-primary) 8%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop overlay accent-tinted color of the imageeditor, layered above the background.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-grid-line-color</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-grid-line-color, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-image-editor-grid-line-color, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop grid line color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-bg</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-bg, #{k-color(primary-subtle)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-bg, var(--kendo-color-primary-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Resize handle background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-border, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-border, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Resize handle border color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-border-width, 2px )</code></td>
    <td><code>var(--kendo-image-editor-frame-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop border width of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-frame-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-frame-border-style, solid )</code></td>
    <td><code>var(--kendo-image-editor-frame-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop border style of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-margin-x, 0 )</code></td>
    <td><code>var(--kendo-image-editor-handle-margin-x, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle horizontal margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-margin-y, 0 )</code></td>
    <td><code>var(--kendo-image-editor-handle-margin-y, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle vertical margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-border-width, 2px )</code></td>
    <td><code>var(--kendo-image-editor-handle-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-size</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-size, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-size, var(--kendo-spacing-6))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-thickness</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-thickness, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-thickness, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle thickness.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-handle-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-handle-border-radius, #{k-border-radius(full)} )</code></td>
    <td><code>var(--kendo-image-editor-handle-border-radius, var(--kendo-border-radius-full))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle border radius.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-scale-handle-size</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-scale-handle-size, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-image-editor-scale-handle-size, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor scale handle size.</div></div>
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

