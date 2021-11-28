import { globalDefaultProps } from '../component';
import { Picker, PickerStatic, InputInnerSpanStatic } from '../input/index';
import { InputValidationIconStatic, InputLoadingIconStatic, InputClearValueStatic } from '../input/index';
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
        'k-dropdown',
        {
            'k-icon-picker': showValue !== true && (valueIcon !== null || valueIconName !== '')
        }
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
                    <InputInnerSpanStatic {...inputAttributes} />
                    <InputValidationIconStatic {...props} />
                    <InputLoadingIconStatic {...props} />
                    <InputClearValueStatic {...props} />
                    <span className="k-select"><IconStatic name={arrowIconName} /></span>
                </span>
            </PickerStatic>
        );
    }

    return (
        <PickerStatic className={dropdownListClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputInnerSpanStatic {...inputAttributes} />
            {suffix}
            <InputValidationIconStatic {...props} />
            <InputLoadingIconStatic {...props} />
            <InputClearValueStatic {...props} />
            <ButtonStatic className="k-input-button" icon={arrowIconName} shape={null} rounded={null} size={size} fillMode={fillMode}></ButtonStatic>
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
    valueIcon: null,
    valueIconName: '',
    arrowIconName: 'arrow-s',

    showValidationIcon: true,
    showLoadingIcon: true,
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

    showValidationIcon: typeof true,
    showLoadingIcon: typeof true,
    showClearButton: typeof true,

    prefix: typeof '#fragment',
    suffix: typeof '#fragment',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'pill' ],

    fillMode: typeof [ null, 'solid', 'flat', 'outline' ],

    hover: typeof false,
    focus: typeof false,
    valid: typeof false,
    invalid: typeof false,
    loading: typeof false,
    required: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { DropdownList, DropdownListStatic };
