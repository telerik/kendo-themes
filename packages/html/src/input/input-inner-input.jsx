import { Component, globalDefaultProps } from '../component';

class InputInnerInput extends Component {
    render() {
        return <InputInnerInputStatic {...this.props} />;
    }
}

function InputInnerInputStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let ariaAttr = aria
        ? {}
        : {};

    let inputClasses = [
        ownClassName,
        'k-input-inner'
    ];

    let legacyClasses = [
        ownClassName,
        'k-input'
    ];

    htmlAttributes.value = value;
    htmlAttributes.placeholder = placeholder;
    htmlAttributes.autocomplete = autocomplete;

    if (legacy) {
        return (
            <input type={type} className={legacyClasses} {...ariaAttr} {...htmlAttributes} />
        );
    }

    return (
        <input type={type} className={inputClasses} {...ariaAttr} {...htmlAttributes} />
    );
}

InputInnerInputStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off'
};

InputInnerInputStatic.propTypes = {
    className: typeof '',

    type: typeof [],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { InputInnerInput, InputInnerInputStatic };
