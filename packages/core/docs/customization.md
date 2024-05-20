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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-contrast.import.scss#L298-L304
@function k-color-luminance($color) {
    $red: k-list-nth( $_linear-channel-values, k-color-red( $color ) + 1 );
    $green: k-list-nth( $_linear-channel-values, k-color-green( $color ) + 1 );
    $blue: k-list-nth( $_linear-channel-values, k-color-blue( $color ) + 1 );

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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-contrast.import.scss#L315-L320
@function k-color-contrast-ratio($background, $foreground) {
    $backLum: k-color-luminance( $background ) + .05;
    $foreLum: k-color-luminance( $foreground ) + .05;

    @return k-math-div( k-math-max( $backLum, $foreLum ), k-math-min( $backLum, $foreLum ) );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-contrast.import.scss#L327-L329
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-contrast.import.scss#L336-L338
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-contrast.import.scss#L350-L369
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L37-L39
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L50-L52
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L60-L68
@function k-try-shade($color, $level) {
    $_dark-theme: if( k-meta-variable-exists( kendo-is-dark-theme ), $kendo-is-dark-theme, false );

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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L76-L84
@function k-try-tint($color, $level) {
    $_dark-theme: if( k-meta-variable-exists( kendo-is-dark-theme ), $kendo-is-dark-theme, false );

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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L92-L99
@function k-try-darken($color, $level) {
    $_dark-theme: if( k-meta-variable-exists( kendo-is-dark-theme ), $kendo-is-dark-theme, false );

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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L107-L114
@function k-try-lighten($color, $level) {
    $_dark-theme: if( k-meta-variable-exists( kendo-is-dark-theme ), $kendo-is-dark-theme, false );

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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-manipulation.import.scss#L125-L129
@function k-rgba-to-mix($color, $bg) {
    $percent: k-color-alpha( $color ) * 100%;

    @return k-color-mix( rgba( $color, 1 ), $bg, $percent );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-system.import.scss#L8-L122
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
            #{$name}-bold: k-color-mix(black, $color, 25%),
            #{$name}-bolder: k-color-mix(black, $color, 50%),
            #{$name}-subtle: k-color-mix(white, $color, 25%),
            #{$name}-subtler: k-color-mix(white, $color, 50%),
        );

        $result: k-map-merge($result, $_variations);
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

            $result: k-map-merge($result, $_variations);
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

            $result: k-map-merge($result, $_variations);
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

            $result: k-map-merge($result, $_variations);
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

            $result: k-map-merge($result, $_variations);
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

            $result: k-map-merge($result, $_variations);
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color-system.import.scss#L130-L138
@function k-color($key) {
    $_color: k-map-get($kendo-colors, $key);

    @if ($_color) {
        @return var(--kendo-color-#{$key}, $_color);
    } @else {
        @error "Color Variable \`#{$key}\` does not exists in the color collection.";
    }
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L8-L10
@function k-color-alpha($color) {
    @return alpha( $color );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L18-L20
@function k-color-red($color) {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L28-L30
@function k-color-green($color) {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L38-L40
@function k-color-blue($color) {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L48-L50
@function k-color-hue($color) {
    @return hue( $color );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L58-L60
@function k-color-saturation($color) {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L68-L70
@function k-color-lightness($color) {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L80-L82
@function k-color-mix($color1, $color2, $weight) {
    @return mix( $color1, $color2, $weight );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L91-L93
@function k-color-darken($color, $amount) {
    @return darken( $color, $amount );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L102-L104
@function k-color-lighten($color, $amount) {
    @return lighten( $color, $amount );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L113-L115
@function k-color-adjust-hue($color, $degrees) {
    @return adjust-hue( $color, $degrees );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L124-L126
@function k-color-saturate($color, $amount) {
    @return saturate( $color, $amount );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L135-L137
@function k-color-desaturate($color, $amount) {
    @return desaturate( $color, $amount );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L145-L147
@function k-color-grayscale($color) {
    @return grayscale( $color );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L156-L158
@function k-color-complement($color) {
    @return complement( $color );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_color.import.scss#L166-L168
@function k-color-invert($color) {
    @return invert( $color );
}
```

### `k-escape-svg`

Escapes SVG characters in a string


#### Syntax

```scss
k-escape-svg($string) // => String
```

#### Parameters


`<String> $string`
: The string to escape




#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_escape-string.import.scss#L15-L28
@function k-escape-svg($string) {
    @if k-string-index($string, "data:image/svg+xml") {
        @each $char, $encoded in $_kendo-svg-escaped-characters {
            // Do not escape the url brackets
            @if k-string-index($string, "url(") == 1 {
                $string: url("#{k-string-replace(k-string-slice($string, 6, -3), $char, $encoded)}");
            } @else {
                $string: k-string-replace($string, $char, $encoded);
            }
        }
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_escape-string.import.scss#L40-L48
@function k-escape-class-name($text) {
    $_text: $text;

    @each $char, $rep in $_kendo-escape-class-name {
        $_text: k-string-replace( $_text, k-string-unquote( $char ), k-string-unquote( $rep ) );
    }

    @return $_text;
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L9-L11
@function k-list-append($list, $val, $separator) {
    @return append( $list, $val, $separator );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L21-L23
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L32-L34
@function k-list-index($list, $value) {
    @return index( $list, $value );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L43-L45
@function k-list-is-bracketed($list) {
    @return is-bracketed( $list );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L57-L59
@function k-list-join($list1, $list2, $separator, $bracketed) {
    @return join( $list1, $list2, $separator, $bracketed );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L67-L69
@function k-list-length($list) {
    @return length( $list );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L78-L80
@function k-list-nth($list, $n) {
    @return nth( $list, $n );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L88-L103
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L111-L113
@function k-list-separator($list) {
    @return list-separator( $list );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L123-L125
@function k-list-set-nth($list, $n, $val) {
    @return set-nth( $list, $n, $value );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_list.import.scss#L134-L136
@function k-list-zip($list1, $list2) {
    @return zip( $lists... );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L7-L12
@function k-map-get($map, $key) {
    @each $key in $keys {
        $map: map-get( $map, $key ); // stylelint-disable-line
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L22-L24
@function k-map-has-key($map, $key) {
    @return map-has-key( $map, $key );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L32-L34
@function k-map-keys($map) {
    @return map-keys( $map );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L43-L48
@function k-map-merge($map, $args) {
    @each $arg in $args {
        $map: map-merge( $map, $arg ); // stylelint-disable-line
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L56-L78
@function k-map-deep-merge($maps) {
    $merged: ();

    @each $map in $maps {
      @each $key, $val in $map {
        @if (k-meta-type-of($val) == 'map') {
          $current: k-map-get($merged, $key);
          @if (k-meta-type-of($current) == 'map') {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L87-L89
@function k-map-remove($map, $keys) {
    @return map-remove( $map, $keys... );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L99-L101
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L109-L111
@function k-map-values($map) {
    @return map-values( $map );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_map.import.scss#L119-L135
@function k-map-negate($map) {
    $_map-neg: ();

    @if( k-meta-type-of($map) != map ) {
        @error "expected type of #{$map} is map, was #{k-meta-type-of($map)}";
    };
    @each $key, $value in $map {
        $_key-neg: "-" + $key;

        @if( k-meta-type-of($value) == number and $value != 0) {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L7-L9
@function k-math-abs($number) {
    @return abs( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L17-L19
@function k-math-ceil($number) {
    @return ceil( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L27-L29
@function k-math-floor($number) {
    @return floor( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L41-L43
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L53-L55
@function k-math-compatible($a, $b) {
    @return comparable( $a, $b );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L65-L67
@function k-math-div($a, $b) {
    @return ( $a / $b );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L76-L78
@function k-math-is-unitless($number) {
    @return unitless( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L88-L90
@function k-math-max($a, $b) {
    @return max( $a, $b );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L100-L102
@function k-math-min($a, $b) {
    @return min( $a, $b );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L112-L114
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L124-L126
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L134-L136
@function k-math-percentage($number) {
    @return percentage( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L145-L164
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L172-L178
@function k-math-random($limit) {
    @if ( $limit == null ) { // stylelint-disable-line
        @return random();
    }

    @return random( $limit );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L188-L197
@function k-math-round($number, $precision) {
    @if ( $precision == 0 ) {
        @return round( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L205-L207
@function k-math-unit($number) {
    @return unit( $number );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_math.import.scss#L215-L221
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L11-L13
@function k-meta-call($function, $args) {
    @return call( $function, $args... );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L22-L28
@function k-meta-function-exists($name) {
    @if $name == "" {
        @return false;
    }

    @return function-exists( $name );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L39-L41
@function k-meta-get-function($name, $css, $module) {
    @return get-function( $name, $args... );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L50-L52
@function k-meta-inspect($value) {
    @return inspect( $value );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L61-L63
@function k-meta-keywords($args) {
    @return keywords( $args );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L72-L74
@function k-meta-type-of($value) {
    @return type-of( $value );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L83-L85
@function k-meta-variable-exists($name) {
    @return variable-exists( $name );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L96-L98
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L109-L111
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L122-L124
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L135-L137
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L148-L150
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L161-L163
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L176-L178
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L189-L191
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L202-L204
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L216-L218
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L229-L231
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_meta.import.scss#L241-L243
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L17-L19
@function k-string-index($string, $substring) {
    @return str-index( $string, $substring );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L29-L31
@function k-string-insert($string, $insert, $index) {
    @return str-insert( $string, $insert, $index );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L39-L41
@function k-string-length($string) {
    @return str-length( $string );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L49-L51
@function k-string-quote($string) {
    @return quote( $string );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L64-L76
@function k-string-replace($string, $search, $replace) {
    @if k-meta-type-of( $string ) == number {
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L86-L88
@function k-string-slice($string, $start-at, $end-at) {
    @return str-slice( $string, $start-at, $end-at );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L96-L98
@function k-string-to-lower-case($string) {
    @return to-lower-case( $string );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L106-L108
@function k-string-to-upper-case($string) {
    @return to-upper-case( $string );
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L115-L117
@function k-string-unique-id() {
    @return unique-id();
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
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/functions/_string.import.scss#L125-L127
@function k-string-unquote($string) {
    @return unquote( $string );
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
    <td>$wcag-min-contrast-ratio</td>
    <td>Number</td>
    <td><code>7</code></td>
    <td><code>7</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The contrast ratio to reach against white, to determine if color changes from "light" to "dark".<br />Acceptable values for WCAG 2.0 are 3, 4.5 and 7.</div></div>
    </td>
</tr>
<tr>
    <td>$wcag-dark</td>
    <td>Color</td>
    <td><code>black</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default dark color for WCAG 2.0.</div></div>
    </td>
</tr>
<tr>
    <td>$wcag-light</td>
    <td>Color</td>
    <td><code>white</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default light color for WCAG 2.0.</div></div>
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
    <td><code>rgba(0, 0, 0, 0), black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-white</td>
    <td>Gradient</td>
    <td><code>rgba(white, 0), white</code></td>
    <td><code>rgba(255, 255, 255, 0), white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-black-to-transparent</td>
    <td>Gradient</td>
    <td><code>black, rgba(black, 0)</code></td>
    <td><code>black, rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from black to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-white-to-transparent</td>
    <td>Gradient</td>
    <td><code>white, rgba(white, 0)</code></td>
    <td><code>white, rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from white to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-rainbow</td>
    <td>Gradient</td>
    <td><span class="color-preview" style="background-color: #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000"></span><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
    <td><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that cycles through the colors of the rainbow.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><code>(app-surface: null, on-app-surface: null, subtle: null, surface: null, surface-alt: null, border: null, border-alt: null, base-subtle: null, base-subtle-hover: null, base-subtle-active: null, base: null, base-hover: null, base-active: null, base-emphasis: null, base-on-subtle: null, on-base: null, base-on-surface: null, primary-subtle: null, primary-subtle-hover: null, primary-subtle-active: null, primary: null, primary-hover: null, primary-active: null, primary-emphasis: null, primary-on-subtle: null, on-primary: null, primary-on-surface: null, secondary-subtle: null, secondary-subtle-hover: null, secondary-subtle-active: null, secondary: null, secondary-hover: null, secondary-active: null, secondary-emphasis: null, secondary-on-subtle: null, on-secondary: null, secondary-on-surface: null, tertiary-subtle: null, tertiary-subtle-hover: null, tertiary-subtle-active: null, tertiary: null, tertiary-hover: null, tertiary-active: null, tertiary-emphasis: null, tertiary-on-subtle: null, on-tertiary: null, tertiary-on-surface: null, info-subtle: null, info-subtle-hover: null, info-subtle-active: null, info: null, info-hover: null, info-active: null, info-emphasis: null, info-on-subtle: null, on-info: null, info-on-surface: null, success-subtle: null, success-subtle-hover: null, success-subtle-active: null, success: null, success-hover: null, success-active: null, success-emphasis: null, success-on-subtle: null, on-success: null, success-on-surface: null, warning-subtle: null, warning-subtle-hover: null, warning-subtle-active: null, warning: null, warning-hover: null, warning-active: null, warning-emphasis: null, warning-on-subtle: null, on-warning: null, warning-on-surface: null, error-subtle: null, error-subtle-hover: null, error-subtle-active: null, error: null, error-hover: null, error-active: null, error-emphasis: null, error-on-subtle: null, on-error: null, error-on-surface: null, light-subtle: null, light-subtle-hover: null, light-subtle-active: null, light: null, light-hover: null, light-active: null, light-emphasis: null, light-on-subtle: null, on-light: null, light-on-surface: null, dark-subtle: null, dark-subtle-hover: null, dark-subtle-active: null, dark: null, dark-hover: null, dark-active: null, dark-emphasis: null, dark-on-subtle: null, on-dark: null, dark-on-surface: null, inverse-subtle: null, inverse-subtle-hover: null, inverse-subtle-active: null, inverse: null, inverse-hover: null, inverse-active: null, inverse-emphasis: null, inverse-on-subtle: null, on-inverse: null, inverse-on-surface: null, series-a: null, series-a-bold: null, series-a-bolder: null, series-a-subtle: null, series-a-subtler: null, series-b: null, series-b-bold: null, series-b-bolder: null, series-b-subtle: null, series-b-subtler: null, series-c: null, series-c-bold: null, series-c-bolder: null, series-c-subtle: null, series-c-subtler: null, series-d: null, series-d-bold: null, series-d-bolder: null, series-d-subtle: null, series-d-subtler: null, series-e: null, series-e-bold: null, series-e-bolder: null, series-e-subtle: null, series-e-subtler: null, series-f: null, series-f-bold: null, series-f-bolder: null, series-f-subtle: null, series-f-subtler: null)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
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
    <td><code>$_default-elevation</code></td>
    <td><code>(1: (0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12)), 2: (0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12)), 3: (0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12)), 4: (0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12)), 5: (0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12)), 6: (0 12px 14px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.12)), 7: (0 14px 16px rgba(0, 0, 0, 0.24), 0 4px 16px rgba(0, 0, 0, 0.12)), 8: (0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12)), 9: (0 32px 34px rgba(0, 0, 0, 0.32), 0 4px 16px rgba(0, 0, 0, 0.12)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Elevation map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Radii

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
    <td><code>k-map-get($kendo-spacing, 0)</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The none border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xs</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 1px)</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-sm</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 0.5)</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 1)</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 1.5)</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xl</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 2)</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxl</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 3)</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxxl</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 4)</code></td>
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
    <td><code>k-map-merge($_default-border-radii, $kendo-border-radii)</code></td>
    <td><code>(none: 0px, xs: 1px, sm: 0.125rem, md: 0.25rem, lg: 0.375rem, xl: 0.5rem, xxl: 0.75rem, xxxl: 1rem, full: 9999px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global radii Map.</div></div>
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
    <td><code>$_default-spacing</code></td>
    <td><code>(0: 0px, 1px: 1px, 0.5: 0.125rem, 1: 0.25rem, 1.5: 0.375rem, 2: 0.5rem, 2.5: 0.625rem, 3: 0.75rem, 3.5: 0.875rem, 4: 1rem, 4.5: 1.125rem, 5: 1.25rem, 5.5: 1.375rem, 6: 1.5rem, 6.5: 1.625rem, 7: 1.75rem, 7.5: 1.875rem, 8: 2rem, 9: 2.25rem, 10: 2.5rem, 11: 2.75rem, 12: 3rem, 13: 3.25rem, 14: 3.5rem, 15: 3.75rem, 16: 4rem, 17: 4.25rem, 18: 4.5rem, 19: 4.75rem, 20: 5rem, 21: 5.25rem, 22: 5.5rem, 23: 5.75rem, 24: 6rem, 25: 7rem, 26: 8rem, 27: 9rem, 28: 10rem, 29: 11rem, 30: 12rem)</code></td>
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
    <td><code>k-math-div( 20, 14 )</code></td>
    <td><code>1.4285714286</code></td>
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
    <td><code>1.4285714286</code></td>
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
    <td><code>Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-serif</td>
    <td>List</td>
    <td><code>"Times New Roman", Georgia, Garamond, Palatino, Baskerville</code></td>
    <td><code>"Times New Roman", Georgia, Garamond, Palatino, Baskerville</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans-serif</td>
    <td>List</td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans-serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-monospace</td>
    <td>List</td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
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
    <td><code>k-map-merge( $_default-font-sizes, $kendo-font-sizes )</code></td>
    <td><code>(xxs: 0.5rem, xs: 0.625rem, sm: 0.75rem, md: 0.875rem, lg: 1rem, xl: 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font sizes map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-heights</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-line-heights, $kendo-line-heights )</code></td>
    <td><code>(xs: 1, sm: 1.25, md: 1.4285714286, lg: 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weights</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-font-weights, $kendo-font-weights )</code></td>
    <td><code>(thin: 100, extra-light: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacings</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-letter-spacings, $kendo-letter-spacings )</code></td>
    <td><code>(tightest: -0.15px, tighter: -0.1px, tight: -0.5px, normal: 0px, wide: 0.5px, wider: 0.1px, widest: 0.15px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacings map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-families</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-font-families, $kendo-font-families )</code></td>
    <td><code>(sans: (Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans), serif: ("Times New Roman", Georgia, Garamond, Palatino, Baskerville), sans-serif: (system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"), monospace: (SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font families map</div></div>
    </td>
</tr>
</tbody>
</table>





## Mixins



### `exports`

Outputs a module once, no matter how many times it is included.


#### Syntax

```scss
@include exports($name);
```
#### Parameters


`<String> $name`
: The name of the exported module.


#### Source

```scss
// Location https://github.com/telerik/kendo-themes/blob/develop/packages/core/scss/mixins/_import-once.scss#L9-L14
@mixin exports($name) {
    @if (k-list-index( $_kendo-imported-modules, $name ) == null) { // stylelint-disable-line
        $_kendo-imported-modules: k-list-append( $_kendo-imported-modules, $name ) !global;
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
