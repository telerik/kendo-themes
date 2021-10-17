```html
<!-- default rendering -->
<span class="k-autocomplete k-input k-input-md k-rounded-md k-input-solid">
    <input type="text" class="k-input-inner" value="..." placeholder="..." />
</span>

<!-- canonical rendering -->
<span class="
    k-autocomplete
    k-input
    k-input-${size}
    k-rounded-${rounded}
    k-input-${fillMode}

    ${valid && 'k-valid'}
    ${invalid && 'k-invalid'}
    ${required && 'k-required'}
    ${disabled && 'k-disabled'}
">
    <input type={type} class="k-input-inner" value={value} placeholder={placeholder} disabled={disabled} />
    {valid && <span class="k-input-icon k-icon k-i-check"></span>}
    {invalid && <span class="k-input-icon k-icon k-i-check"></span>}
</span>
```
