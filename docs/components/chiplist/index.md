---
title: Chip List
category: components
slug: chip-list
position: 3
---

# Chip List

The ChipList is a container of two or more individual Chip components and allows users to maintain a set of selected chips.

## Rendering

```html
<div class="k-chip-list k-chip-list-md">
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
</div>
```

## Selection
The ChipList provides options for setting its selection mode

* none(default)
* single
* multiple

### No selection

```html
<div class="k-chip-list k-chip-list-md">
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
</div>
```

### Single selection

```html
<div class="k-chip-list k-chip-list-md k-selection-single">
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base k-selected">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
</div>
```

### Multiple selection

```html
<div class="k-chip-list k-chip-list-md k-selection-multiple">
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base k-selected">
        <span class="k-selected-icon k-icon k-i-check"></span>
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base k-selected">
        <span class="k-selected-icon k-icon k-i-check"></span>
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
</div>
```

## Sizes
The ChipList has predefined sizes - small, medium or large. Those sizes control the spacing size between the chips.

### Small

```html
<div class="k-chip-list k-chip-list-sm k-selection-single">
    <div class="k-chip k-chip-sm k-rounded-full k-chip-solid k-chip-solid-base k-selected">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-sm k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
    <div class="k-chip k-chip-sm k-rounded-full k-chip-solid k-chip-solid-base">
        <span class="k-chip-content">
            <span class="k-chip-text">Chip Text</span>
        </span>
    </div>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/chip/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/chip/index.md" />
