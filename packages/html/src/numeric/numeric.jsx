import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';
import { InputStatic } from '../input/index';
import { SpinButtonStatic } from '../spinbutton/index';

class NumericTextbox extends Component {

    render() {
        return <NumericTextboxStatic {...this.props} />;
    }
}

function NumericTextboxStatic(props) {

    const {
        className: ownClassName,

        value,
        placeholder,

        showSpinButtons,

        size,
        rounded,

        fillMode,

        hover,
        focus,
        invalid,
        required,
        disabled,

        aria,
        legacy,

        ...htmlAttributes

    } = props;

    const inputAttributes = {
        type: 'text',
        value,
        placeholder,

        className: "k-formatted-value",

        disabled
    };

    let ariaAttr = aria
        ? {}
        : {};

    let numericClasses = [
        ownClassName,
        'k-numerictextbox',
        styles.sizeClass( size, 'k-numerictextbox' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-numerictextbox' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-invalid': invalid === true,
            'k-required': required === true,
            'k-disabled': disabled === true
        }
    ];

    let legacyClasses = [
        ownClassName,
        'k-widget',
        'k-numerictextbox',
        {
            'k-state-disabled': disabled === true
        }
    ];

    let legacyWrapClasses = [
        ownClassName,
        'k-numeric-wrap',
        {
            'k-state-hover': hover === true,
            'k-state-focused': focus === true,
            'k-state-invalid': invalid === true
        }
    ];

    if (legacy) {
        return (
            <span className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <span className={legacyWrapClasses}>
                    <InputStatic {...inputAttributes} />
                    {showSpinButtons === true && <SpinButtonStatic />}
                </span>
            </span>
        );
    }

    return (
        <span className={numericClasses} {...ariaAttr} {...htmlAttributes}>
            <InputStatic {...inputAttributes} />
            {showSpinButtons === true && <SpinButtonStatic className="k-input-spinner k-numeric-spinner" />}
        </span>
    );
}

NumericTextboxStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',

    showSpinButtons: true,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

NumericTextboxStatic.propTypes = {
    type: typeof [ 'text' ],
    value: typeof '',
    placeholder: typeof '',

    showSpinButtons: typeof true,

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

    className: typeof '',
    htmlAttributes: typeof []
};

export { NumericTextbox, NumericTextboxStatic };

