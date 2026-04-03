---
title: Customization
description: "Refer to the list of the Kendo UI Theme Core theme variables available for customization."
slug: variables_kendothemecore
position: 9
---

# Customization

## Functions



### `k-color-luminance`

Calculate the relative luminance for a color.


#### Syntax

```scss
k-color-luminance($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to calculate the relative luminance for.




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L574-L580
@function k-color-luminance($color) {
    $red: list.nth( $_linear-channel-values, k-color-red( $color ) + 1 );
    $green: list.nth( $_linear-channel-values, k-color-green( $color ) + 1 );
    $blue: list.nth( $_linear-channel-values, k-color-blue( $color ) + 1 );

    @return .2126 * $red + .7152 * $green + .0722 * $blue;
}
```

### `k-color-contrast-ratio`

Calculates contrast ratio between two colors


#### Syntax

```scss
k-color-contrast-ratio($background, $foreground) // => Number
```

#### Parameters


`<Color> $background`
: The background color

`<Color> $foreground`
: The foreground color




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L591-L596
@function k-color-contrast-ratio($background, $foreground) {
    $backLum: k-color-luminance( $background ) + .05;
    $foreLum: k-color-luminance( $foreground ) + .05;

    @return math.div( math.max( $backLum, $foreLum ), math.min( $backLum, $foreLum ) );
}
```

### `k-is-dark`

Checks if a color is dark


#### Syntax

```scss
k-is-dark($color) // => Boolean
```

#### Parameters


`<Color> $color`
: The color to check




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L603-L605
@function k-is-dark($color) {
    @return if( k-color-luminance( $color ) < .5, true, false );
}
```

### `k-is-light`

Checks if a color is light


#### Syntax

```scss
k-is-light($color) // => Boolean
```

#### Parameters


`<Color> $color`
: The color to check




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L612-L614
@function k-is-light($color) {
    @return if( k-color-luminance( $color ) < .5, false, true );
}
```

### `k-contrast-color`

Calculates the contrast ratio between a background color and a foreground color.
If the contrast ratio is not high enough, it will return the color with the highest contrast ratio.


#### Syntax

```scss
k-contrast-color($background, $dark, $light, $min-ratio) // => Color
```

#### Parameters


`<Color> $background`
: The background color

`<Color> $dark`
: The dark color to use as a fallback

`<Color> $light`
: The light color to use as a fallback

`<Number> $min-ratio`
: The minimum contrast ratio to reach




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L626-L645
@function k-contrast-color($background, $dark, $light, $min-ratio) {
    $foregrounds: $light, $dark, #ffffff, #000000;
    $max-ratio: 0;
    $max-ratio-color: null;

    @each $color in $foregrounds {
        $contrast-ratio: k-color-contrast-ratio( $background, $color );

        @if ( $contrast-ratio > $min-ratio ) {
            @return $color;
        } @else if ( $contrast-ratio > $max-ratio ) {
            $max-ratio: $contrast-ratio;
            $max-ratio-color: $color;
        }
    }

    @warn "Found no color leading to #{$min-ratio}:1 contrast ratio against #{$background}...";

    @return $max-ratio-color;
}
```

### `k-generate-color-variations`

Generates all color variations of a given main color


#### Syntax

```scss
k-generate-color-variations($name, $color, $theme) // => Map
```

#### Parameters


`<String> $name`
: The name of the main color

`<Color> $color`
: The color value to be assigned to the main color

`<String> $theme`
: The theme the colors will be generated for




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/color-system/_functions.scss#L94-L208
@function k-generate-color-variations($name, $color, $theme) {
    $result: ();

    // DataViz
    @if (
            $name == 'series-a' or
            $name == 'series-b' or
            $name == 'series-c' or
            $name == 'series-d' or
            $name == 'series-e' or
            $name == 'series-f'
        ) {
        $_variations: (
            #{$name}: $color,
            #{$name}-bold: color.mix(black, $color, 25%),
            #{$name}-bolder: color.mix(black, $color, 50%),
            #{$name}-subtle: color.mix(white, $color, 25%),
            #{$name}-subtler: color.mix(white, $color, 50%),
        );

        $result: map.merge($result, $_variations);
    } @else {
        // Default
        @if ( $theme == 'default' or $theme == null ) { // stylelint-disable-line
            $_variations: (
                #{$name}-subtle: if( $name == 'base', k-try-shade( $color, 4% ), k-try-tint( $color, 80% )),
                #{$name}-subtle-hover: if( $name == 'base', k-try-shade( $color, 8% ), k-try-tint($color, 65% )),
                #{$name}-subtle-active: if( $name == 'base', k-try-shade( $color, 13% ), k-try-tint( $color, 50% )),
                #{$name}: $color,
                #{$name}-hover: k-try-shade( $color, 0.5 ),
                #{$name}-active: k-try-shade( $color, 1.5 ),
                #{$name}-emphasis: if( $name == 'base', k-try-shade( $color, 21% ), k-try-tint( $color, 25% )),
                #{$name}-on-subtle: if( $name == 'base', k-try-shade( $color, 75% ), k-try-shade( $color, 65% )),
                on-#{$name}: if( $name == 'base', k-try-shade( $color, 75% ), k-contrast-legacy( $color )),
                #{$name}-on-surface: if( $name == 'base', k-try-shade( $color, 75% ), k-try-shade( $color, 25% )),
            );

            $result: map.merge($result, $_variations);
        }

        // Bootstrap
        @if ( $theme == 'bootstrap' ) {
            $_variations: (
                #{$name}-subtle: if( $name == 'base', k-try-tint( $color, 30% ), k-try-tint( $color, 80% )),
                #{$name}-subtle-hover: if( $name == 'base', $color, k-try-tint($color, 65% )),
                #{$name}-subtle-active: if( $name == 'base', k-try-shade( $color, 8% ), k-try-tint( $color, 50% )),
                #{$name}: $color,
                #{$name}-hover: k-color-darken( $color, 7.5% ),
                #{$name}-active: k-color-darken( $color, 10% ),
                #{$name}-emphasis: if( $name == 'base', k-try-shade( $color, 21% ), k-try-tint( $color, 25% )),
                #{$name}-on-subtle: if( $name == 'base', k-try-shade( $color, 84% ), k-try-shade( $color, 65% )),
                on-#{$name}: if( $name == 'base', k-try-shade( $color, 84% ), k-contrast-legacy( $color )),
                #{$name}-on-surface: if( $name == 'base', k-try-shade( $color, 84% ), k-try-shade( $color, 25% )),
            );

            $result: map.merge($result, $_variations);
        }

        // Material
        @if ( $theme == 'material' ) {
            $_variations: (
                #{$name}-subtle: if( $name == 'base', k-try-shade( $color, 12% ), k-try-tint( $color, 80% )),
                #{$name}-subtle-hover: if( $name == 'base', k-try-shade( $color, 16% ), k-try-tint($color, 65% )),
                #{$name}-subtle-active: if( $name == 'base', k-try-shade( $color, 24% ), k-try-tint( $color, 50% )),
                #{$name}: $color,
                #{$name}-hover: k-try-shade( $color, 0.5 ),
                #{$name}-active: k-try-shade( $color, 1.5 ),
                #{$name}-emphasis: if( $name == 'base', k-try-shade( $color, 32% ), k-try-tint( $color, 25% )),
                #{$name}-on-subtle: if( $name == 'base', k-try-shade( $color, 87% ), k-try-shade( $color, 65% )),
                on-#{$name}: if( $name == 'base', k-try-shade( $color, 87% ), k-contrast-color( $color )),
                #{$name}-on-surface: if( $name == 'base', k-try-shade( $color, 87% ), k-try-shade( $color, 50% )),
            );

            $result: map.merge($result, $_variations);
        }

        // Fluent
        @if ( $theme == 'fluent' ) {
            $_variations: (
                #{$name}-subtle: if( $name == 'base', k-try-shade( $color, 2% ), k-try-tint( $color, 80% )),
                #{$name}-subtle-hover: if( $name == 'base', k-try-shade( $color, 8% ), k-try-tint($color, 65% )),
                #{$name}-subtle-active: if( $name == 'base', k-try-shade( $color, 12% ), k-try-tint( $color, 50% )),
                #{$name}: $color,
                #{$name}-hover: k-try-shade( $color, 0.5 ),
                #{$name}-active: k-try-shade( $color, 1.5 ),
                #{$name}-emphasis: if( $name == 'base', k-try-shade( $color, 18% ), k-try-tint( $color, 25% )),
                #{$name}-on-subtle: if( $name == 'base', k-try-shade( $color, 74% ), k-try-shade( $color, 65% )),
                on-#{$name}: if( $name == 'base', k-try-shade( $color, 86% ), k-contrast-legacy( $color )),
                #{$name}-on-surface: if( $name == 'base', k-try-shade( $color, 86% ), k-try-shade( $color, 25% )),
            );

            $result: map.merge($result, $_variations);
        }

        // Classic
        @if ( $theme == 'classic' ) {
            $_variations: (
                #{$name}-subtle: if( $name == 'base', k-try-tint( $color, 20% ), k-try-tint( $color, 80% )),
                #{$name}-subtle-hover: if( $name == 'base', k-try-tint( $color, 8% ), k-try-tint($color, 65% )),
                #{$name}-subtle-active: if( $name == 'base', k-try-shade( $color, 6% ), k-try-tint( $color, 50% )),
                #{$name}: $color,
                #{$name}-hover: k-try-shade( $color, 1 ),
                #{$name}-active: k-try-shade( $color, 2 ),
                #{$name}-emphasis: if( $name == 'base', k-try-shade( $color, 14% ), k-try-tint( $color, 25% )),
                #{$name}-on-subtle: if( $name == 'base', k-try-shade( $color, 84% ), k-try-shade( $color, 65% )),
                on-#{$name}: if( $name == 'base', k-try-shade( $color, 84% ), k-contrast-legacy( $color )),
                #{$name}-on-surface: if( $name == 'base', k-try-shade( $color, 84% ), k-try-shade( $color, 25% )),
            );

            $result: map.merge($result, $_variations);
        }
    }

    @return $result;
}
```

### `k-color`

Takes a color name from the $kendo-colors map as a parameter
and returns a CSS variable with the actual color as a fallback


#### Syntax

```scss
k-color($key) // => String
```

#### Parameters


`<String> $key`
: The name of a color/key in the $kendo-colors map




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/color-system/_functions.scss#L216-L218
@function k-color($key) {
    @return var(--kendo-color-#{$key});
}
```

### `k-color-tint`

Makes a color lighter by mixing it with white


#### Syntax

```scss
k-color-tint($color, $level) // => Color
```

#### Parameters


`<Color> $color`
: The color to lighten

`<Number> $level`
: The amount to lighten the color


#### Examples

```scss
// Usage
@debug k-color-tint( #f00, 1 ); // => #ff1a1a
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L183-L185
@function k-color-tint($color, $level) {
    @return k-color-level( $color, -$level );
}
```

### `k-color-shade`

Makes a color darker by mixing it with black


#### Syntax

```scss
k-color-shade($color, $level) // => Color
```

#### Parameters


`<Color> $color`
: The color to darken

`<Number> $level`
: The amount to darken the color


#### Examples

```scss
// Usage
@debug k-color-shade( #f00, 1 ); // => #e60000
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L196-L198
@function k-color-shade($color, $level) {
    @return k-color-level( $color, $level );
}
```

### `k-try-shade`

Shades the color in light themes and tints it in dark themes


#### Syntax

```scss
k-try-shade($color, $level) // => Color
```

#### Parameters


`<Color> $color`
: The color to shade or tint

`<Number> $level`
: The amount to shade or tint the color




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L206-L214
@function k-try-shade($color, $level) {
    $_dark-theme: if( meta.variable-exists( kendo-is-dark-theme ), $_is-dark-theme, false );

    @if $_dark-theme {
        @return k-color-tint( $color, $level );
    }

    @return k-color-shade( $color, $level );
}
```

### `k-try-tint`

Tints the color in light themes and shades it in dark themes


#### Syntax

```scss
k-try-tint($color, $level) // => Color
```

#### Parameters


`<Color> $color`
: The color to tint or shade

`<Number> $level`
: The amount to tint or shade the color




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L222-L230
@function k-try-tint($color, $level) {
    $_dark-theme: if( meta.variable-exists( kendo-is-dark-theme ), $_is-dark-theme, false );

    @if $_dark-theme {
        @return k-color-shade( $color, $level );
    }

    @return k-color-tint( $color, $level );
}
```

### `k-try-darken`

Darkens the color in light themes and lightens it in dark themes


#### Syntax

```scss
k-try-darken($color, $level) // => Color
```

#### Parameters


`<Color> $color`
: The color to darken or lighten

`<Number> $level`
: The amount to darken or lighten the color




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L238-L245
@function k-try-darken($color, $level) {
    $_dark-theme: if( meta.variable-exists( kendo-is-dark-theme ), $_is-dark-theme, false );

    @if $_dark-theme {
        @return k-color-lighten( $color, $amount );
    }
    @return k-color-darken( $color, $amount );
}
```

### `k-try-lighten`

Lightens the color in light themes and darkens it in dark themes


#### Syntax

```scss
k-try-lighten($color, $level) // => Color
```

#### Parameters


`<Color> $color`
: The color to lighten or darken

`<Number> $level`
: The amount to lighten or darken the color




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L253-L260
@function k-try-lighten($color, $level) {
    $_dark-theme: if( meta.variable-exists( kendo-is-dark-theme ), $_is-dark-theme, false );

    @if $_dark-theme {
        @return k-color-darken( $color, $amount );
    }
    @return k-color-lighten( $color, $amount );
}
```

### `k-rgba-to-mix`

Converts a color with alpha to solid color mixed with a background color


#### Syntax

```scss
k-rgba-to-mix($color, $bg) // => Color
```

#### Parameters


`<Color> $color`
: The color to convert

`<Color> $bg`
: The background color


#### Examples

```scss
// Usage
@debug k-rgba-to-mix( rgba( #f00, 0.5 ), #fff ); // => #ff8080
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L271-L275
@function k-rgba-to-mix($color, $bg) {
    $percent: color.alpha( $color ) * 100%;

    @return k-color-mix( rgba( $color, 1 ), $bg, $percent );
}
```

### `k-color-red`

Returns the red channel of a color.


#### Syntax

```scss
k-color-red($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the red channel for.


#### Examples

```scss
// Usage
@debug k-color-red( #ff0000 ); // => 255
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L16-L21
@function k-color-red($color) {
    @if meta.function-exists("channel", "color") {
        @return math.round(color.channel( $color, "red" ));
    }
    @return red( $color );
}
```

### `k-color-green`

Returns the green channel of a color.


#### Syntax

```scss
k-color-green($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the green channel for.


#### Examples

```scss
// Usage
@debug k-color-green( #00ff00 ); // => 255
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L29-L34
@function k-color-green($color) {
    @if meta.function-exists("channel", "color") {
        @return math.round(color.channel( $color, "green" ));
    }
    @return green( $color );
}
```

### `k-color-blue`

Returns the blue channel of a color.


#### Syntax

```scss
k-color-blue($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the blue channel for.


#### Examples

```scss
// Usage
@debug k-color-blue( #0000ff ); // => 255
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L42-L47
@function k-color-blue($color) {
    @if meta.function-exists("channel", "color") {
        @return math.round(color.channel( $color, "blue" ));
    }
    @return blue( $color );
}
```

### `k-color-hue`

Returns the hue of a color.


#### Syntax

```scss
k-color-hue($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the hue for.


#### Examples

```scss
// Usage
@debug k-color-hue( #e1d7d2 ); // => 20deg
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L55-L60
@function k-color-hue($color) {
    @if meta.function-exists("channel", "color") {
        @return color.channel( $color, "hue" );
    }
    @return  hue( $color );
}
```

### `k-color-saturation`

Returns the saturation of a color.


#### Syntax

```scss
k-color-saturation($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the saturation for.


#### Examples

```scss
// Usage
@debug k-color-saturation( #e1d7d2 ); // => 20%
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L68-L73
@function k-color-saturation($color) {
    @if meta.function-exists("channel", "color") {
        @return color.channel( $color, "saturation" );
    }
    @return saturation( $color );
}
```

### `k-color-lightness`

Returns the lightness of a color.


#### Syntax

```scss
k-color-lightness($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the lightness for.


#### Examples

```scss
// Usage
@debug k-color-lightness( #e1d7d2 ); // => 80%
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L81-L86
@function k-color-lightness($color) {
    @if meta.function-exists("channel", "color") {
        @return color.channel( $color, "lightness" );
    }
    @return lightness( $color );
}
```

### `k-color-mix`

Returns a color that is a mix of two colors.


#### Syntax

```scss
k-color-mix($color1, $color2, $weight) // => Color
```

#### Parameters


`<Color> $color1`
: The first color.

`<Color> $color2`
: The second color.

`<Number> $weight`
: The weight of the first color in the mix.


#### Examples

```scss
// Usage
@debug k-color-mix( #f00, #00f ); // => #800080
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L96-L98
@function k-color-mix($color1, $color2, $weight) {
    @return color.mix( $color1, $color2, $weight );
}
```

### `k-color-darken`

Makes a color darker by decreasing its lightness.


#### Syntax

```scss
k-color-darken($color, $amount) // => Color
```

#### Parameters


`<Color> $color`
: The color to darken.

`<Number> $amount`
: The amount to darken the color.


#### Examples

```scss
// Usage
@debug k-color-darken( #f00, 10% ); // => #e60000
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L107-L109
@function k-color-darken($color, $amount) {
    @return color.adjust( $color, $lightness: - $amount );
}
```

### `k-color-lighten`

Makes a color lighter by increasing its lightness.


#### Syntax

```scss
k-color-lighten($color, $amount) // => Color
```

#### Parameters


`<Color> $color`
: The color to lighten.

`<Number> $amount`
: The amount to lighten the color.


#### Examples

```scss
// Usage
@debug k-color-lighten( #f00, 10% ); // => #ff1a1a
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L118-L120
@function k-color-lighten($color, $amount) {
    @return color.adjust( $color, $lightness: $amount );
}
```

### `k-color-adjust-hue`

Increases or decreases the hue of a color.


#### Syntax

```scss
k-color-adjust-hue($color, $degrees) // => Color
```

#### Parameters


`<Color> $color`
: The color to adjust the hue for.

`<Number> $degrees`
: The amount to adjust the hue.


#### Examples

```scss
// Usage
@debug k-color-adjust-hue( #f00, 10deg ); // => #ff1a00
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L129-L131
@function k-color-adjust-hue($color, $degrees) {
    @return color.adjust( $color, $hue: $degrees );
}
```

### `k-color-saturate`

Increases the saturation of a color.


#### Syntax

```scss
k-color-saturate($color, $amount) // => Color
```

#### Parameters


`<Color> $color`
: The color to saturate.

`<Number> $amount`
: The amount to saturate the color.


#### Examples

```scss
// Usage
@debug k-color-saturate( #f00, 10% ); // => #ff3333
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L140-L142
@function k-color-saturate($color, $amount) {
    @return color.adjust( $color, $saturation: $amount );
}
```

### `k-color-desaturate`

Decreases the saturation of a color.


#### Syntax

```scss
k-color-desaturate($color, $amount) // => Color
```

#### Parameters


`<Color> $color`
: The color to desaturate.

`<Number> $amount`
: The amount to desaturate the color.


#### Examples

```scss
// Usage
@debug k-color-desaturate( #f00, 10% ); // => #e60000
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.scss#L151-L153
@function k-color-desaturate($color, $amount) {
    @return color.adjust( $color, $saturation: - $amount );
}
```

### `k-when-default`

Returns a SCSS selector self-reference ("&") when the current value matches the default value,
otherwise returns null. This is useful for conditionally applying styles only when a component
option is set to its default value, allowing default styles to be grouped together.


#### Syntax

```scss
k-when-default($default, $current) // => String | Null
```

#### Parameters


`<String> $default`
: The default value to compare against.

`<String | List> $current`
: The current value to check. Can be a single value or a list of values.




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_default.scss#L11-L16
@function k-when-default($default, $current) {
    @if meta.type-of($current) == "list" {
    @return if(list.index($current, $default) != null, "&,", null);
  }
  @return if($default == $current, "&,", null);
}
```

### `k-if-var`

Returns the value of a variable if it is not null,
otherwise returns the fallback value.


#### Syntax

```scss
k-if-var($var, $fallback) // => Any
```

#### Parameters


`<Any> $var`
: The variable to check.

`<Any> $fallback`
: The fallback value.


#### Examples

```scss
// Usage
$foo: null;
@debug k-if-var( $foo, "bar" ); // => "bar"
$foo: "baz";
@debug k-if-var( $foo, "bar" ); // => "baz"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_lang.scss#L12-L14
@function k-if-var($var, $fallback) {
    @return if( $var != null, $var, $fallback );
}
```

### `k-list-includes`

Checks whether `$list` contains `$value`.


#### Syntax

```scss
k-list-includes($list, $value) // => Boolean
```

#### Parameters


`<List> $list`
: The list to check.

`<Any> $value`
: The value to check for.


#### Examples

```scss
// Usage
@debug k-list-includes( ( "foo", "bar" ), "foo" ); // => true
@debug k-list-includes( ( "foo", "bar" ), "baz" ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.scss#L11-L13
@function k-list-includes($list, $value) {
    @return list.index($list, $value) != null;
}
```

### `k-list-reverse`

Reverse the order of items in `$list`.


#### Syntax

```scss
k-list-reverse($list) // => List
```

#### Parameters


`<List> $list`
: The list to reverse.


#### Examples

```scss
// Usage
@debug k-list-reverse( ( "foo", "bar" ) ); // => "bar, foo"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.scss#L21-L36
@function k-list-reverse($list) {
    $result: ();

    @if ($list) {
        $len: list.length($list);

        @for $i from $len through 1 {
            $result: list.append($result, list.nth($list, $i));
        }

        @return $result;
    }

    @warn "No list passed.";
    @return $result;
}
```

### `k-map-get`

Returns the value at `$key` in `$map`.


#### Syntax

```scss
k-map-get($map, $key) // => 
```

#### Parameters


`<Map> $map`
: The map to get the value from.

`<Any> $key`
: The key to get the value for.



#### Examples

```scss
// Usage
@debug k-map-get( ( "foo": "bar" ), "foo" ); // => "bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.scss#L10-L15
@function k-map-get($map, $key) {
    @each $key in $keys {
        $map: map.get($map, $key); // stylelint-disable-line
    }
    @return $map;
}
```

### `k-map-merge`

Returns a map with the keys and values from `$map` and `$args`.


#### Syntax

```scss
k-map-merge($map, $args) // => Map
```

#### Parameters


`<Map> $map`
: The map to merge.

`<Map> $args`
: The map to merge into `$map`.


#### Examples

```scss
// Usage
@debug k-map-merge( ( "foo": "bar" ), ( "baz": "qux" ) ); // => ( "foo": "bar", "baz": "qux" )
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.scss#L24-L29
@function k-map-merge($map, $args) {
    @each $arg in $args {
        $map: map.merge($map, $arg); // stylelint-disable-line
    }
    @return $map;
}
```

### `k-map-deep-merge`

Returns a deep-map with the keys and values from `$map` and `$args`.


#### Syntax

```scss
k-map-deep-merge($maps) // => Map
```

#### Parameters


`<Map> $maps`
: The maps to deep-merge.


#### Examples

```scss
// Usage
@debug k-map-deep-merge( ( "foo": ("bar": "baz", "baz": "qux" ) ), ( "foo": ("bar": "foo") ) ); // => ( "foo": ("bar": "foo", "baz": "qux" ))
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.scss#L37-L59
@function k-map-deep-merge($maps) {
    $merged: ();

    @each $map in $maps {
        @each $key, $val in $map {
            @if (meta.type-of($val) == "map") {
                $current: k-map-get($merged, $key);
                @if (meta.type-of($current) == "map") {
                    $val: k-map-deep-merge($current, $val);
                    $map: k-map-merge(
                        $map,
                        (
                            $key: $val,
                        )
                    );
                }
            }
        }
        $merged: k-map-merge($merged, $map);
    }

    @return $merged;
}
```

### `k-map-set`

Sets a single key and value in `$map`.


#### Syntax

```scss
k-map-set($map, $key, $value) // => Map
```

#### Parameters


`<Map> $map`
: The map to set the value in.

`<Any> $key`
: The key to set the value for.

`<Any> $value`
: The value to set.


#### Examples

```scss
// Usage
@debug k-map-set( ( "foo": "bar" ), "baz", "qux" ); // => ( "foo": "bar", "baz": "qux" )
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.scss#L69-L76
@function k-map-set($map, $key, $value) {
    @return k-map-merge(
        $map,
        (
            $key: $value,
        )
    );
}
```

### `k-map-negate`

Returns negative values of a number or numbers in a list.


#### Syntax

```scss
k-map-negate($map) // => Map
```

#### Parameters


`<Map> $map`
: The map to get the values from.


#### Examples

```scss
// Usage
@debug k-map-negate( ( 0: 0, 1: 1px, 2: 2px ) ); // => ("-1": -1px, "-2": -2px)
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.scss#L84-L99
@function k-map-negate($map) {
    $_map-neg: ();

    @if (meta.type-of($map) != map) {
        @error "expected type of #{$map} is map, was #{meta.type-of($map)}";
    }
    @each $key, $value in $map {
        $_key-neg: "-" + $key;

        @if (meta.type-of($value) == number and $value != 0 and $_key-neg != "-0") {
            $_map-neg: k-map-set($_map-neg, $_key-neg, -1 * $value);
        }
    }

    @return $_map-neg;
}
```

### `k-math-clamp`

Restricts `$number` to the range between `$min` and `$max`. If `$number` is
less than `$min`, `$min` is returned. If `$number` is greater than `$max`,
`$max` is returned. Otherwise, `$number` is returned.


#### Syntax

```scss
k-math-clamp($number, $min, $max) // => Number
```

#### Parameters


`<Number> $number`
: The number to clamp.

`<Number> $min`
: The minimum value.

`<Number> $max`
: The maximum value.


#### Examples

```scss
// Usage
@debug k-math-clamp( 10, 0, 5 ); // => 5
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.scss#L14-L16
@function k-math-clamp($number, $min, $max) {
    @return math.max($min, math.min($max, $number));
}
```

### `k-math-pow`

Returns the result of raising `$x` to the power of `$n`.


#### Syntax

```scss
k-math-pow($x, $n) // => Number
```

#### Parameters


`<Number> $x`
: The base.

`<Number> $n`
: The exponent.


#### Examples

```scss
// Usage
@debug k-math-pow( 2, 3 ); // => 8
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.scss#L25-L43
@function k-math-pow($x, $n) {
    $ret: 1;

    @if ($n == 0) {
        @return $ret;
    }

    @if ($n > 0) {
        @for $i from 1 through $n {
            $ret: $ret * $x;
        }
        @return $ret;
    }

    @for $i from $n to 0 {
        $ret: math.div($ret, $x);
    }
    @return $ret;
}
```

### `k-math-round`

Returns the result of rounding `$number` to the nearest integer
using the specified `$precision`.


#### Syntax

```scss
k-math-round($number, $precision) // => Number
```

#### Parameters


`<Number> $number`
: The number to round.

`<Number> $precision`
: The number of decimal places to round to.


#### Examples

```scss
// Usage
@debug k-math-round( 10.123456789, 3 ); // => 10.123
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.scss#L53-L61
@function k-math-round($number, $precision) {
    @if ($precision == 0) {
        @return math.round($number);
    }

    $pow: k-math-pow(10, $precision);

    @return math.div(round($number * $pow), $pow);
}
```

### `k-math-strip-unit`

Remove the unit from a number.


#### Syntax

```scss
k-math-strip-unit($number) // => Number
```

#### Parameters


`<Number> $number`
: The number to remove the unit from.


#### Examples

```scss
// Usage
@debug k-math-strip-unit( 10px ); // => 10
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.scss#L69-L75
@function k-math-strip-unit($number) {
    @if (meta.type-of($number) == "number") and not math.unitless($number) {
        @return math.div($number, 1 * math.unit($number));
    }

    @return $number;
}
```

### `k-meta-is-number`

Checks whether `$value` is a <number> CSS data type.


#### Syntax

```scss
k-meta-is-number($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-number( 1 ); // => true
@debug k-meta-is-number( "foo" ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L16-L18
@function k-meta-is-number($value) {
    @return meta.type-of($value) == "number";
}
```

### `k-meta-is-integer`

Checks whether `$value` is a <integer> CSS data type.


#### Syntax

```scss
k-meta-is-integer($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-integer( 1 ); // => true
@debug k-meta-is-integer( 1.5 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L29-L31
@function k-meta-is-integer($value) {
    @return k-meta-is-number($value) and k-math-round($value) == $value;
}
```

### `k-meta-is-time`

Checks whether `$value` is a <time> CSS data type.


#### Syntax

```scss
k-meta-is-time($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-time( 1s ); // => true
@debug k-meta-is-time( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L42-L44
@function k-meta-is-time($value) {
    @return k-meta-is-number($value) and string.index("ms" "s", math.unit($value)) != null;
}
```

### `k-meta-is-duration`

Checks whether `$value` is a valid duration period.


#### Syntax

```scss
k-meta-is-duration($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-duration( 1s ); // => true
@debug k-meta-is-duration( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L55-L57
@function k-meta-is-duration($value) {
    @return k-meta-is-time($value);
}
```

### `k-meta-is-angle`

Checks whether `$value` is a <angle> CSS data type.


#### Syntax

```scss
k-meta-is-angle($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-angle( 1deg ); // => true
@debug k-meta-is-angle( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L68-L70
@function k-meta-is-angle($value) {
    @return k-meta-is-number($value) and string.index("deg" "rad" "grad" "turn", math.unit($value)) != null;
}
```

### `k-meta-is-frequency`

Checks whether `$value` is a <frequency> CSS data type.


#### Syntax

```scss
k-meta-is-frequency($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-frequency( 1Hz ); // => true
@debug k-meta-is-frequency( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L81-L83
@function k-meta-is-frequency($value) {
    @return k-meta-is-number($value) and string.index("Hz" "kHz", math.unit($value)) != null;
}
```

### `k-meta-is-relative-length`

Checks whether `$value` is a relative <length> CSS data type.


#### Syntax

```scss
k-meta-is-relative-length($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-relative-length( 1em ); // => true
@debug k-meta-is-relative-length( 1ch ); // => true
@debug k-meta-is-relative-length( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L96-L98
@function k-meta-is-relative-length($value) {
    @return k-meta-is-number($value) and string.index("em" "ex" "ch" "rem" "vw" "vh" "vmin" "vmax", math.unit($value)) != null;
}
```

### `k-meta-is-absolute-length`

Checks whether `$value` is an absolute <length> CSS data type.


#### Syntax

```scss
k-meta-is-absolute-length($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-absolute-length( 1cm ); // => true
@debug k-meta-is-absolute-length( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L109-L111
@function k-meta-is-absolute-length($value) {
    @return k-meta-is-number($value) and string.index("cm" "mm" "in" "px" "pt" "pc", math.unit($value)) != null;
}
```

### `k-meta-is-percentage`

Checks whether `$value` is a <percentage> CSS data type.


#### Syntax

```scss
k-meta-is-percentage($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-percentage( 1% ); // => true
@debug k-meta-is-percentage( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L122-L124
@function k-meta-is-percentage($value) {
    @return k-meta-is-number($value) and math.unit($value) == "%";
}
```

### `k-meta-is-length`

Checks whether `$value` is a <length> CSS data type.


#### Syntax

```scss
k-meta-is-length($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-length( 1em ); // => true
@debug k-meta-is-length( 1cm ); // => true
@debug k-meta-is-length( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L136-L138
@function k-meta-is-length($value) {
    @return k-meta-is-relative-length($value) or k-meta-is-absolute-length($value);
}
```

### `k-meta-is-resolution`

Checks whether `$value` is a <resolution> CSS data type.


#### Syntax

```scss
k-meta-is-resolution($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-resolution( 1dpi ); // => true
@debug k-meta-is-resolution( 1 ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L149-L151
@function k-meta-is-resolution($value) {
    @return k-meta-is-number($value) and string.index("dpi" "dpcm" "dppx", math.unit($value)) != null;
}
```

### `k-meta-is-position`

Checks whether `$value` is a <position> CSS data type.


#### Syntax

```scss
k-meta-is-position($value) // => Boolean
```

#### Parameters


`<Any> $value`
: The value to check.


#### Examples

```scss
// Usage
@debug k-meta-is-position( center ); // => true
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.scss#L161-L163
@function k-meta-is-position($value) {
    @return k-meta-is-length($value) or k-meta-is-percentage($value) or string.index("top" "right" "bottom" "left" "center", $value) != null;
}
```

### `k-string-replace`

Returns a copy of `$string` with all occurrences of `$search`
replaced by `$replace`.


#### Syntax

```scss
k-string-replace($string, $search, $replace) // => String
```

#### Parameters


`<String> $string`
: The string to process.

`<String> $search`
: The substring to look for.

`<String> $replace`
: The replacement string.


#### Examples

```scss
// Usage
@debug k-string-replace( "foo bar", "bar", "baz" ); // => "foo baz"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.scss#L30-L42
@function k-string-replace($string, $search, $replace) {
    @if meta.type-of( $string ) == number {
        $string: $string + "";
    }

    $index: string.index( $string, $search );

    @if $index {
        @return string.slice( $string, 1, $index - 1 ) + $replace + k-string-replace( string.slice( $string, $index + string.length( $search ) ), $search, $replace );
    }

    @return $string;
}
```

### `k-escape-class-name`

Escapes special characters in a class name


#### Syntax

```scss
k-escape-class-name($text) // => String
```

#### Parameters


`<String> $text`
: The string to escape




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.scss#L74-L82
@function k-escape-class-name($text) {
    $_text: $text;

    @each $char, $rep in $_kendo-escape-class-name {
        $_text: k-string-replace( $_text, string.unquote( $char ), string.unquote( $rep ) );
    }

    @return $_text;
}
```

### `k-z-index`

Return a z-index value based on layer and number of steps.


#### Syntax

```scss
k-z-index($layer, $Number, $Balancing) // => Number
```

#### Parameters


`<String> $layer`
: The layer key from the $kendo-z-layers map.

`<Number} $n [0] - {Optional> $Number`
: of steps above the base layer.

`<Number} $delta [0] - {Deprecated, Optional> $Balancing`
: value.




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/z-index/index.scss#L28-L36
@function k-z-index($layer, $Number, $Balancing) {
    $layer-value: map.get($kendo-z-layers, $layer);

    @if not $layer-value {
        @error "Layer '#{$layer}' not found in $kendo-z-layers map.";
    }

    @return $layer-value + ($n * $kendo-z-step) + $delta;
}
```




## Variables

The following table lists the available variables for customizing the Theme Core theme.

### Accessibility

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
<tbody><tr>
    <td>$wcag-dark</td>
    <td></td>
    <td><code>black</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$wcag-light</td>
    <td></td>
    <td><code>white</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default light color for WCAG 2.0.</div></div>
    </td>
</tr>
</tbody>
</table>

### Appbar

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
<tbody><tr>
    <td>$kendo-appbar-theme-colors</td>
    <td></td>
    <td><code>("inherit", "base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the AppBar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Avatar

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
<tbody><tr>
    <td>$kendo-avatar-sizes</td>
    <td></td>
    <td><code>(
    sm: $kendo-avatar-sm-size,
    md: $kendo-avatar-md-size,
    lg: $kendo-avatar-lg-size
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Avatar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Badge

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
<tbody><tr>
    <td>$kendo-badge-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-badge-sm-padding-x,
        padding-y: $kendo-badge-sm-padding-y,
        font-size: $kendo-badge-sm-font-size,
        line-height: $kendo-badge-sm-line-height,
        min-width: $kendo-badge-sm-min-width
    ),
    md: (
        padding-x: $kendo-badge-md-padding-x,
        padding-y: $kendo-badge-md-padding-y,
        font-size: $kendo-badge-md-font-size,
        line-height: $kendo-badge-md-line-height,
        min-width: $kendo-badge-md-min-width
    ),
    lg: (
        padding-x: $kendo-badge-lg-padding-x,
        padding-y: $kendo-badge-lg-padding-y,
        font-size: $kendo-badge-lg-font-size,
        line-height: $kendo-badge-lg-line-height,
        min-width: $kendo-badge-lg-min-width
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Badge.</div></div>
    </td>
</tr>
</tbody>
</table>

### Border Radius

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
<tbody><tr>
    <td>$kendo-border-radius-base</td>
    <td>Number</td>
    <td><code>.25rem</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-none</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The none border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xs</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * .25)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-sm</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * .5)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td>String</td>
    <td><code>var(--kendo-border-radius-base)</code></td>
    <td><code>var(--kendo-border-radius-base)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 1.5)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xl</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 2)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxl</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 3)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxxl</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 4)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-full</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 9999)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 9999)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radii</td>
    <td>Map</td>
    <td><code>$default-border-radii</code></td>
    <td><ul><li>none: 0px</li><li>xs: calc(var(--kendo-border-radius-base) * 0.25)</li><li>sm: calc(var(--kendo-border-radius-base) * 0.5)</li><li>md: var(--kendo-border-radius-base)</li><li>lg: calc(var(--kendo-border-radius-base) * 1.5)</li><li>xl: calc(var(--kendo-border-radius-base) * 2)</li><li>xxl: calc(var(--kendo-border-radius-base) * 3)</li><li>xxxl: calc(var(--kendo-border-radius-base) * 4)</li><li>full: calc(var(--kendo-border-radius-base) * 9999)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global radii Map.</div></div>
    </td>
</tr>
</tbody>
</table>

### BottomNavigation

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
<tbody><tr>
    <td>$kendo-bottom-navigation-theme-colors</td>
    <td></td>
    <td><code>("primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the BottomNavigation.</div></div>
    </td>
</tr>
</tbody>
</table>

### Breadcrumb

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
<tbody><tr>
    <td>$kendo-breadcrumb-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        link-padding-x: $kendo-breadcrumb-sm-link-padding-x,
        link-padding-y: $kendo-breadcrumb-sm-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-sm-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-sm-icon-link-padding-y,
        font-size: $kendo-breadcrumb-sm-font-size,
        line-height: $kendo-breadcrumb-sm-line-height
    ),
    md: (
        link-padding-x: $kendo-breadcrumb-md-link-padding-x,
        link-padding-y: $kendo-breadcrumb-md-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-md-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-md-icon-link-padding-y,
        font-size: $kendo-breadcrumb-md-font-size,
        line-height: $kendo-breadcrumb-md-line-height
    ),
    lg: (
        link-padding-x: $kendo-breadcrumb-lg-link-padding-x,
        link-padding-y: $kendo-breadcrumb-lg-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-lg-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-lg-icon-link-padding-y,
        font-size: $kendo-breadcrumb-lg-font-size,
        line-height: $kendo-breadcrumb-lg-line-height
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Breadcrumb.</div></div>
    </td>
</tr>
</tbody>
</table>

### Button

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
<tbody><tr>
    <td>$kendo-button-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-button-sm-padding-x,
        padding-y: $kendo-button-sm-padding-y,
        font-size: $kendo-button-sm-font-size,
        line-height: $kendo-button-sm-line-height
    ),
    md: (
        padding-x: $kendo-button-md-padding-x,
        padding-y: $kendo-button-md-padding-y,
        font-size: $kendo-button-md-font-size,
        line-height: $kendo-button-md-line-height
    ),
    lg: (
        padding-x: $kendo-button-lg-padding-x,
        padding-y: $kendo-button-lg-padding-y,
        font-size: $kendo-button-lg-font-size,
        line-height: $kendo-button-lg-line-height
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Calendar

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
<tbody><tr>
    <td>$kendo-calendar-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-calendar-sm-font-size,
        line-height: $kendo-calendar-sm-line-height,
        cell-size: $kendo-calendar-sm-cell-size,
        cell-padding-x: $kendo-calendar-sm-cell-padding-x,
        cell-padding-y: $kendo-calendar-sm-cell-padding-y
    ),
    md: (
        font-size: $kendo-calendar-md-font-size,
        line-height: $kendo-calendar-md-line-height,
        cell-size: $kendo-calendar-md-cell-size,
        cell-padding-x: $kendo-calendar-md-cell-padding-x,
        cell-padding-y: $kendo-calendar-md-cell-padding-y
    ),
    lg: (
        font-size: $kendo-calendar-lg-font-size,
        line-height: $kendo-calendar-lg-line-height,
        cell-size: $kendo-calendar-lg-cell-size,
        cell-padding-x: $kendo-calendar-lg-cell-padding-x,
        cell-padding-y: $kendo-calendar-lg-cell-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Calendar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Card

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
<tbody><tr>
    <td>$kendo-card-theme-colors</td>
    <td></td>
    <td><code>("primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Card.</div></div>
    </td>
</tr>
</tbody>
</table>

### Checkbox

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
<tbody><tr>
    <td>$kendo-checkbox-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        size: $kendo-checkbox-sm-size,
        glyph-size: $kendo-checkbox-sm-glyph-size,
        ripple-size: $kendo-checkbox-sm-ripple-size
    ),
    md: (
        size: $kendo-checkbox-md-size,
        glyph-size: $kendo-checkbox-md-glyph-size,
        ripple-size: $kendo-checkbox-md-ripple-size
    ),
    lg: (
        size: $kendo-checkbox-lg-size,
        glyph-size: $kendo-checkbox-lg-glyph-size,
        ripple-size: $kendo-checkbox-lg-ripple-size
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the CheckBox.</div></div>
    </td>
</tr>
</tbody>
</table>

### Chip

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
<tbody><tr>
    <td>$kendo-chip-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-chip-sm-padding-x,
        padding-y: $kendo-chip-sm-padding-y,
        font-size: $kendo-chip-sm-font-size,
        line-height: $kendo-chip-sm-line-height
    ),
    md: (
        padding-x: $kendo-chip-md-padding-x,
        padding-y: $kendo-chip-md-padding-y,
        font-size: $kendo-chip-md-font-size,
        line-height: $kendo-chip-md-line-height
    ),
    lg: (
        padding-x: $kendo-chip-lg-padding-x,
        padding-y: $kendo-chip-lg-padding-y,
        font-size: $kendo-chip-lg-font-size,
        line-height: $kendo-chip-lg-line-height
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-list-sizes</td>
    <td></td>
    <td><code>(
    sm: $kendo-chip-list-size-sm,
    md: $kendo-chip-list-size-md,
    lg: $kendo-chip-list-size-lg
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the Chip list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td></td>
    <td><code>("base", "error", "info", "warning", "success")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Chip.</div></div>
    </td>
</tr>
</tbody>
</table>

### Color System

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
<tbody><tr>
    <td>$kendo-color-white</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-black</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-rgba-transparent</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, 0)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-black</td>
    <td>Gradient</td>
    <td><code>rgba(black, 0), black</code></td>
    <td><code>(rgba(0, 0, 0, 0), black)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-white</td>
    <td>Gradient</td>
    <td><code>rgba(white, 0), white</code></td>
    <td><code>(rgba(255, 255, 255, 0), white)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-black-to-transparent</td>
    <td>Gradient</td>
    <td><code>black, rgba(black, 0)</code></td>
    <td><code>(black, rgba(0, 0, 0, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from black to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-white-to-transparent</td>
    <td>Gradient</td>
    <td><code>white, rgba(white, 0)</code></td>
    <td><code>(white, rgba(255, 255, 255, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from white to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-rainbow</td>
    <td>Gradient</td>
    <td><span class="color-preview" style="background-color: #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000"></span><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
    <td><code>(#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that cycles through the colors of the rainbow.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$default-colors</code></td>
    <td><ul><li>app-surface: oklch(100% 0 0deg)</li><li>on-app-surface: oklch(from var(--kendo-color-app-surface) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>subtle: oklch(51.03% 0 0deg)</li><li>surface: oklch(98.51% 0 0deg)</li><li>surface-alt: oklch(from var(--kendo-color-surface) calc(l + 0.02) c h)</li><li>border: oklch(0% 0 0deg / 0.08)</li><li>border-alt: oklch(0% 0 0deg / 0.16)</li><li>base-subtle: oklch(from var(--kendo-color-base) calc(l + clamp(-0.03, (0.6 - l) * 99999, 0.03)) c h)</li><li>base-subtle-hover: oklch(from var(--kendo-color-base) calc(l + clamp(-0.064, (0.6 - l) * 99999, 0.064)) c h)</li><li>base-subtle-active: oklch(from var(--kendo-color-base) calc(l + clamp(-0.094, (0.6 - l) * 99999, 0.094)) c h)</li><li>base: oklch(97.02% 0 0deg)</li><li>base-hover: oklch(from var(--kendo-color-base) calc(l + clamp(-0.03, (0.6 - l) * 99999, 0.03)) c h)</li><li>base-active: oklch(from var(--kendo-color-base) calc(l + clamp(-0.094, (0.6 - l) * 99999, 0.094)) c h)</li><li>base-emphasis: oklch(from var(--kendo-color-base) calc(l + clamp(-0.156, (0.6 - l) * 99999, 0.156)) c h)</li><li>base-on-subtle: oklch(from var(--kendo-color-base) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>on-base: oklch(from var(--kendo-color-base) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>base-on-surface: oklch(from var(--kendo-color-base) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>primary-subtle: oklch(from var(--kendo-color-primary) 0.958 calc(c * 0.11) h)</li><li>primary-subtle-hover: oklch(from var(--kendo-color-primary) 0.927 calc(c * 0.19) h)</li><li>primary-subtle-active: oklch(from var(--kendo-color-primary) 0.88 calc(c * 0.33) h)</li><li>primary: oklch(69.85% 0.1923 27.19deg)</li><li>primary-hover: oklch(from var(--kendo-color-primary) calc(l - 0.044) calc(c - 0.012) h)</li><li>primary-active: oklch(from var(--kendo-color-primary) calc(l - 0.088) calc(c - 0.027) h)</li><li>primary-emphasis: oklch(from var(--kendo-color-primary) calc(l * 0.665 + 0.33) calc(c * 0.61) h)</li><li>primary-on-subtle: oklch(from var(--kendo-color-primary) calc(l * 0.48) calc(c * 0.47) h)</li><li>on-primary: oklch(from var(--kendo-color-primary) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>primary-on-surface: oklch(from var(--kendo-color-primary) l c h)</li><li>secondary-subtle: oklch(from var(--kendo-color-secondary) calc(l * 0.03 + 0.97) calc(c * 0.12) h)</li><li>secondary-subtle-hover: oklch(from var(--kendo-color-secondary) calc(l * 0.06 + 0.94) calc(c * 0.18) h)</li><li>secondary-subtle-active: oklch(from var(--kendo-color-secondary) calc(l * 0.12 + 0.88) calc(c * 0.25) h)</li><li>secondary: oklch(51.03% 0 0deg)</li><li>secondary-hover: oklch(from var(--kendo-color-secondary) calc(l - 0.072) c h)</li><li>secondary-active: oklch(from var(--kendo-color-secondary) calc(l - 0.15) c h)</li><li>secondary-emphasis: oklch(from var(--kendo-color-secondary) calc(l * 0.19 + 0.81) calc(c * 0.55) h)</li><li>secondary-on-subtle: oklch(from var(--kendo-color-secondary) calc(l * 0.375) c h)</li><li>on-secondary: oklch(from var(--kendo-color-secondary) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>secondary-on-surface: oklch(from var(--kendo-color-secondary) calc(l * 0.55) c h)</li><li>tertiary-subtle: oklch(from var(--kendo-color-tertiary) 0.944 calc(c * 0.20) h)</li><li>tertiary-subtle-hover: oklch(from var(--kendo-color-tertiary) 0.916 calc(c * 0.29) h)</li><li>tertiary-subtle-active: oklch(from var(--kendo-color-tertiary) 0.872 calc(c * 0.46) h)</li><li>tertiary: oklch(69.91% 0.157 238.99deg)</li><li>tertiary-hover: oklch(from var(--kendo-color-tertiary) calc(l + clamp(-0.046, (0.6 - l) * 99999, 0.046)) c h)</li><li>tertiary-active: oklch(from var(--kendo-color-tertiary) calc(l + clamp(-0.09, (0.6 - l) * 99999, 0.09)) c h)</li><li>tertiary-emphasis: oklch(from var(--kendo-color-tertiary) calc(l * 0.665 + 0.33) calc(c * 0.75) h)</li><li>tertiary-on-subtle: oklch(from var(--kendo-color-tertiary) calc(l * 0.50) calc(c * 0.48) h)</li><li>on-tertiary: oklch(from var(--kendo-color-tertiary) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>tertiary-on-surface: oklch(from var(--kendo-color-tertiary) calc(l * 0.87) c h)</li><li>info-subtle: oklch(from var(--kendo-color-info) 0.9086 calc(c * 0.17) h)</li><li>info-subtle-hover: oklch(from var(--kendo-color-info) 0.8646 calc(c * 0.24) h)</li><li>info-subtle-active: oklch(from var(--kendo-color-info) 0.7417 calc(c * 0.50) h)</li><li>info: oklch(51.78% 0.2301 261.43deg)</li><li>info-hover: oklch(from var(--kendo-color-info) calc(l - 0.0286) calc(c - 0.0164) h)</li><li>info-active: oklch(from var(--kendo-color-info) calc(l - 0.0624) calc(c - 0.032) h)</li><li>info-emphasis: oklch(from var(--kendo-color-info) calc(l * 0.68 + 0.33) calc(c * 0.64) h)</li><li>info-on-subtle: oklch(from var(--kendo-color-info) calc(l * 0.52) calc(c * 0.46) h)</li><li>on-info: oklch(from var(--kendo-color-info) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>info-on-surface: oklch(from var(--kendo-color-info) calc(l * 0.88) calc(c * 0.86) h)</li><li>success-subtle: oklch(from var(--kendo-color-success) 0.9326 calc(c * 0.20) h)</li><li>success-subtle-hover: oklch(from var(--kendo-color-success) 0.9012 calc(c * 0.30) h)</li><li>success-subtle-active: oklch(from var(--kendo-color-success) 0.8647 calc(c * 0.42) h)</li><li>success: oklch(67.45% 0.2171 139.99deg)</li><li>success-hover: oklch(from var(--kendo-color-success) calc(l - 0.042) calc(c - 0.0137) h)</li><li>success-active: oklch(from var(--kendo-color-success) calc(l - 0.0847) calc(c - 0.0275) h)</li><li>success-emphasis: oklch(from var(--kendo-color-success) calc(l * 0.675 + 0.33) calc(c * 0.78) h)</li><li>success-on-subtle: oklch(from var(--kendo-color-success) calc(l * 0.61) calc(c * 0.60) h)</li><li>on-success: oklch(from var(--kendo-color-success) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>success-on-surface: oklch(from var(--kendo-color-success) calc(l * 0.875) calc(c * 0.875) h)</li><li>warning-subtle: oklch(from var(--kendo-color-warning) 0.9674 calc(c * 0.26) h)</li><li>warning-subtle-hover: oklch(from var(--kendo-color-warning) 0.9508 calc(c * 0.38) h)</li><li>warning-subtle-active: oklch(from var(--kendo-color-warning) 0.9312 calc(c * 0.55) h)</li><li>warning: oklch(84.22% 0.1727 84.58deg)</li><li>warning-hover: oklch(from var(--kendo-color-warning) calc(l - 0.055) calc(c - 0.011) h)</li><li>warning-active: oklch(from var(--kendo-color-warning) calc(l - 0.11) calc(c - 0.0225) h)</li><li>warning-emphasis: oklch(from var(--kendo-color-warning) calc(l * 0.665 + 0.33) calc(c * 0.83) h)</li><li>warning-on-subtle: oklch(from var(--kendo-color-warning) calc(l * 0.49) calc(c * 0.49) h)</li><li>on-warning: oklch(from var(--kendo-color-warning) clamp(0.36, (0.6 - l) * 99999, 1) 0 h)</li><li>warning-on-surface: oklch(from var(--kendo-color-warning) l c h)</li><li>error-subtle: oklch(from var(--kendo-color-error) 0.9223 calc(c * 0.14) h)</li><li>error-subtle-hover: oklch(from var(--kendo-color-error) 0.8762 calc(c * 0.24) h)</li><li>error-subtle-active: oklch(from var(--kendo-color-error) 0.7533 calc(c * 0.56) h)</li><li>error: oklch(61.07% 0.2435 30.2deg)</li><li>error-hover: oklch(from var(--kendo-color-error) calc(l - 0.0377) calc(c - 0.0159) h)</li><li>error-active: oklch(from var(--kendo-color-error) calc(l - 0.0782) calc(c - 0.0326) h)</li><li>error-emphasis: oklch(from var(--kendo-color-error) calc(l * 0.61 + 0.33) calc(c * 0.70) h)</li><li>error-on-subtle: oklch(from var(--kendo-color-error) calc(l * 0.61) calc(c * 0.59) h)</li><li>on-error: oklch(from var(--kendo-color-error) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>error-on-surface: oklch(from var(--kendo-color-error) calc(l * 0.872) calc(c * 0.866) h)</li><li>light-subtle: oklch(98.51% 0 0deg)</li><li>light-subtle-hover: oklch(97.02% 0 0deg)</li><li>light-subtle-active: oklch(94.01% 0 0deg)</li><li>light: oklch(94.01% 0 0deg)</li><li>light-hover: oklch(90.67% 0 0deg)</li><li>light-active: oklch(87.61% 0 0deg)</li><li>light-emphasis: oklch(87.61% 0 0deg)</li><li>light-on-subtle: oklch(19.13% 0 0deg)</li><li>on-light: oklch(0% 0 0deg)</li><li>light-on-surface: oklch(90.67% 0 0deg)</li><li>dark-subtle: oklch(81.41% 0 0deg)</li><li>dark-subtle-hover: oklch(74.76% 0 0deg)</li><li>dark-subtle-active: oklch(68.3% 0 0deg)</li><li>dark: oklch(36% 0 0deg)</li><li>dark-hover: oklch(28.09% 0 0deg)</li><li>dark-active: oklch(23.93% 0 0deg)</li><li>dark-emphasis: oklch(51.03% 0 0deg)</li><li>dark-on-subtle: oklch(23.93% 0 0deg)</li><li>on-dark: oklch(100% 0 0deg)</li><li>dark-on-surface: oklch(19.13% 0 0deg)</li><li>inverse-subtle: oklch(from var(--kendo-color-inverse) calc(l + 0.15) c h)</li><li>inverse-subtle-hover: oklch(from var(--kendo-color-inverse) calc(l + 0.079) c h)</li><li>inverse-subtle-active: oklch(from var(--kendo-color-inverse) l c h)</li><li>inverse: oklch(36% 0 0deg)</li><li>inverse-hover: oklch(from var(--kendo-color-inverse) calc(l - 0.079) c h)</li><li>inverse-active: oklch(from var(--kendo-color-inverse) calc(l - 0.121) c h)</li><li>inverse-emphasis: oklch(from var(--kendo-color-inverse) calc(l + 0.323) c h)</li><li>inverse-on-subtle: oklch(from var(--kendo-color-inverse) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>on-inverse: oklch(from var(--kendo-color-inverse) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>inverse-on-surface: oklch(from var(--kendo-color-inverse) calc(l * 0.53) c h)</li><li>series: oklch(69.85% 0.1923 27.19deg)</li><li>series-a: var(--kendo-color-series)</li><li>series-a-bold: oklch(from var(--kendo-color-series-a) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-a-bolder: oklch(from var(--kendo-color-series-a) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-a-subtle: oklch(from var(--kendo-color-series-a) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-a-subtler: oklch(from var(--kendo-color-series-a) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-b: oklch(from var(--kendo-color-series) calc(l + 0.2128) calc(c - 0.0444) calc(h + 68.82))</li><li>series-b-bold: oklch(from var(--kendo-color-series-b) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-b-bolder: oklch(from var(--kendo-color-series-b) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-b-subtle: oklch(from var(--kendo-color-series-b) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-b-subtler: oklch(from var(--kendo-color-series-b) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-c: oklch(from var(--kendo-color-series) calc(l + 0.0697) calc(c - 0.0281) calc(h + 125.93))</li><li>series-c-bold: oklch(from var(--kendo-color-series-c) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-c-bolder: oklch(from var(--kendo-color-series-c) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-c-subtle: oklch(from var(--kendo-color-series-c) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-c-subtler: oklch(from var(--kendo-color-series-c) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-d: oklch(from var(--kendo-color-series) calc(l - 0.1323) calc(c + 0.0372) calc(h + 244.06))</li><li>series-d-bold: oklch(from var(--kendo-color-series-d) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-d-bolder: oklch(from var(--kendo-color-series-d) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-d-subtle: oklch(from var(--kendo-color-series-d) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-d-subtler: oklch(from var(--kendo-color-series-d) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-e: oklch(from var(--kendo-color-series) calc(l - 0.0581) calc(c + 0.0456) calc(h + 276.18))</li><li>series-e-bold: oklch(from var(--kendo-color-series-e) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-e-bolder: oklch(from var(--kendo-color-series-e) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-e-subtle: oklch(from var(--kendo-color-series-e) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-e-subtler: oklch(from var(--kendo-color-series-e) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-f: oklch(from var(--kendo-color-series) l calc(c + 0.0143) calc(h - 24.38))</li><li>series-f-bold: oklch(from var(--kendo-color-series-f) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-f-bolder: oklch(from var(--kendo-color-series-f) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-f-subtle: oklch(from var(--kendo-color-series-f) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-f-subtler: oklch(from var(--kendo-color-series-f) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Groups</b><div class="theme-variables-description">The groups of the $kendo-colors Map</div></div>
    </td>
</tr>
<tr>
    <td>Group</td>
    <td colspan="2">Values</td>
    <td>Description</td>
</tr>
<tr>
    <td>misc</td>
    <td colspan="2"> app-surface, on-app-surface, subtle, surface, surface-alt, border, border-alt</td>
    <td>The Misc variable group.</td>
</tr>
<tr>
    <td>base</td>
    <td colspan="2"> base-subtle, base-subtle-hover, base-subtle-active, base, base-hover, base-active, base-emphasis, base-on-subtle, on-base, base-on-surface</td>
    <td>The Base variable group.</td>
</tr>
<tr>
    <td>primary</td>
    <td colspan="2"> primary-subtle, primary-subtle-hover, primary-subtle-active, primary, primary-hover, primary-active, primary-emphasis, primary-on-subtle, on-primary, primary-on-surface</td>
    <td>The Primary variable group.</td>
</tr>
<tr>
    <td>secondary</td>
    <td colspan="2"> secondary-subtle, secondary-subtle-hover, secondary-subtle-active, secondary, secondary-hover, secondary-active, secondary-emphasis, secondary-on-subtle, on-secondary, secondary-on-surface</td>
    <td>The Secondary variable group.</td>
</tr>
<tr>
    <td>tertiary</td>
    <td colspan="2"> tertiary-subtle, tertiary-subtle-hover, tertiary-subtle-active, tertiary, tertiary-hover, tertiary-active, tertiary-emphasis, tertiary-on-subtle, on-tertiary, tertiary-on-surface</td>
    <td>The Tertiary variable group.</td>
</tr>
<tr>
    <td>info</td>
    <td colspan="2"> info-subtle, info-subtle-hover, info-subtle-active, info, info-hover, info-active, info-emphasis, info-on-subtle, on-info, info-on-surface</td>
    <td>The Info variable group.</td>
</tr>
<tr>
    <td>success</td>
    <td colspan="2"> success-subtle, success-subtle-hover, success-subtle-active, success, success-hover, success-active, success-emphasis, success-on-subtle, on-success, success-on-surface</td>
    <td>The Success variable group.</td>
</tr>
<tr>
    <td>warning</td>
    <td colspan="2"> warning-subtle, warning-subtle-hover, warning-subtle-active, warning, warning-hover, warning-active, warning-emphasis, warning-on-subtle, on-warning, warning-on-surface</td>
    <td>The Warning variable group.</td>
</tr>
<tr>
    <td>error</td>
    <td colspan="2"> error-subtle, error-subtle-hover, error-subtle-active, error, error-hover, error-active, error-emphasis, error-on-subtle, on-error, error-on-surface</td>
    <td>The Error variable group.</td>
</tr>
<tr>
    <td>light</td>
    <td colspan="2"> light-subtle, light-subtle-hover, light-subtle-active, light, light-hover, light-active, light-emphasis, light-on-subtle, on-light, light-on-surface</td>
    <td>The Light variable group.</td>
</tr>
<tr>
    <td>dark</td>
    <td colspan="2"> dark-subtle, dark-subtle-hover, dark-subtle-active, dark, dark-hover, dark-active, dark-emphasis, dark-on-subtle, on-dark, dark-on-surface</td>
    <td>The Dark variable group.</td>
</tr>
<tr>
    <td>inverse</td>
    <td colspan="2"> inverse-subtle, inverse-subtle-hover, inverse-subtle-active, inverse, inverse-hover, inverse-active, inverse-emphasis, inverse-on-subtle, on-inverse, inverse-on-surface</td>
    <td>The Inverse variable group.</td>
</tr>
<tr>
    <td>series</td>
    <td colspan="2"> series</td>
    <td>The Series base variable group.</td>
</tr>
<tr>
    <td>series-a</td>
    <td colspan="2"> series-a, series-a-bold, series-a-bolder, series-a-subtle, series-a-subtler</td>
    <td>The Series A variable group.</td>
</tr>
<tr>
    <td>series-b</td>
    <td colspan="2"> series-b, series-b-bold, series-b-bolder, series-b-subtle, series-b-subtler</td>
    <td>The Series B variable group.</td>
</tr>
<tr>
    <td>series-c</td>
    <td colspan="2"> series-c, series-c-bold, series-c-bolder, series-c-subtle, series-c-subtler</td>
    <td>The Series C variable group.</td>
</tr>
<tr>
    <td>series-d</td>
    <td colspan="2"> series-d, series-d-bold, series-d-bolder, series-d-subtle, series-d-subtler</td>
    <td>The Series D variable group.</td>
</tr>
<tr>
    <td>series-e</td>
    <td colspan="2"> series-e, series-e-bold, series-e-bolder, series-e-subtle, series-e-subtler</td>
    <td>The Series E variable group.</td>
</tr>
<tr>
    <td>series-f</td>
    <td colspan="2"> series-f, series-f-bold, series-f-bolder, series-f-subtle, series-f-subtler</td>
    <td>The Series F variable group.</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Properties</b><div class="theme-variables-description">The properties of the $kendo-colors Map</div></div>
    </td>
</tr>
<tr>
    <td>Type</td>
    <td>Name</td>
    <td colspan="2">Description</td>
</tr>
<tr>
    <td>Color</td>
    <td>app-surface</td>
    <td colspan="2">The background color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-app-surface</td>
    <td colspan="2">The text color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>subtle</td>
    <td colspan="2">The subtle text color.</td>
</tr>
<tr>
    <td>Color</td>
    <td>surface</td>
    <td colspan="2">The background color of the components' chrome area.</td>
</tr>
<tr>
    <td>Color</td>
    <td>surface-alt</td>
    <td colspan="2">The alternative background color of the components' chrome area.</td>
</tr>
<tr>
    <td>Color</td>
    <td>border</td>
    <td colspan="2">The border color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>border-alt</td>
    <td colspan="2">The alternative border color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle</td>
    <td colspan="2">The base subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle-hover</td>
    <td colspan="2">The base subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle-active</td>
    <td colspan="2">The base subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base</td>
    <td colspan="2">The base background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-hover</td>
    <td colspan="2">The base background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-active</td>
    <td colspan="2">The base background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-emphasis</td>
    <td colspan="2">The emphasized base color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-on-subtle</td>
    <td colspan="2">The text color variable for content on base subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-base</td>
    <td colspan="2">The text color variable for content on base.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle</td>
    <td colspan="2">The primary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle-hover</td>
    <td colspan="2">The primary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle-active</td>
    <td colspan="2">The primary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary</td>
    <td colspan="2">The primary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-hover</td>
    <td colspan="2">The primary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-active</td>
    <td colspan="2">The primary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-emphasis</td>
    <td colspan="2">The emphasized primary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-on-subtle</td>
    <td colspan="2">The text color variable for content on primary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-primary</td>
    <td colspan="2">The text color variable for content on primary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle</td>
    <td colspan="2">The secondary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle-hover</td>
    <td colspan="2">The secondary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle-active</td>
    <td colspan="2">The secondary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary</td>
    <td colspan="2">The secondary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-hover</td>
    <td colspan="2">The secondary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-active</td>
    <td colspan="2">The secondary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-emphasis</td>
    <td colspan="2">The emphasized secondary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-on-subtle</td>
    <td colspan="2">The text color variable for content on secondary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-secondary</td>
    <td colspan="2">The text color variable for content on secondary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle</td>
    <td colspan="2">The tertiary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle-hover</td>
    <td colspan="2">The tertiary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle-active</td>
    <td colspan="2">The tertiary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary</td>
    <td colspan="2">The tertiary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-hover</td>
    <td colspan="2">The tertiary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-active</td>
    <td colspan="2">The tertiary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-emphasis</td>
    <td colspan="2">The emphasized tertiary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-on-subtle</td>
    <td colspan="2">The text color variable for content on tertiary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-tertiary</td>
    <td colspan="2">The text color variable for content on tertiary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle</td>
    <td colspan="2">The info subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle-hover</td>
    <td colspan="2">The info subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle-active</td>
    <td colspan="2">The info subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info</td>
    <td colspan="2">The info background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-hover</td>
    <td colspan="2">The info background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-active</td>
    <td colspan="2">The info background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-emphasis</td>
    <td colspan="2">The emphasized info color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-on-subtle</td>
    <td colspan="2">The text color variable for content on info subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-info</td>
    <td colspan="2">The text color variable for content on info.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle</td>
    <td colspan="2">The success subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle-hover</td>
    <td colspan="2">The success subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle-active</td>
    <td colspan="2">The success subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success</td>
    <td colspan="2">The success background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-hover</td>
    <td colspan="2">The success background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-active</td>
    <td colspan="2">The success background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-emphasis</td>
    <td colspan="2">The emphasized success color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-on-subtle</td>
    <td colspan="2">The text color variable for content on success subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-success</td>
    <td colspan="2">The text color variable for content on success.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle</td>
    <td colspan="2">The warning subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle-hover</td>
    <td colspan="2">The warning subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle-active</td>
    <td colspan="2">The warning subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning</td>
    <td colspan="2">The warning background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-hover</td>
    <td colspan="2">The warning background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-active</td>
    <td colspan="2">The warning background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-emphasis</td>
    <td colspan="2">The emphasized warning color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-on-subtle</td>
    <td colspan="2">The text color variable for content on warning subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-warning</td>
    <td colspan="2">The text color variable for content on warning.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle</td>
    <td colspan="2">The error subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle-hover</td>
    <td colspan="2">The error subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle-active</td>
    <td colspan="2">The error subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error</td>
    <td colspan="2">The error background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-hover</td>
    <td colspan="2">The error background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-active</td>
    <td colspan="2">The error background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-emphasis</td>
    <td colspan="2">The emphasized error color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-on-subtle</td>
    <td colspan="2">The text color variable for content on error subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-error</td>
    <td colspan="2">The text color variable for content on error.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle</td>
    <td colspan="2">The light subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle-hover</td>
    <td colspan="2">The light subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle-active</td>
    <td colspan="2">The light subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light</td>
    <td colspan="2">The light background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-hover</td>
    <td colspan="2">The light background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-active</td>
    <td colspan="2">The light background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-emphasis</td>
    <td colspan="2">The emphasized light color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-on-subtle</td>
    <td colspan="2">The text color variable for content on light subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-light</td>
    <td colspan="2">The text color variable for content on light.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle</td>
    <td colspan="2">The dark subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle-hover</td>
    <td colspan="2">The dark subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle-active</td>
    <td colspan="2">The dark subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark</td>
    <td colspan="2">The dark background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-hover</td>
    <td colspan="2">The dark background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-active</td>
    <td colspan="2">The dark background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-emphasis</td>
    <td colspan="2">The emphasized dark color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-on-subtle</td>
    <td colspan="2">The text color variable for content on dark subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-dark</td>
    <td colspan="2">The text color variable for content on dark.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle</td>
    <td colspan="2">The inverse subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle-hover</td>
    <td colspan="2">The inverse subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle-active</td>
    <td colspan="2">The inverse subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse</td>
    <td colspan="2">The inverse background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-hover</td>
    <td colspan="2">The inverse background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-active</td>
    <td colspan="2">The inverse background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-emphasis</td>
    <td colspan="2">The emphasized inverse color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-on-subtle</td>
    <td colspan="2">The text color variable for content on inverse subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-inverse</td>
    <td colspan="2">The text color variable for content on inverse.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series</td>
    <td colspan="2">The base series color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a</td>
    <td colspan="2">The series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-bold</td>
    <td colspan="2">The bold series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-bolder</td>
    <td colspan="2">The bolder series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-subtle</td>
    <td colspan="2">The subtle series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-subtler</td>
    <td colspan="2">The subtler series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b</td>
    <td colspan="2">The series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-bold</td>
    <td colspan="2">The bold series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-bolder</td>
    <td colspan="2">The bolder series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-subtle</td>
    <td colspan="2">The subtle series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-subtler</td>
    <td colspan="2">The subtler series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c</td>
    <td colspan="2">The series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-bold</td>
    <td colspan="2">The bold series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-bolder</td>
    <td colspan="2">The bolder series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-subtle</td>
    <td colspan="2">The subtle series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-subtler</td>
    <td colspan="2">The subtler series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d</td>
    <td colspan="2">The series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-bold</td>
    <td colspan="2">The bold series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-bolder</td>
    <td colspan="2">The bolder series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-subtle</td>
    <td colspan="2">The subtle series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-subtler</td>
    <td colspan="2">The subtler series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e</td>
    <td colspan="2">The series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-bold</td>
    <td colspan="2">The bold series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-bolder</td>
    <td colspan="2">The bolder series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-subtle</td>
    <td colspan="2">The subtle series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-subtler</td>
    <td colspan="2">The subtler series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f</td>
    <td colspan="2">The series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-bold</td>
    <td colspan="2">The bold series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-bolder</td>
    <td colspan="2">The bolder series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-subtle</td>
    <td colspan="2">The subtle series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-subtler</td>
    <td colspan="2">The subtler series F color variable.</td>
</tr>
</tbody>
</table>

### ColorEditor

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
<tbody><tr>
    <td>$kendo-color-editor-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        min-width: $kendo-color-editor-sm-min-width,
        header-padding-x: $kendo-color-editor-sm-header-padding-x,
        header-padding-y: $kendo-color-editor-sm-header-padding-y,
        views-padding-x: $kendo-color-editor-sm-views-padding-x,
        views-padding-y: $kendo-color-editor-sm-views-padding-y,
        preview-gap: $kendo-color-editor-sm-preview-gap,
        preview-width: $kendo-color-editor-sm-color-preview-width,
        preview-height: $kendo-color-editor-sm-color-preview-height,

    ),
    md: (
        min-width: $kendo-color-editor-md-min-width,
        header-padding-x: $kendo-color-editor-md-header-padding-x,
        header-padding-y: $kendo-color-editor-md-header-padding-y,
        views-padding-x: $kendo-color-editor-md-views-padding-x,
        views-padding-y: $kendo-color-editor-md-views-padding-y,
        preview-gap: $kendo-color-editor-md-preview-gap,
        preview-width: $kendo-color-editor-md-color-preview-width,
        preview-height: $kendo-color-editor-md-color-preview-height,
    ),
    lg: (
        min-width: $kendo-color-editor-lg-min-width,
        header-padding-x: $kendo-color-editor-lg-header-padding-x,
        header-padding-y: $kendo-color-editor-lg-header-padding-y,
        views-padding-x: $kendo-color-editor-lg-views-padding-x,
        views-padding-y: $kendo-color-editor-lg-views-padding-y,
        preview-gap: $kendo-color-editor-lg-preview-gap,
        preview-width: $kendo-color-editor-lg-color-preview-width,
        preview-height: $kendo-color-editor-lg-color-preview-height,
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map of the ColorEditor.</div></div>
    </td>
</tr>
</tbody>
</table>

### ColorGradient

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
<tbody><tr>
    <td>$kendo-color-gradient-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        width: $kendo-color-gradient-sm-width,
        vertical-slider-height: $kendo-color-gradient-sm-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-sm-canvas-rectangle-height,
        input-width: $kendo-color-gradient-sm-input-width,
        gap: $kendo-color-gradient-sm-gap,
        canvas-gap: $kendo-color-gradient-sm-canvas-gap,
        padding-x: $kendo-color-gradient-sm-padding-x,
        padding-y: $kendo-color-gradient-sm-padding-y
    ),
    md: (
        width: $kendo-color-gradient-md-width,
        vertical-slider-height: $kendo-color-gradient-md-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-md-canvas-rectangle-height,
        input-width: $kendo-color-gradient-md-input-width,
        gap: $kendo-color-gradient-md-gap,
        canvas-gap: $kendo-color-gradient-md-canvas-gap,
        padding-x: $kendo-color-gradient-md-padding-x,
        padding-y: $kendo-color-gradient-md-padding-y
    ),
    lg: (
        width: $kendo-color-gradient-lg-width,
        vertical-slider-height: $kendo-color-gradient-lg-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-lg-canvas-rectangle-height,
        input-width: $kendo-color-gradient-lg-input-width,
        gap: $kendo-color-gradient-lg-gap,
        canvas-gap: $kendo-color-gradient-lg-canvas-gap,
        padding-x: $kendo-color-gradient-lg-padding-x,
        padding-y: $kendo-color-gradient-lg-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map of the ColorGradient.</div></div>
    </td>
</tr>
</tbody>
</table>

### ColorPalette

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
<tbody><tr>
    <td>$kendo-color-palette-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        width: $kendo-color-palette-sm-tile-width,
        height: $kendo-color-palette-sm-tile-height
    ),
    md: (
        width: $kendo-color-palette-md-tile-width,
        height: $kendo-color-palette-md-tile-height
    ),
    lg: (
        width: $kendo-color-palette-lg-tile-width,
        height: $kendo-color-palette-lg-tile-height
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map of the ColorPalette.</div></div>
    </td>
</tr>
</tbody>
</table>

### ColumnMenu

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
<tbody><tr>
    <td>$kendo-column-menu-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-column-menu-item-sm-padding-x,
        padding-y: $kendo-column-menu-item-sm-padding-y,
        font-size: $kendo-column-menu-sm-font-size,
        line-height: $kendo-column-menu-sm-line-height
    ),
    md: (
        padding-x: $kendo-column-menu-item-md-padding-x,
        padding-y: $kendo-column-menu-item-md-padding-y,
        font-size: $kendo-column-menu-md-font-size,
        line-height: $kendo-column-menu-md-line-height
    ),
    lg: (
        padding-x: $kendo-column-menu-item-lg-padding-x,
        padding-y: $kendo-column-menu-item-lg-padding-y,
        font-size: $kendo-column-menu-lg-font-size,
        line-height: $kendo-column-menu-lg-line-height
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the ColumnMenu.</div></div>
    </td>
</tr>
</tbody>
</table>

### DateTimePicker

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
<tbody><tr>
    <td>$kendo-datetime-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        width: $kendo-datetime-sm-width
    ),
    md: (
        width: $kendo-datetime-md-width
    ),
    lg: (
        width: $kendo-datetime-lg-width
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the DateTimePicker.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dialog

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
<tbody><tr>
    <td>$kendo-dialog-theme-colors</td>
    <td></td>
    <td><code>("primary", "light", "dark")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

### Elevation

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
<tbody><tr>
    <td>$kendo-elevation</td>
    <td>Map</td>
    <td><code>$default-elevation</code></td>
    <td><ul><li>1: (0 2px 3px rgba(0, 0, 0, 0.04))</li><li>2: (0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>3: (0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>4: (0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>5: (0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>6: (0 12px 14px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>7: (0 14px 16px rgba(0, 0, 0, 0.24), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>8: (0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>9: (0 32px 34px rgba(0, 0, 0, 0.32), 0 4px 16px rgba(0, 0, 0, 0.12))</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Elevation map.</div></div>
    </td>
</tr>
</tbody>
</table>

### FloatingActionButton

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
<tbody><tr>
    <td>$kendo-fab-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the FloatingActionButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-fab-sm-padding-x,
        padding-y: $kendo-fab-sm-padding-y
    ),
    md: (
        padding-x: $kendo-fab-md-padding-x,
        padding-y: $kendo-fab-md-padding-y
    ),
    lg: (
        padding-x: $kendo-fab-lg-padding-x,
        padding-y: $kendo-fab-lg-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the FloatingActionButton.</div></div>
    </td>
</tr>
</tbody>
</table>

### Form

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
<tbody><tr>
    <td>$kendo-form-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        form-rows-spacing: $kendo-form-sm-rows-spacing
    ),
    md: (
        form-rows-spacing: $kendo-form-md-rows-spacing
    ),
    lg: (
        form-rows-spacing: $kendo-form-lg-rows-spacing
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Form.</div></div>
    </td>
</tr>
</tbody>
</table>

### Grid

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
<tbody><tr>
    <td>$kendo-grid-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        header-padding-x: $kendo-grid-sm-header-padding-x,
        header-padding-y: $kendo-grid-sm-header-padding-y,
        grouping-header-padding-x: $kendo-grid-sm-grouping-header-padding-x,
        grouping-header-padding-y: $kendo-grid-sm-grouping-header-padding-y,
        cell-padding-x: $kendo-grid-sm-cell-padding-x,
        cell-padding-y: $kendo-grid-sm-cell-padding-y,
        filter-cell-padding-x: $kendo-grid-sm-filter-cell-padding-x,
        filter-cell-padding-y: $kendo-grid-sm-filter-cell-padding-y,
        edit-cell-padding-x: $kendo-grid-sm-edit-cell-padding-x,
        edit-cell-padding-y: $kendo-grid-sm-edit-cell-padding-y,
        button-padding-y: $kendo-button-sm-padding-y,
        button-calc-size: $kendo-button-sm-calc-size,
        group-dropclue-height: $kendo-grid-sm-group-dropclue-height,
        selection-aggregates-padding-x: $kendo-grid-sm-selection-aggregates-padding-x,
        selection-aggregates-padding-y: $kendo-grid-sm-selection-aggregates-padding-y
    ),
    md: (
        header-padding-x: $kendo-grid-md-header-padding-x,
        header-padding-y: $kendo-grid-md-header-padding-y,
        grouping-header-padding-x: $kendo-grid-md-grouping-header-padding-x,
        grouping-header-padding-y: $kendo-grid-md-grouping-header-padding-y,
        cell-padding-x: $kendo-grid-md-cell-padding-x,
        cell-padding-y: $kendo-grid-md-cell-padding-y,
        filter-cell-padding-x: $kendo-grid-md-filter-cell-padding-x,
        filter-cell-padding-y: $kendo-grid-md-filter-cell-padding-y,
        edit-cell-padding-x: $kendo-grid-md-edit-cell-padding-x,
        edit-cell-padding-y: $kendo-grid-md-edit-cell-padding-y,
        button-padding-y: $kendo-button-md-padding-y,
        button-calc-size: $kendo-button-md-calc-size,
        group-dropclue-height: $kendo-grid-md-group-dropclue-height,
        selection-aggregates-padding-x: $kendo-grid-md-selection-aggregates-padding-x,
        selection-aggregates-padding-y: $kendo-grid-md-selection-aggregates-padding-y
    ),
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Grid.</div></div>
    </td>
</tr>
</tbody>
</table>

### Input

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
<tbody><tr>
    <td>$kendo-input-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-input-sm-padding-x,
        padding-y: $kendo-input-sm-padding-y,
        font-size: $kendo-input-sm-font-size,
        line-height: $kendo-input-sm-line-height,
        button-padding-x: $kendo-input-sm-padding-y,
        button-padding-y: $kendo-input-sm-padding-y,
    ),
    md: (
        padding-x: $kendo-input-md-padding-x,
        padding-y: $kendo-input-md-padding-y,
        font-size: $kendo-input-md-font-size,
        line-height: $kendo-input-md-line-height,
        button-padding-x: $kendo-input-md-padding-y,
        button-padding-y: $kendo-input-md-padding-y,
    ),
    lg: (
        padding-x: $kendo-input-lg-padding-x,
        padding-y: $kendo-input-lg-padding-y,
        font-size: $kendo-input-lg-font-size,
        line-height: $kendo-input-lg-line-height,
        button-padding-x: $kendo-input-lg-padding-y,
        button-padding-y: $kendo-input-lg-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Input.</div></div>
    </td>
</tr>
</tbody>
</table>

### List

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
<tbody><tr>
    <td>$kendo-list-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-list-sm-font-size,
        line-height: $kendo-list-sm-line-height,
        header-padding-x: $kendo-list-sm-header-padding-x,
        header-padding-y: $kendo-list-sm-header-padding-y,
        header-font-size: $kendo-list-sm-header-font-size,
        header-line-height: $kendo-list-sm-header-line-height,
        item-padding-x: $kendo-list-sm-item-padding-x,
        item-padding-y: $kendo-list-sm-item-padding-y,
        item-font-size: $kendo-list-sm-item-font-size,
        item-line-height: $kendo-list-sm-item-line-height,
        group-item-padding-x: $kendo-list-sm-group-item-padding-x,
        group-item-padding-y: $kendo-list-sm-group-item-padding-y,
        group-item-font-size: $kendo-list-sm-group-item-font-size,
        group-item-line-height: $kendo-list-sm-group-item-line-height,
        item-group-label-padding-x: $kendo-list-item-group-label-sm-padding-x,
        item-group-label-padding-y: $kendo-list-item-group-label-sm-padding-y,
        item-group-label-font-size: $kendo-list-item-group-label-sm-font-size,
        item-group-label-line-height: $kendo-list-item-group-label-sm-line-height,
        filter-padding-x: $kendo-list-sm-filter-padding-x,
        filter-padding-y: $kendo-list-sm-filter-padding-y
    ),
    md: (
        font-size: $kendo-list-md-font-size,
        line-height: $kendo-list-md-line-height,
        header-padding-x: $kendo-list-md-header-padding-x,
        header-padding-y: $kendo-list-md-header-padding-y,
        header-font-size: $kendo-list-md-header-font-size,
        header-line-height: $kendo-list-md-header-line-height,
        item-padding-x: $kendo-list-md-item-padding-x,
        item-padding-y: $kendo-list-md-item-padding-y,
        item-font-size: $kendo-list-md-item-font-size,
        item-line-height: $kendo-list-md-item-line-height,
        group-item-padding-x: $kendo-list-md-group-item-padding-x,
        group-item-padding-y: $kendo-list-md-group-item-padding-y,
        group-item-font-size: $kendo-list-md-group-item-font-size,
        group-item-line-height: $kendo-list-md-group-item-line-height,
        item-group-label-padding-x: $kendo-list-item-group-label-md-padding-x,
        item-group-label-padding-y: $kendo-list-item-group-label-md-padding-y,
        item-group-label-font-size: $kendo-list-item-group-label-md-font-size,
        item-group-label-line-height: $kendo-list-item-group-label-md-line-height,
        filter-padding-x: $kendo-list-md-filter-padding-x,
        filter-padding-y: $kendo-list-md-filter-padding-y
    ),
    lg: (
        font-size: $kendo-list-lg-font-size,
        line-height: $kendo-list-lg-line-height,
        header-padding-x: $kendo-list-lg-header-padding-x,
        header-padding-y: $kendo-list-lg-header-padding-y,
        header-font-size: $kendo-list-lg-header-font-size,
        header-line-height: $kendo-list-lg-header-line-height,
        item-padding-x: $kendo-list-lg-item-padding-x,
        item-padding-y: $kendo-list-lg-item-padding-y,
        item-font-size: $kendo-list-lg-item-font-size,
        item-line-height: $kendo-list-lg-item-line-height,
        group-item-padding-x: $kendo-list-lg-group-item-padding-x,
        group-item-padding-y: $kendo-list-lg-group-item-padding-y,
        group-item-font-size: $kendo-list-lg-group-item-font-size,
        group-item-line-height: $kendo-list-lg-group-item-line-height,
        item-group-label-padding-x: $kendo-list-item-group-label-lg-padding-x,
        item-group-label-padding-y: $kendo-list-item-group-label-lg-padding-y,
        item-group-label-font-size: $kendo-list-item-group-label-lg-font-size,
        item-group-label-line-height: $kendo-list-item-group-label-lg-line-height,
        filter-padding-x: $kendo-list-lg-filter-padding-x,
        filter-padding-y: $kendo-list-lg-filter-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the List.</div></div>
    </td>
</tr>
</tbody>
</table>

### Loader

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
<tbody><tr>
    <td>$kendo-loader-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Loader.</div></div>
    </td>
</tr>
</tbody>
</table>

### Menu

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
<tbody><tr>
    <td>$kendo-menu-group-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-menu-popup-sm-font-size,
        line-height: $kendo-menu-popup-sm-line-height,
        item-padding-y: $kendo-menu-popup-sm-item-padding-y,
        item-padding-x: $kendo-menu-popup-sm-item-padding-x,
        item-padding-end: $kendo-menu-popup-sm-item-padding-end,
        item-icon-margin-start: $kendo-menu-popup-sm-item-icon-margin-start,
        item-icon-margin-end: $kendo-menu-popup-sm-item-icon-margin-end
    ),
    md: (
        font-size: $kendo-menu-popup-md-font-size,
        line-height: $kendo-menu-popup-md-line-height,
        item-padding-y: $kendo-menu-popup-md-item-padding-y,
        item-padding-x: $kendo-menu-popup-md-item-padding-x,
        item-padding-end: $kendo-menu-popup-md-item-padding-end,
        item-icon-margin-start: $kendo-menu-popup-md-item-icon-margin-start,
        item-icon-margin-end: $kendo-menu-popup-md-item-icon-margin-end
    ),
    lg: (
        font-size: $kendo-menu-popup-lg-font-size,
        line-height: $kendo-menu-popup-lg-line-height,
        item-padding-y: $kendo-menu-popup-lg-item-padding-y,
        item-padding-x: $kendo-menu-popup-lg-item-padding-x,
        item-padding-end: $kendo-menu-popup-lg-item-padding-end,
        item-icon-margin-start: $kendo-menu-popup-lg-item-icon-margin-start,
        item-icon-margin-end: $kendo-menu-popup-lg-item-icon-margin-end
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Menu group.</div></div>
    </td>
</tr>
</tbody>
</table>

### MessageBox

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
<tbody><tr>
    <td>$kendo-message-box-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the MessageBox.</div></div>
    </td>
</tr>
</tbody>
</table>

### Motion

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
<tbody><tr>
    <td>$kendo-easings</td>
    <td>Map</td>
    <td><code>$default-easings</code></td>
    <td><ul><li>linear: cubic-bezier(0, 0, 1, 1)</li><li>accelerate: cubic-bezier(0.42, 0, 1, 1)</li><li>decelerate: cubic-bezier(0, 0, 0.58, 1)</li><li>standard: cubic-bezier(0.42, 0, 0.58, 1)</li><li>sharp: cubic-bezier(0.75, 0, 0.25, 1)</li><li>bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)</li><li>elastic: cubic-bezier(0.5, -0.5, 0.5, 1.5)</li><li>stretchy: cubic-bezier(0.07, 1.81, 0.3, 0.81)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion easing tokens.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-durations</td>
    <td>Map</td>
    <td><code>$default-durations</code></td>
    <td><ul><li>instant: 0ms</li><li>immediate: 50ms</li><li>brief: 100ms</li><li>quick: 150ms</li><li>rapid: 200ms</li><li>swift: 250ms</li><li>speedy: 300ms</li><li>brisk: 350ms</li><li>prompt: 400ms</li><li>timely: 450ms</li><li>moderate: 500ms</li><li>measured: 550ms</li><li>steady: 600ms</li><li>leisurely: 700ms</li><li>slow: 800ms</li><li>languid: 900ms</li><li>sluggish: 1000ms</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion duration tokens.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transitions</td>
    <td>Map</td>
    <td><code>$default-transitions</code></td>
    <td><ul><li>instant: "duration":"var(--kendo-duration-instant)","easing":"var(--kendo-easing-linear)"</li><li>rapid: "duration":"var(--kendo-duration-quick)","easing":"var(--kendo-easing-decelerate)"</li><li>snappy: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-decelerate)"</li><li>energetic: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-elastic)"</li><li>bouncy: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-bounce)"</li><li>subtle: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-standard)"</li><li>gentle: "duration":"var(--kendo-duration-prompt)","easing":"var(--kendo-easing-accelerate)"</li><li>enter: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-decelerate)"</li><li>exit: "duration":"var(--kendo-duration-rapid)","easing":"var(--kendo-easing-accelerate)"</li><li>settle: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-decelerate)"</li><li>scale-out: "duration":"var(--kendo-duration-quick)","easing":"var(--kendo-easing-accelerate)"</li><li>scale-in: "duration":"var(--kendo-duration-rapid)","easing":"var(--kendo-easing-decelerate)"</li><li>fade-out: "duration":"var(--kendo-duration-rapid)","easing":"var(--kendo-easing-standard)"</li><li>fade-in: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-standard)"</li><li>slide-out: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-accelerate)"</li><li>slide-in: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-decelerate)"</li><li>emphasis: "duration":"var(--kendo-duration-quick)","easing":"var(--kendo-easing-sharp)"</li><li>collapse: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-accelerate)"</li><li>expand: "duration":"var(--kendo-duration-prompt)","easing":"var(--kendo-easing-standard)"</li><li>shrink: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-accelerate)"</li><li>grow: "duration":"var(--kendo-duration-prompt)","easing":"var(--kendo-easing-standard)"</li><li>pulse: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-standard)"</li><li>smooth: "duration":"var(--kendo-duration-moderate)","easing":"var(--kendo-easing-standard)"</li><li>flip: "duration":"var(--kendo-duration-measured)","easing":"var(--kendo-easing-standard)"</li><li>fluid: "duration":"var(--kendo-duration-steady)","easing":"var(--kendo-easing-standard)"</li><li>deliberate: "duration":"var(--kendo-duration-slow)","easing":"var(--kendo-easing-standard)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion transition tokens.</div></div>
    </td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Groups</b><div class="theme-variables-description">The groups of the $kendo-transitions Map</div></div>
    </td>
</tr>
<tr>
    <td>Group</td>
    <td colspan="2">Values</td>
    <td>Description</td>
</tr>
<tr>
    <td>fast</td>
    <td colspan="2"> instant, rapid, snappy, energetic</td>
    <td>Speed and Responsiveness</td>
</tr>
<tr>
    <td>expressive</td>
    <td colspan="2"> emphasis, bouncy, pulse, flip</td>
    <td>Personality and Playfulness</td>
</tr>
<tr>
    <td>calm</td>
    <td colspan="2"> subtle, gentle, settle, smooth, fluid, deliberate</td>
    <td>Subtle & Natural</td>
</tr>
<tr>
    <td>visibility</td>
    <td colspan="2"> slide-in, slide-out, fade-in, fade-out, enter, exit</td>
    <td>Visibility & Movement Change</td>
</tr>
<tr>
    <td>size</td>
    <td colspan="2"> scale-in, scale-out, grow, shrink, expand, collapse</td>
    <td>Size & Scale Adjustments</td>
</tr>
</tbody>
</table>

### Otp

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
<tbody><tr>
    <td>$kendo-otp-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        gap: $kendo-otp-sm-gap,
        separator-padding-x: $kendo-otp-sm-separator-padding-x,
        input-width: $kendo-otp-sm-input-width
    ),
    md: (
        gap: $kendo-otp-md-gap,
        separator-padding-x: $kendo-otp-md-separator-padding-x,
        input-width: $kendo-otp-md-input-width
    ),
    lg: (
        gap: $kendo-otp-lg-gap,
        separator-padding-x: $kendo-otp-lg-separator-padding-x,
        input-width: $kendo-otp-lg-input-width
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the OTPInput.</div></div>
    </td>
</tr>
</tbody>
</table>

### Overlay

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
<tbody><tr>
    <td>$kendo-overlay-theme-colors</td>
    <td></td>
    <td><code>("dark", "light", "inverse")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Overlay.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pager

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
<tbody><tr>
    <td>$kendo-pager-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-pager-sm-padding-x,
        padding-y: $kendo-pager-sm-padding-y,
        item-group-spacing: $kendo-pager-sm-item-group-spacing,
        item-min-width: $kendo-pager-sm-item-min-width
    ),
    md: (
        padding-x: $kendo-pager-md-padding-x,
        padding-y: $kendo-pager-md-padding-y,
        item-group-spacing: $kendo-pager-md-item-group-spacing,
        item-min-width: $kendo-pager-md-item-min-width
    ),
    lg: (
        padding-x: $kendo-pager-lg-padding-x,
        padding-y: $kendo-pager-lg-padding-y,
        item-group-spacing: $kendo-pager-lg-item-group-spacing,
        item-min-width: $kendo-pager-lg-item-min-width
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Pager.</div></div>
    </td>
</tr>
</tbody>
</table>

### Radio

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
<tbody><tr>
    <td>$kendo-radio-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        size: $kendo-radio-sm-size,
        glyph-size: $kendo-radio-sm-glyph-size,
        ripple-size: $kendo-radio-sm-ripple-size
    ),
    md: (
        size: $kendo-radio-md-size,
        glyph-size: $kendo-radio-md-glyph-size,
        ripple-size: $kendo-radio-md-ripple-size
    ),
    lg: (
        size: $kendo-radio-lg-size,
        glyph-size: $kendo-radio-lg-glyph-size,
        ripple-size: $kendo-radio-lg-ripple-size
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the RadioButton.</div></div>
    </td>
</tr>
</tbody>
</table>

### SegmentedControl

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
<tbody><tr>
    <td>$kendo-segmented-control-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-segmented-control-sm-font-size,
        line-height: $kendo-segmented-control-sm-line-height,
        button-padding-x: $kendo-segmented-control-sm-button-padding-x,
        button-padding-y: $kendo-segmented-control-sm-button-padding-y,
        button-gap: $kendo-segmented-control-sm-button-gap
    ),
    md: (
        font-size: $kendo-segmented-control-md-font-size,
        line-height: $kendo-segmented-control-md-line-height,
        button-padding-x: $kendo-segmented-control-md-button-padding-x,
        button-padding-y: $kendo-segmented-control-md-button-padding-y,
        button-gap: $kendo-segmented-control-md-button-gap
    ),
    lg: (
        font-size: $kendo-segmented-control-lg-font-size,
        line-height: $kendo-segmented-control-lg-line-height,
        button-padding-x: $kendo-segmented-control-lg-button-padding-x,
        button-padding-y: $kendo-segmented-control-lg-button-padding-y,
        button-gap: $kendo-segmented-control-lg-button-gap
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the Segmented Control.</div></div>
    </td>
</tr>
</tbody>
</table>

### Signature

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
<tbody><tr>
    <td>$kendo-signature-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-signature-sm-padding-x,
        padding-y: $kendo-signature-sm-padding-y,
        line-size: $kendo-signature-sm-line-size
    ),
    md: (
        padding-x: $kendo-signature-md-padding-x,
        padding-y: $kendo-signature-md-padding-y,
        line-size: $kendo-signature-md-line-size
    ),
    lg: (
        padding-x: $kendo-signature-lg-padding-x,
        padding-y: $kendo-signature-lg-padding-y,
        line-size: $kendo-signature-lg-line-size
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Signature.</div></div>
    </td>
</tr>
</tbody>
</table>

### SmartBox

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
<tbody><tr>
    <td>$kendo-smart-box-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-smart-box-sm-padding-x,
        prefix-margin-x: $kendo-smart-box-sm-prefix-margin-x,
    ),
    md: (
        padding-x: $kendo-smart-box-md-padding-x,
        prefix-margin-x: $kendo-smart-box-md-prefix-margin-x,
    ),
    lg: (
        padding-x: $kendo-smart-box-lg-padding-x,
        prefix-margin-x: $kendo-smart-box-lg-prefix-margin-x,

    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Smart box components.</div></div>
    </td>
</tr>
</tbody>
</table>

### Spacing

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
<tbody><tr>
    <td>$kendo-spacing-base</td>
    <td>Number</td>
    <td><code>0.25rem</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base spacing step used to generate the Spacing map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spacing</td>
    <td>Map</td>
    <td><code>$default-spacing</code></td>
    <td><ul><li>0: 0px</li><li>1: calc(1 * var(--kendo-spacing-base))</li><li>2: calc(2 * var(--kendo-spacing-base))</li><li>3: calc(3 * var(--kendo-spacing-base))</li><li>4: calc(4 * var(--kendo-spacing-base))</li><li>5: calc(5 * var(--kendo-spacing-base))</li><li>6: calc(6 * var(--kendo-spacing-base))</li><li>7: calc(7 * var(--kendo-spacing-base))</li><li>8: calc(8 * var(--kendo-spacing-base))</li><li>9: calc(9 * var(--kendo-spacing-base))</li><li>10: calc(10 * var(--kendo-spacing-base))</li><li>11: calc(11 * var(--kendo-spacing-base))</li><li>12: calc(12 * var(--kendo-spacing-base))</li><li>13: calc(13 * var(--kendo-spacing-base))</li><li>14: calc(14 * var(--kendo-spacing-base))</li><li>15: calc(15 * var(--kendo-spacing-base))</li><li>16: calc(16 * var(--kendo-spacing-base))</li><li>17: calc(17 * var(--kendo-spacing-base))</li><li>18: calc(18 * var(--kendo-spacing-base))</li><li>19: calc(19 * var(--kendo-spacing-base))</li><li>20: calc(20 * var(--kendo-spacing-base))</li><li>21: calc(21 * var(--kendo-spacing-base))</li><li>22: calc(22 * var(--kendo-spacing-base))</li><li>23: calc(23 * var(--kendo-spacing-base))</li><li>24: calc(24 * var(--kendo-spacing-base))</li><li>1px: 1px</li><li>0.5: calc(0.5 * var(--kendo-spacing-base))</li><li>1.5: calc(1.5 * var(--kendo-spacing-base))</li><li>2.5: calc(2.5 * var(--kendo-spacing-base))</li><li>3.5: calc(3.5 * var(--kendo-spacing-base))</li><li>4.5: calc(4.5 * var(--kendo-spacing-base))</li><li>5.5: calc(5.5 * var(--kendo-spacing-base))</li><li>6.5: calc(6.5 * var(--kendo-spacing-base))</li><li>7.5: calc(7.5 * var(--kendo-spacing-base))</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Spacing map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Suggestion

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
<tbody><tr>
    <td>$kendo-suggestion-theme-colors</td>
    <td></td>
    <td><code>("base", "primary", "secondary")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Suggestion.</div></div>
    </td>
</tr>
</tbody>
</table>

### Switch

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
<tbody><tr>
    <td>$kendo-switch-sizes</td>
    <td></td>
    <td><code>(
    sm: ( font-size: $kendo-switch-sm-font-size, track-width: $kendo-switch-sm-track-width, track-height: $kendo-switch-sm-track-height, thumb-width: $kendo-switch-sm-thumb-width, thumb-height: $kendo-switch-sm-thumb-height, thumb-offset: $kendo-switch-sm-thumb-offset, label-offset: $kendo-switch-sm-label-offset ),
    md: ( font-size: $kendo-switch-md-font-size, track-width: $kendo-switch-md-track-width, track-height: $kendo-switch-md-track-height, thumb-width: $kendo-switch-md-thumb-width, thumb-height: $kendo-switch-md-thumb-height, thumb-offset: $kendo-switch-md-thumb-offset, label-offset: $kendo-switch-md-label-offset ),
    lg: ( font-size: $kendo-switch-lg-font-size, track-width: $kendo-switch-lg-track-width, track-height: $kendo-switch-lg-track-height, thumb-width: $kendo-switch-lg-thumb-width, thumb-height: $kendo-switch-lg-thumb-height, thumb-offset: $kendo-switch-lg-thumb-offset, label-offset: $kendo-switch-lg-label-offset )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different Switch sizes.</div></div>
    </td>
</tr>
</tbody>
</table>

### Table

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
<tbody><tr>
    <td>$kendo-table-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: var(--kendo-font-size),
        line-height: var(--kendo-line-height),
        cell-padding-x: $kendo-table-sm-cell-padding-x,
        cell-padding-y: $kendo-table-sm-cell-padding-y
    ),
    md: (
        font-size: var(--kendo-font-size),
        line-height: var(--kendo-line-height),
        cell-padding-x: $kendo-table-md-cell-padding-x,
        cell-padding-y: $kendo-table-md-cell-padding-y
    ),
    lg: (
        font-size: var(--kendo-font-size),
        line-height: var(--kendo-line-height),
        cell-padding-x: $kendo-table-lg-cell-padding-x,
        cell-padding-y: $kendo-table-lg-cell-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Table.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tabstrip

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
<tbody><tr>
    <td>$kendo-tabstrip-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-tabstrip-sm-font-size,
        line-height: $kendo-tabstrip-sm-line-height,
        item-padding-x: $kendo-tabstrip-sm-item-padding-x,
        item-padding-y: $kendo-tabstrip-sm-item-padding-y
    ),
    md: (
        font-size: $kendo-tabstrip-md-font-size,
        line-height: $kendo-tabstrip-md-line-height,
        item-padding-x: $kendo-tabstrip-md-item-padding-x,
        item-padding-y: $kendo-tabstrip-md-item-padding-y
    ),
    lg: (
        font-size: $kendo-tabstrip-lg-font-size,
        line-height: $kendo-tabstrip-lg-line-height,
        item-padding-x: $kendo-tabstrip-lg-item-padding-x,
        item-padding-y: $kendo-tabstrip-lg-item-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the TabStrip.</div></div>
    </td>
</tr>
</tbody>
</table>

### TimeSelector

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
<tbody><tr>
    <td>$kendo-time-selector-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-time-selector-sm-font-size,
        line-height: $kendo-time-selector-sm-line-height,
        list-item-padding-x: $kendo-time-selector-sm-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-sm-list-item-padding-y
    ),
    md: (
        font-size: $kendo-time-selector-md-font-size,
        line-height: $kendo-time-selector-md-line-height,
        list-item-padding-x: $kendo-time-selector-md-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-md-list-item-padding-y
    ),
    lg: (
        font-size: $kendo-time-selector-lg-font-size,
        line-height: $kendo-time-selector-lg-line-height,
        list-item-padding-x: $kendo-time-selector-lg-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-lg-list-item-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the TimeSelector.</div></div>
    </td>
</tr>
</tbody>
</table>

### Toolbar

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
<tbody><tr>
    <td>$kendo-toolbar-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-toolbar-sm-padding-x,
        padding-y: $kendo-toolbar-sm-padding-y,
        spacing: $kendo-toolbar-sm-spacing,
        separator-height: $kendo-toolbar-sm-separator-height
    ),
    md: (
        padding-x: $kendo-toolbar-md-padding-x,
        padding-y: $kendo-toolbar-md-padding-y,
        spacing: $kendo-toolbar-md-spacing,
        separator-height: $kendo-toolbar-md-separator-height
    ),
    lg: (
        padding-x: $kendo-toolbar-lg-padding-x,
        padding-y: $kendo-toolbar-lg-padding-y,
        spacing: $kendo-toolbar-lg-spacing,
        separator-height: $kendo-toolbar-lg-separator-height
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the ToolBar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Treeview

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
<tbody><tr>
    <td>$kendo-treeview-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        font-size: $kendo-treeview-sm-font-size,
        line-height: $kendo-treeview-sm-line-height,
        item-padding-x: $kendo-treeview-sm-item-padding-x,
        item-padding-y: $kendo-treeview-sm-item-padding-y,
        checkbox-padding-x: $kendo-treeview-sm-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-sm-checkbox-padding-y
    ),
    md: (
        font-size: $kendo-treeview-md-font-size,
        line-height: $kendo-treeview-md-line-height,
        item-padding-x: $kendo-treeview-md-item-padding-x,
        item-padding-y: $kendo-treeview-md-item-padding-y,
        checkbox-padding-x: $kendo-treeview-md-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-md-checkbox-padding-y
    ),
    lg: (
        font-size: $kendo-treeview-lg-font-size,
        line-height: $kendo-treeview-lg-line-height,
        item-padding-x: $kendo-treeview-lg-item-padding-x,
        item-padding-y: $kendo-treeview-lg-item-padding-y,
        checkbox-padding-x: $kendo-treeview-lg-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-lg-checkbox-padding-y
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the TreeView.</div></div>
    </td>
</tr>
</tbody>
</table>

### Typography

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
<tbody><tr>
    <td>$kendo-font-size</td>
    <td>Number</td>
    <td><code>0.875rem</code></td>
    <td><code>0.875rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xxs</td>
    <td>Number</td>
    <td><code>0.5rem</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xs</td>
    <td>Number</td>
    <td><code>0.625rem</code></td>
    <td><code>0.625rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-sm</td>
    <td>Number</td>
    <td><code>0.75rem</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-md</td>
    <td>Number</td>
    <td><code>$kendo-font-size</code></td>
    <td><code>0.875rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-lg</td>
    <td>Number</td>
    <td><code>1rem</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xl</td>
    <td>Number</td>
    <td><code>1.25rem</code></td>
    <td><code>1.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height</td>
    <td>Number</td>
    <td><code>math.div( 20, 14 )</code></td>
    <td><code>1.4285714285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-xs</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-sm</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-md</td>
    <td>Number</td>
    <td><code>$kendo-line-height</code></td>
    <td><code>1.4285714285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-lg</td>
    <td>Number</td>
    <td><code>1.5</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-em</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-line-height-md} * 1em )</code></td>
    <td><code>calc(1.4285714286 * 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base line height in ems across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight</td>
    <td>Number</td>
    <td><code>400</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-thin</td>
    <td>Number</td>
    <td><code>100</code></td>
    <td><code>100</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thin font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-extra-light</td>
    <td>Number</td>
    <td><code>200</code></td>
    <td><code>200</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra light font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-light</td>
    <td>Number</td>
    <td><code>300</code></td>
    <td><code>300</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-normal</td>
    <td>Number</td>
    <td><code>$kendo-font-weight</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The normal font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-medium</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-semibold</td>
    <td>Number</td>
    <td><code>600</code></td>
    <td><code>600</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The semibold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-bold</td>
    <td>Number</td>
    <td><code>700</code></td>
    <td><code>700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-extra-bold</td>
    <td>Number</td>
    <td><code>800</code></td>
    <td><code>800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra bold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-black</td>
    <td>Number</td>
    <td><code>900</code></td>
    <td><code>900</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The most pronounced font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tightest</td>
    <td>Number</td>
    <td><code>-.15px</code></td>
    <td><code>-0.15px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tightest letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tighter</td>
    <td>Number</td>
    <td><code>-.10px</code></td>
    <td><code>-0.1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Slightly looser than the tighter letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tight</td>
    <td>Number</td>
    <td><code>-.5px</code></td>
    <td><code>-0.5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Moderately tight letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-normal</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The normal letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-wide</td>
    <td>Number</td>
    <td><code>.5px</code></td>
    <td><code>0.5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Wide letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-wider</td>
    <td>Number</td>
    <td><code>.10px</code></td>
    <td><code>0.1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Slightly wider than the wide letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-widest</td>
    <td>Number</td>
    <td><code>.15px</code></td>
    <td><code>0.15px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The widest letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans</td>
    <td>List</td>
    <td><code>Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans</code></td>
    <td><code>(Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-serif</td>
    <td>List</td>
    <td><code>"Times New Roman", Georgia, Garamond, Palatino, Baskerville</code></td>
    <td><code>("Times New Roman", Georgia, Garamond, Palatino, Baskerville)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans-serif</td>
    <td>List</td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
    <td><code>(system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans-serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-monospace</td>
    <td>List</td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
    <td><code>(SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The monospace font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-sizes</td>
    <td>Map</td>
    <td><code>$default-font-sizes</code></td>
    <td><ul><li>xxs: 0.5rem</li><li>xs: 0.625rem</li><li>sm: 0.75rem</li><li>md: 0.875rem</li><li>lg: 1rem</li><li>xl: 1.25rem</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font sizes map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-heights</td>
    <td>Map</td>
    <td><code>$default-line-heights</code></td>
    <td><ul><li>xs: 1</li><li>sm: 1.25</li><li>md: 1.4285714285714286</li><li>lg: 1.5</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weights</td>
    <td>Map</td>
    <td><code>$default-font-weights</code></td>
    <td><ul><li>thin: 100</li><li>extra-light: 200</li><li>light: 300</li><li>normal: 400</li><li>medium: 500</li><li>semibold: 600</li><li>bold: 700</li><li>extra-bold: 800</li><li>black: 900</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacings</td>
    <td>Map</td>
    <td><code>$default-letter-spacings</code></td>
    <td><ul><li>tightest: -0.15px</li><li>tighter: -0.1px</li><li>tight: -0.5px</li><li>normal: 0px</li><li>wide: 0.5px</li><li>wider: 0.1px</li><li>widest: 0.15px</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacings map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-families</td>
    <td>Map</td>
    <td><code>$default-font-families</code></td>
    <td><ul><li>sans: (Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans)</li><li>serif: ("Times New Roman", Georgia, Garamond, Palatino, Baskerville)</li><li>sans-serif: (system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")</li><li>monospace: (SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font families map</div></div>
    </td>
</tr>
</tbody>
</table>

### Window

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
<tbody><tr>
    <td>$kendo-window-sizes</td>
    <td></td>
    <td><code>(
    auto: null,
    sm: 300px,
    md: 800px,
    lg: 1200px
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-theme-colors</td>
    <td></td>
    <td><code>("primary", "light", "dark")</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Window.</div></div>
    </td>
</tr>
</tbody>
</table>





## Mixins



### `import-once`

Outputs a module once, no matter how many times it is included.


#### Syntax

```scss
@include import-once($name);
```
#### Parameters


`<String> $name`
: The name of the exported module.


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/mixins/_import-once.scss#L11-L16
@mixin import-once($name) {
    @if (list.index( $_kendo-imported-modules, $name ) == null) { // stylelint-disable-line
        $_kendo-imported-modules: list.append( $_kendo-imported-modules, $name ) !global;
        @content;
    }
}
```




## Classnames



### `.k-sr-only`

This class could be assigned to elements which should be visually hidden, but remain accessible for screen readers.
    @name .k-sr-only
    @group accessibility




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
