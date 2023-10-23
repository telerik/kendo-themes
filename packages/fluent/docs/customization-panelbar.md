---
title: Customizing Panelbar
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_panelbar
position: 9
---

# Customizing Panelbar

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
    <td>$kendo-panelbar-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-padding-y</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, inherit )</code></td>
    <td><code>var(--kendo-line-height, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style around the the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Style of the border around the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-icon-spacing</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the icon of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-x-start</td>
    <td>Calculation</td>
    <td><code>calc( var( --kendo-panelbar-icon-spacing, #{$kendo-panelbar-icon-spacing} ) * 2 + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(var(--kendo-panelbar-icon-spacing, 0.5rem) * 2 + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-y</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 3 )</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-x-start</td>
    <td>Calculation</td>
    <td><code>calc( var( --kendo-panelbar-icon-spacing, #{$kendo-panelbar-icon-spacing} ) * 2 + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(var(--kendo-panelbar-icon-spacing, 0.5rem) * 2 + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-y</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 3 )</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-level-count</td>
    <td>Number</td>
    <td><code>4</code></td>
    <td><code>4</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum nesting of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-bg</td>
    <td>String</td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td><code>var(--kendo-component-bg, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-text</td>
    <td>String</td>
    <td><code>var( --kendo-component-text, initial )</code></td>
    <td><code>var(--kendo-component-text, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border</td>
    <td>String</td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td><code>var(--kendo-component-border, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-bg, #{$kendo-panelbar-bg} )</code></td>
    <td><code>var(--kendo-panelbar-bg, var(--kendo-component-bg, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-text, #{$kendo-panelbar-text} )</code></td>
    <td><code>var(--kendo-panelbar-text, var(--kendo-component-text, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-hover-bg, inherit )</code></td>
    <td><code>var(--kendo-hover-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-text</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( primary-110 )</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-bg</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-neutral-130, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-hover-bg</code></td>
    <td><code>var(--kendo-hover-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-text</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-hover-text</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-selected-bg, inherit )</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-selected-marker</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( primary-100 )</code></td>
    <td><code>var(--kendo-primary-100, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the marker of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-selected-bg</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-text</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-hover-text</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-selected-bg</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-panelbar-header-selected-text</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-selected-hover-bg</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-text</td>
    <td>String</td>
    <td><code>$kendo-panelbar-header-selected-hover-text</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-bg</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when expanded.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when expanded.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when expanded.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-hover-bg, inherit )</code></td>
    <td><code>var(--kendo-hover-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-text</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( primary-110 )</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-bg</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-neutral-130, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-hover-bg</code></td>
    <td><code>var(--kendo-hover-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-text</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-hover-text</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-selected-bg, inherit )</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-selected-bg</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-text</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-hover-text</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-selected-bg</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-panelbar-item-selected-text</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-selected-hover-bg</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-text</td>
    <td>String</td>
    <td><code>$kendo-panelbar-item-selected-hover-text</code></td>
    <td><code>var(--kendo-primary-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected, focused and hovered.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

