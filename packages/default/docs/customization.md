---
title: Customization
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault
position: 9
---

# Customization

The following table lists the available variables for customizing the Default theme.

<style>
.theme-variables th,
.theme-variables td {
  vertical-align: top;
}

.color-preview {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  display: inline-block;
  border: 1px solid rgba(0,0,0,.08);
}
</style>

## Variables


### Common

<table class="theme-variables">
<colgroup>
<col style="white-space:nowrap; width: 200px" />
<col style="width: 250px" />
<col />
</colgroup>
<tr>
<th>Name</th>
<th>Default value</th>
<th>Description</th>
</tr>
<tr>
<td>$font-size</td>
<td>
    
    14px
</td>
<td>Base font size across all components.
</td>
</tr>
<tr>
<td>$font-family</td>
<td>
    
    inherit
</td>
<td>Font family across all components.
</td>
</tr>
<tr>
<td>$font-family-monospace</td>
<td>
    
    Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace
</td>
<td>Font family for monospaced text. Used for styling the code.
</td>
</tr>
<tr>
<td>$line-height</td>
<td>
    
    (20 / 14)
</td>
<td>Line height used along with $font-size.
</td>
</tr>
<tr>
<td>$border-radius</td>
<td>
    
    2px
</td>
<td>Border radius for all components.
</td>
</tr>
<tr>
<td>$accent</td>
<td>
    <span class="color-preview" style="background-color: #ff6358"></span>
    #ff6358
</td>
<td>The color that focuses the user attention.<br/>
Used for primary buttons and for elements of primary importance across the theme.
</td>
</tr>
<tr>
<td>$accent-contrast</td>
<td>
    
    contrast-wcag( $accent )
</td>
<td>The color used along with the accent color denoted by $accent.<br/>
Used to provide contrast between the background and foreground colors.
</td>
</tr>
<tr>
<td>$info</td>
<td>
    <span class="color-preview" style="background-color: #0058e9"></span>
    #0058e9
</td>
<td>The color for informational messages and states.
</td>
</tr>
<tr>
<td>$success</td>
<td>
    <span class="color-preview" style="background-color: #37b400"></span>
    #37b400
</td>
<td>The color for success messages and states.
</td>
</tr>
<tr>
<td>$warning</td>
<td>
    <span class="color-preview" style="background-color: #ffc000"></span>
    #ffc000
</td>
<td>The color for warning messages and states.
</td>
</tr>
<tr>
<td>$error</td>
<td>
    <span class="color-preview" style="background-color: #f31700"></span>
    #f31700
</td>
<td>The color for error messages and states.
</td>
</tr>
<tr>
<td>$base-text</td>
<td>
    <span class="color-preview" style="background-color: #656565"></span>
    #656565
</td>
<td>The text color of the components' chrome area.
</td>
</tr>
<tr>
<td>$base-bg</td>
<td>
    <span class="color-preview" style="background-color: #f6f6f6"></span>
    #f6f6f6
</td>
<td>The background of the components' chrome area.
</td>
</tr>
<tr>
<td>$base-border</td>
<td>
    
    rgba( black, .08 )
</td>
<td>The border color of the components' chrome area.
</td>
</tr>
<tr>
<td>$base-gradient</td>
<td>
    
    $base-bg, darken( $base-bg, 2% )
</td>
<td>The gradient background of the components' chrome area.
</td>
</tr>
<tr>
<td>$hovered-text</td>
<td>
    <span class="color-preview" style="background-color: #656565"></span>
    #656565
</td>
<td>The text color of hovered items.
</td>
</tr>
<tr>
<td>$hovered-bg</td>
<td>
    <span class="color-preview" style="background-color: #ededed"></span>
    #ededed
</td>
<td>The background of hovered items.
</td>
</tr>
<tr>
<td>$hovered-border</td>
<td>
    
    rgba( black, .15 )
</td>
<td>The border color of hovered items.
</td>
</tr>
<tr>
<td>$hovered-gradient</td>
<td>
    
    $hovered-bg, darken( $hovered-bg, 2% )
</td>
<td>The gradient background of hovered items.
</td>
</tr>
<tr>
<td>$selected-bg</td>
<td>
    
    $accent
</td>
<td>The background of selected items.
</td>
</tr>
<tr>
<td>$selected-text</td>
<td>
    
    contrast-wcag( $selected-bg )
</td>
<td>The text color of selected items.
</td>
</tr>
<tr>
<td>$selected-border</td>
<td>
    
    rgba( black, .1 )
</td>
<td>The border color of selected items.
</td>
</tr>
<tr>
<td>$selected-gradient</td>
<td>
    
    none
</td>
<td>The gradient background of selected items.
</td>
</tr>
</table>


### Buttons

<table class="theme-variables">
<colgroup>
<col style="white-space:nowrap; width: 200px" />
<col style="width: 250px" />
<col />
</colgroup>
<tr>
<th>Name</th>
<th>Default value</th>
<th>Description</th>
</tr>
<tr>
<td>$button-text</td>
<td>
    
    $base-text
</td>
<td>The text color of the buttons.
</td>
</tr>
<tr>
<td>$button-bg</td>
<td>
    
    $base-bg
</td>
<td>The background of the buttons.
</td>
</tr>
<tr>
<td>$button-border</td>
<td>
    
    $base-border
</td>
<td>The border color of the buttons.
</td>
</tr>
<tr>
<td>$button-gradient</td>
<td>
    
    $base-gradient
</td>
<td>The background gradient of the buttons.
</td>
</tr>
<tr>
<td>$button-hovered-text</td>
<td>
    
    $hovered-text
</td>
<td>The text color of hovered buttons.
</td>
</tr>
<tr>
<td>$button-hovered-bg</td>
<td>
    
    $hovered-bg
</td>
<td>The background of hovered buttons.
</td>
</tr>
<tr>
<td>$button-hovered-border</td>
<td>
    
    $hovered-border
</td>
<td>The border color of hovered buttons.
</td>
</tr>
<tr>
<td>$button-hovered-gradient</td>
<td>
    
    $hovered-gradient
</td>
<td>The background gradient of hovered buttons.
</td>
</tr>
<tr>
<td>$button-pressed-text</td>
<td>
    
    $button-text
</td>
<td>The text color of pressed buttons.
</td>
</tr>
<tr>
<td>$button-pressed-bg</td>
<td>
    
    $button-bg
</td>
<td>The background color of pressed buttons.
</td>
</tr>
<tr>
<td>$button-pressed-border</td>
<td>
    
    $button-border
</td>
<td>The border color of pressed buttons.
</td>
</tr>
<tr>
<td>$button-pressed-gradient</td>
<td>
    
    none
</td>
<td>The background gradient of pressed buttons.
</td>
</tr>
<tr>
<td>$button-focused-shadow</td>
<td>
    
    0 3px 4px 0 rgba(0, 0, 0, .06)
</td>
<td>The shadow of focused buttons.
</td>
</tr>
</table>


### Charts

<table class="theme-variables">
<colgroup>
<col style="white-space:nowrap; width: 200px" />
<col style="width: 250px" />
<col />
</colgroup>
<tr>
<th>Name</th>
<th>Default value</th>
<th>Description</th>
</tr>
<tr>
<td>$series-a</td>
<td>
    <span class="color-preview" style="background-color: #ff6358"></span>
    #ff6358
</td>
<td>The color of the first series.
</td>
</tr>
<tr>
<td>$series-b</td>
<td>
    <span class="color-preview" style="background-color: #ffd246"></span>
    #ffd246
</td>
<td>The clor of the second series.
</td>
</tr>
<tr>
<td>$series-c</td>
<td>
    <span class="color-preview" style="background-color: #78d237"></span>
    #78d237
</td>
<td>The color of the third series.
</td>
</tr>
<tr>
<td>$series-d</td>
<td>
    <span class="color-preview" style="background-color: #28b4c8"></span>
    #28b4c8
</td>
<td>The color of the fourth series.
</td>
</tr>
<tr>
<td>$series-e</td>
<td>
    <span class="color-preview" style="background-color: #2d73f5"></span>
    #2d73f5
</td>
<td>The color of the fifth series.
</td>
</tr>
<tr>
<td>$series-f</td>
<td>
    <span class="color-preview" style="background-color: #aa46be"></span>
    #aa46be
</td>
<td>The color of the sixth series.
</td>
</tr>
<tr>
<td>$chart-major-lines</td>
<td>
    
    rgba(0, 0, 0, .08)
</td>
<td>The color of the Chart grid lines (major).
</td>
</tr>
<tr>
<td>$chart-minor-lines</td>
<td>
    
    rgba(0, 0, 0, .04)
</td>
<td>The color of the Chart grid lines (minor).
</td>
</tr>
</table>


### Toolbar

<table class="theme-variables">
<colgroup>
<col style="white-space:nowrap; width: 200px" />
<col style="width: 250px" />
<col />
</colgroup>
<tr>
<th>Name</th>
<th>Default value</th>
<th>Description</th>
</tr>
<tr>
<td>$toolbar-padding-x</td>
<td>
    
    $padding-x
</td>
<td>The horizontal padding of the container.
</td>
</tr>
<tr>
<td>$toolbar-padding-y</td>
<td>
    
    $padding-x
</td>
<td>The vertical padding of the container.
</td>
</tr>
</table>


## Mixins

### `exports`
Outputs a module once, no matter how many times it is included.


#### Parameters
- name : `String` - The name of the exported module.


## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
