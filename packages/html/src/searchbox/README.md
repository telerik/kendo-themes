```html
<!-- default rendering -->
<span class="k-searchbox k-input k-input-md k-rounded-md k-input-solid">
    <input type="text" class="k-input-inner" value="..." placeholder="..." />
    <span class="k-input-icon k-icon k-i-search"></span>
</span>

<!-- canonical rendering -->
<span class="
    k-searchbox
    k-input
    k-input-${size}
    k-rounded-${rounded}
    k-input-${fillMode}

    ${valid && 'k-valid'}
    ${invalid && 'k-invalid'}
    ${required && 'k-required'}
    ${disabled && 'k-disabled'}
">
    {showIcon && iconPosition === 'leading' && <span class="k-input-icon k-icon k-i-{iconName}"></span>}
    <input type={type} class="k-input-inner" value={value} placeholder={placeholder} disabled={disabled} />}
    {text !== '' <span class="k-clear-value"></span>}
    {showIcon && iconPosition === 'trailing' && <span class="k-input-icon k-icon k-i-{iconName}"></span>}
</span>
```
