---
title: Avatar
category: components
slug: avatar
position: 3
---

# Avatar

The Avatar enables the user to display images, icons or initials representing people or other entities.

## Rendering

### Image

```html
<div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-primary">
    <span class="k-avatar-image">
        <img src="avatar.jpg" />
    </span>
</div>
```

### Icon

```html
<div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-primary">
    <span class="k-avatar-icon">
        <span class="k-icon k-i-x"></span>
    </span>
</div>
```

### Text

```html
<div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-primary">
    <span class="k-avatar-text">JD</span>
</div>
```

## Sizes
The Avatar has predefined sizes - small, medium or large.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-avatar k-avatar-sm k-rounded-circle k-avatar-solid k-avatar-solid-primary">
        <span class="k-avatar-image">
            <img src="avatar.jpg" />
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-primary">
        <span class="k-avatar-image">
            <img src="avatar.jpg" />
        </span>
    </div>
    <div class="k-avatar k-avatar-lg k-rounded-circle k-avatar-solid k-avatar-solid-primary">
        <span class="k-avatar-image">
            <img src="avatar.jpg" />
        </span>
    </div>
</div>
```

## Fill Modes
The Avatar supports two appearance fill styles - `solid` and `outline`.

### Solid

```html
<div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-primary">
    <span class="k-avatar-icon">
        <span class="k-icon k-i-user"></span>
    </span>
</div>
```

### Outline

```html
<div class="k-avatar k-avatar-md k-rounded-circle k-avatar-outline k-avatar-bordered k-avatar-outline-primary">
    <span class="k-avatar-icon">
        <span class="k-icon k-i-user"></span>
    </span>
</div>
```

## Border
The Avatar allows you to specify whether or not to render an additional border around its content.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-outline k-avatar-bordered k-avatar-outline-primary">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>

    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-outline k-avatar-outline-primary">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
</div>
```

## Theme Colors
Avatars include several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-primary">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-secondary">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-tertiary">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-info">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-success">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-warning">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-error">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-dark">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-light">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
    <div class="k-avatar k-avatar-md k-rounded-circle k-avatar-solid k-avatar-solid-inverse">
        <span class="k-avatar-icon">
            <span class="k-icon k-i-user"></span>
        </span>
    </div>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/avatar/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/avatar/index.md" />
