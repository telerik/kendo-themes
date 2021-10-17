import { globalDefaultProps } from '../component';
import { Input, InputStatic, InputInnerInputStatic } from '../input/index';
import { IconStatic } from '../icon/index';

class Autocomplete extends Input {
    render() {
        return <AutocompleteStatic {...this.props} />;
    }
}

function AutocompleteStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

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

        disabled
    };

    let autocompleteClasses = [
        ownClassName,
        'k-autocomplete'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-autocomplete',
            {
                'k-state-hover': hover === true,
                'k-state-focused': focus === true,
                'k-state-invalid': invalid === true,
                'k-state-required': required === true,
                'k-state-disabled': disabled === true
            }
        ];

        return (
            <InputStatic className={legacyClasses} {...htmlAttributes}>
                {prefix}
                <input type={type} className="k-input" {...inputAttributes} />
                {!disabled && showClearButton && value !== '' && <span className="k-clear-value"><IconStatic name="x" /></span>}
                {suffix}
            </InputStatic>
        );
    }

    return (
        <InputStatic className={autocompleteClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputInnerInputStatic {...inputAttributes} />
            {!disabled && showClearButton && value !== '' && <span className="k-clear-value"><IconStatic name="x" /></span>}
            {suffix}
        </InputStatic>
    );
}

AutocompleteStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off',

    showClearButton: true,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

AutocompleteStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text', 'password' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

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

export { Autocomplete, AutocompleteStatic };
