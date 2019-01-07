---
title: Customization
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial
position: 9
---

# Customization

The following table lists the available variables for customizing the Material theme.

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
<td>$font-family-monospace</td>
<td>
    
    Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace
</td>
<td>Font family for monospaced text. Used for styling the code.
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
<td>$primary</td>
<td>
    
    material-color($primary-palette, default)
</td>
<td>The color that focuses the user attention.<br/>
Used for primary buttons and for elements of primary importance across the theme.
</td>
</tr>
<tr>
<td>$primary-contrast</td>
<td>
    
    material-color($primary-palette, default-contrast)
</td>
<td>The color used along with the primary color denoted by $primary.<br/>
Used to provide contrast between the background and foreground colors.
</td>
</tr>
<tr>
<td>$secondary</td>
<td>
    
    material-color($secondary-palette, default)
</td>
<td>The secondary color of the theme.
</td>
</tr>
<tr>
<td>$secondary-contrast</td>
<td>
    
    material-color($secondary-palette, default-contrast)
</td>
<td>The color used along with the secondary color denoted by $secondary.<br/>
Used to provide contrast between the background and foreground colors.
</td>
</tr>
<tr>
<td>$base-bg</td>
<td>
    
    map-get( $theme, base-bg )
</td>
<td>The background of the components' chrome area.
</td>
</tr>
<tr>
<td>$base-text</td>
<td>
    
    $component-text
</td>
<td>The text color of the components' chrome area.
</td>
</tr>
<tr>
<td>$base-border</td>
<td>
    
    rgba( if($theme-type == dark, white, black), .08 )
</td>
<td>The border of the components' chrome area.
</td>
</tr>
<tr>
<td>$base-gradient</td>
<td>
    
    null
</td>
<td>The gradient background of the components' chrome area.
</td>
</tr>
<tr>
<td>$hovered-bg</td>
<td>
    
    map-get( $theme, hover-bg )
</td>
<td>The background of hovered items.
</td>
</tr>
<tr>
<td>$hovered-text</td>
<td>
    
    $base-text
</td>
<td>The text color of hovered items.
</td>
</tr>
<tr>
<td>$hovered-border</td>
<td>
    
    rgba( if($theme-type == dark, white, black), .15 )
</td>
<td>The border color of hovered items.
</td>
</tr>
<tr>
<td>$hovered-gradient</td>
<td>
    
    null
</td>
<td>The gradient background of hovered items.
</td>
</tr>
<tr>
<td>$selected-bg</td>
<td>
    
    $secondary
</td>
<td>The background of selected items.
</td>
</tr>
<tr>
<td>$selected-text</td>
<td>
    
    $secondary-contrast
</td>
<td>The text color of selected items.
</td>
</tr>
<tr>
<td>$selected-border</td>
<td>
    
    rgba( if($theme-type == dark, white, black), .1 )
</td>
<td>The border color of selected items.
</td>
</tr>
<tr>
<td>$selected-gradient</td>
<td>
    
    null
</td>
<td>The gradient background of selected items.
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
<td>$warning</td>
<td>
    <span class="color-preview" style="background-color: #ffc000"></span>
    #ffc000
</td>
<td>The color for warning messages and states.
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
<td>$info</td>
<td>
    <span class="color-preview" style="background-color: #3f51b5"></span>
    #3f51b5
</td>
<td>The color for informational messages and states.
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
<td>$button-bg</td>
<td>
    
    $base-bg
</td>
<td>The background of the buttons.
</td>
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
<td>$button-border</td>
<td>
    
    $button-bg
</td>
<td>The border color of the buttons.
</td>
</tr>
<tr>
<td>$button-gradient</td>
<td>
    
    null
</td>
<td>The background gradient of the buttons.
</td>
</tr>
<tr>
<td>$button-hovered-bg</td>
<td>
    
    true-mix( $button-text, $button-bg, 12%)
</td>
<td>The background of hovered buttons.
</td>
</tr>
<tr>
<td>$button-hovered-text</td>
<td>
    
    null
</td>
<td>The text color of hovered buttons.
</td>
</tr>
<tr>
<td>$button-hovered-border</td>
<td>
    
    $button-hovered-bg
</td>
<td>The border color of hovered buttons.
</td>
</tr>
<tr>
<td>$button-hovered-gradient</td>
<td>
    
    null
</td>
<td>The background gradient of hovered buttons.
</td>
</tr>
<tr>
<td>$button-pressed-bg</td>
<td>
    
    true-mix( $button-text, $button-bg, 12%)
</td>
<td>The background color of pressed buttons.
</td>
</tr>
<tr>
<td>$button-pressed-text</td>
<td>
    
    null
</td>
<td>The text color of pressed buttons.
</td>
</tr>
<tr>
<td>$button-pressed-border</td>
<td>
    
    $button-pressed-bg
</td>
<td>The border color of pressed buttons.
</td>
</tr>
<tr>
<td>$button-pressed-gradient</td>
<td>
    
    null
</td>
<td>The background gradient of pressed buttons.
</td>
</tr>
<tr>
<td>$button-focused-shadow</td>
<td>
    
    null
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
    <span class="color-preview" style="background-color: #3f51b5"></span>
    #3f51b5
</td>
<td>The color of the first series.
</td>
</tr>
<tr>
<td>$series-b</td>
<td>
    <span class="color-preview" style="background-color: #2196f3"></span>
    #2196f3
</td>
<td>The clor of the second series.
</td>
</tr>
<tr>
<td>$series-c</td>
<td>
    <span class="color-preview" style="background-color: #43a047"></span>
    #43a047
</td>
<td>The color of the third series.
</td>
</tr>
<tr>
<td>$series-d</td>
<td>
    <span class="color-preview" style="background-color: #ffc107"></span>
    #ffc107
</td>
<td>The color of the fourth series.
</td>
</tr>
<tr>
<td>$series-e</td>
<td>
    <span class="color-preview" style="background-color: #ff5722"></span>
    #ff5722
</td>
<td>The color of the fifth series.
</td>
</tr>
<tr>
<td>$series-f</td>
<td>
    <span class="color-preview" style="background-color: #e91e63"></span>
    #e91e63
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


### Fonts

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
    
    Roboto, "Helvetica Neue", sans-serif
</td>
<td>Font family across all components.
</td>
</tr>
<tr>
<td>$line-height</td>
<td>
    
    (28 / 14)
</td>
<td>Line height used along with $font-size.
</td>
</tr>
</table>


### Icons

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
<td>$icon-font-url</td>
<td>
    
    null
</td>
<td>The URL to the icon font that will be used by the theme<br/>
The default value of `null` embeds the package font with a `data:` URL
</td>
</tr>
</table>


### Shadows

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
<td>$elevation</td>
<td>
    
    map-get( $theme, elevation )
</td>
<td>Color of shadows
</td>
</tr>
<tr>
<td>$box-shadow-depth-1</td>
<td>
    
    0 2px 1px -1px rgba( $elevation, .2 ), 0 1px 1px 0 rgba( $elevation, .14 ), 0 1px 3px 0 rgba( $elevation, .12 )
</td>
<td>Shadow for switch.<br/>
Equivalent to material elevation 1.
</td>
</tr>
<tr>
<td>$box-shadow-depth-2</td>
<td>
    
    0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )
</td>
<td>Shadow for resting state of button, card and other widgets.<br/>
Equivalent to material elevation 2.
</td>
</tr>
<tr>
<td>$box-shadow-depth-3</td>
<td>
    
    0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )
</td>
<td>Shadow for menu, popups and raised state of button and card.<br/>
Equivalent to material elevation 8.
</td>
</tr>
<tr>
<td>$box-shadow-depth-4</td>
<td>
    
    0 8px 10px -5px rgba( $elevation, .2 ), 0 16px 24px 2px rgba( $elevation, .14 ), 0 6px 30px 5px rgba( $elevation, .12 )
</td>
<td>Shadow for drawers and other overlaying elements.<br/>
Equivalent to material elevation 16.
</td>
</tr>
<tr>
<td>$box-shadow-depth-5</td>
<td>
    
    0 11px 15px -7px rgba( $elevation, .2 ), 0 24px 38px 3px rgba( $elevation, .14 ), 0 9px 46px 8px rgba( $elevation, .12 )
</td>
<td>Shadow for window and dialog.<br/>
Equivalent to material elevation 24.
</td>
</tr>
</table>


### Tabstrip

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
<td>$tabstrip-bg</td>
<td>
    
    null
</td>
<td>Component background. Set to `transparent` to blend the component with the page.
</td>
</tr>
<tr>
<td>$tabstrip-text</td>
<td>
    
    inherit
</td>
<td>Component text color. Set to `inherit` to blend the component with the page.
</td>
</tr>
<tr>
<td>$tabstrip-indicator-color</td>
<td>
    
    $primary
</td>
<td>Active tab indicator color. Set to `currentColor` to use the text color
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
    
    0
</td>
<td>The horizontal padding of the container.
</td>
</tr>
<tr>
<td>$toolbar-padding-y</td>
<td>
    
    0
</td>
<td>The vertical padding of the container.
</td>
</tr>
</table>


## Mixins


## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
