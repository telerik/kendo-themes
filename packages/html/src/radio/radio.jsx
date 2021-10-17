import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';

class Radio extends Component {
    render() {
        return <RadioStatic {...this.props} />;
    }
}

function RadioStatic(props) {

    const {
        className: ownClassName,

        checked,

        size,

        hover,
        focus,
        invalid,
        disabled,

        aria,
        legacy,

        ...htmlAttributes

    } = props;

    htmlAttributes.checked = checked;
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    let radioClasses = [
        ownClassName,
        'k-radio',
        styles.sizeClass( size, 'k-radio' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-invalid': invalid === true,
            'k-disabled': disabled === true,
            'k-checked': checked === true,
        }
    ];

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-radio',
            {
                'k-state-hover': hover === true,
                'k-state-focus': focus === true,
                'k-state-invalid': invalid === true,
                'k-state-disabled': disabled === true,
                'k-state-checked': checked === true,
            }
        ];

        return <input type="radio" className={legacyClasses} {...ariaAttr} {...htmlAttributes}/>;
    }

    return <input type="radio" className={radioClasses} {...ariaAttr} {...htmlAttributes}/>;
}

RadioStatic.defaultProps = {
    ...globalDefaultProps,

    id: '',
    name: '',

    size: 'medium'
};

RadioStatic.propTypes = {
    className: typeof '',

    id: typeof '',
    name: typeof '',
    value: typeof '',

    checked: typeof false,

    size: typeof [ 'none', 'small', 'medium', 'large' ],

    hover: typeof false,
    focus: typeof false,
    valid: typeof false,
    invalid: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Radio, RadioStatic };
