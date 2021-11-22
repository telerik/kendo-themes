---
title: List
category: components
slug: list
position: 3
---

# List

The List enables the user to build continuous, vertical indexes of items.

## Rendering

### Normal List

```html
<div class="k-list k-list-md">
    <div class="k-list-header">Group 1</div>
    <div class="k-list-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.2</span>
            </li>
            <li class="k-list-group-item">
                <span class="k-list-item-text">Group 2</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.2</span>
            </li>
        </ul>
    </div>
</div>
```

### List with Virtualization

```html
<div class="k-list k-virtual-list k-list-md">
    <div class="k-list-header">Group 1</div>
    <div class="k-list-content k-virtual-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.2</span>
            </li>
            <li class="k-list-group-item">
                <span class="k-list-item-text">Group 2</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.2</span>
            </li>
        </ul>
    </div>
</div>
```


## Sizes
The List can have various sizes. You can choose between `small`, `medium` and `large`.

```html
<!-- small list -->
<div class="k-list k-list-sm">
    ...
</div>

<!-- medium list -->
<div class="k-list k-list-md">
    ...
</div>

<!-- large list -->
<div class="k-list k-list-lg">
    ...
</div>
```


## States
The List items have the following native states - `hover`, `focus`, `selected` and `disabled`.

```html
<div class="k-list k-list-md">
    <div class="k-list-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Normal</span>
            </li>
            <li class="k-list-item k-hover">
                <span class="k-list-item-text">Hover</span>
            </li>
            <li class="k-list-item k-focus">
                <span class="k-list-item-text">Focus</span>
            </li>
            <li class="k-list-item k-selected">
                <span class="k-list-item-text">Selected</span>
            </li>
            <li class="k-list-item k-disabled">
                <span class="k-list-item-text">Disabled</span>
            </li>
        </ul>
    </div>
</div>
```


## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/list/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/list/index.md" />
