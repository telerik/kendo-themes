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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L621-L627
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L638-L643
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L650-L652
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L659-L661
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L673-L692
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/color-system/_functions.import.scss#L187-L301
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/color-system/_functions.import.scss#L309-L317
@function k-color($key) {
    $_color: map.get($kendo-colors, $key);

    @if ($_color) {
        @return var(--kendo-color-#{$key}, $_color);
    } @else {
        @error "Color Variable \`#{$key}\` does not exists in the color collection.";
    }
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L230-L232
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L243-L245
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L253-L261
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L269-L277
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L285-L292
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L300-L307
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L318-L322
@function k-rgba-to-mix($color, $bg) {
    $percent: k-color-alpha( $color ) * 100%;

    @return k-color-mix( rgba( $color, 1 ), $bg, $percent );
}
```

### `k-color-alpha`

Returns the alpha channel of a color.


#### Syntax

```scss
k-color-alpha($color) // => Number
```

#### Parameters


`<Color> $color`
: The color to get the alpha channel for.


#### Examples

```scss
// Usage
@debug k-color-alpha( rgba( 0, 0, 0, 0.5 ) ); // => 0.5
@debug k-color-alpha( #000 ); // => 1
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L17-L19
@function k-color-alpha($color) {
    @return color.alpha( $color );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L27-L32
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L40-L45
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L53-L58
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L66-L71
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L79-L84
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L92-L97
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L107-L109
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L118-L120
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L129-L131
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L140-L142
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L151-L153
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L162-L164
@function k-color-desaturate($color, $amount) {
    @return color.adjust( $color, $saturation: - $amount );
}
```

### `k-color-grayscale`

Returns a gray color with the same lightness as the input color.


#### Syntax

```scss
k-color-grayscale($color) // => Color
```

#### Parameters


`<Color> $color`
: The color to convert to grayscale.


#### Examples

```scss
// Usage
@debug k-color-grayscale( #f00 ); // => #808080
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L172-L174
@function k-color-grayscale($color) {
    @return color.grayscale( $color );
}
```

### `k-color-complement`

Returns the RGB complement of a color. This identical to adjusting the hue
by 180 degrees.


#### Syntax

```scss
k-color-complement($color) // => Color
```

#### Parameters


`<Color> $color`
: The color to get the complement for.


#### Examples

```scss
// Usage
@debug k-color-complement( #f00 ); // => #00ffff
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L183-L185
@function k-color-complement($color) {
    @return color.complement( $color );
}
```

### `k-color-invert`

Returns the inverse of a color.


#### Syntax

```scss
k-color-invert($color) // => Color
```

#### Parameters


`<Color> $color`
: The color to invert.


#### Examples

```scss
// Usage
@debug k-color-invert( #f00 ); // => #00ffff
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L193-L195
@function k-color-invert($color) {
    @return color.invert( $color );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_lang.import.scss#L12-L14
@function k-if-var($var, $fallback) {
    @return if( $var != null, $var, $fallback );
}
```

### `k-list-append`

Returns a copy of `$list` with `$val` appended to the end.


#### Syntax

```scss
k-list-append($list, $val, $separator) // => List
```

#### Parameters


`<List> $list`
: The list to process.

`<Any> $val`
: The value to append to `$list`.

`<String> $separator`
: The separator to use between `$list` and `$val`.


#### Examples

```scss
// Usage
@debug k-list-append( ( "foo", "bar" ), "baz" ); // => "foo, bar, baz"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L11-L13
@function k-list-append($list, $val, $separator) {
    @return list.append( $list, $val, $separator );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L23-L25
@function k-list-includes($list, $value) {
    @return k-list-index( $list, $value ) != null;
}
```

### `k-list-index`

Returns the index of `$value` in `$list`.


#### Syntax

```scss
k-list-index($list, $value) // => Number
```

#### Parameters


`<List> $list`
: The list to check.

`<Any> $value`
: The value to check for.


#### Examples

```scss
// Usage
@debug k-list-index( ( "foo", "bar" ), "foo" ); // => 1
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L34-L36
@function k-list-index($list, $value) {
    @return list.index( $list, $value );
}
```

### `k-list-is-bracketed`

Returns whether `$list` is bracketed.


#### Syntax

```scss
k-list-is-bracketed($list) // => Boolean
```

#### Parameters


`<List> $list`
: The list to check.


#### Examples

```scss
// Usage
@debug k-list-is-bracketed( ( "foo", "bar" ) ); // => false
@debug k-list-is-bracketed( [ "foo", "bar" ] ); // => true
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L45-L47
@function k-list-is-bracketed($list) {
    @return list.is-bracketed( $list );
}
```

### `k-list-join`

Joins two lists together.


#### Syntax

```scss
k-list-join($list1, $list2, $separator, $bracketed) // => List
```

#### Parameters


`<List> $list1`
: The first list to join.

`<List> $list2`
: The second list to join.

`<String> $separator`
: The separator to use between `$list1` and `$list2`.

`<Boolean> $bracketed`
: Whether the result should be bracketed.


#### Examples

```scss
// Usage
@debug k-list-join( ( "foo", "bar" ), ( "baz", "qux" ) ); // => "foo, bar, baz, qux"
@debug k-list-join( ( "foo", "bar" ), ( "baz", "qux" ), " " ); // => "foo bar baz qux"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L59-L61
@function k-list-join($list1, $list2, $separator, $bracketed) {
    @return list.join( $list1, $list2, $separator, $bracketed );
}
```

### `k-list-length`

Returns the length of `$list`.


#### Syntax

```scss
k-list-length($list) // => Number
```

#### Parameters


`<List> $list`
: The list to check.


#### Examples

```scss
// Usage
@debug k-list-length( ( "foo", "bar" ) ); // => 2
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L69-L71
@function k-list-length($list) {
    @return list.length( $list );
}
```

### `k-list-nth`

Returns the nth item in `$list`.


#### Syntax

```scss
k-list-nth($list, $n) // => Any
```

#### Parameters


`<List> $list`
: The list to check.

`<Number> $n`
: The index of the item to return.


#### Examples

```scss
// Usage
@debug k-list-nth( ( "foo", "bar" ), 1 ); // => "foo"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L80-L82
@function k-list-nth($list, $n) {
    @return list.nth( $list, $n );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L90-L105
@function k-list-reverse($list) {
    $result: ();

    @if ($list) {
        $len: k-list-length( $list );

        @for $i from $len through 1 {
            $result: k-list-append( $result, k-list-nth( $list, $i ) );
        }

        @return $result;
    }

    @warn "No list passed.";
    @return $result;
}
```

### `k-list-separator`

Returns the separator of `$list`.


#### Syntax

```scss
k-list-separator($list) // => String
```

#### Parameters


`<List> $list`
: The list to check.


#### Examples

```scss
// Usage
@debug k-list-separator( ( "foo", "bar" ) ); // => ","
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L113-L115
@function k-list-separator($list) {
    @return list.list-separator( $list );
}
```

### `k-list-set-nth`

Returns a copy of `$list` with `$val` inserted at `$n`.


#### Syntax

```scss
k-list-set-nth($list, $n, $val) // => List
```

#### Parameters


`<List> $list`
: The list to process.

`<Number> $n`
: The index at which to insert `$val`.

`<Any> $val`
: The value to insert.


#### Examples

```scss
// Usage
@debug k-list-set-nth( ( "foo", "bar" ), 1, "baz" ); // => "baz, bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L125-L127
@function k-list-set-nth($list, $n, $val) {
    @return list.set-nth( $list, $n, $value );
}
```

### `k-list-zip`

Combines two lists into a single list of two-item lists.


#### Syntax

```scss
k-list-zip($list1, $list2) // => List
```

#### Parameters


`<List> $list1`
: The first list to combine.

`<List> $list2`
: The second list to combine.


#### Examples

```scss
// Usage
@debug k-list-zip( ( "foo", "bar" ), ( "baz", "qux" ) ); // => ((foo, baz), (bar, qux))
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L136-L138
@function k-list-zip($list1, $list2) {
    @return list.zip( $lists... );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L10-L15
@function k-map-get($map, $key) {
    @each $key in $keys {
        $map: map.get( $map, $key ); // stylelint-disable-line
    }
    @return $map;
}
```

### `k-map-has-key`

Returns whether `$map` has a value at `$key`.


#### Syntax

```scss
k-map-has-key($map, $key) // => Boolean
```

#### Parameters


`<Map> $map`
: The map to check.

`<Any> $key`
: The key to check.


#### Examples

```scss
// Usage
@debug k-map-has( ( "foo": "bar" ), "foo" ); // => true
@debug k-map-has( ( "foo": "bar" ), "bar" ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L25-L27
@function k-map-has-key($map, $key) {
    @return map.has-key( $map, $key );
}
```

### `k-map-keys`

Returns a comma separated list of the keys in `$map`.


#### Syntax

```scss
k-map-keys($map) // => List
```

#### Parameters


`<Map> $map`
: The map to get the keys from.


#### Examples

```scss
// Usage
@debug k-map-keys( ( "foo": "bar", "baz": "qux" ) ); // => "foo, baz"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L35-L37
@function k-map-keys($map) {
    @return map.keys( $map );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L46-L51
@function k-map-merge($map, $args) {
    @each $arg in $args {
        $map: map.merge( $map, $arg ); // stylelint-disable-line
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L59-L81
@function k-map-deep-merge($maps) {
    $merged: ();

    @each $map in $maps {
      @each $key, $val in $map {
        @if (meta.type-of($val) == 'map') {
          $current: k-map-get($merged, $key);
          @if (meta.type-of($current) == 'map') {
            $val: k-map-deep-merge($current, $val);
            $map: k-map-merge(
              $map,
              (
                $key: $val
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

### `k-map-remove`

Returns a map with the keys and values from `$map` except for `$keys`.


#### Syntax

```scss
k-map-remove($map, $keys) // => Map
```

#### Parameters


`<Map> $map`
: The map to remove keys from.

`<Any> $keys`
: The keys to remove from `$map`.


#### Examples

```scss
// Usage
@debug k-map-remove( ( "foo": "bar", "baz": "qux" ), "foo" ); // => ( "baz": "qux" )
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L90-L92
@function k-map-remove($map, $keys) {
    @return map.remove( $map, $keys... );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L102-L104
@function k-map-set($map, $key, $value) {
    @return k-map-merge( $map, ( $key: $value ) );
}
```

### `k-map-values`

Returns a comma separated list of the values in `$map`.


#### Syntax

```scss
k-map-values($map) // => List
```

#### Parameters


`<Map> $map`
: The map to get the values from.


#### Examples

```scss
// Usage
@debug k-map-values( ( "foo": "bar", "baz": "qux" ) ); // => "bar, qux"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L112-L114
@function k-map-values($map) {
    @return map.values( $map );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L122-L138
@function k-map-negate($map) {
    $_map-neg: ();

    @if( meta.type-of($map) != map ) {
        @error "expected type of #{$map} is map, was #{meta.type-of($map)}";
    };
    @each $key, $value in $map {
        $_key-neg: "-" + $key;

        @if( meta.type-of($value) == number and $value != 0 and $_key-neg != "-0" ) {
            $_map-neg: k-map-set($_map-neg, $_key-neg, -1 * $value );
        }
    }

    @return $_map-neg;
}
```

### `k-math-abs`

Returns the absolute value of a number.


#### Syntax

```scss
k-math-abs($number) // => Number
```

#### Parameters


`<Number> $number`
: The number to get the absolute value of.


#### Examples

```scss
// Usage
@debug k-math-abs( -10 ); // => 10
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L9-L11
@function k-math-abs($number) {
    @return math.abs( $number );
}
```

### `k-math-ceil`

Returns the smallest integer greater than or equal to a number.


#### Syntax

```scss
k-math-ceil($number) // => Number
```

#### Parameters


`<Number> $number`
: The number to get the ceiling of.


#### Examples

```scss
// Usage
@debug k-math-ceil( 10.1 ); // => 11
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L19-L21
@function k-math-ceil($number) {
    @return math.ceil( $number );
}
```

### `k-math-floor`

Returns the largest integer less than or equal to a number.


#### Syntax

```scss
k-math-floor($number) // => Number
```

#### Parameters


`<Number> $number`
: The number to get the floor of.


#### Examples

```scss
// Usage
@debug k-math-floor( 10.9 ); // => 10
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L29-L31
@function k-math-floor($number) {
    @return math.floor( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L43-L45
@function k-math-clamp($number, $min, $max) {
    @return k-math-max( $min, k-math-min( $max, $number ) );
}
```

### `k-math-compatible`

Returns whether two numbers have compatible units.


#### Syntax

```scss
k-math-compatible($a, $b) // => Boolean
```

#### Parameters


`<Number> $a`
: The first number.

`<Number> $b`
: The second number.


#### Examples

```scss
// Usage
@debug k-math-compatible( 10px, 10px ); // => true
@debug k-math-compatible( 10px, 10em ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L55-L57
@function k-math-compatible($a, $b) {
    @return math.comparable( $a, $b );
}
```

### `k-math-div`

Returns the quotient of two numbers.


#### Syntax

```scss
k-math-div($a, $b) // => Number
```

#### Parameters


`<Number> $a`
: The dividend.

`<Number> $b`
: The divisor.


#### Examples

```scss
// Usage
@debug k-math-div( 10, 2 ); // => 5
@debug k-math-div( 10px, 2 ); // => 5px
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L67-L69
@function k-math-div($a, $b) {
    @return math.div( $a, $b );
}
```

### `k-math-is-unitless`

Returns whether `$number` has no units.


#### Syntax

```scss
k-math-is-unitless($number) // => Boolean
```

#### Parameters


`<Number> $number`
: The number to check.


#### Examples

```scss
// Usage
@debug k-math-is-unitless( 10 ); // => true
@debug k-math-is-unitless( 10px ); // => false
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L78-L80
@function k-math-is-unitless($number) {
    @return math.unitless( $number );
}
```

### `k-math-max`

Returns the larger of two numbers.


#### Syntax

```scss
k-math-max($a, $b) // => Number
```

#### Parameters


`<Number> $a`
: The first number.

`<Number> $b`
: The second number.


#### Examples

```scss
// Usage
@debug k-math-max( 10, 20 ); // => 20
@debug k-math-max( 10px, 20px ); // => 20px
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L90-L92
@function k-math-max($a, $b) {
    @return math.max( $a, $b );
}
```

### `k-math-min`

Returns the smaller of two numbers.


#### Syntax

```scss
k-math-min($a, $b) // => Number
```

#### Parameters


`<Number> $a`
: The first number.

`<Number> $b`
: The second number.


#### Examples

```scss
// Usage
@debug k-math-min( 10, 20 ); // => 10
@debug k-math-min( 10px, 20px ); // => 10px
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L102-L104
@function k-math-min($a, $b) {
    @return math.min( $a, $b );
}
```

### `k-math-mod`

Returns the remainder of two numbers.


#### Syntax

```scss
k-math-mod($a, $b) // => Number
```

#### Parameters


`<Number> $a`
: The dividend.

`<Number> $b`
: The divisor.


#### Examples

```scss
// Usage
@debug k-math-mod( 10, 3 ); // => 1
@debug k-math-mod( 10px, 3 ); // => 1px
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L114-L116
@function k-math-mod($a, $b) {
    @return ( $a % $b );
}
```

### `k-math-mul`

Returns the product of two numbers.


#### Syntax

```scss
k-math-mul($a, $b) // => Number
```

#### Parameters


`<Number> $a`
: The first number.

`<Number> $b`
: The second number.


#### Examples

```scss
// Usage
@debug k-math-mul( 10, 2 ); // => 20
@debug k-math-mul( 10px, 2 ); // => 20px
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L126-L128
@function k-math-mul($a, $b) {
    @return ( $a * $b );
}
```

### `k-math-percentage`

Converts a unitless number to a percentage.


#### Syntax

```scss
k-math-percentage($number) // => Number
```

#### Parameters


`<Number> $number`
: The number to convert.


#### Examples

```scss
// Usage
@debug k-math-percentage( 0.5 ); // => 50%
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L136-L138
@function k-math-percentage($number) {
    @return math.percentage( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L147-L166
@function k-math-pow($x, $n) {
    $ret: 1;

    @if ( $n == 0 ) {
        @return $ret;
    }

    @if ( $n > 0 ) {
        @for $i from 1 through $n {
            $ret: $ret * $x;
        }
        @return $ret;
    }

    @for $i from $n to 0 {
        $ret: k-math-div( $ret, $x );
    }
    @return $ret;
}
```

### `k-math-random`

Returns a random number between 0 and 1.


#### Syntax

```scss
k-math-random($limit) // => Number
```

#### Parameters


`<Number> $limit`
: The upper limit of the random number.


#### Examples

```scss
// Usage
@debug k-math-random(); // => 0.123456789
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L174-L180
@function k-math-random($limit) {
    @if ( $limit == null ) { // stylelint-disable-line
        @return math.random();
    }

    @return math.random( $limit );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L190-L199
@function k-math-round($number, $precision) {
    @if ( $precision == 0 ) {
        @return math.round( $number );
    }

    $pow: k-math-pow( 10, $precision );

    @return k-math-div( round( $number * $pow ), $pow );
}
```

### `k-math-unit`

Returns a string representation of `$number`'s unit.


#### Syntax

```scss
k-math-unit($number) // => String
```

#### Parameters


`<Number> $number`
: The number to get the unit of.


#### Examples

```scss
// Usage
@debug k-math-unit( 10px ); // => px
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L207-L209
@function k-math-unit($number) {
    @return math.unit( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L217-L223
@function k-math-strip-unit($number) {
    @if ( k-meta-type-of( $number ) == "number" ) and not k-math-is-unitless( $number ) {
        @return k-math-div( $number, 1 * k-math-unit( $number) );
    }

    @return $number;
}
```

### `k-meta-call`

A wrapper around the `call()` function.
Calls the function `$function` with the arguments `$args`.


#### Syntax

```scss
k-meta-call($function, $args) // => Any
```

#### Parameters


`<Function> $function`
: The function to call.

`<List> $args`
: The arguments to pass to `$function`.


#### Examples

```scss
// Usage
@debug k-meta-call( k-meta-get-function( "k-string-replace" ), "foo bar", "bar", "baz" ); // => "foo baz"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L13-L15
@function k-meta-call($function, $args) {
    @return meta.call( $function, $args... );
}
```

### `k-meta-function-exists`

A wrapper around the `function-exists()` function.
Returns whether a function with the name `$name` exists.


#### Syntax

```scss
k-meta-function-exists($name) // => Boolean
```

#### Parameters


`<String> $name`
: The name of the function to check.


#### Examples

```scss
// Usage
@debug k-meta-function-exists( "k-string-replace" ); // => true
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L24-L30
@function k-meta-function-exists($name) {
    @if $name == "" {
        @return false;
    }

    @return meta.function-exists( $name );
}
```

### `k-meta-get-function`

A wrapper around the `get-function()` function.
Returns the function with the name `$name`.


#### Syntax

```scss
k-meta-get-function($name, $css, $module) // => Function
```

#### Parameters


`<String> $name`
: The name of the function to get.

`<Boolean> $css`
: Whether to return the CSS representation of the function.

`<Module> $module`
: The module to get the function from.


#### Examples

```scss
// Usage
@debug k-meta-get-function( "k-string-replace" ); // => Function
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L41-L43
@function k-meta-get-function($name, $css, $module) {
    @return meta.get-function( $name, $args... );
}
```

### `k-meta-inspect`

A wrapper around the `inspect()` function.
Returns a string representation of `$value`.


#### Syntax

```scss
k-meta-inspect($value) // => String
```

#### Parameters


`<Any> $value`
: The value to inspect.


#### Examples

```scss
// Usage
@debug k-meta-inspect( "foo bar" ); // => "foo bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L52-L54
@function k-meta-inspect($value) {
    @return meta.inspect( $value );
}
```

### `k-meta-keywords`

A wrapper around the `keywords()` function.
Returns a map of the keywords in `$args`.


#### Syntax

```scss
k-meta-keywords($args) // => Map
```

#### Parameters


`<List> $args`
: The arguments to process.


#### Examples

```scss
// Usage
@debug k-meta-keywords( ( "foo" "bar" "baz" "qux" ) ); // => ( "foo": "bar", "baz": "qux" )
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L63-L65
@function k-meta-keywords($args) {
    @return meta.keywords( $args );
}
```

### `k-meta-type-of`

A wrapper around the `type-of()` function.
Returns the type of `$value`.


#### Syntax

```scss
k-meta-type-of($value) // => String
```

#### Parameters


`<Any> $value`
: The value to get the type of.


#### Examples

```scss
// Usage
@debug k-meta-type-of( "foo bar" ); // => "string"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L74-L76
@function k-meta-type-of($value) {
    @return meta.type-of( $value );
}
```

### `k-meta-variable-exists`

A wrapper around the `variable-exists()` function.
Returns whether a variable with the name `$name` exists.


#### Syntax

```scss
k-meta-variable-exists($name) // => Boolean
```

#### Parameters


`<String> $name`
: The name of the variable to check.


#### Examples

```scss
// Usage
@debug k-meta-variable-exists( "foo" ); // => true
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L85-L87
@function k-meta-variable-exists($name) {
    @return meta.variable-exists( $name );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L98-L100
@function k-meta-is-number($value) {
    @return k-meta-type-of( $value ) == "number";
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L111-L113
@function k-meta-is-integer($value) {
    @return k-meta-is-number( $value ) and k-math-round( $value ) == $value;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L124-L126
@function k-meta-is-time($value) {
    @return k-meta-is-number( $value ) and k-string-index( "ms" "s", k-math-unit( $value ) ) != null;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L137-L139
@function k-meta-is-duration($value) {
    @return k-meta-is-time( $value );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L150-L152
@function k-meta-is-angle($value) {
    @return k-meta-is-number( $value ) and k-string-index( "deg" "rad" "grad" "turn", k-math-unit( $value ) ) != null;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L163-L165
@function k-meta-is-frequency($value) {
    @return k-meta-is-number( $value ) and k-string-index( "Hz" "kHz", k-math-unit( $value ) ) != null;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L178-L180
@function k-meta-is-relative-length($value) {
    @return k-meta-is-number( $value ) and k-string-index( "em" "ex" "ch" "rem" "vw" "vh" "vmin" "vmax", k-math-unit( $value ) ) != null;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L191-L193
@function k-meta-is-absolute-length($value) {
    @return k-meta-is-number( $value ) and k-string-index( "cm" "mm" "in" "px" "pt" "pc", k-math-unit( $value ) ) != null;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L204-L206
@function k-meta-is-percentage($value) {
    @return k-meta-is-number( $value ) and k-math-unit( $value ) == "%";
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L218-L220
@function k-meta-is-length($value) {
    @return k-meta-is-relative-length( $value ) or k-meta-is-absolute-length( $value );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L231-L233
@function k-meta-is-resolution($value) {
    @return k-meta-is-number( $value ) and k-string-index( "dpi" "dpcm" "dppx", k-math-unit( $value ) ) != null;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L243-L245
@function k-meta-is-position($value) {
    @return k-meta-is-length( $value ) or k-meta-is-percentage( $value ) or k-string-index( "top" "right" "bottom" "left" "center", $value ) != null;
}
```

### `k-string-index`

Returns the first index of `$substring` in `$string`, or `null` if `$string` doesn’t contain `$substring`.


#### Syntax

```scss
k-string-index($string, $substring) // => Number
```

#### Parameters


`<String> $string`
: The string to process.

`<String> $substring`
: The substring to look for.


#### Examples

```scss
// Usage
@debug k-string-index( "foo bar", "bar" ); // => 5
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L25-L27
@function k-string-index($string, $substring) {
    @return string.index( $string, $substring );
}
```

### `k-string-insert`

Returns a copy of `$string` with `$insert` inserted at `$index`.


#### Syntax

```scss
k-string-insert($string, $insert, $index) // => String
```

#### Parameters


`<String> $string`
: The string to process.

`<String> $insert`
: The string to insert.

`<Number> $index`
: The index at which to insert `$insert`.


#### Examples

```scss
// Usage
@debug k-string-insert( "foo bar", "baz", 5 ); // => "foo baz bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L37-L39
@function k-string-insert($string, $insert, $index) {
    @return string.insert( $string, $insert, $index );
}
```

### `k-string-length`

Returns the length of `$string`.


#### Syntax

```scss
k-string-length($string) // => Number
```

#### Parameters


`<String> $string`
: The string to process.


#### Examples

```scss
// Usage
@debug k-string-length( "foo bar" ); // => 7
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L47-L49
@function k-string-length($string) {
    @return string.length( $string );
}
```

### `k-string-quote`

Returns a copy of `$string` with quotes added.


#### Syntax

```scss
k-string-quote($string) // => String
```

#### Parameters


`<String> $string`
: The string to process.


#### Examples

```scss
// Usage
@debug k-string-quote( "foo bar" ); // => "foo bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L57-L59
@function k-string-quote($string) {
    @return string.quote( $string );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L72-L84
@function k-string-replace($string, $search, $replace) {
    @if meta.type-of( $string ) == number {
        $string: $string + "";
    }

    $index: k-string-index( $string, $search );

    @if $index {
        @return k-string-slice( $string, 1, $index - 1 ) + $replace + k-string-replace( k-string-slice( $string, $index + k-string-length( $search ) ), $search, $replace );
    }

    @return $string;
}
```

### `k-string-slice`

Returns a substring of `$string` starting at `$start-at` and ending at `$end-at`.


#### Syntax

```scss
k-string-slice($string, $start-at, $end-at) // => String
```

#### Parameters


`<String> $string`
: The string to process.

`<Number> $start-at`
: The index at which to start the substring.

`<Number> $end-at`
: The index at which to end the substring.


#### Examples

```scss
// Usage
@debug k-string-slice( "foo bar", 5 ); // => "bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L94-L96
@function k-string-slice($string, $start-at, $end-at) {
    @return string.slice( $string, $start-at, $end-at );
}
```

### `k-string-to-lower-case`

Returns a copy of `$string` with all uppercase letters converted to lowercase.


#### Syntax

```scss
k-string-to-lower-case($string) // => String
```

#### Parameters


`<String> $string`
: The string to process.


#### Examples

```scss
// Usage
@debug k-string-to-lower-case( "FOO BAR" ); // => "foo bar"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L104-L106
@function k-string-to-lower-case($string) {
    @return string.to-lower-case( $string );
}
```

### `k-string-to-upper-case`

Returns a copy of `$string` with all lowercase letters converted to uppercase.


#### Syntax

```scss
k-string-to-upper-case($string) // => String
```

#### Parameters


`<String> $string`
: The string to process.


#### Examples

```scss
// Usage
@debug k-string-to-upper-case( "foo bar" ); // => "FOO BAR"
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L114-L116
@function k-string-to-upper-case($string) {
    @return string.to-upper-case( $string );
}
```

### `k-string-unique-id`

Returns a unique identifier.


#### Syntax

```scss
k-string-unique-id() // => String
```



#### Examples

```scss
// Usage
@debug k-string-unique-id(); // => UNIQUE_ID
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L123-L125
@function k-string-unique-id() {
    @return string.unique-id();
}
```

### `k-string-unquote`

Returns a copy of `$string` with quotes removed.


#### Syntax

```scss
k-string-unquote($string) // => String
```

#### Parameters


`<String> $string`
: The string to process.


#### Examples

```scss
// Usage
@debug k-string-unquote( "foo bar" ); // => foo bar
```


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L133-L135
@function k-string-unquote($string) {
    @return string.unquote( $string );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L168-L176
@function k-escape-class-name($text) {
    $_text: $text;

    @each $char, $rep in $_kendo-escape-class-name {
        $_text: k-string-replace( $_text, k-string-unquote( $char ), k-string-unquote( $rep ) );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/z-index/index.import.scss#L28-L36
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
    <td>$kendo-border-radius-none</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 0)</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The none border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xs</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 1px)</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-sm</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 0.5)</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 1)</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 1.5)</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xl</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 2)</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxl</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 3)</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxxl</td>
    <td>Number</td>
    <td><code>map.get($kendo-spacing, 4)</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-full</td>
    <td>Number</td>
    <td><code>9999px</code></td>
    <td><code>9999px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radii</td>
    <td>Map</td>
    <td><code>$default-border-radii</code></td>
    <td><ul><li>none: 0px</li><li>xs: 1px</li><li>sm: 0.125rem</li><li>md: 0.25rem</li><li>lg: 0.375rem</li><li>xl: 0.5rem</li><li>xxl: 0.75rem</li><li>xxxl: 1rem</li><li>full: 9999px</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global radii Map.</div></div>
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
    <td><ul><li>app-surface: #ffffff</li><li>on-app-surface: #3d3d3d</li><li>subtle: #666666</li><li>surface: #fafafa</li><li>surface-alt: #ffffff</li><li>border: rgba(0, 0, 0, 0.08)</li><li>border-alt: rgba(0, 0, 0, 0.16)</li><li>base-subtle: #ebebeb</li><li>base-subtle-hover: #e0e0e0</li><li>base-subtle-active: #d6d6d6</li><li>base: #f5f5f5</li><li>base-hover: #ebebeb</li><li>base-active: #d6d6d6</li><li>base-emphasis: #c2c2c2</li><li>base-on-subtle: #3d3d3d</li><li>on-base: #3d3d3d</li><li>base-on-surface: #3d3d3d</li><li>primary-subtle: #ffeceb</li><li>primary-subtle-hover: #ffdedb</li><li>primary-subtle-active: #ffc8c4</li><li>primary: #ff6358</li><li>primary-hover: #ea5a51</li><li>primary-active: #d45349</li><li>primary-emphasis: #ff9d97</li><li>primary-on-subtle: #5c201c</li><li>on-primary: #ffffff</li><li>primary-on-surface: #ff6358</li><li>secondary-subtle: #fafafa</li><li>secondary-subtle-hover: #f5f5f5</li><li>secondary-subtle-active: #ebebeb</li><li>secondary: #666666</li><li>secondary-hover: #525252</li><li>secondary-active: #3d3d3d</li><li>secondary-emphasis: #e0e0e0</li><li>secondary-on-subtle: #141414</li><li>on-secondary: #ffffff</li><li>secondary-on-surface: #292929</li><li>tertiary-subtle: #d8f1fd</li><li>tertiary-subtle-hover: #c5eafc</li><li>tertiary-subtle-active: #a3dffb</li><li>tertiary: #03a9f4</li><li>tertiary-hover: #039ae0</li><li>tertiary-active: #028ccb</li><li>tertiary-emphasis: #61c9f9</li><li>tertiary-on-subtle: #023f5c</li><li>on-tertiary: #ffffff</li><li>tertiary-on-surface: #028ccb</li><li>info-subtle: #d2e2fb</li><li>info-subtle-hover: #bdd4f8</li><li>info-subtle-active: #80acf4</li><li>info: #0058e9</li><li>info-hover: #0052d6</li><li>info-active: #004ac2</li><li>info-emphasis: #6098f2</li><li>info-on-subtle: #002259</li><li>on-info: #ffffff</li><li>info-on-surface: #004ac2</li><li>success-subtle: #dcf0d3</li><li>success-subtle-hover: #cbe9bf</li><li>success-subtle-active: #b7e1a5</li><li>success: #37b400</li><li>success-hover: #32a500</li><li>success-active: #2d9600</li><li>success-emphasis: #81d15f</li><li>success-on-subtle: #1c5a00</li><li>on-success: #ffffff</li><li>success-on-surface: #2d9600</li><li>warning-subtle: #fff4d3</li><li>warning-subtle-hover: #ffeebd</li><li>warning-subtle-active: #ffe79e</li><li>warning: #ffc000</li><li>warning-hover: #eaaf00</li><li>warning-active: #d49f00</li><li>warning-emphasis: #ffd760</li><li>warning-on-subtle: #5e4700</li><li>on-warning: #3d3d3d</li><li>warning-on-surface: #ffc000</li><li>error-subtle: #fcddda</li><li>error-subtle-hover: #fbc8c3</li><li>error-subtle-active: #f98b80</li><li>error: #f31700</li><li>error-hover: #df1600</li><li>error-active: #ca1400</li><li>error-emphasis: #f76f60</li><li>error-on-subtle: #7a0c00</li><li>on-error: #ffffff</li><li>error-on-surface: #ca1400</li><li>light-subtle: #fafafa</li><li>light-subtle-hover: #f5f5f5</li><li>light-subtle-active: #ebebeb</li><li>light: #ebebeb</li><li>light-hover: #e0e0e0</li><li>light-active: #d6d6d6</li><li>light-emphasis: #d6d6d6</li><li>light-on-subtle: #141414</li><li>on-light: #000000</li><li>light-on-surface: #e0e0e0</li><li>dark-subtle: #c2c2c2</li><li>dark-subtle-hover: #adadad</li><li>dark-subtle-active: #999999</li><li>dark: #3d3d3d</li><li>dark-hover: #292929</li><li>dark-active: #1f1f1f</li><li>dark-emphasis: #666666</li><li>dark-on-subtle: #1f1f1f</li><li>on-dark: #ffffff</li><li>dark-on-surface: #141414</li><li>inverse-subtle: #666666</li><li>inverse-subtle-hover: #525252</li><li>inverse-subtle-active: #3d3d3d</li><li>inverse: #3d3d3d</li><li>inverse-hover: #292929</li><li>inverse-active: #1f1f1f</li><li>inverse-emphasis: #999999</li><li>inverse-on-subtle: #ffffff</li><li>on-inverse: #ffffff</li><li>inverse-on-surface: #141414</li><li>series-a: #ff6358</li><li>series-a-bold: #bf4a42</li><li>series-a-bolder: #80322c</li><li>series-a-subtle: #ffb1ac</li><li>series-a-subtler: #ff8a82</li><li>series-b: #ffe162</li><li>series-b-bold: #bfa94a</li><li>series-b-bolder: #807131</li><li>series-b-subtle: #fff0b1</li><li>series-b-subtler: #ffe989</li><li>series-c: #4cd180</li><li>series-c-bold: #399d60</li><li>series-c-bolder: #266940</li><li>series-c-subtle: #a6e8c0</li><li>series-c-subtler: #79dda0</li><li>series-d: #4b5ffa</li><li>series-d-bold: #3847bc</li><li>series-d-bolder: #26307d</li><li>series-d-subtle: #a5affd</li><li>series-d-subtler: #7887fb</li><li>series-e: #ac58ff</li><li>series-e-bold: #8142bf</li><li>series-e-bolder: #562c80</li><li>series-e-subtle: #d6acff</li><li>series-e-subtler: #c182ff</li><li>series-f: #ff5892</li><li>series-f-bold: #bf426e</li><li>series-f-bolder: #802c49</li><li>series-f-subtle: #ffacc9</li><li>series-f-subtler: #ff82ae</li></ul></td>
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
    <td><ul><li>1: (0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>2: (0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>3: (0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>4: (0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>5: (0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>6: (0 12px 14px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>7: (0 14px 16px rgba(0, 0, 0, 0.24), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>8: (0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12))</li><li>9: (0 32px 34px rgba(0, 0, 0, 0.32), 0 4px 16px rgba(0, 0, 0, 0.12))</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Elevation map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Palette

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
    <td>$kendo-palette-gray</td>
    <td>Map</td>
    <td><code>$_default-palette-gray</code></td>
    <td><ul><li>1: #fafafa</li><li>2: #f5f5f5</li><li>3: #ebebeb</li><li>4: #e0e0e0</li><li>5: #d6d6d6</li><li>6: #c2c2c2</li><li>7: #adadad</li><li>8: #999999</li><li>9: #808080</li><li>10: #666666</li><li>11: #525252</li><li>12: #3d3d3d</li><li>13: #292929</li><li>14: #1f1f1f</li><li>15: #141414</li><li>white: #ffffff</li><li>black: #000000</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Gray Palette provides colors to the Base, Secondary, Light, Dark, and Inverse variable groups.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-coral</td>
    <td>Map</td>
    <td><code>$_default-palette-coral</code></td>
    <td><ul><li>1: #fff6f5</li><li>2: #ffeceb</li><li>3: #ffdedb</li><li>4: #ffc8c4</li><li>5: #ffb1ac</li><li>6: #ff9d97</li><li>7: #ff8a82</li><li>8: #ff766d</li><li>9: #ff6358</li><li>10: #ea5a51</li><li>11: #d45349</li><li>12: #bf4a42</li><li>13: #a33f38</li><li>14: #80322c</li><li>15: #5c201c</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Coral Palette provides colors to the Primary and Series A variable groups.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-sky-blue</td>
    <td>Map</td>
    <td><code>$_default-palette-sky-blue</code></td>
    <td><ul><li>1: #ebf8fe</li><li>2: #d8f1fd</li><li>3: #c5eafc</li><li>4: #a3dffb</li><li>5: #81d4fA</li><li>6: #61c9f9</li><li>7: #42bff7</li><li>8: #22b3f5</li><li>9: #03a9f4</li><li>10: #039ae0</li><li>11: #028ccb</li><li>12: #027fb7</li><li>13: #026999</li><li>14: #02557a</li><li>15: #023f5c</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Sky Blue Palette provides colors to the Tertiary variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-green</td>
    <td>Map</td>
    <td><code>$_default-palette-green</code></td>
    <td><ul><li>1: #edf8e9</li><li>2: #dcf0d3</li><li>3: #cbe9bf</li><li>4: #b7e1a5</li><li>5: #9bda80</li><li>6: #81d15f</li><li>7: #69c740</li><li>8: #4ebe1f</li><li>9: #37b400</li><li>10: #32a500</li><li>11: #2d9600</li><li>12: #298700</li><li>13: #227100</li><li>14: #1c5a00</li><li>15: #1c5a00</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Green Palette provides colors to the Success variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-blue</td>
    <td>Map</td>
    <td><code>$_default-palette-blue</code></td>
    <td><ul><li>1: #e9f0fd</li><li>2: #d2e2fb</li><li>3: #bdd4f8</li><li>4: #9ec0f6</li><li>5: #80acf4</li><li>6: #6098f2</li><li>7: #4082ef</li><li>8: #206eec</li><li>9: #0058e9</li><li>10: #0052d6</li><li>11: #004ac2</li><li>12: #0042af</li><li>13: #003892</li><li>14: #002c75</li><li>15: #002259</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Blue Palette provides colors to the Info variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-yellow</td>
    <td>Map</td>
    <td><code>$_default-palette-yellow</code></td>
    <td><ul><li>1: #fffae9</li><li>2: #fff4d3</li><li>3: #ffeebd</li><li>4: #ffe79e</li><li>5: #ffe080</li><li>6: #ffd760</li><li>7: #ffd040</li><li>8: #ffc720</li><li>9: #ffc000</li><li>10: #eaaf00</li><li>11: #d49f00</li><li>12: #bf9000</li><li>13: #a07800</li><li>14: #806000</li><li>15: #5e4700</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Yellow Palette provides colors to the Warning variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-red</td>
    <td>Map</td>
    <td><code>$_default-palette-red</code></td>
    <td><ul><li>1: #feeeed</li><li>2: #fcddda</li><li>3: #fbc8c3</li><li>4: #faaaa2</li><li>5: #f98b80</li><li>6: #f76f60</li><li>7: #f65140</li><li>8: #f43520</li><li>9: #f31700</li><li>10: #df1600</li><li>11: #ca1400</li><li>12: #b61100</li><li>13: #980f00</li><li>14: #7a0c00</li><li>15: #7a0c00</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Red Palette provides colors to the Error variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-lemon-yellow</td>
    <td>Map</td>
    <td><code>$_default-palette-lemon-yellow</code></td>
    <td><ul><li>1: #fffcf1</li><li>2: #fffae2</li><li>3: #fff7d4</li><li>4: #fff4c2</li><li>5: #fff0b1</li><li>6: #ffed9d</li><li>7: #ffe989</li><li>8: #ffe676</li><li>9: #ffe162</li><li>10: #ead05a</li><li>11: #d4bc52</li><li>12: #bfa94a</li><li>13: #a3913f</li><li>14: #807131</li><li>15: #5c5223</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Lemon Yellow Palette provides colors to the Series B variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-spring-green</td>
    <td>Map</td>
    <td><code>$_default-palette-spring-green</code></td>
    <td><ul><li>1: #effaf3</li><li>2: #e0f6e8</li><li>3: #d1f1dd</li><li>4: #c0edd1</li><li>5: #a6e8c0</li><li>6: #8fe2af</li><li>7: #79dda0</li><li>8: #62d78f</li><li>9: #4cd180</li><li>10: #46c074</li><li>11: #3fae6a</li><li>12: #399d60</li><li>13: #2f834f</li><li>14: #266940</li><li>15: #1c4f30</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Spring Green Palette provides colors to the Series C variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-royal-blue</td>
    <td>Map</td>
    <td><code>$_default-palette-royal-blue</code></td>
    <td><ul><li>1: #f0f2ff</li><li>2: #e1e4fe</li><li>3: #d2d7fe</li><li>4: #bbc3fd</li><li>5: #a5affd</li><li>6: #8e9bfc</li><li>7: #7887fb</li><li>8: #6173fb</li><li>9: #4b5ffa</li><li>10: #4558e5</li><li>11: #3f50d1</li><li>12: #3847bc</li><li>13: #2f3c9d</li><li>14: #26307d</li><li>15: #1c245e</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Royal Blue Palette provides colors to the Series D variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-lavender-purple</td>
    <td>Map</td>
    <td><code>$_default-palette-lavender-purple</code></td>
    <td><ul><li>1: #f7f0ff</li><li>2: #f0e0ff</li><li>3: #e8d1ff</li><li>4: #dfbfff</li><li>5: #d6acff</li><li>6: #cc97ff</li><li>7: #c182ff</li><li>8: #b76dff</li><li>9: #ac58ff</li><li>10: #9e51ea</li><li>11: #8f49d4</li><li>12: #8142bf</li><li>13: #6b37a0</li><li>14: #562c80</li><li>15: #3f205e</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Lavender Purple Palette provides colors to the Series E variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-flamingo-pink</td>
    <td>Map</td>
    <td><code>$_default-palette-flamingo-pink</code></td>
    <td><ul><li>1: #fff0f5</li><li>2: #ffe1eb</li><li>3: #ffd1e1</li><li>4: #ffbfd6</li><li>5: #ffacc9</li><li>6: #ff97bb</li><li>7: #ff82ae</li><li>8: #ff6da0</li><li>9: #ff5892</li><li>10: #ea5186</li><li>11: #d4497a</li><li>12: #bf426e</li><li>13: #a0375c</li><li>14: #802c49</li><li>15: #5e2036</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Flamingo Pink Palette provides colors to the Series F variable group.</div></div>
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
    <td>$kendo-spacing</td>
    <td>Map</td>
    <td><code>$default-spacing</code></td>
    <td><ul><li>0: 0px</li><li>1: 0.25rem</li><li>2: 0.5rem</li><li>3: 0.75rem</li><li>4: 1rem</li><li>5: 1.25rem</li><li>6: 1.5rem</li><li>7: 1.75rem</li><li>8: 2rem</li><li>9: 2.25rem</li><li>10: 2.5rem</li><li>11: 2.75rem</li><li>12: 3rem</li><li>13: 3.25rem</li><li>14: 3.5rem</li><li>15: 3.75rem</li><li>16: 4rem</li><li>17: 4.25rem</li><li>18: 4.5rem</li><li>19: 4.75rem</li><li>20: 5rem</li><li>21: 5.25rem</li><li>22: 5.5rem</li><li>23: 5.75rem</li><li>24: 6rem</li><li>25: 7rem</li><li>26: 8rem</li><li>27: 9rem</li><li>28: 10rem</li><li>29: 11rem</li><li>30: 12rem</li><li>1px: 1px</li><li>0.5: 0.125rem</li><li>1.5: 0.375rem</li><li>2.5: 0.625rem</li><li>3.5: 0.875rem</li><li>4.5: 1.125rem</li><li>5.5: 1.375rem</li><li>6.5: 1.625rem</li><li>7.5: 1.875rem</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Spacing map.</div></div>
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
