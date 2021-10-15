```html
<!-- default rendering -->
<span class="k-numerictextbox k-input k-input-md k-rounded-md k-input-solid">
    <input type="text" class="k-input-inner" value="..." placeholder="..." />
    <span class="k-input-spinner k-spin-button">
        <button class="k-spinner-increase k-button k-icon-button k-button-solid k-button-solid-base">
            <span class="k-button-icon k-icon k-i-arrow-n"></span>
        </button>
        <button class="k-spinner-decrease k-button k-icon-button k-button-solid k-button-solid-base">
            <span class="k-button-icon k-icon k-i-arrow-s"></span>
        </button>
    </span>
</span>

<!-- canonical rendering -->
<span class="
    k-numerictextbox
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
    {showSpinButton &&
        <span class="k-input-spinner k-spin-button">
            <button class="k-spinner-increase k-button k-icon-button k-button-solid k-button-solid-base">
                <span class="k-button-icon k-icon k-i-arrow-n"></span>
            </button>
            <button class="k-spinner-decrease k-button k-icon-button k-button-solid k-button-solid-base">
                <span class="k-button-icon k-icon k-i-arrow-s"></span>
            </button>
        </span>
    }
</span>
```
