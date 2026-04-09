# Motion

The motion system defines animation timing, easing functions, and transition presets for consistent component animations.

## Customization

### CSS Custom Properties

```css
:root {
  --kendo-duration-rapid: 250ms;
  --kendo-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Sass Map Override

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-durations: (
    rapid: 250ms,
    swift: 300ms
  ),
  $kendo-easings: (
    standard: cubic-bezier(0.4, 0, 0.2, 1)
  )
);
```

## Available Tokens

### Durations

| Name | Default Value | CSS Variable |
|---|---|---|
| `instant` | `0ms` | `--kendo-duration-instant` |
| `immediate` | `50ms` | `--kendo-duration-immediate` |
| `brief` | `100ms` | `--kendo-duration-brief` |
| `quick` | `150ms` | `--kendo-duration-quick` |
| `rapid` | `200ms` | `--kendo-duration-rapid` |
| `swift` | `250ms` | `--kendo-duration-swift` |
| `speedy` | `300ms` | `--kendo-duration-speedy` |
| `brisk` | `350ms` | `--kendo-duration-brisk` |
| `prompt` | `400ms` | `--kendo-duration-prompt` |
| `timely` | `450ms` | `--kendo-duration-timely` |
| `moderate` | `500ms` | `--kendo-duration-moderate` |
| `measured` | `550ms` | `--kendo-duration-measured` |
| `steady` | `600ms` | `--kendo-duration-steady` |
| `leisurely` | `700ms` | `--kendo-duration-leisurely` |
| `slow` | `800ms` | `--kendo-duration-slow` |
| `languid` | `900ms` | `--kendo-duration-languid` |
| `sluggish` | `1000ms` | `--kendo-duration-sluggish` |

Durations respect `--kendo-duration-global` multiplier, which can be set to `0` for `prefers-reduced-motion`.

### Easings

| Name | CSS Variable |
|---|---|
| `linear` | `--kendo-easing-linear` |
| `accelerate` | `--kendo-easing-accelerate` |
| `decelerate` | `--kendo-easing-decelerate` |
| `standard` | `--kendo-easing-standard` |
| `sharp` | `--kendo-easing-sharp` |
| `bounce` | `--kendo-easing-bounce` |
| `elastic` | `--kendo-easing-elastic` |
| `stretchy` | `--kendo-easing-stretchy` |

### Transition Presets

Composite tokens combining duration + easing:

`instant`, `rapid`, `snappy`, `energetic`, `bouncy`, `subtle`, `gentle`, `enter`, `exit`, `settle`, `scale-out`, `scale-in`, `fade-out`, `fade-in`, `slide-out`, `slide-in`, `emphasis`, `collapse`, `expand`, `shrink`, `grow`, `pulse`, `smooth`, `flip`, `fluid`, `deliberate`

CSS: `--kendo-transition-{name}`

## Usage Example

```css
.my-element {
  transition: opacity var(--kendo-duration-rapid) var(--kendo-easing-standard);
}
```

## Further Reading

- [Motion](https://www.telerik.com/design-system/docs/foundation/motion)
- [Motion Usage](https://www.telerik.com/design-system/docs/foundation/motion/usage)
