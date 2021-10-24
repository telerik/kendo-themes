```html
<!-- default rendering -->
<span class="k-datepicker k-input k-input-md k-rounded-md k-input-solid">
    <input type="text" class="k-input-inner" value="..." placeholder="..." />
    <button type="button" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
        <span class="k-button-icon k-icon k-i-calendar"></span>
    </button>
</span>

<!-- canonical rendering -->
<span class="
    k-datepicker
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
    <button type="button" class="k-input-button k-button k-icon-button k-button-{size} k-button-{fillMode} k-button-{fillMode}-base">
        <span class="k-button-icon k-icon k-i-calendar"></span>
    </button>
</span>
```
