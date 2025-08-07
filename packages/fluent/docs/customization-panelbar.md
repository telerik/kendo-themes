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
    <td>$kendo-panelbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-panelbar-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-panelbar-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-line-height, var( --kendo-line-height, inherit ) )</code></td>
    <td><code>var(--kendo-panelbar-line-height, var(--kendo-line-height, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-border-width, 1px )</code></td>
    <td><code>var(--kendo-panelbar-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-border-style, solid )</code></td>
    <td><code>var(--kendo-panelbar-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style around the the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-border-width, 0 )</code></td>
    <td><code>var(--kendo-panelbar-item-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-border-style, solid )</code></td>
    <td><code>var(--kendo-panelbar-item-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-icon-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-panelbar-icon-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing around the PanelBar items icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-x-start</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-padding-x-start, calc( #{$kendo-panelbar-icon-spacing} * 2 + var( --kendo-icon-size, 1rem ) ) )</code></td>
    <td><code>var(--kendo-panelbar-header-padding-x-start, calc(var(--kendo-panelbar-icon-spacing, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal start padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-x-end</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-padding-x-end, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-panelbar-header-padding-x-end, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal end padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-panelbar-header-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-x-start</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-panelbar-icon-spacing} * 2 + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(var(--kendo-panelbar-icon-spacing, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-x-end</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-padding-x-end, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-panelbar-item-padding-x-end, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal end padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-panelbar-item-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-level-count</td>
    <td>Number</td>
    <td><code>4</code></td>
    <td><code>4</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum nesting of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-panelbar-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-panelbar-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-panelbar-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-bg, #{$kendo-panelbar-bg} )</code></td>
    <td><code>var(--kendo-panelbar-header-bg, var(--kendo-panelbar-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-text, #{$kendo-panelbar-text} )</code></td>
    <td><code>var(--kendo-panelbar-header-text, var(--kendo-panelbar-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-hover-bg, #{k-color(base-hover)} )</code></td>
    <td><code>var(--kendo-panelbar-header-hover-bg, var(--kendo-color-base-hover, #f3f2f1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-hover-text, #{k-color(primary-hover)} )</code></td>
    <td><code>var(--kendo-panelbar-header-hover-text, var(--kendo-color-primary-hover, #106ebe))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-hover-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-hover-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-focus-bg, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-focus-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-focus-text, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-focus-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-focus-shadow, #{$kendo-list-item-focus-shadow} )</code></td>
    <td><code>var(--kendo-panelbar-header-focus-shadow, var(--kendo-list-item-focus-shadow, inset 0 0 0 1px var(--kendo-color-base-emphasis, #605e5c)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-hover-focus-bg, #{$kendo-panelbar-header-hover-bg} )</code></td>
    <td><code>var(--kendo-panelbar-header-hover-focus-bg, var(--kendo-panelbar-header-hover-bg, var(--kendo-color-base-hover, #f3f2f1)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-hover-focus-text, #{$kendo-panelbar-header-hover-text} )</code></td>
    <td><code>var(--kendo-panelbar-header-hover-focus-text, var(--kendo-panelbar-header-hover-text, var(--kendo-color-primary-hover, #106ebe)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-hover-focus-border, null )</code></td>
    <td><code>var(--kendo-panelbar-header-hover-focus-border, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-bg, #{k-color(base-active)} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-bg, var(--kendo-color-base-active, #edebe9))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-selected-marker</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-selected-marker, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-panelbar-selected-marker, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the marker of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-hover-bg, #{$kendo-panelbar-header-selected-bg} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-hover-bg, var(--kendo-panelbar-header-selected-bg, var(--kendo-color-base-active, #edebe9)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-hover-text, #{$kendo-panelbar-header-hover-text} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-hover-text, var(--kendo-panelbar-header-hover-text, var(--kendo-color-primary-hover, #106ebe)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-hover-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-hover-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-focus-bg, #{$kendo-panelbar-header-selected-bg} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-focus-bg, var(--kendo-panelbar-header-selected-bg, var(--kendo-color-base-active, #edebe9)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-focus-text, #{$kendo-panelbar-header-selected-text} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-focus-text, var(--kendo-panelbar-header-selected-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-hover-focus-bg, #{$kendo-panelbar-header-selected-hover-bg} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-hover-focus-bg, var(--kendo-panelbar-header-selected-hover-bg, var(--kendo-panelbar-header-selected-bg, var(--kendo-color-base-active, #edebe9))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-hover-focus-text, #{$kendo-panelbar-header-selected-hover-text} )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-hover-focus-text, var(--kendo-panelbar-header-selected-hover-text, var(--kendo-panelbar-header-hover-text, var(--kendo-color-primary-hover, #106ebe))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-selected-hover-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-selected-hover-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-expanded-bg, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-expanded-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-expanded-text, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-expanded-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-header-expanded-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-header-expanded-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-hover-bg, #{k-color(base-hover)} )</code></td>
    <td><code>var(--kendo-panelbar-item-hover-bg, var(--kendo-color-base-hover, #f3f2f1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-hover-text, #{k-color(primary-hover)} )</code></td>
    <td><code>var(--kendo-panelbar-item-hover-text, var(--kendo-color-primary-hover, #106ebe))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-hover-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-hover-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-focus-bg, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-focus-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-focus-text, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-focus-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-focus-shadow, #{$kendo-list-item-focus-shadow} )</code></td>
    <td><code>var(--kendo-panelbar-item-focus-shadow, var(--kendo-list-item-focus-shadow, inset 0 0 0 1px var(--kendo-color-base-emphasis, #605e5c)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-hover-focus-bg, #{$kendo-panelbar-item-hover-bg} )</code></td>
    <td><code>var(--kendo-panelbar-item-hover-focus-bg, var(--kendo-panelbar-item-hover-bg, var(--kendo-color-base-hover, #f3f2f1)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-hover-focus-text, #{$kendo-panelbar-item-hover-text} )</code></td>
    <td><code>var(--kendo-panelbar-item-hover-focus-text, var(--kendo-panelbar-item-hover-text, var(--kendo-color-primary-hover, #106ebe)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-hover-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-hover-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-bg, #{k-color(base-active)} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-bg, var(--kendo-color-base-active, #edebe9))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-hover-bg, #{$kendo-panelbar-item-selected-bg} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-hover-bg, var(--kendo-panelbar-item-selected-bg, var(--kendo-color-base-active, #edebe9)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-hover-text, #{$kendo-panelbar-item-hover-text} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-hover-text, var(--kendo-panelbar-item-hover-text, var(--kendo-color-primary-hover, #106ebe)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-hover-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-hover-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-focus-bg, #{$kendo-panelbar-item-selected-bg} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-focus-bg, var(--kendo-panelbar-item-selected-bg, var(--kendo-color-base-active, #edebe9)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-focus-text, #{$kendo-panelbar-item-selected-text} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-focus-text, var(--kendo-panelbar-item-selected-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-hover-focus-bg, #{$kendo-panelbar-item-selected-hover-bg} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-hover-focus-bg, var(--kendo-panelbar-item-selected-hover-bg, var(--kendo-panelbar-item-selected-bg, var(--kendo-color-base-active, #edebe9))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-hover-focus-text, #{$kendo-panelbar-item-selected-hover-text} )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-hover-focus-text, var(--kendo-panelbar-item-selected-hover-text, var(--kendo-panelbar-item-hover-text, var(--kendo-color-primary-hover, #106ebe))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-panelbar-item-selected-hover-focus-border, inherit )</code></td>
    <td><code>var(--kendo-panelbar-item-selected-hover-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

