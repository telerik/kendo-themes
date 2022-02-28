import { globalDefaultProps } from '../component/index';
import { Combobox, ComboboxStatic } from '../combobox/index';

class DropdownGrid extends Combobox {
    render() {
        return <DropdownGridStatic {...this.props} />;
    }
}

function DropdownGridStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

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

    let dropdownGridClasses = [
        ownClassName,
        'k-dropdowngrid'
    ];

    return (
        <ComboboxStatic className={dropdownGridClasses} {...props}></ComboboxStatic>
    );
}

DropdownGridStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off',

    showValidationIcon: true,
    showLoadingIcon: true,
    showClearButton: true,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

DropdownGridStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    showValidationIcon: typeof true,
    showLoadingIcon: typeof true,
    showClearButton: typeof true,

    prefix: typeof '#fragment',
    suffix: typeof '#fragment',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],

    fillMode: typeof [ null, 'solid', 'flat', 'outline' ],

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

export { DropdownGrid, DropdownGridStatic };
