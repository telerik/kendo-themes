---
title: Customizing Common
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_common
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
    <td>$kendo-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>(inset 0 0 0 2px rgba(0, 0, 0, 0.13))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transition</td>
    <td>List</td>
    <td><code>color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out</code></td>
    <td><code>(color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transition used across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-opacity</td>
    <td>Number</td>
    <td><code>.6</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-filter</td>
    <td>String</td>
    <td><code>grayscale(.1)</code></td>
    <td><code>grayscale(0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The filter of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-display</td>
    <td>Map</td>
    <td><code>(
    1: (
        font-size: $kendo-display1-font-size,
        font-family: $kendo-display1-font-family,
        line-height: $kendo-display1-line-height,
        font-weight: $kendo-display1-font-weight,
        letter-spacing: $kendo-display1-letter-spacing
    ),
    2: (
        font-size: $kendo-display2-font-size,
        font-family: $kendo-display2-font-family,
        line-height: $kendo-display2-line-height,
        font-weight: $kendo-display2-font-weight,
        letter-spacing: $kendo-display2-letter-spacing
    ),
    3: (
        font-size: $kendo-display3-font-size,
        font-family: $kendo-display3-font-family,
        line-height: $kendo-display3-line-height,
        font-weight: $kendo-display3-font-weight,
        letter-spacing: $kendo-display3-letter-spacing
    ),
    4: (
        font-size: $kendo-display4-font-size,
        font-family: $kendo-display4-font-family,
        line-height: $kendo-display4-line-height,
        font-weight: $kendo-display4-font-weight,
        letter-spacing: $kendo-display4-letter-spacing
    )
)</code></td>
    <td><ul><li>1: "font-size":"calc(var(--kendo-font-size, 0.875rem) * 8)","font-family":"var(--kendo-font-family, inherit)","line-height":1.2,"font-weight":"var(--kendo-font-weight-light, normal)","letter-spacing":null</li><li>2: "font-size":"calc(var(--kendo-font-size, 0.875rem) * 7)","font-family":"var(--kendo-font-family, inherit)","line-height":1.2,"font-weight":"var(--kendo-font-weight-light, normal)","letter-spacing":null</li><li>3: "font-size":"calc(var(--kendo-font-size, 0.875rem) * 6)","font-family":"var(--kendo-font-family, inherit)","line-height":1.2,"font-weight":"var(--kendo-font-weight-light, normal)","letter-spacing":null</li><li>4: "font-size":"calc(var(--kendo-font-size, 0.875rem) * 5)","font-family":"var(--kendo-font-family, inherit)","line-height":1.2,"font-weight":"var(--kendo-font-weight-light, normal)","letter-spacing":null</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The displays Map.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

