import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Checkbox extends Component {
    render() {
        return <CheckboxStatic {...this.props} />;
    }
}

function CheckboxStatic(props) {

    const {
        className: ownClassName,

        checked,
        indeterminate,

        size,
        rounded,

        hover,
        focus,
        invalid,
        required,
        disabled,

        aria,

        ...htmlAttributes

    } = props;

    htmlAttributes.checked = checked;
    htmlAttributes.indeterminate = indeterminate;
    htmlAttributes.required = required;
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    const isIndeterminate = checked === false && indeterminate === true;

    let checkboxClasses = [
        ownClassName,
        'k-checkbox',
        styles.sizeClass( size, 'k-checkbox' ),
        styles.roundedClass( rounded ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-invalid': invalid === true,
            'k-required': required === true,
            'k-disabled': disabled === true,
            'k-checked': checked === true,
            'k-indeterminate': isIndeterminate,
        }
    ];

    return (
        <span className="k-checkbox-wrap"><input type="checkbox" className={checkboxClasses} {...ariaAttr} {...htmlAttributes} /></span>
    );
}

CheckboxStatic.defaultProps = {
    ...globalDefaultProps,

    id: '',
    name: '',

    size: 'medium',
    rounded: 'medium'
};

CheckboxStatic.propTypes = {
    className: typeof '',

    id: typeof '',
    name: typeof '',
    value: typeof '',

    checked: typeof false,
    indeterminate: typeof false,

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large' ],

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


export { Checkbox, CheckboxStatic };
