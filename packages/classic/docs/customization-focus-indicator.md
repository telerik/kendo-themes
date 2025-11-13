---
title: Customizing FocusIndicator
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_focus-indicator
position: 9
---

# Customizing FocusIndicator

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
    <td>$default-focus-indicator</td>
    <td>Map</td>
    <td><code>(
    shadow: (
        outset: (
            offset-x: 0,
            offset-y: 0,
            spread: 0,
            width: 2px
        ),
        inset: (
            inset: true,
            offset-x: 0,
            offset-y: 0,
            spread: 0,
            width: 2px
        )
    ),
    border: (
        width: 2px,
        style: solid
    )
)</code></td>
    <td><ul><li>shadow: "outset":{"offset-x":0,"offset-y":0,"spread":0,"width":"2px"},"inset":{"inset":true,"offset-x":0,"offset-y":0,"spread":0,"width":"2px"}</li><li>border: "width":"2px","style":"solid"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus indicator patterns with structure but no colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-focus-indicator</td>
    <td>Map</td>
    <td><code>$default-focus-indicator</code></td>
    <td><ul><li>shadow: "outset":{"offset-x":0,"offset-y":0,"spread":0,"width":"2px"},"inset":{"inset":true,"offset-x":0,"offset-y":0,"spread":0,"width":"2px"}</li><li>border: "width":"2px","style":"solid"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global focus indicator patterns map.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

