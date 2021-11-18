---
title: Split button
category: components
slug: split-button
position: 3
---

# SplitButton

SplitButtons allows the user to choose a predefined action from a popup menu list.

SplitButtons may render the following content:

### Text button

```html
<div class="k-split-button k-button-group">
    <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-button-text">Text</span>
    </button>
    <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-icon k-i-arrow-s"></span>
    </button>
</div>
```

### Text split button with icon

Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize icons more easily than plain text. SplitButtons can have icons either before or after the text.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-icon k-icon k-i-folder"></span>
            <span class="k-button-text">Text</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text</span>
            <span class="k-button-icon k-icon k-i-folder"></span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
</div>
```

### Icon SplitButton

Icon buttons are commonly found in app bars and toolbars.

```html
<div class="k-split-button k-button-group">
    <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-button-icon k-icon k-i-folder"></span>
    </button>
    <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-icon k-i-arrow-s"></span>
    </button>
</div>
```

### SplitButton Arrow

SplitButton can either have a default arrow or a custom one.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>

    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-chevron-down"></span>
        </button>
    </div>
</div>
```

## Fill Modes

### Solid SplitButtons

They contain actions that are primary to the application.

```html
<div class="k-split-button k-button-group">
    <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-button-text">Text</span>
    </button>
    <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-icon k-i-arrow-s"></span>
    </button>
</div>
```

### Outline SplitButtons
They contain actions that are important but aren't the primary action in the application.

```html
<div class="k-split-button k-button-group">
    <button class="k-button k-button-outline k-button-md k-rounded-md k-button-outline-base">
        <span class="k-button-text">Text</span>
    </button>
    <button class="k-split-button-arrow k-button k-button-outline k-button-md k-rounded-md k-button-outline-base">
        <span class="k-icon k-i-arrow-s"></span>
    </button>
</div>
```

### Flat SplitButtons

They are typically used for less-pronounced actions, including those located: in dialogs, in cards.

```html
<div class="k-split-button k-button-group">
    <button class="k-button k-button-flat k-button-md k-rounded-md k-button-flat-base">
        <span class="k-button-text">Text</span>
    </button>
    <button class="k-split-button-arrow k-button k-button-flat k-button-md k-rounded-md k-button-flat-base">
        <span class="k-icon k-i-arrow-s"></span>
    </button>
</div>
```

## Theme Colors

SplitButtons include several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Base</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-primary">
            <span class="k-button-text">Primary</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-primary">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-secondary">
            <span class="k-button-text">Secondary</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-secondary">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-tertiary">
            <span class="k-button-text">Tertiary</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-tertiary">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-info">
            <span class="k-button-text">Info</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-info">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-success">
            <span class="k-button-text">Success</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-success">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-warning">
            <span class="k-button-text">Warning</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-warning">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-error">
            <span class="k-button-text">Error</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-error">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-dark">
            <span class="k-button-text">Dark</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-dark">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-light">
            <span class="k-button-text">Light</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-light">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-inverse">
            <span class="k-button-text">Inverse</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-inverse">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
</div>
```

## Sizes

SplitButtons can have various sizes. Use the smaller ones to create a compact theme or the larger ones on mobile devices.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-sm k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-sm k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-lg k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-lg k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
</div>
```

## States

SplitButtons have several states by default.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Normal</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-hover">
            <span class="k-button-text">Hover</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-focus">
            <span class="k-button-text">Focus Button</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Focus Arrow</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-focus">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-active">
            <span class="k-button-text">Active</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
    <div class="k-split-button k-button-group">
        <button class="k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-disabled">
            <span class="k-button-text">Disabled</span>
        </button>
        <button class="k-split-button-arrow k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-disabled">
            <span class="k-icon k-i-arrow-s"></span>
        </button>
    </div>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/button/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/button/index.md" />

