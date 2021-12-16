## Chip

```html
<!-- default rendering -->
<div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">
    <span class="k-chip-text">Chip Text</span>
</div>

<!-- canonical rendering -->
<div class="
    k-chip
    k-chip-${size}
    k-rounded-${rounded}
    k-chip-${fillMode}
    k-chip-${fillMode}-${themeColor}

    ${disabled && 'k-disabled'}>
        {icon !== '' && <span class="k-chip-icon k-icon k-i-${icon}"></span>}
        {avatar !== '' && <span class="k-chip-avatar k-avatar"></span>}
        <span className="k-chip-content">
            { children.length
                ? children
                : text &&
                <span className="k-chip-label">{text}</span>}
        </span>
        {removable && <span class="k-chip-icon k-icon k-i-${removeIcon}"></span>}
</div>
```

## ChipList

```html
<!-- default rendering -->
<div class="k-chip-list k-chip-list-md">
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">...</div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">...</div>
    <div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base">...</div>
</div>

<!-- canonical rendering -->
<div class="
    k-chip-list
    k-chip-${size}">
        <div class="k-chip" {...props}>...</div>
        <div class="k-chip" {...props}>...</div>
</div>
```
