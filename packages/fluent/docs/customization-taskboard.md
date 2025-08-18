---
title: Customizing Taskboard
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_taskboard
position: 9
---

# Customizing Taskboard

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
    <td>$kendo-taskboard-spacer</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-spacer, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-border-width, 1px )</code></td>
    <td><code>var(--kendo-taskboard-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-taskboard-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-taskboard-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-line-height, var( --kendo-line-height, inherit ) )</code></td>
    <td><code>var(--kendo-taskboard-line-height, var(--kendo-line-height, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-bg</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-bg, #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-taskboard-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-text</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-taskboard-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-taskboard-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-content-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-content-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-content-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-content-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-spacing-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-container-spacing-y, calc( #{$kendo-taskboard-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-taskboard-column-container-spacing-y, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-container-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-column-container-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-container-padding-x, calc( #{$kendo-taskboard-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-taskboard-column-container-padding-x, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-columns-container-gap</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-columns-container-gap, #{$kendo-taskboard-spacer} )</code></td>
    <td><code>var(--kendo-taskboard-columns-container-gap, var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard columns container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-width, 320px )</code></td>
    <td><code>var(--kendo-taskboard-column-width, 320px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-border-width, 1px )</code></td>
    <td><code>var(--kendo-taskboard-column-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-taskboard-column-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-bg</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-bg, #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-taskboard-column-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-text</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-taskboard-column-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-border, transparent )</code></td>
    <td><code>var(--kendo-taskboard-column-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-focus-bg, #{$kendo-taskboard-column-bg} )</code></td>
    <td><code>var(--kendo-taskboard-column-focus-bg, var(--kendo-taskboard-column-bg, var(--kendo-color-app-surface, #fafafa)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-focus-text, #{$kendo-taskboard-column-text} )</code></td>
    <td><code>var(--kendo-taskboard-column-focus-text, var(--kendo-taskboard-column-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-focus-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-taskboard-column-focus-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-header-padding-y, calc( #{$kendo-taskboard-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-taskboard-column-header-padding-y, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-header-padding-x, #{$kendo-taskboard-column-header-padding-y} )</code></td>
    <td><code>var(--kendo-taskboard-column-header-padding-x, var(--kendo-taskboard-column-header-padding-y, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 2)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-gap</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-header-gap, calc( #{$kendo-taskboard-spacer} / 4 ) )</code></td>
    <td><code>var(--kendo-taskboard-column-header-gap, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-actions-gap</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-header-actions-gap, calc( #{$kendo-taskboard-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-taskboard-column-header-actions-gap, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-header-font-weight, 400 )</code></td>
    <td><code>var(--kendo-taskboard-column-header-font-weight, 400)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-header-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-taskboard-column-header-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-cards-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-column-cards-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-cards-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-column-cards-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-gap</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-column-cards-gap, calc( #{$kendo-taskboard-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-taskboard-column-cards-gap, calc(var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-width, #{$kendo-taskboard-column-width} )</code></td>
    <td><code>var(--kendo-taskboard-pane-width, var(--kendo-taskboard-column-width, 320px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-border-width, 1px )</code></td>
    <td><code>var(--kendo-taskboard-pane-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-bg</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-text</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-header-padding-y, #{$kendo-taskboard-spacer} )</code></td>
    <td><code>var(--kendo-taskboard-pane-header-padding-y, var(--kendo-taskboard-spacer, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-header-padding-x, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-header-padding-x, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-header-font-size, var( --kendo-font-size-xl, 1rem ) )</code></td>
    <td><code>var(--kendo-taskboard-pane-header-font-size, var(--kendo-font-size-xl, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-header-font-weight, var( --kendo-font-weight-bold, bold ) )</code></td>
    <td><code>var(--kendo-taskboard-pane-header-font-weight, var(--kendo-font-weight-bold, bold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-header-text, #{$kendo-taskboard-pane-text} )</code></td>
    <td><code>var(--kendo-taskboard-pane-header-text, var(--kendo-taskboard-pane-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-content-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-content-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-content-padding-x, #{$kendo-taskboard-pane-header-padding-x} )</code></td>
    <td><code>var(--kendo-taskboard-pane-content-padding-x, var(--kendo-taskboard-pane-header-padding-x, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-actions-padding-y, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-taskboard-pane-actions-padding-y, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-pane-actions-padding-x, #{$kendo-taskboard-pane-actions-padding-y} )</code></td>
    <td><code>var(--kendo-taskboard-pane-actions-padding-x, var(--kendo-taskboard-pane-actions-padding-y, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-taskboard-card-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-padding-x, #{$kendo-taskboard-card-padding-y} )</code></td>
    <td><code>var(--kendo-taskboard-card-padding-x, var(--kendo-taskboard-card-padding-y, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-category-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-category-border-width, 4px )</code></td>
    <td><code>var(--kendo-taskboard-card-category-border-width, 4px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card category.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-focus-shadow, none )</code></td>
    <td><code>var(--kendo-taskboard-card-focus-shadow, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-selected-border, transparent )</code></td>
    <td><code>var(--kendo-taskboard-card-selected-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-bg</td>
    <td>List</td>
    <td><code>linear-gradient(0deg, color-mix(in srgb, k-color(on-app-surface) 12%, transparent) 0%, color-mix(in srgb, k-color(on-app-surface) 12%, transparent) 100%), k-color(surface-alt)</code></td>
    <td><code>(linear-gradient(0deg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 12%, transparent) 0%, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 12%, transparent) 100%), var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-title-font-size, var( --kendo-font-size, 1rem ) )</code></td>
    <td><code>var(--kendo-taskboard-card-title-font-size, var(--kendo-font-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-title-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-card-title-font-weight, var( --kendo-font-weight-semibold, 600 ) )</code></td>
    <td><code>var(--kendo-taskboard-card-title-font-weight, var(--kendo-font-weight-semibold, 600))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-drag-placeholder-border-width, 1px )</code></td>
    <td><code>var(--kendo-taskboard-drag-placeholder-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-drag-placeholder-border-radius, #{$kendo-card-border-radius} )</code></td>
    <td><code>var(--kendo-taskboard-drag-placeholder-border-radius, var(--kendo-card-border-radius, var(--kendo-border-radius-md, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-bg</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-drag-placeholder-bg, #{color-mix(in srgb, k-color(on-app-surface) 23%, transparent)} )</code></td>
    <td><code>var(--kendo-taskboard-drag-placeholder-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 23%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border</td>
    <td>String</td>
    <td><code>var( --kendo-taskboard-drag-placeholder-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-taskboard-drag-placeholder-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

