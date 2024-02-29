---
title: Customizing Listview
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_listview
position: 9
---

# Customizing Listview

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
    <td>$kendo-listview-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around bordered ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-family</td>
    <td>List</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #212529"></span><code>#212529</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #dee2e6"></span><code>#dee2e6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(13, 110, 253, 0.25)"></span><code>rgba(13, 110, 253, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 3px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 15%, transparent), rgba( $kendo-listview-text, .15 ))</code></td>
    <td><code>inset 0 0 0 3px rgba(33, 37, 41, 0.15)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ListView items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

