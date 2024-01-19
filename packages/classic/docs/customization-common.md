---
title: Customizing Common
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_common
position: 9
---

# Customizing Common

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
    <td>$kendo-body-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-body-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-subtle-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Subtle text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links on hover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>Color</td>
    <td><code>$kendo-body-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-base-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>List</td>
    <td><code>rgba( white, .1 ), rgba( white, 0 )</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-base-bg, 1 )</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-hover-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #bababa"></span><code>#bababa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-selected-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-selected-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-selected-bg, 1 )</code></td>
    <td><span class="color-preview" style="background-color: #e05100"></span><code>#e05100</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-selected-hover-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-selected-border</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-selected-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #8d8d8d"></span><code>#8d8d8d</code></td>
    <td><span class="color-preview" style="background-color: #8d8d8d"></span><code>#8d8d8d</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transition</td>
    <td>List</td>
    <td><code>k-motion(short-4, ease-in-out, color, background-color, border-color, box-shadow)</code></td>
    <td><code>color var(--kendo-global-duration, var(--kendo-motion-short-4, 0.2s)) var(--kendo-motion-ease-in-out, cubic-bezier(0.42, 0, 0.58, 1)), background-color var(--kendo-global-duration, var(--kendo-motion-short-4, 0.2s)) var(--kendo-motion-ease-in-out, cubic-bezier(0.42, 0, 0.58, 1)), border-color var(--kendo-global-duration, var(--kendo-motion-short-4, 0.2s)) var(--kendo-motion-ease-in-out, cubic-bezier(0.42, 0, 0.58, 1)), box-shadow var(--kendo-global-duration, var(--kendo-motion-short-4, 0.2s)) var(--kendo-motion-ease-in-out, cubic-bezier(0.42, 0, 0.58, 1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transition used across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-duration</td>
    <td>Number</td>
    <td><code>.3s!default</code></td>
    <td><code>0.3s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use `$kendo-scrollview-transition` instead.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-timing-function</td>
    <td>String</td>
    <td><code>ease-in-out</code></td>
    <td><code>ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use `$kendo-scrollview-transition` instead.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-property</td>
    <td>String</td>
    <td><code>height</code></td>
    <td><code>height</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use `$kendo-stepper-content-transition` instead.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-duration</td>
    <td>Number</td>
    <td><code>300ms</code></td>
    <td><code>300ms</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use `$kendo-stepper-content-transition` instead.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-timing-function</td>
    <td>List</td>
    <td><code>cubic-bezier(.4, 0, .2, 1) 0ms</code></td>
    <td><code>cubic-bezier(0.4, 0, 0.2, 1) 0ms</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use `$kendo-stepper-content-transition` instead.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

