---
title: Chip
category: components
slug: chip
position: 3
---

# Chip

The Chip allows users to enter information, make selections, filter content, or trigger actions.

## Rendering

```html
<div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-base">
    <span class="k-chip-content">
        <span class="k-chip-label">Chip Text</span>
    </span>
</div>
```

## Sizes
The Chip has predefined sizes - small, medium or large.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-chip k-chip-sm k-rounded-pill k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-lg k-rounded-pill k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">Chip Text</span>
        </span>
    </div>
</div>
```

## Fill Modes
The Chip supports two appearance fill styles - `solid` and `outline`.

### Solid

```html
<div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-base">
    <span class="k-chip-icon k-icon k-i-map-marker-target"></span>
    <span class="k-chip-content">
        <span class="k-chip-label">Chip Icon Text</span>
    </span>
    <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
</div>
```

### Outline

```html
<div class="k-chip k-chip-md k-rounded-pill k-chip-outline k-chip-outline-base">
    <span class="k-chip-icon k-icon k-i-map-marker-target"></span>
    <span class="k-chip-content">
        <span class="k-chip-label">Chip Icon Text</span>
    </span>
    <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
</div>
```

## Theme Colors
The Chip includes several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-error">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-warning">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-info">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-success">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
</div>
```

## Rounding

The Chip can have various rounded states depending on the border radius customizations.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-chip k-chip-md k-rounded-pill k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-lg k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-md k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
    <div class="k-chip k-chip-md k-rounded-sm k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-label">None</span>
        </span>
        <span class="k-chip-remove-icon k-chip-icon k-icon k-i-x-circle"></span>
    </div>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/chip/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/chip/index.md" />
