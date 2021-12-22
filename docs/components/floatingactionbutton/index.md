---
title: FloatingActionButton
category: components
slug: floatingactionbutton
position: 3
---

# FloatingActionButton

The FloatingActionButton specifies the primary or the most common actions in an application.

## Rendering

### Text

```html
<button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-text">Create</span>
</button>
```

### Text with icon

```html
<button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-icon k-icon k-i-plus"></span>
    <span class="k-fab-text">Create</span>
</button>
```

### Icon

```html
<button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-icon k-icon k-i-plus"></span>
</button>
```

## Sizes

### Small Size

```html
<button type="button" class="k-fab k-fab-rectangle k-fab-sm k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-icon k-icon k-i-plus"></span>
    <span class="k-fab-text">Create</span>
</button>
```

### Medium Size

```html
<button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-icon k-icon k-i-plus"></span>
    <span class="k-fab-text">Create</span>
</button>
```

### Large Size

```html
<button type="button" class="k-fab k-fab-rectangle k-fab-lg k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-icon k-icon k-i-plus"></span>
    <span class="k-fab-text">Create</span>
</button>
```

## Shapes
To create different shapes, the FloatingActionButton utilizes two classes, one for the base structure and one for rounding.

### Rectangle

```html
<div class="k-d-flex k-gap-2">
    <button type="button" class="k-fab k-fab-rectangle k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Rectangle</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-rounded-sm k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Rectangle Rounded SM</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-rounded-md k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Rectangle Rounded MD</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-rounded-lg k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Rectangle Rounded LG</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-rounded-full k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Rectangle Rounded Full</span>
    </button>
</div>
```

### Square

```html
<div class="k-d-flex k-gap-2">
    <button type="button" class="k-fab k-fab-square k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Square</span>
    </button>
    <button type="button" class="k-fab k-fab-square k-rounded-sm k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Square Rounded SM</span>
    </button>
    <button type="button" class="k-fab k-fab-square k-rounded-md k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Square Rounded MD</span>
    </button>
    <button type="button" class="k-fab k-fab-square k-rounded-lg k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Square Rounded LG</span>
    </button>
    <button type="button" class="k-fab k-fab-square k-rounded-full k-fab-sm k-fab-solid k-fab-solid-primary">
        <span class="k-fab-text">Square Rounded Full</span>
    </button>
</div>
```

## Theme Colors
FloatingActionButton includes several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Primary</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-secondary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Secondary</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-tertiary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Tertiary</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-info">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Info</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-success">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Success</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-warning">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Warning</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-error">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Error</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-dark">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Dark</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-light">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Light</span>
    </button>
    <button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-inverse">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Inverse</span>
    </button>
</div>
```

## Positioning

The FloatingActionButton provides options for aligning and positioning in relation to a web page, an HTML element, or a specific component.

### Fixed

Positions the FloatingActionButton related to the viewport. It always stays in the same place even if the page is scrolled.

```html
    <button type="button" class="k-fab k-pos-fixed k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Primary</span>
    </button>
```

### Absolute

Positions the FloatingActionButton related to the nearest positioned ancestor.

```html
    <button type="button" class="k-fab k-pos-absolute k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
        <span class="k-fab-text">Primary</span>
    </button>
```

### Alignment

Setting horizontal and vertical alignment through utility classes:

```html
<div class="k-d-flex">
    <button type="button" class="k-fab k-pos-fixed k-pos-top-start k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-top-center k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-top-end k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-middle-start k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-middle-end k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-bottom-start k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-bottom-center k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
    <button type="button" class="k-fab k-pos-fixed k-pos-bottom-end k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
        <span class="k-fab-icon k-icon k-i-plus"></span>
    </button>
</div>
```

# Customization

> TODO: write down specific customization use-cases


## SASS Variables

<import file="./packages/$THEME_NAME/scss/fab/_variables.scss" />

## Theme-specific content

<import file="./packages/$THEME_NAME/scss/fab/index.md" />
