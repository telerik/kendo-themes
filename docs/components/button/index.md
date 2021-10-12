---
title: Button
category: components
slug: button
position: 3
---

# Button

Buttons provide a clickable UI functionality, and you can configure it to perform any action or trigger an event.

Buttons may render the following content:

### Text button

```html
<button
    type="button"
    class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
    <span class="k-button-text">Text button</span></button>
</button>
```
### Text button with icon

Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize icons more easily than plain text. Buttons can have icons either before or after the text.

```html
<div class="k-d-flex k-gap-2">
    <button
        type="button"
        class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
        <span class="k-button-icon k-icon k-i-folder"></span>
        <span class="k-button-text">Text button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
        <span class="k-button-text">Text button</span></button>
        <span class="k-button-icon k-icon k-i-folder"></span>
    </button>
</div>
```

### Icon Button
Icon buttons are commonly found in app bars and toolbars.

```html
<button
    type="button"
    class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
    <span class="k-button-icon k-icon k-i-cart"></span>
</button>
```

## Fill Modes

### Solid Buttons
They contain actions that are primary to the application.

```html
<button
    type="button"
    class="k-button k-button-solid k-button-md k-button-rectangle k-rounded-md k-button-solid-base">
    <span class="k-button-text">Button</span></button>
</button>
```

### Outline Buttons
They contain actions that are important but aren't the primary action in the application.

```html
<button
    type="button"
    class="k-button k-button-outline k-button-md k-button-rectangle k-rounded-md k-button-outline-base">
    <span class="k-button-text">Button</span></button>
</button>
```

### Flat Buttons
They are typically used for less-pronounced actions, including those located: in dialogs, in cards.

```html
<button
    type="button"
    class="k-button k-button-flat k-button-md k-button-rectangle k-rounded-md k-button-flat-base">
    <span class="k-button-text">Button</span></button>
</button>
```

### Link Buttons
They trigger an event that navigates to another page.

```html
<button
    type="button"
    class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base">
    <span class="k-button-text">Button</span></button>
</button>
```

## Theme Colors
Buttons include several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-primary">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-secondary">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-tertiary">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-info">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-success">
        <span class="k-button-text">Button</span></button>
    </button>
<button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-warning">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-error">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-dark">
        <span class="k-button-text">Button</span></button>
    </button>
<button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-light">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-inverse">
        <span class="k-button-text">Button</span></button>
    </button>
</div>
```

## Sizes
Buttons can have various sizes. Use the smaller ones to create a compact theme or the larger ones on mobile devices.

```html
<div class="k-d-flex k-gap-2">
    <button
        type="button"
        class="k-button k-button-link k-button-sm k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Button</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-lg k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Button</span></button>
    </button>
</div>
```


## Shapes
To create different shapes, button utilizes two classes, one for the base structure and one for rounding.

```html
<div class="k-d-flex k-gap-2">
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-button-link-base">
        <span class="k-button-text">Rectangle</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-sm k-button-link-base">
        <span class="k-button-text">Rectangle Rounded Sm</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Rectangle Rounded Md</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-lg k-button-link-base">
        <span class="k-button-text">Rectangle Rounded Lg</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-pill k-button-link-base">
        <span class="k-button-text">Pill</span></button>
    </button>
<button
        type="button"
        class="k-button k-button-link k-button-md k-button-square k-button-link-base">
        <span class="k-button-text">Square</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-square k-rounded-sm k-button-link-base">
        <span class="k-button-text">Square Rounded Sm</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-square k-rounded-md k-button-link-base">
        <span class="k-button-text">Square Rounded Md</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-square k-rounded-lg k-button-link-base">
        <span class="k-button-text">Square Rounded Lg</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-square k-rounded-circle k-button-link-base">
        <span class="k-button-text">Circle</span></button>
    </button>
</div>
```

> Note: In case you provide rectangular structure with circle rounding, the output will be an ellipse as the width grows with the content and it is not equal to the height.

## States
Buttons have several states by default and one special selected state if the button is toggleable.

```html
<div class="k-d-flex k-gap-2">
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base">
        <span class="k-button-text">Normal</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base k-hover">
        <span class="k-button-text">Hover</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base k-focus">
        <span class="k-button-text">Focus</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base k-active">
        <span class="k-button-text">Active</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base k-selected">
        <span class="k-button-text">Selected</span></button>
    </button>
    <button
        type="button"
        class="k-button k-button-link k-button-md k-button-rectangle k-rounded-md k-button-link-base k-disabled">
        <span class="k-button-text">Disabled</span></button>
    </button>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/button/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/button/index.md" />

