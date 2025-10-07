---
title: Customizing PDFViewer
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_pdf-viewer
position: 9
---

# Customizing PDFViewer

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
    <td>$kendo-pdf-viewer-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-border-width, 1px )</code></td>
    <td><code>var(--kendo-pdf-viewer-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-pdf-viewer-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-pdf-viewer-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-pdf-viewer-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-canvas-bg, #{k-color(surface)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-canvas-bg, var(--kendo-color-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-canvas-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-canvas-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PDF viewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-canvas-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-canvas-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-page-spacing, #{k-spacing(7.5)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-page-spacing, var(--kendo-spacing-7\.5, 1.875rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-page-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-page-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-page-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-page-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-page-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-page-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-page-shadow, k-elevation(4) )</code></td>
    <td><code>var(--kendo-pdf-viewer-page-shadow, var(--kendo-elevation-4, 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-padding-y</td>
    <td>String</td>
    <td><code>$kendo-pdf-viewer-search-panel-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-border-width, 1px )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-shadow, none )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-shadow, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-matches-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-matches-spacing, var( --kendo-icon-spacing, .5rem ) )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-matches-spacing, var(--kendo-icon-spacing, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the matches container in the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-panel-margin-y ,calc( ( #{$kendo-button-calc-size} + ( 2 * #{$kendo-pdf-viewer-search-panel-border-width} ) + ( 2 * #{$kendo-pdf-viewer-search-panel-padding-y} ) ) * -1 ))</code></td>
    <td><code>var(--kendo-pdf-viewer-search-panel-margin-y, calc((calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2) + 2 * var(--kendo-pdf-viewer-search-panel-border-width, 1px) + 2 * var(--kendo-spacing-3, 0.75rem)) * -1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-selection-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-selection-line-height, var( --kendo-line-height-sm, normal ) )</code></td>
    <td><code>var(--kendo-pdf-viewer-selection-line-height, var(--kendo-line-height-sm, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PDFViewer selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-highlight-bg, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-highlight-bg, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer highlight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-mark-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-search-highlight-mark-bg, yellow )</code></td>
    <td><code>var(--kendo-pdf-viewer-search-highlight-mark-bg, yellow)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer highlight mark.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-icon-text, #{$kendo-dropzone-icon-text} )</code></td>
    <td><code>var(--kendo-pdf-viewer-icon-text, var(--kendo-dropzone-icon-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-popup-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-popup-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-popup-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PDFViewer popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-popup-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-popup-padding-y, #{$kendo-pdf-viewer-popup-padding-x} )</code></td>
    <td><code>var(--kendo-pdf-viewer-popup-padding-y, var(--kendo-pdf-viewer-popup-padding-x, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PDFViewer popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-highlight-annotation-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-highlight-annotation-border, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-highlight-annotation-border, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer selected highlight annotation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-highlight-annotation-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-highlight-annotation-hover-border, #{k-color(primary-hover)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-highlight-annotation-hover-border, var(--kendo-color-primary-hover, #115ea3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer hover highlight annotation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-free-text-annotation-border</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-free-text-annotation-border, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-pdf-viewer-free-text-annotation-border, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer selected free text annotation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-free-text-annotation-placeholder-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-free-text-annotation-placeholder-text, k-color(primary-on-subtle) )</code></td>
    <td><code>var(--kendo-pdf-viewer-free-text-annotation-placeholder-text, var(--kendo-color-primary-on-subtle, #0a2e4a))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The placeholder text color of the PDFViewer free text annotation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-free-text-annotation-text</td>
    <td>String</td>
    <td><code>var( --kendo-pdf-viewer-free-text-annotation-text, k-color(primary-on-subtle) )</code></td>
    <td><code>var(--kendo-pdf-viewer-free-text-annotation-text, var(--kendo-color-primary-on-subtle, #0a2e4a))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer free text annotation.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

