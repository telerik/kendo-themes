---
title: Toolbar
category: components
slug: toolbar
position: 3
---

# Toolbar

The Toolbar enables the user to build containers that hold different elements.

## Rendering

### Toolbar

```html
<div class="k-toolbar k-toolbar-md k-toolbar-resizable">
    <button class="k-toolbar-button k-button k-button-md k-button-solid k-button-solid-base k-rounded-md">
        <span class="k-button-text">Button</span>
    </button>
    <div class="k-separator"></div>
    <div class="k-toolbar-button-group k-button-group">
        <button class="k-toolbar-button k-button k-button-md k-button-solid k-button-solid-base k-rounded-md">
            <span class="k-button-icon k-icon k-i-align-left"></span>
            <span class="k-button-text">Left</span>
        </button>
        <button class="k-toolbar-button k-button k-button-md k-button-solid k-button-solid-base k-rounded-md">
            <span class="k-button-icon k-icon k-i-align-center"></span>
            <span class="k-button-text">Center</span>
        </button>
        <button class="k-toolbar-button k-button k-button-md k-button-solid k-button-solid-base k-rounded-md">
            <span class="k-button-icon k-icon k-i-align-right"></span>
            <span class="k-button-text">Right</span>
        </button>
    </div>
    <div class="k-separator"></div>
    <div class="k-toolbar-item">
        <label>Label:</label>
        <input>
    </div>
    <button class="k-toolbar-overflow-button k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
        <span class="k-button-icon k-icon k-i-more-vertical"></span>
    </button>
</div>
```

* Rendering for the Overflow Popup/Menu:

```html
<div class="k-animation-container">
    <div class="k-toolbar-popup k-popup k-menu-popup">
        <ul class="k-menu-group k-menu-group-md">
            <li class="k-item k-menu-item">
                <span class="k-link k-menu-link">
                    <span class="k-menu-link-text">Button</span>
                </span>
            </li>
            <li class="k-item k-menu-item">
                <div class="k-separator k-separator-horizontal"></div>
            </li>
            <li class="k-item k-menu-item">
                <span class="k-link k-menu-link">
                    <span class="k-icon k-i-align-left"></span>
                    <span class="k-menu-link-text">Left</span>
                </span>
            </li>
            <li class="k-item k-menu-item">
                <span class="k-link k-menu-link">
                    <span class="k-icon k-i-align-center"></span>
                    <span class="k-menu-link-text">Center</span>
                </span>
            </li>
            <li class="k-item k-menu-item">
                <span class="k-link k-menu-link">
                    <span class="k-icon k-i-align-right"></span>
                    <span class="k-menu-link-text">Right</span>
                </span>
            </li>
        </ul>
    </div>
</div>
```

## Sizes
The Toolbar can have various sizes. You can choose between `small`, `medium` and `large`.

```html
<!-- small toolbar -->
<div class="k-toolbar k-toolbar-sm">
    ...
</div>

<!-- medium toolbar -->
<div class="k-toolbar k-toolbar-md">
    ...
</div>

<!-- large toolbar -->
<div class="k-toolbar k-toolbar-lg">
    ...
</div>
```


## States
The Toolbar has the following native states - `focus`.

```html
<div class="k-toolbar k-toolbar-md k-focus">
    ...
</div>
```


## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/toolbar/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/toolbar/index.md" />
