---
title: DropDownButton
category: components
slug: dropdownbutton
position: 3
---

# DropDownButton

DropDownButton provide a clickable UI functionality. It displays a popup menu list with action items and provides options for enabling or disabling its content, displaying icons and more.

DropDownButton may render the following content:

### Text DropDownButton

```html
<div class="k-dropdown-button">
    <button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        <span class="k-button-text">Text</span>
    </button>
</div>
```
### Text DropDownButton with icon

Sometimes you might want to have icons for certain dropdown buttons to enhance the UX of the application as we recognize icons more easily than plain text. DropDownButton can have icons either before or after the text.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-icon k-icon k-i-folder"></span>
            <span class="k-button-text">Text button</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text button</span></button>
            <span class="k-button-icon k-icon k-i-folder"></span>
        </button>
    </div>
</div>
```

### Icon DropDownButton
Icon dropdown buttons are commonly found in app bars and toolbars.

```html
<div class="k-dropdown-button">
    <button
        type="button"
        class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
        <span class="k-button-icon k-icon k-i-cart"></span>
    </button>
</div>
```

### DropDownButton Arrow
In some cases, you might need a dropdown arrow inside the button. DropDownButton can either have a default arrow or a custom one.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
            <span class="k-button-text">Default arrow
                <span class="k-icon k-i-arrow-s"></span>
            </span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
            <span class="k-button-text">Custom arrow
                <span class="k-icon k-i-chevron-down"></span>
            </span>
        </button>
    </div>
</div>
```

## Fill Modes

### Solid DropDownButtons
They contain actions that are primary to the application.

```html
<div class="k-dropdown-button">
    <button
        type="button"
        class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
        <span class="k-button-text">DropDownButton</span></button>
    </button>
</div>
```

### Outline DropDownButtons
They contain actions that are important but aren't the primary action in the application.

```html
<div class="k-dropdown-button">
    <button
        type="button"
        class="k-button k-button-outline k-button-md k-button-rectangle k-rounded-md k-button-outline-base">
        <span class="k-button-text">DropDownButton</span></button>
    </button>
</div>
```

### Flat DropDownButtons
They are typically used for less-pronounced actions, including those located: in dialogs, in cards.

```html
<div class="k-dropdown-button">
    <button
        type="button"
        class="k-button k-button-flat k-button-md k-button-rectangle k-rounded-md k-button-flat-base">
        <span class="k-button-text">DropDownButton</span></button>
    </button>
</div>
```

## Theme Colors
DropDownButtons include several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-primary">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-secondary">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-tertiary">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-info">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-success">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-warning">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-error">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-dark">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-light">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-inverse">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
</div>
```

## Sizes
DropDownButtons can have various sizes. Use the smaller ones to create a compact theme or the larger ones on mobile devices.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-sm k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-lg k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">DropDownButton</span></button>
        </button>
    </div>
</div>
```


## Shapes
To create different shapes, button utilizes two classes, one for the base structure and one for rounding.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-button-solid-base">
            <span class="k-button-text">Rectangle</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-sm k-button-solid-base">
            <span class="k-button-text">Rectangle Rounded Sm</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">Rectangle Rounded Md</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-lg k-button-solid-base">
            <span class="k-button-text">Rectangle Rounded Lg</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-pill k-button-solid-base">
            <span class="k-button-text">Pill</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-square k-button-solid-base">
            <span class="k-button-text">Square</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-square k-rounded-sm k-button-solid-base">
            <span class="k-button-text">Square Rounded Sm</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-square k-rounded-md k-button-solid-base">
            <span class="k-button-text">Square Rounded Md</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-square k-rounded-lg k-button-solid-base">
            <span class="k-button-text">Square Rounded Lg</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-square k-rounded-circle k-button-solid-base">
            <span class="k-button-text">Circle</span></button>
        </button>
    </div>
</div>
```

> Note: In case you provide rectangular structure with circle rounding, the output will be an ellipse as the width grows with the content and it is not equal to the height.

## States
DropDownButtons have several states by default.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
            <span class="k-button-text">Normal</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base k-hover">
            <span class="k-button-text">Hover</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base k-focus">
            <span class="k-button-text">Focus</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base k-active">
            <span class="k-button-text">Active</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base k-selected">
            <span class="k-button-text">Selected</span></button>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button
            type="button"
            class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base k-disabled">
            <span class="k-button-text">Disabled</span></button>
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

