---
title: Customizing Loader
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_loader
position: 9
---

# Customizing Loader

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
    <td>$kendo-loader-segment-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-segment-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the small Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-segment-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the medium Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-segment-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the large Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-padding</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-loader-sm-segment-size, 2 )</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the small Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-padding</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-loader-md-segment-size, 2 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the medium Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-padding</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-loader-lg-segment-size, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the large Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-width</td>
    <td>Number</td>
    <td><code>( $kendo-loader-sm-segment-size * 4 )</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-width</td>
    <td>Number</td>
    <td><code>( $kendo-loader-md-segment-size * 4 )</code></td>
    <td><code>2rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-width</td>
    <td>Number</td>
    <td><code>( $kendo-loader-lg-segment-size * 4 )</code></td>
    <td><code>4rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-height</td>
    <td>Number</td>
    <td><code>( $kendo-loader-sm-spinner-3-width * $equilateral-height )</code></td>
    <td><code>0.8660254038rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-height</td>
    <td>Number</td>
    <td><code>( $kendo-loader-md-spinner-3-width * $equilateral-height )</code></td>
    <td><code>1.7320508076rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-height</td>
    <td>Number</td>
    <td><code>( $kendo-loader-lg-spinner-3-width * $equilateral-height )</code></td>
    <td><code>3.4641016152rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-width</td>
    <td>Number</td>
    <td><code>$kendo-loader-sm-segment-size * 4</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-width</td>
    <td>Number</td>
    <td><code>$kendo-loader-md-segment-size * 4</code></td>
    <td><code>2rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-width</td>
    <td>Number</td>
    <td><code>$kendo-loader-lg-segment-size * 4</code></td>
    <td><code>4rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-height</td>
    <td>Number</td>
    <td><code>$kendo-loader-sm-spinner-4-width</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-height</td>
    <td>Number</td>
    <td><code>$kendo-loader-md-spinner-4-width</code></td>
    <td><code>2rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-height</td>
    <td>Number</td>
    <td><code>$kendo-loader-lg-spinner-4-width</code></td>
    <td><code>4rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-secondary-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #212529"></span><code>#212529</code></td>
    <td><span class="color-preview" style="background-color: #212529"></span><code>#212529</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Loader based on the secondary theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-color</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 5 )</code></td>
    <td><code>1.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 6 )</code></td>
    <td><code>1.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Loader container.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

