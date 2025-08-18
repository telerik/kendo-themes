---
title: Customizing FileManager
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_file-manager
position: 9
---

# Customizing FileManager

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
    <td>$kendo-file-manager-spacer</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The space between the FileManager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-border-width, 1px )</code></td>
    <td><code>var(--kendo-file-manager-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-font-family, var( --kendo-font-family, normal ) )</code></td>
    <td><code>var(--kendo-file-manager-font-family, var(--kendo-font-family, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-file-manager-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-file-manager-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-file-manager-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-file-manager-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-file-manager-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-toolbar-border-width, #{$kendo-file-manager-border-width} )</code></td>
    <td><code>var(--kendo-file-manager-toolbar-border-width, var(--kendo-file-manager-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-toolbar-bg, #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-file-manager-toolbar-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-toolbar-text, #{$kendo-toolbar-text} )</code></td>
    <td><code>var(--kendo-file-manager-toolbar-text, var(--kendo-toolbar-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-toolbar-border, #{$kendo-toolbar-border} )</code></td>
    <td><code>var(--kendo-file-manager-toolbar-border, var(--kendo-toolbar-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-padding-x, #{$kendo-file-manager-spacer} )</code></td>
    <td><code>var(--kendo-file-manager-navigation-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-padding-y, #{$kendo-file-manager-spacer} )</code></td>
    <td><code>var(--kendo-file-manager-navigation-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-width, 20% )</code></td>
    <td><code>var(--kendo-file-manager-navigation-width, 20%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-border-width, #{$kendo-file-manager-border-width} )</code></td>
    <td><code>var(--kendo-file-manager-navigation-border-width, var(--kendo-file-manager-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-navigation-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-navigation-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-navigation-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-navigation-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-breadcrumb-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-file-manager-breadcrumb-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-breadcrumb-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-file-manager-breadcrumb-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-breadcrumb-border-width, #{$kendo-file-manager-border-width} )</code></td>
    <td><code>var(--kendo-file-manager-breadcrumb-border-width, var(--kendo-file-manager-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-breadcrumb-bg, #{$kendo-toolbar-bg} )</code></td>
    <td><code>var(--kendo-file-manager-breadcrumb-bg, var(--kendo-toolbar-bg, var(--kendo-color-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-breadcrumb-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-breadcrumb-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-breadcrumb-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-breadcrumb-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-listview-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-width, 120px )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-width, 120px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-height</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-height, 120px )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-height, 120px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-text, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-focus-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-focus-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager focused ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-focus-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-focus-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager focused ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-focus-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager focused ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-selected-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-selected-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-selected-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-selected-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-listview-item-icon-selected-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-listview-item-icon-selected-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-grid-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-grid-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-grid-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-grid-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-grid-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-grid-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-padding-x</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-padding-y</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-width, 20% )</code></td>
    <td><code>var(--kendo-file-manager-preview-width, 20%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-border-width, #{$kendo-file-manager-border-width} )</code></td>
    <td><code>var(--kendo-file-manager-preview-border-width, var(--kendo-file-manager-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-spacing</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-column-gap</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-column-gap, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-file-manager-preview-column-gap, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the columns in the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-preview-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-text, inherit )</code></td>
    <td><code>var(--kendo-file-manager-preview-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-preview-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-bg</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-icon-bg, transparent )</code></td>
    <td><code>var(--kendo-file-manager-preview-icon-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-icon-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-file-manager-preview-icon-text, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-border</td>
    <td>String</td>
    <td><code>var( --kendo-file-manager-preview-icon-border, inherit )</code></td>
    <td><code>var(--kendo-file-manager-preview-icon-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager preview icon.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

