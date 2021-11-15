```html
<!-- default rendering -->
<span class="k-dateinput k-input k-input-md k-rounded-md k-input-solid">
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
    k-dateinput
    k-input
    k-input-{size}
    k-rounded-{rounded}
    k-input-{fillMode}

    {valid && 'k-valid'}
    {invalid && 'k-invalid'}
    {loading && 'k-loading'}
    {required && 'k-required'}
    {disabled && 'k-disabled'}
">
    {showInputIcon && inputIconName !== '' && <span class="k-input-icon k-i-icon k-i-{inputIconName}"></span>}
    {inputPrefix && <span class="k-input-prefix">...</span>}
    <input type={type} class="k-input-inner" value={value} placeholder={placeholder} disabled={disabled} />
    {inputPrefix && <span class="k-input-suffix">...</span>}
    {showValidationIcon && valid && <span class="k-validation-icon k-icon k-i-check"></span>}
    {showValidationIcon && invalid && <span class="k-validation-icon k-icon k-i-warning"></span>}
    {showLoadingIcon && loading && <span class="k-icon k-i-loading"></span>}
    {showClearValue && text !== '' && <span class="k-clear-value"><span class="k-icon k-i-x"></span></span>}
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
