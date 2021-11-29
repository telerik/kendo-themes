import { globalDefaultProps } from '../component/index';
import { Input, InputStatic, InputInnerInputStatic } from '../input/index';
import { InputValidationIconStatic, InputLoadingIconStatic, InputClearValueStatic } from '../input/index';
import { MultiSelectChipListStatic } from './index';

class MultiSelect extends Input {

    init() {
        let value = <></>;
        let children = this._props.children;
        let newChildren = [];

        children.forEach( child => {
            let component = child._component;

            if (component === 'MultiSelectChipList') {
                value.props.children.push.apply(value.props.children, child.props.children);
                return;
            }

            newChildren.push( child );
        });

        this._props.value = value;
        this._props.children = newChildren;
    }

    render() {
        return <MultiSelectStatic {...this.props} />;
    }
}

function MultiSelectStatic(props) {

    const {
        className: ownClassName,

        type,
        placeholder,
        autocomplete,

        prefix,
        suffix,
        value,

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
        placeholder,
        autocomplete,

        disabled
    };

    let multiselectClasses = [
        ownClassName,
        'k-multiselect'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-multiselect',
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
                <input type={type} className="k-input" {...inputAttributes} />
                <InputValidationIconStatic {...props} />
                <InputLoadingIconStatic {...props} />
                <InputClearValueStatic {...props} />
            </InputStatic>
        );
    }

    return (
        <InputStatic className={multiselectClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <MultiSelectChipListStatic {...props}>
                {value}
                <InputInnerInputStatic {...inputAttributes} />
            </MultiSelectChipListStatic>
            {suffix}
            <InputValidationIconStatic {...props} />
            <InputLoadingIconStatic {...props} />
            <InputClearValueStatic {...props} />
        </InputStatic>
    );
}

MultiSelectStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    placeholder: '',
    autocomplete: 'off',

    showValidationIcon: true,
    showLoadingIcon: true,
    showClearButton: true,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

MultiSelectStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text', 'password' ],
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    showValidationIcon: typeof true,
    showLoadingIcon: typeof true,
    showClearButton: typeof true,

    prefix: typeof '#fragment',
    suffix: typeof '#fragment',
    value: typeof '#fragment',

    size: typeof [ 'none', 'small', 'medium', 'large' ],
    rounded: typeof [ 'none', 'small', 'medium', 'large', 'pill' ],

    fillMode: typeof [ 'none', 'solid', 'flat', 'outline' ],

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

export { MultiSelect, MultiSelectStatic };
