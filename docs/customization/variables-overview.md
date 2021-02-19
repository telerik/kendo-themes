---
title: Variables overview
category: customization
slug: variables
position: 2
---

# Variables overview
All Kendo UI themes rely on Sass-variables.

## What are Sass variables
Sass variable is a name with asigned value. All sass variables start with $. For more detailed information about SCSS variables, take a look at [the official sass docs]({% https://sass-lang.com/documentation/variables %}).

## Variables defaults
Each variable in Kendo UI Themes include `!default` flag - it allows to override the variable's default value. Some variables are set to `null` and don't output the property.

## Anatomy of the Kendo Themes Variables
When defining variables, for consistency we try to follow patterns in their names. Depending on its purpose, variable name should contain one of the following words:

Metrics
padding -> padding related variable
```sh
    $padding-x: 8px !default;
```

spacer -> spacing related variable
```sh
    $spacer: 1em !default;
```

Colors
bg -> background color related variable
```sh
    $base-bg: #f6f6f6 !default;
```

text -> text color related variable
```sh
    $base-text: #656565 !default;
```

border -> border color, size, style, radius related variable
```sh
    $base-border: rgba( black, .08 ) !default;
```

gradient -> gradient related variable
```sh
    $base-gradient: $base-bg, darken( $base-bg, 2% ) !default;
```

States
hover, hovered -> hover state related variable
```sh
    $hovered-bg: #ededed !default;
```

focus, focused -> focused state related variable
```sh
    $focused-shadow: inset 0 0 0 2px rgba(0, 0, 0, .13) !default;
```

selected -> selected state related variable
```sh
    $selected-bg: $primary !default;
```

disabled -> disabled state related variable
```sh
    $disabled-opacity: .6 !default;
```

## Component specific variables
Each component has a list of its specific variables. They are located in the `_variables.scss` file in its `scss` folder. These variables' names start with the component name itself.

```sh
    $grid-padding-x;
    $grid-padding-y;
```

## List of variables
Below are listed the common variables used in the themes. The complete list of variables can be found here:
https://github.com/telerik/kendo-themes/blob/develop/packages/default/scss/_variables.scss

<table class="theme-variables">
    <colgroup>
        <col style="width: 200px; white-space:nowrap;" />
        <col />
    </colgroup>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$font-size</td>
            <td>Base font size across all components.</td>
        </tr>
        <tr>
            <td>$font-family</td>
            <td>Font family across all components.</td>
        </tr>
        <tr>
            <td>$line-height</td>
            <td>Line height used along with $font-size.</td>
        </tr>
        <tr>
            <td>$border-radius</td>
            <td>Border radius for all components.</td>
        </tr>
        <tr>
            <td>$primary</td>
            <td>The color that focuses the user attention. Used for primary buttons and for elements of primary importance across the theme.</td>
        </tr>
        <tr>
            <td>$base-text</td>
            <td>The text color of the components' chrome area.</td>
        </tr>
        <tr>
            <td>$base-bg</td>
            <td>The background of the components' chrome area.</td>
        </tr>
        <tr>
            <td>$base-border</td>
            <td>The border color of the components' chrome area.</td>
        </tr>
        <tr>
            <td>$base-gradient</td>
            <td>The gradient background of the components' chrome area.</td>
        </tr>
        <tr>
            <td>$hovered-text</td>
            <td>The text color of hovered items.</td>
        </tr>
        <tr>
            <td>$hovered-bg</td>
            <td>The background of hovered items.</td>
        </tr>
        <tr>
            <td>$hovered-border</td>
            <td>The border color of hovered items.</td>
        </tr>
        <tr>
            <td>$hovered-gradient</td>
            <td>The gradient background of hovered items.</td>
        </tr>
        <tr>
            <td>$selected-text</td>
            <td>The text color of selected items.</td>
        </tr>
        <tr>
            <td>$selected-bg</td>
            <td>The background of selected items.</td>
        </tr>
        <tr>
            <td>$selected-border</td>
            <td>The border color of selected items.</td>
        </tr>
        <tr>
            <td>$selected-gradient</td>
            <td>The gradient background of selected items.</td>
        </tr>
        <tr>
            <td>$disabled-opacity</td>
            <td>The opacity of disabled items.</td>
        </tr>
        <tr>
            <td>$error</td>
            <td>The color for error messages and states.</td>
        </tr>
        <tr>
            <td>$warning</td>
            <td>The color for warning messages and states.</td>
        </tr>
        <tr>
            <td>$success</td>
            <td>The color for success messages and states.</td>
        </tr>
        <tr>
            <td>$info</td>
            <td>The color for informational messages and states.</td>
        </tr>
    </tbody>
</table>
