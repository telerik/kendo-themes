import { globalDefaultProps } from '../component';
import { Picker, PickerStatic, InputInnerSpanStatic } from '../input/index';
import { ButtonStatic } from '../button/index';
import { IconStatic } from '../icon/index';

class DropdownList extends Picker {
    render() {
        return <DropdownListStatic {...this.props} />;
    }
}

function DropdownListStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

        showValue,
        valueIcon,
        valueIconName,
        arrowIconName,

        showClearButton,

        prefix,
        suffix,

        size,
        rounded,

        fillMode,

        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    htmlAttributes.size = size;
    htmlAttributes.rounded = rounded;
    htmlAttributes.fillMode = fillMode;
    htmlAttributes.hover = hover;
    htmlAttributes.focus = focus;
    htmlAttributes.valid = valid;
    htmlAttributes.invalid = invalid;
    htmlAttributes.required = required;
    htmlAttributes.disabled = disabled;

    const inputAttributes = {
        type,
        value,
        placeholder,
        autocomplete,

        showValue,
        valueIcon,
        valueIconName,

        disabled
    };

    let dropdownListClasses = [
        ownClassName,
        'k-dropdown'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-dropdown',
            {
                'k-state-disabled': disabled === true
            }
        ];

        let legacyWrapClasses = [
            'k-dropdown-wrap',
            {
                'k-state-hover': hover === true,
                'k-state-focused': focus === true,
                'k-state-invalid': invalid === true
            }
        ];

        return (
            <PickerStatic className={legacyClasses} {...htmlAttributes}>
                <span className={legacyWrapClasses}>
                    {prefix}
                    <InputInnerSpanStatic {...inputAttributes} />
                    {!disabled && showClearButton && value !== '' && <span className="k-clear-value"><IconStatic name="x" /></span>}
                    {suffix}
                    <span className="k-select"><IconStatic name={arrowIconName} /></span>
                </span>
            </PickerStatic>
        );
    }

    return (
        <PickerStatic className={dropdownListClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputInnerSpanStatic {...inputAttributes} />
            {!disabled && showClearButton && value !== '' && <span className="k-clear-value"><IconStatic name="x" /></span>}
            {suffix}
            <ButtonStatic className="k-input-button" icon={arrowIconName} rounded="none" size={size} fillMode={fillMode}></ButtonStatic>
        </PickerStatic>
    );
}

DropdownListStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off',

    showValue: true,
    valueIconName: '',
    arrowIconName: 'arrow-s',

    showClearButton: false,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

DropdownListStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text', 'password' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    showValue: typeof true,
    valueIcon: '#fragment',
    valueIconName: typeof '',
    arrowIconName: typeof '',

    showClearButton: typeof true,

    prefix: typeof '#fragment',
    suffix: typeof '#fragment',

    size: typeof [ 'none', 'small', 'medium', 'large' ],
    rounded: typeof [ 'none', 'small', 'medium', 'large', 'pill' ],

    fillMode: typeof [ 'none', 'solid', 'flat', 'outline' ],

    hover: typeof false,
    focus: typeof false,
    valid: typeof false,
    invalid: typeof false,
    required: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { DropdownList, DropdownListStatic };
