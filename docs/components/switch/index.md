---
title: Switch
category: components
slug: switch
position: 3
---

# Switch

The Switch enables the user to toggle between checked and unchecked states.

## Rendering

### Unchecked Switch

```html
<span class="k-switch k-switch-off k-switch-md k-rounded-pill">
    <span class="k-switch-track k-rounded-pill">
        <span class="k-switch-label-on">On</span>
        <span class="k-switch-label-off">Off</span>
    </span>
    <span class="k-switch-thumb-wrap">
        <span class="k-switch-thumb k-rounded-pill"></span>
    </span>
</span>
```

### Checked Switch

```html
<span class="k-switch k-switch-on k-switch-md k-rounded-pill">
    <span class="k-switch-track k-rounded-pill">
        <span class="k-switch-label-on">On</span>
        <span class="k-switch-label-off">Off</span>
    </span>
    <span class="k-switch-thumb-wrap">
        <span class="k-switch-thumb k-rounded-pill"></span>
    </span>
</span>
```


## Sizes
The Switch can have various sizes. You can choose between `small`, `medium` and `large`.

```html
<div class="k-d-flex k-gap-2">
    <span class="k-switch k-switch-on k-switch-sm k-rounded-pill">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
    <span class="k-switch k-switch-on k-switch-md k-rounded-pill">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
    <span class="k-switch k-switch-on k-switch-lg k-rounded-pill">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
</div>
```


## Shapes
The Switch utilizes a rounding utility class that allows you to achieve a different shape for both the switch thumb and the switch track.

```html
<div class="k-d-flex k-gap-2">
    <span class="k-switch k-switch-on k-switch-md k-rounded-pill">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
    <span class="k-switch k-switch-on k-switch-md k-rounded-lg">
        <span class="k-switch-track k-rounded-lg">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-lg"></span>
        </span>
    </span>
    <span class="k-switch k-switch-on k-switch-md">
        <span class="k-switch-track">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb"></span>
        </span>
    </span>
</div>
```


## States
Apart from the checked and unchecked states, the Switch has the following native states - `hover`, `focus` and `disabled`.

```html
<div class="k-d-flex k-gap-2">
    <span class="k-switch k-switch-on k-switch-md k-rounded-pill k-hover">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
    <span class="k-switch k-switch-on k-switch-md k-rounded-pill k-focus">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
    <span class="k-switch k-switch-on k-switch-md k-rounded-pill k-disabled">
        <span class="k-switch-track k-rounded-pill">
            <span class="k-switch-label-on">On</span>
            <span class="k-switch-label-off">Off</span>
        </span>
        <span class="k-switch-thumb-wrap">
            <span class="k-switch-thumb k-rounded-pill"></span>
        </span>
    </span>
</div>
```


## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/switch/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/switch/index.md" />
