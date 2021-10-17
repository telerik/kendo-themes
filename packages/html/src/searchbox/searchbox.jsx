import { globalDefaultProps } from '../component';
import { Input, InputStatic, InputInnerInputStatic } from '../input/index';
import { IconStatic } from '../icon/index';

class Searchbox extends Input {
    render() {
        return <SearchboxInner {...this.props} />;
    }
}

function SearchboxInner(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

        showIcon,
        iconPosition,
        iconName,

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

    let searchBoxClasses = [
        ownClassName,
        'k-searchbox'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-searchbox',
            {
                'k-state-hover': hover === true,
                'k-state-focus': focus === true,
                'k-state-invalid': invalid === true,
                'k-state-required': required === true,
                'k-state-disabled': disabled === true
            }
        ];

        return (
            <InputStatic className={legacyClasses} {...htmlAttributes}>
                {prefix}
                {showIcon && iconPosition === 'leading' && <IconStatic name={iconName} className="k-input-icon" />}
                <input type={type} className="k-input" {...inputAttributes} />
                {showIcon && iconPosition === 'trailing' && <IconStatic name={iconName} className="k-input-icon" />}
                {suffix}
            </InputStatic>
        );
    }

    return (
        <InputStatic className={searchBoxClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            {showIcon && iconPosition === 'leading' && <IconStatic name={iconName} className="k-input-icon" />}
            <InputInnerInputStatic {...inputAttributes} />
            {showIcon && iconPosition === 'trailing' && <IconStatic name={iconName} className="k-input-icon" />}
            {suffix}
        </InputStatic>
    );
}

SearchboxInner.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: 'Search...',
    autocomplete: 'off',

    showIcon: true,
    iconPosition: 'leading',
    iconName: 'search',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

SearchboxInner.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text', 'password' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    showIcon: typeof true,
    iconPosition: typeof [ 'leading', 'trailing' ],
    iconName: typeof '',

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

export { Searchbox, SearchboxInner };
