---
title: MenuButton
category: components
slug: menu-button
position: 3
---

# Menu button

Menu buttons provide clickable UI functionality. When clicked, it displays a popup menu with action items and provides options for enabling or disabling its content, displaying icons and more.

Menu button may render the following content:

### Text Menu button

```html
<div class="k-dropdown-button">
    <button class="k-menu-button k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        <span class="k-button-text">Text</span>
        <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
    </button>
</div>
```

### Text Menu button with icon

Sometimes you might want to have icons for certain menu buttons to enhance the UX of the application as we recognize icons more easily than plain text. Menu button can have icons either before or after the text.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-icon k-icon k-i-folder"></span>
            <span class="k-button-text">Text button</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Text button</span>
            <span class="k-button-icon k-icon k-i-folder"></span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
</div>
```

### Icon Menu button

Icon menu buttons are commonly found in app bars and toolbars.

```html
<div class="k-dropdown-button">
    <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-button-icon k-icon k-i-cart"></span>
        <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
    </button>
</div>
```

### Menu button Arrow

In some cases, you might need a different arrow or no arrow at all. Be aware that a menu button without an arrow is practically indistinguishable from a button (push button)!

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
            <span class="k-button-text">Default arrow</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
            <span class="k-button-text">Custom arrow</span>
            <span class="k-button-arrow"><span class="k-icon k-i-chevron-down"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
            <span class="k-button-text">No arrow</span>
        </button>
    </div>
</div>
```

## Fill Modes

### Solid Menu buttons

They contain actions that are primary to the application.

```html
<div class="k-dropdown-button">
    <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
        <span class="k-button-text">Menu button</span>
        <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
    </button>
</div>
```

### Outline Menu buttons

They contain actions that are important but aren't the primary action in the application.

```html
<div class="k-dropdown-button">
    <button class="k-menu-button k-button k-button-outline k-button-md k-rounded-md k-button-outline-base">
        <span class="k-button-text">Menu button</span>
        <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
    </button>
</div>
```

### Flat Menu buttons

They are typically used for less-pronounced actions, including those located: in dialogs, in cards.

```html
<div class="k-dropdown-button">
    <button class="k-menu-button k-button k-button-flat k-button-md k-rounded-md k-button-flat-base">
        <span class="k-button-text">Menu button</span>
    </button>
</div>
```

## Theme Colors

Menu buttons include several predefined theme colors, each serving its own semantic purpose.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Base</span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-primary">
            <span class="k-button-text">Primary</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-secondary">
            <span class="k-button-text">Secondary</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-tertiary">
            <span class="k-button-text">Tertiary</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-info">
            <span class="k-button-text">Info</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-success">
            <span class="k-button-text">Success</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-warning">
            <span class="k-button-text">Warning</span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-error">
            <span class="k-button-text">Error</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-dark">
            <span class="k-button-text">Dark</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-light">
            <span class="k-button-text">Light</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-inverse">
            <span class="k-button-text">Inverse</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
</div>
```

## Sizes

Menu buttons can have various sizes. Use the smaller ones to create a compact theme or the larger ones on mobile devices.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-sm k-rounded-md k-button-solid-base">
            <span class="k-button-text">Small menu button</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Medium menu button</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-lg k-rounded-md k-button-solid-base">
            <span class="k-button-text">Large menu button</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
</div>
```

## States

Menu buttons have several states by default.

```html
<div class="k-d-flex k-gap-2">
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base">
            <span class="k-button-text">Normal</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-hover">
            <span class="k-button-text">Hover</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-focus">
            <span class="k-button-text">Focus</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-active">
            <span class="k-button-text">Active</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
        </button>
    </div>
    <div class="k-dropdown-button">
        <button class="k-menu-button k-button k-button-solid k-button-md k-rounded-md k-button-solid-base k-disabled">
            <span class="k-button-text">Disabled</span>
            <span class="k-button-arrow"><span class="k-icon k-i-arrow-s"></span></span>
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

