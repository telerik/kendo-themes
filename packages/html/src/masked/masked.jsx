import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';
import { IconStatic } from '../icon/index';
import { InputStatic } from '../input/index';

class MaskedTextbox extends Component {

    render() {
        return <MaskedTextboxStatic {...this.props} />;
    }
}

function MaskedTextboxStatic(props) {

    const {
        className: ownClassName,

        value,
        placeholder,

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

        disabled
    };

    let ariaAttr = aria
        ? {}
        : {};

    let maskedClasses = [
        ownClassName,
        'k-maskedtextbox',
        styles.sizeClass( size, 'k-maskedtextbox' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-maskedtextbox' ),
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
        'k-maskedtextbox',
        {
            'k-state-disabled': disabled === true
        }
    ];

    let legacyWrapClasses = [
        ownClassName,
        'k-textbox',
        {
            'k-state-hover': hover === true,
            'k-state-focused': focus === true,
            'k-state-invalid': invalid === true
        }
    ];

    if (legacy) {
        return (
            <span className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <input className={legacyWrapClasses} {...inputAttributes} />
                {invalid && <IconStatic name="warning" />}
            </span>
        );
    }

    return (
        <span className={maskedClasses} {...ariaAttr} {...htmlAttributes}>
            <InputStatic {...inputAttributes} />
            {invalid && <IconStatic className="k-input-icon" name="warning" />}
        </span>
    );
}

MaskedTextboxStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

MaskedTextboxStatic.propTypes = {
    type: typeof [ 'text' ],
    value: typeof '',
    placeholder: typeof '',

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

export { MaskedTextbox, MaskedTextboxStatic };

