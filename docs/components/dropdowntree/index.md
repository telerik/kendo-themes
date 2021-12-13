---
title: DropDownTree
category: components
slug: dropdowntree
position: 3
---

# DropDownTree

DropDownTree is a form component that renders data in a tree-like structure and lets you choose a single predefined value. It is a richer version of the <select> element and supports data binding, filtering and templates.

## Rendering

### Default Rendering

```html
<kendo-treeview class="k-widget k-treeview k-treeview-md">
    <ul class="k-treeview-lines k-treeview-group">
        <li class="k-treeview-item">
            <div class="k-treeview-top">
                <span class="k-treeview-toggle">
                    <i is="Icon" name="expand"></i>
                </span>
                <span class="k-treeview-leaf">...</span>
            </div>
        </li>
        <li class="k-treeview-item">
          <div class="k-treeview-mid">
              <span class="k-treeview-toggle">
                  <i is="Icon" name="expand"></i>
              </span>
              <span class="k-treeview-leaf k-hover">...</span>
          </div>
       </li>
       <li class="k-treeview-item">
          <div class="k-treeview-bot">
              <span class="k-treeview-toggle">
                  <i is="Icon" name="collapse"></i>
              </span>
              <span class="k-treeview-leaf">...</span>
          </div>
       </li>
    </ul>
</kendo-treeview>
```

### In popup

Simply place a kendo-treeview or data list inside a popup:

```html
<div class="k-popup k-dropdowntree-popup">
    ...
</div>
```


## Sizes

### Small Size

```html
<kendo-treeview class="k-widget k-treeview k-treeview-sm">
    ...
</kendo-treeview>
```

### Medium Size

```html
<kendo-treeview class="k-widget k-treeview k-treeview-md">
    ...
</kendo-treeview>
```

### Large Size

```html
<kendo-treeview class="k-widget k-treeview k-treeview-lg">
    ...
</kendo-treeview>
```


# Customization

> TODO: write down specific customization use-cases


## SASS Variables

<import file="./packages/$THEME_NAME/scss/treeview/_variables.scss" />

## Theme-specific content

<import file="./packages/$THEME_NAME/scss/treeview/index.md" />