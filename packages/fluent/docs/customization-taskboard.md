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
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
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
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, inherit )</code></td>
    <td><code>var(--kendo-line-height, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-spacing-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-columns-container-gap</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard columns container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-width</td>
    <td>Number</td>
    <td><code>320px</code></td>
    <td><code>320px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-bg</td>
    <td>String</td>
    <td><code>k-color(surface)</code></td>
    <td><code>var(--kendo-color-surface, #faf9f8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-taskboard-column-bg</code></td>
    <td><code>var(--kendo-color-surface, #faf9f8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-text</td>
    <td>String</td>
    <td><code>$kendo-taskboard-column-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, #8a8886)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-x</td>
    <td>Calculation</td>
    <td><code>$kendo-taskboard-column-header-padding-y</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-actions-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-font-weight</td>
    <td>Number</td>
    <td><code>400</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-width</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-column-width</code></td>
    <td><code>320px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xl, 1rem )</code></td>
    <td><code>var(--kendo-font-size-xl, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, bold )</code></td>
    <td><code>var(--kendo-font-weight-bold, bold)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-text</td>
    <td>String</td>
    <td><code>$kendo-taskboard-pane-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-pane-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-pane-actions-padding-y</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-x</td>
    <td>Calculation</td>
    <td><code>$kendo-taskboard-card-padding-y</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-category-border-width</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card category.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-border</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0078d4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-box-shadow-depth-3, none )</code></td>
    <td><code>var(--kendo-box-shadow-depth-3, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, 1rem )</code></td>
    <td><code>var(--kendo-font-size, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-title-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, 600 )</code></td>
    <td><code>var(--kendo-font-weight-bold, 600)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-radius</td>
    <td>String</td>
    <td><code>$kendo-card-border-radius</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 23%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 23%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
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

